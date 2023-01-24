const MONGO_URI ="mongodb+srv://admin:SteveS1205@nextjscrud.tfe8g0m.mongodb.net/?retryWrites=true&w=majority"
import mongoose from 'mongoose';

const connectMongo = async()=>{
    try{
        const {connection} = await mongoose.connect(MONGO_URI)
        if(connection.readyState == 1){
            console.log("Database Connected")
        }
    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;