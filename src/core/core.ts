import {EventEmitter} from "events";
import { StackItem } from ".";
import {  MicropRouter} from "..";
import { MicropHandler } from "../app";
import { MicropMiddleware } from "../app/middleware";
import { createStack } from "../util";
import handlerParser from "../util/handlerParser";
import { MiddleWareStackItem } from "./stacks";




export enum Methods {
    ALL,
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
    HEAD,
    OPTIONS
}

export class MicropCore extends EventEmitter {
    protected _stack: Array<StackItem | MicropMiddleware>= []
    protected _path?: string 
    constructor()
    constructor(options: any)
    constructor(options?: any){
        super()
    }

    use(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    use(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    use(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {
        
      
        this._stack.push(...handlerParser(Methods.ALL,  path, handler, this._path || ""))
        return this
    }

    get(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    get(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    get(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {

        this._stack.push(...handlerParser(Methods.GET, path, handler))
        return this;
    }

    post(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    post(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    post(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {

        this._stack.push(...handlerParser(Methods.POST, path, handler))
        return this;
    }

    put(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    put(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    put(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {

        this._stack.push(...handlerParser(Methods.PUT, path, handler))
        return this;
    }

    patch(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    patch(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    patch(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {

        this._stack.push(...handlerParser(Methods.PATCH, path, handler))
        return this;
    }

    delete(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    delete(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    delete(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {

       
        this._stack.push(...handlerParser(Methods.DELETE, path, handler))
        return this;
    }

    head(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    head(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    head(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {

        this._stack.push(...handlerParser(Methods.HEAD, path, handler))
        return this;
    }

    options(path:MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware): this
    options(path: string ,handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware):this
    options(path: string | MicropHandler | MicropHandler[] | MicropRouter| MicropMiddleware ,handler?: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware ):this {

       
        this._stack.push(...handlerParser(Methods.OPTIONS, path, handler))
        return this;
    }

    
}