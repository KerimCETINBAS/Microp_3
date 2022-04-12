import { MicropHandler } from "../microp/app"

/**
 * @description create regexp from route path, on request compare with requested url regexp.test(req.url)
 * @param {string} path 
 * @returns {RegExp}
 */
 export const createRegexpUrl = (path: string) : RegExp =>
    new RegExp("^"+path.replace(/:\w+/g, "\\w+") + "\/?$")



    /**
 * @description 
 *      parse url params and segment index from route path 
 *      /todo/:name - param name and segment 1
 *            
 * @param {string} path
 * @returns {Record<string, number>}
 */
 export const createParams = (path: string) : Record<string, undefined > => {
    const segments = path.trim().split("/").filter(t => t != "")
    const params = segments.map((segment, index)=> {
        const isRegexp = /^:\w+$/.test(segment)
        return {
            isRegexp,
            index,
            param: segment.replace(":","")
        }
        
    }).filter(s => s.isRegexp).reduce((a:any, v) => {
        a[v.param] = v.index; return a;
    }, {}) as Record<string, undefined>
    return params
}




export const validateEndpointParam = (param: MicropHandler | MicropHandler[] | undefined) : boolean => {


    if(param instanceof <MicropHandler>Array) {
        
    }
    return true
}