const mongoose= require('mongoose')

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", UsersSchema)
module.exports = UserModel;