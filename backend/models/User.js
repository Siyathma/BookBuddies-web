import { model } from "mongoose";

const UserModel = model('Users',{
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    nic:{
        type:String,
    },
    gender:{
        type: String,
    },
    password:{
        type:String,
    }
})
export{UserModel}