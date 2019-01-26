const express = require('express');
const CONFIG = require('../config/serverConfig');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const next = require('next');

const app = next({ dir:".", dev: CONFIG.isDev });
const handler = app.getRequestHandler();

mongoose.connect(CONFIG.CONNECTION_STRING, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.prepare().then(() => {
       const server = express();

       server.use(bodyParser.json());
       server.use(bodyParser.urlencoded({ extended:false }));

       const userRoute = require('./routes/user.js');
       const systemRoute = require('./routes/system.js');

       server.use("/user", userRoute);
       server.use("/system", systemRoute);


       server.get("*", (req, res) => {
           return handler(req, res);
       });

       server.listen(CONFIG.PORT, (err) => {
           if(err) throw err;
           console.log(`> Ready on ${CONFIG.PORT}`);
       })
   });