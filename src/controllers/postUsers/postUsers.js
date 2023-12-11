class PostUsersController {
  constructor(postUsersRepository) {
    this.postUsersRepository = postUsersRepository;
  }
  async handle(httpRequest) {
    try {
      console.log(httpRequest);
      const { body } = httpRequest;

      console.log(body);
      if (!body) {
        return {
          statusCode: 400,
          body: "Please enter a body",
        };
      }

      const user = await this.postUsersRepository().createUser(body);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return { statusCode: 500, body: "something went wrong" };
    }
  }
}

module.exports = PostUsersController;
