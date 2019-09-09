const express = require('express');
const app = express();

// Add numbers
app.get('/numbers/add', (req, res) => {
    // console.log(req.params);
    

    const firstNumber = Number(req.query.first);
    const secondNumber = Number(req.query.second);


    const sum = firstNumber + secondNumber;
    // console.log(55);
    res.send(`sum = ${sum} `);
})

// Multiplication
app.get('/numbers/multiply/:first/:second', (req, res) => {
    console.log(req.params);
    const firstNumber = Number(req.params.first);
    const secondNumber = Number(req.params.second);
    const multiplied = firstNumber * secondNumber
    res.send(`multiplication = ${multiplied}`);
})


// Server listens
app.listen(3000, () =>{
    console.log('server is listening at 3000');
})


