const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8000;

app.get("/users", async (req, res) => {
  const MongoGetUsersRepository = require("./repositories/getUsers/MongoGetUsers");
  const GetUsersController = require("./controllers/getUsers/getUsers");

  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUserController = new GetUsersController(mongoGetUsersRepository);

  const {body, statusCode} = await getUserController.handle()

  res.status(statusCode).send(body)
});

app.listen(PORT, () => console.log("listening on port", PORT));
