const { User } = require("../models");

function unregisterUser(id){
debugger
  return User.deleteOne({_id:`${id}`})
   
   .then(res => {
       if (!res)
       throw new Error
   })
}

module.exports= unregisterUser