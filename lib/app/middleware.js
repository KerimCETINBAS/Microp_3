"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropMiddleware = void 0;
class MicropMiddleware {
    constructor(handler) {
        this.regexp = new RegExp("");
        this.params = {};
        this.endpointPath = "";
        this.handlers = [];
        this.handler = handler;
    }
}
exports.MicropMiddleware = MicropMiddleware;
//# sourceMappingURL=middleware.js.map