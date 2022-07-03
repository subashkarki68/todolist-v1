const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let lists = ['Buy Food', 'Cook Food', 'Eat Food'];

app.get('/', function (req, res) {

    let today = new Date();

    let options = {
        year: 'numeric',
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }

    let day = today.toLocaleDateString("en-US", options);

    res.render('list', {
        kindOfDay: day,
        newListItems: lists
    });
});

app.post('/', function(req, res) {
    let item = req.body.newItem;
    lists.push(item);
    res.redirect('/');
});

app.listen(port, function () {
    console.log('Server listening on port' + port);
})