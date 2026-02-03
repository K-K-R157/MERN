exports.getLogin=(req,res,next)=>{
    res.render('auth/login',{pageTitle:'Login',isLoggedIn:false});
}

exports.postLogin=(req,res,next)=>{
    //  req.isLoggedIn=true;
    console.log(req.isLoggedIn,req.body); 
    res.cookie('isLoginIn',true);
    res.redirect('/');
}