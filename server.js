// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');
const users = []

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
//
// YOUR CODE HERE
//
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Data
// =============================================================


// Routes
// =============================================================

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users',(req, res) => {
  const user = { name: req.body.name, password: req.body.password}
  users.push(user)
  res.status(201).send()
})

app.get('/', (req, res) => {
  // Send all of the books to 'index.handlebars' as an object
  //
  // YOUR CODE HERE
  res.render('index')
  //
});



app.get('/login', (req, res) => {
  // Send all of the books to 'index.handlebars' as an object
  //
  // YOUR CODE HERE
  res.render('login')
  //
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});




