

module.exports.renderComingSoon = function(req,res){
    res.render('ComingSoon.ejs');
};

module.exports.test = function(req, res){
    res.send('Just Testing');
};
