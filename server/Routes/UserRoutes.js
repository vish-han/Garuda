const express =require('express');
const { body } = require('express-validator');
const {RegisterUser,loginUser,getUserbyId,updateUser,deleteUser} = require('../Controllers/UserController.js')
const Router=express.Router();
Router.get('/:id',getUserbyId)
Router.post('/signUp',   body('email').isEmail(),
body('name').isLength({min:3}),
body('password').isLength({ min: 5 }),RegisterUser);
Router.post('/login',loginUser)
Router.put('/:id',updateUser)
Router.delete('/:id',deleteUser)

module.exports =Router; 