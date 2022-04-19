/// <reference types="node" />
import { EventEmitter } from "events";
import { StackItem } from ".";
import { MicropRouter } from "..";
import { MicropHandler } from "../app";
import { MicropMiddleware } from "../app/middleware";
export declare enum Methods {
    ALL = 0,
    GET = 1,
    POST = 2,
    PUT = 3,
    PATCH = 4,
    DELETE = 5,
    HEAD = 6,
    OPTIONS = 7
}
export declare class MicropCore extends EventEmitter {
    protected _stack: Array<StackItem | MicropMiddleware>;
    protected _path?: string;
    constructor();
    constructor(options: any);
    use(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    use(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    get(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    get(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    post(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    post(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    put(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    put(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    patch(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    patch(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    delete(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    delete(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    head(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    head(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    options(path: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
    options(path: string, handler: MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware): this;
}
//# sourceMappingURL=core.d.ts.map