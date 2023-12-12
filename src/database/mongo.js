const { MongoClient } = require("mongodb");

const Mongo = {
  client: undefined,
  db: undefined,

  async connect() {
    const url = process.env.MONGO_URL;
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;

    const client = new MongoClient(url, {
      auth: { username: username, password: password },
    });

    const db = client.db('users-db');

    this.client = client;
    this.db = db;

    console.log('connected to Mongo')
  },
};


module.exports = Mongo