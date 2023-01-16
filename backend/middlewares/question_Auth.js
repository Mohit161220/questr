const questionAuth = (req, res, next) => {
    if(req.question.user._id.equals(req.user.id)){
        return next();
    }
    res.status(401).end();
}

module.exports = questionAuth;