const express = require("express");
const router = express.Router();

// -------------------using controller path------------
// get all users data
router.get("/", require("./../controllers/users").getUser);

// get sigle users data
router.get("/:userId", require("./../controllers/users").getOneUsers);

// to save the users data
router.post("/", require("./../controllers/users").postUser);

// update the  existing users data
router.put("/:userId", require("./../controllers/users").updateUser);

// // to delete the users data
router.delete("/:userId", require("./../controllers/users").deleteUser);

// get all users data
// router.get("/serch/:name", require("./../controllers/users").serchUser);

// -----------------using router path--------

// router.get("/",(req, res)=>{
// res.send("server started through routes path")
// })

// router.post("/userId",(req,res)=>{
//     res.send("Post API server started")
// })

// router.delete("/",(req,res)=>{
//     res.send("Delte API server started")
// })

module.exports = router;
