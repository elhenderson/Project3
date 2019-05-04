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

router.post("/post", (req, res) => {
    console.log(req.body);
    Post.create(req.body)
    .then(() => res.json({success:true}))
    .catch(err => console.log(err))
})

// router.delete("/post/:id", (req, res) => {
//     Post.
// })



module.exports = router;