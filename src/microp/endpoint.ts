import { createParams, createRegexpUrl } from "../util";
import { Methods, MicropHandler } from "./app";

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