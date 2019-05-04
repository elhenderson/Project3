const express = require('express');
const sequelize =require('sequelize');
const router = express.Router();
const models = require('../models');
const Post = models.Post
const User = require("../models/user");

router.get("/getPosts", (req, res) => {
    Post.findAll()
    .then((result) => res.json(result));
})


router.post()

module.exports = router;