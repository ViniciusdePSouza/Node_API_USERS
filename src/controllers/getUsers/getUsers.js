const { ok } = require("../helpers");
const { badRequest } = require("../helpers");
 
 class GetUsersController {
  constructor(getUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return ok(200, users) 
    } catch (error) {
      return badRequest(500, "something went wrong");
    }
  }
}

module.exports = GetUsersController