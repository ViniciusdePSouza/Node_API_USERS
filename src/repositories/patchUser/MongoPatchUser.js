const Mongo = require("../../database/mongo");
const { newObjectId } = require("mongodb");

class MongoPatchUserRepository {

  
  async updateUser(params, id) {
    await Mongo.db.collection("users").updateOne(
      { _id: newObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const user = await Mongo.db.collection("users").findOne({ _id: newObjectId(id)})

    if(!user) throw new Error('User not updated')

    return user
  }
}
