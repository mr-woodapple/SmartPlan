// Created 2023-11-21
// Reads data from a PDF file

export function sniffData() {
    const url = 'https://crossorigin.me/http://geschuetzt.bszet.de/s-lk-vw/Vertretungsplaene/vertretungsplan-bs-it.pdf';
    const options = {
        headers: { 'Authorization': 'Basic ' + 'bszetdd-23-24:schulleiter#23' }
    };

    fetch(url, options)
        .then(res => {
            if(!res.ok) throw new Error(res.statusText);
            return res.buffer();
        })
        .then(buffer => {
            console.log(buffer);
        })


    // TODO: update
    return "sniffed";
}