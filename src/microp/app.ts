import { EventEmitter } from "events"
import { createServer, IncomingMessage, Server, ServerResponse } from "http";

import { createEndpoint, setParams, validateEndpointParam } from "../util";
import { MicropEndpointError } from "../util/error";
import { MicropEndpoint } from "./endpoint";
import micropListener from "./micropListener";
import { MicropRequest } from "./request";



type VoidNoParamCallback = () => any
export type  MicropHandler = (request: MicropRequest) => IMicropResponse
interface IMicropOptions {
    exposeOverTCP?: boolean;
}



export enum Methods {
    ANY = "*",
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS"
}

export interface IMicropResponse {
    status?: number
    header?:Record<string,string>
    locals?:Record<string,unknown>
    body?: string | Record<string,unknown> | Uint16Array | Buffer
    
}

abstract class AMicropApp extends EventEmitter {
    
    protected _server: Server = createServer()
    abstract use(path:string | MicropHandler | MicropHandler[], handler?:MicropHandler|MicropHandler[]): this
    abstract get(method:MicropHandler): this
    abstract get(method:MicropHandler, ...rest:MicropHandler[]): this
    abstract get(path:string, method:MicropHandler): this
    abstract get(path:string, method:MicropHandler,...rest:MicropHandler[]): this

    abstract post(method:MicropHandler): this
    abstract post(method:MicropHandler, ...rest:MicropHandler[]): this
    abstract post(path:string, method:MicropHandler): this
    abstract post(path:string, method:MicropHandler,...rest:MicropHandler[]): this 

    abstract put(method:MicropHandler): this
    abstract put(method:MicropHandler, ...rest:MicropHandler[]): this
    abstract put(path:string, handler:MicropHandler): this
    abstract put(path:string, method:MicropHandler,...rest:MicropHandler[]): this
 
    abstract patch(method:MicropHandler): this
    abstract patch(method:MicropHandler, ...rest:MicropHandler[]): this
    abstract patch(path:string, method:MicropHandler): this
    abstract patch(path:string, method:MicropHandler,...rest:MicropHandler[]): this

    abstract delete(method:MicropHandler): this
    abstract delete(method:MicropHandler, ...rest:MicropHandler[]): this
    abstract delete(path:string, method:MicropHandler): this
    abstract delete(path:string, method:MicropHandler,...rest:MicropHandler[]): this

    abstract head(method:MicropHandler): this
    abstract head(method:MicropHandler, ...rest:MicropHandler[]): this
    abstract head(path:string, method:MicropHandler): this
    abstract head(path:string, method:MicropHandler,...rest:MicropHandler[]): this

    abstract options(method:MicropHandler): this
    abstract options(method:MicropHandler, ...rest:MicropHandler[]): this
    abstract options(path:string, method:MicropHandler): this
    abstract options(path:string, method:MicropHandler,...rest:MicropHandler[]): this

    abstract listen(port: number, callback?: VoidNoParamCallback): this
}



export class Microp extends AMicropApp implements IMicropOptions {

    readonly exposeOverTCP: boolean
    private _stack: MicropEndpoint[] = []
    private _listening: boolean = false;
    
    constructor(options?: IMicropOptions) { 
        super() 
        this.exposeOverTCP = options?.exposeOverTCP ? options?.exposeOverTCP : false
        this._server.on("request", 
            (req:IncomingMessage, res:ServerResponse) => 
            micropListener(req,res, this._stack))
        }
    
  
    // allow users get stack but do not let manuplate   
    get stack(): MicropEndpoint[] {
        return this._stack
    } 


    use(handler:MicropHandler): this
    use(handler:MicropHandler[]): this
    use(path:string, handler:MicropHandler): this
    use(path: string,handler:MicropHandler[]):this
    use(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.ANY, path, handler)
        this._stack = this._stack.concat(stack)
        return this
    }
 
    
    get(handler:MicropHandler): this
    get(handler:MicropHandler[]): this
    get(path:string, handler:MicropHandler): this
    get(path: string,handler:MicropHandler[]):this
    get(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.GET, path, handler)
        this._stack = this._stack.concat(stack)
        return this
    }

    
    post(handler:MicropHandler): this
    post(handler:MicropHandler[]): this
    post(path:string, handler:MicropHandler): this
    post(path: string,handler:MicropHandler[]):this
    post(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.POST, path, handler)
        this._stack = this._stack.concat(stack)
        return this
    }
   
    put(handler:MicropHandler): this
    put(handler:MicropHandler[]): this
    put(path:string, handler:MicropHandler): this
    put(path: string,handler:MicropHandler[]):this
    put(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.PUT, path, handler)
        this._stack = this._stack.concat(stack)
        return this
    }
    
    patch(handler:MicropHandler): this
    patch(handler:MicropHandler[]): this
    patch(path:string, handler:MicropHandler): this
    patch(path: string,handler:MicropHandler[]):this
    patch(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.PATCH, path, handler)
        this._stack = this._stack.concat(stack)
        return this
    }
   
    delete(handler:MicropHandler): this
    delete(handler:MicropHandler[]): this
    delete(path:string, handler:MicropHandler): this
    delete(path: string,handler:MicropHandler[]):this
    delete(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.DELETE, path, handler)
        this._stack = this._stack.concat(stack)
        return this
    }


     
    head(handler:MicropHandler): this
    head(handler:MicropHandler[]): this
    head(path:string, handler:MicropHandler): this
    head(path: string,handler:MicropHandler[]):this
    head(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.HEAD, path, handler)
        this._stack = this._stack.concat(stack)
        return this
    }




    options(handler:MicropHandler): this
    options(handler:MicropHandler[]): this
    options(path:string, handler:MicropHandler): this
    options(path: string,handler:MicropHandler[]):this
    options(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {
        const stack = createEndpoint(Methods.OPTIONS, path, handler)
        this._stack = this._stack.concat(stack)
        return this   
    }

    listen(port: number, callback?: VoidNoParamCallback): this {
       
        this._server.listen(port, ()=> {
            callback ? callback() : null
 
            this._listening = this._server.listening
        })
          
       
        return this
    }
 
}