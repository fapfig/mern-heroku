const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    res.status(404);
    res.send({ error: "User does not exist!" });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  });
  await user.save();
  res.send(user);
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    Object.assign(user, req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(404);
    res.send({ error: "User does not exist!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(202).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "User does not exist!" });
  }
});

module.exports = router;
