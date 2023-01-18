const express = require('express');
const app = express();

// Lib For Log
const morgan = require('morgan');

// cross-origin-request handeler
var cors = require('cors');

// MiddelWare for file upload
const { upload, multiUpload } = require('./MiddelWare/fileUpload/FileUpload');
const config = require('./Configuration/Config');
const usercontroller = require('./Controller/UserController')

// MiddelWare lib 
app.use(cors());
app.use(morgan('tiny'));

// Inbuild MiddelWare
app.use('/Images',express.static('Images'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
 
// Assign Controllers
app.use("/User",usercontroller);

// Common function
app.post("/upload", upload.single('file'), (req,res) =>{
   console.log(req.file)
    res.json({path:`${config.Api}${req.file.path}`});
});

// if request not found
app.all('*',(req,res)=>{
    res.status(404).json({message: 'Resource Not Found'})
});

app.listen(config.Port,()=>{
    console.log(`Service on ${config.Port}`);
});