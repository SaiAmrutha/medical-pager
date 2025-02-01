const express = require("express");
const { signup, login } = require("../controllers/auth.js");

const router = express.Router();

// we are gonna create 2 routes whic =h are going to be post routes because we have to send the data
// from the front-end to the backend and only with post routes we can sedna payload
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
