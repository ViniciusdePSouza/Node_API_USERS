const express = require("express");
const dotenv = require("dotenv");
const Mongo = require("./database/mongo");

const main = async () => {
  dotenv.config();

  const app = express();
  app.use(express.json());

  const PORT = process.env.PORT || 8000;
  await Mongo.connect();

  app.get("/users", async (req, res) => {
    const MongoGetUsersRepository = require("./repositories/getUsers/MongoGetUsers");
    const GetUsersController = require("./controllers/getUsers/getUsers");

    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUserController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUserController.handle();

    res.status(statusCode).send(body);
  });

  app.post("/users", async (req, res) => {
    const MongoPostUsersRepository = require("./repositories/postUsers/MongoPostUsers");
    const PostUsersController = require("./controllers/postUsers/postUsers");

    const mongoPostUsersRepository = new MongoPostUsersRepository();
    const postUsersController = new PostUsersController(
      mongoPostUsersRepository
    );

    const { body, statusCode } = await postUsersController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });

  app.patch("/users/:id", async (req, res) => {
    const UserPatchRepository = require("./repositories/patchUser/MongoPatchUser");
    const UserPatchController = require("./controllers/patchUser/patchUser");

    const userPatchRepository = new UserPatchRepository();
    const userPatchController = new UserPatchController(userPatchRepository);

    const { body, statusCode } = await userPatchController.handle({
      params: req.params,
      body: req.body,
    });

    res.status(statusCode).send(body);
  });

  app.delete("/users/:id", async (req, res) => {
    const MongoUserDeleteRepository = require("./repositories/deleteUser/MongoDeleteUser");
    const UserDeleteController = require("./controllers/deleteUser/deleteUser");

    const mongoUserDeleteRepository = new MongoUserDeleteRepository();
    const userDeleteController = new UserDeleteController(
      mongoUserDeleteRepository
    );

    const { statusCode, body } = await userDeleteController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body)
  });

  app.listen(PORT, () => console.log("listening on port", PORT));
};

main();
