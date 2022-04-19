"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRegexp_1 = require("./createRegexp");
const createParams = (path) => {
    return {};
};
exports.default = (method, path, handlers) => {
    let regexp;
    let params = {};
    if (path == "*")
        regexp = /.*/g;
    else {
        regexp = (0, createRegexp_1.createRegexpUrl)(path),
            params = createParams(path);
    }
    const stack = {
        regexp,
        params,
        handlers,
        endpointPath: path
    };
    return [stack];
};
//# sourceMappingURL=createStack.js.map