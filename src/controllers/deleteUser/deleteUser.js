class DeleteUserController {
  constructor(deleteUserRepository) {
    this.deleteUserRepository = deleteUserRepository;
  }

  async handle(httpRequest) {
    {
      try {
        const { id } = httpRequest.params.id;

        if (!id) {
          return {
            statusCode: 400,
            body: "Id required",
          };
        }

        const user = await this.deleteUserRepository.deleteUser(id);

        return {
          statusCode: 200,
          body: user,
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: "Something went wrong",
        };
      }
    }
  }
}
