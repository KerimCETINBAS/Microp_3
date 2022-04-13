import { MicropEndpoint } from "../microp/endpoint";
import { Methods, MicropHandler } from "../core/types";
/**
 * @description create regexp from route path, on request compare with requested url regexp.test(req.url)
 * @param {string} path
 * @returns {RegExp}
 */
export declare const createRegexpUrl: (path: string) => RegExp;
/**
* @description
*      parse url params and segment index from route path
*      /todo/:name - param name and segment 1
*
* @param {string} path
* @returns {Record<string, number>}
*/
export declare const createParams: (path: string) => Record<string, unknown>;
export declare const setParams: (url: string, params: Record<string, unknown>) => Record<string, string | number>;
export declare const createEndpoint: (method: Methods, path: string | MicropHandler | MicropHandler[], handler?: MicropHandler | MicropHandler[] | undefined) => MicropEndpoint[];
//# sourceMappingURL=index.d.ts.map