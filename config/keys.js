//determines what set of credentials to return 

if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

mongodb+srv://lauriegao:<password>@cluster0-ehbqr.mongodb.net/test?retryWrites=true&w=majority