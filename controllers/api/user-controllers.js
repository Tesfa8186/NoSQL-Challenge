const router = require("express").Router();
const User = require("../../models/User");

// Get all users
router.get("/", (req, res) => {
  User.find().then((result) => {
    res.json(result);
  });
});

// Get a user by ID
router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((result) => {
    res.json(result);
  });
});

// Creat user
router.post("/", (req, res) => {
  console.log(req.body);
  User.create(req.body).then((result) => {
    res.json(result);
  });
});
// Update user by ID
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((result) => {
    res.json(result);
  });
});
// Delete user by ID
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
