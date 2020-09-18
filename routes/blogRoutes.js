const express = require("express");

const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/", blogController.getAllPost);

router.get("/create", blogController.getCreatePost);

router.post("/create", blogController.postCreatePost);

router.get("/post/:id", blogController.getPostbyId);

router.delete("/post/:id", blogController.deletePostbyId);

module.exports = router;
