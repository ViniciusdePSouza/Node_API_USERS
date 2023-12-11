 class GetUsersController {
  constructor(getUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong",
      };
    }
  }
}

module.exports = GetUsersController