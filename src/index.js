// Basic server configuration
const express = require('express')
const {ServerConfig} = require('./config/index')
const apiRoutes = require('./routes')

const app = express();

//console.log(Logger);


app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,()=>{
  console.log(`Server succesfully started on port ${ServerConfig.PORT}`);
})