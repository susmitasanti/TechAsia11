const { getSessionUsername } = require("./admin-sessionHandler");

// middleware.js
const admin_requireLogin = (req, res, next) => {
  if (!req.session.username) {
    // if (!getSessionUsername()) {

    console.log("if working properly")
    return res.redirect('/admin');
  }
  else {
    next();
  }
};

module.exports = {
  admin_requireLogin
};
