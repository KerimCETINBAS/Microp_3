/// <reference types="node" />
import EventEmitter from "events";
import { IncomingMessage, ServerResponse } from "http";
import { IMicropBodyOptions } from "./body";
export declare class MicropRequest extends EventEmitter {
    private originalRequest;
    private originalResponse;
    private _params;
    private setBody;
    private setParam;
    private _body?;
    locals: Record<string, unknown>;
    constructor(req: IncomingMessage, res: ServerResponse);
    get _originalRequest(): IncomingMessage;
    get _originalResponse(): ServerResponse;
    set params(val: Record<string, string | number>);
    body(options: IMicropBodyOptions): Promise<Record<string, unknown>>;
    get params(): Record<string, string | number>;
}
//# sourceMappingURL=request.d.ts.map