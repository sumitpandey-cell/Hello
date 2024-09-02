import express from 'express';
import connect from './config/connection.js';
import cors from 'cors';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';

connect("mongodb://localhost:27017/Chat");
const app = express();
const PORT = 8000;


//Middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.get('/login', (req, res)=>{
    res.send('Login page');
})

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});