const mongoose = require('mongoose');

const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to DB');
    }
    catch (error) {
        console.log('Error connecting DB', error);
    }
}

module.exports = DB;