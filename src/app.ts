import express,{Express,Request,Response} from "express";
import multer from "multer";


const app:Express = express()

const upload = multer({
  storage:multer.diskStorage({
    destination:(req,file:Express.Multer.File,cb)=>{
      cb(null,`${__dirname}/../uploads`)
    },
    filename:(req,file:Express.Multer.File,cb)=>{
      cb(null,file.originalname)
    }
  })
}).array("files",10)

app.post("/upload",upload,(req:Request,res:Response)=>{
  console.log(__dirname);
  
  res.send("File uploaded");
})

app.get("/download/:filename",(req,res)=>{
  let filename:string = req.params.filename
  res.download(`${__dirname}/../uploads/${filename}`)
})

const PORT:number = 3000
app.listen(PORT,()=>{
  console.log(`server running at ${PORT}`);
})