const mongoose = require('mongoose');

const connectToDb = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then((conn) => {
        console.log(`DB connect successfully :${conn.connection.host}` )
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = connectToDb;