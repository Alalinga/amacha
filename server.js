//setting express
const express = require('express');
const app  = express();

// setting socket IO
const server = require('http').createServer(app);
const {Server} = require('socket.io')
const io = new Server(server)

const bodyParser = require('body-parser');
const PORT = 8000 || process.env.PORT;


// setting middlewares for app 
app.use(express.json())
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:true}))


// listening on server port 

server.listen(PORT,()=>{
    console.log(`Server listerning on port http://localhost:${PORT}`)
});

