const {
  createUser,
  getUserByUserId,
  getusers,
  updateusers,
  deleteusers,
} = require("./usercontrol");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getusers);
router.get("/:id", getUserByUserId);
router.patch("/", updateusers);
router.delete("/", deleteusers);

module.exports = router;
