// const Usermodel = require("./../models/moduleusers");
const Usermodel = require("./../models/moduleusers");

exports.getUser = async (req, res) => {
  // res.send("server started through controller and router path")
  const users = await Usermodel.find();
  res.json(users);
};
exports.getOneUsers = async (req, res) => {
  const users = await Usermodel.find({ _id: req.params.userId });
  res.json(users);
};
exports.postUser = async (req, res) => {
  // console.log(req.body);
  const newUser = Usermodel(req.body);
  // await newUser.save();
  res.send(await newUser.save());
  // res.send("Server started through controller and router post API");
};

exports.deleteUser = (req, res) => {
  // res.send("Server Started through controller and router Delete API");
  Usermodel.findOneAndDelete({ _id: req.params.userId }, (err, data) => {
    res.send(data);
  });
};
exports.updateUser = (req, res) => {
  // res.send("user update");

  Usermodel.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );

  // exports.serchUser = async (req, res) => {
  //   var regex = new RegExp(req.params.name, "i");
  //   const users = await Usermodel.find({ name: regex });
  //   res.json(users);
  // };
};
