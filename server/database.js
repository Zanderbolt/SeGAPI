const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017/'
const URI = 'mongodb+srv://root:123@segapi-cklce.mongodb.net/test?retryWrites=true'

mongoose.connect(URI)
    .then(db => console.log("Db is Connected"))
    .catch( err => console.log(err));


module.exports = mongoose;