

const mongoose  = require('mongoose');

export async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URL)

        const connection = mongoose.connection;
        connection.on('connected' , ()=>{
            console.log('mongoDB connected successfully')
        })

        connection.on('error' , (err : any)=>{
            console.log('mongoDB error' + err)
            process.exit();
        })

    }catch(error){
       console.log("something went wrong to connect database");
       console.log(error);
    }
}






