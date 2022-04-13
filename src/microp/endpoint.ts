
import { MicropHandler, Methods } from "../core/types";
import { createParams, createRegexpUrl } from "../util";

export class MicropEndpoint {

    readonly path: string
    readonly method: Methods
    readonly regexpUrl: RegExp
    readonly handlers:MicropHandler[] = []
    params: Record<string,unknown>
    constructor (method: Methods,path: string | undefined, ...handler: MicropHandler[]) {

        this.path = path || "";
        this.method = method
        this.regexpUrl = createRegexpUrl(path ? path : "")
        this.params = createParams(path ? path : "")
        this.handlers = handler
       

    }
}