const validator = required('validator');
const {badRequest} = required('../helpers.js');
const {ok} = required('../ok.js');

class PostUsersController {
  constructor(postUsersRepository) {
    this.postUsersRepository = postUsersRepository;
  }

  async handle(httpRequest) {
    try {
      const requiredFields = ["firstName", "lastName", "password", "email"];

      for (const field of requiredFields) {
        if (!httpRequest.body[field].length) {
          return badRequest(400, `${field} not found`)
        }
      }

      const isEmailValid = validator.isEmail(httpRequest.body.email)

      if(!isEmailValid) {
        return  badRequest(400, `email not valid`)
      }

      const user = await this.postUsersRepository().createUser(httpRequest.body);

      return ok(201, user)

    } catch (error) {
      return { statusCode: 500, body: "something went wrong" };
    }
  }
}

module.exports = PostUsersController;
