const router = require("express").Router();
const userRoutes = require("./user-controllers");

router.use("/users", userRoutes);

module.exports = router;
