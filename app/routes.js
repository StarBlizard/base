const path         = require('path');
const { app }      = require(path.join(process.env.PWD, '/services/server'));
const { passport } = require(path.join(process.env.PWD, '/services/passport'));

// Controllers
const { alive, index, home } = require('./controllers/main');
const isAuthenticated        = require('./middleware/isAuthenticated');

const authController         = require('./controllers/auth');

// WatchDog
app.get('/alive', alive);

// Views
app.get('/', index);
app.get('/home', isAuthenticated, home);
app.get('/alive', alive);

// Auth
app.post('/login'   , passport.authenticate('local'), authController.granted);
app.post('/register', authController.register);
app.get('/granted' , authController.granted);
app.get('/logout'   , authController.logout);
