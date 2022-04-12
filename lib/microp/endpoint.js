"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropEndpoint = void 0;
const util_1 = require("../util");
class MicropEndpoint {
    constructor(method, path, ...handler) {
        this.handlers = [];
        this.path = path || "";
        this.method = method;
        this.regexpUrl = (0, util_1.createRegexpUrl)(path ? path : "");
        this.params = (0, util_1.createParams)(path ? path : "");
        this.handlers = handler;
    }
}
exports.MicropEndpoint = MicropEndpoint;
//# sourceMappingURL=endpoint.js.map