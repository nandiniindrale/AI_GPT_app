const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/authController");



//routes
// REGISTER
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//LOGOUT
router.post("/logout", logoutController);

module.exports = router;