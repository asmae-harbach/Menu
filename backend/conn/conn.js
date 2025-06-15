const mongoose = require("mongoose")
const conn = async()=>{
    try {
        const response = await mongoose.connect("mongodb+srv://username:password@cluster0.wtec4rr.mongodb.net/duo");
        if(response){
            console.log('connected to DB')
        }
    } catch (error) {
        console.log(error)
    }
}
conn()
