"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var loginRoutes_1 = require("./routes/loginRoutes");
var rootRoutes_1 = require("./routes/rootRoutes");
var logoutRoutes_1 = require("./routes/logoutRoutes");
var protectRoutes_1 = require("./routes/protectRoutes");
var app = express_1.default();
// app.use(express.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['asdfzxcv'] }));
app.use('/', rootRoutes_1.router);
app.use('/login', loginRoutes_1.router);
app.use('/logout', logoutRoutes_1.router);
app.use('/protected', protectRoutes_1.router);
app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
