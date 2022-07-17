const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;

/* app.get('/', (req, res) => {
  res.sendFile( __dirname + '/public/index.html');
}) */

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//servir contenido estatico
app.use(express.static('public'));

//rendirezado con handlebars
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Patricio',
        tittle: 'Curso Node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'nicolas',
        tittle: 'Curso Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Patricio',
        tittle: 'Curso Node'
    });
});


// contenido servido de forma estatica con express
/* app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html')
});

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html')
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
}); */

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

