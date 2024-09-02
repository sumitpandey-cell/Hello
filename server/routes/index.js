import express from 'express';
import registerUser from '../controllers/registerUser.js';
import checkEmailAndPassword from "../controllers/checkEmailAndPassword.js"
import deleteUser from "../controllers/logout.js"
import updateUserDetail from "../controllers/updateUserDetail.js"
import { Router } from 'express';
const router = Router();
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage})


router.post('/registerUser',upload.single("profileUrl"), registerUser);
router.post('/login', checkEmailAndPassword)
router.get('/deleteUser', deleteUser)
router.post('/updateUser', updateUserDetail)

export default router;
