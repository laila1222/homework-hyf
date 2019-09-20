const express = require('express');
const app = express();


app.get('/calculator/multiply', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const number = Number(req.query[key]);
        numbers.push(number);
    };
    const multiplication = numbers.reduce((total, amount) => total * amount);

    res.send(multiplication.toString());
})

app.listen(3002, () => {
    console.log('Server is listening at 3002');
});