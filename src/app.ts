import express , { Application, Express, Request, Response } from "express";
const app:Application = express();

// Lib For Log
// const morgan = require('morgan');

// cross-origin-request handeler
// var cors = require('cors');

// MiddelWare for file upload
// const { upload, multiUpload } = require('./MiddelWare/fileUpload/FileUpload');
// const config = require('./Configuration/Config');
const usercontroller = require('./Controller/UserController')

// MiddelWare lib 
// app.use(cors());
// app.use(morgan('tiny'));

// Inbuild MiddelWare
// app.use('/Images',express.static('Images'));
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
 
// Assign Controllers
app.use("/User",usercontroller);

// Common function
// app.post("/upload", upload.single('file'), (req:Request,res:Response) =>{
//    console.log(req.file)
//     res.json({path:`${config.Api}${req.file.path}`});
// });

// if request not found
app.all('/',(req:Request,res:Response)=>{
    res.status(404).json({message: 'Resource Not Found'})
});

app.listen(2001,()=>{
    console.log(`Service on ${2001}`);
});