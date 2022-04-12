import { MicropHandler } from "../microp/app";
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
export declare const createParams: (path: string) => Record<string, undefined>;
export declare const validateEndpointParam: (param: MicropHandler | MicropHandler[] | undefined) => boolean;
//# sourceMappingURL=index.d.ts.map