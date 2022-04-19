"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegexpUrl = void 0;
const createRegexpUrl = (path) => new RegExp("^" + path.replace(/:\w+/g, "\\w+") + "\/?$");
exports.createRegexpUrl = createRegexpUrl;
//# sourceMappingURL=createRegexp.js.map