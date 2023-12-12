const { ok } = require("../helpers");
const { badRequest } = require("../helpers");

class DeleteUserController {
  constructor(deleteUserRepository) {
    this.deleteUserRepository = deleteUserRepository;
  }

  async handle(httpRequest) {
    {
      try {
        const { id } = httpRequest.params.id;

        if (!id) {
          return badRequest(400, "Id required");
        }

        const user = await this.deleteUserRepository.deleteUser(id);

        return ok(200, user);
      } catch (error) {
        return badRequest(500, "Something went wrong");
      }
    }
  }
}

module.exports = DeleteUserController;
