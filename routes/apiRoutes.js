const express = require('express');
const sequelize =require('sequelize');
const router = express.Router();
const models = require('../models');
const Post = models.Post
const User = models.User;


//Post routes
router.get("/getPosts", (req, res) => {
    Post.findAll()
    .then((result) => res.json(result))
})

router.post("/post", (req, res) => {
    Post.create(req.body)
    .then(() => res.json({success:true}))
    .catch(err => console.log(err))
})

router.delete("/deletePost/:id", (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.json({success: true}))
    .catch(err => console.log(err)) 
})

router.put("/editPost/:id", (req, res) => {
    Post.update(
        req.body,
        {where : {
            id: req.params.id
        }}
    )
    .then(() => res.json({success: true}))
    .catch(err => console.log(err))
})


//User routes
router.get("/user/:id", (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.json({success: true}))
    .catch(err => console.log(err))
})

router.post("/addUser", (req, res) => {
    User.create(req.body)
    .then(() => res.json({success: true}))
    .catch(err => console.log(err))
})

router.put("/editUser/:id", (req, res) => {
    User.update(
        req.body,
        {where : {
            id: req.params.id
        }}
    )
    .then(() => res.json({success: true}))
    .catch(err => console.log(err))
})

router.delete("/deleteUser/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.json({success: true}))
    .catch(err => console.log(err)) 
})


module.exports = router;