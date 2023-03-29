const router = require("express").Router();
const Thought = require("../../models/Thought");

router.get("/", (req, res) => {
  Thought.find().then((result) => {
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  Thought.findById(req.params.id).then((result) => {
    res.json(result);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Thought.create(req.body).then((result) => {
    res.json(result);
  });
});

router.put("/:id", (req, res) => {
  Thought.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((result) => {
    res.json(result);
  });
});

router.delete("/:id", (req, res) => {
  Thought.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
