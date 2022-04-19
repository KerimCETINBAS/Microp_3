"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropCore = exports.Methods = void 0;
const events_1 = require("events");
const handlerParser_1 = require("../util/handlerParser");
var Methods;
(function (Methods) {
    Methods[Methods["ALL"] = 0] = "ALL";
    Methods[Methods["GET"] = 1] = "GET";
    Methods[Methods["POST"] = 2] = "POST";
    Methods[Methods["PUT"] = 3] = "PUT";
    Methods[Methods["PATCH"] = 4] = "PATCH";
    Methods[Methods["DELETE"] = 5] = "DELETE";
    Methods[Methods["HEAD"] = 6] = "HEAD";
    Methods[Methods["OPTIONS"] = 7] = "OPTIONS";
})(Methods = exports.Methods || (exports.Methods = {}));
class MicropCore extends events_1.EventEmitter {
    constructor(options) {
        super();
        this._stack = [];
    }
    use(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.ALL, path, handler, this._path || ""));
        return this;
    }
    get(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.GET, path, handler));
        return this;
    }
    post(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.POST, path, handler));
        return this;
    }
    put(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.PUT, path, handler));
        return this;
    }
    patch(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.PATCH, path, handler));
        return this;
    }
    delete(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.DELETE, path, handler));
        return this;
    }
    head(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.HEAD, path, handler));
        return this;
    }
    options(path, handler) {
        this._stack.push(...(0, handlerParser_1.default)(Methods.OPTIONS, path, handler));
        return this;
    }
}
exports.MicropCore = MicropCore;
//# sourceMappingURL=core.js.map