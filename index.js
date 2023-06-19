const express = require("express");
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

var register = require("./routes/registration-route");
var login = require("./routes/login-route");
var dashboard = require("./routes/user-dashboard-route");
var update = require("./routes/update-route");
var deleteUser=require("./routes/delete-route")
var admin_login = require("./routes/admin-login-route")
var admin_dashboard = require("./routes/admin-dashboard-route")

app.use(express.json());
app.use(session({
  secret: "Susmita@2004",
  cookie: {
    sameSite: 'strict'
  }
}))

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('D:/TechAsia11/views/login.ejs')
});

app.use('/register', register)
app.use('/login', login)
app.use('/dashboard', dashboard)
app.use('/update', update)
app.use('/delete', deleteUser)
app.use('/admin', admin_login)
app.use('/admin-dashboard', admin_dashboard)


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
