"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropEndpointError = void 0;
const types_1 = require("../core/types");
class MicropEndpointError extends Error {
    constructor(path, method, message) {
        super(`${message} - ${method == types_1.Methods.ANY ? "" : method} ${path || "/~"}`);
    }
}
exports.MicropEndpointError = MicropEndpointError;
//# sourceMappingURL=error.js.map