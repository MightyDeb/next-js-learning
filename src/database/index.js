import mongoose from "mongoose"

const connectToDB= async()=>{
  const url= 'mongodb+srv://dMaity2005:root@cluster0.wu7zuwk.mongodb.net/'
  mongoose.connect(url).then(()=>
  console.log('Database connection is successful')).catch(error=> console.log(error))
}

export default connectToDB