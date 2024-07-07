var express = require('express');
var router = express.Router();
//mongoose require
var mongoose = require('mongoose')


//creating collection of schema
const userRegSchema = {
  name:String,
  lname:String,
  roll:String
};

// to userSchema for creating model and creating Usern collection
const UserN = mongoose.model("usersN",userRegSchema,"usersN"); 

/* GET users listing. */
router.get('/',async function(req, res, next) {
  const dataN = await UserN.find({});
  console.log(dataN);
  res.send(dataN);
});

//POST / user
router.post("/",async (req,res)=>{
  console.log(req.body);
  // creating user data to save database
  const nUser = new UserN({
    name:req.body.name,
    lname:req.body.lname,
    roll:req.body.roll
  });
  //saving into database mogoose
  const userDetalis = await nUser.save();
  res.send(userDetalis);
});

module.exports = router;
