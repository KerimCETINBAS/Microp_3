"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEndpoint = void 0;
const types_1 = require("../core/types");
const endpoint_1 = require("../microp/endpoint");
const router_1 = require("../router");
const createEndpoint = (method, path, handler) => {
    const endpoints = [];
    console.log("router", router_1.MicropRouter);
    if (path instanceof router_1.MicropRouter) {
        // handler router
        console.log("router");
    }
    else if (Array.isArray(path) && typeof handler !== undefined) {
        if (!(path.length > 0))
            throw new Error("registering endpoint without handler");
        // multiple handler without path
        for (const _handler of path) {
            endpoints.push(new endpoint_1.MicropEndpoint(types_1.Methods.ANY, "/", _handler));
        }
    }
    else if (typeof path == "function") {
        //single handler without path
        endpoints.push(new endpoint_1.MicropEndpoint(types_1.Methods.ANY, "/", handler));
    }
    /*   else if(typeof path === 'string' && handler instanceof MicropRouter) {
          // handler router
          console.log("router")
      } */
    else if (typeof path === 'string' && typeof handler == "function") {
        //single handler "with" path
        console.log("single");
        endpoints.push(new endpoint_1.MicropEndpoint(types_1.Methods.ANY, path, handler));
    }
    else if (typeof path === 'string' && Array.isArray(handler)) {
        if (!(handler.length > 0))
            throw new Error("registering endpoint without handler");
        for (const _handler of handler) {
            endpoints.push(new endpoint_1.MicropEndpoint(types_1.Methods.ANY, path, _handler));
        }
    }
    else if (typeof path === 'undefined') {
        console.log("no handler");
        throw new Error("registering endpoint without handler");
    }
    return endpoints;
};
exports.createEndpoint = createEndpoint;
//# sourceMappingURL=createEndpoint.js.map