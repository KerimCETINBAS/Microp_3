"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microp = exports.Methods = void 0;
const events_1 = require("events");
const http_1 = require("http");
const util_1 = require("../util");
const micropListener_1 = __importDefault(require("./micropListener"));
var Methods;
(function (Methods) {
    Methods["ANY"] = "*";
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PUT"] = "PUT";
    Methods["PATCH"] = "PATCH";
    Methods["DELETE"] = "DELETE";
    Methods["HEAD"] = "HEAD";
    Methods["OPTIONS"] = "OPTIONS";
})(Methods = exports.Methods || (exports.Methods = {}));
class AMicropApp extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this._server = (0, http_1.createServer)();
    }
}
class Microp extends AMicropApp {
    constructor(options) {
        super();
        this._stack = [];
        this._listening = false;
        this.exposeOverTCP = (options === null || options === void 0 ? void 0 : options.exposeOverTCP) ? options === null || options === void 0 ? void 0 : options.exposeOverTCP : false;
        this._server.on("request", (req, res) => (0, micropListener_1.default)(req, res, this._stack));
    }
    // allow users get stack but do not let manuplate   
    get stack() {
        return this._stack;
    }
    use(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.ANY, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    get(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.GET, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    post(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.POST, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    put(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.PUT, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    patch(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.PATCH, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    delete(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.DELETE, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    head(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.HEAD, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    options(path, handler) {
        const stack = (0, util_1.createEndpoint)(Methods.OPTIONS, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    listen(port, callback) {
        this._server.listen(port, () => {
            callback ? callback() : null;
            this._listening = this._server.listening;
        });
        return this;
    }
}
exports.Microp = Microp;
//# sourceMappingURL=app.js.map