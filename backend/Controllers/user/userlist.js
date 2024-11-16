const Usertable = require("../../Models/user");
const userlist = async (req, res) => { 
try{
  const users = await Usertable.find().sort({ createdAt: -1 });  // new first 
    res.send({status:"successfully 123",data:users})

}catch(err){
    console.log(`  here is errror ${err}`);
    res.send({status:"faild",errors:err.errors})

}


}

module.exports = userlist