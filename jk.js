const express = require('express');
const path = require('path');
const app = express();

const port = 3333;

//console.log(path.join(__dirname, './public'));
const staicpath =path.join(__dirname, "./public");

//app.set('view engine','hbs');

app.use(express.static(staicpath));

app.get("", (req, res) => {
    res.render("index");

});

app.get("/" , (req, res) =>{
    res.send("hello for the express server");

})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);

});