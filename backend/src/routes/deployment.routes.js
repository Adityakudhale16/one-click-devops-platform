const express = require("express");
const { deploy } = require("../controllers/deployment.controller");

const router = express.Router();

router.post("/deploy", deploy);

module.exports = router;