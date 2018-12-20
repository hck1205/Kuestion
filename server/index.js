const express = require('express')
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir:".", dev })
const handle = app.getRequestHandler();

mongoose.connect(CONFIG.CONNECTION_STRING, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.prepare()
   .then(() => {
       const app = express()
       app.use(bodyParser.json())
       app.use(bodyParser.urlencoded({extended:false}));

       const studentRoute = require('./routes/student.js')
       app.use("/api/student", studentRoute)

       app.get("*", (req, res) => {
           return handle(req, res)
       })

       app.listen(CONFIG.PORT, (error) => {
           if(error) throw error
           console.log(`> Ready on ${CONFIG.PORT}`)
       })
   })
   .catch(exception => {
       console.error(exception.stack)
       process.exit(1)
   })