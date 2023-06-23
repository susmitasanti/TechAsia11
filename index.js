const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const session = require('express-session');
const ejs = require('ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var register = require("./routes/registration-route");
var login = require("./routes/login-route");
var dashboard = require("./routes/user-dashboard-route");
var update = require("./routes/update-route");
var deleteUser=require("./routes/delete-route")
var admin_login = require("./routes/admin-login-route")
var admin_dashboard = require("./routes/admin-dashboard-route")
var forgot_password = require("./routes/forgot-password-route")
var reset_password = require("./routes/reset-password-route")
var logout = require("./routes/logout-route")
var statistics = require("./routes/statistics-route")
var admin_profile=require("./routes/admin-profile-routes")
var graph = require("./routes/graph-route")
var user_profile = require("./routes/user-profile-route")


app.use(express.json());

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  console.log('Started')
  res.redirect('/login')
});

app.use('/register', register)
app.use('/login', login)
app.use('/dashboard', dashboard)
app.use('/update', update)
app.use('/delete', deleteUser)
app.use('/admin', admin_login)
app.use('/admin-dashboard', admin_dashboard)
app.use('/forgot', forgot_password)
app.use('/reset/xyz', reset_password)
app.use('/logout', logout)
app.use('/statistics', statistics)
app.use('/admin-profile', admin_profile)
app.use('/graph', graph)
app.use('/user-profile', user_profile)



/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


