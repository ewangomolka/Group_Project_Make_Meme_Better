
const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('mmfb');
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);  
    app.use('/api/users', usersRouter);
    const memesCollection = db.collection('memes');
    const memesRouter = createRouter(memesCollection);  
    app.use('/api/memes', memesRouter);

  })
  .catch(console.error);

app.listen(9000, function() {
console.log(`server running on port ${this.address().port}`);
});