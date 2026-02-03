exports.getLogin=(req,res,next)=>{
    res.render('auth/login',{pageTitle:'Login',isLoggedIn:false});
}

exports.postLogin=(req,res,next)=>{
    //  req.isLoggedIn=true;
    console.log(req.isLoggedIn,req.body);   
    // res.cookie('isLoggedIn',true);
    req.session.isLoggedIn=true;
    res.redirect('/');
}


exports.postLogout=(req,res,next)=>{
    //  req.isLoggedIn=true;
    // res.cookie('isLoggedIn',false);
    //  req.session.isLoggedIn=false;
    req.session.destroy();
    res.redirect('/login');
}