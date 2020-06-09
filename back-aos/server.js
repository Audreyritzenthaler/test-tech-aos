const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test-tech';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/authentification", (req, res) => {
  const mail = req.body.mail
  const pwd = req.body.pwd
  const db = client.db(dbName)

  if (mail && pwd) {
    db.collection("users").findOne(
      { login: mail, pwd: pwd },
      (err, findResult) => {
        if (findResult){
          res.json({ user: findResult.login })
        } else {
          res.status(401).json({ error: "Error" })
        }
      }
    )
  } else {
    res.status(401).json({ error: 'Erreur lors de la récupération du mail'})
  }
})


app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
  
    console.log(`Server is listening on ${port}`);
  });