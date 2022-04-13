import { MicropHandler, Methods } from "../core/types";
export declare class MicropEndpoint {
    readonly path: string;
    readonly method: Methods;
    readonly regexpUrl: RegExp;
    readonly handlers: MicropHandler[];
    params: Record<string, unknown>;
    constructor(method: Methods, path: string | undefined, ...handler: MicropHandler[]);
}
//# sourceMappingURL=endpoint.d.ts.map