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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropRequest = void 0;
const events_1 = __importDefault(require("events"));
const body_1 = require("./body");
class MicropRequest extends events_1.default {
    constructor(req, res) {
        super();
        this._params = {};
        this.setBody = false;
        this.setParam = false;
        this.locals = {};
        this.originalRequest = req;
        this.originalResponse = res;
    }
    get _originalRequest() {
        return this.originalRequest;
    }
    get _originalResponse() {
        return this.originalResponse;
    }
    set params(val) {
        if (!this.setParam) {
            this._params = val;
            this.setParam = true;
        }
    }
    body(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._body)
                return this._body;
            return this._body = yield (new body_1.MicropBody(this.originalRequest)).body(options);
        });
    }
    get params() {
        return this._params;
    }
}
exports.MicropRequest = MicropRequest;
//# sourceMappingURL=request.js.map