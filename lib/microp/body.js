"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicropBody = void 0;
const formidable_1 = __importDefault(require("formidable"));
class MicropBody {
    constructor(req) {
        this.form = (0, formidable_1.default)({});
        this.data = {};
        this.req = req;
        this.form.parse(this.req, (err, fields, files) => {
            if (err) {
                throw new Error();
            }
            for (const [index, file] of Object.entries(files)) {
                const _file = {
                    isFile: true,
                    file
                };
                this.data[index] = _file;
            }
            this.data = Object.assign(Object.assign({}, this.data), Object.assign({}, ...Object.entries(fields).map(([index, field]) => ({ [index]: field }))));
        });
    }
    body(options) {
        return new Promise((resolve, reject) => {
            this.req.on("end", () => {
                resolve(this.data);
            });
        });
    }
}
exports.MicropBody = MicropBody;
//# sourceMappingURL=body.js.map