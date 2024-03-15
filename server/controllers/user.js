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
    const {firstName,lastName,email,password,confirmPassword}=req.body;
    try {
        const userData=await User.findOne({email});
        
        if(userData) return res.status(400).json({message:'User Already exist'});

        if(password!=confirmPassword) return res.status(400).json({message:'Password Mismatched'});

        const hashedPassword=await bcrypt.hash(password,12);
    
        const result=await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});

        const token=jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'});

       return res.status(200).json({result,token});
        
    } catch (error) {
       return res.status(500).json({message:"Something went wrong"});
    }

}