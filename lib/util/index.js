"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEndpointParam = exports.createParams = exports.createRegexpUrl = void 0;
/**
 * @description create regexp from route path, on request compare with requested url regexp.test(req.url)
 * @param {string} path
 * @returns {RegExp}
 */
const createRegexpUrl = (path) => new RegExp("^" + path.replace(/:\w+/g, "\\w+") + "\/?$");
exports.createRegexpUrl = createRegexpUrl;
/**
* @description
*      parse url params and segment index from route path
*      /todo/:name - param name and segment 1
*
* @param {string} path
* @returns {Record<string, number>}
*/
const createParams = (path) => {
    const segments = path.trim().split("/").filter(t => t != "");
    const params = segments.map((segment, index) => {
        const isRegexp = /^:\w+$/.test(segment);
        return {
            isRegexp,
            index,
            param: segment.replace(":", "")
        };
    }).filter(s => s.isRegexp).reduce((a, v) => {
        a[v.param] = v.index;
        return a;
    }, {});
    return params;
};
exports.createParams = createParams;
const validateEndpointParam = (param) => {
    if (param instanceof Array) {
    }
    return true;
};
exports.validateEndpointParam = validateEndpointParam;
//# sourceMappingURL=index.js.map