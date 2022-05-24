const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors({
    url: 'http://localhost:3000',
    credentials: true
}));

app.use(express.static('public'));

const iceCreamOptionRaw = fs.readFileSync('./ice-cream-options.json', 'utf-8');
const iceCreamOption = JSON.parse(iceCreamOptionRaw);

app.get('./scoops', (req, res) => {
    res.json(iceCreamOption.iceCreamFlavors);
});

app.get('./toppings', (req, res) => {
    res.json(iceCreamOption.toppings)
});


if (require.main === module) {
    app.listen(3010, () => console.log("server is working on 3010"))
}


module.exports = app;