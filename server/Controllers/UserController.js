const User = require('../Models/Users.js')
const bcrypt=require('bcryptjs')
const { validationResult } = require('express-validator');
const RegisterUser=async(req,res) => {
try {
 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = await User.create({
        name: req.body.name,
        password:bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        college: req.body.college,
        isStudent:req.body.isStudent,
    })
    res.json(user)
   
} catch (error) {
    res.status(404).json(error);
}
}
const loginUser = async(req, res) => {
 try {
    const email = req.body.email;
    const password = req.body.password;
    const user=await User.findOne({ email: email });
    if(!user){
        res.status(404).json({error:"user does not exist"});
    }
    const passCompare=bcrypt.compare(password, user.password);
    if (!passCompare) {
        return res.status(400).json({ error: "Wrong Credentials" });
      }

      res.json(user)
 } catch (error) {
    res.status(400).json({ error: error}
        )
 }
}
const getUserbyId = async(req, res)=>{
try {
    const user = await User.findById(req.params.id);
    if(!user) {
        return res.status(404).json({error:"User does not exist"});
    }
     res.json(user)
} catch (error) {
    res.status(400).json({ error: error})
}

}
const updateUser= async(req, res) => {
try {
    const id=req.params.id;
    const updatedUser = req.body;
    const user = await User.findByIdAndUpdate(id, updatedUser, {new:true});
    res.json(user)
} catch (error) {
    res.status(400).json({ error: error})
}
}
const deleteUser = async(req, res) => {
    
    try {
        const id=req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } catch (error) {
        res.status(401).json({error:error})
    }

}
module.exports ={RegisterUser,loginUser,getUserbyId,updateUser,deleteUser}

