"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microp = exports.Methods = void 0;
const events_1 = require("events");
const http_1 = require("http");
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
        this._items = [];
        this._listening = false;
        this.exposeOverTCP = (options === null || options === void 0 ? void 0 : options.exposeOverTCP) ? options === null || options === void 0 ? void 0 : options.exposeOverTCP : false;
    }
    get listening() {
        return this._listening;
    }
    // allow users get stack but do not let manuplate   
    get items() {
        return this._items;
    }
    use(path, handler) {
        const Endpoints = [];
        console.log(typeof handler !== "undefined");
        if (typeof path !== "string") {
            // handler
        }
        if (typeof path !== "string" && typeof handler !== "undefined") {
            console.log("multiple handler");
        }
        return this;
    }
    get(path, method, ...rest) {
        return this;
    }
    post(path, method, ...rest) {
        return this;
    }
    put(path, method, ...rest) {
        return this;
    }
    patch(path, method, ...rest) {
        return this;
    }
    delete(path, method, ...rest) {
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