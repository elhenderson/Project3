const express = require('express');
const sequelize =require('sequelize');
const router = express.Router();
const models = require('../models');
const Post = models.Post
const User = models.User;


//Post routes
router.get("/getPosts/", (req, res) => {
    const posts = []
    Post.findAndCountAll()
    .then(result => {
        result.rows.map((post) => (
            posts.push(post)
        ))
        return result
    })
    .then((result) => res.json({
        ...result,
        posts
    }))
})

// single item
router.get("/getPosts/:id", (req, res) => {
    console.log("----params=", req.params);
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((result) => res.json(result))
    .catch(err => console.log(err))
})

router.post("/post", (req, res) => {
    console.log(req.body);
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