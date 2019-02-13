const express = require('express');
const CONFIG = require('../config/serverConfig');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const next = require('next');

const NextApp = next({ dir:".", dev: CONFIG.isDev });
const NextHandler = NextApp.getRequestHandler();


mongoose.connect(CONFIG.CONNECTION_STRING, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

NextApp.prepare().then(() => {

      const ExpressApp = express();

      ExpressApp.use(bodyParser.json());
      ExpressApp.use(bodyParser.urlencoded({ extended:false }));

      const userRoute = require('./routes/user.js');
      const joinRoute = require('./routes/join.js');
      const systemRoute = require('./routes/system.js');

      ExpressApp.use("/user", userRoute);
      ExpressApp.use("/member", joinRoute);
      ExpressApp.use("/system", systemRoute);

      ExpressApp.get("/member/join", (req, res) => {
        return NextApp.render(req, res, '/member/policy')
      });
      // server.get('/posts/:id', (req, res) => {
      //   return app.render(req, res, '/posts', { id: req.params.id })
      // })
      ExpressApp.get("*", (req, res) => {
       return NextHandler(req, res);
      });

      ExpressApp.listen(CONFIG.PORT, (err) => {
        if(err) throw err;
        console.log(`> Ready on ${CONFIG.PORT}`);
      })
  });
