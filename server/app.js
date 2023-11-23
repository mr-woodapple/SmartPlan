// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const axios = require('axios');



//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!




/**************************************************************************
*************************** handle HTTP METHODS ***************************
**************************************************************************/


/******************************* GET CALLS ******************************/
// returns all items
app.get('/getData', function(req, res) {
	res.send("test");
});





axios.get('http://geschuetzt.bszet.de/s-lk-vw/Vertretungsplaene/vertretungsplan-bs-it.pdf', {
    auth: {
        username: 'bsz-et-2324',
        password: 'schulleiter#23'
    },
    responseType: 'arraybuffer' // um die PDF-Datei als binären Datenstrom zu erhalten
})
.then(function (response) {
    let pdfData = new Buffer.from(response.data).toString('base64');
    let json = {
        pdf: pdfData
    };
    
})
.catch((error) => {
    console.error(error)
});





// bind server localhost to port 3000
const port = 3000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});