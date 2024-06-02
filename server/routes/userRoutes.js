import express from 'express';
import {google, signIn,signUp,updateUser,fetchUser,deleteUser} from '../controllers/user.js';

const router=express.Router();
router.post('/signin',signIn);
router.post('/signup',signUp);
router.post('/google',google);
router.post('/update',updateUser);
router.get('/fetch',fetchUser);
router.delete('/delete/:id',deleteUser);

export default router;