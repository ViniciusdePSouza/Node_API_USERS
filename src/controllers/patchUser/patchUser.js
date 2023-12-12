class patchUserController {
constructor(patchUserRepository) {
  this.patchUserRepository = patchUserRepository;
}

  async handle(httpRequest) {
    try {
      const { id } = httpRequest.params.id;
      const { body } = httpRequest.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "Body missing required id",
        };
      }
      const allowedFieldsToUpdate = ["firstName", "lastName", "password"];
      const isFieldNotAllowed = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key)
      );

      if(isFieldNotAllowed) {
        return {
          statusCode: 400,
          body: 'Field not allowed'
        }
      }

      const user = await this.patchUserRepository.updateUser(id, body)

      return {
        statusCode: 200,
        body: user
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

module.exports = patchUserController;
