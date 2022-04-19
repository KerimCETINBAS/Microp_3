import { StackItem } from "../core";
import Core = require("../core");
import { MicropMiddleware } from "./middleware";


export class MicropRouter extends Core.MicropCore {
   constructor(path?: string) {
       super()
        if(path) {
            this._path = path
        }
   }  

  

    public get Stack(): Array<StackItem| MicropMiddleware> {
        return this._stack
    }
  
}