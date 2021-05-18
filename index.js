const express = require('express')
const app = express()
const port = 4000

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send("💥 ERROR PA' 💥: " + err);
    } else {
      res.send('Dilan es tan crack que se conecto a la Base de Datos! 😎');
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}!`))
