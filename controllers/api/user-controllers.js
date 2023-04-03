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
  User.findById(req.params.id)
    .populate("friends")
    .then((result) => {
      res.json(result);
    });
});

// Create user
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

//BONUS: Remove a user's associated thoughts when deleted.
// api/users/:userID/friends/:friendID

// Add new friend to a user list
router.post("/:id/friends/:friendId", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: {
        friends: req.params.friendId,
      },
    },
    {
      new: true,
    }
  ).then((result) => {
    res.json(result);
  });
});
// Delete new friend from the user list
router.delete("/:id/friends/:friendId", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $pull: {
        friends: req.params.friendId,
      },
    },
    {
      new: true,
    }
  ).then((result) => {
    res.json(result);
  });
});

module.exports = router;
