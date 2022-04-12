import { Methods } from "../microp/app";

export class MicropEndpointError extends Error {

    constructor(path: string, method: Methods, message: string) {
        super(`${message} - ${method == Methods.ANY ? "" : method } ${path || "/~"}`)
    }
}