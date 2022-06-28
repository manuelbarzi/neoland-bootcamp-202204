// const { Incidence, Comment } = require('../models')
// const { NotFoundError } = require('../errors')
// // const { incidence } = require('../models/schemas')

// var validDistance = 5;  


// function retrieveIncidenceNearMe(lat, long) {
//     return Incidence.find({}).lean()
//         .then(incidences => { 
//             var result = incidences.filter(incedence => {
//                 check = distance(lat, long, incedence.latitude , incedence.longitude, "K");
//                 console.log(check, validDistance)
//                 return check < validDistance  
//             })
            
//             var messages = result.map(function(incidence) {
//                 return Comment.find({incidence: incidence}).lean().then(function(comments) {
//                     incidence.comments = comments
//                     return incidence
//                 })
//             })

//             return Promise.all(messages).then(function(_result) {
//                 return _result
//             })
//         })
// }

// // https://stackoverflow.com/questions/69924823/check-if-my-current-location-inside-circle
// function distance(lat1, lon1, lat2, lon2, unit) {
//      var radlat1 = Math.PI * lat1/180
//      var radlat2 = Math.PI * lat2/180
//      var radlon1 = Math.PI * lon1/180
//      var radlon2 = Math.PI * lon2/180
//      var theta = lon1-lon2
//      var radtheta = Math.PI * theta/180
//      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//      dist = Math.acos(dist)
//      dist = dist * 180/Math.PI
//      dist = dist * 60 * 1.1515
//      if (unit=="K") { dist = dist * 1.609344 }
//      if (unit=="N") { dist = dist * 0.8684 }
//      if (unit=="M") { dist = dist * 1000 }
//      return dist
// }

// module.exports = retrieveIncidenceNearMe




const { Incidence, Comment, User } = require('../models')
const { NotFoundError } = require('../errors')
// const { incidence } = require('../models/schemas')

var validDistance = 5;  


function retrieveIncidenceNearMe(lat, long) {
    return Incidence.find({}).lean()
        .then(incidences => { 

            
            var messages = incidences.map(function(incidence) {
                return Comment.find({incidence: incidence}).lean().then(function(comments) {
                    
                    
                    var _comments =  comments.map(function(comment) {
                        return User.findOne({_id: comment.user}).lean().then(function(user) {
                            comment.user = user
                            return comment
                        })
                    })

                    return Promise.all(_comments).then(function(cm) {
                        incidence.comments = cm
                        return incidence
                    })

                    
                })
            })
            return Promise.all(messages).then(function(_result) {
                return _result
            })

        })
}



module.exports = retrieveIncidenceNearMe


// const { Incidence, Comment, User } = require('../models')
// const { NotFoundError } = require('../errors')
// // const { incidence } = require('../models/schemas')

// var validDistance = 5;  


// function retrieveIncidenceNearMe(lat, long) {
//     return Incidence.find({}).lean()
//         .then(incidences => { 
//             var result = incidences.filter(incedence => {
//                 check = distance(lat, long, incedence.latitude , incedence.longitude, "K");
//                 console.log(check, validDistance)
//                 return check < validDistance  
//             })
            
//             var messages = result.map(function(incidence) {
//                 return Comment.find({incidence: incidence}).lean().then(function(comments) {
                    
                    
//                     var _comments =  comments.map(function(comment) {
//                         return User.findOne({_id: comment.user}).lean().then(function(user) {
//                             user.isMyMessage = comment.user._id ===  comment.user ? true : false
//                             comment.user = user
//                             return comment
//                         })
//                     })

//                     return Promise.all(_comments).then(function(cm) {
//                         incidence.comments = cm
//                         return incidence
//                     })

                    
//                 })
//             })
//             return Promise.all(messages).then(function(_result) {
//                 return _result
//             })

//         })
// }

// // https://stackoverflow.com/questions/69924823/check-if-my-current-location-inside-circle

// function distance(lat1, lon1, lat2, lon2, unit) {
//      var radlat1 = Math.PI * lat1/180
//      var radlat2 = Math.PI * lat2/180
//      var radlon1 = Math.PI * lon1/180
//      var radlon2 = Math.PI * lon2/180
//      var theta = lon1-lon2
//      var radtheta = Math.PI * theta/180
//      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//      dist = Math.acos(dist)
//      dist = dist * 180/Math.PI
//      dist = dist * 60 * 1.1515
//      if (unit=="K") { dist = dist * 1.609344 }
//      if (unit=="N") { dist = dist * 0.8684 }
//      if (unit=="M") { dist = dist * 1000 }
//      return dist
// }

// module.exports = retrieveIncidenceNearMe