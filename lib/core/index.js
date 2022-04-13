"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropCore = void 0;
const events_1 = require("events");
const util_1 = require("../util");
const types_1 = require("./types");
class MicropCore extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this._stack = [];
    }
    use(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.ANY, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    get(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.GET, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    post(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.POST, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    put(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.PUT, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    patch(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.PATCH, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    delete(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.DELETE, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    head(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.HEAD, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
    options(path, handler) {
        const stack = (0, util_1.createEndpoint)(types_1.Methods.OPTIONS, path, handler);
        this._stack = this._stack.concat(stack);
        return this;
    }
}
exports.MicropCore = MicropCore;
exports.default = MicropCore;
//# sourceMappingURL=index.js.map