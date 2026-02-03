const User = require("../models/User");

const {check, validationResult}=require('express-validator');   

const bcrypt =require('bcryptjs');

exports.getLogin=(req,res,next)=>{
    res.render('auth/login',{pageTitle:'Login',isLoggedIn:false});
}


// exports.postLogin=(req,res,next)=>{
//     // console.log(req.isLoggedIn,req.body);   
//     // req.session.isLoggedIn=true;
//     const {email,password}=req.body;
//     User.findOne({email}).then(user=>{
//         console.log(user);
//         if(!user){
//             return res.render('auth/login',{pageTitle:'Login',isLoggedIn:'false',errorMessages:['User not found']});
//         }
//         // req.session.isLoggedIn=true;
//         // req.session.user=user;
//         res.redirect('/');
//     }).catch(err=>{
//         return res.render('auth/login',{pageTitle:'Login',isLoggedIn:'false',errorMessages:[err.message]});
//     })
// }


exports.postLogin= async (req,res,next)=>{
    
    const {email,password}=req.body;
     try {
        const user=await User.findOne({email});
        if(!user) throw new Error('User Not Found');

        const isMatch= await bcrypt.compare(password,user.password);

        if(!isMatch) throw new Error('Password does not match');

        req.session.isLoggedIn=true;
        // req.session.user=user;       // give error in newer version of mongoose and node 
        req.session.userId = user._id.toString();    // use this and add a middleware to access user from mongodb using user id from session
        await req.session.save();
        res.redirect('/');
     }catch(err) {
        return res.render('auth/login',{pageTitle:'Login',isLoggedIn:'false',errorMessages:[err.message]});
    };
}



exports.postLogout=(req,res,next)=>{
    req.session.destroy();
    res.redirect('/login');
}

exports.getSignup=(req,res,next)=>{
    res.render('auth/signup',{pageTitle:'signup',isLoggedIn:false});
}



exports.postSignup=[

    // first Name Validator

    check('firstName')
    .notEmpty()
    .withMessage("First name is mandatory")
    .trim()
    .isLength({min: 2})
    .withMessage('First Name should be minimum 2 chars')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('First Name should only contain english aplhabets'),


    // Last Name Validator
    check('lastName')
    .trim()
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage('Last Name should only contain english aplhabets'),

    
    // Email Validator
    check('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),

    // Password Validator
    check('password')
    .trim()
    .isLength({min: 8})
    .withMessage('Password should be minium 8 chars')
    .matches(/[a-z]/)
    .withMessage('Password should have atleast one small alphabet')
    .matches(/[A-Z]/)
    .withMessage('Password should have atleast one capital alphabet')
    .matches(/[!@#$%^&*_":?]/)
    .withMessage('Password should have atleast one Special Character'),

     // Confirm Password Validator
    check('confirm_password')
    .trim()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
        }
        return true;
    }),

    // User Type Validator
    check('userType')
    .trim()
    .notEmpty()
    .withMessage('User type is required')
    .isIn(['guest', 'host'])
    .withMessage('User type is invalid'),

    // Terms and Conditions Validator
    check('termsAccepted')
    .notEmpty()
    .withMessage('Terms and Conditions must be accepted'),

     (req,res,next)=>{
        console.log('user came for signup :',req.body);
        const errors=validationResult(req);
       if (!errors.isEmpty()) {
            return res.status(422).render('auth/signup', 
            {
            pageTitle: 'Login', 
            isLoggedIn: false,
            errorMessages: errors.array().map(err => err.msg),
            oldInput: req.body,
            })
        }

        const {firstName,lastName,email,password,userType}=req.body;

        // const user=new User({firstName,lastName,email,password,userType});

        // user.save().then(result=>{
        //     console.log(result);
        //     res.redirect('/login');
        // })
        // .catch(error=>{
        //      return res.status(422).render('auth/signup', 
        //     {
        //     pageTitle: 'Login', 
        //     isLoggedIn: false,
        //     errorMessages: [error],
        //     oldInput: req.body,
        //     }
        // )});

        bcrypt.hash(password,12).then(hashedPassword=>{
            console.log(hashedPassword);
            const user=new User({firstName,lastName,email,password:hashedPassword,userType});

            user.save().then(result=>{
                res.redirect('/login');
            })
            .catch(error=>{
                return res.status(422).render('auth/signup', 
                {
                pageTitle: 'signup', 
                isLoggedIn: false,
                errorMessages: [error],
                oldInput: req.body,
                }
            )});
        })

    }
]




// exports.postSignup = [
//     // First Name Validator
//     check('firstName')
//         .notEmpty()
//         .withMessage("First name is mandatory")
//         .trim()
//         .isLength({min: 2})
//         .withMessage('First Name should be minimum 2 chars')
//         .matches(/^[a-zA-Z\s]+$/)
//         .withMessage('First Name should only contain english aplhabets'),

//     // Last Name Validator
//     check('lastName')
//         .trim()
//         .matches(/^[a-zA-Z\s]*$/)
//         .withMessage('Last Name should only contain english aplhabets'),

//     // Email Validator
//     check('email')
//         .isEmail()
//         .withMessage('Please enter a valid email')
//         .normalizeEmail(),

//     // Password Validator
//     check('password')
//         .trim()
//         .isLength({min: 8})
//         .withMessage('Password should be minimum 8 chars')
//         .matches(/[a-z]/)
//         .withMessage('Password should have atleast one small alphabet')
//         .matches(/[A-Z]/)
//         .withMessage('Password should have atleast one capital alphabet')
//         .matches(/[!@#$%^&*_":?]/)
//         .withMessage('Password should have atleast one Special Character'),

//     // Confirm Password Validator
//     check('confirm_password')
//         .trim()
//         .custom((value, { req }) => {
//             if (value !== req.body.password) {
//                 throw new Error('Confirm Password does not match Password');
//             }
//             return true;
//         }),

//     // User Type Validator
//     check('userType')
//         .trim()
//         .notEmpty()
//         .withMessage('User type is required')
//         .isIn(['guest', 'host'])
//         .withMessage('User type is invalid'),

//     // Terms and Conditions Validator
//     check('termsAccepted')
//         .notEmpty()
//         .withMessage('Terms and Conditions must be accepted'),

//     // Final handler
//     async (req, res, next) => {
//         console.log('=== SIGNUP HANDLER CALLED ===');
//         console.log('User came for signup:', req.body);
        
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(422).render('auth/signup', {
//                 pageTitle: 'Signup', 
//                 isLoggedIn: false,
//                 errorMessages: errors.array().map(err => err.msg),
//                 oldInput: req.body,
//             });
//         }

//         const {firstName, lastName, email, password, userType} = req.body;

//         try {
//             const hashedPassword = await bcrypt.hash(password, 12);
//             console.log('Password hashed successfully');
            
//             const user = new User({
//                 firstName,
//                 lastName,
//                 email,
//                 password: hashedPassword,
//                 userType
//             });

//             await user.save();
//             console.log('User saved successfully');
//             res.redirect('/login');
            
//         } catch (error) {
//             console.error('Signup error:', error);
//             return res.status(422).render('auth/signup', {
//                 pageTitle: 'Signup', 
//                 isLoggedIn: false,
//                 errorMessages: [error.message],
//                 oldInput: req.body,
//             });
//         }
//     }
// ];