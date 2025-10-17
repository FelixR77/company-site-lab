const express = require('express'); 

const app = express();


app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
    res.render('home.ejs', {})
})
app.get('/history', (req, res) => {
    res.render('history.ejs', {})
})
app.get('/past-work', (req, res) => {
    res.render('past-work.ejs', {})
})
app.get('/staff', (req, res) => {
    res.render('staff.ejs', {})
})
app.get('/contact-us', (req, res) => {
    res.render('contact-us.ejs', {})
})
app.get('/external-links', (req, res) => {
    res.render('external-links.ejs', {})
})


