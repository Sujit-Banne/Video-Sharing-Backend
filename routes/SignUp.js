const express = require('express');
const router = express.Router()

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require('../models/User')

router.post('/api/signup', (req, res, next) => {
    console.log(req.body);
    //check if user already exist or not
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                //mail exists
                return res.status(409).json({
                    message: "User already exists"
                })
            } else {
                //generate new user email
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({//internal server error
                            error: err
                        })
                    } else {
                        //create new user
                        const user = new User({
                            name: req.body.name,
                            email: req.body.email,
                            phone: req.body.phone,
                            profession: req.body.profession,
                            password: hash
                        })
                        //save the user into the database
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User Created'
                                })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err.message
                                })
                            })
                    }
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(422).json({
                error: err.message
            })
        })
})

module.exports = router