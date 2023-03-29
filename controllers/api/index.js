const router = require("express").Router();
const userRoutes = require("./user-controllers");
const thoughtRoutes = require("./thought-controller");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
