const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users)
}

userCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({username});
  await newUser.save();
  res.json('Users created')
}

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json('Users deleted')
}

module.exports = userCtrl;