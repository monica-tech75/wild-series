const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programActions");

router.get("/", browse);







module.exports = router;