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

       const userRoute = require('./routes/user.js')
       const systemRoute = require('./routes/system.js')
       app.use("/user", userRoute)
       app.use("/system", systemRoute)

       app.get("*", (req, res) => {
           return handle(req, res)
       })

       app.listen(CONFIG.PORT, (err) => {
           if(err) throw err
           console.log(`> Ready on ${CONFIG.PORT}`)
       })
   })
   .catch(exception => {
       console.error(exception.stack)
       process.exit(1)
   })