const { json } = require('express');
const User = require('../models/userModel.js');


exports.home = async (req , res) => {
    res.send("Hello World!")
}

exports.createUser =  async (req, res) =>{
    try{
        const {name , email} = req.body;

        const user = await User.create(
            {
             name,
             email
           }
        )
    }
    catch(error){
     console.log(error);
     res.status(404).json({
        success:false,
        message:error.message
     })
    }
}

exports.getUsers = async (req , res) => {
    try{
        const users = await User.find({})

        res.status(200).json({
            success: true,
            users
        })

    }catch(error){
     console.log(error);
     res.status(404).json({
        success:false,
        message:error.message
     })
    }
}

exports.editUser = async (req, res) => {
    try{
      const user = await User.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        success:true,
        message:"user updated successfully"
      })
    }catch(error){
     console.log(error);
     res.status(404).json({
        success:false,
        message:error.message
     })
    }
}

exports.userDelete = async (req , res) => {
    try{
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      res.status(200).json({
        success: true,
        message:"user deleted successfully"
    })

    }catch(error){
     console.log(error);
     res.status(404).json({
        success:false,
        message:error.message
     })
    }
}