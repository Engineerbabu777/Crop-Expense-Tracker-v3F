
import mongoose from 'mongoose';

export function mongooseConnect() {
    const uri = "mongodb+srv://awaismumtaz0099:awaismumtaz0099@cluster0.m2xnkcb.mongodb.net/";
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }else{
        return mongoose.connect(uri);
    }
}

