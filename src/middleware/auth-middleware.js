const isAuthenticated = (req, res, next) => {
    const passPath = ["/admin/login", "/admin/login/"];

    if (!req.session.user) {
        if (passPath.includes(req.path)) {
            next();
        } else {
            res.redirect("/admin/login");
            res.end()
        }
    } else {
        if (!passPath.includes(req.path)) {
            next();
        } else {
            res.redirect("/admin/dashboard");
            res.end()
        }
    }
};

module.exports = { isAuthenticated };
