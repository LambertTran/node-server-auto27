'use strict';
/** =================================
                Packages
**==================================*/

const express = require('express');
const router  = express.Router();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Admin = require('../../models/admin');

/** =================================
                Body
**==================================*/

/** log in **/
// GET
router.get('/',(req,res) => {
  if(req.user === undefined){
    res.render('login');
  } else {
    res.redirect('/admin')
  }
})

// POST
router.post('/'
  ,passport.authenticate('local'
    ,{successRedirect:'/admin', failureRedirect:'/',failureFlash: true})
  ,(req,res) => {
    res.redirect('/admin');
})

// authenticate user
passport.use(new LocalStrategy(
  function(username,password,done){
    // var Admin = require('../../models/admin');
    Admin.validateAdmin(username, (err,admin) => {
      if(err) throw err;
      if(!admin){
        return done(null,false,{message:'Its not Admin User Name'})
      }
      Admin.validatePassword(password,admin.password, (err,isMatch) => {
        if(err) throw err;
        if(isMatch){
          return done(null,admin);
        }
        return done(null,false,{message:'Wrong Password'});
      });
    })
  }));

passport.serializeUser(function(admin, done){
  done(null, admin.id);
});

passport.deserializeUser(function(id, done) {
  Admin.getAdminById(id, function(err, admin) {
    done(err, admin);
  });
});





/** log out **/
router.get('/logout', function(req, res){
  req.session.destroy((err) => {
    res.redirect('/');
  });
});


module.exports = router;