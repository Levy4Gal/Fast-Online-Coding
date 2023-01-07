require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const express = require ('express')
const codeBlocksRoutes = require('./routes/codeBlocksRoutes.js')
const mentorConnected = require('./routes/mentorConnectedRoutes.js')

//socket.io imports
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/codeBlocks' , codeBlocksRoutes)
app.use('/api/mentor',mentorConnected)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log("connected to mongoDb && listenning on " + process.env.PORT + "!")
    })
})
.catch((err)=>{
    console.log(err)
})



//featch 
// let booleanValue = false;
// app.get('/boolean-endpoint', (req, res) => {
//     res.json(booleanValue);
//   });

// app.post('/boolean-endpoint', (req, res) => {
//     booleanValue = req.body.booleanValue;
//     res.json(booleanValue);
//   });

// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
//   });


//socket.io
app.use(cors())
    const server = http.createServer(app);
    
    const io = new Server(server,{
        cors:{
            origin:"http://localhost:3000",
            methods: ["GET" , "POST"],
        },
    })
    
    io.on("connection",(socket)=>{
        console.log(`user connected: ${socket.id}`)
        socket.on("modify_code" ,(data)=>{
            console.log("code from student: " + data)
            socket.broadcast.emit("receive_code_changes",data)
        })
    })

    server.listen(3001, ()=>{
        console.log("server is running")
    })   

  
    




