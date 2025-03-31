const mongoose = require("mongoose")
const {createHmac,randomBytes}=require("crypto")
const {createTokenForUser,validateToken}=require('../services/auth')

const userSchema= new mongoose.Schema({
    fullName:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    salt:{
        type:String,
        // required:true, //Causes an error, where the salt being calculated on the go is an issue.
    },
    password:{
        type:String,
        required:true,
    },
    profileImageURL:{
        type:String,
        default:'../public/images/user.png'
    },
    role:{
        type:String,
        enum:['USER',"ADMIN"], //Always is pointed to this.
        default:'USER',
    }
},{timestamps:true})

userSchema.pre('save',function (next){ //Use function and not arrow function when 'this' is used as arrow function pulls the this from outside the function scope.
    const user=this;
    if(!user.isModified("password")) return; //Not able to modify the password.
    const salt=randomBytes(16).toString('hex')
    const hashedPassword=createHmac('sha256',salt).update(user.password).digest("hex")
    this.salt=salt
    this.password=hashedPassword
    next(); //Continues to the saving process.
})

userSchema.static('matchPasswordAndGenerateToken',async function (email,password){ //Virtuals.
    const user=await this.findOne({email})
    if(!user) throw new Error("User not found!")
    const salt=user.salt
    const hashedPassword=user.password 
    const userProvidedHash=createHmac("sha256",salt).update(password).digest("hex")
    if(hashedPassword!==userProvidedHash) throw new Error("Wrong password!")
    const token=createTokenForUser(user)
    return token
})

const User=mongoose.model('user',userSchema)

module.exports=User