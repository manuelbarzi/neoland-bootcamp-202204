const { NotFoundError } = require('errors')
const { User, Job } = require('../models')

function retrieveJobWorkers(userid,jobid) {
    return User.find({ _id: userid })
        .then(userfin => {
            if (userfin === undefined )
                throw new NotFoundError('User Not Found')
            return Job.find({ _id: jobid })
        })
        .then(find => {
            if (find.length === 0)
                throw new NotFoundError('Clock Not Found')
            return find
            // por que es una array ¿?
        })
        .catch(error => {
            return error
        })

}

module.exports = retrieveJobWorkers