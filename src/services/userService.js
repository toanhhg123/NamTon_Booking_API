import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

let handleUserLogin=(email,password) => { 
 return new Promise(async(resolve,reject) => { 
  try {
    let userData = {}
    let isExist = await checkUserEmail(email)
    if(isExist){
     resolve()
    }else{
      userData.errCode = 1
      userData.errMesage = `Email không tồn tại trong hệ thống . Vui lòng điền lại !`
      resolve(userData)
    }
  } catch (error) {
    reject(error)
  }
  })
 }
 
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};
let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          message: "Email của bạn đã có người sử dung!",
        });
      }
      let hashPasswordFromBcryct = await hashUserPassword(data.password);
      await db.User.create({
        username: data.username,
        password: hashPasswordFromBcryct,
        email: data.email,
        phonenumber: data.phonenumber,
        address: data.address,
        date: data.date,
        roleId: data.roleId,
      });
      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (error) {
      reject(error);
    }
  });
};
let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    let foundUser = await db.User.findOne({
      where: { id: userId },
    });
    if (!foundUser) {
      resolve({
        errCode: 2,
        errMesage: "Người dùng không tồn tại !",
      });
    }
    // if(foundUser){
    //   await foundUser.destroy()
    // }
    await db.User.destroy({
      where: { id: userId },
    });
    resolve({
      errCode: 0,
      errMesage: "Người dùng đã bị xóa !",
    });
  });
};
let EditUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMesage: "Thiếu tham số bắt buộc!",
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (user) {
        (user.username = data.username),
          (user.address = data.address),
          (user.date = data.date),
          await user.save();
        resolve({
          errCode: 0,
          message: "Update người dùng thành công!",
        });
      } else {
        resolve({
          errCode: 1,
          errMesage: "Không tìm thấy người dùng!",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = '';
      if (userId === 'ALL') {
        users = await db.User.findAll({
             attributes:{
              exclude:['password']
             }
        })
      }
      if (userId && userId !== 'ALL') {
        users = await db.User.findOne({
          where: { id: userId },
          attributes:{
            exclude:['password']
           }
        });
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleUserLogin:handleUserLogin,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  EditUser: EditUser,
  getAllUsers: getAllUsers,
};
