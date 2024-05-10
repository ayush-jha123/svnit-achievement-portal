import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signIn=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const result=await User.findOne({email});
        
        if(!result) res.status(400).json('User Not Found');

        const Password=await bcrypt.compare(password,result.password);

        if(!Password) res.status(400).json('Incorrect Password');

        const token=jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'})

        return  res.status(200).json({result,token});
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"});
    }
}

export const signUp=async(req,res)=>{
    const {name,email,password,confirmPassword}=req.body;
    try {
        const userData=await User.findOne({email});
        
        if(userData) return res.status(400).json({message:'User Already exist'});

        if(password!=confirmPassword) return res.status(400).json({message:'Password Mismatched'});

        const hashedPassword=await bcrypt.hash(password,12);
    
        // const result=await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});
        const result=await User.create({email,password:hashedPassword,name});

        const token=jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'});

       return res.status(200).json({result,token});
        
    } catch (error) {
    //    return res.status(500).json({message:"Something went wrong"});
       next(error)
    }

}

export const google=async (req,res,next)=>{
    try {
        // console.log(req.body)
        const user=await User.findOne({email:req.body.email})
        // console.log(user)
        if(user){
           const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
           const {password:hashedPassword,...rest }=user._doc;
           const expiryDate=new Date(Date.now()+3600000);
           res.cookie('access_token',token,{httpOnly:true,expires:expiryDate}).status(200).json(rest);
        }else{
           const generatedPassword=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
           const hashedPassword=bcrypt.hashSync(generatedPassword,10);
           const newUser=new User({name:req.body.name,
            email:req.body.email,password:hashedPassword,profilePicture:req.body.photo 
        });
        await newUser.save();
        const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET)
        const {password:hashedPassword2,...rest}=newUser._doc;
        const expiryDate=new Date(Date.now()+3600000);
        res.cookie('access_token',token,{
            httpOnly:true,expires:expiryDate,
        }).status(200).json(rest);
        }
    } catch (error) {
        next(error);
    }
}
