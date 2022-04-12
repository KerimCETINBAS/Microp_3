"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEndpointParam = exports.createEndpoint = exports.setParams = exports.createParams = exports.createRegexpUrl = void 0;
const app_1 = require("../microp/app");
const endpoint_1 = require("../microp/endpoint");
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
const setParams = (url, params) => {
    const segments = url.trim().split("/").filter(t => t != "");
    const _param = {};
    Object.keys(params).forEach(param => {
        _param[param] = isNaN(parseInt(segments[Number(params[param])])) != true ? parseInt(segments[Number(params[param])]) : segments[Number(params[param])];
    });
    return _param;
};
exports.setParams = setParams;
const createEndpoint = (method, path, handler) => {
    const endpoints = [];
    if (Array.isArray(path) && typeof handler !== undefined) {
        if (!(path.length > 0))
            throw new Error("registering endpoint without handler");
        // multiple handler without path
        for (const _handler of path) {
            endpoints.push(new endpoint_1.MicropEndpoint(app_1.Methods.ANY, "/", _handler));
        }
    }
    else if (typeof path == "function") {
        //single handler without path
        endpoints.push(new endpoint_1.MicropEndpoint(app_1.Methods.ANY, "/", handler));
    }
    else if (typeof path === 'string' && typeof handler == "function") {
        //single handler "with" path
        console.log("single");
        endpoints.push(new endpoint_1.MicropEndpoint(app_1.Methods.ANY, path, handler));
    }
    else if (typeof path === 'string' && Array.isArray(handler)) {
        if (!(handler.length > 0))
            throw new Error("registering endpoint without handler");
        for (const _handler of handler) {
            endpoints.push(new endpoint_1.MicropEndpoint(app_1.Methods.ANY, path, _handler));
        }
    }
    else if (typeof path === 'undefined') {
        console.log("no handler");
        throw new Error("registering endpoint without handler");
    }
    return endpoints;
};
exports.createEndpoint = createEndpoint;
const validateEndpointParam = (param) => {
    if (param instanceof Array) {
    }
    return true;
};
exports.validateEndpointParam = validateEndpointParam;
//# sourceMappingURL=index.js.map