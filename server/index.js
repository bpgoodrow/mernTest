require("dotenv").config();
console.log(process.env)
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bpgoodrow:3520IonMB23%21%40@testcluster.nkehzom.mongodb.net/mernTest?retryWrites=true&w=majority");

app.get("/getUser", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user)
})

app.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});