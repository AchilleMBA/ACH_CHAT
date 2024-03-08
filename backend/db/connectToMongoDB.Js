import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MOGO_DB_URI,)

    }catch (error){

        console.log("Error connecting to MongoDB", error.message)
    }
}

export default connectToMongoDB; 