const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/categorysActions");

router.get("/", browse);



module.exports = router;