"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microp = void 0;
const http_1 = require("http");
const types_1 = require("util/types");
const Core = require("../core");
const micropBody_1 = require("../core/micropBody");
const middleware_1 = require("./middleware");
const services = { get: (serviceName) => { } };
class Microp extends Core.MicropCore {
    constructor() {
        super();
        this.server = new http_1.Server();
        this.server.on("request", (req, res) => __awaiter(this, void 0, void 0, function* () {
            var e_1, _a, e_2, _b;
            const url = req.url || "/", request = {
                body: new micropBody_1.MicropBody(req),
                params: {},
                locals: {},
                //get: services
            };
            let _next = false;
            try {
                for (var _c = __asyncValues(this._stack), _d; _d = yield _c.next(), !_d.done;) {
                    const stack = _d.value;
                    const isHit = stack.regexp.test(url);
                    if (isHit) {
                        try {
                            for (var _e = (e_2 = void 0, __asyncValues(stack.handlers)), _f; _f = yield _e.next(), !_f.done;) {
                                const handler = _f.value;
                                if (handler instanceof middleware_1.MicropMiddleware) {
                                    handler.handler(req, res, next => {
                                        _next = true;
                                        if (res.writableEnded)
                                            return new Error("Cannot call next() after response is send");
                                    });
                                    if (!_next || res.writableEnded)
                                        return;
                                }
                                else {
                                    const response = handler(request);
                                    if (response === null || response === void 0 ? void 0 : response.status)
                                        res.statusCode = response.status;
                                    Object.entries((response === null || response === void 0 ? void 0 : response.headers) || {}).forEach(([index, key]) => {
                                        res.setHeader(index, key);
                                    });
                                    if (!(response === null || response === void 0 ? void 0 : response.body) && !(response === null || response === void 0 ? void 0 : response.status)) {
                                        console.log("no body and status");
                                        Object.assign(request.locals, (response === null || response === void 0 ? void 0 : response.locals) || {});
                                    }
                                    else {
                                        res.statusCode = (response === null || response === void 0 ? void 0 : response.status) || 200;
                                        if (typeof (response === null || response === void 0 ? void 0 : response.body) == "string")
                                            res.end(response.body);
                                        else if (Buffer.isBuffer(response === null || response === void 0 ? void 0 : response.body))
                                            res.end(response.body);
                                        else if ((0, types_1.isTypedArray)(response === null || response === void 0 ? void 0 : response.body))
                                            res.end(response.body);
                                        else if (!(response === null || response === void 0 ? void 0 : response.body))
                                            res.end();
                                        else
                                            res.end(JSON.stringify(response.body));
                                        return;
                                    }
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) yield _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) yield _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!res.writableEnded) {
                res.setHeader("content-type", "text/html");
                res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="utf-8">
                <title>Error</title>
                </head>
                <body>
                <pre>Cannot ${req.method} ${req.url}</pre>
                </body>
                </html>
                `);
            }
        }));
    }
    listen(port, callback) {
        this.server.listen(port, callback);
        return this;
    }
}
exports.Microp = Microp;
//# sourceMappingURL=microp.js.map