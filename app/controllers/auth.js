'use strict';

const path         = require('path');
const Users        = require(path.join(process.env.PWD, '/db/models/users'));
const _            = require('underscore');
const { passport } = require(path.join(process.env.PWD, '/services/passport'));
const { app }      = require(path.join(process.env.PWD, '/services/server'));

app.post('/register', (req, res) => {
  if(req.isAuthenticated()){ return res.redirect("/home"); }

  let data = req.body;

  Users.create(data).then(() => {
    req.login(data, () => {
      return res.status(200).send(req.user);
    });
  }).catch( error => {
    return res.status(401).send(error);
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
    return res.status(200).send(req.user);
});

app.get('/logout', (req, res) => {
  passport.authenticate('local', { session : false });
  req.session.destroy();
  req.logout();
  return res.render('index');
});
