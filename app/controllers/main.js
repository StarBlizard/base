'use strict';

const path     = require('path');
const { app }  = require(path.join(process.env.PWD, '/services/server'));

app.get('/alive', function(req, res){
  res.status(200).send('Ok');
});

app.get('/index', function(req, res){
  if(!req.isAuthenticated()){
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  } else{
    res.redirect("/home");
  }
});

app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
});
