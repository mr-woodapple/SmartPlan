// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const axios = require('axios');
const pdf = require('pdf-parse');
var fs = require('fs');

// import local classes
const SubstitutionObject = require('./models/SubstitutionObject.js');
const Lesson = require('./models/Lesson.js');


//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!




/**************************************************************************
*************************** handle HTTP METHODS ***************************
**************************************************************************/


/******************************* GET CALLS ******************************/
// returns all items
app.get('/getData', function(req, res) {
    const url = 'http://geschuetzt.bszet.de/s-lk-vw/Vertretungsplaene/vertretungsplan-bs-it.pdf';
    const username = 'bsz-et-2324';
    const password = 'schulleiter#23';
    fetchPDF(url, username, password)
        .then(pdfData => parsePDF(pdfData))
        .then(data => {
            // Now you have your parsed data.
            // data.text is the content of the pdf
            console.log(data.text);

            // Reverse the order of lines
            //const reversedText = data.text.split('\n').reverse().join('\n');
            
            const jsonString = JSON.stringify(data.text);
            fs.writeFile('generatedData/SubstitutionPlan.json', jsonString, err => {
                if (err) {
                    console.log('Error writing file', err);
                } else {
                    console.log('Successfully wrote file');
                }
            });
        })
        .catch(error => console.error(error));
});


async function fetchPDF(url, username, password) {
    let pdfData;

    try {
        const response = await axios.get(url, {
            auth: {
                username: username,
                password: password
            },
            responseType: 'arraybuffer', // this is important for receiving the pdf as a binary
        });

        pdfData = response.data;
    } catch (error) {
        throw error;
    }

    return pdfData;
}

async function parsePDF(pdfData) {
    try {
        const data = await pdf(pdfData);
        const paragraphs = data.text.split('\n\n'); // Split by paragraphs
        const reversedParagraphs = paragraphs.map(paragraph => {
            const lines = paragraph.split('\n').reverse().join('\n');
            return lines;
        });
        const reversedText = reversedParagraphs.join('\n\n');
        return { text: reversedText };
    } catch (error) {
        throw error;
    }
}



//
//
// New part I worked on during Christmas
//
//

app.get('/processJSON', function(req, res) {

    // Read the file from local storage, hand it over to new function
    getLocalPDF()
        .then(reversedText => {
            prepareJSONObjects(reversedText);
        });    
});


// Loads a PDF from local storage, performs formatting on it
async function getLocalPDF() {  
    let PDFFileFromStorage = fs.readFileSync('/Users/jasperholzapfel/Documents/Coden/JS/SmartPlan/server/DEMO/vertretungsplan-bs-it_2023-11-23.pdf');

    return pdf(PDFFileFromStorage)
        .then(function(data) {

            // Split the text into an array of lines
            const lines = data.text.split('\n');

            // Reverse the order of fields within each line from the "..." sequence
            const reversedLines = lines.map(line => {
                const fields = line.split('...').reverse();
                return fields.join('...');
            });

            // Reverse the order of lines
            const reversedText = reversedLines.reverse().join('\n');

            // Debug print
            return reversedText;
        });
}


function prepareJSONObjects(reversedText) {

    // regex pattern (splits the ): 
    const pattern = /(C_[A-Z]+ \d{1,2}\/\d{1,2}\n)/g;

    // Use the pattern to split the input string
    const resultArray = reversedText.split(pattern);

    // remove first entry from array (as it's empty for some reason, not sure if this is necessary all the time)
    resultArray.shift();

    // merge two array entries into new object
    for (let i = 0; i < resultArray.length - 1; i += 2) {
        resultArray[i] += resultArray[i + 1];
    }
    
    // Remove the following entry after merging
    for(var i = 0; i < resultArray.length; i++) {
        resultArray.splice(i+1,1);
    }

    // Further processing per entry
    resultArray.forEach(element => {
        createIndividualJSONObject(element);
    });

    // console.log(resultArray);
}

function createIndividualJSONObject(rawText) {
    // transform raw string into substitution object
    const substi = new SubstitutionObject()

    // split the rawText into individual lines in an array
    const individualLines = rawText.split(/\r?\n/g);

    substi.className = individualLines[0];
    // ignore line 1 and 2
    const lessonObject = individualLines[3].split(/\.\.\./);
    console.log(lessonObject);


    //console.log(substi);
}


// bind server localhost to port 3000
const port = 3000;
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});