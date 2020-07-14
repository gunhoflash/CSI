"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var app = express_1.default();
var httpServer = http_1.default.createServer(app);
var HTTP_PORT = 2020;
// route
app.get('/', function (req, res) {
    res.send('Hello, world!');
});
// start http server
httpServer.listen(HTTP_PORT);
console.log("Server listen port " + HTTP_PORT + "...");
//# sourceMappingURL=index.js.map