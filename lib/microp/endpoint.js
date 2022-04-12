"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
const util_1 = require("../util");
class Endpoint {
    constructor(method, path, ...handler) {
        this.path = path ? path : "*";
        this.method = method;
        this.regexpUrl = (0, util_1.createRegexpUrl)(path ? path : "");
        this.params = (0, util_1.createParams)(path ? path : "");
        if (Array.isArray(handler)) {
            return;
        }
    }
}
exports.Endpoint = Endpoint;
//# sourceMappingURL=endpoint.js.map