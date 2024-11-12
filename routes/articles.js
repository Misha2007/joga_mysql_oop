const express = require("express");
const router = express.Router();
const articleControllerClass = require("../controllers/article");

const articleController = new articleControllerClass();

router.get("/", articleController.getAllArticles);

module.exports = router;
