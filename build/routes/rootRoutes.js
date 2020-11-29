"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    //req.session
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in </div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged in </div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
