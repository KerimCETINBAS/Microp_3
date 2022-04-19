"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropRouter = void 0;
const Core = require("../core");
class MicropRouter extends Core.MicropCore {
    constructor(path) {
        super();
        if (path) {
            this._path = path;
        }
    }
    get Stack() {
        return this._stack;
    }
}
exports.MicropRouter = MicropRouter;
//# sourceMappingURL=router.js.map