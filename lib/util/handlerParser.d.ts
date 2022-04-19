import { MicropHandler, MicropRouter } from "../app";
import { MicropMiddleware } from "../app/middleware";
import { Methods as method, StackItem } from "../core";
declare const _default: (method: method, path: string | MicropHandler | MicropHandler[] | MicropRouter | MicropMiddleware, handler?: MicropMiddleware | MicropHandler | MicropHandler[] | MicropRouter | undefined, mPath?: string | undefined) => StackItem[];
export default _default;
//# sourceMappingURL=handlerParser.d.ts.map