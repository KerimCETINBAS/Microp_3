/// <reference types="node" />
import { MicropRequest } from "../microp/request";
export declare type VoidNoParamCallback = () => any;
export declare type MicropHandler = (request: MicropRequest) => IMicropResponse;
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
//# sourceMappingURL=types.d.ts.map