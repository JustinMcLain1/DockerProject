let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get('/profile-picture', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});


app.get('/more', (req, res) => {
  res.send(
    `
    <h1>Page Two</h1>
    <p>Node.js is pretty great too!!</p>
    <a href="/" alt="Back Home">Back Home</a>
    `
  )
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
