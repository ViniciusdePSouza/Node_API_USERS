const Mongo = require("../../database/mongo");
class MongoGetUsersRepository {
  async getUsers() {
    const users = await Mongo.db.collection("users").find({}).toArray();
    return users;
  }
}

module.exports = MongoGetUsersRepository;
