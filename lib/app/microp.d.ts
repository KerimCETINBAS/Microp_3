/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import Core = require("../core");
import { MicropBody } from "../core/micropBody";
export interface MicropResponse {
    body?: Record<string, unknown> | string | Uint16Array | Buffer;
    headers?: Record<string, string>;
    locals?: Record<string, unknown>;
    status?: number;
}
declare const services: {
    get: (serviceName: string) => void;
};
export interface MicropRequest {
    body: MicropBody;
    params: Record<string, unknown>;
    locals: Record<string, unknown>;
    headers?: Record<string, string>;
    cookies?: Record<string, string>;
    get?: typeof services;
}
export declare type MicropHandler = (request: any) => MicropResponse;
export interface MicropOriginalRequest extends IncomingMessage {
    [key: string]: unknown;
}
export interface MicropOriginalResponse extends ServerResponse {
    [key: string]: unknown;
}
export declare class Microp extends Core.MicropCore {
    private server;
    constructor();
    listen(port: number, callback?: () => void): this;
}
export {};
//# sourceMappingURL=microp.d.ts.map