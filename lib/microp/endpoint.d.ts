import { Methods, MicropHandler } from "./app";
export declare class Endpoint {
    readonly path: string;
    readonly method: Methods;
    readonly regexpUrl: RegExp;
    private params;
    constructor(method: Methods, path: string | undefined, ...handler: MicropHandler[]);
}
//# sourceMappingURL=endpoint.d.ts.map