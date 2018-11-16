const mongoose = require('mongoose');

const URI = 'mongodb://localhost/segapi'

mongoose.connect(URI)
    .then(db => console.log("Db is Connected"))
    .catch( err => console.log(err));

module.exports = mongoose;