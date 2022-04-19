"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const app_1 = require("../app");
const middleware_1 = require("../app/middleware");
exports.default = (method, path, handler, mPath) => {
    if (typeof path == "string") {
        if (handler instanceof app_1.MicropRouter)
            return handler.Stack;
        else if (handler instanceof middleware_1.MicropMiddleware) {
            return (0, _1.createStack)(method, mPath + path, [handler]);
        }
        else if (typeof handler == "object")
            return (0, _1.createStack)(method, mPath + path, handler);
        else
            return (0, _1.createStack)(method, mPath + path, [handler]);
    }
    else {
        if (path instanceof app_1.MicropRouter)
            return path.Stack;
        else if (path instanceof middleware_1.MicropMiddleware) {
            return (0, _1.createStack)(method, mPath + "*", [path]);
        }
        else if (typeof path == "object") {
            // array
            return (0, _1.createStack)(method, mPath + "*", path);
        }
        else {
            // single
            return (0, _1.createStack)(method, mPath + "*", [path]);
        }
    }
};
//# sourceMappingURL=handlerParser.js.map