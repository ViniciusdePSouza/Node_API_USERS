const Mongo = require("../../database/mongo");

class MongoPostRepository {
  async createUser(params) {
    const { insertedId } = await Mongo.db.collection("users").insertOne(params);

    const user = await Mongo.db
      .collection("users")
      .findOne({ _id: insertedId });

    if (!user) throw new Error("User not created");

    return {
      statusCode: 201,
      body: user,
    };
  }
}

module.exports = MongoPostRepository;
