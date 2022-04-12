"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const request_1 = require("./request");
exports.default = (req, res, _stack) => __awaiter(void 0, void 0, void 0, function* () {
    const _request = new request_1.MicropRequest(req, res);
    let isBodyReturned = false;
    for (const item of _stack) {
        if (isBodyReturned)
            break;
        if (item.regexpUrl.test(req.url || "")) {
            _request.params = (0, util_1.setParams)(req.url || "", item.params);
            for (const handler of item.handlers) {
                if (isBodyReturned)
                    break;
                const response = yield handler(_request);
                if ((response === null || response === void 0 ? void 0 : response.locals) !== undefined) {
                    _request.locals = Object.assign(Object.assign({}, _request.locals), response.locals);
                }
                if ((response === null || response === void 0 ? void 0 : response.body) !== undefined) {
                    isBodyReturned = true;
                    res.end(JSON.stringify(response.body));
                }
            }
        }
    }
});
//# sourceMappingURL=micropListener.js.map