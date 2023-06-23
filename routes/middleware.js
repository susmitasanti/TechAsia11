// middleware.js
const requireLogin = (req, res, next) => {
    if (!req.session.email && !req.session.authorized) {
    console.log("if working properly")
      // return res.redirect('/login');
      res.render('D:/TechAsia11/views/login.ejs', {alert : true})
    }
    else{
    next();
    }
  };
  
  module.exports = {
    requireLogin
  };
  