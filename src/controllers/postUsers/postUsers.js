const validator = required('validator');

class PostUsersController {
  constructor(postUsersRepository) {
    this.postUsersRepository = postUsersRepository;
  }

  async handle(httpRequest) {
    try {
      const requiredFields = ["firstName", "lastName", "password", "email"];

      for (const field of requiredFields) {
        if (!httpRequest.body[field].length) {
          return {
            statusCode: 400,
            body: `${field} not found`,
          };
        }
      }

      const isEmailValid = validator.isEmail(httpRequest.body.email)

      if(!isEmailValid) {
        return {
          statusCode: 400,
          body: `email not valid`,
        };
      }

      const user = await this.postUsersRepository().createUser(httpRequest.body);

      console.log("chegando aqui");

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
