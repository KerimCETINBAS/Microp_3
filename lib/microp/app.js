"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microp = void 0;
const http_1 = require("http");
const core_1 = require("../core");
const micropListener_1 = __importDefault(require("./micropListener"));
class Microp extends core_1.MicropCore {
    constructor(options) {
        super();
        this._server = (0, http_1.createServer)();
        this.exposeOverTCP = (options === null || options === void 0 ? void 0 : options.exposeOverTCP) ? options === null || options === void 0 ? void 0 : options.exposeOverTCP : false;
        this._server.on("request", (req, res) => (0, micropListener_1.default)(req, res, this._stack));
    }
    // allow users get stack but do not let manuplate   
    get stack() {
        return this._stack;
    }
    listen(port, callback) {
        this._server.listen(port, () => {
            callback ? callback() : null;
        });
        return this;
    }
}
exports.Microp = Microp;
//# sourceMappingURL=app.js.map