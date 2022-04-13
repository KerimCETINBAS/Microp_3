import { MicropRouter } from "../router"
import { MicropEndpoint } from "../microp/endpoint"

import { Methods, MicropHandler  } from "../core/types"
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
 export const createParams = (path: string) : Record<string, unknown > => {
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
    }, {}) as Record<string, unknown>

    return params
}

export const setParams = (url:string, params: Record<string, unknown>) : Record<string,string | number> => {
     
    const segments = url.trim().split("/").filter(t => t !="")
    const _param : Record<string, string | number>= {}
    Object.keys(params).forEach(param => {
        _param[param] = isNaN( parseInt(segments[Number(params[param])])) != true ? parseInt(segments[Number(params[param])]) : segments[Number(params[param])]
    })

    return _param
}

export const createEndpoint = 
    (method: Methods, path: string |  MicropHandler | MicropHandler[], 
    handler?: MicropHandler | MicropHandler[]) : MicropEndpoint[] =>  {

        
        
        const endpoints: MicropEndpoint[] = []
        console.log("router", MicropRouter)
        if( path instanceof MicropRouter) {
            // handler router

            console.log("router")
        }
        else if(Array.isArray(path) && typeof handler !== undefined) {
            if(!(path.length > 0)) throw new Error("registering endpoint without handler")
            // multiple handler without path

          
            for(const _handler of path) {
                
                endpoints.push(new MicropEndpoint(Methods.ANY, "/", _handler))
            }
        }
        else if(typeof path == "function") {
            //single handler without path
            endpoints.push(new MicropEndpoint(Methods.ANY, "/", <MicropHandler>handler))
         
        }
      /*   else if(typeof path === 'string' && handler instanceof MicropRouter) {
            // handler router
            console.log("router")
        } */
        else if(typeof path === 'string' && typeof handler == "function") {
            //single handler "with" path

            console.log("single")
            endpoints.push(new MicropEndpoint(Methods.ANY, path, <MicropHandler>handler))
          

        }
        else if(typeof path === 'string' && Array.isArray(handler)) {
            if(!(handler.length > 0)) throw new Error("registering endpoint without handler")

            for(const _handler of handler) {

                endpoints.push(new MicropEndpoint(Methods.ANY, path, _handler))
            }
        }
        
        else if(typeof path === 'undefined'){
            console.log("no handler")
            throw new Error("registering endpoint without handler")
        }

      
        return endpoints
}

