import { StackItem } from "../core";
import Core = require("../core");
import { MicropMiddleware } from "./middleware";
export declare class MicropRouter extends Core.MicropCore {
    constructor(path?: string);
    get Stack(): Array<StackItem | MicropMiddleware>;
}
//# sourceMappingURL=router.d.ts.map