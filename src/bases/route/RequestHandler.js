import {forceFormatUrlPath} from "../../utils/Utils.js";

export default class RequestHandler {
    #path
    #handler

    constructor(path, handler) {
        if (path === null || path === undefined)
            throw new Error(`Path is require for resource handler. ${path}`);
        this.#path = forceFormatUrlPath(path);
        if (typeof (handler) !== "function")
            throw new Error(`Handler must be function for resource handler.`);
        this.#handler = handler;
    }

    getPath() {
        return this.#path;
    }

    getHandler() {
        return this.#handler;
    }
};


