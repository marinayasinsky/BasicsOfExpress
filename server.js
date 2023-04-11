const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
               <a href="/98">Take one down, pass it around</a>
               <br>
               <a href="/">Start over</a>`);
});

app.get('/:number_of_bottles', (req, res) => {
    const numOfBottles = parseInt(req.params.number_of_bottles);

    if (numOfBottles > 0) {
        const nextBottles = numOfBottles - 1;
        res.send(`<h1>${numOfBottles} Bottles of beer on the wall</h1>
                  <a href="/${nextBottles}">Take one down, pass it around</a>
                  <br>
                  <a href="/">Start over</a>`);
    } else {
        res.send(`<h1>No more bottles of beer on the wall</h1>
                  <a href="/">Start over</a>`);
    }
});

app.listen(3000, () => {
    console.log(`Server running on port: ${PORT}`);
  });