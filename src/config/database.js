const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost:27017/todo', {
        "auth": { "authSource": "admin" },
        "user": "admin",
        "pass": "123456",
        "useMongoClient": true
    })
