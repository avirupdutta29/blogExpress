const express = require('express');
var app = express()
const path = require('path');
const port = 3000
var exphbs = require('express-handlebars');



app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// const avirupMiddleWare = (request, response, next)=>{
//     console.log(request);
// }

app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})