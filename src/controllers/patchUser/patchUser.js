const { ok } = require("../helpers");
const { badRequest } = require("../helpers");

class patchUserController {
  constructor(patchUserRepository) {
    this.patchUserRepository = patchUserRepository;
  }

  async handle(httpRequest) {
    try {
      const { id } = httpRequest.params.id;
      const { body } = httpRequest.body;

      if (!id) {
        return badRequest(400, "Body missing required id");
      }
      const allowedFieldsToUpdate = ["firstName", "lastName", "password"];
      const isFieldNotAllowed = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key)
      );

      if (isFieldNotAllowed) {
        return badRequest(400, "Field not allowed");
      }

      const user = await this.patchUserRepository.updateUser(id, body);

      return ok(200, user);
    } catch (error) {
      return badRequest(500, "Something went wrong");
    }
  }
}

module.exports = patchUserController;
