import express from "express";
import userService from "../services/userService";
let handleLogin = async(req,res) =>{
   let email= req.body.email
   let password = req.body.password
  if(!email || !password) {
    return res.status(500).json({
      errCode:1,
      message: "Bạn không được để trống thống tin !"
    })
  }
  let userData = await userService.handleUserLogin(email,password)
return res.status(200).json({
      errCode:userData.errCode,
      message: userData.errMessage,
       userData
})
}

let handleCreateNewUser = async(req,res) => { 
   let message  =await userService.createNewUser(req.body);
   console.log(message)
   return res.status(200).json(message);
 }
 let handleEditUser =async(req,res) => { 
  let data = req.body;
  let message = await userService.EditUser(data)
  return res.status(200).json(message)

  }
  let handleDeleteUser =async (req,res) => { 
    if(!req.body.id){
      return res.status(200).json({
        errCode:1,
        errMesage:"Thiếu tham số bắt buộc!"
      })
    }
    let message  =await userService.deleteUser(req.body.id);
    console.log(message)
    return res.status(200).json(message);
   }
   let handleGetAllUsers = async(req,res) => { 
      let id=req.query.id
      if(!id){
        return res.status(200).json({
          errCode:1,
          errMesage:'Thiếu tham số bắt buộc!',
          user:[]
        })
      }
      let users= await userService.getAllUsers(id)
        return res.status(200).json({
          errCode:0,
          errMesage:'OK!',
          users
        })
    }
module.exports = {
  handleLogin:handleLogin,
  handleCreateNewUser:handleCreateNewUser,
  handleEditUser:handleEditUser,
  handleDeleteUser:handleDeleteUser,
  handleGetAllUsers:handleGetAllUsers,
}