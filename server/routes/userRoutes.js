import express from 'express';
import {google, signIn,signUp,updateUser} from '../controllers/user.js';

const router=express.Router();
router.post('/signin',signIn);
router.post('/signup',signUp);
router.post('/google',google);
router.post('/update',updateUser);

export default router;