import express, {Request, Response} from "express";
//step--> 1
import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import passport from 'passport';

import {connectToDatabase} from "./Database/DB";

//step--> 2
const app = express();
app.use(express.json());//It parses incoming JSON requests and puts the parsed data in req.body.
app.use(session({ secret: 'this-is-my-secret-key' }));
app.use(passport.initialize());
app.use(passport.session());

connectToDatabase();


// //step--> 3
// passport.use(
//     new LocalStrategy((username, password, done) => {
//       // Replace this example logic with your own user authentication logic
//       User.findOne({ username: username }, (err, user) => {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     })
//   );


//   //step--> 4
//   app.post('/register', (req, res) => {
//     // Implement user registration logic
//   });
  
//   app.post('/login', passport.authenticate('local'), (req, res) => {
//     // Successful login
//   });
  
//   app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/login');
//   });


// //   step--->5
// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/login');
//   }
  
//   app.get('/protected', ensureAuthenticated, (req, res) => {
//     // Access granted only to authenticated users
//   });




app.listen(8000, ()=>{
    console.log("server started on port 8000")
})