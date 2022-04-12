import { EventEmitter } from "events"
import { createServer, Server } from "http";
import { Func } from "mocha";
import { stringify } from "querystring";
import { validateEndpointParam } from "../util";
import { MicropEndpointError } from "../util/error";
import { Endpoint } from "./endpoint";



type VoidNoParamCallback = () => any
export type  MicropHandler = (request: string) => any
interface IMicropOptions {
    exposeOverTCP?: boolean;
}

interface IMicropStackItem {

}

interface IMicropStack {
    items: IMicropStackItem[]
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

abstract class AMicropApp extends EventEmitter {
    
    protected _server: Server = createServer()

    abstract use(handler:MicropHandler | MicropHandler[]): this
    abstract use(path:string, handler:MicropHandler|MicropHandler[]): this
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

    // TODO
    /* abstract head(method:MicropMethod): this
    abstract head(method:MicropMethod, ...rest:MicropMethod[]): this
    abstract head(path:string, method:MicropMethod): this
    abstract head(path:string, method:MicropMethod,...rest:MicropMethod[]): this


    abstract options(method:MicropMethod): this
    abstract options(method:MicropMethod, ...rest:MicropMethod[]): this
    abstract options(path:string, method:MicropMethod): this
    abstract options(path:string, method:MicropMethod,...rest:MicropMethod[]): this */

    abstract listen(port: number, callback?: VoidNoParamCallback): this
}



export class Microp extends AMicropApp implements IMicropOptions, IMicropStack {

    readonly exposeOverTCP: boolean
    private _items: IMicropStackItem[] = []
    private _listening: boolean = false;
    
    constructor(options?: IMicropOptions) {
        super()

        this.exposeOverTCP = options?.exposeOverTCP ? options?.exposeOverTCP : false
    }
    
    get listening(): boolean {
        return this._listening
    }
    // allow users get stack but do not let manuplate   
    get items(): IMicropStackItem[] {
        return this._items
    } 


    use(handler: MicropHandler[] | MicropHandler): this;
    use(path: string | MicropHandler | MicropHandler[], handler: MicropHandler | MicropHandler[]): this;
    use(path: string | MicropHandler | MicropHandler[], handler?:MicropHandler | MicropHandler[]): this {


        const Endpoints: Endpoint[] = []

        console.log(typeof handler !== "undefined")
        if(typeof path !== "string") {
            // handler
        }
        if(typeof path !== "string" && typeof handler !== "undefined") {
            console.log("multiple handler")
        }
        return this
    }
 
    /**
     * @description
     * @param {MicropHandler} method 
     * @returns {Microp} 
     */
    get(method: MicropHandler): this
    get(method: MicropHandler, ...rest: MicropHandler[]): this
    get(path: string, method: MicropHandler): this
    get(path: string, method: MicropHandler, ...rest: MicropHandler[]): this
    get(path: any, method?: any, ...rest: any[]): this {
        
        return this
    }

      /**
     * @description Register an endpoint for HTTP GET request
     * @param {MicropHandler} method 
     * @returns {Microp} 
     */
    post(method: MicropHandler): this
    post(method: MicropHandler, ...rest: MicropHandler[]): this
    post(path: string, method: MicropHandler): this
    post(path: string, method: MicropHandler, ...rest: MicropHandler[]): this
    post(path: any, method?: any, ...rest: any[]): this {
        return this
    }
     /**
     * 
     * @param {MicropHandler} method 
     * @returns {Microp} 
     */
    put(method: MicropHandler): this
    put(method: MicropHandler, ...rest: MicropHandler[]): this
    put(path: string, method: MicropHandler): this
    put(path: string, method: MicropHandler, ...rest: MicropHandler[]): this
    put(path: any, method?: any, ...rest: any[]): this {

        return this
    }
    /**
     * 
     * @param {MicropHandler} method 
     * @returns {Microp} 
     */
    patch(method: MicropHandler): this
    patch(method: MicropHandler, ...rest: MicropHandler[]): this
    patch(path: string, method: MicropHandler): this
    patch(path: string, method: MicropHandler, ...rest: MicropHandler[]): this
    patch(path: any, method?: any, ...rest: any[]): this {
        return this
    }
    /**
     * 
     * @param {MicropHandler} method 
     * @returns {Microp} 
     */
    delete(method: MicropHandler): this
    delete(method: MicropHandler, ...rest: MicropHandler[]): this
    delete(path: string, method: MicropHandler): this
    delete(path: string, method: MicropHandler, ...rest: MicropHandler[]): this
    delete(path: any, method?: any, ...rest: any[]): this {
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