import mongoose from 'mongoose';

const connect = async () => {
    const dbName = 'userAuth';
    const url = process.env.MONGO_URI + dbName;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    // connect to database
    await mongoose.connect(url, options)
    .then(() => {
        console.log(`connected to db on ${url}`);
    }).catch((err) => {
        console.log(err)
    })
}

export default connect;