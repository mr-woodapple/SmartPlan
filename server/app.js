// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const axios = require('axios');
const pdf = require('pdf-parse');
var fs = require('fs');


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
            
            const jsonString = JSON.stringify(data.text)
            fs.writeFile('generatedData/SubstitutionPlan.json', jsonString, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
        })
        .catch(error => console.error(error));
	
    //    res.send("test");
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
        return data;
    } catch (error) {
        throw error;
    }
}



// bind server localhost to port 3000
const port = 3000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});