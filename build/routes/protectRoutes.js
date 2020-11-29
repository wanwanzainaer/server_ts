"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send('Not Permitted');
}
router.get('/', requireAuth, function (req, res) {
    res.send('You have the Permmit,Welcome to protected routes, logged in user');
});
