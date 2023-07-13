const express = require('express');
const {home , createUser , getUsers , editUser, userDelete} = require('../controllers/userController.js')


const router = express.Router();

router.get("/" , home);
router.post("/createuser" , createUser);
router.get("/getUser" , getUsers);
router.put("/editUser/:id" , editUser)
router.delete("/userDelete/:id" , userDelete)

module.exports = router;
