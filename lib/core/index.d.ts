/// <reference types="node" />
import { EventEmitter } from "events";
import { MicropEndpoint } from "../microp/endpoint";
import { MicropHandler } from "./types";
export declare class MicropCore extends EventEmitter {
    protected _stack: MicropEndpoint[];
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
}
export default MicropCore;
//# sourceMappingURL=index.d.ts.map