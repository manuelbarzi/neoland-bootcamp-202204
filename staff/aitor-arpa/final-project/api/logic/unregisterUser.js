const { User } = require("../models");
const { ConflictError,AuthError } = require ('errors')

function unregisterUser(id){

  return User.findOneAndRemove({_id:id})
      .then(res => {
       
        if(res.deletedCount === 0 )
          throw new ConflictError('User not deleted')
       if (!res)
       throw new AuthError('User no found')
   })
}

module.exports= unregisterUser