const { Activity } = require ('../models')


function retrieveActivities() { // recivimos el user id al que les buscaremos sus notas 

    // User.findOne({ _id: userId})
    return Activity.find({private: false}).sort({date: -1}).populate('user', 'name').lean()       
        .then((activity)=>{
            
            activity.forEach(activity => {    // las limpio para no devolver indo de mongose
                activity.id = activity._id.toString()
                
                delete activity._id
                delete activity.__v
            })

            return activity
        })
        
}


module.exports = retrieveActivities