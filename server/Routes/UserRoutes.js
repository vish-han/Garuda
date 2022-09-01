const express =require('express');
const {RegisterUser,loginUser,getUserbyId,updateUser,deleteUser} = require('../Controllers/UserController.js')
const Router=express.Router();
Router.get('/:id',getUserbyId)
Router.post('/signUp',RegisterUser);
Router.post('/login',loginUser)
Router.put('/:id',updateUser)
Router.delete('/:id',deleteUser)

module.exports =Router; 