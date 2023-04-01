const router = require("express").Router();
const Thought = require("../../models/Thought");

// Get all thoughts
router.get("/", (req, res) => {
  Thought.find().then((result) => {
    res.json(result);
  });
});

// Get single thought by ID
router.get("/:id", (req, res) => {
  Thought.findById(req.params.id).then((result) => {
    res.json(result);
  });
});

// Create thought
router.post("/", (req, res) => {
  console.log(req.body);
  Thought.create(req.body).then((result) => {
    res.json(result);
  });
});

// Update thought by ID
router.put("/:id", (req, res) => {
  Thought.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((result) => {
    res.json(result);
  });
});

// Delete thought by ID
router.delete("/:id", (req, res) => {
  Thought.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

// /api/thoughts/:thoughtId/reactions

// Creat a reaction stored in a single thoughts array

// Delete or Remove a reaction by reactionID
module.exports = router;
