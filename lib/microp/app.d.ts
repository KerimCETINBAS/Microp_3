import { MicropCore } from "../core";
import { VoidNoParamCallback } from "../core/types";
import { MicropEndpoint } from "./endpoint";
interface IMicropOptions {
    exposeOverTCP?: boolean;
}
export declare class Microp extends MicropCore implements IMicropOptions {
    private _server;
    readonly exposeOverTCP: boolean;
    constructor(options?: IMicropOptions);
    get stack(): MicropEndpoint[];
    listen(port: number, callback?: VoidNoParamCallback): this;
}
export {};
//# sourceMappingURL=app.d.ts.map