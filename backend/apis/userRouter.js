const { createUser } = require("./usercontrol");
const router = require("express").Router();
router.post("/", createUser);
module.exports = router;
