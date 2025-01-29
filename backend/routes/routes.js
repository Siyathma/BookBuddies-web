import express from 'express';
import { GetProfile, SignIn, SignUp } from '../controllers/UserController';


const router = express.Router()

router.get("/getprofile/:id",GetProfile)
// router.post("/updateprofile/:id",UpdateProfile)
router.post("/signup", SignUp);
router.post("/login", SignIn)


export default {router}