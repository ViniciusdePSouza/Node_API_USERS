 class MongoGetUsersRepository {
    async getUsers() {
        return[ {
            firstName: 'John',
            lastName: 'John',
            email: 'john@example.com',
            password: 'password'
        }]
    }
}

module.exports = MongoGetUsersRepository