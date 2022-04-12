/// <reference types="node" />
import { IncomingMessage } from "http";
import { Part } from "formidable";
import IncomingForm from "formidable/Formidable";
import { Writable } from "stream";
export interface IMicropBodyOptions {
    /**
     * sets encoding for incoming form fields
     *
     * @default 'utf-8'
     */
    encoding?: BufferEncoding | undefined;
    /**
     * the directory for placing file uploads in. You can move them later by using fs.rename()
     *
     * @default os.tmpdir()
     */
    uploadDir?: string | undefined;
    /**
     * to include the extensions of the original files or not
     *
     * @default false
     */
    keepExtensions?: boolean | undefined;
    /**
     * allow upload empty files
     *
     * @default true
     */
    allowEmptyFiles?: boolean | undefined;
    /**
     * the minium size of uploaded file
     *
     * @default 1
     */
    minFileSize?: number | undefined;
    /**
     * limit the amount of uploaded files, set Infinity for unlimited
     *
     * @default Infinity
     */
    maxFiles?: number | undefined;
    /**
     * limit the size of uploaded file
     *
     * @default 200 * 1024 * 1024
     */
    /**
     * limit the size of the batch of uploaded files
     *
     * @default options.maxFileSize
     */
    maxTotalFileSize?: number | undefined;
    /**
     * limit the number of fields, set 0 for unlimited
     *
     * @default 1000
     */
    /**
     * limit the amount of memory all fields together (except files) can allocate in bytes
     *
     * @default 20 * 1024 * 1024
     */
    maxFieldsSize?: number | undefined;
    /**
     * include checksums calculated for incoming files, set this to some hash algorithm, see
     * crypto.createHash for available algorithms
     *
     * @default false
     */
    hashAlgorithm?: string | false | undefined;
    /**
     * which by default writes to host machine file system every file parsed; The function should
     * return an instance of a Writable stream that will receive the uploaded file data. With this
     * option, you can have any custom behavior regarding where the uploaded file data will be
     * streamed for. If you are looking to write the file uploaded in other types of cloud storages
     * (AWS S3, Azure blob storage, Google cloud storage) or private file storage, this is the option
     * you're looking for. When this option is defined the default behavior of writing the file in the
     * host machine file system is lost.
     *
     * @default null
     */
    fileWriteStreamHandler?: (() => Writable) | undefined;
    /**
     * when you call the .parse method, the files argument (of the callback) will contain arrays of
     * files for inputs which submit multiple files using the HTML5 multiple attribute. Also, the
     * fields argument will contain arrays of values for fields that have names ending with '[]'
     *
     * @default false
     */
    multiples?: boolean | undefined;
    /**
     * Use it to control newFilename. Must return a string. Will be joined with
     * options.uploadDir.
     *
     * @default undefined
     */
    filename?: (name: string, ext: string, part: Part, form: IncomingForm) => string;
}
export declare class MicropBody {
    private form;
    data: Record<string, unknown>;
    req: IncomingMessage;
    constructor(req: IncomingMessage);
    body(options: IMicropBodyOptions): Promise<Record<string, unknown>>;
}
//# sourceMappingURL=body.d.ts.map