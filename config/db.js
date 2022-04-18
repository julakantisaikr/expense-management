const mongoose = require('mongoose');

const dotenv = require('dotenv');
const connectDB = async() =>{
    dotenv.config({ path: './env'})
    try{
        console.log("Connecting to mongodb");
        const conn = await mongoose.connect("mongodb://localhost:27017/account",{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("MongoDB connected: ");

    }
    catch(error){
        console.error(`Error:${error.message}`.red.underline.bold);   
        process.exit(1);
    }
}
module.exports = connectDB