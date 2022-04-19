import { MicropHandler } from "../app";
import { MicropMiddleware } from "../app/middleware";
export interface StackItem {
    regexp: RegExp;
    params: Record<string, unknown>;
    endpointPath: string;
    handlers: Array<MicropHandler | MicropMiddleware>;
}
export interface MiddleWareStackItem {
}
//# sourceMappingURL=stacks.d.ts.map