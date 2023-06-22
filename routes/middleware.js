// middleware.js
const requireLogin = (req, res, next) => {
    if (!req.session.email) {
    console.log("if working properly")
      return res.redirect('/login');
    }
    else{
    next();
    }
  };
  
  module.exports = {
    requireLogin
  };
  