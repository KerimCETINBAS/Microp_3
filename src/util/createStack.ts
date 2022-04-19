import {   MicropRouter , MicropHandler,} from "../app";
import { createRegexpUrl } from "./createRegexp";
import { Methods, StackItem } from "../core";
import { MicropMiddleware } from "../app/middleware";


const createParams = (path: string) => {

    return {}
}




export default (
    method: Methods, 
    path: string,  
    handlers: Array<MicropHandler|MicropMiddleware> ): StackItem[] => {
  
    let regexp: RegExp
    let params: Record<string, unknown> = {}

    if(path == "*")  regexp = /.*/g
    else {
        regexp = createRegexpUrl(path),
        params = createParams(path)
    }
 

    
    
    const stack: StackItem = {
        regexp,
        params,
        handlers,
        endpointPath: path
    }

    return [stack]
   
  
    
    
}
