const { ObjectId } = require("mongodb");
const Mongo = require("../../database/mongo");

class MongoDeleteUserRepository {
    async deleteUser(id){
        const user = await Mongo.db.collection('users').findOne({_id: new ObjectId(id)})

        if(!user) throw new Error('User not found')

        const { deletedCount } = await Mongo.db.collection('users').deleteOne({_id: new ObjectId(id)})

        if(deletedCount === 0) throw new Error('User not deleted')

        return {
            statusCode: 200,
            body: 'User successfully deleted'
        }
    }
}

module.exports = MongoDeleteUserRepository