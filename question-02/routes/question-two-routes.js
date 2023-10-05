// Setup express router
const express = require("express");
const router = express.Router();

// Route handlers
// -------------------------------------------------------------------------

// TODO Your Code Here
router.get("/", function(req, res) {
    res.locals.homePage = true;
    res.locals.title = "Home";
    res.render("home");
});

router.get("/hillary", function(req, res) {
    res.locals.hillaryPage = true;
    res.locals.title = "Edmund Hillary";
    res.render("hillary");
});

router.get("/sheppard", function(req, res) {
    res.locals.sheppardPage = true;
    res.locals.title = "Kate Sheppard";
    res.render("sheppard");
});

// -------------------------------------------------------------------------

module.exports = router;