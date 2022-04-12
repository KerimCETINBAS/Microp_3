import { createParams, createRegexpUrl } from "../util";
import { Methods, MicropHandler } from "./app";

export class Endpoint {

    readonly path: string
    readonly method: Methods
    readonly regexpUrl: RegExp
    private params: Record<string,unknown>
    constructor (method: Methods,path: string | undefined, ...handler: MicropHandler[]) {
        this.path = path ? path : "*";
        this.method = method
        this.regexpUrl = createRegexpUrl(path ? path : "")
        this.params = createParams(path ? path : "")

        if(Array.isArray(handler)) {


            return;
        }
        

    }
}