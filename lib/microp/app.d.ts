/// <reference types="node" />
import { EventEmitter } from "events";
import { Server } from "http";
declare type VoidNoParamCallback = () => any;
export declare type MicropHandler = (request: string) => any;
interface IMicropOptions {
    exposeOverTCP?: boolean;
}
interface IMicropStackItem {
}
interface IMicropStack {
    items: IMicropStackItem[];
}
export declare enum Methods {
    ANY = "*",
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS"
}
declare abstract class AMicropApp extends EventEmitter {
    protected _server: Server;
    abstract use(handler: MicropHandler | MicropHandler[]): this;
    abstract use(path: string, handler: MicropHandler | MicropHandler[]): this;
    abstract use(path: string | MicropHandler | MicropHandler[], handler?: MicropHandler | MicropHandler[]): this;
    abstract get(method: MicropHandler): this;
    abstract get(method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract get(path: string, method: MicropHandler): this;
    abstract get(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract post(method: MicropHandler): this;
    abstract post(method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract post(path: string, method: MicropHandler): this;
    abstract post(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract put(method: MicropHandler): this;
    abstract put(method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract put(path: string, handler: MicropHandler): this;
    abstract put(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract patch(method: MicropHandler): this;
    abstract patch(method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract patch(path: string, method: MicropHandler): this;
    abstract patch(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract delete(method: MicropHandler): this;
    abstract delete(method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract delete(path: string, method: MicropHandler): this;
    abstract delete(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract listen(port: number, callback?: VoidNoParamCallback): this;
}
export declare class Microp extends AMicropApp implements IMicropOptions, IMicropStack {
    readonly exposeOverTCP: boolean;
    private _items;
    private _listening;
    constructor(options?: IMicropOptions);
    get listening(): boolean;
    get items(): IMicropStackItem[];
    use(handler: MicropHandler[] | MicropHandler): this;
    use(path: string | MicropHandler | MicropHandler[], handler: MicropHandler | MicropHandler[]): this;
    /**
     * @description
     * @param {MicropHandler} method
     * @returns {Microp}
     */
    get(method: MicropHandler): this;
    get(method: MicropHandler, ...rest: MicropHandler[]): this;
    get(path: string, method: MicropHandler): this;
    get(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    /**
   * @description Register an endpoint for HTTP GET request
   * @param {MicropHandler} method
   * @returns {Microp}
   */
    post(method: MicropHandler): this;
    post(method: MicropHandler, ...rest: MicropHandler[]): this;
    post(path: string, method: MicropHandler): this;
    post(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    /**
    *
    * @param {MicropHandler} method
    * @returns {Microp}
    */
    put(method: MicropHandler): this;
    put(method: MicropHandler, ...rest: MicropHandler[]): this;
    put(path: string, method: MicropHandler): this;
    put(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    /**
     *
     * @param {MicropHandler} method
     * @returns {Microp}
     */
    patch(method: MicropHandler): this;
    patch(method: MicropHandler, ...rest: MicropHandler[]): this;
    patch(path: string, method: MicropHandler): this;
    patch(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    /**
     *
     * @param {MicropHandler} method
     * @returns {Microp}
     */
    delete(method: MicropHandler): this;
    delete(method: MicropHandler, ...rest: MicropHandler[]): this;
    delete(path: string, method: MicropHandler): this;
    delete(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    listen(port: number, callback?: VoidNoParamCallback): this;
}
export {};
//# sourceMappingURL=app.d.ts.map