import { MicropHandler } from "./microp";
export declare class MicropMiddleware {
    req: any;
    res: any;
    regexp: RegExp;
    params: Record<string, unknown>;
    endpointPath: string;
    handlers: Array<MicropHandler>;
    handler: (req: any, res: any, next?: ((error?: string | undefined) => void) | undefined) => void;
    constructor(handler: (req: any, res: any, next?: (error?: string) => void) => void);
}
//# sourceMappingURL=middleware.d.ts.map