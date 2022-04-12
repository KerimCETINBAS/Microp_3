"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropEndpointError = void 0;
const app_1 = require("../microp/app");
class MicropEndpointError extends Error {
    constructor(path, method, message) {
        super(`${message} - ${method == app_1.Methods.ANY ? "" : method} ${path || "/~"}`);
    }
}
exports.MicropEndpointError = MicropEndpointError;
//# sourceMappingURL=error.js.map