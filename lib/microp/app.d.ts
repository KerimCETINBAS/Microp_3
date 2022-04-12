/// <reference types="node" />
import { EventEmitter } from "events";
import { Server } from "http";
import { MicropEndpoint } from "./endpoint";
import { MicropRequest } from "./request";
declare type VoidNoParamCallback = () => any;
export declare type MicropHandler = (request: MicropRequest) => IMicropResponse;
interface IMicropOptions {
    exposeOverTCP?: boolean;
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
export interface IMicropResponse {
    status?: number;
    header?: Record<string, string>;
    locals?: Record<string, unknown>;
    body?: string | Record<string, unknown> | Uint16Array | Buffer;
}
declare abstract class AMicropApp extends EventEmitter {
    protected _server: Server;
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
    abstract head(method: MicropHandler): this;
    abstract head(method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract head(path: string, method: MicropHandler): this;
    abstract head(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract options(method: MicropHandler): this;
    abstract options(method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract options(path: string, method: MicropHandler): this;
    abstract options(path: string, method: MicropHandler, ...rest: MicropHandler[]): this;
    abstract listen(port: number, callback?: VoidNoParamCallback): this;
}
export declare class Microp extends AMicropApp implements IMicropOptions {
    readonly exposeOverTCP: boolean;
    private _stack;
    private _listening;
    constructor(options?: IMicropOptions);
    get stack(): MicropEndpoint[];
    use(handler: MicropHandler): this;
    use(handler: MicropHandler[]): this;
    use(path: string, handler: MicropHandler): this;
    use(path: string, handler: MicropHandler[]): this;
    get(handler: MicropHandler): this;
    get(handler: MicropHandler[]): this;
    get(path: string, handler: MicropHandler): this;
    get(path: string, handler: MicropHandler[]): this;
    post(handler: MicropHandler): this;
    post(handler: MicropHandler[]): this;
    post(path: string, handler: MicropHandler): this;
    post(path: string, handler: MicropHandler[]): this;
    put(handler: MicropHandler): this;
    put(handler: MicropHandler[]): this;
    put(path: string, handler: MicropHandler): this;
    put(path: string, handler: MicropHandler[]): this;
    patch(handler: MicropHandler): this;
    patch(handler: MicropHandler[]): this;
    patch(path: string, handler: MicropHandler): this;
    patch(path: string, handler: MicropHandler[]): this;
    delete(handler: MicropHandler): this;
    delete(handler: MicropHandler[]): this;
    delete(path: string, handler: MicropHandler): this;
    delete(path: string, handler: MicropHandler[]): this;
    head(handler: MicropHandler): this;
    head(handler: MicropHandler[]): this;
    head(path: string, handler: MicropHandler): this;
    head(path: string, handler: MicropHandler[]): this;
    options(handler: MicropHandler): this;
    options(handler: MicropHandler[]): this;
    options(path: string, handler: MicropHandler): this;
    options(path: string, handler: MicropHandler[]): this;
    listen(port: number, callback?: VoidNoParamCallback): this;
}
export {};
//# sourceMappingURL=app.d.ts.map