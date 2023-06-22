// middleware.js
const admin_requireLogin = (req, res, next) => {
    if (!req.session.username) {
    console.log("if working properly")
      return res.redirect('/admin');
    }
    else{
    next();
    }
  };
  
  module.exports = {
    admin_requireLogin
  };
  