const { User, Note, Comment } = require('../models')
const { NotFoundError } = require('../errors')

function addCommentToNote(userid,noteid,text) {
    
debugger
    return User.find({_id: userid})
        .then((userfind)=> {
            if(!userfind) throw new NotFoundError('User Not Found') 
            return Note.findById(noteid) 
        })
        .then ((notefind)=> {
            if(!notefind) throw new NotFoundError('Note Not found')
            debugger
            return Comment.create({user: userid, text : text})              
                
        })
        .then((addcomment)=>{
            return Note.updateOne({_id:noteid}, {$push: {comments: addcomment}})
        })
    
      
   
}

module.exports = addCommentToNote