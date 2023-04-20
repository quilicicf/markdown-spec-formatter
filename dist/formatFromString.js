var $3Lhe3$path = require("path");
var $3Lhe3$process = require("process");
var $3Lhe3$url = require("url");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $dfad2de4ddbd453c$export$2e2bcd8739ae039);
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('vfile').VFileCompatible} VFileCompatible
 * @typedef {import('vfile').VFileValue} VFileValue
 * @typedef {import('..').Processor} Processor
 * @typedef {import('..').Plugin} Plugin
 * @typedef {import('..').Preset} Preset
 * @typedef {import('..').Pluggable} Pluggable
 * @typedef {import('..').PluggableList} PluggableList
 * @typedef {import('..').Transformer} Transformer
 * @typedef {import('..').Parser} Parser
 * @typedef {import('..').Compiler} Compiler
 * @typedef {import('..').RunCallback} RunCallback
 * @typedef {import('..').ProcessCallback} ProcessCallback
 *
 * @typedef Context
 * @property {Node} tree
 * @property {VFile} file
 */ /**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */ function $2e2c1408d9e9d499$export$dd911e13ecb11e05(error) {
    if (error) throw error;
}


var $6e86b2ac314f5402$exports = {};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ $6e86b2ac314f5402$exports = function isBuffer(obj) {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};


var $09d2ed0130d345e0$exports = {};
"use strict";
var $09d2ed0130d345e0$var$hasOwn = Object.prototype.hasOwnProperty;
var $09d2ed0130d345e0$var$toStr = Object.prototype.toString;
var $09d2ed0130d345e0$var$defineProperty = Object.defineProperty;
var $09d2ed0130d345e0$var$gOPD = Object.getOwnPropertyDescriptor;
var $09d2ed0130d345e0$var$isArray = function isArray(arr) {
    if (typeof Array.isArray === "function") return Array.isArray(arr);
    return $09d2ed0130d345e0$var$toStr.call(arr) === "[object Array]";
};
var $09d2ed0130d345e0$var$isPlainObject = function isPlainObject(obj) {
    if (!obj || $09d2ed0130d345e0$var$toStr.call(obj) !== "[object Object]") return false;
    var hasOwnConstructor = $09d2ed0130d345e0$var$hasOwn.call(obj, "constructor");
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && $09d2ed0130d345e0$var$hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return false;
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj);
    return typeof key === "undefined" || $09d2ed0130d345e0$var$hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var $09d2ed0130d345e0$var$setProperty = function setProperty(target, options) {
    if ($09d2ed0130d345e0$var$defineProperty && options.name === "__proto__") $09d2ed0130d345e0$var$defineProperty(target, options.name, {
        enumerable: true,
        configurable: true,
        value: options.newValue,
        writable: true
    });
    else target[options.name] = options.newValue;
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var $09d2ed0130d345e0$var$getProperty = function getProperty(obj, name) {
    if (name === "__proto__") {
        if (!$09d2ed0130d345e0$var$hasOwn.call(obj, name)) return void 0;
        else if ($09d2ed0130d345e0$var$gOPD) // In early versions of node, obj['__proto__'] is buggy when obj has
        // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
        return $09d2ed0130d345e0$var$gOPD(obj, name).value;
    }
    return obj[name];
};
$09d2ed0130d345e0$exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== "object" && typeof target !== "function") target = {};
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) // Extend the base object
        for(name in options){
            src = $09d2ed0130d345e0$var$getProperty(target, name);
            copy = $09d2ed0130d345e0$var$getProperty(options, name);
            // Prevent never-ending loop
            if (target !== copy) {
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && ($09d2ed0130d345e0$var$isPlainObject(copy) || (copyIsArray = $09d2ed0130d345e0$var$isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && $09d2ed0130d345e0$var$isArray(src) ? src : [];
                    } else clone = src && $09d2ed0130d345e0$var$isPlainObject(src) ? src : {};
                    // Never move original objects, clone them
                    $09d2ed0130d345e0$var$setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy)
                    });
                // Don't bring in undefined values
                } else if (typeof copy !== "undefined") $09d2ed0130d345e0$var$setProperty(target, {
                    name: name,
                    newValue: copy
                });
            }
        }
    }
    // Return the modified object
    return target;
};


function $2a5eff7c75fac51a$export$2e2bcd8739ae039(value) {
    if (typeof value !== "object" || value === null) return false;
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}


/**
 * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
 * @typedef {(...input: Array<any>) => any} Middleware
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 *   Middleware.
 */ /**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */ function $c822911a670f131a$export$91b56f5ca106aa43() {
    /** @type {Array<Middleware>} */ const fns = [];
    /** @type {Pipeline} */ const pipeline = {
        run: run,
        use: use
    };
    return pipeline;
    /** @type {Run} */ function run(...values) {
        let middlewareIndex = -1;
        /** @type {Callback} */ const callback = values.pop();
        if (typeof callback !== "function") throw new TypeError("Expected function as last argument, not " + callback);
        next(null, ...values);
        /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {Array<any>} output
     */ function next(error, ...output) {
            const fn = fns[++middlewareIndex];
            let index = -1;
            if (error) {
                callback(error);
                return;
            }
            // Copy non-nullish input into values.
            while(++index < values.length)if (output[index] === null || output[index] === undefined) output[index] = values[index];
            // Save the newly created `output` for the next call.
            values = output;
            // Next or done.
            if (fn) $c822911a670f131a$export$4997ffc0176396a6(fn, next)(...output);
            else callback(null, ...output);
        }
    }
    /** @type {Use} */ function use(middelware) {
        if (typeof middelware !== "function") throw new TypeError("Expected `middelware` to be a function, not " + middelware);
        fns.push(middelware);
        return pipeline;
    }
}
function $c822911a670f131a$export$4997ffc0176396a6(middleware, callback) {
    /** @type {boolean} */ let called;
    return wrapped;
    /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */ function wrapped(...parameters) {
        const fnExpectsCallback = middleware.length > parameters.length;
        /** @type {any} */ let result;
        if (fnExpectsCallback) parameters.push(done);
        try {
            result = middleware.apply(this, parameters);
        } catch (error) {
            const exception = /** @type {Error} */ error;
            // Well, this is quite the pickle.
            // `middleware` received a callback and called it synchronously, but that
            // threw an error.
            // The only thing left to do is to throw the thing instead.
            if (fnExpectsCallback && called) throw exception;
            return done(exception);
        }
        if (!fnExpectsCallback) {
            if (result instanceof Promise) result.then(then, done);
            else if (result instanceof Error) done(result);
            else then(result);
        }
    }
    /**
   * Call `callback`, only once.
   * @type {Callback}
   */ function done(error, ...output) {
        if (!called) {
            called = true;
            callback(error, ...output);
        }
    }
    /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */ function then(value) {
        done(null, value);
    }
}


/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {import('./minurl.shared.js').URL} URL
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Value} Value
 */ /**
 * @typedef {Record<string, unknown> & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef {'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex'} BufferEncoding
 *   Encodings supported by the buffer class.
 *
 *   This is a copy of the types from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/90a4ec8/types/node/buffer.d.ts#L170>
 *
 * @typedef {Options | URL | Value | VFile} Compatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 *   Set multiple values.
 * @property {Value | null | undefined} [value]
 *   Set `value`.
 * @property {string | null | undefined} [cwd]
 *   Set `cwd`.
 * @property {Array<string> | null | undefined} [history]
 *   Set `history`.
 * @property {URL | string | null | undefined} [path]
 *   Set `path`.
 * @property {string | null | undefined} [basename]
 *   Set `basename`.
 * @property {string | null | undefined} [stem]
 *   Set `stem`.
 * @property {string | null | undefined} [extname]
 *   Set `extname`.
 * @property {string | null | undefined} [dirname]
 *   Set `dirname`.
 * @property {Data | null | undefined} [data]
 *   Set `data`.
 *
 * @typedef Map
 *   Raw source map.
 *
 *   See:
 *   <https://github.com/mozilla/source-map/blob/58819f0/source-map.d.ts#L15-L23>.
 * @property {number} version
 *   Which version of the source map spec this map is following.
 * @property {Array<string>} sources
 *   An array of URLs to the original source files.
 * @property {Array<string>} names
 *   An array of identifiers which can be referenced by individual mappings.
 * @property {string | undefined} [sourceRoot]
 *   The URL root from which all sources are relative.
 * @property {Array<string> | undefined} [sourcesContent]
 *   An array of contents of the original source files.
 * @property {string} mappings
 *   A string of base64 VLQs which contain the actual mappings.
 * @property {string} file
 *   The generated file this source map is associated with.
 *
 * @typedef {{[key: string]: unknown} & VFileCoreOptions} Options
 *   Configuration.
 *
 *   A bunch of keys that will be shallow copied over to the new file.
 *
 * @typedef {Record<string, unknown>} ReporterSettings
 *   Configuration for reporters.
 */ /**
 * @template {ReporterSettings} Settings
 *   Options type.
 * @callback Reporter
 *   Type for a reporter.
 * @param {Array<VFile>} files
 *   Files to report.
 * @param {Settings} options
 *   Configuration.
 * @returns {string}
 *   Report.
 */ 
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 */ /**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */ /**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Position | PositionLike | Point | PointLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */ function $a845353558418eb1$export$c304dd45fe166145(value) {
    // Nothing.
    if (!value || typeof value !== "object") return "";
    // Node.
    if ("position" in value || "type" in value) return $a845353558418eb1$var$position(value.position);
    // Position.
    if ("start" in value || "end" in value) return $a845353558418eb1$var$position(value);
    // Point.
    if ("line" in value || "column" in value) return $a845353558418eb1$var$point(value);
    // ?
    return "";
}
/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */ function $a845353558418eb1$var$point(point) {
    return $a845353558418eb1$var$index(point && point.line) + ":" + $a845353558418eb1$var$index(point && point.column);
}
/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */ function $a845353558418eb1$var$position(pos) {
    return $a845353558418eb1$var$point(pos && pos.start) + "-" + $a845353558418eb1$var$point(pos && pos.end);
}
/**
 * @param {number | null | undefined} value
 * @returns {number}
 */ function $a845353558418eb1$var$index(value) {
    return value && typeof value === "number" ? value : 1;
}


class $6f67cf05e16a07aa$export$752e5c445fe834ef extends Error {
    /**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   *
   *   > 👉 **Note**: you should use markdown.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */ // To do: next major: expose `undefined` everywhere instead of `null`.
    constructor(reason, place, origin){
        /** @type {[string | null, string | null]} */ const parts = [
            null,
            null
        ];
        /** @type {Position} */ let position = {
            // @ts-expect-error: we always follows the structure of `position`.
            start: {
                line: null,
                column: null
            },
            // @ts-expect-error: "
            end: {
                line: null,
                column: null
            }
        };
        super();
        if (typeof place === "string") {
            origin = place;
            place = undefined;
        }
        if (typeof origin === "string") {
            const index = origin.indexOf(":");
            if (index === -1) parts[1] = origin;
            else {
                parts[0] = origin.slice(0, index);
                parts[1] = origin.slice(index + 1);
            }
        }
        if (place) {
            // Node.
            if ("type" in place || "position" in place) {
                if (place.position) // To do: next major: deep clone.
                // @ts-expect-error: looks like a position.
                position = place.position;
            } else if ("start" in place || "end" in place) // @ts-expect-error: looks like a position.
            // To do: next major: deep clone.
            position = place;
            else if ("line" in place || "column" in place) // To do: next major: deep clone.
            position.start = place;
        }
        // Fields from `Error`.
        /**
     * Serialized positional info of error.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */ this.name = (0, $a845353558418eb1$export$c304dd45fe166145)(place) || "1:1";
        /**
     * Reason for message.
     *
     * @type {string}
     */ this.message = typeof reason === "object" ? reason.message : reason;
        /**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */ this.stack = "";
        if (typeof reason === "object" && reason.stack) this.stack = reason.stack;
        /**
     * Reason for message.
     *
     * > 👉 **Note**: you should use markdown.
     *
     * @type {string}
     */ this.reason = this.message;
        /* eslint-disable no-unused-expressions */ /**
     * State of problem.
     *
     * * `true` — marks associated file as no longer processable (error)
     * * `false` — necessitates a (potential) change (warning)
     * * `null | undefined` — for things that might not need changing (info)
     *
     * @type {boolean | null | undefined}
     */ this.fatal;
        /**
     * Starting line of error.
     *
     * @type {number | null}
     */ this.line = position.start.line;
        /**
     * Starting column of error.
     *
     * @type {number | null}
     */ this.column = position.start.column;
        /**
     * Full unist position.
     *
     * @type {Position | null}
     */ this.position = position;
        /**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | null}
     */ this.source = parts[0];
        /**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | null}
     */ this.ruleId = parts[1];
        /**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | null}
     */ this.file;
        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.
        /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | null}
     */ this.actual;
        /**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | null}
     */ this.expected;
        /**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | null}
     */ this.url;
        /**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | null}
     */ this.note;
    /* eslint-enable no-unused-expressions */ }
}
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.file = "";
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.name = "";
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.reason = "";
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.message = "";
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.stack = "";
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.fatal = null;
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.column = null;
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.line = null;
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.source = null;
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.ruleId = null;
$6f67cf05e16a07aa$export$752e5c445fe834ef.prototype.position = null;






/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 */ /**
 * Check if `fileUrlOrPath` looks like a URL.
 *
 * @param {unknown} fileUrlOrPath
 *   File path or URL.
 * @returns {fileUrlOrPath is URL}
 *   Whether it’s a URL.
 */ // From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function $d13b2e366b62735c$export$8304a22d431f958(fileUrlOrPath) {
    return fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && // @ts-expect-error: indexable.
    fileUrlOrPath.href && // @ts-expect-error: indexable.
    fileUrlOrPath.origin;
}



/**
 * Order of setting (least specific to most), we need this because otherwise
 * `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
 * stem can be set.
 *
 * @type {Array<'basename' | 'dirname' | 'extname' | 'history' | 'path' | 'stem'>}
 */ const $3965753896da6f59$var$order = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
];
class $3965753896da6f59$export$93dff69eb10dc7ce {
    /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Buffer` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */ constructor(value){
        /** @type {Options | VFile} */ let options;
        if (!value) options = {};
        else if (typeof value === "string" || $3965753896da6f59$var$buffer(value)) options = {
            value: value
        };
        else if ((0, $d13b2e366b62735c$export$8304a22d431f958)(value)) options = {
            path: value
        };
        else options = value;
        /**
     * Place to store custom information (default: `{}`).
     *
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     *
     * @type {Data}
     */ this.data = {};
        /**
     * List of messages associated with the file.
     *
     * @type {Array<VFileMessage>}
     */ this.messages = [];
        /**
     * List of filepaths the file moved between.
     *
     * The first is the original path and the last is the current path.
     *
     * @type {Array<string>}
     */ this.history = [];
        /**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     *
     * @type {string}
     */ this.cwd = (0, $5fe37d3ed8a97b90$re_export$proc).cwd();
        /* eslint-disable no-unused-expressions */ /**
     * Raw value.
     *
     * @type {Value}
     */ this.value;
        // The below are non-standard, they are “well-known”.
        // As in, used in several tools.
        /**
     * Whether a file was saved to disk.
     *
     * This is used by vfile reporters.
     *
     * @type {boolean}
     */ this.stored;
        /**
     * Custom, non-string, compiled, representation.
     *
     * This is used by unified to store non-string results.
     * One example is when turning markdown into React nodes.
     *
     * @type {unknown}
     */ this.result;
        /**
     * Source map.
     *
     * This type is equivalent to the `RawSourceMap` type from the `source-map`
     * module.
     *
     * @type {Map | null | undefined}
     */ this.map;
        /* eslint-enable no-unused-expressions */ // Set path related properties in the correct order.
        let index = -1;
        while(++index < $3965753896da6f59$var$order.length){
            const prop = $3965753896da6f59$var$order[index];
            // Note: we specifically use `in` instead of `hasOwnProperty` to accept
            // `vfile`s too.
            if (prop in options && options[prop] !== undefined && options[prop] !== null) // @ts-expect-error: TS doesn’t understand basic reality.
            this[prop] = prop === "history" ? [
                ...options[prop]
            ] : options[prop];
        }
        /** @type {string} */ let prop;
        // Set non-path related properties.
        for(prop in options)// @ts-expect-error: fine to set other things.
        if (!$3965753896da6f59$var$order.includes(prop)) // @ts-expect-error: fine to set other things.
        this[prop] = options[prop];
    }
    /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   */ get path() {
        return this.history[this.history.length - 1];
    }
    /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {string | URL} path
   */ set path(path) {
        if ((0, $d13b2e366b62735c$export$8304a22d431f958)(path)) path = (0, $5009157348aec151$re_export$urlToPath)(path);
        $3965753896da6f59$var$assertNonEmpty(path, "path");
        if (this.path !== path) this.history.push(path);
    }
    /**
   * Get the parent path (example: `'~'`).
   */ get dirname() {
        return typeof this.path === "string" ? (0, $b134cfc87243defb$re_export$path).dirname(this.path) : undefined;
    }
    /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   */ set dirname(dirname) {
        $3965753896da6f59$var$assertPath(this.basename, "dirname");
        this.path = (0, $b134cfc87243defb$re_export$path).join(dirname || "", this.basename);
    }
    /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */ get basename() {
        return typeof this.path === "string" ? (0, $b134cfc87243defb$re_export$path).basename(this.path) : undefined;
    }
    /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */ set basename(basename) {
        $3965753896da6f59$var$assertNonEmpty(basename, "basename");
        $3965753896da6f59$var$assertPart(basename, "basename");
        this.path = (0, $b134cfc87243defb$re_export$path).join(this.dirname || "", basename);
    }
    /**
   * Get the extname (including dot) (example: `'.js'`).
   */ get extname() {
        return typeof this.path === "string" ? (0, $b134cfc87243defb$re_export$path).extname(this.path) : undefined;
    }
    /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */ set extname(extname) {
        $3965753896da6f59$var$assertPart(extname, "extname");
        $3965753896da6f59$var$assertPath(this.dirname, "extname");
        if (extname) {
            if (extname.charCodeAt(0) !== 46 /* `.` */ ) throw new Error("`extname` must start with `.`");
            if (extname.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = (0, $b134cfc87243defb$re_export$path).join(this.dirname, this.stem + (extname || ""));
    }
    /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */ get stem() {
        return typeof this.path === "string" ? (0, $b134cfc87243defb$re_export$path).basename(this.path, this.extname) : undefined;
    }
    /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */ set stem(stem) {
        $3965753896da6f59$var$assertNonEmpty(stem, "stem");
        $3965753896da6f59$var$assertPart(stem, "stem");
        this.path = (0, $b134cfc87243defb$re_export$path).join(this.dirname || "", stem + (this.extname || ""));
    }
    /**
   * Serialize the file.
   *
   * @param {BufferEncoding | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Buffer`
   *   (default: `'utf8'`).
   * @returns {string}
   *   Serialized file.
   */ toString(encoding) {
        return (this.value || "").toString(encoding || undefined);
    }
    /**
   * Create a warning message associated with the file.
   *
   * Its `fatal` is set to `false` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */ message(reason, place, origin) {
        const message = new (0, $6f67cf05e16a07aa$export$752e5c445fe834ef)(reason, place, origin);
        if (this.path) {
            message.name = this.path + ":" + message.name;
            message.file = this.path;
        }
        message.fatal = false;
        this.messages.push(message);
        return message;
    }
    /**
   * Create an info message associated with the file.
   *
   * Its `fatal` is set to `null` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */ info(reason, place, origin) {
        const message = this.message(reason, place, origin);
        message.fatal = null;
        return message;
    }
    /**
   * Create a fatal error associated with the file.
   *
   * Its `fatal` is set to `true` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * > 👉 **Note**: a fatal error means that a file is no longer processable.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Message.
   * @throws {VFileMessage}
   *   Message.
   */ fail(reason, place, origin) {
        const message = this.message(reason, place, origin);
        message.fatal = true;
        throw message;
    }
}
/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string | null | undefined} part
 *   File path part.
 * @param {string} name
 *   Part name.
 * @returns {void}
 *   Nothing.
 */ function $3965753896da6f59$var$assertPart(part, name) {
    if (part && part.includes((0, $b134cfc87243defb$re_export$path).sep)) throw new Error("`" + name + "` cannot be a path: did not expect `" + (0, $b134cfc87243defb$re_export$path).sep + "`");
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string | undefined} part
 *   Thing.
 * @param {string} name
 *   Part name.
 * @returns {asserts part is string}
 *   Nothing.
 */ function $3965753896da6f59$var$assertNonEmpty(part, name) {
    if (!part) throw new Error("`" + name + "` cannot be empty");
}
/**
 * Assert `path` exists.
 *
 * @param {string | undefined} path
 *   Path.
 * @param {string} name
 *   Dependency name.
 * @returns {asserts path is string}
 *   Nothing.
 */ function $3965753896da6f59$var$assertPath(path, name) {
    if (!path) throw new Error("Setting `" + name + "` requires `path` to be set too");
}
/**
 * Assert `value` is a buffer.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Buffer}
 *   Whether `value` is a Node.js buffer.
 */ function $3965753896da6f59$var$buffer(value) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($6e86b2ac314f5402$exports)))(value);
}


const $67f604d39c4880b2$export$7cc1b2fe10c52bb = $67f604d39c4880b2$var$base().freeze();
const $67f604d39c4880b2$var$own = {}.hasOwnProperty;
// Function to create the first processor.
/**
 * @returns {Processor}
 */ function $67f604d39c4880b2$var$base() {
    const transformers = (0, $c822911a670f131a$export$91b56f5ca106aa43)();
    /** @type {Processor['attachers']} */ const attachers = [];
    /** @type {Record<string, unknown>} */ let namespace = {};
    /** @type {boolean|undefined} */ let frozen;
    let freezeIndex = -1;
    // Data management.
    // @ts-expect-error: overloads are handled.
    processor.data = data;
    processor.Parser = undefined;
    processor.Compiler = undefined;
    // Lock.
    processor.freeze = freeze;
    // Plugins.
    processor.attachers = attachers;
    // @ts-expect-error: overloads are handled.
    processor.use = use;
    // API.
    processor.parse = parse;
    processor.stringify = stringify;
    // @ts-expect-error: overloads are handled.
    processor.run = run;
    processor.runSync = runSync;
    // @ts-expect-error: overloads are handled.
    processor.process = process;
    processor.processSync = processSync;
    // Expose.
    return processor;
    // Create a new processor based on the processor in the current scope.
    /** @type {Processor} */ function processor() {
        const destination = $67f604d39c4880b2$var$base();
        let index = -1;
        while(++index < attachers.length)destination.use(...attachers[index]);
        destination.data((0, (/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports)))(true, {}, namespace));
        return destination;
    }
    /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */ function data(key, value) {
        if (typeof key === "string") {
            // Set `key`.
            if (arguments.length === 2) {
                $67f604d39c4880b2$var$assertUnfrozen("data", frozen);
                namespace[key] = value;
                return processor;
            }
            // Get `key`.
            return $67f604d39c4880b2$var$own.call(namespace, key) && namespace[key] || null;
        }
        // Set space.
        if (key) {
            $67f604d39c4880b2$var$assertUnfrozen("data", frozen);
            namespace = key;
            return processor;
        }
        // Get space.
        return namespace;
    }
    /** @type {Processor['freeze']} */ function freeze() {
        if (frozen) return processor;
        while(++freezeIndex < attachers.length){
            const [attacher, ...options] = attachers[freezeIndex];
            if (options[0] === false) continue;
            if (options[0] === true) options[0] = undefined;
            /** @type {Transformer|void} */ const transformer = attacher.call(processor, ...options);
            if (typeof transformer === "function") transformers.use(transformer);
        }
        frozen = true;
        freezeIndex = Number.POSITIVE_INFINITY;
        return processor;
    }
    /**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */ function use(value, ...options) {
        /** @type {Record<string, unknown>|undefined} */ let settings;
        $67f604d39c4880b2$var$assertUnfrozen("use", frozen);
        if (value === null || value === undefined) ;
        else if (typeof value === "function") addPlugin(value, ...options);
        else if (typeof value === "object") {
            if (Array.isArray(value)) addList(value);
            else addPreset(value);
        } else throw new TypeError("Expected usable value, not `" + value + "`");
        if (settings) namespace.settings = Object.assign(namespace.settings || {}, settings);
        return processor;
        /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */ function add(value) {
            if (typeof value === "function") addPlugin(value);
            else if (typeof value === "object") {
                if (Array.isArray(value)) {
                    const [plugin, ...options] = value;
                    addPlugin(plugin, ...options);
                } else addPreset(value);
            } else throw new TypeError("Expected usable value, not `" + value + "`");
        }
        /**
     * @param {Preset} result
     * @returns {void}
     */ function addPreset(result) {
            addList(result.plugins);
            if (result.settings) settings = Object.assign(settings || {}, result.settings);
        }
        /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */ function addList(plugins) {
            let index = -1;
            if (plugins === null || plugins === undefined) ;
            else if (Array.isArray(plugins)) while(++index < plugins.length){
                const thing = plugins[index];
                add(thing);
            }
            else throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
        }
        /**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */ function addPlugin(plugin, value) {
            let index = -1;
            /** @type {Processor['attachers'][number]|undefined} */ let entry;
            while(++index < attachers.length)if (attachers[index][0] === plugin) {
                entry = attachers[index];
                break;
            }
            if (entry) {
                if ((0, $2a5eff7c75fac51a$export$2e2bcd8739ae039)(entry[1]) && (0, $2a5eff7c75fac51a$export$2e2bcd8739ae039)(value)) value = (0, (/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports)))(true, entry[1], value);
                entry[1] = value;
            } else // @ts-expect-error: fine.
            attachers.push([
                ...arguments
            ]);
        }
    }
    /** @type {Processor['parse']} */ function parse(doc) {
        processor.freeze();
        const file = $67f604d39c4880b2$var$vfile(doc);
        const Parser = processor.Parser;
        $67f604d39c4880b2$var$assertParser("parse", Parser);
        if ($67f604d39c4880b2$var$newable(Parser, "parse")) // @ts-expect-error: `newable` checks this.
        return new Parser(String(file), file).parse();
        // @ts-expect-error: `newable` checks this.
        return Parser(String(file), file) // eslint-disable-line new-cap
        ;
    }
    /** @type {Processor['stringify']} */ function stringify(node, doc) {
        processor.freeze();
        const file = $67f604d39c4880b2$var$vfile(doc);
        const Compiler = processor.Compiler;
        $67f604d39c4880b2$var$assertCompiler("stringify", Compiler);
        $67f604d39c4880b2$var$assertNode(node);
        if ($67f604d39c4880b2$var$newable(Compiler, "compile")) // @ts-expect-error: `newable` checks this.
        return new Compiler(node, file).compile();
        // @ts-expect-error: `newable` checks this.
        return Compiler(node, file) // eslint-disable-line new-cap
        ;
    }
    /**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */ function run(node, doc, callback) {
        $67f604d39c4880b2$var$assertNode(node);
        processor.freeze();
        if (!callback && typeof doc === "function") {
            callback = doc;
            doc = undefined;
        }
        if (!callback) return new Promise(executor);
        executor(null, callback);
        /**
     * @param {null|((node: Node) => void)} resolve
     * @param {(error: Error) => void} reject
     * @returns {void}
     */ function executor(resolve, reject) {
            // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
            transformers.run(node, $67f604d39c4880b2$var$vfile(doc), done);
            /**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */ function done(error, tree, file) {
                tree = tree || node;
                if (error) reject(error);
                else if (resolve) resolve(tree);
                else // @ts-expect-error: `callback` is defined if `resolve` is not.
                callback(null, tree, file);
            }
        }
    }
    /** @type {Processor['runSync']} */ function runSync(node, file) {
        /** @type {Node|undefined} */ let result;
        /** @type {boolean|undefined} */ let complete;
        processor.run(node, file, done);
        $67f604d39c4880b2$var$assertDone("runSync", "run", complete);
        // @ts-expect-error: we either bailed on an error or have a tree.
        return result;
        /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */ function done(error, tree) {
            (0, $2e2c1408d9e9d499$export$dd911e13ecb11e05)(error);
            result = tree;
            complete = true;
        }
    }
    /**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */ function process(doc, callback) {
        processor.freeze();
        $67f604d39c4880b2$var$assertParser("process", processor.Parser);
        $67f604d39c4880b2$var$assertCompiler("process", processor.Compiler);
        if (!callback) return new Promise(executor);
        executor(null, callback);
        /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */ function executor(resolve, reject) {
            const file = $67f604d39c4880b2$var$vfile(doc);
            processor.run(processor.parse(file), file, (error, tree, file)=>{
                if (error || !tree || !file) done(error);
                else {
                    /** @type {unknown} */ const result = processor.stringify(tree, file);
                    if (result === undefined || result === null) ;
                    else if ($67f604d39c4880b2$var$looksLikeAVFileValue(result)) file.value = result;
                    else file.result = result;
                    done(error, file);
                }
            });
            /**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */ function done(error, file) {
                if (error || !file) reject(error);
                else if (resolve) resolve(file);
                else // @ts-expect-error: `callback` is defined if `resolve` is not.
                callback(null, file);
            }
        }
    }
    /** @type {Processor['processSync']} */ function processSync(doc) {
        /** @type {boolean|undefined} */ let complete;
        processor.freeze();
        $67f604d39c4880b2$var$assertParser("processSync", processor.Parser);
        $67f604d39c4880b2$var$assertCompiler("processSync", processor.Compiler);
        const file = $67f604d39c4880b2$var$vfile(doc);
        processor.process(file, done);
        $67f604d39c4880b2$var$assertDone("processSync", "process", complete);
        return file;
        /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */ function done(error) {
            complete = true;
            (0, $2e2c1408d9e9d499$export$dd911e13ecb11e05)(error);
        }
    }
}
/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */ function $67f604d39c4880b2$var$newable(value, name) {
    return typeof value === "function" && // Prototypes do exist.
    // type-coverage:ignore-next-line
    value.prototype && // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    // type-coverage:ignore-next-line
    ($67f604d39c4880b2$var$keys(value.prototype) || name in value.prototype);
}
/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */ function $67f604d39c4880b2$var$keys(value) {
    /** @type {string} */ let key;
    for(key in value){
        if ($67f604d39c4880b2$var$own.call(value, key)) return true;
    }
    return false;
}
/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */ function $67f604d39c4880b2$var$assertParser(name, value) {
    if (typeof value !== "function") throw new TypeError("Cannot `" + name + "` without `Parser`");
}
/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */ function $67f604d39c4880b2$var$assertCompiler(name, value) {
    if (typeof value !== "function") throw new TypeError("Cannot `" + name + "` without `Compiler`");
}
/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */ function $67f604d39c4880b2$var$assertUnfrozen(name, frozen) {
    if (frozen) throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */ function $67f604d39c4880b2$var$assertNode(node) {
    // `isPlainObj` unfortunately uses `any` instead of `unknown`.
    // type-coverage:ignore-next-line
    if (!(0, $2a5eff7c75fac51a$export$2e2bcd8739ae039)(node) || typeof node.type !== "string") throw new TypeError("Expected node, got `" + node + "`");
}
/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */ function $67f604d39c4880b2$var$assertDone(name, asyncName, complete) {
    if (!complete) throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
}
/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */ function $67f604d39c4880b2$var$vfile(value) {
    return $67f604d39c4880b2$var$looksLikeAVFile(value) ? value : new (0, $3965753896da6f59$export$93dff69eb10dc7ce)(value);
}
/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */ function $67f604d39c4880b2$var$looksLikeAVFile(value) {
    return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */ function $67f604d39c4880b2$var$looksLikeAVFileValue(value) {
    return typeof value === "string" || (0, (/*@__PURE__*/$parcel$interopDefault($6e86b2ac314f5402$exports)))(value);
}


/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} Options
 */ /**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 *
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 *
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('mdast').ReferenceType} ReferenceType
 * @typedef {import('../index.js').CompileData} CompileData
 */ /**
 * @typedef {Root | Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 *
 * @typedef {Omit<UnistParent, 'type' | 'children'> & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 */ /**
 * @callback Transform
 *   Extra transform, to change the AST afterwards.
 * @param {Root} tree
 *   Tree to transform.
 * @returns {Root | undefined | null | void}
 *   New tree or nothing (in which case the current tree is used).
 *
 * @callback Handle
 *   Handle a token.
 * @param {CompileContext} this
 *   Context.
 * @param {Token} token
 *   Current token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 *
 * @callback OnEnterError
 *   Handle the case where the `right` token is open, but it is closed (by the
 *   `left` token) or because we reached the end of the document.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token | undefined} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @callback OnExitError
 *   Handle the case where the `right` token is open but it is closed by
 *   exiting the `left` token.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {[Token, OnEnterError | undefined]} TokenTuple
 *   Open token on the stack, with an optional error handler for when
 *   that token isn’t closed properly.
 */ /**
 * @typedef Config
 *   Configuration.
 *
 *   We have our defaults, but extensions will add more.
 * @property {Array<string>} canContainEols
 *   Token types where line endings are used.
 * @property {Handles} enter
 *   Opening handles.
 * @property {Handles} exit
 *   Closing handles.
 * @property {Array<Transform>} transforms
 *   Tree transforms.
 *
 * @typedef {Partial<Config>} Extension
 *   Change how markdown tokens from micromark are turned into mdast.
 *
 * @typedef CompileContext
 *   mdast compiler context.
 * @property {Array<Node | Fragment>} stack
 *   Stack of nodes.
 * @property {Array<TokenTuple>} tokenStack
 *   Stack of tokens.
 * @property {<Key extends keyof CompileData>(key: Key) => CompileData[Key]} getData
 *   Get data from the key/value store.
 * @property {<Key extends keyof CompileData>(key: Key, value?: CompileData[Key]) => void} setData
 *   Set data into the key/value store.
 * @property {(this: CompileContext) => void} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {<Kind extends Node>(this: CompileContext, node: Kind, token: Token, onError?: OnEnterError) => Kind} enter
 *   Enter a token.
 * @property {(this: CompileContext, token: Token, onError?: OnExitError) => Node} exit
 *   Exit a token.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {Config} config
 *   Configuration.
 *
 * @typedef FromMarkdownOptions
 *   Configuration for how to build mdast.
 * @property {Array<Extension | Array<Extension>> | null | undefined} [mdastExtensions]
 *   Extensions for this utility to change how tokens are turned into a tree.
 *
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 *   Configuration.
 */ // To do: micromark: create a registry of tokens?
// To do: next major: don’t return given `Node` from `enter`.
// To do: next major: remove setter/getter.
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s.
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML.
 */ /** @type {Options} */ const $bfcd2ed5526988b5$var$emptyOptions = {};
function $bfcd2ed5526988b5$export$f84e8e69fd4488a5(value, options) {
    const settings = options || $bfcd2ed5526988b5$var$emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
    return $bfcd2ed5526988b5$var$one(value, includeImageAlt, includeHtml);
}
/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */ function $bfcd2ed5526988b5$var$one(value, includeImageAlt, includeHtml) {
    if ($bfcd2ed5526988b5$var$node(value)) {
        if ("value" in value) return value.type === "html" && !includeHtml ? "" : value.value;
        if (includeImageAlt && "alt" in value && value.alt) return value.alt;
        if ("children" in value) return $bfcd2ed5526988b5$var$all(value.children, includeImageAlt, includeHtml);
    }
    if (Array.isArray(value)) return $bfcd2ed5526988b5$var$all(value, includeImageAlt, includeHtml);
    return "";
}
/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */ function $bfcd2ed5526988b5$var$all(values, includeImageAlt, includeHtml) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    while(++index < values.length)result[index] = $bfcd2ed5526988b5$var$one(values[index], includeImageAlt, includeHtml);
    return result.join("");
}
/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Node}
 *   Whether `value` is a node.
 */ function $bfcd2ed5526988b5$var$node(value) {
    return Boolean(value && typeof value === "object");
}


/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */ /**
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ /**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {number} start
 * @param {number} remove
 * @param {T[]} items
 * @returns {void}
 */ function $e3740fd54cb8c53f$export$869882364835d202(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {unknown[]} */ let parameters // Make start between zero and `end` (included).
    ;
    if (start < 0) start = -start > end ? 0 : end + start;
    else start = start > end ? end : start;
    remove = remove > 0 ? remove : 0 // No need to chunk the items if there’s only a couple (10k) items.
    ;
    if (items.length < 10000) {
        parameters = Array.from(items);
        parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
        ;
        [].splice.apply(list, parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) [].splice.apply(list, [
            start,
            remove
        ]) // Insert the items in chunks to not cause stack overflows.
        ;
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + 10000);
            parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
            ;
            [].splice.apply(list, parameters);
            chunkStart += 10000;
            start += 10000;
        }
    }
}
function $e3740fd54cb8c53f$export$4cbf152802aa238(list, items) {
    if (list.length > 0) {
        $e3740fd54cb8c53f$export$869882364835d202(list, list.length, 0, items);
        return list;
    }
    return items;
}


const $467394f305db958c$var$hasOwnProperty = {}.hasOwnProperty;
function $467394f305db958c$export$86a865d89ef3c690(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length)$467394f305db958c$var$syntaxExtension(all, extensions[index]);
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */ function $467394f305db958c$var$syntaxExtension(all, extension) {
    /** @type {string} */ let hook;
    for(hook in extension){
        const maybe = $467394f305db958c$var$hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {string} */ let code;
        for(code in right){
            if (!$467394f305db958c$var$hasOwnProperty.call(left, code)) left[code] = [];
            const value = right[code];
            $467394f305db958c$var$constructs(// @ts-expect-error Looks like a list.
            left[code], Array.isArray(value) ? value : value ? [
                value
            ] : []);
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {unknown[]} existing
 * @param {unknown[]} list
 * @returns {void}
 */ function $467394f305db958c$var$constructs(existing, list) {
    let index = -1;
    /** @type {unknown[]} */ const before = [];
    while(++index < list.length)(list[index].add === "after" ? existing : before).push(list[index]);
    (0, $e3740fd54cb8c53f$export$869882364835d202)(existing, 0, 0, before);
}
function $467394f305db958c$export$eaf8c406dfb0a620(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length)$467394f305db958c$var$htmlExtension(handlers, htmlExtensions[index]);
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all Extension to merge into.
 * @param {HtmlExtension} extension Extension to merge.
 * @returns {void}
 */ function $467394f305db958c$var$htmlExtension(all, extension) {
    /** @type {string} */ let hook;
    for(hook in extension){
        const maybe = $467394f305db958c$var$hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {string} */ let type;
        if (right) for(type in right)left[type] = right[type];
    }
}


/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ /**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ /**
 * @typedef {import('micromark-util-types').Code} Code
 */ // This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
const $3b2b46a791d7287a$export$85b5101f24802e8c = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;


const $2d97e78534b5d038$export$d65d6b62c24d5436 = $2d97e78534b5d038$var$regexCheck(/[A-Za-z]/);
const $2d97e78534b5d038$export$ca8b5b1a6c320e6e = $2d97e78534b5d038$var$regexCheck(/\d/);
const $2d97e78534b5d038$export$eca2752363989806 = $2d97e78534b5d038$var$regexCheck(/[\dA-Fa-f]/);
const $2d97e78534b5d038$export$75c76db11865a9f4 = $2d97e78534b5d038$var$regexCheck(/[\dA-Za-z]/);
const $2d97e78534b5d038$export$35794a7d1db99380 = $2d97e78534b5d038$var$regexCheck(/[!-/:-@[-`{-~]/);
const $2d97e78534b5d038$export$4397998b34fe597d = $2d97e78534b5d038$var$regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function $2d97e78534b5d038$export$67dbf494fc8394df(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127));
}
function $2d97e78534b5d038$export$a30284361b3814b7(code) {
    return code !== null && (code < 0 || code === 32);
}
function $2d97e78534b5d038$export$34a1dff1c0936953(code) {
    return code !== null && code < -2;
}
function $2d97e78534b5d038$export$2c6cf65c1127992a(code) {
    return code === -2 || code === -1 || code === 32;
}
const $2d97e78534b5d038$export$a0ff789c034ffdf4 = $2d97e78534b5d038$var$regexCheck(/\s/);
const $2d97e78534b5d038$export$aa04114dd888a7a0 = $2d97e78534b5d038$var$regexCheck((0, $3b2b46a791d7287a$export$85b5101f24802e8c));
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */ function $2d97e78534b5d038$var$regexCheck(regex) {
    return check;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */ function check(code) {
        return code !== null && regex.test(String.fromCharCode(code));
    }
}


function $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code) && size++ < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}



const $7cca34f15ebbf281$export$a7db06668cad9adb = {
    tokenize: $7cca34f15ebbf281$var$initializeContent
};
/** @type {Initializer} */ function $7cca34f15ebbf281$var$initializeContent(effects) {
    const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    /** @type {Token} */ let previous;
    return contentStart;
    /** @type {State} */ function afterContentStartConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, contentStart, "linePrefix");
    }
    /** @type {State} */ function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
    }
    /** @type {State} */ function lineStart(code) {
        const token = effects.enter("chunkText", {
            contentType: "text",
            previous: previous
        });
        if (previous) previous.next = token;
        previous = token;
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            effects.exit("chunkText");
            effects.exit("paragraph");
            effects.consume(code);
            return;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.consume(code);
            effects.exit("chunkText");
            return lineStart;
        } // Data.
        effects.consume(code);
        return data;
    }
}


/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 */ /**
 * @typedef {Record<string, unknown>} StackState
 * @typedef {[Construct, StackState]} StackItem
 */ 


const $412deb289bc41196$export$5a7bfc01df82fcd1 = {
    tokenize: $412deb289bc41196$var$initializeDocument
};
/** @type {Construct} */ const $412deb289bc41196$var$containerConstruct = {
    tokenize: $412deb289bc41196$var$tokenizeContainer
};
/** @type {Initializer} */ function $412deb289bc41196$var$initializeDocument(effects) {
    const self = this;
    /** @type {Array<StackItem>} */ const stack = [];
    let continued = 0;
    /** @type {TokenizeContext|undefined} */ let childFlow;
    /** @type {Token|undefined} */ let childToken;
    /** @type {number} */ let lineStartOffset;
    return start;
    /** @type {State} */ function start(code) {
        // First we iterate through the open blocks, starting with the root
        // document, and descending through last children down to the last open
        // block.
        // Each block imposes a condition that the line must satisfy if the block is
        // to remain open.
        // For example, a block quote requires a `>` character.
        // A paragraph requires a non-blank line.
        // In this phase we may match all or just some of the open blocks.
        // But we cannot close unmatched blocks yet, because we may have a lazy
        // continuation line.
        if (continued < stack.length) {
            const item = stack[continued];
            self.containerState = item[1];
            return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
        } // Done.
        return checkNewContainers(code);
    }
    /** @type {State} */ function documentContinue(code) {
        continued++ // Note: this field is called `_closeFlow` but it also closes containers.
        ;
        // Perhaps a good idea to rename it but it’s already used in the wild by
        // extensions.
        if (self.containerState._closeFlow) {
            self.containerState._closeFlow = undefined;
            if (childFlow) closeFlow();
             // Note: this algorithm for moving events around is similar to the
            // algorithm when dealing with lazy lines in `writeToChild`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {Point|undefined} */ let point // Find the flow chunk.
            ;
            while(indexBeforeFlow--)if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                point = self.events[indexBeforeFlow][1].end;
                break;
            }
            exitContainers(continued) // Fix positions.
            ;
            let index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            } // Inject the exits earlier (they’re still also at the end).
            (0, $e3740fd54cb8c53f$export$869882364835d202)(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)) // Discard the duplicate exits.
            ;
            self.events.length = index;
            return checkNewContainers(code);
        }
        return start(code);
    }
    /** @type {State} */ function checkNewContainers(code) {
        // Next, after consuming the continuation markers for existing blocks, we
        // look for new block starts (e.g. `>` for a block quote).
        // If we encounter a new block start, we close any blocks unmatched in
        // step 1 before creating the new block as a child of the last matched
        // block.
        if (continued === stack.length) {
            // No need to `check` whether there’s a container, of `exitContainers`
            // would be moot.
            // We can instead immediately `attempt` to parse one.
            if (!childFlow) return documentContinued(code);
             // If we have concrete content, such as block HTML or fenced code,
            // we can’t have containers “pierce” into them, so we can immediately
            // start.
            if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) return flowStart(code);
             // If we do have flow, it could still be a blank line,
            // but we’d be interrupting it w/ a new container if there’s a current
            // construct.
            self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
        } // Check if there is a new container.
        self.containerState = {};
        return effects.check($412deb289bc41196$var$containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
    }
    /** @type {State} */ function thereIsANewContainer(code) {
        if (childFlow) closeFlow();
        exitContainers(continued);
        return documentContinued(code);
    }
    /** @type {State} */ function thereIsNoNewContainer(code) {
        self.parser.lazy[self.now().line] = continued !== stack.length;
        lineStartOffset = self.now().offset;
        return flowStart(code);
    }
    /** @type {State} */ function documentContinued(code) {
        // Try new containers.
        self.containerState = {};
        return effects.attempt($412deb289bc41196$var$containerConstruct, containerContinue, flowStart)(code);
    }
    /** @type {State} */ function containerContinue(code) {
        continued++;
        stack.push([
            self.currentConstruct,
            self.containerState
        ]) // Try another.
        ;
        return documentContinued(code);
    }
    /** @type {State} */ function flowStart(code) {
        if (code === null) {
            if (childFlow) closeFlow();
            exitContainers(0);
            effects.consume(code);
            return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter("chunkFlow", {
            contentType: "flow",
            previous: childToken,
            _tokenizer: childFlow
        });
        return flowContinue(code);
    }
    /** @type {State} */ function flowContinue(code) {
        if (code === null) {
            writeToChild(effects.exit("chunkFlow"), true);
            exitContainers(0);
            effects.consume(code);
            return;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.consume(code);
            writeToChild(effects.exit("chunkFlow")) // Get ready for the next line.
            ;
            continued = 0;
            self.interrupt = undefined;
            return start;
        }
        effects.consume(code);
        return flowContinue;
    }
    /**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */ function writeToChild(token, eof) {
        const stream = self.sliceStream(token);
        if (eof) stream.push(null);
        token.previous = childToken;
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.defineSkip(token.start);
        childFlow.write(stream) // Alright, so we just added a lazy line:
        ;
        //
        // ```markdown
        // > a
        // b.
        //
        // Or:
        //
        // > ~~~c
        // d
        //
        // Or:
        //
        // > | e |
        // f
        // ```
        //
        // The construct in the second example (fenced code) does not accept lazy
        // lines, so it marked itself as done at the end of its first line, and
        // then the content construct parses `d`.
        // Most constructs in markdown match on the first line: if the first line
        // forms a construct, a non-lazy line can’t “unmake” it.
        //
        // The construct in the third example is potentially a GFM table, and
        // those are *weird*.
        // It *could* be a table, from the first line, if the following line
        // matches a condition.
        // In this case, that second line is lazy, which “unmakes” the first line
        // and turns the whole into one content block.
        //
        // We’ve now parsed the non-lazy and the lazy line, and can figure out
        // whether the lazy line started a new flow block.
        // If it did, we exit the current containers between the two flow blocks.
        if (self.parser.lazy[token.start.line]) {
            let index = childFlow.events.length;
            while(index--){
                if (// The token starts before the line ending…
                childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
                (!childFlow.events[index][1].end || // …or ends after it.
                childFlow.events[index][1].end.offset > lineStartOffset)) // Exit: there’s still something open, which means it’s a lazy line
                // part of something.
                return;
            } // Note: this algorithm for moving events around is similar to the
            // algorithm when closing flow in `documentContinue`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {boolean|undefined} */ let seen;
            /** @type {Point|undefined} */ let point // Find the previous chunk (the one before the lazy line).
            ;
            while(indexBeforeFlow--)if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                if (seen) {
                    point = self.events[indexBeforeFlow][1].end;
                    break;
                }
                seen = true;
            }
            exitContainers(continued) // Fix positions.
            ;
            index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            } // Inject the exits earlier (they’re still also at the end).
            (0, $e3740fd54cb8c53f$export$869882364835d202)(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)) // Discard the duplicate exits.
            ;
            self.events.length = index;
        }
    }
    /**
   * @param {number} size
   * @returns {void}
   */ function exitContainers(size) {
        let index = stack.length // Exit open containers.
        ;
        while(index-- > size){
            const entry = stack[index];
            self.containerState = entry[1];
            entry[0].exit.call(self, effects);
        }
        stack.length = size;
    }
    function closeFlow() {
        childFlow.write([
            null
        ]);
        childToken = undefined;
        childFlow = undefined;
        self.containerState._closeFlow = undefined;
    }
}
/** @type {Tokenizer} */ function $412deb289bc41196$var$tokenizeContainer(effects, ok, nok) {
    return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}


/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */ /**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 

const $68b861ff9f9a6ffe$export$d50d28ce3ab2a612 = {
    tokenize: $68b861ff9f9a6ffe$var$tokenizeBlankLine,
    partial: true
};
/** @type {Tokenizer} */ function $68b861ff9f9a6ffe$var$tokenizeBlankLine(effects, ok, nok) {
    return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, afterWhitespace, "linePrefix");
    /** @type {State} */ function afterWhitespace(code) {
        return code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code) ? ok(code) : nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 

/**
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 */ 
function $1994b46ae75d2098$export$12949d1dd00fddf4(events) {
    /** @type {Record<string, number>} */ const jumps = {};
    let index = -1;
    /** @type {Event} */ let event;
    /** @type {number|undefined} */ let lineIndex;
    /** @type {number} */ let otherIndex;
    /** @type {Event} */ let otherEvent;
    /** @type {Event[]} */ let parameters;
    /** @type {Event[]} */ let subevents;
    /** @type {boolean|undefined} */ let more;
    while(++index < events.length){
        while(index in jumps)index = jumps[index];
        event = events[index] // Add a hook for the GFM tasklist extension, which needs to know if text
        ;
        // is in the first content of a list item.
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") otherIndex += 2;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") while(++otherIndex < subevents.length){
                if (subevents[otherIndex][1].type === "content") break;
                if (subevents[otherIndex][1].type === "chunkText") {
                    subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                    otherIndex++;
                }
            }
        } // Enter.
        if (event[0] === "enter") {
            if (event[1].contentType) {
                Object.assign(jumps, $1994b46ae75d2098$var$subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events[otherIndex];
                if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
                    if (otherEvent[0] === "enter") {
                        if (lineIndex) events[lineIndex][1].type = "lineEndingBlank";
                        otherEvent[1].type = "lineEnding";
                        lineIndex = otherIndex;
                    }
                } else break;
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = Object.assign({}, events[lineIndex][1].start) // Switch container exit w/ line endings.
                ;
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                (0, $e3740fd54cb8c53f$export$869882364835d202)(events, lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {Event[]} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */ function $1994b46ae75d2098$var$subcontent(events, eventIndex) {
    const token = events[eventIndex][1];
    const context = events[eventIndex][2];
    let startPosition = eventIndex - 1;
    /** @type {number[]} */ const startPositions = [];
    const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
    const childEvents = tokenizer.events;
    /** @type {[number, number][]} */ const jumps = [];
    /** @type {Record<string, number>} */ const gaps = {};
    /** @type {Chunk[]} */ let stream;
    /** @type {Token|undefined} */ let previous;
    let index = -1;
    /** @type {Token|undefined} */ let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [
        start
    ] // Loop forward through the linked tokens to pass them in order to the
    ;
    // subtokenizer.
    while(current){
        // Find the position of the event for this token.
        while(events[++startPosition][1] !== current);
        startPositions.push(startPosition);
        if (!current._tokenizer) {
            stream = context.sliceStream(current);
            if (!current.next) stream.push(null);
            if (previous) tokenizer.defineSkip(current.start);
            if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = true;
            tokenizer.write(stream);
            if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = undefined;
        } // Unravel the next token.
        previous = current;
        current = current.next;
    } // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.
    current = token;
    while(++index < childEvents.length)if (// Find a void token that includes a break.
    childEvents[index][0] === "exit" && childEvents[index - 1][0] === "enter" && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
        start = index + 1;
        breaks.push(start) // Help GC.
        ;
        current._tokenizer = undefined;
        current.previous = undefined;
        current = current.next;
    }
     // Help GC.
    tokenizer.events = [] // If there’s one more token (which is the cases for lines that end in an
    ;
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.
    if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
    } else breaks.pop();
     // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.
    index = breaks.length;
    while(index--){
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start = startPositions.pop();
        jumps.unshift([
            start,
            start + slice.length - 1
        ]);
        (0, $e3740fd54cb8c53f$export$869882364835d202)(events, start, 2, slice);
    }
    index = -1;
    while(++index < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
}


const $1e6b44114e63325a$export$a7db06668cad9adb = {
    tokenize: $1e6b44114e63325a$var$tokenizeContent,
    resolve: $1e6b44114e63325a$var$resolveContent
};
/** @type {Construct} */ const $1e6b44114e63325a$var$continuationConstruct = {
    tokenize: $1e6b44114e63325a$var$tokenizeContinuation,
    partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */ function $1e6b44114e63325a$var$resolveContent(events) {
    (0, $1994b46ae75d2098$export$12949d1dd00fddf4)(events);
    return events;
}
/** @type {Tokenizer} */ function $1e6b44114e63325a$var$tokenizeContent(effects, ok) {
    /** @type {Token} */ let previous;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
            contentType: "content"
        });
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) return contentEnd(code);
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return effects.check($1e6b44114e63325a$var$continuationConstruct, contentContinue, contentEnd)(code);
         // Data.
        effects.consume(code);
        return data;
    }
    /** @type {State} */ function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
    }
    /** @type {State} */ function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous.next = effects.enter("chunkContent", {
            contentType: "content",
            previous: previous
        });
        previous = previous.next;
        return data;
    }
}
/** @type {Tokenizer} */ function $1e6b44114e63325a$var$tokenizeContinuation(effects, ok, nok) {
    const self = this;
    return startLookahead;
    /** @type {State} */ function startLookahead(code) {
        effects.exit("chunkContent");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, prefixed, "linePrefix");
    }
    /** @type {State} */ function prefixed(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return nok(code);
        const tail = self.events[self.events.length - 1];
        if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) return ok(code);
        return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
    }
}




const $5753f3a56a579788$export$ccc7b0636abaffc3 = {
    tokenize: $5753f3a56a579788$var$initializeFlow
};
/** @type {Initializer} */ function $5753f3a56a579788$var$initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(// Try to parse a blank line.
    (0, $68b861ff9f9a6ffe$export$d50d28ce3ab2a612), atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt((0, $1e6b44114e63325a$export$a7db06668cad9adb), afterConstruct)), "linePrefix")));
    return initial;
    /** @type {State} */ function atBlankEnding(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self.currentConstruct = undefined;
        return initial;
    }
    /** @type {State} */ function afterConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self.currentConstruct = undefined;
        return initial;
    }
}


/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ const $3b1483f8f85e6b8d$export$50397835cbfdbc24 = {
    resolveAll: $3b1483f8f85e6b8d$var$createResolver()
};
const $3b1483f8f85e6b8d$export$22b082955e083ec3 = $3b1483f8f85e6b8d$var$initializeFactory("string");
const $3b1483f8f85e6b8d$export$6f093cfa640b7166 = $3b1483f8f85e6b8d$var$initializeFactory("text");
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */ function $3b1483f8f85e6b8d$var$initializeFactory(field) {
    return {
        tokenize: initializeText,
        resolveAll: $3b1483f8f85e6b8d$var$createResolver(field === "text" ? $3b1483f8f85e6b8d$var$resolveAllLineSuffixes : undefined)
    };
    /** @type {Initializer} */ function initializeText(effects) {
        const self = this;
        const constructs = this.parser.constructs[field];
        const text = effects.attempt(constructs, start, notText);
        return start;
        /** @type {State} */ function start(code) {
            return atBreak(code) ? text(code) : notText(code);
        }
        /** @type {State} */ function notText(code) {
            if (code === null) {
                effects.consume(code);
                return;
            }
            effects.enter("data");
            effects.consume(code);
            return data;
        }
        /** @type {State} */ function data(code) {
            if (atBreak(code)) {
                effects.exit("data");
                return text(code);
            } // Data.
            effects.consume(code);
            return data;
        }
        /**
     * @param {Code} code
     * @returns {boolean}
     */ function atBreak(code) {
            if (code === null) return true;
            const list = constructs[code];
            let index = -1;
            if (list) while(++index < list.length){
                const item = list[index];
                if (!item.previous || item.previous.call(self, self.previous)) return true;
            }
            return false;
        }
    }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */ function $3b1483f8f85e6b8d$var$createResolver(extraResolver) {
    return resolveAllText;
    /** @type {Resolver} */ function resolveAllText(events, context) {
        let index = -1;
        /** @type {number|undefined} */ let enter // A rather boring computation (to merge adjacent `data` events) which
        ;
        // improves mm performance by 29%.
        while(++index <= events.length){
            if (enter === undefined) {
                if (events[index] && events[index][1].type === "data") {
                    enter = index;
                    index++;
                }
            } else if (!events[index] || events[index][1].type !== "data") {
                // Don’t do anything if there is one data token.
                if (index !== enter + 2) {
                    events[enter][1].end = events[index - 1][1].end;
                    events.splice(enter + 2, index - enter - 2);
                    index = enter + 2;
                }
                enter = undefined;
            }
        }
        return extraResolver ? extraResolver(events, context) : events;
    }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */ function $3b1483f8f85e6b8d$var$resolveAllLineSuffixes(events, context) {
    let eventIndex = 0 // Skip first.
    ;
    while(++eventIndex <= events.length)if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
        const data = events[eventIndex - 1][1];
        const chunks = context.sliceStream(data);
        let index = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        /** @type {boolean|undefined} */ let tabs;
        while(index--){
            const chunk = chunks[index];
            if (typeof chunk === "string") {
                bufferIndex = chunk.length;
                while(chunk.charCodeAt(bufferIndex - 1) === 32){
                    size++;
                    bufferIndex--;
                }
                if (bufferIndex) break;
                bufferIndex = -1;
            } else if (chunk === -2) {
                tabs = true;
                size++;
            } else if (chunk === -1) ;
            else {
                // Replacement character, exit.
                index++;
                break;
            }
        }
        if (size) {
            const token = {
                type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
                start: {
                    line: data.end.line,
                    column: data.end.column - size,
                    offset: data.end.offset - size,
                    _index: data.start._index + index,
                    _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
                },
                end: Object.assign({}, data.end)
            };
            data.end = Object.assign({}, token.start);
            if (data.start.offset === data.end.offset) Object.assign(data, token);
            else {
                events.splice(eventIndex, 0, [
                    "enter",
                    token,
                    context
                ], [
                    "exit",
                    token,
                    context
                ]);
                eventIndex += 2;
            }
        }
        eventIndex++;
    }
    return events;
}


/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 */ /**
 * @typedef Info
 * @property {() => void} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {void}
 */ 

/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */ function $2d1cd621ae059249$export$3ff61ec196ff408b(constructs, events, context) {
    /** @type {Resolver[]} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}


function $6e1090a00c9e7d03$export$ae34f10ee4b29837(parser, initialize, from) {
    /** @type {Point} */ let point = Object.assign(from ? Object.assign({}, from) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    /** @type {Record<string, number>} */ const columnStart = {};
    /** @type {Array<Construct>} */ const resolveAllConstructs = [];
    /** @type {Array<Chunk>} */ let chunks = [];
    /** @type {Array<Token>} */ let stack = [];
    /** @type {boolean|undefined} */ let consumed = true;
    /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */ const effects = {
        consume: consume,
        enter: enter,
        exit: exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
            interrupt: true
        })
    };
    /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */ const context = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser: parser,
        sliceStream: sliceStream,
        sliceSerialize: sliceSerialize,
        now: now,
        defineSkip: defineSkip,
        write: write
    };
    /**
   * The state function.
   *
   * @type {State|void}
   */ let state = initialize.tokenize.call(context, effects);
    /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */ let expectedCode;
    if (initialize.resolveAll) resolveAllConstructs.push(initialize);
    return context;
    /** @type {TokenizeContext['write']} */ function write(slice) {
        chunks = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(chunks, slice);
        main() // Exit if we’re not done, resolve might change stuff.
        ;
        if (chunks[chunks.length - 1] !== null) return [];
        addResult(initialize, 0) // Otherwise, resolve, and exit.
        ;
        context.events = (0, $2d1cd621ae059249$export$3ff61ec196ff408b)(resolveAllConstructs, context.events, context);
        return context.events;
    } //
    // Tools.
    //
    /** @type {TokenizeContext['sliceSerialize']} */ function sliceSerialize(token, expandTabs) {
        return $6e1090a00c9e7d03$var$serializeChunks(sliceStream(token), expandTabs);
    }
    /** @type {TokenizeContext['sliceStream']} */ function sliceStream(token) {
        return $6e1090a00c9e7d03$var$sliceChunks(chunks, token);
    }
    /** @type {TokenizeContext['now']} */ function now() {
        return Object.assign({}, point);
    }
    /** @type {TokenizeContext['defineSkip']} */ function defineSkip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
    } //
    // State management.
    //
    /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */ function main() {
        /** @type {number} */ let chunkIndex;
        while(point._index < chunks.length){
            const chunk = chunks[point._index] // If we’re in a buffer chunk, loop through it.
            ;
            if (typeof chunk === "string") {
                chunkIndex = point._index;
                if (point._bufferIndex < 0) point._bufferIndex = 0;
                while(point._index === chunkIndex && point._bufferIndex < chunk.length)go(chunk.charCodeAt(point._bufferIndex));
            } else go(chunk);
        }
    }
    /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */ function go(code) {
        consumed = undefined;
        expectedCode = code;
        state = state(code);
    }
    /** @type {Effects['consume']} */ function consume(code) {
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            point.line++;
            point.column = 1;
            point.offset += code === -3 ? 2 : 1;
            accountForPotentialSkip();
        } else if (code !== -1) {
            point.column++;
            point.offset++;
        } // Not in a string chunk.
        if (point._bufferIndex < 0) point._index++;
        else {
            point._bufferIndex++ // At end of string chunk.
            ;
            // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
            // strings.
            if (point._bufferIndex === chunks[point._index].length) {
                point._bufferIndex = -1;
                point._index++;
            }
        } // Expose the previous character.
        context.previous = code // Mark as consumed.
        ;
        consumed = true;
    }
    /** @type {Effects['enter']} */ function enter(type, fields) {
        /** @type {Token} */ // @ts-expect-error Patch instead of assign required fields to help GC.
        const token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push([
            "enter",
            token,
            context
        ]);
        stack.push(token);
        return token;
    }
    /** @type {Effects['exit']} */ function exit(type) {
        const token = stack.pop();
        token.end = now();
        context.events.push([
            "exit",
            token,
            context
        ]);
        return token;
    }
    /**
   * Use results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
    }
    /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulcheck(_, info) {
        info.restore();
    }
    /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */ function constructFactory(onreturn, fields) {
        return hook;
        /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Array<Construct>|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */ function hook(constructs, returnState, bogusState) {
            /** @type {Array<Construct>} */ let listOfConstructs;
            /** @type {number} */ let constructIndex;
            /** @type {Construct} */ let currentConstruct;
            /** @type {Info} */ let info;
            return Array.isArray(constructs) ? /* c8 ignore next 1 */ handleListOfConstructs(constructs) : "tokenize" in constructs // @ts-expect-error Looks like a construct.
             ? handleListOfConstructs([
                constructs
            ]) : handleMapOfConstructs(constructs);
            /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */ function handleMapOfConstructs(map) {
                return start;
                /** @type {State} */ function start(code) {
                    const def = code !== null && map[code];
                    const all = code !== null && map.null;
                    const list = [
                        // To do: add more extension tests.
                        /* c8 ignore next 2 */ ...Array.isArray(def) ? def : def ? [
                            def
                        ] : [],
                        ...Array.isArray(all) ? all : all ? [
                            all
                        ] : []
                    ];
                    return handleListOfConstructs(list)(code);
                }
            }
            /**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */ function handleListOfConstructs(list) {
                listOfConstructs = list;
                constructIndex = 0;
                if (list.length === 0) return bogusState;
                return handleConstruct(list[constructIndex]);
            }
            /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */ function handleConstruct(construct) {
                return start;
                /** @type {State} */ function start(code) {
                    // To do: not needed to store if there is no bogus state, probably?
                    // Currently doesn’t work because `inspect` in document does a check
                    // w/o a bogus, which doesn’t make sense. But it does seem to help perf
                    // by not storing.
                    info = store();
                    currentConstruct = construct;
                    if (!construct.partial) context.currentConstruct = construct;
                    if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) return nok(code);
                    return construct.tokenize.call(// If we do have fields, create an object w/ `context` as its
                    // prototype.
                    // This allows a “live binding”, which is needed for `interrupt`.
                    fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
                }
            }
            /** @type {State} */ function ok(code) {
                consumed = true;
                onreturn(currentConstruct, info);
                return returnState;
            }
            /** @type {State} */ function nok(code) {
                consumed = true;
                info.restore();
                if (++constructIndex < listOfConstructs.length) return handleConstruct(listOfConstructs[constructIndex]);
                return bogusState;
            }
        }
    }
    /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */ function addResult(construct, from) {
        if (construct.resolveAll && !resolveAllConstructs.includes(construct)) resolveAllConstructs.push(construct);
        if (construct.resolve) (0, $e3740fd54cb8c53f$export$869882364835d202)(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
        if (construct.resolveTo) context.events = construct.resolveTo(context.events, context);
    }
    /**
   * Store state.
   *
   * @returns {Info}
   */ function store() {
        const startPoint = now();
        const startPrevious = context.previous;
        const startCurrentConstruct = context.currentConstruct;
        const startEventsIndex = context.events.length;
        const startStack = Array.from(stack);
        return {
            restore: restore,
            from: startEventsIndex
        };
        /**
     * Restore state.
     *
     * @returns {void}
     */ function restore() {
            point = startPoint;
            context.previous = startPrevious;
            context.currentConstruct = startCurrentConstruct;
            context.events.length = startEventsIndex;
            stack = startStack;
            accountForPotentialSkip();
        }
    }
    /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */ function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
            point.column = columnStart[point.line];
            point.offset += columnStart[point.line] - 1;
        }
    }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Array<Chunk>}
 */ function $6e1090a00c9e7d03$var$sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    /** @type {Array<Chunk>} */ let view;
    if (startIndex === endIndex) // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [
        chunks[startIndex].slice(startBufferIndex, endBufferIndex)
    ];
    else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) // @ts-expect-error `_bufferIndex` is used on string chunks.
        view[0] = view[0].slice(startBufferIndex);
        if (endBufferIndex > 0) // @ts-expect-error `_bufferIndex` is used on string chunks.
        view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
    return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */ function $6e1090a00c9e7d03$var$serializeChunks(chunks, expandTabs) {
    let index = -1;
    /** @type {Array<string>} */ const result = [];
    /** @type {boolean|undefined} */ let atTab;
    while(++index < chunks.length){
        const chunk = chunks[index];
        /** @type {string} */ let value;
        if (typeof chunk === "string") value = chunk;
        else switch(chunk){
            case -5:
                value = "\r";
                break;
            case -4:
                value = "\n";
                break;
            case -3:
                value = "\r\n";
                break;
            case -2:
                value = expandTabs ? " " : "	";
                break;
            case -1:
                if (!expandTabs && atTab) continue;
                value = " ";
                break;
            default:
                // Currently only replacement character.
                value = String.fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
    }
    return result.join("");
}


var $6d496cbd7e0550bc$exports = {};

$parcel$export($6d496cbd7e0550bc$exports, "document", () => $6d496cbd7e0550bc$export$5a7bfc01df82fcd1);
$parcel$export($6d496cbd7e0550bc$exports, "contentInitial", () => $6d496cbd7e0550bc$export$5a2181fb44b58173);
$parcel$export($6d496cbd7e0550bc$exports, "flowInitial", () => $6d496cbd7e0550bc$export$cf8bead395eff824);
$parcel$export($6d496cbd7e0550bc$exports, "flow", () => $6d496cbd7e0550bc$export$ccc7b0636abaffc3);
$parcel$export($6d496cbd7e0550bc$exports, "string", () => $6d496cbd7e0550bc$export$22b082955e083ec3);
$parcel$export($6d496cbd7e0550bc$exports, "text", () => $6d496cbd7e0550bc$export$6f093cfa640b7166);
$parcel$export($6d496cbd7e0550bc$exports, "insideSpan", () => $6d496cbd7e0550bc$export$d44f260a3f9b69f5);
$parcel$export($6d496cbd7e0550bc$exports, "attentionMarkers", () => $6d496cbd7e0550bc$export$b9c0b60d74426aea);
$parcel$export($6d496cbd7e0550bc$exports, "disable", () => $6d496cbd7e0550bc$export$e20fbacbb41798b);
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */ /**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Point} Point
 */ 
/**
 * @typedef {import('micromark-util-types').Code} Code
 */ 
function $076e9255d90ad183$export$e3902bc0d835cad0(code) {
    if (code === null || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code) || (0, $2d97e78534b5d038$export$a0ff789c034ffdf4)(code)) return 1;
    if ((0, $2d97e78534b5d038$export$aa04114dd888a7a0)(code)) return 2;
}



const $4a83c38545e2870b$export$45b92471da762af7 = {
    name: "attention",
    tokenize: $4a83c38545e2870b$var$tokenizeAttention,
    resolveAll: $4a83c38545e2870b$var$resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */ function $4a83c38545e2870b$var$resolveAllAttention(events, context) {
    let index = -1;
    /** @type {number} */ let open;
    /** @type {Token} */ let group;
    /** @type {Token} */ let text;
    /** @type {Token} */ let openingSequence;
    /** @type {Token} */ let closingSequence;
    /** @type {number} */ let use;
    /** @type {Event[]} */ let nextEvents;
    /** @type {number} */ let offset // Walk through all events.
    ;
    //
    // Note: performance of this is fine on an mb of normal markdown, but it’s
    // a bottleneck for malicious stuff.
    while(++index < events.length)// Find a token that can close.
    if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
        open = index // Now walk back to find an opener.
        ;
        while(open--)// Find a token that can open the closer.
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
            // If the opening can close or the closing can open,
            // and the close size *is not* a multiple of three,
            // but the sum of the opening and closing size *is* multiple of three,
            // then don’t match.
            if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) continue;
             // Number of markers to use from the sequence.
            use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
            const start = Object.assign({}, events[open][1].end);
            const end = Object.assign({}, events[index][1].start);
            $4a83c38545e2870b$var$movePoint(start, -use);
            $4a83c38545e2870b$var$movePoint(end, use);
            openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: start,
                end: Object.assign({}, events[open][1].end)
            };
            closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: Object.assign({}, events[index][1].start),
                end: end
            };
            text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: Object.assign({}, events[open][1].end),
                end: Object.assign({}, events[index][1].start)
            };
            group = {
                type: use > 1 ? "strong" : "emphasis",
                start: Object.assign({}, openingSequence.start),
                end: Object.assign({}, closingSequence.end)
            };
            events[open][1].end = Object.assign({}, openingSequence.start);
            events[index][1].start = Object.assign({}, closingSequence.end);
            nextEvents = [] // If there are more markers in the opening, add them before.
            ;
            if (events[open][1].end.offset - events[open][1].start.offset) nextEvents = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(nextEvents, [
                [
                    "enter",
                    events[open][1],
                    context
                ],
                [
                    "exit",
                    events[open][1],
                    context
                ]
            ]);
             // Opening.
            nextEvents = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(nextEvents, [
                [
                    "enter",
                    group,
                    context
                ],
                [
                    "enter",
                    openingSequence,
                    context
                ],
                [
                    "exit",
                    openingSequence,
                    context
                ],
                [
                    "enter",
                    text,
                    context
                ]
            ]) // Between.
            ;
            nextEvents = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(nextEvents, (0, $2d1cd621ae059249$export$3ff61ec196ff408b)(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)) // Closing.
            ;
            nextEvents = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(nextEvents, [
                [
                    "exit",
                    text,
                    context
                ],
                [
                    "enter",
                    closingSequence,
                    context
                ],
                [
                    "exit",
                    closingSequence,
                    context
                ],
                [
                    "exit",
                    group,
                    context
                ]
            ]) // If there are more markers in the closing, add them after.
            ;
            if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(nextEvents, [
                    [
                        "enter",
                        events[index][1],
                        context
                    ],
                    [
                        "exit",
                        events[index][1],
                        context
                    ]
                ]);
            } else offset = 0;
            (0, $e3740fd54cb8c53f$export$869882364835d202)(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - offset - 2;
            break;
        }
    }
     // Remove remaining sequences.
    index = -1;
    while(++index < events.length)if (events[index][1].type === "attentionSequence") events[index][1].type = "data";
    return events;
}
/** @type {Tokenizer} */ function $4a83c38545e2870b$var$tokenizeAttention(effects, ok) {
    const attentionMarkers = this.parser.constructs.attentionMarkers.null;
    const previous = this.previous;
    const before = (0, $076e9255d90ad183$export$e3902bc0d835cad0)(previous);
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            return sequence;
        }
        const token = effects.exit("attentionSequence");
        const after = (0, $076e9255d90ad183$export$e3902bc0d835cad0)(code);
        const open = !after || after === 2 && before || attentionMarkers.includes(code);
        const close = !before || before === 2 && after || attentionMarkers.includes(previous);
        token._open = Boolean(marker === 42 ? open : open && (before || !close));
        token._close = Boolean(marker === 42 ? close : close && (after || !open));
        return ok(code);
    }
}
/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */ function $4a83c38545e2870b$var$movePoint(point, offset) {
    point.column += offset;
    point.offset += offset;
    point._bufferIndex += offset;
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
const $d65a4e456a4c0dfc$export$17ddf85e4c916ad6 = {
    name: "autolink",
    tokenize: $d65a4e456a4c0dfc$var$tokenizeAutolink
};
/** @type {Tokenizer} */ function $d65a4e456a4c0dfc$var$tokenizeAutolink(effects, ok, nok) {
    let size = 1;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
    }
    /** @type {State} */ function open(code) {
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            return schemeOrEmailAtext;
        }
        return (0, $2d97e78534b5d038$export$4397998b34fe597d)(code) ? emailAtext(code) : nok(code);
    }
    /** @type {State} */ function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
    }
    /** @type {State} */ function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
            effects.consume(code);
            return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) && size++ < 32) {
            effects.consume(code);
            return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
    }
    /** @type {State} */ function urlInside(code) {
        if (code === 62) {
            effects.exit("autolinkProtocol");
            return end(code);
        }
        if (code === null || code === 32 || code === 60 || (0, $2d97e78534b5d038$export$67dbf494fc8394df)(code)) return nok(code);
        effects.consume(code);
        return urlInside;
    }
    /** @type {State} */ function emailAtext(code) {
        if (code === 64) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if ((0, $2d97e78534b5d038$export$4397998b34fe597d)(code)) {
            effects.consume(code);
            return emailAtext;
        }
        return nok(code);
    }
    /** @type {State} */ function emailAtSignOrDot(code) {
        return (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code) ? emailLabel(code) : nok(code);
    }
    /** @type {State} */ function emailLabel(code) {
        if (code === 46) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (code === 62) {
            // Exit, then change the type.
            effects.exit("autolinkProtocol").type = "autolinkEmail";
            return end(code);
        }
        return emailValue(code);
    }
    /** @type {State} */ function emailValue(code) {
        if ((code === 45 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) && size++ < 63) {
            effects.consume(code);
            return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
    }
    /** @type {State} */ function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 */ 

const $f20166fc2e09646a$export$200dcd0a5903c968 = {
    name: "blockQuote",
    tokenize: $f20166fc2e09646a$var$tokenizeBlockQuoteStart,
    continuation: {
        tokenize: $f20166fc2e09646a$var$tokenizeBlockQuoteContinuation
    },
    exit: $f20166fc2e09646a$var$exit
};
/** @type {Tokenizer} */ function $f20166fc2e09646a$var$tokenizeBlockQuoteStart(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        if (code === 62) {
            const state = self.containerState;
            if (!state.open) {
                effects.enter("blockQuote", {
                    _container: true
                });
                state.open = true;
            }
            effects.enter("blockQuotePrefix");
            effects.enter("blockQuoteMarker");
            effects.consume(code);
            effects.exit("blockQuoteMarker");
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.enter("blockQuotePrefixWhitespace");
            effects.consume(code);
            effects.exit("blockQuotePrefixWhitespace");
            effects.exit("blockQuotePrefix");
            return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function $f20166fc2e09646a$var$tokenizeBlockQuoteContinuation(effects, ok, nok) {
    return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, effects.attempt($f20166fc2e09646a$export$200dcd0a5903c968, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}
/** @type {Exiter} */ function $f20166fc2e09646a$var$exit(effects) {
    effects.exit("blockQuote");
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
const $81781b60d5cd3cfc$export$2005478564e78d96 = {
    name: "characterEscape",
    tokenize: $81781b60d5cd3cfc$var$tokenizeCharacterEscape
};
/** @type {Tokenizer} */ function $81781b60d5cd3cfc$var$tokenizeCharacterEscape(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if ((0, $2d97e78534b5d038$export$35794a7d1db99380)(code)) {
            effects.enter("characterEscapeValue");
            effects.consume(code);
            effects.exit("characterEscapeValue");
            effects.exit("characterEscape");
            return ok;
        }
        return nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ /**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */ const $52512792806e1b27$export$ec810d1aafce79a7 = {
    AElig: "\xc6",
    AMP: "&",
    Aacute: "\xc1",
    Abreve: "Ă",
    Acirc: "\xc2",
    Acy: "А",
    Afr: "\uD835\uDD04",
    Agrave: "\xc0",
    Alpha: "Α",
    Amacr: "Ā",
    And: "⩓",
    Aogon: "Ą",
    Aopf: "\uD835\uDD38",
    ApplyFunction: "⁡",
    Aring: "\xc5",
    Ascr: "\uD835\uDC9C",
    Assign: "≔",
    Atilde: "\xc3",
    Auml: "\xc4",
    Backslash: "∖",
    Barv: "⫧",
    Barwed: "⌆",
    Bcy: "Б",
    Because: "∵",
    Bernoullis: "ℬ",
    Beta: "Β",
    Bfr: "\uD835\uDD05",
    Bopf: "\uD835\uDD39",
    Breve: "˘",
    Bscr: "ℬ",
    Bumpeq: "≎",
    CHcy: "Ч",
    COPY: "\xa9",
    Cacute: "Ć",
    Cap: "⋒",
    CapitalDifferentialD: "ⅅ",
    Cayleys: "ℭ",
    Ccaron: "Č",
    Ccedil: "\xc7",
    Ccirc: "Ĉ",
    Cconint: "∰",
    Cdot: "Ċ",
    Cedilla: "\xb8",
    CenterDot: "\xb7",
    Cfr: "ℭ",
    Chi: "Χ",
    CircleDot: "⊙",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    Colon: "∷",
    Colone: "⩴",
    Congruent: "≡",
    Conint: "∯",
    ContourIntegral: "∮",
    Copf: "ℂ",
    Coproduct: "∐",
    CounterClockwiseContourIntegral: "∳",
    Cross: "⨯",
    Cscr: "\uD835\uDC9E",
    Cup: "⋓",
    CupCap: "≍",
    DD: "ⅅ",
    DDotrahd: "⤑",
    DJcy: "Ђ",
    DScy: "Ѕ",
    DZcy: "Џ",
    Dagger: "‡",
    Darr: "↡",
    Dashv: "⫤",
    Dcaron: "Ď",
    Dcy: "Д",
    Del: "∇",
    Delta: "Δ",
    Dfr: "\uD835\uDD07",
    DiacriticalAcute: "\xb4",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    Diamond: "⋄",
    DifferentialD: "ⅆ",
    Dopf: "\uD835\uDD3B",
    Dot: "\xa8",
    DotDot: "⃜",
    DotEqual: "≐",
    DoubleContourIntegral: "∯",
    DoubleDot: "\xa8",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    Downarrow: "⇓",
    Dscr: "\uD835\uDC9F",
    Dstrok: "Đ",
    ENG: "Ŋ",
    ETH: "\xd0",
    Eacute: "\xc9",
    Ecaron: "Ě",
    Ecirc: "\xca",
    Ecy: "Э",
    Edot: "Ė",
    Efr: "\uD835\uDD08",
    Egrave: "\xc8",
    Element: "∈",
    Emacr: "Ē",
    EmptySmallSquare: "◻",
    EmptyVerySmallSquare: "▫",
    Eogon: "Ę",
    Eopf: "\uD835\uDD3C",
    Epsilon: "Ε",
    Equal: "⩵",
    EqualTilde: "≂",
    Equilibrium: "⇌",
    Escr: "ℰ",
    Esim: "⩳",
    Eta: "Η",
    Euml: "\xcb",
    Exists: "∃",
    ExponentialE: "ⅇ",
    Fcy: "Ф",
    Ffr: "\uD835\uDD09",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    Fopf: "\uD835\uDD3D",
    ForAll: "∀",
    Fouriertrf: "ℱ",
    Fscr: "ℱ",
    GJcy: "Ѓ",
    GT: ">",
    Gamma: "Γ",
    Gammad: "Ϝ",
    Gbreve: "Ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    Gcy: "Г",
    Gdot: "Ġ",
    Gfr: "\uD835\uDD0A",
    Gg: "⋙",
    Gopf: "\uD835\uDD3E",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "\uD835\uDCA2",
    Gt: "≫",
    HARDcy: "Ъ",
    Hacek: "ˇ",
    Hat: "^",
    Hcirc: "Ĥ",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    Hopf: "ℍ",
    HorizontalLine: "─",
    Hscr: "ℋ",
    Hstrok: "Ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    IEcy: "Е",
    IJlig: "Ĳ",
    IOcy: "Ё",
    Iacute: "\xcd",
    Icirc: "\xce",
    Icy: "И",
    Idot: "İ",
    Ifr: "ℑ",
    Igrave: "\xcc",
    Im: "ℑ",
    Imacr: "Ī",
    ImaginaryI: "ⅈ",
    Implies: "⇒",
    Int: "∬",
    Integral: "∫",
    Intersection: "⋂",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    Iogon: "Į",
    Iopf: "\uD835\uDD40",
    Iota: "Ι",
    Iscr: "ℐ",
    Itilde: "Ĩ",
    Iukcy: "І",
    Iuml: "\xcf",
    Jcirc: "Ĵ",
    Jcy: "Й",
    Jfr: "\uD835\uDD0D",
    Jopf: "\uD835\uDD41",
    Jscr: "\uD835\uDCA5",
    Jsercy: "Ј",
    Jukcy: "Є",
    KHcy: "Х",
    KJcy: "Ќ",
    Kappa: "Κ",
    Kcedil: "Ķ",
    Kcy: "К",
    Kfr: "\uD835\uDD0E",
    Kopf: "\uD835\uDD42",
    Kscr: "\uD835\uDCA6",
    LJcy: "Љ",
    LT: "<",
    Lacute: "Ĺ",
    Lambda: "Λ",
    Lang: "⟪",
    Laplacetrf: "ℒ",
    Larr: "↞",
    Lcaron: "Ľ",
    Lcedil: "Ļ",
    Lcy: "Л",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    LeftRightArrow: "↔",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    Leftarrow: "⇐",
    Leftrightarrow: "⇔",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    LessLess: "⪡",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    Lfr: "\uD835\uDD0F",
    Ll: "⋘",
    Lleftarrow: "⇚",
    Lmidot: "Ŀ",
    LongLeftArrow: "⟵",
    LongLeftRightArrow: "⟷",
    LongRightArrow: "⟶",
    Longleftarrow: "⟸",
    Longleftrightarrow: "⟺",
    Longrightarrow: "⟹",
    Lopf: "\uD835\uDD43",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    Lscr: "ℒ",
    Lsh: "↰",
    Lstrok: "Ł",
    Lt: "≪",
    Map: "⤅",
    Mcy: "М",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "\uD835\uDD10",
    MinusPlus: "∓",
    Mopf: "\uD835\uDD44",
    Mscr: "ℳ",
    Mu: "Μ",
    NJcy: "Њ",
    Nacute: "Ń",
    Ncaron: "Ň",
    Ncedil: "Ņ",
    Ncy: "Н",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: "\n",
    Nfr: "\uD835\uDD11",
    NoBreak: "⁠",
    NonBreakingSpace: "\xa0",
    Nopf: "ℕ",
    Not: "⫬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    Nscr: "\uD835\uDCA9",
    Ntilde: "\xd1",
    Nu: "Ν",
    OElig: "Œ",
    Oacute: "\xd3",
    Ocirc: "\xd4",
    Ocy: "О",
    Odblac: "Ő",
    Ofr: "\uD835\uDD12",
    Ograve: "\xd2",
    Omacr: "Ō",
    Omega: "Ω",
    Omicron: "Ο",
    Oopf: "\uD835\uDD46",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    Or: "⩔",
    Oscr: "\uD835\uDCAA",
    Oslash: "\xd8",
    Otilde: "\xd5",
    Otimes: "⨷",
    Ouml: "\xd6",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    PartialD: "∂",
    Pcy: "П",
    Pfr: "\uD835\uDD13",
    Phi: "Φ",
    Pi: "Π",
    PlusMinus: "\xb1",
    Poincareplane: "ℌ",
    Popf: "ℙ",
    Pr: "⪻",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    Prime: "″",
    Product: "∏",
    Proportion: "∷",
    Proportional: "∝",
    Pscr: "\uD835\uDCAB",
    Psi: "Ψ",
    QUOT: '"',
    Qfr: "\uD835\uDD14",
    Qopf: "ℚ",
    Qscr: "\uD835\uDCAC",
    RBarr: "⤐",
    REG: "\xae",
    Racute: "Ŕ",
    Rang: "⟫",
    Rarr: "↠",
    Rarrtl: "⤖",
    Rcaron: "Ř",
    Rcedil: "Ŗ",
    Rcy: "Р",
    Re: "ℜ",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    Rfr: "ℜ",
    Rho: "Ρ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    Rightarrow: "⇒",
    Ropf: "ℝ",
    RoundImplies: "⥰",
    Rrightarrow: "⇛",
    Rscr: "ℛ",
    Rsh: "↱",
    RuleDelayed: "⧴",
    SHCHcy: "Щ",
    SHcy: "Ш",
    SOFTcy: "Ь",
    Sacute: "Ś",
    Sc: "⪼",
    Scaron: "Š",
    Scedil: "Ş",
    Scirc: "Ŝ",
    Scy: "С",
    Sfr: "\uD835\uDD16",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    Sigma: "Σ",
    SmallCircle: "∘",
    Sopf: "\uD835\uDD4A",
    Sqrt: "√",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    Sscr: "\uD835\uDCAE",
    Star: "⋆",
    Sub: "⋐",
    Subset: "⋐",
    SubsetEqual: "⊆",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    SuchThat: "∋",
    Sum: "∑",
    Sup: "⋑",
    Superset: "⊃",
    SupersetEqual: "⊇",
    Supset: "⋑",
    THORN: "\xde",
    TRADE: "™",
    TSHcy: "Ћ",
    TScy: "Ц",
    Tab: "	",
    Tau: "Τ",
    Tcaron: "Ť",
    Tcedil: "Ţ",
    Tcy: "Т",
    Tfr: "\uD835\uDD17",
    Therefore: "∴",
    Theta: "Θ",
    ThickSpace: "  ",
    ThinSpace: " ",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    Topf: "\uD835\uDD4B",
    TripleDot: "⃛",
    Tscr: "\uD835\uDCAF",
    Tstrok: "Ŧ",
    Uacute: "\xda",
    Uarr: "↟",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    Ubreve: "Ŭ",
    Ucirc: "\xdb",
    Ucy: "У",
    Udblac: "Ű",
    Ufr: "\uD835\uDD18",
    Ugrave: "\xd9",
    Umacr: "Ū",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    Uopf: "\uD835\uDD4C",
    UpArrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    UpEquilibrium: "⥮",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    Uparrow: "⇑",
    Updownarrow: "⇕",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    Upsilon: "Υ",
    Uring: "Ů",
    Uscr: "\uD835\uDCB0",
    Utilde: "Ũ",
    Uuml: "\xdc",
    VDash: "⊫",
    Vbar: "⫫",
    Vcy: "В",
    Vdash: "⊩",
    Vdashl: "⫦",
    Vee: "⋁",
    Verbar: "‖",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "\uD835\uDD19",
    Vopf: "\uD835\uDD4D",
    Vscr: "\uD835\uDCB1",
    Vvdash: "⊪",
    Wcirc: "Ŵ",
    Wedge: "⋀",
    Wfr: "\uD835\uDD1A",
    Wopf: "\uD835\uDD4E",
    Wscr: "\uD835\uDCB2",
    Xfr: "\uD835\uDD1B",
    Xi: "Ξ",
    Xopf: "\uD835\uDD4F",
    Xscr: "\uD835\uDCB3",
    YAcy: "Я",
    YIcy: "Ї",
    YUcy: "Ю",
    Yacute: "\xdd",
    Ycirc: "Ŷ",
    Ycy: "Ы",
    Yfr: "\uD835\uDD1C",
    Yopf: "\uD835\uDD50",
    Yscr: "\uD835\uDCB4",
    Yuml: "Ÿ",
    ZHcy: "Ж",
    Zacute: "Ź",
    Zcaron: "Ž",
    Zcy: "З",
    Zdot: "Ż",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    Zfr: "ℨ",
    Zopf: "ℤ",
    Zscr: "\uD835\uDCB5",
    aacute: "\xe1",
    abreve: "ă",
    ac: "∾",
    acE: "∾̳",
    acd: "∿",
    acirc: "\xe2",
    acute: "\xb4",
    acy: "а",
    aelig: "\xe6",
    af: "⁡",
    afr: "\uD835\uDD1E",
    agrave: "\xe0",
    alefsym: "ℵ",
    aleph: "ℵ",
    alpha: "α",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "\xc5",
    angzarr: "⍼",
    aogon: "ą",
    aopf: "\uD835\uDD52",
    ap: "≈",
    apE: "⩰",
    apacir: "⩯",
    ape: "≊",
    apid: "≋",
    apos: "'",
    approx: "≈",
    approxeq: "≊",
    aring: "\xe5",
    ascr: "\uD835\uDCB6",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    atilde: "\xe3",
    auml: "\xe4",
    awconint: "∳",
    awint: "⨑",
    bNot: "⫭",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    barvee: "⊽",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    bfr: "\uD835\uDD1F",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bnot: "⌐",
    bopf: "\uD835\uDD53",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxDL: "╗",
    boxDR: "╔",
    boxDl: "╖",
    boxDr: "╓",
    boxH: "═",
    boxHD: "╦",
    boxHU: "╩",
    boxHd: "╤",
    boxHu: "╧",
    boxUL: "╝",
    boxUR: "╚",
    boxUl: "╜",
    boxUr: "╙",
    boxV: "║",
    boxVH: "╬",
    boxVL: "╣",
    boxVR: "╠",
    boxVh: "╫",
    boxVl: "╢",
    boxVr: "╟",
    boxbox: "⧉",
    boxdL: "╕",
    boxdR: "╒",
    boxdl: "┐",
    boxdr: "┌",
    boxh: "─",
    boxhD: "╥",
    boxhU: "╨",
    boxhd: "┬",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxuL: "╛",
    boxuR: "╘",
    boxul: "┘",
    boxur: "└",
    boxv: "│",
    boxvH: "╪",
    boxvL: "╡",
    boxvR: "╞",
    boxvh: "┼",
    boxvl: "┤",
    boxvr: "├",
    bprime: "‵",
    breve: "˘",
    brvbar: "\xa6",
    bscr: "\uD835\uDCB7",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    bumpeq: "≏",
    cacute: "ć",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    ccaps: "⩍",
    ccaron: "č",
    ccedil: "\xe7",
    ccirc: "ĉ",
    ccups: "⩌",
    ccupssm: "⩐",
    cdot: "ċ",
    cedil: "\xb8",
    cemptyv: "⦲",
    cent: "\xa2",
    centerdot: "\xb7",
    cfr: "\uD835\uDD20",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    chi: "χ",
    cir: "○",
    cirE: "⧃",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledR: "\xae",
    circledS: "Ⓢ",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    conint: "∮",
    copf: "\uD835\uDD54",
    coprod: "∐",
    copy: "\xa9",
    copysr: "℗",
    crarr: "↵",
    cross: "✗",
    cscr: "\uD835\uDCB8",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cup: "∪",
    cupbrcap: "⩈",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "\xa4",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dArr: "⇓",
    dHar: "⥥",
    dagger: "†",
    daleth: "ℸ",
    darr: "↓",
    dash: "‐",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    dcaron: "ď",
    dcy: "д",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    ddotseq: "⩷",
    deg: "\xb0",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    dfr: "\uD835\uDD21",
    dharl: "⇃",
    dharr: "⇂",
    diam: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "\xa8",
    digamma: "ϝ",
    disin: "⋲",
    div: "\xf7",
    divide: "\xf7",
    divideontimes: "⋇",
    divonx: "⋇",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    dopf: "\uD835\uDD55",
    dot: "˙",
    doteq: "≐",
    doteqdot: "≑",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    downarrow: "↓",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    dscr: "\uD835\uDCB9",
    dscy: "ѕ",
    dsol: "⧶",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    dzcy: "џ",
    dzigrarr: "⟿",
    eDDot: "⩷",
    eDot: "≑",
    eacute: "\xe9",
    easter: "⩮",
    ecaron: "ě",
    ecir: "≖",
    ecirc: "\xea",
    ecolon: "≕",
    ecy: "э",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    efr: "\uD835\uDD22",
    eg: "⪚",
    egrave: "\xe8",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    emptyv: "∅",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    eng: "ŋ",
    ensp: " ",
    eogon: "ę",
    eopf: "\uD835\uDD56",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    equals: "=",
    equest: "≟",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erDot: "≓",
    erarr: "⥱",
    escr: "ℯ",
    esdot: "≐",
    esim: "≂",
    eta: "η",
    eth: "\xf0",
    euml: "\xeb",
    euro: "€",
    excl: "!",
    exist: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    ffr: "\uD835\uDD23",
    filig: "ﬁ",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    fopf: "\uD835\uDD57",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    fpartint: "⨍",
    frac12: "\xbd",
    frac13: "⅓",
    frac14: "\xbc",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "\xbe",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "\uD835\uDCBB",
    gE: "≧",
    gEl: "⪌",
    gacute: "ǵ",
    gamma: "γ",
    gammad: "ϝ",
    gap: "⪆",
    gbreve: "ğ",
    gcirc: "ĝ",
    gcy: "г",
    gdot: "ġ",
    ge: "≥",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    gfr: "\uD835\uDD24",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    gjcy: "ѓ",
    gl: "≷",
    glE: "⪒",
    gla: "⪥",
    glj: "⪤",
    gnE: "≩",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    gopf: "\uD835\uDD58",
    grave: "`",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    hArr: "⇔",
    hairsp: " ",
    half: "\xbd",
    hamilt: "ℋ",
    hardcy: "ъ",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    hbar: "ℏ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "\uD835\uDD25",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "\uD835\uDD59",
    horbar: "―",
    hscr: "\uD835\uDCBD",
    hslash: "ℏ",
    hstrok: "ħ",
    hybull: "⁃",
    hyphen: "‐",
    iacute: "\xed",
    ic: "⁣",
    icirc: "\xee",
    icy: "и",
    iecy: "е",
    iexcl: "\xa1",
    iff: "⇔",
    ifr: "\uD835\uDD26",
    igrave: "\xec",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    ijlig: "ĳ",
    imacr: "ī",
    image: "ℑ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    intercal: "⊺",
    intlarhk: "⨗",
    intprod: "⨼",
    iocy: "ё",
    iogon: "į",
    iopf: "\uD835\uDD5A",
    iota: "ι",
    iprod: "⨼",
    iquest: "\xbf",
    iscr: "\uD835\uDCBE",
    isin: "∈",
    isinE: "⋹",
    isindot: "⋵",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    itilde: "ĩ",
    iukcy: "і",
    iuml: "\xef",
    jcirc: "ĵ",
    jcy: "й",
    jfr: "\uD835\uDD27",
    jmath: "ȷ",
    jopf: "\uD835\uDD5B",
    jscr: "\uD835\uDCBF",
    jsercy: "ј",
    jukcy: "є",
    kappa: "κ",
    kappav: "ϰ",
    kcedil: "ķ",
    kcy: "к",
    kfr: "\uD835\uDD28",
    kgreen: "ĸ",
    khcy: "х",
    kjcy: "ќ",
    kopf: "\uD835\uDD5C",
    kscr: "\uD835\uDCC0",
    lAarr: "⇚",
    lArr: "⇐",
    lAtail: "⤛",
    lBarr: "⤎",
    lE: "≦",
    lEg: "⪋",
    lHar: "⥢",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    lambda: "λ",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    laquo: "\xab",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    lcaron: "ľ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    leftarrow: "←",
    leftarrowtail: "↢",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    leftthreetimes: "⋋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    lessgtr: "≶",
    lesssim: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    lfr: "\uD835\uDD29",
    lg: "≶",
    lgE: "⪑",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    ljcy: "љ",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    llhard: "⥫",
    lltri: "◺",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnE: "≨",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    lopf: "\uD835\uDD5D",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "\uD835\uDCC1",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    lstrok: "ł",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltrPar: "⦖",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    mDDot: "∺",
    macr: "\xaf",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    mcy: "м",
    mdash: "—",
    measuredangle: "∡",
    mfr: "\uD835\uDD2A",
    mho: "℧",
    micro: "\xb5",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "\xb7",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    mopf: "\uD835\uDD5E",
    mp: "∓",
    mscr: "\uD835\uDCC2",
    mstpos: "∾",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nGg: "⋙̸",
    nGt: "≫⃒",
    nGtv: "≫̸",
    nLeftarrow: "⇍",
    nLeftrightarrow: "⇎",
    nLl: "⋘̸",
    nLt: "≪⃒",
    nLtv: "≪̸",
    nRightarrow: "⇏",
    nVDash: "⊯",
    nVdash: "⊮",
    nabla: "∇",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: "\xa0",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    ncaron: "ň",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    neArr: "⇗",
    nearhk: "⤤",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    nexist: "∄",
    nexists: "∄",
    nfr: "\uD835\uDD2B",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    ngsim: "≵",
    ngt: "≯",
    ngtr: "≯",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    njcy: "њ",
    nlArr: "⇍",
    nlE: "≦̸",
    nlarr: "↚",
    nldr: "‥",
    nle: "≰",
    nleftarrow: "↚",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nlsim: "≴",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nmid: "∤",
    nopf: "\uD835\uDD5F",
    not: "\xac",
    notin: "∉",
    notinE: "⋹̸",
    notindot: "⋵̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    nscr: "\uD835\uDCC3",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    ntilde: "\xf1",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvDash: "⊭",
    nvHarr: "⤄",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwArr: "⇖",
    nwarhk: "⤣",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    oS: "Ⓢ",
    oacute: "\xf3",
    oast: "⊛",
    ocir: "⊚",
    ocirc: "\xf4",
    ocy: "о",
    odash: "⊝",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    oelig: "œ",
    ofcir: "⦿",
    ofr: "\uD835\uDD2C",
    ogon: "˛",
    ograve: "\xf2",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    omacr: "ō",
    omega: "ω",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    oopf: "\uD835\uDD60",
    opar: "⦷",
    operp: "⦹",
    oplus: "⊕",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "\xaa",
    ordm: "\xba",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oscr: "ℴ",
    oslash: "\xf8",
    osol: "⊘",
    otilde: "\xf5",
    otimes: "⊗",
    otimesas: "⨶",
    ouml: "\xf6",
    ovbar: "⌽",
    par: "∥",
    para: "\xb6",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    pfr: "\uD835\uDD2D",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    plusmn: "\xb1",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "\xb1",
    pointint: "⨕",
    popf: "\uD835\uDD61",
    pound: "\xa3",
    pr: "≺",
    prE: "⪳",
    prap: "⪷",
    prcue: "≼",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    prime: "′",
    primes: "ℙ",
    prnE: "⪵",
    prnap: "⪹",
    prnsim: "⋨",
    prod: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    pscr: "\uD835\uDCC5",
    psi: "ψ",
    puncsp: " ",
    qfr: "\uD835\uDD2E",
    qint: "⨌",
    qopf: "\uD835\uDD62",
    qprime: "⁗",
    qscr: "\uD835\uDCC6",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: '"',
    rAarr: "⇛",
    rArr: "⇒",
    rAtail: "⤜",
    rBarr: "⤏",
    rHar: "⥤",
    race: "∽̱",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "\xbb",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    rcaron: "ř",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    reg: "\xae",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "\uD835\uDD2F",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    rho: "ρ",
    rhov: "ϱ",
    rightarrow: "→",
    rightarrowtail: "↣",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    rightthreetimes: "⋌",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "\uD835\uDD63",
    roplus: "⨮",
    rotimes: "⨵",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    rsaquo: "›",
    rscr: "\uD835\uDCC7",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    ruluhar: "⥨",
    rx: "℞",
    sacute: "ś",
    sbquo: "‚",
    sc: "≻",
    scE: "⪴",
    scap: "⪸",
    scaron: "š",
    sccue: "≽",
    sce: "⪰",
    scedil: "ş",
    scirc: "ŝ",
    scnE: "⪶",
    scnap: "⪺",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    seArr: "⇘",
    searhk: "⤥",
    searr: "↘",
    searrow: "↘",
    sect: "\xa7",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    sfr: "\uD835\uDD30",
    sfrown: "⌢",
    sharp: "♯",
    shchcy: "щ",
    shcy: "ш",
    shortmid: "∣",
    shortparallel: "∥",
    shy: "\xad",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    sopf: "\uD835\uDD64",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    square: "□",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    sscr: "\uD835\uDCC8",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "\xaf",
    sub: "⊂",
    subE: "⫅",
    subdot: "⪽",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    sum: "∑",
    sung: "♪",
    sup1: "\xb9",
    sup2: "\xb2",
    sup3: "\xb3",
    sup: "⊃",
    supE: "⫆",
    supdot: "⪾",
    supdsub: "⫘",
    supe: "⊇",
    supedot: "⫄",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swArr: "⇙",
    swarhk: "⤦",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "\xdf",
    target: "⌖",
    tau: "τ",
    tbrk: "⎴",
    tcaron: "ť",
    tcedil: "ţ",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    tfr: "\uD835\uDD31",
    there4: "∴",
    therefore: "∴",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    thinsp: " ",
    thkap: "≈",
    thksim: "∼",
    thorn: "\xfe",
    tilde: "˜",
    times: "\xd7",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    topf: "\uD835\uDD65",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    tscr: "\uD835\uDCC9",
    tscy: "ц",
    tshcy: "ћ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    uArr: "⇑",
    uHar: "⥣",
    uacute: "\xfa",
    uarr: "↑",
    ubrcy: "ў",
    ubreve: "ŭ",
    ucirc: "\xfb",
    ucy: "у",
    udarr: "⇅",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    ufr: "\uD835\uDD32",
    ugrave: "\xf9",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    umacr: "ū",
    uml: "\xa8",
    uogon: "ų",
    uopf: "\uD835\uDD66",
    uparrow: "↑",
    updownarrow: "↕",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    upsi: "υ",
    upsih: "ϒ",
    upsilon: "υ",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    uring: "ů",
    urtri: "◹",
    uscr: "\uD835\uDCCA",
    utdot: "⋰",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    uuml: "\xfc",
    uwangle: "⦧",
    vArr: "⇕",
    vBar: "⫨",
    vBarv: "⫩",
    vDash: "⊨",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vcy: "в",
    vdash: "⊢",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    vert: "|",
    vfr: "\uD835\uDD33",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    vopf: "\uD835\uDD67",
    vprop: "∝",
    vrtri: "⊳",
    vscr: "\uD835\uDCCB",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    vzigzag: "⦚",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    wfr: "\uD835\uDD34",
    wopf: "\uD835\uDD68",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    wscr: "\uD835\uDCCC",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    xfr: "\uD835\uDD35",
    xhArr: "⟺",
    xharr: "⟷",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    xopf: "\uD835\uDD69",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    xscr: "\uD835\uDCCD",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    yacute: "\xfd",
    yacy: "я",
    ycirc: "ŷ",
    ycy: "ы",
    yen: "\xa5",
    yfr: "\uD835\uDD36",
    yicy: "ї",
    yopf: "\uD835\uDD6A",
    yscr: "\uD835\uDCCE",
    yucy: "ю",
    yuml: "\xff",
    zacute: "ź",
    zcaron: "ž",
    zcy: "з",
    zdot: "ż",
    zeetrf: "ℨ",
    zeta: "ζ",
    zfr: "\uD835\uDD37",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "\uD835\uDD6B",
    zscr: "\uD835\uDCCF",
    zwj: "‍",
    zwnj: "‌"
};


const $e53a90acf7ece0f0$var$own = {}.hasOwnProperty;
function $e53a90acf7ece0f0$export$289b6a6320f709b4(value) {
    return $e53a90acf7ece0f0$var$own.call((0, $52512792806e1b27$export$ec810d1aafce79a7), value) ? (0, $52512792806e1b27$export$ec810d1aafce79a7)[value] : false;
}



const $6047486b929e4c53$export$e31905600aaf3d8e = {
    name: "characterReference",
    tokenize: $6047486b929e4c53$var$tokenizeCharacterReference
};
/** @type {Tokenizer} */ function $6047486b929e4c53$var$tokenizeCharacterReference(effects, ok, nok) {
    const self = this;
    let size = 0;
    /** @type {number} */ let max;
    /** @type {(code: Code) => code is number} */ let test;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 35) {
            effects.enter("characterReferenceMarkerNumeric");
            effects.consume(code);
            effects.exit("characterReferenceMarkerNumeric");
            return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = (0, $2d97e78534b5d038$export$75c76db11865a9f4);
        return value(code);
    }
    /** @type {State} */ function numeric(code) {
        if (code === 88 || code === 120) {
            effects.enter("characterReferenceMarkerHexadecimal");
            effects.consume(code);
            effects.exit("characterReferenceMarkerHexadecimal");
            effects.enter("characterReferenceValue");
            max = 6;
            test = (0, $2d97e78534b5d038$export$eca2752363989806);
            return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = (0, $2d97e78534b5d038$export$ca8b5b1a6c320e6e);
        return value(code);
    }
    /** @type {State} */ function value(code) {
        /** @type {Token} */ let token;
        if (code === 59 && size) {
            token = effects.exit("characterReferenceValue");
            if (test === (0, $2d97e78534b5d038$export$75c76db11865a9f4) && !(0, $e53a90acf7ece0f0$export$289b6a6320f709b4)(self.sliceSerialize(token))) return nok(code);
            effects.enter("characterReferenceMarker");
            effects.consume(code);
            effects.exit("characterReferenceMarker");
            effects.exit("characterReference");
            return ok;
        }
        if (test(code) && size++ < max) {
            effects.consume(code);
            return value;
        }
        return nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

const $66f5470bc387380a$export$c23e4921f8d87e7c = {
    name: "codeFenced",
    tokenize: $66f5470bc387380a$var$tokenizeCodeFenced,
    concrete: true
};
/** @type {Tokenizer} */ function $66f5470bc387380a$var$tokenizeCodeFenced(effects, ok, nok) {
    const self = this;
    /** @type {Construct} */ const closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
    };
    /** @type {Construct} */ const nonLazyLine = {
        tokenize: tokenizeNonLazyLine,
        partial: true
    };
    const tail = this.events[this.events.length - 1];
    const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let sizeOpen = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
    }
    /** @type {State} */ function sequenceOpen(code) {
        if (code === marker) {
            effects.consume(code);
            sizeOpen++;
            return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok(code) : (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, infoOpen, "whitespace")(code);
    }
    /** @type {State} */ function infoOpen(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return openAfter(code);
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return info(code);
    }
    /** @type {State} */ function info(code) {
        if (code === null || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceInfo");
            return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return info;
    }
    /** @type {State} */ function infoAfter(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return openAfter(code);
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return meta(code);
    }
    /** @type {State} */ function meta(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceMeta");
            return openAfter(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return meta;
    }
    /** @type {State} */ function openAfter(code) {
        effects.exit("codeFencedFence");
        return self.interrupt ? ok(code) : contentStart(code);
    }
    /** @type {State} */ function contentStart(code) {
        if (code === null) return after(code);
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code);
        effects.enter("codeFlowValue");
        return contentContinue(code);
    }
    /** @type {State} */ function contentContinue(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("codeFlowValue");
            return contentStart(code);
        }
        effects.consume(code);
        return contentContinue;
    }
    /** @type {State} */ function after(code) {
        effects.exit("codeFenced");
        return ok(code);
    }
    /** @type {Tokenizer} */ function tokenizeNonLazyLine(effects, ok, nok) {
        const self = this;
        return start;
        /** @type {State} */ function start(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {Tokenizer} */ function tokenizeClosingFence(effects, ok, nok) {
        let size = 0;
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
        /** @type {State} */ function closingSequenceStart(code) {
            effects.enter("codeFencedFence");
            effects.enter("codeFencedFenceSequence");
            return closingSequence(code);
        }
        /** @type {State} */ function closingSequence(code) {
            if (code === marker) {
                effects.consume(code);
                size++;
                return closingSequence;
            }
            if (size < sizeOpen) return nok(code);
            effects.exit("codeFencedFenceSequence");
            return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, closingSequenceEnd, "whitespace")(code);
        }
        /** @type {State} */ function closingSequenceEnd(code) {
            if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
                effects.exit("codeFencedFence");
                return ok(code);
            }
            return nok(code);
        }
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 

const $325a2048196bfedc$export$47910b7ab28d1853 = {
    name: "codeIndented",
    tokenize: $325a2048196bfedc$var$tokenizeCodeIndented
};
/** @type {Construct} */ const $325a2048196bfedc$var$indentedContent = {
    tokenize: $325a2048196bfedc$var$tokenizeIndentedContent,
    partial: true
};
/** @type {Tokenizer} */ function $325a2048196bfedc$var$tokenizeCodeIndented(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeIndented");
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, afterStartPrefix, "linePrefix", 5)(code);
    }
    /** @type {State} */ function afterStartPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        if (code === null) return after(code);
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return effects.attempt($325a2048196bfedc$var$indentedContent, afterPrefix, after)(code);
        effects.enter("codeFlowValue");
        return content(code);
    }
    /** @type {State} */ function content(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("codeFlowValue");
            return afterPrefix(code);
        }
        effects.consume(code);
        return content;
    }
    /** @type {State} */ function after(code) {
        effects.exit("codeIndented");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function $325a2048196bfedc$var$tokenizeIndentedContent(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        // If this is a lazy line, it can’t be code.
        if (self.parser.lazy[self.now().line]) return nok(code);
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return start;
        }
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, afterPrefix, "linePrefix", 5)(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code) ? start(code) : nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 
const $8c581d5a6ffc76b5$export$d24f93e715f9df88 = {
    name: "codeText",
    tokenize: $8c581d5a6ffc76b5$var$tokenizeCodeText,
    resolve: $8c581d5a6ffc76b5$var$resolveCodeText,
    previous: $8c581d5a6ffc76b5$var$previous
};
/** @type {Resolver} */ function $8c581d5a6ffc76b5$var$resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    /** @type {number} */ let index;
    /** @type {number|undefined} */ let enter // If we start and end with an EOL or a space.
    ;
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex // And we have data.
        ;
        while(++index < tailExitIndex)if (events[index][1].type === "codeTextData") {
            // Then we have padding.
            events[headEnterIndex][1].type = "codeTextPadding";
            events[tailExitIndex][1].type = "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
        }
    } // Merge adjacent spaces and data.
    index = headEnterIndex - 1;
    tailExitIndex++;
    while(++index <= tailExitIndex){
        if (enter === undefined) {
            if (index !== tailExitIndex && events[index][1].type !== "lineEnding") enter = index;
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
            events[enter][1].type = "codeTextData";
            if (index !== enter + 2) {
                events[enter][1].end = events[index - 1][1].end;
                events.splice(enter + 2, index - enter - 2);
                tailExitIndex -= index - enter - 2;
                index = enter + 2;
            }
            enter = undefined;
        }
    }
    return events;
}
/** @type {Previous} */ function $8c581d5a6ffc76b5$var$previous(code) {
    // If there is a previous code, there will always be a tail.
    return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
/** @type {Tokenizer} */ function $8c581d5a6ffc76b5$var$tokenizeCodeText(effects, ok, nok) {
    const self = this;
    let sizeOpen = 0;
    /** @type {number} */ let size;
    /** @type {Token} */ let token;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
    }
    /** @type {State} */ function openingSequence(code) {
        if (code === 96) {
            effects.consume(code);
            sizeOpen++;
            return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
    }
    /** @type {State} */ function gap(code) {
        // EOF.
        if (code === null) return nok(code);
         // Closing fence?
        // Could also be data.
        if (code === 96) {
            token = effects.enter("codeTextSequence");
            size = 0;
            return closingSequence(code);
        } // Tabs don’t work, and virtual spaces don’t make sense.
        if (code === 32) {
            effects.enter("space");
            effects.consume(code);
            effects.exit("space");
            return gap;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return gap;
        } // Data.
        effects.enter("codeTextData");
        return data(code);
    } // In code.
    /** @type {State} */ function data(code) {
        if (code === null || code === 32 || code === 96 || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("codeTextData");
            return gap(code);
        }
        effects.consume(code);
        return data;
    } // Closing fence.
    /** @type {State} */ function closingSequence(code) {
        // More.
        if (code === 96) {
            effects.consume(code);
            size++;
            return closingSequence;
        } // Done!
        if (size === sizeOpen) {
            effects.exit("codeTextSequence");
            effects.exit("codeText");
            return ok(code);
        } // More or less accents: mark as data.
        token.type = "codeTextData";
        return data(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ /**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ 
function $a55811878a6d919b$export$2e6c8deaa96af245(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    /** @type {State} */ function start(code) {
        if (code === 60) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return destinationEnclosedBefore;
        }
        if (code === null || code === 41 || (0, $2d97e78534b5d038$export$67dbf494fc8394df)(code)) return nok(code);
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationRaw(code);
    }
    /** @type {State} */ function destinationEnclosedBefore(code) {
        if (code === 62) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationEnclosed(code);
    }
    /** @type {State} */ function destinationEnclosed(code) {
        if (code === 62) {
            effects.exit("chunkString");
            effects.exit(stringType);
            return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
    }
    /** @type {State} */ function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
            effects.consume(code);
            return destinationEnclosed;
        }
        return destinationEnclosed(code);
    }
    /** @type {State} */ function destinationRaw(code) {
        if (code === 40) {
            if (++balance > limit) return nok(code);
            effects.consume(code);
            return destinationRaw;
        }
        if (code === 41) {
            if (!balance--) {
                effects.exit("chunkString");
                effects.exit(stringType);
                effects.exit(rawType);
                effects.exit(type);
                return ok(code);
            }
            effects.consume(code);
            return destinationRaw;
        }
        if (code === null || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            if (balance) return nok(code);
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if ((0, $2d97e78534b5d038$export$67dbf494fc8394df)(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
    }
    /** @type {State} */ function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
            effects.consume(code);
            return destinationRaw;
        }
        return destinationRaw(code);
    }
}


/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').State} State
 */ 
function $4536f5abd1e4f7fe$export$7b768614d8ba97a7(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let data;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /** @type {State} */ function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || /* To do: remove in the future once we’ve switched from
       * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
       * which doesn’t need this */ /* Hidden footnotes hook */ /* c8 ignore next 3 */ code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) return nok(code);
        if (code === 93) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return atBreak;
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return label(code);
    }
    /** @type {State} */ function label(code) {
        if (code === null || code === 91 || code === 93 || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code) || size++ > 999) {
            effects.exit("chunkString");
            return atBreak(code);
        }
        effects.consume(code);
        data = data || !(0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code);
        return code === 92 ? labelEscape : label;
    }
    /** @type {State} */ function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
            effects.consume(code);
            size++;
            return label;
        }
        return label(code);
    }
}



/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

function $cb5c88803ba9609f$export$f970569cc855e483(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
    }
    /** @type {State} */ function atFirstTitleBreak(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
    }
    /** @type {State} */ function atTitleBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return atFirstTitleBreak(marker);
        }
        if (code === null) return nok(code);
         // Note: blank lines can’t exist in content.
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return title(code);
    }
    /** @type {State} */ function title(code) {
        if (code === marker || code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("chunkString");
            return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
    }
    /** @type {State} */ function titleEscape(code) {
        if (code === marker || code === 92) {
            effects.consume(code);
            return title;
        }
        return title(code);
    }
}


/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ 

function $20e7a21d90fe4811$export$1f27bd1aa33ce173(effects, ok) {
    /** @type {boolean} */ let seen;
    return start;
    /** @type {State} */ function start(code) {
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            seen = true;
            return start;
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
        return ok(code);
    }
}


/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */ function $d172c91bf9d24083$export$806d55e226cfcd08(value) {
    return value // Collapse Markdown whitespace.
    .replace(/[\t\n\r ]+/g, " ") // Trim.
    .replace(/^ | $/g, "") // Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}



const $8c9f7f00fff845d7$export$69f215ed977cdb73 = {
    name: "definition",
    tokenize: $8c9f7f00fff845d7$var$tokenizeDefinition
};
/** @type {Construct} */ const $8c9f7f00fff845d7$var$titleConstruct = {
    tokenize: $8c9f7f00fff845d7$var$tokenizeTitle,
    partial: true
};
/** @type {Tokenizer} */ function $8c9f7f00fff845d7$var$tokenizeDefinition(effects, ok, nok) {
    const self = this;
    /** @type {string} */ let identifier;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("definition");
        return (0, $4536f5abd1e4f7fe$export$7b768614d8ba97a7).call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
    }
    /** @type {State} */ function labelAfter(code) {
        identifier = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
            effects.enter("definitionMarker");
            effects.consume(code);
            effects.exit("definitionMarker") // Note: blank lines can’t exist in content.
            ;
            return (0, $20e7a21d90fe4811$export$1f27bd1aa33ce173)(effects, (0, $a55811878a6d919b$export$2e6c8deaa96af245)(effects, effects.attempt($8c9f7f00fff845d7$var$titleConstruct, (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, after, "whitespace"), (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("definition");
            if (!self.parser.defined.includes(identifier)) self.parser.defined.push(identifier);
            return ok(code);
        }
        return nok(code);
    }
}
/** @type {Tokenizer} */ function $8c9f7f00fff845d7$var$tokenizeTitle(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        return (0, $2d97e78534b5d038$export$a30284361b3814b7)(code) ? (0, $20e7a21d90fe4811$export$1f27bd1aa33ce173)(effects, before)(code) : nok(code);
    }
    /** @type {State} */ function before(code) {
        if (code === 34 || code === 39 || code === 40) return (0, $cb5c88803ba9609f$export$f970569cc855e483)(effects, (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        return code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code) ? ok(code) : nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
const $3562f2aa4264913a$export$86c573ab9e06f418 = {
    name: "hardBreakEscape",
    tokenize: $3562f2aa4264913a$var$tokenizeHardBreakEscape
};
/** @type {Tokenizer} */ function $3562f2aa4264913a$var$tokenizeHardBreakEscape(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("escapeMarker");
            effects.exit("hardBreakEscape");
            return ok(code);
        }
        return nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 


const $43b35896caf66e80$export$3871e9deb360695c = {
    name: "headingAtx",
    tokenize: $43b35896caf66e80$var$tokenizeHeadingAtx,
    resolve: $43b35896caf66e80$var$resolveHeadingAtx
};
/** @type {Resolver} */ function $43b35896caf66e80$var$resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    /** @type {Token} */ let content;
    /** @type {Token} */ let text // Prefix whitespace, part of the opening.
    ;
    if (events[contentStart][1].type === "whitespace") contentStart += 2;
     // Suffix whitespace, part of the closing.
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") contentEnd -= 2;
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    if (contentEnd > contentStart) {
        content = {
            type: "atxHeadingText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end
        };
        text = {
            type: "chunkText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end,
            // @ts-expect-error Constants are fine to assign.
            contentType: "text"
        };
        (0, $e3740fd54cb8c53f$export$869882364835d202)(events, contentStart, contentEnd - contentStart + 1, [
            [
                "enter",
                content,
                context
            ],
            [
                "enter",
                text,
                context
            ],
            [
                "exit",
                text,
                context
            ],
            [
                "exit",
                content,
                context
            ]
        ]);
    }
    return events;
}
/** @type {Tokenizer} */ function $43b35896caf66e80$var$tokenizeHeadingAtx(effects, ok, nok) {
    const self = this;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
    }
    /** @type {State} */ function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
            effects.consume(code);
            return fenceOpenInside;
        }
        if (code === null || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            effects.exit("atxHeadingSequence");
            return self.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
    }
    /** @type {State} */ function headingBreak(code) {
        if (code === 35) {
            effects.enter("atxHeadingSequence");
            return sequence(code);
        }
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("atxHeading");
            return ok(code);
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, headingBreak, "whitespace")(code);
        effects.enter("atxHeadingText");
        return data(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === 35) {
            effects.consume(code);
            return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null || code === 35 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            effects.exit("atxHeadingText");
            return headingBreak(code);
        }
        effects.consume(code);
        return data;
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 
/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result
 * in more relaxed rules (condition 6): because they are known blocks, the
 * HTML-like syntax doesn’t have to be strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 */ const $278742f10417da06$export$7364aee1c59d1879 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
];
const $278742f10417da06$export$948e66da505d080 = [
    "pre",
    "script",
    "style",
    "textarea"
];



const $d0d399add511d511$export$476ac411cb7d0d8f = {
    name: "htmlFlow",
    tokenize: $d0d399add511d511$var$tokenizeHtmlFlow,
    resolveTo: $d0d399add511d511$var$resolveToHtmlFlow,
    concrete: true
};
/** @type {Construct} */ const $d0d399add511d511$var$nextBlankConstruct = {
    tokenize: $d0d399add511d511$var$tokenizeNextBlank,
    partial: true
};
/** @type {Resolver} */ function $d0d399add511d511$var$resolveToHtmlFlow(events) {
    let index = events.length;
    while(index--){
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") break;
    }
    if (index > 1 && events[index - 2][1].type === "linePrefix") {
        // Add the prefix start to the HTML token.
        events[index][1].start = events[index - 2][1].start // Add the prefix start to the HTML line token.
        ;
        events[index + 1][1].start = events[index - 2][1].start // Remove the line prefix.
        ;
        events.splice(index - 2, 2);
    }
    return events;
}
/** @type {Tokenizer} */ function $d0d399add511d511$var$tokenizeHtmlFlow(effects, ok, nok) {
    const self = this;
    /** @type {number} */ let kind;
    /** @type {boolean} */ let startTag;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {Code} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationStart;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            kind = 3 // While we’re in an instruction instead of a declaration, we’re on a `?`
            ;
            // right now, so we do need to search for `>`, similar to declarations.
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            buffer = String.fromCharCode(code);
            startTag = true;
            return tagName;
        }
        return nok(code);
    }
    /** @type {State} */ function declarationStart(code) {
        if (code === 45) {
            effects.consume(code);
            kind = 2;
            return commentOpenInside;
        }
        if (code === 91) {
            effects.consume(code);
            kind = 5;
            buffer = "CDATA[";
            index = 0;
            return cdataOpenInside;
        }
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            kind = 4;
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    /** @type {State} */ function commentOpenInside(code) {
        if (code === 45) {
            effects.consume(code);
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    /** @type {State} */ function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects.consume(code);
            return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
        }
        return nok(code);
    }
    /** @type {State} */ function tagCloseStart(code) {
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            buffer = String.fromCharCode(code);
            return tagName;
        }
        return nok(code);
    }
    /** @type {State} */ function tagName(code) {
        if (code === null || code === 47 || code === 62 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            if (code !== 47 && startTag && (0, $278742f10417da06$export$948e66da505d080).includes(buffer.toLowerCase())) {
                kind = 1;
                return self.interrupt ? ok(code) : continuation(code);
            }
            if ((0, $278742f10417da06$export$7364aee1c59d1879).includes(buffer.toLowerCase())) {
                kind = 6;
                if (code === 47) {
                    effects.consume(code);
                    return basicSelfClosing;
                }
                return self.interrupt ? ok(code) : continuation(code);
            }
            kind = 7 // Do not support complete HTML when interrupting
            ;
            return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) {
            effects.consume(code);
            buffer += String.fromCharCode(code);
            return tagName;
        }
        return nok(code);
    }
    /** @type {State} */ function basicSelfClosing(code) {
        if (code === 62) {
            effects.consume(code);
            return self.interrupt ? ok : continuation;
        }
        return nok(code);
    }
    /** @type {State} */ function completeClosingTagAfter(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return completeClosingTagAfter;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeNameBefore(code) {
        if (code === 47) {
            effects.consume(code);
            return completeEnd;
        }
        if (code === 58 || code === 95 || (0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return completeAttributeNameBefore;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
    }
    /** @type {State} */ function completeAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
    }
    /** @type {State} */ function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return completeAttributeValueQuoted;
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        marker = null;
        return completeAttributeValueUnquoted(code);
    }
    /** @type {State} */ function completeAttributeValueQuoted(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return nok(code);
        if (code === marker) {
            effects.consume(code);
            return completeAttributeValueQuotedAfter;
        }
        effects.consume(code);
        return completeAttributeValueQuoted;
    }
    /** @type {State} */ function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) return completeAttributeNameAfter(code);
        effects.consume(code);
        return completeAttributeValueUnquoted;
    }
    /** @type {State} */ function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || (0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) return completeAttributeNameBefore(code);
        return nok(code);
    }
    /** @type {State} */ function completeEnd(code) {
        if (code === 62) {
            effects.consume(code);
            return completeAfter;
        }
        return nok(code);
    }
    /** @type {State} */ function completeAfter(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return completeAfter;
        }
        return code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code) ? continuation(code) : nok(code);
    }
    /** @type {State} */ function continuation(code) {
        if (code === 45 && kind === 2) {
            effects.consume(code);
            return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
            effects.consume(code);
            return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
            effects.consume(code);
            return continuationClose;
        }
        if (code === 63 && kind === 3) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
            effects.consume(code);
            return continuationCharacterDataInside;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code) && (kind === 6 || kind === 7)) return effects.check($d0d399add511d511$var$nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return continuationAtLineEnding(code);
        effects.consume(code);
        return continuation;
    }
    /** @type {State} */ function continuationAtLineEnding(code) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code);
    }
    /** @type {State} */ function htmlContinueStart(code) {
        if (code === null) return done(code);
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return effects.attempt({
            tokenize: htmlLineEnd,
            partial: true
        }, htmlContinueStart, done)(code);
        effects.enter("htmlFlowData");
        return continuation(code);
    }
    /** @type {Tokenizer} */ function htmlLineEnd(effects, ok, nok) {
        return start;
        /** @type {State} */ function start(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {State} */ function continuationCommentInside(code) {
        if (code === 45) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawTagOpen(code) {
        if (code === 47) {
            effects.consume(code);
            buffer = "";
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawEndTag(code) {
        if (code === 62 && (0, $278742f10417da06$export$948e66da505d080).includes(buffer.toLowerCase())) {
            effects.consume(code);
            return continuationClose;
        }
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code) && buffer.length < 8) {
            effects.consume(code);
            buffer += String.fromCharCode(code);
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationCharacterDataInside(code) {
        if (code === 93) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationDeclarationInside(code) {
        if (code === 62) {
            effects.consume(code);
            return continuationClose;
        } // More dashes.
        if (code === 45 && kind === 2) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationClose(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("htmlFlowData");
            return done(code);
        }
        effects.consume(code);
        return continuationClose;
    }
    /** @type {State} */ function done(code) {
        effects.exit("htmlFlow");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function $d0d399add511d511$var$tokenizeNextBlank(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt((0, $68b861ff9f9a6ffe$export$d50d28ce3ab2a612), ok, nok);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

const $a4322c42fc5bfa79$export$398af27f284914fe = {
    name: "htmlText",
    tokenize: $a4322c42fc5bfa79$var$tokenizeHtmlText
};
/** @type {Tokenizer} */ function $a4322c42fc5bfa79$var$tokenizeHtmlText(effects, ok, nok) {
    const self = this;
    /** @type {NonNullable<Code>|undefined} */ let marker;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {State} */ let returnState;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationOpen;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            return instruction;
        }
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            return tagOpen;
        }
        return nok(code);
    }
    /** @type {State} */ function declarationOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentOpen;
        }
        if (code === 91) {
            effects.consume(code);
            buffer = "CDATA[";
            index = 0;
            return cdataOpen;
        }
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            return declaration;
        }
        return nok(code);
    }
    /** @type {State} */ function commentOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentStart;
        }
        return nok(code);
    }
    /** @type {State} */ function commentStart(code) {
        if (code === null || code === 62) return nok(code);
        if (code === 45) {
            effects.consume(code);
            return commentStartDash;
        }
        return comment(code);
    }
    /** @type {State} */ function commentStartDash(code) {
        if (code === null || code === 62) return nok(code);
        return comment(code);
    }
    /** @type {State} */ function comment(code) {
        if (code === null) return nok(code);
        if (code === 45) {
            effects.consume(code);
            return commentClose;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = comment;
            return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
    }
    /** @type {State} */ function commentClose(code) {
        if (code === 45) {
            effects.consume(code);
            return end;
        }
        return comment(code);
    }
    /** @type {State} */ function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects.consume(code);
            return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
    }
    /** @type {State} */ function cdata(code) {
        if (code === null) return nok(code);
        if (code === 93) {
            effects.consume(code);
            return cdataClose;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = cdata;
            return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
    }
    /** @type {State} */ function cdataClose(code) {
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /** @type {State} */ function cdataEnd(code) {
        if (code === 62) return end(code);
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /** @type {State} */ function declaration(code) {
        if (code === null || code === 62) return end(code);
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = declaration;
            return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
    }
    /** @type {State} */ function instruction(code) {
        if (code === null) return nok(code);
        if (code === 63) {
            effects.consume(code);
            return instructionClose;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = instruction;
            return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
    }
    /** @type {State} */ function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
    }
    /** @type {State} */ function tagCloseStart(code) {
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            return tagClose;
        }
        return nok(code);
    }
    /** @type {State} */ function tagClose(code) {
        if (code === 45 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) {
            effects.consume(code);
            return tagClose;
        }
        return tagCloseBetween(code);
    }
    /** @type {State} */ function tagCloseBetween(code) {
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = tagCloseBetween;
            return atLineEnding(code);
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return tagCloseBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpen(code) {
        if (code === 45 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) {
            effects.consume(code);
            return tagOpen;
        }
        if (code === 47 || code === 62 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) return tagOpenBetween(code);
        return nok(code);
    }
    /** @type {State} */ function tagOpenBetween(code) {
        if (code === 47) {
            effects.consume(code);
            return end;
        }
        if (code === 58 || code === 95 || (0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = tagOpenBetween;
            return atLineEnding(code);
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return tagOpenBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
    }
    /** @type {State} */ function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = tagOpenAttributeNameAfter;
            return atLineEnding(code);
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
    }
    /** @type {State} */ function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return tagOpenAttributeValueQuoted;
        }
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = tagOpenAttributeValueBefore;
            return atLineEnding(code);
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = undefined;
        return tagOpenAttributeValueUnquoted;
    }
    /** @type {State} */ function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
            effects.consume(code);
            return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) return nok(code);
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            returnState = tagOpenAttributeValueQuoted;
            return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
    }
    /** @type {State} */ function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) return tagOpenBetween(code);
        return nok(code);
    }
    /** @type {State} */ function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) return nok(code);
        if (code === 62 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) return tagOpenBetween(code);
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
    } // We can’t have blank lines in content, so no need to worry about empty
    // tokens.
    /** @type {State} */ function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
    }
    /** @type {State} */ function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 62) {
            effects.consume(code);
            effects.exit("htmlTextData");
            effects.exit("htmlText");
            return ok;
        }
        return nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 







const $4ca27e6a0d375a47$export$470a5dafbbf62654 = {
    name: "labelEnd",
    tokenize: $4ca27e6a0d375a47$var$tokenizeLabelEnd,
    resolveTo: $4ca27e6a0d375a47$var$resolveToLabelEnd,
    resolveAll: $4ca27e6a0d375a47$var$resolveAllLabelEnd
};
/** @type {Construct} */ const $4ca27e6a0d375a47$var$resourceConstruct = {
    tokenize: $4ca27e6a0d375a47$var$tokenizeResource
};
/** @type {Construct} */ const $4ca27e6a0d375a47$var$fullReferenceConstruct = {
    tokenize: $4ca27e6a0d375a47$var$tokenizeFullReference
};
/** @type {Construct} */ const $4ca27e6a0d375a47$var$collapsedReferenceConstruct = {
    tokenize: $4ca27e6a0d375a47$var$tokenizeCollapsedReference
};
/** @type {Resolver} */ function $4ca27e6a0d375a47$var$resolveAllLabelEnd(events) {
    let index = -1;
    /** @type {Token} */ let token;
    while(++index < events.length){
        token = events[index][1];
        if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
            // Remove the marker.
            events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
            token.type = "data";
            index++;
        }
    }
    return events;
}
/** @type {Resolver} */ function $4ca27e6a0d375a47$var$resolveToLabelEnd(events, context) {
    let index = events.length;
    let offset = 0;
    /** @type {Token} */ let token;
    /** @type {number|undefined} */ let open;
    /** @type {number|undefined} */ let close;
    /** @type {Event[]} */ let media // Find an opening.
    ;
    while(index--){
        token = events[index][1];
        if (open) {
            // If we see another link, or inactive link label, we’ve been here before.
            if (token.type === "link" || token.type === "labelLink" && token._inactive) break;
             // Mark other link openings as inactive, as we can’t have links in
            // links.
            if (events[index][0] === "enter" && token.type === "labelLink") token._inactive = true;
        } else if (close) {
            if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
                open = index;
                if (token.type !== "labelLink") {
                    offset = 2;
                    break;
                }
            }
        } else if (token.type === "labelEnd") close = index;
    }
    const group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    };
    const label = {
        type: "label",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[close][1].end)
    };
    const text = {
        type: "labelText",
        start: Object.assign({}, events[open + offset + 2][1].end),
        end: Object.assign({}, events[close - 2][1].start)
    };
    media = [
        [
            "enter",
            group,
            context
        ],
        [
            "enter",
            label,
            context
        ]
    ] // Opening marker.
    ;
    media = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(media, events.slice(open + 1, open + offset + 3)) // Text open.
    ;
    media = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(media, [
        [
            "enter",
            text,
            context
        ]
    ]) // Between.
    ;
    media = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(media, (0, $2d1cd621ae059249$export$3ff61ec196ff408b)(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)) // Text close, marker close, label close.
    ;
    media = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(media, [
        [
            "exit",
            text,
            context
        ],
        events[close - 2],
        events[close - 1],
        [
            "exit",
            label,
            context
        ]
    ]) // Reference, resource, or so.
    ;
    media = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(media, events.slice(close + 1)) // Media close.
    ;
    media = (0, $e3740fd54cb8c53f$export$4cbf152802aa238)(media, [
        [
            "exit",
            group,
            context
        ]
    ]);
    (0, $e3740fd54cb8c53f$export$869882364835d202)(events, open, events.length, media);
    return events;
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeLabelEnd(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Token} */ let labelStart;
    /** @type {boolean} */ let defined // Find an opening.
    ;
    while(index--)if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
        labelStart = self.events[index][1];
        break;
    }
    return start;
    /** @type {State} */ function start(code) {
        if (!labelStart) return nok(code);
         // It’s a balanced bracket, but contains a link.
        if (labelStart._inactive) return balanced(code);
        defined = self.parser.defined.includes((0, $d172c91bf9d24083$export$806d55e226cfcd08)(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        })));
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
    }
    /** @type {State} */ function afterLabelEnd(code) {
        // Resource: `[asd](fgh)`.
        if (code === 40) return effects.attempt($4ca27e6a0d375a47$var$resourceConstruct, ok, defined ? ok : balanced)(code);
         // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
        if (code === 91) return effects.attempt($4ca27e6a0d375a47$var$fullReferenceConstruct, ok, defined ? effects.attempt($4ca27e6a0d375a47$var$collapsedReferenceConstruct, ok, balanced) : balanced)(code);
         // Shortcut reference: `[asd]`?
        return defined ? ok(code) : balanced(code);
    }
    /** @type {State} */ function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
    }
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeResource(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return (0, $20e7a21d90fe4811$export$1f27bd1aa33ce173)(effects, open);
    }
    /** @type {State} */ function open(code) {
        if (code === 41) return end(code);
        return (0, $a55811878a6d919b$export$2e6c8deaa96af245)(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
    }
    /** @type {State} */ function destinationAfter(code) {
        return (0, $2d97e78534b5d038$export$a30284361b3814b7)(code) ? (0, $20e7a21d90fe4811$export$1f27bd1aa33ce173)(effects, between)(code) : end(code);
    }
    /** @type {State} */ function between(code) {
        if (code === 34 || code === 39 || code === 40) return (0, $cb5c88803ba9609f$export$f970569cc855e483)(effects, (0, $20e7a21d90fe4811$export$1f27bd1aa33ce173)(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
        return end(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 41) {
            effects.enter("resourceMarker");
            effects.consume(code);
            effects.exit("resourceMarker");
            effects.exit("resource");
            return ok;
        }
        return nok(code);
    }
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeFullReference(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        return (0, $4536f5abd1e4f7fe$export$7b768614d8ba97a7).call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
    }
    /** @type {State} */ function afterLabel(code) {
        return self.parser.defined.includes((0, $d172c91bf9d24083$export$806d55e226cfcd08)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
    }
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeCollapsedReference(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 93) {
            effects.enter("referenceMarker");
            effects.consume(code);
            effects.exit("referenceMarker");
            effects.exit("reference");
            return ok;
        }
        return nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
const $be729fc38c3709d2$export$3d754936e25aa5f5 = {
    name: "labelStartImage",
    tokenize: $be729fc38c3709d2$var$tokenizeLabelStartImage,
    resolveAll: (0, $4ca27e6a0d375a47$export$470a5dafbbf62654).resolveAll
};
/** @type {Tokenizer} */ function $be729fc38c3709d2$var$tokenizeLabelStartImage(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 91) {
            effects.enter("labelMarker");
            effects.consume(code);
            effects.exit("labelMarker");
            effects.exit("labelImage");
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */ /* Hidden footnotes hook */ /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
const $6fd393c5d2eefd57$export$5c0cee0701a3b584 = {
    name: "labelStartLink",
    tokenize: $6fd393c5d2eefd57$var$tokenizeLabelStartLink,
    resolveAll: (0, $4ca27e6a0d375a47$export$470a5dafbbf62654).resolveAll
};
/** @type {Tokenizer} */ function $6fd393c5d2eefd57$var$tokenizeLabelStartLink(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
    }
    /** @type {State} */ function after(code) {
        /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */ /* Hidden footnotes hook. */ /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 

const $01ab3c7fab6a2888$export$8e62e0ad51c97b2 = {
    name: "lineEnding",
    tokenize: $01ab3c7fab6a2888$var$tokenizeLineEnding
};
/** @type {Tokenizer} */ function $01ab3c7fab6a2888$var$tokenizeLineEnding(effects, ok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, ok, "linePrefix");
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ /**
 * @typedef {Record<string, unknown> & {marker: Code, type: string, size: number}} ListContainerState
 * @typedef {TokenizeContext & {containerState: ListContainerState}} TokenizeContextWithState
 */ 


/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

const $f71f47bc904aa875$export$ba7b13e047416c03 = {
    name: "thematicBreak",
    tokenize: $f71f47bc904aa875$var$tokenizeThematicBreak
};
/** @type {Tokenizer} */ function $f71f47bc904aa875$var$tokenizeThematicBreak(effects, ok, nok) {
    let size = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
    }
    /** @type {State} */ function atBreak(code) {
        if (code === marker) {
            effects.enter("thematicBreakSequence");
            return sequence(code);
        }
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, atBreak, "whitespace")(code);
        if (size < 3 || code !== null && !(0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return nok(code);
        effects.exit("thematicBreak");
        return ok(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            size++;
            return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
    }
}


const $d2833e58c9c658a1$export$8837f4fc672e936d = {
    name: "list",
    tokenize: $d2833e58c9c658a1$var$tokenizeListStart,
    continuation: {
        tokenize: $d2833e58c9c658a1$var$tokenizeListContinuation
    },
    exit: $d2833e58c9c658a1$var$tokenizeListEnd
};
/** @type {Construct} */ const $d2833e58c9c658a1$var$listItemPrefixWhitespaceConstruct = {
    tokenize: $d2833e58c9c658a1$var$tokenizeListItemPrefixWhitespace,
    partial: true
};
/** @type {Construct} */ const $d2833e58c9c658a1$var$indentConstruct = {
    tokenize: $d2833e58c9c658a1$var$tokenizeIndent,
    partial: true
};
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function $d2833e58c9c658a1$var$tokenizeListStart(effects, ok, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : (0, $2d97e78534b5d038$export$ca8b5b1a6c320e6e)(code)) {
            if (!self.containerState.type) {
                self.containerState.type = kind;
                effects.enter(kind, {
                    _container: true
                });
            }
            if (kind === "listUnordered") {
                effects.enter("listItemPrefix");
                return code === 42 || code === 45 ? effects.check((0, $f71f47bc904aa875$export$ba7b13e047416c03), nok, atMarker)(code) : atMarker(code);
            }
            if (!self.interrupt || code === 49) {
                effects.enter("listItemPrefix");
                effects.enter("listItemValue");
                return inside(code);
            }
        }
        return nok(code);
    }
    /** @type {State} */ function inside(code) {
        if ((0, $2d97e78534b5d038$export$ca8b5b1a6c320e6e)(code) && ++size < 10) {
            effects.consume(code);
            return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
            effects.exit("listItemValue");
            return atMarker(code);
        }
        return nok(code);
    }
    /**
   * @type {State}
   **/ function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self.containerState.marker = self.containerState.marker || code;
        return effects.check((0, $68b861ff9f9a6ffe$export$d50d28ce3ab2a612), self.interrupt ? nok : onBlank, effects.attempt($d2833e58c9c658a1$var$listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
    }
    /** @type {State} */ function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
    }
    /** @type {State} */ function otherPrefix(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.enter("listItemPrefixWhitespace");
            effects.consume(code);
            effects.exit("listItemPrefixWhitespace");
            return endOfPrefix;
        }
        return nok(code);
    }
    /** @type {State} */ function endOfPrefix(code) {
        self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
        return ok(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function $d2833e58c9c658a1$var$tokenizeListContinuation(effects, ok, nok) {
    const self = this;
    self.containerState._closeFlow = undefined;
    return effects.check((0, $68b861ff9f9a6ffe$export$d50d28ce3ab2a612), onBlank, notBlank);
    /** @type {State} */ function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine // We have a blank line.
        ;
        // Still, try to consume at most the items size.
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
    }
    /** @type {State} */ function notBlank(code) {
        if (self.containerState.furtherBlankLines || !(0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            self.containerState.furtherBlankLines = undefined;
            self.containerState.initialBlankLine = undefined;
            return notInCurrentItem(code);
        }
        self.containerState.furtherBlankLines = undefined;
        self.containerState.initialBlankLine = undefined;
        return effects.attempt($d2833e58c9c658a1$var$indentConstruct, ok, notInCurrentItem)(code);
    }
    /** @type {State} */ function notInCurrentItem(code) {
        // While we do continue, we signal that the flow should be closed.
        self.containerState._closeFlow = true // As we’re closing flow, we’re no longer interrupting.
        ;
        self.interrupt = undefined;
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, effects.attempt($d2833e58c9c658a1$export$8837f4fc672e936d, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function $d2833e58c9c658a1$var$tokenizeIndent(effects, ok, nok) {
    const self = this;
    return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
    }
}
/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */ function $d2833e58c9c658a1$var$tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function $d2833e58c9c658a1$var$tokenizeListItemPrefixWhitespace(effects, ok, nok) {
    const self = this;
    return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 5);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return !(0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

const $6a0c7b3b406c4a5e$export$e104e2de391dfde9 = {
    name: "setextUnderline",
    tokenize: $6a0c7b3b406c4a5e$var$tokenizeSetextUnderline,
    resolveTo: $6a0c7b3b406c4a5e$var$resolveToSetextUnderline
};
/** @type {Resolver} */ function $6a0c7b3b406c4a5e$var$resolveToSetextUnderline(events, context) {
    let index = events.length;
    /** @type {number|undefined} */ let content;
    /** @type {number|undefined} */ let text;
    /** @type {number|undefined} */ let definition // Find the opening of the content.
    ;
    // It’ll always exist: we don’t tokenize if it isn’t there.
    while(index--)if (events[index][0] === "enter") {
        if (events[index][1].type === "content") {
            content = index;
            break;
        }
        if (events[index][1].type === "paragraph") text = index;
    } else {
        if (events[index][1].type === "content") // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
        if (!definition && events[index][1].type === "definition") definition = index;
    }
    const heading = {
        type: "setextHeading",
        start: Object.assign({}, events[text][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    } // Change the paragraph to setext heading text.
    ;
    events[text][1].type = "setextHeadingText" // If we have definitions in the content, we’ll keep on having content,
    ;
    // but we need move it.
    if (definition) {
        events.splice(text, 0, [
            "enter",
            heading,
            context
        ]);
        events.splice(definition + 1, 0, [
            "exit",
            events[content][1],
            context
        ]);
        events[content][1].end = Object.assign({}, events[definition][1].end);
    } else events[content][1] = heading;
     // Add the heading exit at the end.
    events.push([
        "exit",
        heading,
        context
    ]);
    return events;
}
/** @type {Tokenizer} */ function $6a0c7b3b406c4a5e$var$tokenizeSetextUnderline(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {NonNullable<Code>} */ let marker;
    /** @type {boolean} */ let paragraph // Find an opening.
    ;
    while(index--)// Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
        paragraph = self.events[index][1].type === "paragraph";
        break;
    }
    return start;
    /** @type {State} */ function start(code) {
        if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
            effects.enter("setextHeadingLine");
            effects.enter("setextHeadingLineSequence");
            marker = code;
            return closingSequence(code);
        }
        return nok(code);
    }
    /** @type {State} */ function closingSequence(code) {
        if (code === marker) {
            effects.consume(code);
            return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, closingSequenceEnd, "lineSuffix")(code);
    }
    /** @type {State} */ function closingSequenceEnd(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) {
            effects.exit("setextHeadingLine");
            return ok(code);
        }
        return nok(code);
    }
}



const $6d496cbd7e0550bc$export$5a7bfc01df82fcd1 = {
    [42]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [43]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [45]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [48]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [49]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [50]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [51]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [52]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [53]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [54]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [55]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [56]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [57]: (0, $d2833e58c9c658a1$export$8837f4fc672e936d),
    [62]: (0, $f20166fc2e09646a$export$200dcd0a5903c968)
};
const $6d496cbd7e0550bc$export$5a2181fb44b58173 = {
    [91]: (0, $8c9f7f00fff845d7$export$69f215ed977cdb73)
};
const $6d496cbd7e0550bc$export$cf8bead395eff824 = {
    [-2]: (0, $325a2048196bfedc$export$47910b7ab28d1853),
    [-1]: (0, $325a2048196bfedc$export$47910b7ab28d1853),
    [32]: (0, $325a2048196bfedc$export$47910b7ab28d1853)
};
const $6d496cbd7e0550bc$export$ccc7b0636abaffc3 = {
    [35]: (0, $43b35896caf66e80$export$3871e9deb360695c),
    [42]: (0, $f71f47bc904aa875$export$ba7b13e047416c03),
    [45]: [
        (0, $6a0c7b3b406c4a5e$export$e104e2de391dfde9),
        (0, $f71f47bc904aa875$export$ba7b13e047416c03)
    ],
    [60]: (0, $d0d399add511d511$export$476ac411cb7d0d8f),
    [61]: (0, $6a0c7b3b406c4a5e$export$e104e2de391dfde9),
    [95]: (0, $f71f47bc904aa875$export$ba7b13e047416c03),
    [96]: (0, $66f5470bc387380a$export$c23e4921f8d87e7c),
    [126]: (0, $66f5470bc387380a$export$c23e4921f8d87e7c)
};
const $6d496cbd7e0550bc$export$22b082955e083ec3 = {
    [38]: (0, $6047486b929e4c53$export$e31905600aaf3d8e),
    [92]: (0, $81781b60d5cd3cfc$export$2005478564e78d96)
};
const $6d496cbd7e0550bc$export$6f093cfa640b7166 = {
    [-5]: (0, $01ab3c7fab6a2888$export$8e62e0ad51c97b2),
    [-4]: (0, $01ab3c7fab6a2888$export$8e62e0ad51c97b2),
    [-3]: (0, $01ab3c7fab6a2888$export$8e62e0ad51c97b2),
    [33]: (0, $be729fc38c3709d2$export$3d754936e25aa5f5),
    [38]: (0, $6047486b929e4c53$export$e31905600aaf3d8e),
    [42]: (0, $4a83c38545e2870b$export$45b92471da762af7),
    [60]: [
        (0, $d65a4e456a4c0dfc$export$17ddf85e4c916ad6),
        (0, $a4322c42fc5bfa79$export$398af27f284914fe)
    ],
    [91]: (0, $6fd393c5d2eefd57$export$5c0cee0701a3b584),
    [92]: [
        (0, $3562f2aa4264913a$export$86c573ab9e06f418),
        (0, $81781b60d5cd3cfc$export$2005478564e78d96)
    ],
    [93]: (0, $4ca27e6a0d375a47$export$470a5dafbbf62654),
    [95]: (0, $4a83c38545e2870b$export$45b92471da762af7),
    [96]: (0, $8c581d5a6ffc76b5$export$d24f93e715f9df88)
};
const $6d496cbd7e0550bc$export$d44f260a3f9b69f5 = {
    null: [
        (0, $4a83c38545e2870b$export$45b92471da762af7),
        (0, $3b1483f8f85e6b8d$export$50397835cbfdbc24)
    ]
};
const $6d496cbd7e0550bc$export$b9c0b60d74426aea = {
    null: [
        42,
        95
    ]
};
const $6d496cbd7e0550bc$export$e20fbacbb41798b = {
    null: []
};


function $2c5ac88f01b7d626$export$98e6a39c04603d36(options = {}) {
    /** @type {FullNormalizedExtension} */ // @ts-expect-error `defaultConstructs` is full, so the result will be too.
    const constructs = (0, $467394f305db958c$export$86a865d89ef3c690)(// @ts-expect-error Same as above.
    [
        $6d496cbd7e0550bc$exports
    ].concat(options.extensions || []));
    /** @type {ParseContext} */ const parser = {
        defined: [],
        lazy: {},
        constructs: constructs,
        content: create((0, $7cca34f15ebbf281$export$a7db06668cad9adb)),
        document: create((0, $412deb289bc41196$export$5a7bfc01df82fcd1)),
        flow: create((0, $5753f3a56a579788$export$ccc7b0636abaffc3)),
        string: create((0, $3b1483f8f85e6b8d$export$22b082955e083ec3)),
        text: create((0, $3b1483f8f85e6b8d$export$6f093cfa640b7166))
    };
    return parser;
    /**
   * @param {InitialConstruct} initial
   */ function create(initial) {
        return creator;
        /** @type {Create} */ function creator(from) {
            return (0, $6e1090a00c9e7d03$export$ae34f10ee4b29837)(parser, initial, from);
        }
    }
}


/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 */ /**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Array<Chunk>}
 */ const $9708880929bb458c$var$search = /[\0\t\n\r]/g;
function $9708880929bb458c$export$fc37fe19dfda43ee() {
    let column = 1;
    let buffer = "";
    /** @type {boolean|undefined} */ let start = true;
    /** @type {boolean|undefined} */ let atCarriageReturn;
    return preprocessor;
    /** @type {Preprocessor} */ function preprocessor(value, encoding, end) {
        /** @type {Array<Chunk>} */ const chunks = [];
        /** @type {RegExpMatchArray|null} */ let match;
        /** @type {number} */ let next;
        /** @type {number} */ let startPosition;
        /** @type {number} */ let endPosition;
        /** @type {Code} */ let code // @ts-expect-error `Buffer` does allow an encoding.
        ;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
            if (value.charCodeAt(0) === 65279) startPosition++;
            start = undefined;
        }
        while(startPosition < value.length){
            $9708880929bb458c$var$search.lastIndex = startPosition;
            match = $9708880929bb458c$var$search.exec(value);
            endPosition = match && match.index !== undefined ? match.index : value.length;
            code = value.charCodeAt(endPosition);
            if (!match) {
                buffer = value.slice(startPosition);
                break;
            }
            if (code === 10 && startPosition === endPosition && atCarriageReturn) {
                chunks.push(-3);
                atCarriageReturn = undefined;
            } else {
                if (atCarriageReturn) {
                    chunks.push(-5);
                    atCarriageReturn = undefined;
                }
                if (startPosition < endPosition) {
                    chunks.push(value.slice(startPosition, endPosition));
                    column += endPosition - startPosition;
                }
                switch(code){
                    case 0:
                        chunks.push(65533);
                        column++;
                        break;
                    case 9:
                        next = Math.ceil(column / 4) * 4;
                        chunks.push(-2);
                        while(column++ < next)chunks.push(-1);
                        break;
                    case 10:
                        chunks.push(-4);
                        column = 1;
                        break;
                    default:
                        atCarriageReturn = true;
                        column = 1;
                }
            }
            startPosition = endPosition + 1;
        }
        if (end) {
            if (atCarriageReturn) chunks.push(-5);
            if (buffer) chunks.push(buffer);
            chunks.push(null);
        }
        return chunks;
    }
}


/**
 * @typedef {import('micromark-util-types').Event} Event
 */ 
function $68d522221dac8247$export$bd0e6e1378a871d7(events) {
    while(!(0, $1994b46ae75d2098$export$12949d1dd00fddf4)(events));
    return events;
}


/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 */ function $203e7bd706c7c7cd$export$15a69557afac2c20(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space
    code < 9 || code === 11 || code > 13 && code < 32 || // Control character (DEL) of the basic block and C1 controls.
    code > 126 && code < 160 || // Lone high surrogates and low surrogates.
    code > 55295 && code < 57344 || // Noncharacters.
    code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || // Out of range
    code > 1114111) return "�";
    return String.fromCharCode(code);
}




const $e436ffcb420c9948$var$characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function $e436ffcb420c9948$export$a0fb664af7d0cc44(value) {
    return value.replace($e436ffcb420c9948$var$characterEscapeOrReference, $e436ffcb420c9948$var$decode);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */ function $e436ffcb420c9948$var$decode($0, $1, $2) {
    if ($1) // Escape.
    return $1;
     // Reference.
    const head = $2.charCodeAt(0);
    if (head === 35) {
        const head = $2.charCodeAt(1);
        const hex = head === 120 || head === 88;
        return (0, $203e7bd706c7c7cd$export$15a69557afac2c20)($2.slice(hex ? 2 : 1), hex ? 16 : 10);
    }
    return (0, $e53a90acf7ece0f0$export$289b6a6320f709b4)($2) || $0;
}





const $ce27e53dc3fc691d$var$own = {}.hasOwnProperty;
const $ce27e53dc3fc691d$export$d744d789c09bfde6 = /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   */ /**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */ function(value, encoding, options) {
    if (typeof encoding !== "string") {
        options = encoding;
        encoding = undefined;
    }
    return $ce27e53dc3fc691d$var$compiler(options)((0, $68d522221dac8247$export$bd0e6e1378a871d7)(// @ts-expect-error: micromark types need to accept `null`.
    (0, $2c5ac88f01b7d626$export$98e6a39c04603d36)(options).document().write((0, $9708880929bb458c$export$fc37fe19dfda43ee)()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */ function $ce27e53dc3fc691d$var$compiler(options) {
    /** @type {Config} */ const config = {
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    };
    $ce27e53dc3fc691d$var$configure(config, (options || {}).mdastExtensions || []);
    /** @type {CompileData} */ const data = {};
    return compile;
    /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: "root",
            children: []
        };
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack: [
                tree
            ],
            tokenStack: [],
            config: config,
            enter: enter,
            exit: exit,
            buffer: buffer,
            resume: resume,
            setData: setData,
            getData: getData
        };
        /** @type {Array<number>} */ const listStack = [];
        let index = -1;
        while(++index < events.length)// We preprocess lists to add `listItem` tokens, and to infer whether
        // items the list itself are spread out.
        if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
            if (events[index][0] === "enter") listStack.push(index);
            else {
                const tail = listStack.pop();
                index = prepareList(events, tail, index);
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if ($ce27e53dc3fc691d$var$own.call(handler, events[index][1].type)) handler[events[index][1].type].call(Object.assign({
                sliceSerialize: events[index][2].sliceSerialize
            }, context), events[index][1]);
        }
        // Handle tokens still being open.
        if (context.tokenStack.length > 0) {
            const tail = context.tokenStack[context.tokenStack.length - 1];
            const handler = tail[1] || $ce27e53dc3fc691d$var$defaultOnError;
            handler.call(context, undefined, tail[0]);
        }
        // Figure out `root` position.
        tree.position = {
            start: $ce27e53dc3fc691d$var$point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: $ce27e53dc3fc691d$var$point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        // Call transforms.
        index = -1;
        while(++index < config.transforms.length)tree = config.transforms[index](tree) || tree;
        return tree;
    }
    /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token | undefined} */ let listItem;
        /** @type {number | undefined} */ let lineIndex;
        /** @type {number | undefined} */ let firstBlankLineIndex;
        /** @type {boolean | undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
                if (event[0] === "enter") containerBalance++;
                else containerBalance--;
                atMarker = undefined;
            } else if (event[1].type === "lineEndingBlank") {
                if (event[0] === "enter") {
                    if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) firstBlankLineIndex = index;
                    atMarker = undefined;
                }
            } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") ;
            else atMarker = undefined;
            if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                            if (tailEvent[0] === "exit") continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = "lineEndingBlank";
                                listSpread = true;
                            }
                            tailEvent[1].type = "lineEnding";
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") ;
                        else break;
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) // @ts-expect-error Patched.
                    listItem._spread = true;
                    // Fix position.
                    listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        "exit",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                }
                // Create a new list item.
                if (event[1].type === "listItemPrefix") {
                    listItem = {
                        type: "listItem",
                        // @ts-expect-error Patched
                        _spread: false,
                        start: Object.assign({}, event[1].start)
                    };
                    // @ts-expect-error: `listItem` is most definitely defined, TS...
                    events.splice(index, 0, [
                        "enter",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        }
        // @ts-expect-error Patched.
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * Set data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @param {CompileData[Key]} [value]
   *   New value.
   * @returns {void}
   *   Nothing.
   */ function setData(key, value) {
        data[key] = value;
    }
    /**
   * Get data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @returns {CompileData[Key]}
   *   Value.
   */ function getData(key) {
        return data[key];
    }
    /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Node} create
   *   Create a node.
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function opener(create, and) {
        return open;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   * @returns {void}
   */ function buffer() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    /**
   * @template {Node} Kind
   *   Node type.
   * @this {CompileContext}
   *   Context.
   * @param {Kind} node
   *   Node to enter.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnEnterError | undefined} [errorHandler]
   *   Handle the case where this token is open, but it is closed by something else.
   * @returns {Kind}
   *   The given node.
   */ function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
        parent.children.push(node);
        this.stack.push(node);
        this.tokenStack.push([
            token,
            errorHandler
        ]);
        // @ts-expect-error: `end` will be patched later.
        node.position = {
            start: $ce27e53dc3fc691d$var$point(token.start)
        };
        return node;
    }
    /**
   * Create a closer handle.
   *
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function closer(and) {
        return close;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function close(token) {
            if (and) and.call(this, token);
            exit.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   *   Context.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnExitError | undefined} [onExitError]
   *   Handle the case where another token is open.
   * @returns {Node}
   *   The closed node.
   */ function exit(token, onExitError) {
        const node = this.stack.pop();
        const open = this.tokenStack.pop();
        if (!open) throw new Error("Cannot close `" + token.type + "` (" + (0, $a845353558418eb1$export$c304dd45fe166145)({
            start: token.start,
            end: token.end
        }) + "): it’s not open");
        else if (open[0].type !== token.type) {
            if (onExitError) onExitError.call(this, token, open[0]);
            else {
                const handler = open[1] || $ce27e53dc3fc691d$var$defaultOnError;
                handler.call(this, token, open[0]);
            }
        }
        node.position.end = $ce27e53dc3fc691d$var$point(token.end);
        return node;
    }
    /**
   * @this {CompileContext}
   * @returns {string}
   */ function resume() {
        return (0, $bfcd2ed5526988b5$export$f84e8e69fd4488a5)(this.stack.pop());
    }
    //
    // Handlers.
    //
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
            const ancestor = this.stack[this.stack.length - 2];
            ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
            setData("expectingFirstListItemValue");
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.lang = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.meta = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (getData("flowCodeInside")) return;
        this.buffer();
        setData("flowCodeInside", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefenced() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        setData("flowCodeInside");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodeindented() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data.replace(/(\r?\n|\r)$/g, "");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitionlabelstring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.label = label;
        node.identifier = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(this.sliceSerialize(token)).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitatxheadingsequence(token) {
        const node = this.stack[this.stack.length - 1];
        if (!node.depth) {
            const depth = this.sliceSerialize(token).length;
            node.depth = depth;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadinglinesequence(token) {
        const node = this.stack[this.stack.length - 1];
        node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterdata(token) {
        const node = this.stack[this.stack.length - 1];
        let tail = node.children[node.children.length - 1];
        if (!tail || tail.type !== "text") {
            // Add a new text node.
            tail = text();
            // @ts-expect-error: we’ll add `end` later.
            tail.position = {
                start: $ce27e53dc3fc691d$var$point(token.start)
            };
            // @ts-expect-error: Assume `parent` accepts `text`.
            node.children.push(tail);
        }
        this.stack.push(tail);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdata(token) {
        const tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = $ce27e53dc3fc691d$var$point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        // If we’re at a hard break, include the line ending in there.
        if (getData("atHardBreak")) {
            const tail = context.children[context.children.length - 1];
            tail.position.end = $ce27e53dc3fc691d$var$point(token.end);
            setData("atHardBreak");
            return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithardbreak() {
        setData("atHardBreak", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmlflow() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmltext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodetext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlink() {
        const node = this.stack[this.stack.length - 1];
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (getData("inReference")) {
            /** @type {ReferenceType} */ const referenceType = getData("referenceType") || "shortcut";
            node.type += "Reference";
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        setData("referenceType");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitimage() {
        const node = this.stack[this.stack.length - 1];
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (getData("inReference")) {
            /** @type {ReferenceType} */ const referenceType = getData("referenceType") || "shortcut";
            node.type += "Reference";
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        setData("referenceType");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabeltext(token) {
        const string = this.sliceSerialize(token);
        const ancestor = this.stack[this.stack.length - 2];
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        ancestor.label = (0, $e436ffcb420c9948$export$a0fb664af7d0cc44)(string);
        // @ts-expect-error: same as above.
        ancestor.identifier = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(string).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabel() {
        const fragment = this.stack[this.stack.length - 1];
        const value = this.resume();
        const node = this.stack[this.stack.length - 1];
        // Assume a reference.
        setData("inReference", true);
        if (node.type === "link") {
            /** @type {Array<StaticPhrasingContent>} */ // @ts-expect-error: Assume static phrasing content.
            const children = fragment.children;
            node.children = children;
        } else node.alt = value;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcetitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresource() {
        setData("inReference");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterreference() {
        setData("referenceType", "collapsed");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitreferencestring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        node.label = label;
        // @ts-expect-error: same as above.
        node.identifier = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(this.sliceSerialize(token)).toLowerCase();
        setData("referenceType", "full");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = getData("characterReferenceType");
        /** @type {string} */ let value;
        if (type) {
            value = (0, $203e7bd706c7c7cd$export$15a69557afac2c20)(data, type === "characterReferenceMarkerNumeric" ? 10 : 16);
            setData("characterReferenceType");
        } else {
            const result = (0, $e53a90acf7ece0f0$export$289b6a6320f709b4)(data);
            value = result;
        }
        const tail = this.stack.pop();
        tail.value += value;
        tail.position.end = $ce27e53dc3fc691d$var$point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        node.url = this.sliceSerialize(token);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        node.url = "mailto:" + this.sliceSerialize(token);
    }
    //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: "blockquote",
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: "emphasis",
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        // @ts-expect-error `depth` will be set later.
        return {
            type: "heading",
            depth: undefined,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: "break"
        };
    }
    /** @returns {HTML} */ function html() {
        return {
            type: "html",
            value: ""
        };
    }
    /** @returns {Image} */ function image() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: "list",
            ordered: token.type === "listOrdered",
            start: null,
            // @ts-expect-error Patched.
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem(token) {
        return {
            type: "listItem",
            // @ts-expect-error Patched.
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: "paragraph",
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: "strong",
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: "text",
            value: ""
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: "thematicBreak"
        };
    }
}
/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */ function $ce27e53dc3fc691d$var$point(d) {
    return {
        line: d.line,
        column: d.column,
        offset: d.offset
    };
}
/**
 * @param {Config} combined
 * @param {Array<Extension | Array<Extension>>} extensions
 * @returns {void}
 */ function $ce27e53dc3fc691d$var$configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) $ce27e53dc3fc691d$var$configure(combined, value);
        else $ce27e53dc3fc691d$var$extension(combined, value);
    }
}
/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {void}
 */ function $ce27e53dc3fc691d$var$extension(combined, extension) {
    /** @type {keyof Extension} */ let key;
    for(key in extension)if ($ce27e53dc3fc691d$var$own.call(extension, key)) {
        if (key === "canContainEols") {
            const right = extension[key];
            if (right) combined[key].push(...right);
        } else if (key === "transforms") {
            const right = extension[key];
            if (right) combined[key].push(...right);
        } else if (key === "enter" || key === "exit") {
            const right = extension[key];
            if (right) Object.assign(combined[key], right);
        }
    }
}
/** @type {OnEnterError} */ function $ce27e53dc3fc691d$var$defaultOnError(left, right) {
    if (left) throw new Error("Cannot close `" + left.type + "` (" + (0, $a845353558418eb1$export$c304dd45fe166145)({
        start: left.start,
        end: left.end
    }) + "): a different token (`" + right.type + "`, " + (0, $a845353558418eb1$export$c304dd45fe166145)({
        start: right.start,
        end: right.end
    }) + ") is open");
    else throw new Error("Cannot close document, a token (`" + right.type + "`, " + (0, $a845353558418eb1$export$c304dd45fe166145)({
        start: right.start,
        end: right.end
    }) + ") is still open");
}


function $2cde2f9981a42b5c$export$2e2bcd8739ae039(options) {
    /** @type {import('unified').ParserFunction<Root>} */ const parser = (doc)=>{
        // Assume options.
        const settings = /** @type {Options} */ this.data("settings");
        return (0, $ce27e53dc3fc691d$export$d744d789c09bfde6)(doc, Object.assign({}, settings, options, {
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: this.data("micromarkExtensions") || [],
            mdastExtensions: this.data("fromMarkdownExtensions") || []
        }));
    };
    Object.assign(this, {
        Parser: parser
    });
}


var $998d99a10a985a7f$export$2e2bcd8739ae039 = (0, $2cde2f9981a42b5c$export$2e2bcd8739ae039);


/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('micromark-extension-gfm').Options & import('mdast-util-gfm').Options} Options
 */ /**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options
 * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions
 */ 
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 */ 
const $f666adda49be15dd$var$www = {
    tokenize: $f666adda49be15dd$var$tokenizeWww,
    partial: true
};
const $f666adda49be15dd$var$domain = {
    tokenize: $f666adda49be15dd$var$tokenizeDomain,
    partial: true
};
const $f666adda49be15dd$var$path = {
    tokenize: $f666adda49be15dd$var$tokenizePath,
    partial: true
};
const $f666adda49be15dd$var$punctuation = {
    tokenize: $f666adda49be15dd$var$tokenizePunctuation,
    partial: true
};
const $f666adda49be15dd$var$namedCharacterReference = {
    tokenize: $f666adda49be15dd$var$tokenizeNamedCharacterReference,
    partial: true
};
const $f666adda49be15dd$var$wwwAutolink = {
    tokenize: $f666adda49be15dd$var$tokenizeWwwAutolink,
    previous: $f666adda49be15dd$var$previousWww
};
const $f666adda49be15dd$var$httpAutolink = {
    tokenize: $f666adda49be15dd$var$tokenizeHttpAutolink,
    previous: $f666adda49be15dd$var$previousHttp
};
const $f666adda49be15dd$var$emailAutolink = {
    tokenize: $f666adda49be15dd$var$tokenizeEmailAutolink,
    previous: $f666adda49be15dd$var$previousEmail
};
/** @type {ConstructRecord} */ const $f666adda49be15dd$var$text = {};
const $f666adda49be15dd$export$608123d9b549151 = {
    text: $f666adda49be15dd$var$text
};
let $f666adda49be15dd$var$code = 48 // Add alphanumerics.
;
while($f666adda49be15dd$var$code < 123){
    $f666adda49be15dd$var$text[$f666adda49be15dd$var$code] = $f666adda49be15dd$var$emailAutolink;
    $f666adda49be15dd$var$code++;
    if ($f666adda49be15dd$var$code === 58) $f666adda49be15dd$var$code = 65;
    else if ($f666adda49be15dd$var$code === 91) $f666adda49be15dd$var$code = 97;
}
$f666adda49be15dd$var$text[43] = $f666adda49be15dd$var$emailAutolink;
$f666adda49be15dd$var$text[45] = $f666adda49be15dd$var$emailAutolink;
$f666adda49be15dd$var$text[46] = $f666adda49be15dd$var$emailAutolink;
$f666adda49be15dd$var$text[95] = $f666adda49be15dd$var$emailAutolink;
$f666adda49be15dd$var$text[72] = [
    $f666adda49be15dd$var$emailAutolink,
    $f666adda49be15dd$var$httpAutolink
];
$f666adda49be15dd$var$text[104] = [
    $f666adda49be15dd$var$emailAutolink,
    $f666adda49be15dd$var$httpAutolink
];
$f666adda49be15dd$var$text[87] = [
    $f666adda49be15dd$var$emailAutolink,
    $f666adda49be15dd$var$wwwAutolink
];
$f666adda49be15dd$var$text[119] = [
    $f666adda49be15dd$var$emailAutolink,
    $f666adda49be15dd$var$wwwAutolink
];
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeEmailAutolink(effects, ok, nok) {
    const self = this;
    /** @type {boolean} */ let hasDot;
    /** @type {boolean|undefined} */ let hasDigitInLastSegment;
    return start;
    /** @type {State} */ function start(code) {
        if (!$f666adda49be15dd$var$gfmAtext(code) || !$f666adda49be15dd$var$previousEmail(self.previous) || $f666adda49be15dd$var$previousUnbalanced(self.events)) return nok(code);
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkEmail");
        return atext(code);
    }
    /** @type {State} */ function atext(code) {
        if ($f666adda49be15dd$var$gfmAtext(code)) {
            effects.consume(code);
            return atext;
        }
        if (code === 64) {
            effects.consume(code);
            return label;
        }
        return nok(code);
    }
    /** @type {State} */ function label(code) {
        if (code === 46) return effects.check($f666adda49be15dd$var$punctuation, done, dotContinuation)(code);
        if (code === 45 || code === 95) return effects.check($f666adda49be15dd$var$punctuation, nok, dashOrUnderscoreContinuation)(code);
        if ((0, $2d97e78534b5d038$export$75c76db11865a9f4)(code)) {
            if (!hasDigitInLastSegment && (0, $2d97e78534b5d038$export$ca8b5b1a6c320e6e)(code)) hasDigitInLastSegment = true;
            effects.consume(code);
            return label;
        }
        return done(code);
    }
    /** @type {State} */ function dotContinuation(code) {
        effects.consume(code);
        hasDot = true;
        hasDigitInLastSegment = undefined;
        return label;
    }
    /** @type {State} */ function dashOrUnderscoreContinuation(code) {
        effects.consume(code);
        return afterDashOrUnderscore;
    }
    /** @type {State} */ function afterDashOrUnderscore(code) {
        if (code === 46) return effects.check($f666adda49be15dd$var$punctuation, nok, dotContinuation)(code);
        return label(code);
    }
    /** @type {State} */ function done(code) {
        if (hasDot && !hasDigitInLastSegment) {
            effects.exit("literalAutolinkEmail");
            effects.exit("literalAutolink");
            return ok(code);
        }
        return nok(code);
    }
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeWwwAutolink(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        if (code !== 87 && code !== 119 || !$f666adda49be15dd$var$previousWww(self.previous) || $f666adda49be15dd$var$previousUnbalanced(self.events)) return nok(code);
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkWww") // For `www.` we check instead of attempt, because when it matches, GH
        ;
        // treats it as part of a domain (yes, it says a valid domain must come
        // after `www.`, but that’s not how it’s implemented by them).
        return effects.check($f666adda49be15dd$var$www, effects.attempt($f666adda49be15dd$var$domain, effects.attempt($f666adda49be15dd$var$path, done), nok), nok)(code);
    }
    /** @type {State} */ function done(code) {
        effects.exit("literalAutolinkWww");
        effects.exit("literalAutolink");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeHttpAutolink(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        if (code !== 72 && code !== 104 || !$f666adda49be15dd$var$previousHttp(self.previous) || $f666adda49be15dd$var$previousUnbalanced(self.events)) return nok(code);
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkHttp");
        effects.consume(code);
        return t1;
    }
    /** @type {State} */ function t1(code) {
        if (code === 84 || code === 116) {
            effects.consume(code);
            return t2;
        }
        return nok(code);
    }
    /** @type {State} */ function t2(code) {
        if (code === 84 || code === 116) {
            effects.consume(code);
            return p;
        }
        return nok(code);
    }
    /** @type {State} */ function p(code) {
        if (code === 80 || code === 112) {
            effects.consume(code);
            return s;
        }
        return nok(code);
    }
    /** @type {State} */ function s(code) {
        if (code === 83 || code === 115) {
            effects.consume(code);
            return colon;
        }
        return colon(code);
    }
    /** @type {State} */ function colon(code) {
        if (code === 58) {
            effects.consume(code);
            return slash1;
        }
        return nok(code);
    }
    /** @type {State} */ function slash1(code) {
        if (code === 47) {
            effects.consume(code);
            return slash2;
        }
        return nok(code);
    }
    /** @type {State} */ function slash2(code) {
        if (code === 47) {
            effects.consume(code);
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        return code === null || (0, $2d97e78534b5d038$export$67dbf494fc8394df)(code) || (0, $2d97e78534b5d038$export$a0ff789c034ffdf4)(code) || (0, $2d97e78534b5d038$export$aa04114dd888a7a0)(code) ? nok(code) : effects.attempt($f666adda49be15dd$var$domain, effects.attempt($f666adda49be15dd$var$path, done), nok)(code);
    }
    /** @type {State} */ function done(code) {
        effects.exit("literalAutolinkHttp");
        effects.exit("literalAutolink");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeWww(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.consume(code);
        return w2;
    }
    /** @type {State} */ function w2(code) {
        if (code === 87 || code === 119) {
            effects.consume(code);
            return w3;
        }
        return nok(code);
    }
    /** @type {State} */ function w3(code) {
        if (code === 87 || code === 119) {
            effects.consume(code);
            return dot;
        }
        return nok(code);
    }
    /** @type {State} */ function dot(code) {
        if (code === 46) {
            effects.consume(code);
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        return code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code) ? nok(code) : ok(code);
    }
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeDomain(effects, ok, nok) {
    /** @type {boolean|undefined} */ let hasUnderscoreInLastSegment;
    /** @type {boolean|undefined} */ let hasUnderscoreInLastLastSegment;
    return domain;
    /** @type {State} */ function domain(code) {
        if (code === 38) return effects.check($f666adda49be15dd$var$namedCharacterReference, done, punctuationContinuation)(code);
        if (code === 46 || code === 95) return effects.check($f666adda49be15dd$var$punctuation, done, punctuationContinuation)(code);
         // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
        // occur, which sounds like ASCII only, but they also support `www.點看.com`,
        // so that’s Unicode.
        // Instead of some new production for Unicode alphanumerics, markdown
        // already has that for Unicode punctuation and whitespace, so use those.
        if (code === null || (0, $2d97e78534b5d038$export$67dbf494fc8394df)(code) || (0, $2d97e78534b5d038$export$a0ff789c034ffdf4)(code) || code !== 45 && (0, $2d97e78534b5d038$export$aa04114dd888a7a0)(code)) return done(code);
        effects.consume(code);
        return domain;
    }
    /** @type {State} */ function punctuationContinuation(code) {
        if (code === 46) {
            hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
            hasUnderscoreInLastSegment = undefined;
            effects.consume(code);
            return domain;
        }
        if (code === 95) hasUnderscoreInLastSegment = true;
        effects.consume(code);
        return domain;
    }
    /** @type {State} */ function done(code) {
        if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) return ok(code);
        return nok(code);
    }
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizePath(effects, ok) {
    let balance = 0;
    return inPath;
    /** @type {State} */ function inPath(code) {
        if (code === 38) return effects.check($f666adda49be15dd$var$namedCharacterReference, ok, continuedPunctuation)(code);
        if (code === 40) balance++;
        if (code === 41) return effects.check($f666adda49be15dd$var$punctuation, parenAtPathEnd, continuedPunctuation)(code);
        if ($f666adda49be15dd$var$pathEnd(code)) return ok(code);
        if ($f666adda49be15dd$var$trailingPunctuation(code)) return effects.check($f666adda49be15dd$var$punctuation, ok, continuedPunctuation)(code);
        effects.consume(code);
        return inPath;
    }
    /** @type {State} */ function continuedPunctuation(code) {
        effects.consume(code);
        return inPath;
    }
    /** @type {State} */ function parenAtPathEnd(code) {
        balance--;
        return balance < 0 ? ok(code) : continuedPunctuation(code);
    }
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeNamedCharacterReference(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.consume(code);
        return inside;
    }
    /** @type {State} */ function inside(code) {
        if ((0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code)) {
            effects.consume(code);
            return inside;
        }
        if (code === 59) {
            effects.consume(code);
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        // If the named character reference is followed by the end of the path, it’s
        // not continued punctuation.
        return $f666adda49be15dd$var$pathEnd(code) ? ok(code) : nok(code);
    }
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizePunctuation(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.consume(code);
        return after;
    }
    /** @type {State} */ function after(code) {
        // Check the next.
        if ($f666adda49be15dd$var$trailingPunctuation(code)) {
            effects.consume(code);
            return after;
        } // If the punctuation marker is followed by the end of the path, it’s not
        // continued punctuation.
        return $f666adda49be15dd$var$pathEnd(code) ? ok(code) : nok(code);
    }
}
/**
 * @param {Code} code
 * @returns {boolean}
 */ function $f666adda49be15dd$var$trailingPunctuation(code) {
    return code === 33 || code === 34 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 60 || code === 63 || code === 95 || code === 126;
}
/**
 * @param {Code} code
 * @returns {boolean}
 */ function $f666adda49be15dd$var$pathEnd(code) {
    return code === null || code === 60 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code);
}
/**
 * @param {Code} code
 * @returns {boolean}
 */ function $f666adda49be15dd$var$gfmAtext(code) {
    return code === 43 || code === 45 || code === 46 || code === 95 || (0, $2d97e78534b5d038$export$75c76db11865a9f4)(code);
}
/** @type {Previous} */ function $f666adda49be15dd$var$previousWww(code) {
    return code === null || code === 40 || code === 42 || code === 95 || code === 126 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code);
}
/** @type {Previous} */ function $f666adda49be15dd$var$previousHttp(code) {
    return code === null || !(0, $2d97e78534b5d038$export$d65d6b62c24d5436)(code);
}
/** @type {Previous} */ function $f666adda49be15dd$var$previousEmail(code) {
    return code !== 47 && $f666adda49be15dd$var$previousHttp(code);
}
/**
 * @param {Array<Event>} events
 * @returns {boolean}
 */ function $f666adda49be15dd$var$previousUnbalanced(events) {
    let index = events.length;
    let result = false;
    while(index--){
        const token = events[index][1];
        if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
            result = true;
            break;
        } // @ts-expect-error If we’ve seen this token, and it was marked as not
        // having any unbalanced bracket before it, we can exit.
        if (token._gfmAutolinkLiteralWalkedInto) {
            result = false;
            break;
        }
    }
    if (events.length > 0 && !result) // @ts-expect-error Mark the last token as “walked into” w/o finding
    // anything.
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
    return result;
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').Handle} Handle
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 * @typedef {import('micromark-util-types').Token} Token
 */ 
const $5d499cda99296975$var$characterReferences = {
    '"': "quot",
    "&": "amp",
    "<": "lt",
    ">": "gt"
};
function $5d499cda99296975$export$c564cdbbe6da493(value) {
    return value.replace(/["&<>]/g, replace);
    /**
   * @param {string} value
   * @returns {string}
   */ function replace(value) {
        // @ts-expect-error Hush, it’s fine.
        return "&" + $5d499cda99296975$var$characterReferences[value] + ";";
    }
}


function $9d5c31a0dffab546$export$d130a2d684099e5a(url, protocol) {
    const value = (0, $5d499cda99296975$export$c564cdbbe6da493)($9d5c31a0dffab546$export$e42a3e39590d28b5(url || ""));
    if (!protocol) return value;
    const colon = value.indexOf(":");
    const questionMark = value.indexOf("?");
    const numberSign = value.indexOf("#");
    const slash = value.indexOf("/");
    if (// If there is no protocol, it’s relative.
    colon < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.
    protocol.test(value.slice(0, colon))) return value;
    return "";
}
function $9d5c31a0dffab546$export$e42a3e39590d28b5(value) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    let start = 0;
    let skip = 0;
    while(++index < value.length){
        const code = value.charCodeAt(index);
        /** @type {string} */ let replace = "" // A correct percent encoded value.
        ;
        if (code === 37 && (0, $2d97e78534b5d038$export$75c76db11865a9f4)(value.charCodeAt(index + 1)) && (0, $2d97e78534b5d038$export$75c76db11865a9f4)(value.charCodeAt(index + 2))) skip = 2;
        else if (code < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) replace = String.fromCharCode(code);
        } else if (code > 55295 && code < 57344) {
            const next = value.charCodeAt(index + 1) // A correct surrogate pair.
            ;
            if (code < 56320 && next > 56319 && next < 57344) {
                replace = String.fromCharCode(code, next);
                skip = 1;
            } else replace = "�";
        } else replace = String.fromCharCode(code);
        if (replace) {
            result.push(value.slice(start, index), encodeURIComponent(replace));
            start = index + skip + 1;
            replace = "";
        }
        if (skip) {
            index += skip;
            skip = 0;
        }
    }
    return result.join("") + value.slice(start);
}


const $06aaccb80082790c$export$999603f1f1c3d2f9 = {
    exit: {
        literalAutolinkEmail: $06aaccb80082790c$var$literalAutolinkEmail,
        literalAutolinkHttp: $06aaccb80082790c$var$literalAutolinkHttp,
        literalAutolinkWww: $06aaccb80082790c$var$literalAutolinkWww
    }
};
/** @type {Handle} */ function $06aaccb80082790c$var$literalAutolinkWww(token) {
    $06aaccb80082790c$var$anchorFromToken.call(this, token, "http://");
}
/** @type {Handle} */ function $06aaccb80082790c$var$literalAutolinkEmail(token) {
    $06aaccb80082790c$var$anchorFromToken.call(this, token, "mailto:");
}
/** @type {Handle} */ function $06aaccb80082790c$var$literalAutolinkHttp(token) {
    $06aaccb80082790c$var$anchorFromToken.call(this, token);
}
/**
 * @this CompileContext
 * @param {Token} token
 * @param {string} [protocol]
 * @returns {void}
 */ function $06aaccb80082790c$var$anchorFromToken(token, protocol) {
    const url = this.sliceSerialize(token);
    this.tag('<a href="' + (0, $9d5c31a0dffab546$export$d130a2d684099e5a)((protocol || "") + url) + '">');
    this.raw(this.encode(url));
    this.tag("</a>");
}


/**
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 



const $0a2fb9bb40749611$var$indent = {
    tokenize: $0a2fb9bb40749611$var$tokenizeIndent,
    partial: true
};
function $0a2fb9bb40749611$export$c82499b6656305df() {
    /** @type {Extension} */ return {
        document: {
            [91]: {
                tokenize: $0a2fb9bb40749611$var$tokenizeDefinitionStart,
                continuation: {
                    tokenize: $0a2fb9bb40749611$var$tokenizeDefinitionContinuation
                },
                exit: $0a2fb9bb40749611$var$gfmFootnoteDefinitionEnd
            }
        },
        text: {
            [91]: {
                tokenize: $0a2fb9bb40749611$var$tokenizeGfmFootnoteCall
            },
            [93]: {
                add: "after",
                tokenize: $0a2fb9bb40749611$var$tokenizePotentialGfmFootnoteCall,
                resolveTo: $0a2fb9bb40749611$var$resolveToPotentialGfmFootnoteCall
            }
        }
    };
}
// To do: remove after micromark update.
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $0a2fb9bb40749611$var$tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Array<string>} */ // @ts-expect-error It’s fine!
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    /** @type {Token} */ let labelStart;
    // Find an opening.
    while(index--){
        const token = self.events[index][1];
        if (token.type === "labelImage") {
            labelStart = token;
            break;
        }
        // Exit if we’ve walked far enough.
        if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") break;
    }
    return start;
    /**
   * @type {State}
   */ function start(code) {
        if (!labelStart || !labelStart._balanced) return nok(code);
        const id = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        }));
        if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) return nok(code);
        effects.enter("gfmFootnoteCallLabelMarker");
        effects.consume(code);
        effects.exit("gfmFootnoteCallLabelMarker");
        return ok(code);
    }
}
// To do: remove after micromark update.
/** @type {Resolver} */ function $0a2fb9bb40749611$var$resolveToPotentialGfmFootnoteCall(events, context) {
    let index = events.length;
    /** @type {Token | undefined} */ let labelStart;
    // Find an opening.
    while(index--)if (events[index][1].type === "labelImage" && events[index][0] === "enter") {
        labelStart = events[index][1];
        break;
    }
    // Change the `labelImageMarker` to a `data`.
    events[index + 1][1].type = "data";
    events[index + 3][1].type = "gfmFootnoteCallLabelMarker";
    // The whole (without `!`):
    const call = {
        type: "gfmFootnoteCall",
        start: Object.assign({}, events[index + 3][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    };
    // The `^` marker
    const marker = {
        type: "gfmFootnoteCallMarker",
        start: Object.assign({}, events[index + 3][1].end),
        end: Object.assign({}, events[index + 3][1].end)
    };
    // Increment the end 1 character.
    marker.end.column++;
    marker.end.offset++;
    marker.end._bufferIndex++;
    const string = {
        type: "gfmFootnoteCallString",
        start: Object.assign({}, marker.end),
        end: Object.assign({}, events[events.length - 1][1].start)
    };
    const chunk = {
        type: "chunkString",
        contentType: "string",
        start: Object.assign({}, string.start),
        end: Object.assign({}, string.end)
    };
    /** @type {Array<Event>} */ const replacement = [
        // Take the `labelImageMarker` (now `data`, the `!`)
        events[index + 1],
        events[index + 2],
        [
            "enter",
            call,
            context
        ],
        // The `[`
        events[index + 3],
        events[index + 4],
        // The `^`.
        [
            "enter",
            marker,
            context
        ],
        [
            "exit",
            marker,
            context
        ],
        // Everything in between.
        [
            "enter",
            string,
            context
        ],
        [
            "enter",
            chunk,
            context
        ],
        [
            "exit",
            chunk,
            context
        ],
        [
            "exit",
            string,
            context
        ],
        // The ending (`]`, properly parsed and labelled).
        events[events.length - 2],
        events[events.length - 1],
        [
            "exit",
            call,
            context
        ]
    ];
    events.splice(index, events.length - index + 1, ...replacement);
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $0a2fb9bb40749611$var$tokenizeGfmFootnoteCall(effects, ok, nok) {
    const self = this;
    /** @type {Array<string>} */ // @ts-expect-error It’s fine!
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let size = 0;
    /** @type {boolean} */ let data;
    // Note: the implementation of `markdown-rs` is different, because it houses
    // core *and* extensions in one project.
    // Therefore, it can include footnote logic inside `label-end`.
    // We can’t do that, but luckily, we can parse footnotes in a simpler way than
    // needed for labels.
    return start;
    /**
   * Start of footnote label.
   *
   * ```markdown
   * > | a [^b] c
   *       ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("gfmFootnoteCall");
        effects.enter("gfmFootnoteCallLabelMarker");
        effects.consume(code);
        effects.exit("gfmFootnoteCallLabelMarker");
        return callStart;
    }
    /**
   * After `[`, at `^`.
   *
   * ```markdown
   * > | a [^b] c
   *        ^
   * ```
   *
   * @type {State}
   */ function callStart(code) {
        if (code !== 94) return nok(code);
        effects.enter("gfmFootnoteCallMarker");
        effects.consume(code);
        effects.exit("gfmFootnoteCallMarker");
        effects.enter("gfmFootnoteCallString");
        effects.enter("chunkString").contentType = "string";
        return callData;
    }
    /**
   * In label.
   *
   * ```markdown
   * > | a [^b] c
   *         ^
   * ```
   *
   * @type {State}
   */ function callData(code) {
        if (// Too long.
        size > 999 || // Closing brace with nothing.
        code === 93 && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code === null || code === 91 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) return nok(code);
        if (code === 93) {
            effects.exit("chunkString");
            const token = effects.exit("gfmFootnoteCallString");
            if (!defined.includes((0, $d172c91bf9d24083$export$806d55e226cfcd08)(self.sliceSerialize(token)))) return nok(code);
            effects.enter("gfmFootnoteCallLabelMarker");
            effects.consume(code);
            effects.exit("gfmFootnoteCallLabelMarker");
            effects.exit("gfmFootnoteCall");
            return ok;
        }
        if (!(0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) data = true;
        size++;
        effects.consume(code);
        return code === 92 ? callEscape : callData;
    }
    /**
   * On character after escape.
   *
   * ```markdown
   * > | a [^b\c] d
   *           ^
   * ```
   *
   * @type {State}
   */ function callEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
            effects.consume(code);
            size++;
            return callData;
        }
        return callData(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $0a2fb9bb40749611$var$tokenizeDefinitionStart(effects, ok, nok) {
    const self = this;
    /** @type {Array<string>} */ // @ts-expect-error It’s fine!
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    /** @type {string} */ let identifier;
    let size = 0;
    /** @type {boolean | undefined} */ let data;
    return start;
    /**
   * Start of GFM footnote definition.
   *
   * ```markdown
   * > | [^a]: b
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("gfmFootnoteDefinition")._container = true;
        effects.enter("gfmFootnoteDefinitionLabel");
        effects.enter("gfmFootnoteDefinitionLabelMarker");
        effects.consume(code);
        effects.exit("gfmFootnoteDefinitionLabelMarker");
        return labelAtMarker;
    }
    /**
   * In label, at caret.
   *
   * ```markdown
   * > | [^a]: b
   *      ^
   * ```
   *
   * @type {State}
   */ function labelAtMarker(code) {
        if (code === 94) {
            effects.enter("gfmFootnoteDefinitionMarker");
            effects.consume(code);
            effects.exit("gfmFootnoteDefinitionMarker");
            effects.enter("gfmFootnoteDefinitionLabelString");
            effects.enter("chunkString").contentType = "string";
            return labelInside;
        }
        return nok(code);
    }
    /**
   * In label.
   *
   * > 👉 **Note**: `cmark-gfm` prevents whitespace from occurring in footnote
   * > definition labels.
   *
   * ```markdown
   * > | [^a]: b
   *       ^
   * ```
   *
   * @type {State}
   */ function labelInside(code) {
        if (// Too long.
        size > 999 || // Closing brace with nothing.
        code === 93 && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code === null || code === 91 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) return nok(code);
        if (code === 93) {
            effects.exit("chunkString");
            const token = effects.exit("gfmFootnoteDefinitionLabelString");
            identifier = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(self.sliceSerialize(token));
            effects.enter("gfmFootnoteDefinitionLabelMarker");
            effects.consume(code);
            effects.exit("gfmFootnoteDefinitionLabelMarker");
            effects.exit("gfmFootnoteDefinitionLabel");
            return labelAfter;
        }
        if (!(0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) data = true;
        size++;
        effects.consume(code);
        return code === 92 ? labelEscape : labelInside;
    }
    /**
   * After `\`, at a special character.
   *
   * > 👉 **Note**: `cmark-gfm` currently does not support escaped brackets:
   * > <https://github.com/github/cmark-gfm/issues/240>
   *
   * ```markdown
   * > | [^a\*b]: c
   *         ^
   * ```
   *
   * @type {State}
   */ function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
            effects.consume(code);
            size++;
            return labelInside;
        }
        return labelInside(code);
    }
    /**
   * After definition label.
   *
   * ```markdown
   * > | [^a]: b
   *         ^
   * ```
   *
   * @type {State}
   */ function labelAfter(code) {
        if (code === 58) {
            effects.enter("definitionMarker");
            effects.consume(code);
            effects.exit("definitionMarker");
            if (!defined.includes(identifier)) defined.push(identifier);
            // Any whitespace after the marker is eaten, forming indented code
            // is not possible.
            // No space is also fine, just like a block quote marker.
            return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
        }
        return nok(code);
    }
    /**
   * After definition prefix.
   *
   * ```markdown
   * > | [^a]: b
   *           ^
   * ```
   *
   * @type {State}
   */ function whitespaceAfter(code) {
        // `markdown-rs` has a wrapping token for the prefix that is closed here.
        return ok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $0a2fb9bb40749611$var$tokenizeDefinitionContinuation(effects, ok, nok) {
    /// Start of footnote definition continuation.
    ///
    /// ```markdown
    ///   | [^a]: b
    /// > |     c
    ///     ^
    /// ```
    //
    // Either a blank line, which is okay, or an indented thing.
    return effects.check((0, $68b861ff9f9a6ffe$export$d50d28ce3ab2a612), ok, effects.attempt($0a2fb9bb40749611$var$indent, ok, nok));
}
/** @type {Exiter} */ function $0a2fb9bb40749611$var$gfmFootnoteDefinitionEnd(effects) {
    effects.exit("gfmFootnoteDefinition");
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $0a2fb9bb40749611$var$tokenizeIndent(effects, ok, nok) {
    const self = this;
    return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 5);
    /**
   * @type {State}
   */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok(code) : nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ /**
 * @callback BackLabelTemplate
 *   Generate a back label dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   * `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   * `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   * `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Back label to use when linking back from definitions to their reference.
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {string} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` attribute on footnotes to prevent them from
 *   *clobbering*.
 *
 *   The default is `'user-content-'`.
 *   Pass `''` for trusted markdown and when you are careful with
 *   polyfilling.
 *   You could pass a different prefix.
 *
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id="x"></p>
 *   <script>alert(x) // `x` now refers to the `p#x` DOM element</script>
 *   ```
 *
 *   The above example shows that elements are made available by browsers, by
 *   their ID, on the `window` object.
 *   This is a security risk because you might be expecting some other variable
 *   at that place.
 *   It can also break polyfills.
 *   Using a prefix solves these problems.
 * @property {string} [label='Footnotes']
 *   Textual label to use for the footnotes section.
 *
 *   The default value is `'Footnotes'`.
 *   Change it when the markdown is not in English.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different attributes with the `labelAttributes` option.
 * @property {string} [labelAttributes='class="sr-only"']
 *   Attributes to use on the footnote label.
 *
 *   Change it to show the label and add other attributes.
 *
 *   This label is typically hidden visually (assuming an `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass an empty string.
 *   You can also add different attributes.
 *
 *   > 👉 **Note**: `id="footnote-label"` is always added, because footnote
 *   > calls use it with `aria-describedby` to provide an accessible label.
 * @property {string} [labelTagName='h2']
 *   HTML tag name to use for the footnote label element.
 *
 *   Change it to match your document structure.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different attributes with the `labelAttributes` option.
 * @property {BackLabelTemplate | string} [backLabel]
 *   Textual label to describe the backreference back to references.
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultBackLabel(referenceIndex, rereferenceIndex) {
 *    return (
 *      'Back to reference ' +
 *      (referenceIndex + 1) +
 *      (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
 *    )
 *  }
 *   ```
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is used in the `aria-label` attribute on each backreference
 *   (the `↩` links).
 *   It affects users of assistive technology.
 */ 

const $d4c009d65b67bb03$var$own = {}.hasOwnProperty;
/** @type {Options} */ const $d4c009d65b67bb03$var$emptyOptions = {};
function $d4c009d65b67bb03$export$a18c77a47f4154b6(referenceIndex, rereferenceIndex) {
    return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
}
function $d4c009d65b67bb03$export$a731a1f6cf81900c(options) {
    const config = options || $d4c009d65b67bb03$var$emptyOptions;
    const label = config.label || "Footnotes";
    const labelTagName = config.labelTagName || "h2";
    const labelAttributes = config.labelAttributes === null || config.labelAttributes === undefined ? 'class="sr-only"' : config.labelAttributes;
    const backLabel = config.backLabel || $d4c009d65b67bb03$export$a18c77a47f4154b6;
    const clobberPrefix = config.clobberPrefix === null || config.clobberPrefix === undefined ? "user-content-" : config.clobberPrefix;
    return {
        enter: {
            gfmFootnoteDefinition () {
                const stack = /** @type {Array<boolean>} */ this.getData("tightStack");
                stack.push(false);
            },
            gfmFootnoteDefinitionLabelString () {
                this.buffer();
            },
            gfmFootnoteCallString () {
                this.buffer();
            }
        },
        exit: {
            gfmFootnoteDefinition () {
                let definitions = /** @type {Record<string, string>} */ this.getData("gfmFootnoteDefinitions");
                const footnoteStack = /** @type {Array<string>} */ this.getData("gfmFootnoteDefinitionStack");
                const tightStack = /** @type {Array<boolean>} */ this.getData("tightStack");
                const current = footnoteStack.pop();
                const value = this.resume();
                if (!definitions) this.setData("gfmFootnoteDefinitions", definitions = {});
                if (!$d4c009d65b67bb03$var$own.call(definitions, current)) definitions[current] = value;
                tightStack.pop();
                this.setData("slurpOneLineEnding", true);
                // “Hack” to prevent a line ending from showing up if we’re in a definition in
                // an empty list item.
                this.setData("lastWasTag");
            },
            gfmFootnoteDefinitionLabelString (token) {
                let footnoteStack = /** @type {Array<string>} */ this.getData("gfmFootnoteDefinitionStack");
                if (!footnoteStack) this.setData("gfmFootnoteDefinitionStack", footnoteStack = []);
                footnoteStack.push((0, $d172c91bf9d24083$export$806d55e226cfcd08)(this.sliceSerialize(token)));
                this.resume() // Drop the label.
                ;
                this.buffer() // Get ready for a value.
                ;
            },
            gfmFootnoteCallString (token) {
                let calls = /** @type {Array<string>|undefined} */ this.getData("gfmFootnoteCallOrder");
                let counts = /** @type {Record<string, number>|undefined} */ this.getData("gfmFootnoteCallCounts");
                const id = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(this.sliceSerialize(token));
                /** @type {number} */ let counter;
                this.resume();
                if (!calls) this.setData("gfmFootnoteCallOrder", calls = []);
                if (!counts) this.setData("gfmFootnoteCallCounts", counts = {});
                const index = calls.indexOf(id);
                const safeId = (0, $9d5c31a0dffab546$export$d130a2d684099e5a)(id.toLowerCase());
                if (index === -1) {
                    calls.push(id);
                    counts[id] = 1;
                    counter = calls.length;
                } else {
                    counts[id]++;
                    counter = index + 1;
                }
                const reuseCounter = counts[id];
                this.tag('<sup><a href="#' + clobberPrefix + "fn-" + safeId + '" id="' + clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : "") + '" data-footnote-ref="" aria-describedby="footnote-label">' + String(counter) + "</a></sup>");
            },
            null () {
                const calls = /** @type {Array<string>} */ this.getData("gfmFootnoteCallOrder") || [];
                const counts = /** @type {Record<string, number>} */ this.getData("gfmFootnoteCallCounts") || {};
                const definitions = /** @type {Record<string, string>} */ this.getData("gfmFootnoteDefinitions") || {};
                let index = -1;
                if (calls.length > 0) {
                    this.lineEndingIfNeeded();
                    this.tag('<section data-footnotes="" class="footnotes"><' + labelTagName + ' id="footnote-label"' + (labelAttributes ? " " + labelAttributes : "") + ">");
                    this.raw(this.encode(label));
                    this.tag("</" + labelTagName + ">");
                    this.lineEndingIfNeeded();
                    this.tag("<ol>");
                }
                while(++index < calls.length){
                    // Called definitions are always defined.
                    const id = calls[index];
                    const safeId = (0, $9d5c31a0dffab546$export$d130a2d684099e5a)(id.toLowerCase());
                    let referenceIndex = 0;
                    /** @type {Array<string>} */ const references = [];
                    while(++referenceIndex <= counts[id])references.push('<a href="#' + clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : "") + '" data-footnote-backref="" aria-label="' + this.encode(typeof backLabel === "string" ? backLabel : backLabel(index, referenceIndex)) + '" class="data-footnote-backref">↩' + (referenceIndex > 1 ? "<sup>" + referenceIndex + "</sup>" : "") + "</a>");
                    const reference = references.join(" ");
                    let injected = false;
                    this.lineEndingIfNeeded();
                    this.tag('<li id="' + clobberPrefix + "fn-" + safeId + '">');
                    this.lineEndingIfNeeded();
                    this.tag(definitions[id].replace(/<\/p>(?:\r?\n|\r)?$/, (/** @type {string} */ $0)=>{
                        injected = true;
                        return " " + reference + $0;
                    }));
                    if (!injected) {
                        this.lineEndingIfNeeded();
                        this.tag(reference);
                    }
                    this.lineEndingIfNeeded();
                    this.tag("</li>");
                }
                if (calls.length > 0) {
                    this.lineEndingIfNeeded();
                    this.tag("</ol>");
                    this.lineEndingIfNeeded();
                    this.tag("</section>");
                }
            }
        }
    };
}


/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean} [singleTilde=true]
 *   Whether to support strikethrough with a single tilde.
 *
 *   Single tildes work on github.com, but are technically prohibited by the
 *   GFM spec.
 */ 


function $26591d1023b31d2e$export$8bbec8ea1400a00e(options) {
    const options_ = options || {};
    let single = options_.singleTilde;
    const tokenizer = {
        tokenize: tokenizeStrikethrough,
        resolveAll: resolveAllStrikethrough
    };
    if (single === null || single === undefined) single = true;
    return {
        text: {
            [126]: tokenizer
        },
        insideSpan: {
            null: [
                tokenizer
            ]
        },
        attentionMarkers: {
            null: [
                126
            ]
        }
    };
    /**
   * Take events and resolve strikethrough.
   *
   * @type {Resolver}
   */ function resolveAllStrikethrough(events, context) {
        let index = -1;
        // Walk through all events.
        while(++index < events.length)// Find a token that can close.
        if (events[index][0] === "enter" && events[index][1].type === "strikethroughSequenceTemporary" && events[index][1]._close) {
            let open = index;
            // Now walk back to find an opener.
            while(open--)// Find a token that can open the closer.
            if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
            events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
                events[index][1].type = "strikethroughSequence";
                events[open][1].type = "strikethroughSequence";
                const strikethrough = {
                    type: "strikethrough",
                    start: Object.assign({}, events[open][1].start),
                    end: Object.assign({}, events[index][1].end)
                };
                const text = {
                    type: "strikethroughText",
                    start: Object.assign({}, events[open][1].end),
                    end: Object.assign({}, events[index][1].start)
                };
                // Opening.
                const nextEvents = [
                    [
                        "enter",
                        strikethrough,
                        context
                    ],
                    [
                        "enter",
                        events[open][1],
                        context
                    ],
                    [
                        "exit",
                        events[open][1],
                        context
                    ],
                    [
                        "enter",
                        text,
                        context
                    ]
                ];
                const insideSpan = context.parser.constructs.insideSpan.null;
                if (insideSpan) // Between.
                (0, $e3740fd54cb8c53f$export$869882364835d202)(nextEvents, nextEvents.length, 0, // @ts-expect-error: to do: update `mdast-util-types` to allow explicit `undefined`s.
                (0, $2d1cd621ae059249$export$3ff61ec196ff408b)(insideSpan, events.slice(open + 1, index), context));
                // Closing.
                (0, $e3740fd54cb8c53f$export$869882364835d202)(nextEvents, nextEvents.length, 0, [
                    [
                        "exit",
                        text,
                        context
                    ],
                    [
                        "enter",
                        events[index][1],
                        context
                    ],
                    [
                        "exit",
                        events[index][1],
                        context
                    ],
                    [
                        "exit",
                        strikethrough,
                        context
                    ]
                ]);
                (0, $e3740fd54cb8c53f$export$869882364835d202)(events, open - 1, index - open + 3, nextEvents);
                index = open + nextEvents.length - 2;
                break;
            }
        }
        index = -1;
        while(++index < events.length)if (events[index][1].type === "strikethroughSequenceTemporary") events[index][1].type = "data";
        return events;
    }
    /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */ function tokenizeStrikethrough(effects, ok, nok) {
        const previous = this.previous;
        const events = this.events;
        let size = 0;
        return start;
        /** @type {State} */ function start(code) {
            if (previous === 126 && events[events.length - 1][1].type !== "characterEscape") return nok(code);
            effects.enter("strikethroughSequenceTemporary");
            return more(code);
        }
        /** @type {State} */ function more(code) {
            const before = (0, $076e9255d90ad183$export$e3902bc0d835cad0)(previous);
            if (code === 126) {
                // If this is the third marker, exit.
                if (size > 1) return nok(code);
                effects.consume(code);
                size++;
                return more;
            }
            if (size < 2 && !single) return nok(code);
            const token = effects.exit("strikethroughSequenceTemporary");
            const after = (0, $076e9255d90ad183$export$e3902bc0d835cad0)(code);
            token._open = !after || after === 2 && Boolean(before);
            token._close = !before || before === 2 && Boolean(after);
            return ok(code);
        }
    }
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ // To do: next major: expose function instead of object.
/**
 * Extension for `micromark` that can be passed in `htmlExtensions`, to
 * support GFM strikethrough when serializing to HTML.
 *
 * @type {HtmlExtension}
 */ const $43f3b10e358f0a11$export$58acedca46108820 = {
    enter: {
        strikethrough () {
            this.tag("<del>");
        }
    },
    exit: {
        strikethrough () {
            this.tag("</del>");
        }
    }
};


/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 */ /**
 * @typedef {'left'|'center'|'right'|'none'} Align
 */ 

const $62e5a16290d5550a$export$e36cebda627bf2dd = {
    flow: {
        null: {
            tokenize: $62e5a16290d5550a$var$tokenizeTable,
            resolve: $62e5a16290d5550a$var$resolveTable
        }
    }
};
const $62e5a16290d5550a$var$nextPrefixedOrBlank = {
    tokenize: $62e5a16290d5550a$var$tokenizeNextPrefixedOrBlank,
    partial: true
};
/** @type {Resolver} */ function $62e5a16290d5550a$var$resolveTable(events, context) {
    let index = -1;
    /** @type {boolean|undefined} */ let inHead;
    /** @type {boolean|undefined} */ let inDelimiterRow;
    /** @type {boolean|undefined} */ let inRow;
    /** @type {number|undefined} */ let contentStart;
    /** @type {number|undefined} */ let contentEnd;
    /** @type {number|undefined} */ let cellStart;
    /** @type {boolean|undefined} */ let seenCellInRow;
    while(++index < events.length){
        const token = events[index][1];
        if (inRow) {
            if (token.type === "temporaryTableCellContent") {
                contentStart = contentStart || index;
                contentEnd = index;
            }
            if (// Combine separate content parts into one.
            (token.type === "tableCellDivider" || token.type === "tableRow") && contentEnd) {
                const content = {
                    type: "tableContent",
                    start: events[contentStart][1].start,
                    end: events[contentEnd][1].end
                };
                /** @type {Token} */ const text = {
                    type: "chunkText",
                    start: content.start,
                    end: content.end,
                    // @ts-expect-error It’s fine.
                    contentType: "text"
                };
                events.splice(contentStart, contentEnd - contentStart + 1, [
                    "enter",
                    content,
                    context
                ], [
                    "enter",
                    text,
                    context
                ], [
                    "exit",
                    text,
                    context
                ], [
                    "exit",
                    content,
                    context
                ]);
                index -= contentEnd - contentStart - 3;
                contentStart = undefined;
                contentEnd = undefined;
            }
        }
        if (events[index][0] === "exit" && cellStart !== undefined && cellStart + (seenCellInRow ? 0 : 1) < index && (token.type === "tableCellDivider" || token.type === "tableRow" && (cellStart + 3 < index || events[cellStart][1].type !== "whitespace"))) {
            const cell = {
                type: inDelimiterRow ? "tableDelimiter" : inHead ? "tableHeader" : "tableData",
                start: events[cellStart][1].start,
                end: events[index][1].end
            };
            events.splice(index + (token.type === "tableCellDivider" ? 1 : 0), 0, [
                "exit",
                cell,
                context
            ]);
            events.splice(cellStart, 0, [
                "enter",
                cell,
                context
            ]);
            index += 2;
            cellStart = index + 1;
            seenCellInRow = true;
        }
        if (token.type === "tableRow") {
            inRow = events[index][0] === "enter";
            if (inRow) {
                cellStart = index + 1;
                seenCellInRow = false;
            }
        }
        if (token.type === "tableDelimiterRow") {
            inDelimiterRow = events[index][0] === "enter";
            if (inDelimiterRow) {
                cellStart = index + 1;
                seenCellInRow = false;
            }
        }
        if (token.type === "tableHead") inHead = events[index][0] === "enter";
    }
    return events;
}
/** @type {Tokenizer} */ function $62e5a16290d5550a$var$tokenizeTable(effects, ok, nok) {
    const self = this;
    /** @type {Array<Align>} */ const align = [];
    let tableHeaderCount = 0;
    /** @type {boolean|undefined} */ let seenDelimiter;
    /** @type {boolean|undefined} */ let hasDash;
    return start;
    /** @type {State} */ function start(code) {
        // @ts-expect-error Custom.
        effects.enter("table")._align = align;
        effects.enter("tableHead");
        effects.enter("tableRow") // If we start with a pipe, we open a cell marker.
        ;
        if (code === 124) return cellDividerHead(code);
        tableHeaderCount++;
        effects.enter("temporaryTableCellContent") // Can’t be space or eols at the start of a construct, so we’re in a cell.
        ;
        return inCellContentHead(code);
    }
    /** @type {State} */ function cellDividerHead(code) {
        effects.enter("tableCellDivider");
        effects.consume(code);
        effects.exit("tableCellDivider");
        seenDelimiter = true;
        return cellBreakHead;
    }
    /** @type {State} */ function cellBreakHead(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return atRowEndHead(code);
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.enter("whitespace");
            effects.consume(code);
            return inWhitespaceHead;
        }
        if (seenDelimiter) {
            seenDelimiter = undefined;
            tableHeaderCount++;
        }
        if (code === 124) return cellDividerHead(code);
         // Anything else is cell content.
        effects.enter("temporaryTableCellContent");
        return inCellContentHead(code);
    }
    /** @type {State} */ function inWhitespaceHead(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return inWhitespaceHead;
        }
        effects.exit("whitespace");
        return cellBreakHead(code);
    }
    /** @type {State} */ function inCellContentHead(code) {
        // EOF, whitespace, pipe
        if (code === null || code === 124 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            effects.exit("temporaryTableCellContent");
            return cellBreakHead(code);
        }
        effects.consume(code);
        return code === 92 ? inCellContentEscapeHead : inCellContentHead;
    }
    /** @type {State} */ function inCellContentEscapeHead(code) {
        if (code === 92 || code === 124) {
            effects.consume(code);
            return inCellContentHead;
        } // Anything else.
        return inCellContentHead(code);
    }
    /** @type {State} */ function atRowEndHead(code) {
        if (code === null) return nok(code);
        effects.exit("tableRow");
        effects.exit("tableHead");
        const originalInterrupt = self.interrupt;
        self.interrupt = true;
        return effects.attempt({
            tokenize: tokenizeRowEnd,
            partial: true
        }, function(code) {
            self.interrupt = originalInterrupt;
            effects.enter("tableDelimiterRow");
            return atDelimiterRowBreak(code);
        }, function(code) {
            self.interrupt = originalInterrupt;
            return nok(code);
        })(code);
    }
    /** @type {State} */ function atDelimiterRowBreak(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return rowEndDelimiter(code);
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.enter("whitespace");
            effects.consume(code);
            return inWhitespaceDelimiter;
        }
        if (code === 45) {
            effects.enter("tableDelimiterFiller");
            effects.consume(code);
            hasDash = true;
            align.push("none");
            return inFillerDelimiter;
        }
        if (code === 58) {
            effects.enter("tableDelimiterAlignment");
            effects.consume(code);
            effects.exit("tableDelimiterAlignment");
            align.push("left");
            return afterLeftAlignment;
        } // If we start with a pipe, we open a cell marker.
        if (code === 124) {
            effects.enter("tableCellDivider");
            effects.consume(code);
            effects.exit("tableCellDivider");
            return atDelimiterRowBreak;
        }
        return nok(code);
    }
    /** @type {State} */ function inWhitespaceDelimiter(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return inWhitespaceDelimiter;
        }
        effects.exit("whitespace");
        return atDelimiterRowBreak(code);
    }
    /** @type {State} */ function inFillerDelimiter(code) {
        if (code === 45) {
            effects.consume(code);
            return inFillerDelimiter;
        }
        effects.exit("tableDelimiterFiller");
        if (code === 58) {
            effects.enter("tableDelimiterAlignment");
            effects.consume(code);
            effects.exit("tableDelimiterAlignment");
            align[align.length - 1] = align[align.length - 1] === "left" ? "center" : "right";
            return afterRightAlignment;
        }
        return atDelimiterRowBreak(code);
    }
    /** @type {State} */ function afterLeftAlignment(code) {
        if (code === 45) {
            effects.enter("tableDelimiterFiller");
            effects.consume(code);
            hasDash = true;
            return inFillerDelimiter;
        } // Anything else is not ok.
        return nok(code);
    }
    /** @type {State} */ function afterRightAlignment(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return rowEndDelimiter(code);
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.enter("whitespace");
            effects.consume(code);
            return inWhitespaceDelimiter;
        } // `|`
        if (code === 124) {
            effects.enter("tableCellDivider");
            effects.consume(code);
            effects.exit("tableCellDivider");
            return atDelimiterRowBreak;
        }
        return nok(code);
    }
    /** @type {State} */ function rowEndDelimiter(code) {
        effects.exit("tableDelimiterRow") // Exit if there was no dash at all, or if the header cell count is not the
        ;
        // delimiter cell count.
        if (!hasDash || tableHeaderCount !== align.length) return nok(code);
        if (code === null) return tableClose(code);
        return effects.check($62e5a16290d5550a$var$nextPrefixedOrBlank, tableClose, effects.attempt({
            tokenize: tokenizeRowEnd,
            partial: true
        }, (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, bodyStart, "linePrefix", 4), tableClose))(code);
    }
    /** @type {State} */ function tableClose(code) {
        effects.exit("table");
        return ok(code);
    }
    /** @type {State} */ function bodyStart(code) {
        effects.enter("tableBody");
        return rowStartBody(code);
    }
    /** @type {State} */ function rowStartBody(code) {
        effects.enter("tableRow") // If we start with a pipe, we open a cell marker.
        ;
        if (code === 124) return cellDividerBody(code);
        effects.enter("temporaryTableCellContent") // Can’t be space or eols at the start of a construct, so we’re in a cell.
        ;
        return inCellContentBody(code);
    }
    /** @type {State} */ function cellDividerBody(code) {
        effects.enter("tableCellDivider");
        effects.consume(code);
        effects.exit("tableCellDivider");
        return cellBreakBody;
    }
    /** @type {State} */ function cellBreakBody(code) {
        if (code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return atRowEndBody(code);
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.enter("whitespace");
            effects.consume(code);
            return inWhitespaceBody;
        } // `|`
        if (code === 124) return cellDividerBody(code);
         // Anything else is cell content.
        effects.enter("temporaryTableCellContent");
        return inCellContentBody(code);
    }
    /** @type {State} */ function inWhitespaceBody(code) {
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) {
            effects.consume(code);
            return inWhitespaceBody;
        }
        effects.exit("whitespace");
        return cellBreakBody(code);
    }
    /** @type {State} */ function inCellContentBody(code) {
        // EOF, whitespace, pipe
        if (code === null || code === 124 || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            effects.exit("temporaryTableCellContent");
            return cellBreakBody(code);
        }
        effects.consume(code);
        return code === 92 ? inCellContentEscapeBody : inCellContentBody;
    }
    /** @type {State} */ function inCellContentEscapeBody(code) {
        if (code === 92 || code === 124) {
            effects.consume(code);
            return inCellContentBody;
        } // Anything else.
        return inCellContentBody(code);
    }
    /** @type {State} */ function atRowEndBody(code) {
        effects.exit("tableRow");
        if (code === null) return tableBodyClose(code);
        return effects.check($62e5a16290d5550a$var$nextPrefixedOrBlank, tableBodyClose, effects.attempt({
            tokenize: tokenizeRowEnd,
            partial: true
        }, (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, rowStartBody, "linePrefix", 4), tableBodyClose))(code);
    }
    /** @type {State} */ function tableBodyClose(code) {
        effects.exit("tableBody");
        return tableClose(code);
    }
    /** @type {Tokenizer} */ function tokenizeRowEnd(effects, ok, nok) {
        return start;
        /** @type {State} */ function start(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, prefixed, "linePrefix");
        }
        /** @type {State} */ function prefixed(code) {
            // Blank or interrupting line.
            if (self.parser.lazy[self.now().line] || code === null || (0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return nok(code);
            const tail = self.events[self.events.length - 1] // Indented code can interrupt delimiter and body rows.
            ;
            if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) return nok(code);
            self._gfmTableDynamicInterruptHack = true;
            return effects.check(self.parser.constructs.flow, function(code) {
                self._gfmTableDynamicInterruptHack = false;
                return nok(code);
            }, function(code) {
                self._gfmTableDynamicInterruptHack = false;
                return ok(code);
            })(code);
        }
    }
}
/** @type {Tokenizer} */ function $62e5a16290d5550a$var$tokenizeNextPrefixedOrBlank(effects, ok, nok) {
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        // This is a check, so we don’t care about tokens, but we open a bogus one
        // so we’re valid.
        effects.enter("check") // EOL.
        ;
        effects.consume(code);
        return whitespace;
    }
    /** @type {State} */ function whitespace(code) {
        if (code === -1 || code === 32) {
            effects.consume(code);
            size++;
            return size === 4 ? ok : whitespace;
        } // EOF or whitespace
        if (code === null || (0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) return ok(code);
         // Anything else.
        return nok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('./syntax.js').Align} Align
 */ const $dc4cce43ce5324ac$var$alignment = {
    none: "",
    left: ' align="left"',
    right: ' align="right"',
    center: ' align="center"'
};
const $dc4cce43ce5324ac$export$c64626c032567c7f = {
    enter: {
        table (token) {
            /** @type {Array<Align>} */ // @ts-expect-error Custom.
            const tableAlign = token._align;
            this.lineEndingIfNeeded();
            this.tag("<table>");
            this.setData("tableAlign", tableAlign);
        },
        tableBody () {
            // Clear slurping line ending from the delimiter row.
            this.setData("slurpOneLineEnding");
            this.tag("<tbody>");
        },
        tableData () {
            const tableAlign = /** @type {Array<Align>} */ this.getData("tableAlign");
            const tableColumn = /** @type {number} */ this.getData("tableColumn");
            const align = $dc4cce43ce5324ac$var$alignment[tableAlign[tableColumn]];
            if (align === undefined) // Capture results to ignore them.
            this.buffer();
            else {
                this.lineEndingIfNeeded();
                this.tag("<td" + align + ">");
            }
        },
        tableHead () {
            this.lineEndingIfNeeded();
            this.tag("<thead>");
        },
        tableHeader () {
            const tableAlign = /** @type {Array<Align>} */ this.getData("tableAlign");
            const tableColumn = /** @type {number} */ this.getData("tableColumn");
            const align = $dc4cce43ce5324ac$var$alignment[tableAlign[tableColumn]];
            this.lineEndingIfNeeded();
            this.tag("<th" + align + ">");
        },
        tableRow () {
            this.setData("tableColumn", 0);
            this.lineEndingIfNeeded();
            this.tag("<tr>");
        }
    },
    exit: {
        // Overwrite the default code text data handler to unescape escaped pipes when
        // they are in tables.
        codeTextData (token) {
            let value = this.sliceSerialize(token);
            if (this.getData("tableAlign")) value = value.replace(/\\([\\|])/g, $dc4cce43ce5324ac$var$replace);
            this.raw(this.encode(value));
        },
        table () {
            this.setData("tableAlign") // If there was no table body, make sure the slurping from the delimiter row
            ;
            // is cleared.
            this.setData("slurpAllLineEndings");
            this.lineEndingIfNeeded();
            this.tag("</table>");
        },
        tableBody () {
            this.lineEndingIfNeeded();
            this.tag("</tbody>");
        },
        tableData () {
            const tableAlign = /** @type {Array<Align>} */ this.getData("tableAlign");
            const tableColumn = /** @type {number} */ this.getData("tableColumn");
            if (tableColumn in tableAlign) {
                this.tag("</td>");
                this.setData("tableColumn", tableColumn + 1);
            } else // Stop capturing.
            this.resume();
        },
        tableHead () {
            this.lineEndingIfNeeded();
            this.tag("</thead>");
            this.setData("slurpOneLineEnding", true) // Slurp the line ending from the delimiter row.
            ;
        },
        tableHeader () {
            const tableColumn = /** @type {number} */ this.getData("tableColumn");
            this.tag("</th>");
            this.setData("tableColumn", tableColumn + 1);
        },
        tableRow () {
            const tableAlign = /** @type {Array<Align>} */ this.getData("tableAlign");
            let tableColumn = /** @type {number} */ this.getData("tableColumn");
            while(tableColumn < tableAlign.length){
                this.lineEndingIfNeeded();
                this.tag("<td" + $dc4cce43ce5324ac$var$alignment[tableAlign[tableColumn]] + "></td>");
                tableColumn++;
            }
            this.setData("tableColumn", tableColumn);
            this.lineEndingIfNeeded();
            this.tag("</tr>");
        }
    }
};
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */ function $dc4cce43ce5324ac$var$replace($0, $1) {
    // Pipes work, backslashes don’t (but can’t escape pipes).
    return $1 === "|" ? $1 : $0;
}


/**
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').Token} Token
 */ // An opening or closing tag start, followed by a case-insensitive specific tag name,
// followed by HTML whitespace, a greater than, or a slash.
const $4224c3796e0d1bd6$var$reFlow = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi;
// As HTML (text) parses tags separately (and very strictly), we don’t need to be
// global.
const $4224c3796e0d1bd6$var$reText = new RegExp("^" + $4224c3796e0d1bd6$var$reFlow.source, "i");
const $4224c3796e0d1bd6$export$c9bf87ea36d00682 = {
    exit: {
        htmlFlowData (token) {
            $4224c3796e0d1bd6$var$exitHtmlData.call(this, token, $4224c3796e0d1bd6$var$reFlow);
        },
        htmlTextData (token) {
            $4224c3796e0d1bd6$var$exitHtmlData.call(this, token, $4224c3796e0d1bd6$var$reText);
        }
    }
};
/**
 * @this {CompileContext}
 * @param {Token} token
 * @param {RegExp} filter
 */ function $4224c3796e0d1bd6$var$exitHtmlData(token, filter) {
    let value = this.sliceSerialize(token);
    if (this.options.allowDangerousHtml) value = value.replace(filter, "&lt;$1$2");
    this.raw(this.encode(value));
}


/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 

const $ce37001db4916ed5$var$tasklistCheck = {
    tokenize: $ce37001db4916ed5$var$tokenizeTasklistCheck
};
const $ce37001db4916ed5$export$2912e8b2802475ff = {
    text: {
        [91]: $ce37001db4916ed5$var$tasklistCheck
    }
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $ce37001db4916ed5$var$tokenizeTasklistCheck(effects, ok, nok) {
    const self = this;
    return open;
    /**
   * At start of task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *       ^
   * ```
   *
   * @type {State}
   */ function open(code) {
        if (// Exit if there’s stuff before.
        self.previous !== null || // Exit if not in the first content that is the first child of a list
        // item.
        !self._gfmTasklistFirstContentOfListItem) return nok(code);
        effects.enter("taskListCheck");
        effects.enter("taskListCheckMarker");
        effects.consume(code);
        effects.exit("taskListCheckMarker");
        return inside;
    }
    /**
   * In task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *        ^
   * ```
   *
   * @type {State}
   */ function inside(code) {
        // Currently we match how GH works in files.
        // To match how GH works in comments, use `markdownSpace` (`[\t ]`) instead
        // of `markdownLineEndingOrSpace` (`[\t\n\r ]`).
        if ((0, $2d97e78534b5d038$export$a30284361b3814b7)(code)) {
            effects.enter("taskListCheckValueUnchecked");
            effects.consume(code);
            effects.exit("taskListCheckValueUnchecked");
            return close;
        }
        if (code === 88 || code === 120) {
            effects.enter("taskListCheckValueChecked");
            effects.consume(code);
            effects.exit("taskListCheckValueChecked");
            return close;
        }
        return nok(code);
    }
    /**
   * At close of task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *         ^
   * ```
   *
   * @type {State}
   */ function close(code) {
        if (code === 93) {
            effects.enter("taskListCheckMarker");
            effects.consume(code);
            effects.exit("taskListCheckMarker");
            effects.exit("taskListCheck");
            return after;
        }
        return nok(code);
    }
    /**
   * @type {State}
   */ function after(code) {
        // EOL in paragraph means there must be something else after it.
        if ((0, $2d97e78534b5d038$export$34a1dff1c0936953)(code)) return ok(code);
        // Space or tab?
        // Check what comes after.
        if ((0, $2d97e78534b5d038$export$2c6cf65c1127992a)(code)) return effects.check({
            tokenize: $ce37001db4916ed5$var$spaceThenNonSpace
        }, ok, nok)(code);
        // EOF, or non-whitespace, both wrong.
        return nok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $ce37001db4916ed5$var$spaceThenNonSpace(effects, ok, nok) {
    return (0, $a7f5dfe9b6212301$export$ae105c1eb063a0a2)(effects, after, "whitespace");
    /**
   * After whitespace, after task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *           ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        // EOF means there was nothing, so bad.
        // EOL means there’s content after it, so good.
        // Impossible to have more spaces.
        // Anything else is good.
        return code === null ? nok(code) : ok(code);
    }
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ // To do: next major: expose function to make extension.
/**
 * Extension for `micromark` that can be passed in `htmlExtensions` to
 * support GFM task list items when serializing to HTML.
 *
 * @type {HtmlExtension}
 */ const $aa012d577c8027d3$export$4b6a13e2af1b08ed = {
    enter: {
        taskListCheck () {
            this.tag('<input type="checkbox" disabled="" ');
        }
    },
    exit: {
        taskListCheck () {
            this.tag("/>");
        },
        taskListCheckValueChecked () {
            this.tag('checked="" ');
        }
    }
};


function $64fbedd63a50255e$export$59ffe8c4d7a4aab2(options) {
    return (0, $467394f305db958c$export$86a865d89ef3c690)([
        (0, $f666adda49be15dd$export$608123d9b549151),
        (0, $0a2fb9bb40749611$export$c82499b6656305df)(),
        (0, $26591d1023b31d2e$export$8bbec8ea1400a00e)(options),
        (0, $62e5a16290d5550a$export$e36cebda627bf2dd),
        (0, $ce37001db4916ed5$export$2912e8b2802475ff)
    ]);
}
function $64fbedd63a50255e$export$6983b82e6105d62a(options) {
    return (0, $467394f305db958c$export$eaf8c406dfb0a620)([
        (0, $06aaccb80082790c$export$999603f1f1c3d2f9),
        (0, $d4c009d65b67bb03$export$a731a1f6cf81900c)(options),
        (0, $43f3b10e358f0a11$export$58acedca46108820),
        (0, $dc4cce43ce5324ac$export$c64626c032567c7f),
        (0, $4224c3796e0d1bd6$export$c9bf87ea36d00682),
        (0, $aa012d577c8027d3$export$4b6a13e2af1b08ed)
    ]);
}


/**
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 */ /**
 * @typedef {import('mdast-util-gfm-table').Options} Options
 *   Configuration.
 */ /**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 *
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 * @typedef {import('mdast-util-from-markdown').Transform} FromMarkdownTransform
 *
 * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 *
 * @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction
 * @typedef {import('mdast-util-find-and-replace').RegExpMatchObject} RegExpMatchObject
 */ /**
 * Count how often a character (or substring) is used in a string.
 *
 * @param {string} value
 *   Value to search in.
 * @param {string} character
 *   Character (or substring) to look for.
 * @return {number}
 *   Number of times `character` occurred in `value`.
 */ function $2caf473feed15aeb$export$fa42eaa97a352e23(value, character) {
    const source = String(value);
    if (typeof character !== "string") throw new TypeError("Expected character");
    let count = 0;
    let index = source.indexOf(character);
    while(index !== -1){
        count++;
        index = source.indexOf(character, index + character.length);
    }
    return count;
}


/**
 * @typedef {import('mdast').Parent} MdastParent
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').Text} Text
 * @typedef {import('unist-util-visit-parents').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */ /**
 * @typedef {Content | Root} Node
 * @typedef {Extract<Node, MdastParent>} Parent
 * @typedef {Exclude<Parent, Root>} ContentParent
 *
 * @typedef RegExpMatchObject
 *   Info on the match.
 * @property {number} index
 *   The index of the search at which the result was found.
 * @property {string} input
 *   A copy of the search string in the text node.
 * @property {[Root, ...Array<ContentParent>, Text]} stack
 *   All ancestors of the text node, where the last node is the text itself.
 *
 * @callback ReplaceFunction
 *   Callback called when a search matches.
 * @param {...any} parameters
 *   The parameters are the result of corresponding search expression:
 *
 *   * `value` (`string`) — whole match
 *   * `...capture` (`Array<string>`) — matches from regex capture groups
 *   * `match` (`RegExpMatchObject`) — info on the match
 * @returns {Array<PhrasingContent> | PhrasingContent | string | false | undefined | null}
 *   Thing to replace with.
 *
 *   * when `null`, `undefined`, `''`, remove the match
 *   * …or when `false`, do not replace at all
 *   * …or when `string`, replace with a text node of that value
 *   * …or when `Node` or `Array<Node>`, replace with those nodes
 *
 * @typedef {string | RegExp} Find
 *   Pattern to find.
 *
 *   Strings are escaped and then turned into global expressions.
 *
 * @typedef {Array<FindAndReplaceTuple>} FindAndReplaceList
 *   Several find and replaces, in array form.
 * @typedef {Record<string, Replace>} FindAndReplaceSchema
 *   Several find and replaces, in object form.
 * @typedef {[Find, Replace]} FindAndReplaceTuple
 *   Find and replace in tuple form.
 * @typedef {string | ReplaceFunction} Replace
 *   Thing to replace with.
 * @typedef {[RegExp, ReplaceFunction]} Pair
 *   Normalized find and replace.
 * @typedef {Array<Pair>} Pairs
 *   All find and replaced.
 *
 * @typedef Options
 *   Configuration.
 * @property {Test | null | undefined} [ignore]
 *   Test for which nodes to ignore.
 */ function $f32726f9a65f6301$export$2e2bcd8739ae039(string) {
    if (typeof string !== "string") throw new TypeError("Expected a string");
    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}


/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 */ /**
 * @typedef {boolean | 'skip'} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 */ /**
 * @template {Node} [Visited=Node]
 *   Visited node type.
 * @template {Parent} [Ancestor=Parent]
 *   Ancestor type.
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<Ancestor>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 */ /**
 * @template {Node} [Tree=Node]
 *   Tree type.
 * @template {Test} [Check=string]
 *   Test type.
 * @typedef {Visitor<import('./complex-types.js').Matches<import('./complex-types.js').InclusiveDescendant<Tree>, Check>, Extract<import('./complex-types.js').InclusiveDescendant<Tree>, Parent>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 */ /**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */ /**
 * @typedef {Record<string, unknown>} Props
 * @typedef {null | undefined | string | Props | TestFunctionAnything | Array<string | Props | TestFunctionAnything>} Test
 *   Check for an arbitrary node, unaware of TypeScript inferral.
 *
 * @callback TestFunctionAnything
 *   Check if a node passes a test, unaware of TypeScript inferral.
 * @param {unknown} this
 *   The given context.
 * @param {Node} node
 *   A node.
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean | void}
 *   Whether this node passes the test.
 */ /**
 * @template {Node} Kind
 *   Node type.
 * @typedef {Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind> | Array<Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind>>} PredicateTest
 *   Check for a node that can be inferred by TypeScript.
 */ /**
 * Check if a node passes a certain test.
 *
 * @template {Node} Kind
 *   Node type.
 * @callback TestFunctionPredicate
 *   Complex test function for a node that can be inferred by TypeScript.
 * @param {Node} node
 *   A node.
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {node is Kind}
 *   Whether this node passes the test.
 */ /**
 * @callback AssertAnything
 *   Check that an arbitrary value is a node, unaware of TypeScript inferral.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is a node and passes a test.
 */ /**
 * Check if a node is a node and passes a certain node test.
 *
 * @template {Node} Kind
 *   Node type.
 * @callback AssertPredicate
 *   Check that an arbitrary value is a specific node, aware of TypeScript.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {node is Kind}
 *   Whether this is a node and passes a test.
 */ /**
 * Check if `node` is a `Node` and whether it passes the given test.
 *
 * @param node
 *   Thing to check, typically `Node`.
 * @param test
 *   A check for a specific node.
 * @param index
 *   The node’s position in its parent.
 * @param parent
 *   The node’s parent.
 * @returns
 *   Whether `node` is a node and passes a test.
 */ const $a2952a5583676625$export$226b3eccf92c9ed9 = /**
   * @type {(
   *   (() => false) &
   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index: number, parent: Parent, context?: unknown) => node is Kind) &
   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index?: null | undefined, parent?: null | undefined, context?: unknown) => node is Kind) &
   *   ((node: unknown, test: Test, index: number, parent: Parent, context?: unknown) => boolean) &
   *   ((node: unknown, test?: Test, index?: null | undefined, parent?: null | undefined, context?: unknown) => boolean)
   * )}
   */ /**
     * @param {unknown} [node]
     * @param {Test} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function is(node, test, index, parent, context) {
    const check = $a2952a5583676625$export$9c68d69a4c5bbcf9(test);
    if (index !== undefined && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) throw new Error("Expected positive finite index");
    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) throw new Error("Expected parent node");
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) throw new Error("Expected both parent and index");
    // @ts-expect-error Looks like a node.
    return node && node.type && typeof node.type === "string" ? Boolean(check.call(context, node, index, parent)) : false;
};
const $a2952a5583676625$export$9c68d69a4c5bbcf9 = /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */ /**
     * @param {Test} [test]
     * @returns {AssertAnything}
     */ function(test) {
    if (test === undefined || test === null) return $a2952a5583676625$var$ok;
    if (typeof test === "string") return $a2952a5583676625$var$typeFactory(test);
    if (typeof test === "object") return Array.isArray(test) ? $a2952a5583676625$var$anyFactory(test) : $a2952a5583676625$var$propsFactory(test);
    if (typeof test === "function") return $a2952a5583676625$var$castFactory(test);
    throw new Error("Expected function, string, or object as test");
};
/**
 * @param {Array<string | Props | TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */ function $a2952a5583676625$var$anyFactory(tests) {
    /** @type {Array<AssertAnything>} */ const checks = [];
    let index = -1;
    while(++index < tests.length)checks[index] = $a2952a5583676625$export$9c68d69a4c5bbcf9(tests[index]);
    return $a2952a5583676625$var$castFactory(any);
    /**
   * @this {unknown}
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].call(this, ...parameters)) return true;
        }
        return false;
    }
}
/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */ function $a2952a5583676625$var$propsFactory(check) {
    return $a2952a5583676625$var$castFactory(all);
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        /** @type {string} */ let key;
        for(key in check){
            // @ts-expect-error: hush, it sure works as an index.
            if (node[key] !== check[key]) return false;
        }
        return true;
    }
}
/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {AssertAnything}
 */ function $a2952a5583676625$var$typeFactory(check) {
    return $a2952a5583676625$var$castFactory(type);
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */ function $a2952a5583676625$var$castFactory(check) {
    return assertion;
    /**
   * @this {unknown}
   * @param {unknown} node
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */ function assertion(node, ...parameters) {
        return Boolean(node && typeof node === "object" && "type" in node && // @ts-expect-error: fine.
        Boolean(check.call(this, node, ...parameters)));
    }
}
function $a2952a5583676625$var$ok() {
    return true;
}


/**
 * @param {string} d
 * @returns {string}
 */ function $12776b4d94f5139f$export$35e9368ef982300f(d) {
    return "\x1b[33m" + d + "\x1b[39m";
}


const $a85e4c9c75754d10$export$f4d8133c446fe484 = true;
const $a85e4c9c75754d10$export$7f100f842f565dc9 = false;
const $a85e4c9c75754d10$export$8773f85c2fb2c116 = "skip";
const $a85e4c9c75754d10$export$70008a21eb6de899 = /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */ /**
     * @param {Node} tree
     * @param {Test} test
     * @param {Visitor<Node>} visitor
     * @param {boolean | null | undefined} [reverse]
     * @returns {void}
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
    }
    const is = (0, $a2952a5583676625$export$9c68d69a4c5bbcf9)(test);
    const step = reverse ? -1 : 1;
    factory(tree, undefined, [])();
    /**
       * @param {Node} node
       * @param {number | undefined} index
       * @param {Array<Parent>} parents
       */ function factory(node, index, parents) {
        /** @type {Record<string, unknown>} */ // @ts-expect-error: hush
        const value = node && typeof node === "object" ? node : {};
        if (typeof value.type === "string") {
            const name = // `hast`
            typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : undefined;
            Object.defineProperty(visit, "name", {
                value: "node (" + (0, $12776b4d94f5139f$export$35e9368ef982300f)(node.type + (name ? "<" + name + ">" : "")) + ")"
            });
        }
        return visit;
        function visit() {
            /** @type {ActionTuple} */ let result = [];
            /** @type {ActionTuple} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array<Parent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || null)) {
                result = $a85e4c9c75754d10$var$toResult(visitor(node, parents));
                if (result[0] === $a85e4c9c75754d10$export$7f100f842f565dc9) return result;
            }
            // @ts-expect-error looks like a parent.
            if (node.children && result[0] !== $a85e4c9c75754d10$export$8773f85c2fb2c116) {
                // @ts-expect-error looks like a parent.
                offset = (reverse ? node.children.length : -1) + step;
                // @ts-expect-error looks like a parent.
                grandparents = parents.concat(node);
                // @ts-expect-error looks like a parent.
                while(offset > -1 && offset < node.children.length){
                    // @ts-expect-error looks like a parent.
                    subresult = factory(node.children[offset], offset, grandparents)();
                    if (subresult[0] === $a85e4c9c75754d10$export$7f100f842f565dc9) return subresult;
                    offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
                }
            }
            return result;
        }
    }
};
/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {ActionTuple}
 *   Clean result.
 */ function $a85e4c9c75754d10$var$toResult(value) {
    if (Array.isArray(value)) return value;
    if (typeof value === "number") return [
        $a85e4c9c75754d10$export$f4d8133c446fe484,
        value
    ];
    return [
        value
    ];
}



const $374321892ca66372$var$own = {}.hasOwnProperty;
const $374321892ca66372$export$fb306ebf003fc574 = /**
   * @type {(
   *   (<Tree extends Node>(tree: Tree, find: Find, replace?: Replace | null | undefined, options?: Options | null | undefined) => Tree) &
   *   (<Tree extends Node>(tree: Tree, schema: FindAndReplaceSchema | FindAndReplaceList, options?: Options | null | undefined) => Tree)
   * )}
   **/ /**
     * @template {Node} Tree
     * @param {Tree} tree
     * @param {Find | FindAndReplaceSchema | FindAndReplaceList} find
     * @param {Replace | Options | null | undefined} [replace]
     * @param {Options | null | undefined} [options]
     * @returns {Tree}
     */ function(tree, find, replace, options) {
    /** @type {Options | null | undefined} */ let settings;
    /** @type {FindAndReplaceSchema|FindAndReplaceList} */ let schema;
    if (typeof find === "string" || find instanceof RegExp) {
        // @ts-expect-error don’t expect options twice.
        schema = [
            [
                find,
                replace
            ]
        ];
        settings = options;
    } else {
        schema = find;
        // @ts-expect-error don’t expect replace twice.
        settings = replace;
    }
    if (!settings) settings = {};
    const ignored = (0, $a2952a5583676625$export$9c68d69a4c5bbcf9)(settings.ignore || []);
    const pairs = $374321892ca66372$var$toPairs(schema);
    let pairIndex = -1;
    while(++pairIndex < pairs.length)(0, $a85e4c9c75754d10$export$70008a21eb6de899)(tree, "text", visitor);
    // To do next major: don’t return the given tree.
    return tree;
    /** @type {import('unist-util-visit-parents/complex-types.js').BuildVisitor<Root, 'text'>} */ function visitor(node, parents) {
        let index = -1;
        /** @type {Parent | undefined} */ let grandparent;
        while(++index < parents.length){
            const parent = parents[index];
            if (ignored(parent, // @ts-expect-error: TS doesn’t understand but it’s perfect.
            grandparent ? grandparent.children.indexOf(parent) : undefined, grandparent)) return;
            grandparent = parent;
        }
        if (grandparent) return handler(node, parents);
    }
    /**
       * Handle a text node which is not in an ignored parent.
       *
       * @param {Text} node
       *   Text node.
       * @param {Array<Parent>} parents
       *   Parents.
       * @returns {VisitorResult}
       *   Result.
       */ function handler(node, parents) {
        const parent = parents[parents.length - 1];
        const find = pairs[pairIndex][0];
        const replace = pairs[pairIndex][1];
        let start = 0;
        // @ts-expect-error: TS is wrong, some of these children can be text.
        const index = parent.children.indexOf(node);
        let change = false;
        /** @type {Array<PhrasingContent>} */ let nodes = [];
        find.lastIndex = 0;
        let match = find.exec(node.value);
        while(match){
            const position = match.index;
            /** @type {RegExpMatchObject} */ const matchObject = {
                index: match.index,
                input: match.input,
                // @ts-expect-error: stack is fine.
                stack: [
                    ...parents,
                    node
                ]
            };
            let value = replace(...match, matchObject);
            if (typeof value === "string") value = value.length > 0 ? {
                type: "text",
                value: value
            } : undefined;
            // It wasn’t a match after all.
            if (value !== false) {
                if (start !== position) nodes.push({
                    type: "text",
                    value: node.value.slice(start, position)
                });
                if (Array.isArray(value)) nodes.push(...value);
                else if (value) nodes.push(value);
                start = position + match[0].length;
                change = true;
            }
            if (!find.global) break;
            match = find.exec(node.value);
        }
        if (change) {
            if (start < node.value.length) nodes.push({
                type: "text",
                value: node.value.slice(start)
            });
            parent.children.splice(index, 1, ...nodes);
        } else nodes = [
            node
        ];
        return index + nodes.length;
    }
};
/**
 * Turn a schema into pairs.
 *
 * @param {FindAndReplaceSchema | FindAndReplaceList} schema
 *   Schema.
 * @returns {Pairs}
 *   Clean pairs.
 */ function $374321892ca66372$var$toPairs(schema) {
    /** @type {Pairs} */ const result = [];
    if (typeof schema !== "object") throw new TypeError("Expected array or object as schema");
    if (Array.isArray(schema)) {
        let index = -1;
        while(++index < schema.length)result.push([
            $374321892ca66372$var$toExpression(schema[index][0]),
            $374321892ca66372$var$toFunction(schema[index][1])
        ]);
    } else {
        /** @type {string} */ let key;
        for(key in schema)if ($374321892ca66372$var$own.call(schema, key)) result.push([
            $374321892ca66372$var$toExpression(key),
            $374321892ca66372$var$toFunction(schema[key])
        ]);
    }
    return result;
}
/**
 * Turn a find into an expression.
 *
 * @param {Find} find
 *   Find.
 * @returns {RegExp}
 *   Expression.
 */ function $374321892ca66372$var$toExpression(find) {
    return typeof find === "string" ? new RegExp((0, $f32726f9a65f6301$export$2e2bcd8739ae039)(find), "g") : find;
}
/**
 * Turn a replace into a function.
 *
 * @param {Replace} replace
 *   Replace.
 * @returns {ReplaceFunction}
 *   Function.
 */ function $374321892ca66372$var$toFunction(replace) {
    return typeof replace === "function" ? replace : ()=>replace;
}



/** @type {ConstructName} */ const $66c4f4aad072f65a$var$inConstruct = "phrasing";
/** @type {Array<ConstructName>} */ const $66c4f4aad072f65a$var$notInConstruct = [
    "autolink",
    "link",
    "image",
    "label"
];
const $66c4f4aad072f65a$export$b6afdfff2163546f = {
    transforms: [
        $66c4f4aad072f65a$var$transformGfmAutolinkLiterals
    ],
    enter: {
        literalAutolink: $66c4f4aad072f65a$var$enterLiteralAutolink,
        literalAutolinkEmail: $66c4f4aad072f65a$var$enterLiteralAutolinkValue,
        literalAutolinkHttp: $66c4f4aad072f65a$var$enterLiteralAutolinkValue,
        literalAutolinkWww: $66c4f4aad072f65a$var$enterLiteralAutolinkValue
    },
    exit: {
        literalAutolink: $66c4f4aad072f65a$var$exitLiteralAutolink,
        literalAutolinkEmail: $66c4f4aad072f65a$var$exitLiteralAutolinkEmail,
        literalAutolinkHttp: $66c4f4aad072f65a$var$exitLiteralAutolinkHttp,
        literalAutolinkWww: $66c4f4aad072f65a$var$exitLiteralAutolinkWww
    }
};
const $66c4f4aad072f65a$export$d3ace9096b01c39d = {
    unsafe: [
        {
            character: "@",
            before: "[+\\-.\\w]",
            after: "[\\-.\\w]",
            inConstruct: $66c4f4aad072f65a$var$inConstruct,
            notInConstruct: $66c4f4aad072f65a$var$notInConstruct
        },
        {
            character: ".",
            before: "[Ww]",
            after: "[\\-.\\w]",
            inConstruct: $66c4f4aad072f65a$var$inConstruct,
            notInConstruct: $66c4f4aad072f65a$var$notInConstruct
        },
        {
            character: ":",
            before: "[ps]",
            after: "\\/",
            inConstruct: $66c4f4aad072f65a$var$inConstruct,
            notInConstruct: $66c4f4aad072f65a$var$notInConstruct
        }
    ]
};
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $66c4f4aad072f65a$var$enterLiteralAutolink(token) {
    this.enter({
        type: "link",
        title: null,
        url: "",
        children: []
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $66c4f4aad072f65a$var$enterLiteralAutolinkValue(token) {
    this.config.enter.autolinkProtocol.call(this, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $66c4f4aad072f65a$var$exitLiteralAutolinkHttp(token) {
    this.config.exit.autolinkProtocol.call(this, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $66c4f4aad072f65a$var$exitLiteralAutolinkWww(token) {
    this.config.exit.data.call(this, token);
    const node = /** @type {Link} */ this.stack[this.stack.length - 1];
    node.url = "http://" + this.sliceSerialize(token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $66c4f4aad072f65a$var$exitLiteralAutolinkEmail(token) {
    this.config.exit.autolinkEmail.call(this, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $66c4f4aad072f65a$var$exitLiteralAutolink(token) {
    this.exit(token);
}
/** @type {FromMarkdownTransform} */ function $66c4f4aad072f65a$var$transformGfmAutolinkLiterals(tree) {
    (0, $374321892ca66372$export$fb306ebf003fc574)(tree, [
        [
            /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
            $66c4f4aad072f65a$var$findUrl
        ],
        [
            /([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,
            $66c4f4aad072f65a$var$findEmail
        ]
    ], {
        ignore: [
            "link",
            "linkReference"
        ]
    });
}
/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} protocol
 * @param {string} domain
 * @param {string} path
 * @param {RegExpMatchObject} match
 * @returns {Link | Array<PhrasingContent> | false}
 */ // eslint-disable-next-line max-params
function $66c4f4aad072f65a$var$findUrl(_, protocol, domain, path, match) {
    let prefix = "";
    // Not an expected previous character.
    if (!$66c4f4aad072f65a$var$previous(match)) return false;
    // Treat `www` as part of the domain.
    if (/^w/i.test(protocol)) {
        domain = protocol + domain;
        protocol = "";
        prefix = "http://";
    }
    if (!$66c4f4aad072f65a$var$isCorrectDomain(domain)) return false;
    const parts = $66c4f4aad072f65a$var$splitUrl(domain + path);
    if (!parts[0]) return false;
    /** @type {Link} */ const result = {
        type: "link",
        title: null,
        url: prefix + protocol + parts[0],
        children: [
            {
                type: "text",
                value: protocol + parts[0]
            }
        ]
    };
    if (parts[1]) return [
        result,
        {
            type: "text",
            value: parts[1]
        }
    ];
    return result;
}
/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} atext
 * @param {string} label
 * @param {RegExpMatchObject} match
 * @returns {Link | false}
 */ function $66c4f4aad072f65a$var$findEmail(_, atext, label, match) {
    if (// Not an expected previous character.
    !$66c4f4aad072f65a$var$previous(match, true) || // Label ends in not allowed character.
    /[-\d_]$/.test(label)) return false;
    return {
        type: "link",
        title: null,
        url: "mailto:" + atext + "@" + label,
        children: [
            {
                type: "text",
                value: atext + "@" + label
            }
        ]
    };
}
/**
 * @param {string} domain
 * @returns {boolean}
 */ function $66c4f4aad072f65a$var$isCorrectDomain(domain) {
    const parts = domain.split(".");
    if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) return false;
    return true;
}
/**
 * @param {string} url
 * @returns {[string, string | undefined]}
 */ function $66c4f4aad072f65a$var$splitUrl(url) {
    const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
    if (!trailExec) return [
        url,
        undefined
    ];
    url = url.slice(0, trailExec.index);
    let trail = trailExec[0];
    let closingParenIndex = trail.indexOf(")");
    const openingParens = (0, $2caf473feed15aeb$export$fa42eaa97a352e23)(url, "(");
    let closingParens = (0, $2caf473feed15aeb$export$fa42eaa97a352e23)(url, ")");
    while(closingParenIndex !== -1 && openingParens > closingParens){
        url += trail.slice(0, closingParenIndex + 1);
        trail = trail.slice(closingParenIndex + 1);
        closingParenIndex = trail.indexOf(")");
        closingParens++;
    }
    return [
        url,
        trail
    ];
}
/**
 * @param {RegExpMatchObject} match
 * @param {boolean | null | undefined} [email=false]
 * @returns {boolean}
 */ function $66c4f4aad072f65a$var$previous(match, email) {
    const code = match.input.charCodeAt(match.index - 1);
    return (match.index === 0 || (0, $2d97e78534b5d038$export$a0ff789c034ffdf4)(code) || (0, $2d97e78534b5d038$export$aa04114dd888a7a0)(code)) && (!email || code !== 47);
}


/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').Map} Map
 */ 
/**
 * @typedef {import('../types.js').AssociationId} AssociationId
 */ 
function $300d161149dff68b$export$c4ca1a6065421754(node) {
    if (node.label || !node.identifier) return node.label || "";
    return (0, $e436ffcb420c9948$export$a0fb664af7d0cc44)(node.identifier);
}


/**
 * @typedef {import('../types.js').FlowContent} FlowContent
 * @typedef {import('../types.js').Node} Node
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').TrackFields} TrackFields
 */ /**
 * @param {Parent & {children: Array<FlowContent>}} parent
 *   Parent of flow nodes.
 * @param {State} state
 *   Info passed around about the current state.
 * @param {TrackFields} info
 *   Info on where we are in the document we are generating.
 * @returns {string}
 *   Serialized children, joined by (blank) lines.
 */ function $5d811d6b2c99e2fb$export$134f7fdacfea8b16(parent, state, info) {
    const indexStack = state.indexStack;
    const children = parent.children || [];
    const tracker = state.createTracker(info);
    /** @type {Array<string>} */ const results = [];
    let index = -1;
    indexStack.push(-1);
    while(++index < children.length){
        const child = children[index];
        indexStack[indexStack.length - 1] = index;
        results.push(tracker.move(state.handle(child, parent, state, {
            before: "\n",
            after: "\n",
            ...tracker.current()
        })));
        if (child.type !== "list") state.bulletLastUsed = undefined;
        if (index < children.length - 1) results.push(tracker.move($5d811d6b2c99e2fb$var$between(child, children[index + 1], parent, state)));
    }
    indexStack.pop();
    return results.join("");
}
/**
 * @param {Node} left
 * @param {Node} right
 * @param {Parent} parent
 * @param {State} state
 * @returns {string}
 */ function $5d811d6b2c99e2fb$var$between(left, right, parent, state) {
    let index = state.join.length;
    while(index--){
        const result = state.join[index](left, right, parent, state);
        if (result === true || result === 1) break;
        if (typeof result === "number") return "\n".repeat(1 + result);
        if (result === false) return "\n\n<!---->\n\n";
    }
    return "\n\n";
}


/**
 * @typedef {import('../types.js').IndentLines} IndentLines
 */ const $ef23088a57cfa1fa$var$eol = /\r?\n|\r/g;
function $ef23088a57cfa1fa$export$7c3cf23d514b264a(value, map) {
    /** @type {Array<string>} */ const result = [];
    let start = 0;
    let line = 0;
    /** @type {RegExpExecArray | null} */ let match;
    while(match = $ef23088a57cfa1fa$var$eol.exec(value)){
        one(value.slice(start, match.index));
        result.push(match[0]);
        start = match.index + match[0].length;
        line++;
    }
    one(value.slice(start));
    return result.join("");
    /**
   * @param {string} value
   */ function one(value) {
        result.push(map(value, line, !value));
    }
}


/**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').SafeConfig} SafeConfig
 */ /**
 * @typedef {import('../types.js').Unsafe} Unsafe
 */ /**
 * @param {Unsafe} pattern
 * @returns {RegExp}
 */ function $1df5ad01bb2635c5$export$7993761911514c15(pattern) {
    if (!pattern._compiled) {
        const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
        pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
    }
    return pattern._compiled;
}


/**
 * @typedef {import('../types.js').Unsafe} Unsafe
 * @typedef {import('../types.js').ConstructName} ConstructName
 */ /**
 * @param {Array<ConstructName>} stack
 * @param {Unsafe} pattern
 * @returns {boolean}
 */ function $cb161a8970a8d1f1$export$78221a09424368d(stack, pattern) {
    return $cb161a8970a8d1f1$var$listInScope(stack, pattern.inConstruct, true) && !$cb161a8970a8d1f1$var$listInScope(stack, pattern.notInConstruct, false);
}
/**
 * @param {Array<ConstructName>} stack
 * @param {Unsafe['inConstruct']} list
 * @param {boolean} none
 * @returns {boolean}
 */ function $cb161a8970a8d1f1$var$listInScope(stack, list, none) {
    if (typeof list === "string") list = [
        list
    ];
    if (!list || list.length === 0) return none;
    let index = -1;
    while(++index < list.length){
        if (stack.includes(list[index])) return true;
    }
    return false;
}


function $b08bd3b190805b70$export$170b8c323eee7bec(state, input, config) {
    const value = (config.before || "") + (input || "") + (config.after || "");
    /** @type {Array<number>} */ const positions = [];
    /** @type {Array<string>} */ const result = [];
    /** @type {Record<number, {before: boolean, after: boolean}>} */ const infos = {};
    let index = -1;
    while(++index < state.unsafe.length){
        const pattern = state.unsafe[index];
        if (!(0, $cb161a8970a8d1f1$export$78221a09424368d)(state.stack, pattern)) continue;
        const expression = (0, $1df5ad01bb2635c5$export$7993761911514c15)(pattern);
        /** @type {RegExpExecArray | null} */ let match;
        while(match = expression.exec(value)){
            const before = "before" in pattern || Boolean(pattern.atBreak);
            const after = "after" in pattern;
            const position = match.index + (before ? match[1].length : 0);
            if (positions.includes(position)) {
                if (infos[position].before && !before) infos[position].before = false;
                if (infos[position].after && !after) infos[position].after = false;
            } else {
                positions.push(position);
                infos[position] = {
                    before: before,
                    after: after
                };
            }
        }
    }
    positions.sort($b08bd3b190805b70$var$numerical);
    let start = config.before ? config.before.length : 0;
    const end = value.length - (config.after ? config.after.length : 0);
    index = -1;
    while(++index < positions.length){
        const position = positions[index];
        // Character before or after matched:
        if (position < start || position >= end) continue;
        // If this character is supposed to be escaped because it has a condition on
        // the next character, and the next character is definitly being escaped,
        // then skip this escape.
        if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after || positions[index - 1] === position - 1 && infos[position].before && !infos[position - 1].before && !infos[position - 1].after) continue;
        if (start !== position) // If we have to use a character reference, an ampersand would be more
        // correct, but as backslashes only care about punctuation, either will
        // do the trick
        result.push($b08bd3b190805b70$var$escapeBackslashes(value.slice(start, position), "\\"));
        start = position;
        if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || !config.encode.includes(value.charAt(position)))) // Character escape.
        result.push("\\");
        else {
            // Character reference.
            result.push("&#x" + value.charCodeAt(position).toString(16).toUpperCase() + ";");
            start++;
        }
    }
    result.push($b08bd3b190805b70$var$escapeBackslashes(value.slice(start, end), config.after));
    return result.join("");
}
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */ function $b08bd3b190805b70$var$numerical(a, b) {
    return a - b;
}
/**
 * @param {string} value
 * @param {string} after
 * @returns {string}
 */ function $b08bd3b190805b70$var$escapeBackslashes(value, after) {
    const expression = /\\(?=[!-/:-@[-`{-~])/g;
    /** @type {Array<number>} */ const positions = [];
    /** @type {Array<string>} */ const results = [];
    const whole = value + after;
    let index = -1;
    let start = 0;
    /** @type {RegExpExecArray | null} */ let match;
    while(match = expression.exec(whole))positions.push(match.index);
    while(++index < positions.length){
        if (start !== positions[index]) results.push(value.slice(start, positions[index]));
        results.push("\\");
        start = positions[index];
    }
    results.push(value.slice(start));
    return results.join("");
}


/**
 * @typedef {import('../types.js').CreateTracker} CreateTracker
 * @typedef {import('../types.js').TrackCurrent} TrackCurrent
 * @typedef {import('../types.js').TrackMove} TrackMove
 * @typedef {import('../types.js').TrackShift} TrackShift
 */ /**
 * Track positional info in the output.
 *
 * @type {CreateTracker}
 */ function $325c56aac767f616$export$6b2a7d5132615086(config) {
    // Defaults are used to prevent crashes when older utilities somehow activate
    // this code.
    /* c8 ignore next 5 */ const options = config || {};
    const now = options.now || {};
    let lineShift = options.lineShift || 0;
    let line = now.line || 1;
    let column = now.column || 1;
    return {
        move: move,
        current: current,
        shift: shift
    };
    /**
   * Get the current tracked info.
   *
   * @type {TrackCurrent}
   */ function current() {
        return {
            now: {
                line: line,
                column: column
            },
            lineShift: lineShift
        };
    }
    /**
   * Define an increased line shift (the typical indent for lines).
   *
   * @type {TrackShift}
   */ function shift(value) {
        lineShift += value;
    }
    /**
   * Move past some generated markdown.
   *
   * @type {TrackMove}
   */ function move(input) {
        // eslint-disable-next-line unicorn/prefer-default-parameters
        const value = input || "";
        const chunks = value.split(/\r?\n|\r/g);
        const tail = chunks[chunks.length - 1];
        line += chunks.length - 1;
        column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
        return value;
    }
}


$b1218609295df8d8$var$footnoteReference.peek = $b1218609295df8d8$var$footnoteReferencePeek;
function $b1218609295df8d8$export$c9d5ad4bdf6ff801() {
    return {
        enter: {
            gfmFootnoteDefinition: $b1218609295df8d8$var$enterFootnoteDefinition,
            gfmFootnoteDefinitionLabelString: $b1218609295df8d8$var$enterFootnoteDefinitionLabelString,
            gfmFootnoteCall: $b1218609295df8d8$var$enterFootnoteCall,
            gfmFootnoteCallString: $b1218609295df8d8$var$enterFootnoteCallString
        },
        exit: {
            gfmFootnoteDefinition: $b1218609295df8d8$var$exitFootnoteDefinition,
            gfmFootnoteDefinitionLabelString: $b1218609295df8d8$var$exitFootnoteDefinitionLabelString,
            gfmFootnoteCall: $b1218609295df8d8$var$exitFootnoteCall,
            gfmFootnoteCallString: $b1218609295df8d8$var$exitFootnoteCallString
        }
    };
}
function $b1218609295df8d8$export$3727766a73a6c09f() {
    return {
        // This is on by default already.
        unsafe: [
            {
                character: "[",
                inConstruct: [
                    "phrasing",
                    "label",
                    "reference"
                ]
            }
        ],
        handlers: {
            footnoteDefinition: $b1218609295df8d8$var$footnoteDefinition,
            footnoteReference: $b1218609295df8d8$var$footnoteReference
        }
    };
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$enterFootnoteDefinition(token) {
    this.enter({
        type: "footnoteDefinition",
        identifier: "",
        label: "",
        children: []
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$enterFootnoteDefinitionLabelString() {
    this.buffer();
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node = /** @type {FootnoteDefinition} */ this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(this.sliceSerialize(token)).toLowerCase();
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$exitFootnoteDefinition(token) {
    this.exit(token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$enterFootnoteCall(token) {
    this.enter({
        type: "footnoteReference",
        identifier: "",
        label: ""
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$enterFootnoteCallString() {
    this.buffer();
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$exitFootnoteCallString(token) {
    const label = this.resume();
    const node = /** @type {FootnoteDefinition} */ this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = (0, $d172c91bf9d24083$export$806d55e226cfcd08)(this.sliceSerialize(token)).toLowerCase();
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $b1218609295df8d8$var$exitFootnoteCall(token) {
    this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {FootnoteReference} node
 */ function $b1218609295df8d8$var$footnoteReference(node, _, context, safeOptions) {
    const tracker = (0, $325c56aac767f616$export$6b2a7d5132615086)(safeOptions);
    let value = tracker.move("[^");
    const exit = context.enter("footnoteReference");
    const subexit = context.enter("reference");
    value += tracker.move((0, $b08bd3b190805b70$export$170b8c323eee7bec)(context, (0, $300d161149dff68b$export$c4ca1a6065421754)(node), {
        ...tracker.current(),
        before: value,
        after: "]"
    }));
    subexit();
    exit();
    value += tracker.move("]");
    return value;
}
/** @type {ToMarkdownHandle} */ function $b1218609295df8d8$var$footnoteReferencePeek() {
    return "[";
}
/**
 * @type {ToMarkdownHandle}
 * @param {FootnoteDefinition} node
 */ function $b1218609295df8d8$var$footnoteDefinition(node, _, context, safeOptions) {
    const tracker = (0, $325c56aac767f616$export$6b2a7d5132615086)(safeOptions);
    let value = tracker.move("[^");
    const exit = context.enter("footnoteDefinition");
    const subexit = context.enter("label");
    value += tracker.move((0, $b08bd3b190805b70$export$170b8c323eee7bec)(context, (0, $300d161149dff68b$export$c4ca1a6065421754)(node), {
        ...tracker.current(),
        before: value,
        after: "]"
    }));
    subexit();
    value += tracker.move("]:" + (node.children && node.children.length > 0 ? " " : ""));
    tracker.shift(4);
    value += tracker.move((0, $ef23088a57cfa1fa$export$7c3cf23d514b264a)((0, $5d811d6b2c99e2fb$export$134f7fdacfea8b16)(node, context, tracker.current()), $b1218609295df8d8$var$map));
    exit();
    return value;
}
/** @type {Map} */ function $b1218609295df8d8$var$map(line, index, blank) {
    if (index === 0) return line;
    return (blank ? "" : "    ") + line;
}


/**
 * @typedef {import('mdast').Delete} Delete
 *
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 *
 * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 */ /**
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('../types.js').Info} Info
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').PhrasingContent} PhrasingContent
 * @typedef {import('../types.js').State} State
 */ /**
 * Serialize the children of a parent that contains phrasing children.
 *
 * These children will be joined flush together.
 *
 * @param {Parent & {children: Array<PhrasingContent>}} parent
 *   Parent of flow nodes.
 * @param {State} state
 *   Info passed around about the current state.
 * @param {Info} info
 *   Info on where we are in the document we are generating.
 * @returns {string}
 *   Serialized children, joined together.
 */ function $ad0c4130838a8e9c$export$f4090a9439f37631(parent, state, info) {
    const indexStack = state.indexStack;
    const children = parent.children || [];
    /** @type {Array<string>} */ const results = [];
    let index = -1;
    let before = info.before;
    indexStack.push(-1);
    let tracker = state.createTracker(info);
    while(++index < children.length){
        const child = children[index];
        /** @type {string} */ let after;
        indexStack[indexStack.length - 1] = index;
        if (index + 1 < children.length) {
            /** @type {Handle} */ // @ts-expect-error: hush, it’s actually a `zwitch`.
            let handle = state.handle.handlers[children[index + 1].type];
            /** @type {Handle} */ // @ts-expect-error: hush, it’s actually a `zwitch`.
            if (handle && handle.peek) handle = handle.peek;
            after = handle ? handle(children[index + 1], parent, state, {
                before: "",
                after: "",
                ...tracker.current()
            }).charAt(0) : "";
        } else after = info.after;
        // In some cases, html (text) can be found in phrasing right after an eol.
        // When we’d serialize that, in most cases that would be seen as html
        // (flow).
        // As we can’t escape or so to prevent it from happening, we take a somewhat
        // reasonable approach: replace that eol with a space.
        // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
        if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
            results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
            before = " ";
            // To do: does this work to reset tracker?
            tracker = state.createTracker(info);
            tracker.move(results.join(""));
        }
        results.push(tracker.move(state.handle(child, parent, state, {
            ...tracker.current(),
            before: before,
            after: after
        })));
        before = results[results.length - 1].slice(-1);
    }
    indexStack.pop();
    return results.join("");
}



// To do: next major: expose functions.
// To do: next major: use `state`, state utilities.
/**
 * List of constructs that occur in phrasing (paragraphs, headings), but cannot
 * contain strikethrough.
 * So they sort of cancel each other out.
 * Note: could use a better name.
 *
 * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/8ce8dbf/lib/unsafe.js#L14>
 *
 * @type {Array<ConstructName>}
 */ const $70fd9ce1c734a36d$var$constructsWithoutStrikethrough = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
];
$70fd9ce1c734a36d$var$handleDelete.peek = $70fd9ce1c734a36d$var$peekDelete;
const $70fd9ce1c734a36d$export$34d64e709dd0b9bb = {
    canContainEols: [
        "delete"
    ],
    enter: {
        strikethrough: $70fd9ce1c734a36d$var$enterStrikethrough
    },
    exit: {
        strikethrough: $70fd9ce1c734a36d$var$exitStrikethrough
    }
};
const $70fd9ce1c734a36d$export$1632835bd2c84956 = {
    unsafe: [
        {
            character: "~",
            inConstruct: "phrasing",
            notInConstruct: $70fd9ce1c734a36d$var$constructsWithoutStrikethrough
        }
    ],
    handlers: {
        delete: $70fd9ce1c734a36d$var$handleDelete
    }
};
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $70fd9ce1c734a36d$var$enterStrikethrough(token) {
    this.enter({
        type: "delete",
        children: []
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $70fd9ce1c734a36d$var$exitStrikethrough(token) {
    this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {Delete} node
 */ function $70fd9ce1c734a36d$var$handleDelete(node, _, context, safeOptions) {
    const tracker = (0, $325c56aac767f616$export$6b2a7d5132615086)(safeOptions);
    const exit = context.enter("strikethrough");
    let value = tracker.move("~~");
    value += (0, $ad0c4130838a8e9c$export$f4090a9439f37631)(node, context, {
        ...tracker.current(),
        before: value,
        after: "~"
    });
    value += tracker.move("~~");
    exit();
    return value;
}
/** @type {ToMarkdownHandle} */ function $70fd9ce1c734a36d$var$peekDelete() {
    return "~";
}


/**
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableRow} TableRow
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('mdast').InlineCode} InlineCode
 *
 * @typedef {import('markdown-table').MarkdownTableOptions} MarkdownTableOptions
 *
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 *
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').Context} ToMarkdownContext
 * @typedef {import('mdast-util-to-markdown').SafeOptions} SafeOptions
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [tableCellPadding=true]
 *   Whether to add a space of padding between delimiters and cells.
 * @property {boolean | null | undefined} [tablePipeAlign=true]
 *   Whether to align the delimiters.
 * @property {MarkdownTableOptions['stringLength'] | null | undefined} [stringLength]
 *   Function to detect the length of table cell content, used when aligning
 *   the delimiters between cells
 */ 
/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 */ 
$9e9198850a90c441$export$91b9bee19a0d8569.peek = $9e9198850a90c441$var$inlineCodePeek;
function $9e9198850a90c441$export$91b9bee19a0d8569(node, _, state) {
    let value = node.value || "";
    let sequence = "`";
    let index = -1;
    // If there is a single grave accent on its own in the code, use a fence of
    // two.
    // If there are two in a row, use one.
    while(new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value))sequence += "`";
    // If this is not just spaces or eols (tabs don’t count), and either the
    // first or last character are a space, eol, or tick, then pad with spaces.
    if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) value = " " + value + " ";
    // We have a potential problem: certain characters after eols could result in
    // blocks being seen.
    // For example, if someone injected the string `'\n# b'`, then that would
    // result in an ATX heading.
    // We can’t escape characters in `inlineCode`, but because eols are
    // transformed to spaces when going from markdown to HTML anyway, we can swap
    // them out.
    while(++index < state.unsafe.length){
        const pattern = state.unsafe[index];
        const expression = (0, $1df5ad01bb2635c5$export$7993761911514c15)(pattern);
        /** @type {RegExpExecArray | null} */ let match;
        // Only look for `atBreak`s.
        // Btw: note that `atBreak` patterns will always start the regex at LF or
        // CR.
        if (!pattern.atBreak) continue;
        while(match = expression.exec(value)){
            let position = match.index;
            // Support CRLF (patterns only look for one of the characters).
            if (value.charCodeAt(position) === 10 /* `\n` */  && value.charCodeAt(position - 1) === 13 /* `\r` */ ) position--;
            value = value.slice(0, position) + " " + value.slice(match.index + 1);
        }
    }
    return sequence + value + sequence;
}
/**
 * @returns {string}
 */ function $9e9198850a90c441$var$inlineCodePeek() {
    return "`";
}


/**
 * @typedef Options
 *   Configuration (optional).
 * @property {string|null|ReadonlyArray<string|null|undefined>} [align]
 *   One style for all columns, or styles for their respective columns.
 *   Each style is either `'l'` (left), `'r'` (right), or `'c'` (center).
 *   Other values are treated as `''`, which doesn’t place the colon in the
 *   alignment row but does align left.
 *   *Only the lowercased first character is used, so `Right` is fine.*
 * @property {boolean} [padding=true]
 *   Whether to add a space of padding between delimiters and cells.
 *
 *   When `true`, there is padding:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there is no padding:
 *
 *   ```markdown
 *   |Alpha|B    |
 *   |-----|-----|
 *   |C    |Delta|
 *   ```
 * @property {boolean} [delimiterStart=true]
 *   Whether to begin each row with the delimiter.
 *
 *   > 👉 **Note**: please don’t use this: it could create fragile structures
 *   > that aren’t understandable to some markdown parsers.
 *
 *   When `true`, there are starting delimiters:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there are no starting delimiters:
 *
 *   ```markdown
 *   Alpha | B     |
 *   ----- | ----- |
 *   C     | Delta |
 *   ```
 * @property {boolean} [delimiterEnd=true]
 *   Whether to end each row with the delimiter.
 *
 *   > 👉 **Note**: please don’t use this: it could create fragile structures
 *   > that aren’t understandable to some markdown parsers.
 *
 *   When `true`, there are ending delimiters:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there are no ending delimiters:
 *
 *   ```markdown
 *   | Alpha | B
 *   | ----- | -----
 *   | C     | Delta
 *   ```
 * @property {boolean} [alignDelimiters=true]
 *   Whether to align the delimiters.
 *   By default, they are aligned:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   Pass `false` to make them staggered:
 *
 *   ```markdown
 *   | Alpha | B |
 *   | - | - |
 *   | C | Delta |
 *   ```
 * @property {(value: string) => number} [stringLength]
 *   Function to detect the length of table cell content.
 *   This is used when aligning the delimiters (`|`) between table cells.
 *   Full-width characters and emoji mess up delimiter alignment when viewing
 *   the markdown source.
 *   To fix this, you can pass this function, which receives the cell content
 *   and returns its “visible” size.
 *   Note that what is and isn’t visible depends on where the text is displayed.
 *
 *   Without such a function, the following:
 *
 *   ```js
 *   markdownTable([
 *     ['Alpha', 'Bravo'],
 *     ['中文', 'Charlie'],
 *     ['👩‍❤️‍👩', 'Delta']
 *   ])
 *   ```
 *
 *   Yields:
 *
 *   ```markdown
 *   | Alpha | Bravo |
 *   | - | - |
 *   | 中文 | Charlie |
 *   | 👩‍❤️‍👩 | Delta |
 *   ```
 *
 *   With [`string-width`](https://github.com/sindresorhus/string-width):
 *
 *   ```js
 *   import stringWidth from 'string-width'
 *
 *   markdownTable(
 *     [
 *       ['Alpha', 'Bravo'],
 *       ['中文', 'Charlie'],
 *       ['👩‍❤️‍👩', 'Delta']
 *     ],
 *     {stringLength: stringWidth}
 *   )
 *   ```
 *
 *   Yields:
 *
 *   ```markdown
 *   | Alpha | Bravo   |
 *   | ----- | ------- |
 *   | 中文  | Charlie |
 *   | 👩‍❤️‍👩    | Delta   |
 *   ```
 */ /**
 * @typedef {Options} MarkdownTableOptions
 * @todo
 *   Remove next major.
 */ /**
 * Generate a markdown ([GFM](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)) table..
 *
 * @param {ReadonlyArray<ReadonlyArray<string|null|undefined>>} table
 *   Table data (matrix of strings).
 * @param {Options} [options]
 *   Configuration (optional).
 * @returns {string}
 */ function $08b0980a9177e436$export$cdb7288612c4f3d6(table, options = {}) {
    const align = (options.align || []).concat();
    const stringLength = options.stringLength || $08b0980a9177e436$var$defaultStringLength;
    /** @type {Array<number>} Character codes as symbols for alignment per column. */ const alignments = [];
    /** @type {Array<Array<string>>} Cells per row. */ const cellMatrix = [];
    /** @type {Array<Array<number>>} Sizes of each cell per row. */ const sizeMatrix = [];
    /** @type {Array<number>} */ const longestCellByColumn = [];
    let mostCellsPerRow = 0;
    let rowIndex = -1;
    // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
    // do superfluous work when aligning, so optimize for aligning.
    while(++rowIndex < table.length){
        /** @type {Array<string>} */ const row = [];
        /** @type {Array<number>} */ const sizes = [];
        let columnIndex = -1;
        if (table[rowIndex].length > mostCellsPerRow) mostCellsPerRow = table[rowIndex].length;
        while(++columnIndex < table[rowIndex].length){
            const cell = $08b0980a9177e436$var$serialize(table[rowIndex][columnIndex]);
            if (options.alignDelimiters !== false) {
                const size = stringLength(cell);
                sizes[columnIndex] = size;
                if (longestCellByColumn[columnIndex] === undefined || size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
            }
            row.push(cell);
        }
        cellMatrix[rowIndex] = row;
        sizeMatrix[rowIndex] = sizes;
    }
    // Figure out which alignments to use.
    let columnIndex = -1;
    if (typeof align === "object" && "length" in align) while(++columnIndex < mostCellsPerRow)alignments[columnIndex] = $08b0980a9177e436$var$toAlignment(align[columnIndex]);
    else {
        const code = $08b0980a9177e436$var$toAlignment(align);
        while(++columnIndex < mostCellsPerRow)alignments[columnIndex] = code;
    }
    // Inject the alignment row.
    columnIndex = -1;
    /** @type {Array<string>} */ const row = [];
    /** @type {Array<number>} */ const sizes = [];
    while(++columnIndex < mostCellsPerRow){
        const code = alignments[columnIndex];
        let before = "";
        let after = "";
        if (code === 99 /* `c` */ ) {
            before = ":";
            after = ":";
        } else if (code === 108 /* `l` */ ) before = ":";
        else if (code === 114 /* `r` */ ) after = ":";
        // There *must* be at least one hyphen-minus in each alignment cell.
        let size = options.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
        const cell = before + "-".repeat(size) + after;
        if (options.alignDelimiters !== false) {
            size = before.length + size + after.length;
            if (size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
            sizes[columnIndex] = size;
        }
        row[columnIndex] = cell;
    }
    // Inject the alignment row.
    cellMatrix.splice(1, 0, row);
    sizeMatrix.splice(1, 0, sizes);
    rowIndex = -1;
    /** @type {Array<string>} */ const lines = [];
    while(++rowIndex < cellMatrix.length){
        const row = cellMatrix[rowIndex];
        const sizes = sizeMatrix[rowIndex];
        columnIndex = -1;
        /** @type {Array<string>} */ const line = [];
        while(++columnIndex < mostCellsPerRow){
            const cell = row[columnIndex] || "";
            let before = "";
            let after = "";
            if (options.alignDelimiters !== false) {
                const size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
                const code = alignments[columnIndex];
                if (code === 114 /* `r` */ ) before = " ".repeat(size);
                else if (code === 99 /* `c` */ ) {
                    if (size % 2) {
                        before = " ".repeat(size / 2 + 0.5);
                        after = " ".repeat(size / 2 - 0.5);
                    } else {
                        before = " ".repeat(size / 2);
                        after = before;
                    }
                } else after = " ".repeat(size);
            }
            if (options.delimiterStart !== false && !columnIndex) line.push("|");
            if (options.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
            // empty: there will be a closing space.
            !(options.alignDelimiters === false && cell === "") && (options.delimiterStart !== false || columnIndex)) line.push(" ");
            if (options.alignDelimiters !== false) line.push(before);
            line.push(cell);
            if (options.alignDelimiters !== false) line.push(after);
            if (options.padding !== false) line.push(" ");
            if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) line.push("|");
        }
        lines.push(options.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join(""));
    }
    return lines.join("\n");
}
/**
 * @param {string|null|undefined} [value]
 * @returns {string}
 */ function $08b0980a9177e436$var$serialize(value) {
    return value === null || value === undefined ? "" : String(value);
}
/**
 * @param {string} value
 * @returns {number}
 */ function $08b0980a9177e436$var$defaultStringLength(value) {
    return value.length;
}
/**
 * @param {string|null|undefined} value
 * @returns {number}
 */ function $08b0980a9177e436$var$toAlignment(value) {
    const code = typeof value === "string" ? value.codePointAt(0) : 0;
    return code === 67 /* `C` */  || code === 99 /* `c` */  ? 99 /* `c` */  : code === 76 /* `L` */  || code === 108 /* `l` */  ? 108 /* `l` */  : code === 82 /* `R` */  || code === 114 /* `r` */  ? 114 /* `r` */  : 0;
}


const $ca0c23d0f6965913$export$8bd0ec8ecf6adb7d = {
    enter: {
        table: $ca0c23d0f6965913$var$enterTable,
        tableData: $ca0c23d0f6965913$var$enterCell,
        tableHeader: $ca0c23d0f6965913$var$enterCell,
        tableRow: $ca0c23d0f6965913$var$enterRow
    },
    exit: {
        codeText: $ca0c23d0f6965913$var$exitCodeText,
        table: $ca0c23d0f6965913$var$exitTable,
        tableData: $ca0c23d0f6965913$var$exit,
        tableHeader: $ca0c23d0f6965913$var$exit,
        tableRow: $ca0c23d0f6965913$var$exit
    }
};
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $ca0c23d0f6965913$var$enterTable(token) {
    /** @type {Array<'left' | 'right' | 'center' | 'none'>} */ // @ts-expect-error: `align` is custom.
    const align = token._align;
    this.enter({
        type: "table",
        align: align.map((d)=>d === "none" ? null : d),
        children: []
    }, token);
    this.setData("inTable", true);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $ca0c23d0f6965913$var$exitTable(token) {
    this.exit(token);
    this.setData("inTable");
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $ca0c23d0f6965913$var$enterRow(token) {
    this.enter({
        type: "tableRow",
        children: []
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $ca0c23d0f6965913$var$exit(token) {
    this.exit(token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $ca0c23d0f6965913$var$enterCell(token) {
    this.enter({
        type: "tableCell",
        children: []
    }, token);
}
// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $ca0c23d0f6965913$var$exitCodeText(token) {
    let value = this.resume();
    if (this.getData("inTable")) value = value.replace(/\\([\\|])/g, $ca0c23d0f6965913$var$replace);
    const node = /** @type {InlineCode} */ this.stack[this.stack.length - 1];
    node.value = value;
    this.exit(token);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */ function $ca0c23d0f6965913$var$replace($0, $1) {
    // Pipes work, backslashes don’t (but can’t escape pipes).
    return $1 === "|" ? $1 : $0;
}
function $ca0c23d0f6965913$export$dafcad76ea6e0045(options) {
    const settings = options || {};
    const padding = settings.tableCellPadding;
    const alignDelimiters = settings.tablePipeAlign;
    const stringLength = settings.stringLength;
    const around = padding ? " " : "|";
    return {
        unsafe: [
            {
                character: "\r",
                inConstruct: "tableCell"
            },
            {
                character: "\n",
                inConstruct: "tableCell"
            },
            // A pipe, when followed by a tab or space (padding), or a dash or colon
            // (unpadded delimiter row), could result in a table.
            {
                atBreak: true,
                character: "|",
                after: "[	 :-]"
            },
            // A pipe in a cell must be encoded.
            {
                character: "|",
                inConstruct: "tableCell"
            },
            // A colon must be followed by a dash, in which case it could start a
            // delimiter row.
            {
                atBreak: true,
                character: ":",
                after: "-"
            },
            // A delimiter row can also start with a dash, when followed by more
            // dashes, a colon, or a pipe.
            // This is a stricter version than the built in check for lists, thematic
            // breaks, and setex heading underlines though:
            // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
            {
                atBreak: true,
                character: "-",
                after: "[:|-]"
            }
        ],
        handlers: {
            table: handleTable,
            tableRow: handleTableRow,
            tableCell: handleTableCell,
            inlineCode: inlineCodeWithTable
        }
    };
    /**
   * @type {ToMarkdownHandle}
   * @param {Table} node
   */ function handleTable(node, _, context, safeOptions) {
        return serializeData(handleTableAsData(node, context, safeOptions), node.align);
    }
    /**
   * This function isn’t really used normally, because we handle rows at the
   * table level.
   * But, if someone passes in a table row, this ensures we make somewhat sense.
   *
   * @type {ToMarkdownHandle}
   * @param {TableRow} node
   */ function handleTableRow(node, _, context, safeOptions) {
        const row = handleTableRowAsData(node, context, safeOptions);
        const value = serializeData([
            row
        ]);
        // `markdown-table` will always add an align row
        return value.slice(0, value.indexOf("\n"));
    }
    /**
   * @type {ToMarkdownHandle}
   * @param {TableCell} node
   */ function handleTableCell(node, _, context, safeOptions) {
        const exit = context.enter("tableCell");
        const subexit = context.enter("phrasing");
        const value = (0, $ad0c4130838a8e9c$export$f4090a9439f37631)(node, context, {
            ...safeOptions,
            before: around,
            after: around
        });
        subexit();
        exit();
        return value;
    }
    /**
   * @param {Array<Array<string>>} matrix
   * @param {Array<string | null | undefined> | null | undefined} [align]
   */ function serializeData(matrix, align) {
        return (0, $08b0980a9177e436$export$cdb7288612c4f3d6)(matrix, {
            align: align,
            alignDelimiters: // @ts-expect-error: `markdown-table` types should support `null`.
            alignDelimiters,
            padding: // @ts-expect-error: `markdown-table` types should support `null`.
            padding,
            stringLength: // @ts-expect-error: `markdown-table` types should support `null`.
            stringLength
        });
    }
    /**
   * @param {Table} node
   * @param {ToMarkdownContext} context
   * @param {SafeOptions} safeOptions
   */ function handleTableAsData(node, context, safeOptions) {
        const children = node.children;
        let index = -1;
        /** @type {Array<Array<string>>} */ const result = [];
        const subexit = context.enter("table");
        while(++index < children.length)result[index] = handleTableRowAsData(children[index], context, safeOptions);
        subexit();
        return result;
    }
    /**
   * @param {TableRow} node
   * @param {ToMarkdownContext} context
   * @param {SafeOptions} safeOptions
   */ function handleTableRowAsData(node, context, safeOptions) {
        const children = node.children;
        let index = -1;
        /** @type {Array<string>} */ const result = [];
        const subexit = context.enter("tableRow");
        while(++index < children.length)// Note: the positional info as used here is incorrect.
        // Making it correct would be impossible due to aligning cells?
        // And it would need copy/pasting `markdown-table` into this project.
        result[index] = handleTableCell(children[index], node, context, safeOptions);
        subexit();
        return result;
    }
    /**
   * @type {ToMarkdownHandle}
   * @param {InlineCode} node
   */ function inlineCodeWithTable(node, parent, context) {
        let value = (0, $9e9198850a90c441$export$91b9bee19a0d8569)(node, parent, context);
        if (context.stack.includes("tableCell")) value = value.replace(/\|/g, "\\$&");
        return value;
    }
}


/**
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 */ /**
 * @typedef {Extract<Root | Content, Parent>} Parents
 */ /**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('../types.js').Map} Map
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['bullet'], null | undefined>}
 */ function $5406c434144fc34c$export$7425517207a4d0ae(state) {
    const marker = state.options.bullet || "*";
    if (marker !== "*" && marker !== "+" && marker !== "-") throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return marker;
}


/**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['listItemIndent'], null | undefined>}
 */ function $bed1344bc73f7090$export$2d5358b63da92261(state) {
    const style = state.options.listItemIndent || "tab";
    // To do: remove in a major.
    // @ts-expect-error: deprecated.
    if (style === 1 || style === "1") return "one";
    if (style !== "tab" && style !== "one" && style !== "mixed") throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return style;
}


function $eda635173b80d801$export$76c7e83ecc9cdf05(node, parent, state, info) {
    const listItemIndent = (0, $bed1344bc73f7090$export$2d5358b63da92261)(state);
    let bullet = state.bulletCurrent || (0, $5406c434144fc34c$export$7425517207a4d0ae)(state);
    // Add the marker value for ordered lists.
    if (parent && parent.type === "list" && parent.ordered) bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
    let size = bullet.length + 1;
    if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) size = Math.ceil(size / 4) * 4;
    const tracker = state.createTracker(info);
    tracker.move(bullet + " ".repeat(size - bullet.length));
    tracker.shift(size);
    const exit = state.enter("listItem");
    const value = state.indentLines(state.containerFlow(node, tracker.current()), map);
    exit();
    return value;
    /** @type {Map} */ function map(line, index, blank) {
        if (index) return (blank ? "" : " ".repeat(size)) + line;
        return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
    }
}



const $9d39ab7beeb3335e$export$a427a608608b215f = {
    exit: {
        taskListCheckValueChecked: $9d39ab7beeb3335e$var$exitCheck,
        taskListCheckValueUnchecked: $9d39ab7beeb3335e$var$exitCheck,
        paragraph: $9d39ab7beeb3335e$var$exitParagraphWithTaskListItem
    }
};
const $9d39ab7beeb3335e$export$9975722e7e834b78 = {
    unsafe: [
        {
            atBreak: true,
            character: "-",
            after: "[:|-]"
        }
    ],
    handlers: {
        listItem: $9d39ab7beeb3335e$var$listItemWithTaskListItem
    }
};
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $9d39ab7beeb3335e$var$exitCheck(token) {
    const node = /** @type {ListItem} */ this.stack[this.stack.length - 2];
    // We’re always in a paragraph, in a list item.
    node.checked = token.type === "taskListCheckValueChecked";
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function $9d39ab7beeb3335e$var$exitParagraphWithTaskListItem(token) {
    const parent = /** @type {Parents} */ this.stack[this.stack.length - 2];
    if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
        const node = /** @type {Paragraph} */ this.stack[this.stack.length - 1];
        const head = node.children[0];
        if (head && head.type === "text") {
            const siblings = parent.children;
            let index = -1;
            /** @type {Paragraph | undefined} */ let firstParaghraph;
            while(++index < siblings.length){
                const sibling = siblings[index];
                if (sibling.type === "paragraph") {
                    firstParaghraph = sibling;
                    break;
                }
            }
            if (firstParaghraph === node) {
                // Must start with a space or a tab.
                head.value = head.value.slice(1);
                if (head.value.length === 0) node.children.shift();
                else if (node.position && head.position && typeof head.position.start.offset === "number") {
                    head.position.start.column++;
                    head.position.start.offset++;
                    node.position.start = Object.assign({}, head.position.start);
                }
            }
        }
    }
    this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {ListItem} node
 */ function $9d39ab7beeb3335e$var$listItemWithTaskListItem(node, parent, context, safeOptions) {
    const head = node.children[0];
    const checkable = typeof node.checked === "boolean" && head && head.type === "paragraph";
    const checkbox = "[" + (node.checked ? "x" : " ") + "] ";
    const tracker = (0, $325c56aac767f616$export$6b2a7d5132615086)(safeOptions);
    if (checkable) tracker.move(checkbox);
    let value = (0, $eda635173b80d801$export$76c7e83ecc9cdf05)(node, parent, context, {
        ...safeOptions,
        ...tracker.current()
    });
    if (checkable) value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
    return value;
    /**
   * @param {string} $0
   * @returns {string}
   */ function check($0) {
        return $0 + checkbox;
    }
}


function $dd33d6ff6c69cd07$export$95adae814eb7433e() {
    return [
        (0, $66c4f4aad072f65a$export$b6afdfff2163546f),
        (0, $b1218609295df8d8$export$c9d5ad4bdf6ff801)(),
        (0, $70fd9ce1c734a36d$export$34d64e709dd0b9bb),
        (0, $ca0c23d0f6965913$export$8bd0ec8ecf6adb7d),
        (0, $9d39ab7beeb3335e$export$a427a608608b215f)
    ];
}
function $dd33d6ff6c69cd07$export$ea77de6901e7c72b(options) {
    return {
        extensions: [
            (0, $66c4f4aad072f65a$export$d3ace9096b01c39d),
            (0, $b1218609295df8d8$export$3727766a73a6c09f)(),
            (0, $70fd9ce1c734a36d$export$1632835bd2c84956),
            (0, $ca0c23d0f6965913$export$dafcad76ea6e0045)(options),
            (0, $9d39ab7beeb3335e$export$9975722e7e834b78)
        ]
    };
}


function $d7530f4c779c68cb$export$2e2bcd8739ae039(options = {}) {
    const data = this.data();
    add("micromarkExtensions", (0, $64fbedd63a50255e$export$59ffe8c4d7a4aab2)(options));
    add("fromMarkdownExtensions", (0, $dd33d6ff6c69cd07$export$95adae814eb7433e)());
    add("toMarkdownExtensions", (0, $dd33d6ff6c69cd07$export$ea77de6901e7c72b)(options));
    /**
   * @param {string} field
   * @param {unknown} value
   */ function add(field, value) {
        const list = /** @type {unknown[]} */ // Other extensions
        /* c8 ignore next 2 */ data[field] ? data[field] : data[field] = [];
        list.push(value);
    }
}


/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownOptions
 * @typedef {Omit<ToMarkdownOptions, 'extensions'>} Options
 */ /**
 * @typedef {import('./types.js').Enter} Enter
 * @typedef {import('./types.js').Info} Info
 * @typedef {import('./types.js').Join} Join
 * @typedef {import('./types.js').FlowContent} FlowContent
 * @typedef {import('./types.js').Node} Node
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').Parent} Parent
 * @typedef {import('./types.js').PhrasingContent} PhrasingContent
 * @typedef {import('./types.js').SafeConfig} SafeConfig
 * @typedef {import('./types.js').State} State
 * @typedef {import('./types.js').TrackFields} TrackFields
 */ /**
 * @callback Handler
 *   Handle a value, with a certain ID field set to a certain value.
 *   The ID field is passed to `zwitch`, and it’s value is this function’s
 *   place on the `handlers` record.
 * @param {...any} parameters
 *   Arbitrary parameters passed to the zwitch.
 *   The first will be an object with a certain ID field set to a certain value.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback UnknownHandler
 *   Handle values that do have a certain ID field, but it’s set to a value
 *   that is not listed in the `handlers` record.
 * @param {unknown} value
 *   An object with a certain ID field set to an unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback InvalidHandler
 *   Handle values that do not have a certain ID field.
 * @param {unknown} value
 *   Any unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {void|null|undefined|never}
 *   This should crash or return nothing.
 */ /**
 * @template {InvalidHandler} [Invalid=InvalidHandler]
 * @template {UnknownHandler} [Unknown=UnknownHandler]
 * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
 * @typedef Options
 *   Configuration (required).
 * @property {Invalid} [invalid]
 *   Handler to use for invalid values.
 * @property {Unknown} [unknown]
 *   Handler to use for unknown values.
 * @property {Handlers} [handlers]
 *   Handlers to use.
 */ const $1a093c163236440f$var$own = {}.hasOwnProperty;
function $1a093c163236440f$export$d6a12bfbbedf6185(key, options) {
    const settings = options || {};
    /**
   * Handle one value.
   *
   * Based on the bound `key`, a respective handler will be called.
   * If `value` is not an object, or doesn’t have a `key` property, the special
   * “invalid” handler will be called.
   * If `value` has an unknown `key`, the special “unknown” handler will be
   * called.
   *
   * All arguments, and the context object, are passed through to the handler,
   * and it’s result is returned.
   *
   * @this {unknown}
   *   Any context object.
   * @param {unknown} [value]
   *   Any value.
   * @param {...unknown} parameters
   *   Arbitrary parameters passed to the zwitch.
   * @property {Handler} invalid
   *   Handle for values that do not have a certain ID field.
   * @property {Handler} unknown
   *   Handle values that do have a certain ID field, but it’s set to a value
   *   that is not listed in the `handlers` record.
   * @property {Handlers} handlers
   *   Record of handlers.
   * @returns {unknown}
   *   Anything.
   */ function one(value, ...parameters) {
        /** @type {Handler|undefined} */ let fn = one.invalid;
        const handlers = one.handlers;
        if (value && $1a093c163236440f$var$own.call(value, key)) {
            // @ts-expect-error Indexable.
            const id = String(value[key]);
            // @ts-expect-error Indexable.
            fn = $1a093c163236440f$var$own.call(handlers, id) ? handlers[id] : one.unknown;
        }
        if (fn) return fn.call(this, value, ...parameters);
    }
    one.handlers = settings.handlers || {};
    one.invalid = settings.invalid;
    one.unknown = settings.unknown;
    // @ts-expect-error: matches!
    return one;
}


/**
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').State} State
 */ /**
 * @param {State} base
 * @param {Options} extension
 * @returns {State}
 */ function $db3380ebc1fa4391$export$8d21e34596265fa2(base, extension) {
    let index = -1;
    /** @type {keyof Options} */ let key;
    // First do subextensions.
    if (extension.extensions) while(++index < extension.extensions.length)$db3380ebc1fa4391$export$8d21e34596265fa2(base, extension.extensions[index]);
    for(key in extension){
        if (key === "extensions") ;
        else if (key === "unsafe" || key === "join") /* c8 ignore next 2 */ // @ts-expect-error: hush.
        base[key] = [
            ...base[key] || [],
            ...extension[key] || []
        ];
        else if (key === "handlers") base[key] = Object.assign(base[key], extension[key] || {});
        else // @ts-expect-error: hush.
        base.options[key] = extension[key];
    }
    return base;
}


/**
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 * @typedef {import('../types.js').Map} Map
 */ /**
 * @param {Blockquote} node
 * @param {Parent | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */ function $4365692ef9082566$export$67dc04e652a298ca(node, _, state, info) {
    const exit = state.enter("blockquote");
    const tracker = state.createTracker(info);
    tracker.move("> ");
    tracker.shift(2);
    const value = state.indentLines(state.containerFlow(node, tracker.current()), $4365692ef9082566$var$map);
    exit();
    return value;
}
/** @type {Map} */ function $4365692ef9082566$var$map(line, _, blank) {
    return ">" + (blank ? "" : " ") + line;
}


/**
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ 
function $330a6366de3826e0$export$371da9dd35aba193(_, _1, state, info) {
    let index = -1;
    while(++index < state.unsafe.length){
        // If we can’t put eols in this construct (setext headings, tables), use a
        // space instead.
        if (state.unsafe[index].character === "\n" && (0, $cb161a8970a8d1f1$export$78221a09424368d)(state.stack, state.unsafe[index])) return /[ \t]/.test(info.before) ? "" : " ";
    }
    return "\\\n";
}


/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 * @typedef {import('../types.js').Map} Map
 */ /**
 * Get the count of the longest repeating streak of `substring` in `value`.
 *
 * @param {string} value
 *   Content to search in.
 * @param {string} substring
 *   Substring to look for, typically one character.
 * @returns {number}
 *   Count of most frequent adjacent `substring`s in `value`.
 */ function $cd3f479acde3d9e1$export$711675ff42d864f2(value, substring) {
    const source = String(value);
    let index = source.indexOf(substring);
    let expected = index;
    let count = 0;
    let max = 0;
    if (typeof substring !== "string") throw new TypeError("Expected substring");
    while(index !== -1){
        if (index === expected) {
            if (++count > max) max = count;
        } else count = 1;
        expected = index + substring.length;
        index = source.indexOf(substring, expected);
    }
    return max;
}


/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../types.js').State} State
 */ /**
 * @param {Code} node
 * @param {State} state
 * @returns {boolean}
 */ function $8638471292587e13$export$8c0df78a8cad9f4b(node, state) {
    return Boolean(!state.options.fences && node.value && // If there’s no info…
    !node.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
}


/**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['fence'], null | undefined>}
 */ function $f9e6b10e576a37a4$export$7487ee7cbb2e2919(state) {
    const marker = state.options.fence || "`";
    if (marker !== "`" && marker !== "~") throw new Error("Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`");
    return marker;
}


function $484d6dd7028926e7$export$6565f9f03506010b(node, _, state, info) {
    const marker = (0, $f9e6b10e576a37a4$export$7487ee7cbb2e2919)(state);
    const raw = node.value || "";
    const suffix = marker === "`" ? "GraveAccent" : "Tilde";
    if ((0, $8638471292587e13$export$8c0df78a8cad9f4b)(node, state)) {
        const exit = state.enter("codeIndented");
        const value = state.indentLines(raw, $484d6dd7028926e7$var$map);
        exit();
        return value;
    }
    const tracker = state.createTracker(info);
    const sequence = marker.repeat(Math.max((0, $cd3f479acde3d9e1$export$711675ff42d864f2)(raw, marker) + 1, 3));
    const exit = state.enter("codeFenced");
    let value = tracker.move(sequence);
    if (node.lang) {
        const subexit = state.enter(`codeFencedLang${suffix}`);
        value += tracker.move(state.safe(node.lang, {
            before: value,
            after: " ",
            encode: [
                "`"
            ],
            ...tracker.current()
        }));
        subexit();
    }
    if (node.lang && node.meta) {
        const subexit = state.enter(`codeFencedMeta${suffix}`);
        value += tracker.move(" ");
        value += tracker.move(state.safe(node.meta, {
            before: value,
            after: "\n",
            encode: [
                "`"
            ],
            ...tracker.current()
        }));
        subexit();
    }
    value += tracker.move("\n");
    if (raw) value += tracker.move(raw + "\n");
    value += tracker.move(sequence);
    exit();
    return value;
}
/** @type {Map} */ function $484d6dd7028926e7$var$map(line, _, blank) {
    return (blank ? "" : "    ") + line;
}


/**
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['quote'], null | undefined>}
 */ function $a5e1902e7df02284$export$7aeba63896b2719(state) {
    const marker = state.options.quote || '"';
    if (marker !== '"' && marker !== "'") throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
    return marker;
}


function $556ebabd58a12b6f$export$69f215ed977cdb73(node, _, state, info) {
    const quote = (0, $a5e1902e7df02284$export$7aeba63896b2719)(state);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const exit = state.enter("definition");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value = tracker.move("[");
    value += tracker.move(state.safe(state.associationId(node), {
        before: value,
        after: "]",
        ...tracker.current()
    }));
    value += tracker.move("]: ");
    subexit();
    if (// If there’s no url, or…
    !node.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = state.enter("destinationLiteral");
        value += tracker.move("<");
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: ">",
            ...tracker.current()
        }));
        value += tracker.move(">");
    } else {
        // No whitespace, raw is prettier.
        subexit = state.enter("destinationRaw");
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: node.title ? " " : "\n",
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = state.enter(`title${suffix}`);
        value += tracker.move(" " + quote);
        value += tracker.move(state.safe(node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    exit();
    return value;
}


/**
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['emphasis'], null | undefined>}
 */ function $de8ef9f3a9d8a4cf$export$f967eb786dea04e7(state) {
    const marker = state.options.emphasis || "*";
    if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`");
    return marker;
}


$f3639a8a024602ec$export$bef81ba411953b51.peek = $f3639a8a024602ec$var$emphasisPeek;
function $f3639a8a024602ec$export$bef81ba411953b51(node, _, state, info) {
    const marker = (0, $de8ef9f3a9d8a4cf$export$f967eb786dea04e7)(state);
    const exit = state.enter("emphasis");
    const tracker = state.createTracker(info);
    let value = tracker.move(marker);
    value += tracker.move(state.containerPhrasing(node, {
        before: value,
        after: marker,
        ...tracker.current()
    }));
    value += tracker.move(marker);
    exit();
    return value;
}
/**
 * @param {Emphasis} _
 * @param {Parent | undefined} _1
 * @param {State} state
 * @returns {string}
 */ function $f3639a8a024602ec$var$emphasisPeek(_, _1, state) {
    return state.options.emphasis || "*";
}


/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../types.js').State} State
 */ /**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */ /**
 * Check if `Child` can be a child of `Ancestor`.
 *
 * Returns the ancestor when `Child` can be a child of `Ancestor`, or returns
 * `never`.
 *
 * @template {Node} Ancestor
 *   Node type.
 * @template {Node} Child
 *   Node type.
 * @typedef {(
 *   Ancestor extends Parent
 *     ? Child extends Ancestor['children'][number]
 *       ? Ancestor
 *       : never
 *     : never
 * )} ParentsOf
 */ /**
 * @template {Node} [Visited=Node]
 *   Visited node type.
 * @template {Parent} [Ancestor=Parent]
 *   Ancestor type.
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends Node ? number | null : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends Node ? Ancestor | null : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 */ /**
 * Build a typed `Visitor` function from a node and all possible parents.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} Visited
 *   Node type.
 * @template {Parent} Ancestor
 *   Parent type.
 * @typedef {Visitor<Visited, ParentsOf<Ancestor, Visited>>} BuildVisitorFromMatch
 */ /**
 * Build a typed `Visitor` function from a list of descendants and a test.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     import('unist-util-visit-parents/complex-types.js').Matches<Descendant, Check>,
 *     Extract<Descendant, Parent>
 *   >
 * )} BuildVisitorFromDescendants
 */ /**
 * Build a typed `Visitor` function from a tree and a test.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} [Tree=Node]
 *   Node type.
 * @template {Test} [Check=string]
 *   Test type.
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     import('unist-util-visit-parents/complex-types.js').InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 */ 

const $2e2334da2ddd5a95$export$bf638b60ea8b89b7 = /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */ /**
     * @param {Node} tree
     * @param {Test} test
     * @param {Visitor} visitor
     * @param {boolean | null | undefined} [reverse]
     * @returns {void}
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
    }
    (0, $a85e4c9c75754d10$export$70008a21eb6de899)(tree, test, overload, reverse);
    /**
       * @param {Node} node
       * @param {Array<Parent>} parents
       */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
    }
};



function $d3959050bef90f0d$export$78863676235adfbc(node, state) {
    let literalWithBreak = false;
    // Look for literals with a line break.
    // Note that this also
    (0, $2e2334da2ddd5a95$export$bf638b60ea8b89b7)(node, (node)=>{
        if ("value" in node && /\r?\n|\r/.test(node.value) || node.type === "break") {
            literalWithBreak = true;
            return 0, $a85e4c9c75754d10$export$7f100f842f565dc9;
        }
    });
    return Boolean((!node.depth || node.depth < 3) && (0, $bfcd2ed5526988b5$export$f84e8e69fd4488a5)(node) && (state.options.setext || literalWithBreak));
}


function $889d82d8b03b9d4d$export$46e4a324ac90507f(node, _, state, info) {
    const rank = Math.max(Math.min(6, node.depth || 1), 1);
    const tracker = state.createTracker(info);
    if ((0, $d3959050bef90f0d$export$78863676235adfbc)(node, state)) {
        const exit = state.enter("headingSetext");
        const subexit = state.enter("phrasing");
        const value = state.containerPhrasing(node, {
            ...tracker.current(),
            before: "\n",
            after: "\n"
        });
        subexit();
        exit();
        return value + "\n" + (rank === 1 ? "=" : "-").repeat(// The whole size…
        value.length - // Minus the position of the character after the last EOL (or
        // 0 if there is none)…
        (Math.max(value.lastIndexOf("\r"), value.lastIndexOf("\n")) + 1));
    }
    const sequence = "#".repeat(rank);
    const exit = state.enter("headingAtx");
    const subexit = state.enter("phrasing");
    // Note: for proper tracking, we should reset the output positions when there
    // is no content returned, because then the space is not output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    tracker.move(sequence + " ");
    let value = state.containerPhrasing(node, {
        before: "# ",
        after: "\n",
        ...tracker.current()
    });
    if (/^[\t ]/.test(value)) // To do: what effect has the character reference on tracking?
    value = "&#x" + value.charCodeAt(0).toString(16).toUpperCase() + ";" + value.slice(1);
    value = value ? sequence + " " + value : sequence;
    if (state.options.closeAtx) value += " " + sequence;
    subexit();
    exit();
    return value;
}


/**
 * @typedef {import('mdast').HTML} HTML
 */ $3a9892bfebe44b55$export$c0bb0b647f701bb5.peek = $3a9892bfebe44b55$var$htmlPeek;
function $3a9892bfebe44b55$export$c0bb0b647f701bb5(node) {
    return node.value || "";
}
/**
 * @returns {string}
 */ function $3a9892bfebe44b55$var$htmlPeek() {
    return "<";
}


/**
 * @typedef {import('mdast').Image} Image
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ 
$c27fb30b38290fe3$export$5c452ff88e35e47d.peek = $c27fb30b38290fe3$var$imagePeek;
function $c27fb30b38290fe3$export$5c452ff88e35e47d(node, _, state, info) {
    const quote = (0, $a5e1902e7df02284$export$7aeba63896b2719)(state);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const exit = state.enter("image");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value = tracker.move("![");
    value += tracker.move(state.safe(node.alt, {
        before: value,
        after: "]",
        ...tracker.current()
    }));
    value += tracker.move("](");
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = state.enter("destinationLiteral");
        value += tracker.move("<");
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: ">",
            ...tracker.current()
        }));
        value += tracker.move(">");
    } else {
        // No whitespace, raw is prettier.
        subexit = state.enter("destinationRaw");
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: node.title ? " " : ")",
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = state.enter(`title${suffix}`);
        value += tracker.move(" " + quote);
        value += tracker.move(state.safe(node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    value += tracker.move(")");
    exit();
    return value;
}
/**
 * @returns {string}
 */ function $c27fb30b38290fe3$var$imagePeek() {
    return "!";
}


/**
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ $4bbf849aaf4fb0c8$export$f281796f6bc3b8db.peek = $4bbf849aaf4fb0c8$var$imageReferencePeek;
function $4bbf849aaf4fb0c8$export$f281796f6bc3b8db(node, _, state, info) {
    const type = node.referenceType;
    const exit = state.enter("imageReference");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value = tracker.move("![");
    const alt = state.safe(node.alt, {
        before: value,
        after: "]",
        ...tracker.current()
    });
    value += tracker.move(alt + "][");
    subexit();
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = state.stack;
    state.stack = [];
    subexit = state.enter("reference");
    // Note: for proper tracking, we should reset the output positions when we end
    // up making a `shortcut` reference, because then there is no brace output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    const reference = state.safe(state.associationId(node), {
        before: value,
        after: "]",
        ...tracker.current()
    });
    subexit();
    state.stack = stack;
    exit();
    if (type === "full" || !alt || alt !== reference) value += tracker.move(reference + "]");
    else if (type === "shortcut") // Remove the unwanted `[`.
    value = value.slice(0, -1);
    else value += tracker.move("]");
    return value;
}
/**
 * @returns {string}
 */ function $4bbf849aaf4fb0c8$var$imageReferencePeek() {
    return "!";
}



/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 * @typedef {import('../types.js').Exit} Exit
 */ 
/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../types.js').State} State
 */ 
function $62bef9a4fc59ac75$export$74cae3045e3179ed(node, state) {
    const raw = (0, $bfcd2ed5526988b5$export$f84e8e69fd4488a5)(node);
    return Boolean(!state.options.resourceLink && // If there’s a url…
    node.url && // And there’s a no title…
    !node.title && // And the content of `node` is a single text node…
    node.children && node.children.length === 1 && node.children[0].type === "text" && // And if the url is the same as the content…
    (raw === node.url || "mailto:" + raw === node.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node.url));
}


$e8d0bc52c8231214$export$9c30223ca0a664fb.peek = $e8d0bc52c8231214$var$linkPeek;
function $e8d0bc52c8231214$export$9c30223ca0a664fb(node, _, state, info) {
    const quote = (0, $a5e1902e7df02284$export$7aeba63896b2719)(state);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const tracker = state.createTracker(info);
    /** @type {Exit} */ let exit;
    /** @type {Exit} */ let subexit;
    if ((0, $62bef9a4fc59ac75$export$74cae3045e3179ed)(node, state)) {
        // Hide the fact that we’re in phrasing, because escapes don’t work.
        const stack = state.stack;
        state.stack = [];
        exit = state.enter("autolink");
        let value = tracker.move("<");
        value += tracker.move(state.containerPhrasing(node, {
            before: value,
            after: ">",
            ...tracker.current()
        }));
        value += tracker.move(">");
        exit();
        state.stack = stack;
        return value;
    }
    exit = state.enter("link");
    subexit = state.enter("label");
    let value = tracker.move("[");
    value += tracker.move(state.containerPhrasing(node, {
        before: value,
        after: "](",
        ...tracker.current()
    }));
    value += tracker.move("](");
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = state.enter("destinationLiteral");
        value += tracker.move("<");
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: ">",
            ...tracker.current()
        }));
        value += tracker.move(">");
    } else {
        // No whitespace, raw is prettier.
        subexit = state.enter("destinationRaw");
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: node.title ? " " : ")",
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = state.enter(`title${suffix}`);
        value += tracker.move(" " + quote);
        value += tracker.move(state.safe(node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    value += tracker.move(")");
    exit();
    return value;
}
/**
 * @param {Link} node
 * @param {Parent | undefined} _
 * @param {State} state
 * @returns {string}
 */ function $e8d0bc52c8231214$var$linkPeek(node, _, state) {
    return (0, $62bef9a4fc59ac75$export$74cae3045e3179ed)(node, state) ? "<" : "[";
}


/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ $0b844487de7f5bf4$export$e6c469b1b7b2bc6a.peek = $0b844487de7f5bf4$var$linkReferencePeek;
function $0b844487de7f5bf4$export$e6c469b1b7b2bc6a(node, _, state, info) {
    const type = node.referenceType;
    const exit = state.enter("linkReference");
    let subexit = state.enter("label");
    const tracker = state.createTracker(info);
    let value = tracker.move("[");
    const text = state.containerPhrasing(node, {
        before: value,
        after: "]",
        ...tracker.current()
    });
    value += tracker.move(text + "][");
    subexit();
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = state.stack;
    state.stack = [];
    subexit = state.enter("reference");
    // Note: for proper tracking, we should reset the output positions when we end
    // up making a `shortcut` reference, because then there is no brace output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    const reference = state.safe(state.associationId(node), {
        before: value,
        after: "]",
        ...tracker.current()
    });
    subexit();
    state.stack = stack;
    exit();
    if (type === "full" || !text || text !== reference) value += tracker.move(reference + "]");
    else if (type === "shortcut") // Remove the unwanted `[`.
    value = value.slice(0, -1);
    else value += tracker.move("]");
    return value;
}
/**
 * @returns {string}
 */ function $0b844487de7f5bf4$var$linkReferencePeek() {
    return "[";
}


/**
 * @typedef {import('mdast').List} List
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ 
/**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ 
function $1892571be43d188c$export$e6803bf0889262a1(state) {
    const bullet = (0, $5406c434144fc34c$export$7425517207a4d0ae)(state);
    const bulletOther = state.options.bulletOther;
    if (!bulletOther) return bullet === "*" ? "-" : "*";
    if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") throw new Error("Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (bulletOther === bullet) throw new Error("Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different");
    return bulletOther;
}


/**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['bulletOrdered'], null | undefined>}
 */ function $d032ef02a1ba4b54$export$98d522b78eddc19b(state) {
    const marker = state.options.bulletOrdered || ".";
    if (marker !== "." && marker !== ")") throw new Error("Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`");
    return marker;
}


/**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ 
function $ca2e239972adef8c$export$9b77c4f2ef3fadc8(state) {
    const bulletOrdered = (0, $d032ef02a1ba4b54$export$98d522b78eddc19b)(state);
    const bulletOrderedOther = state.options.bulletOrderedOther;
    if (!bulletOrderedOther) return bulletOrdered === "." ? ")" : ".";
    if (bulletOrderedOther !== "." && bulletOrderedOther !== ")") throw new Error("Cannot serialize items with `" + bulletOrderedOther + "` for `options.bulletOrderedOther`, expected `*`, `+`, or `-`");
    if (bulletOrderedOther === bulletOrdered) throw new Error("Expected `bulletOrdered` (`" + bulletOrdered + "`) and `bulletOrderedOther` (`" + bulletOrderedOther + "`) to be different");
    return bulletOrderedOther;
}


/**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['rule'], null | undefined>}
 */ function $d84b7b24c4aca5b8$export$d8d533ef24dba866(state) {
    const marker = state.options.rule || "*";
    if (marker !== "*" && marker !== "-" && marker !== "_") throw new Error("Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`");
    return marker;
}


function $93fdaa3cc2df30b4$export$8837f4fc672e936d(node, parent, state, info) {
    const exit = state.enter("list");
    const bulletCurrent = state.bulletCurrent;
    /** @type {string} */ let bullet = node.ordered ? (0, $d032ef02a1ba4b54$export$98d522b78eddc19b)(state) : (0, $5406c434144fc34c$export$7425517207a4d0ae)(state);
    /** @type {string} */ const bulletOther = node.ordered ? (0, $ca2e239972adef8c$export$9b77c4f2ef3fadc8)(state) : (0, $1892571be43d188c$export$e6803bf0889262a1)(state);
    const bulletLastUsed = state.bulletLastUsed;
    let useDifferentMarker = false;
    if (parent && // Explicit `other` set.
    (node.ordered ? state.options.bulletOrderedOther : state.options.bulletOther) && bulletLastUsed && bullet === bulletLastUsed) useDifferentMarker = true;
    if (!node.ordered) {
        const firstListItem = node.children ? node.children[0] : undefined;
        // If there’s an empty first list item directly in two list items,
        // we have to use a different bullet:
        //
        // ```markdown
        // * - *
        // ```
        //
        // …because otherwise it would become one big thematic break.
        if (// Bullet could be used as a thematic break marker:
        (bullet === "*" || bullet === "-") && // Empty first list item:
        firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
        state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
        state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0) useDifferentMarker = true;
        // If there’s a thematic break at the start of the first list item,
        // we have to use a different bullet:
        //
        // ```markdown
        // * ---
        // ```
        //
        // …because otherwise it would become one big thematic break.
        if ((0, $d84b7b24c4aca5b8$export$d8d533ef24dba866)(state) === bullet && firstListItem) {
            let index = -1;
            while(++index < node.children.length){
                const item = node.children[index];
                if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
                    useDifferentMarker = true;
                    break;
                }
            }
        }
    }
    if (useDifferentMarker) bullet = bulletOther;
    state.bulletCurrent = bullet;
    const value = state.containerFlow(node, info);
    state.bulletLastUsed = bullet;
    state.bulletCurrent = bulletCurrent;
    exit();
    return value;
}



/**
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @param {Paragraph} node
 * @param {Parent | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */ function $8ab2aa880abd4df6$export$9c206ddddb32a9b(node, _, state, info) {
    const exit = state.enter("paragraph");
    const subexit = state.enter("phrasing");
    const value = state.containerPhrasing(node, info);
    subexit();
    exit();
    return value;
}


/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('unist-util-is').AssertPredicate<PhrasingContent>} AssertPredicatePhrasing
 */ 
const $02dc476481ee8902$export$444c9dec66a6f08c = /** @type {AssertPredicatePhrasing} */ (0, $a2952a5583676625$export$9c68d69a4c5bbcf9)([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "link",
    "linkReference",
    "strong",
    "text"
]);


function $659e99a1a79c8622$export$e8e78c978b129247(node, _, state, info) {
    // Note: `html` nodes are ambiguous.
    const hasPhrasing = node.children.some((d)=>(0, $02dc476481ee8902$export$444c9dec66a6f08c)(d));
    const fn = hasPhrasing ? state.containerPhrasing : state.containerFlow;
    // @ts-expect-error: `root`s are supposed to have one type of content
    return fn.call(state, node, info);
}


/**
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['strong'], null | undefined>}
 */ function $d7eb068802f78556$export$b7ce17905d66a6c3(state) {
    const marker = state.options.strong || "*";
    if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`");
    return marker;
}


$ea011ac40813379b$export$59ae2c325a998f89.peek = $ea011ac40813379b$var$strongPeek;
function $ea011ac40813379b$export$59ae2c325a998f89(node, _, state, info) {
    const marker = (0, $d7eb068802f78556$export$b7ce17905d66a6c3)(state);
    const exit = state.enter("strong");
    const tracker = state.createTracker(info);
    let value = tracker.move(marker + marker);
    value += tracker.move(state.containerPhrasing(node, {
        before: value,
        after: marker,
        ...tracker.current()
    }));
    value += tracker.move(marker + marker);
    exit();
    return value;
}
/**
 * @param {Strong} _
 * @param {Parent | undefined} _1
 * @param {State} state
 * @returns {string}
 */ function $ea011ac40813379b$var$strongPeek(_, _1, state) {
    return state.options.strong || "*";
}


/**
 * @typedef {import('mdast').Text} Text
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Info} Info
 */ /**
 * @param {Text} node
 * @param {Parent | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */ function $3c2a8a26c993146f$export$6f093cfa640b7166(node, _, state, info) {
    return state.safe(node.value, info);
}


/**
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').State} State
 */ /**
 * @typedef {import('../types.js').State} State
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['ruleRepetition'], null | undefined>}
 */ function $d1dfa228b50050e6$export$72f02155834d89c4(state) {
    const repetition = state.options.ruleRepetition || 3;
    if (repetition < 3) throw new Error("Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more");
    return repetition;
}



function $2bf1b027ba1a9817$export$ba7b13e047416c03(_, _1, state) {
    const value = ((0, $d84b7b24c4aca5b8$export$d8d533ef24dba866)(state) + (state.options.ruleSpaces ? " " : "")).repeat((0, $d1dfa228b50050e6$export$72f02155834d89c4)(state));
    return state.options.ruleSpaces ? value.slice(0, -1) : value;
}


const $861b2e02d53c06f9$export$8f34ce051745d39e = {
    blockquote: $4365692ef9082566$export$67dc04e652a298ca,
    break: (0, $330a6366de3826e0$export$371da9dd35aba193),
    code: $484d6dd7028926e7$export$6565f9f03506010b,
    definition: $556ebabd58a12b6f$export$69f215ed977cdb73,
    emphasis: $f3639a8a024602ec$export$bef81ba411953b51,
    hardBreak: $330a6366de3826e0$export$371da9dd35aba193,
    heading: $889d82d8b03b9d4d$export$46e4a324ac90507f,
    html: $3a9892bfebe44b55$export$c0bb0b647f701bb5,
    image: $c27fb30b38290fe3$export$5c452ff88e35e47d,
    imageReference: $4bbf849aaf4fb0c8$export$f281796f6bc3b8db,
    inlineCode: $9e9198850a90c441$export$91b9bee19a0d8569,
    link: $e8d0bc52c8231214$export$9c30223ca0a664fb,
    linkReference: $0b844487de7f5bf4$export$e6c469b1b7b2bc6a,
    list: $93fdaa3cc2df30b4$export$8837f4fc672e936d,
    listItem: $eda635173b80d801$export$76c7e83ecc9cdf05,
    paragraph: $8ab2aa880abd4df6$export$9c206ddddb32a9b,
    root: $659e99a1a79c8622$export$e8e78c978b129247,
    strong: $ea011ac40813379b$export$59ae2c325a998f89,
    text: $3c2a8a26c993146f$export$6f093cfa640b7166,
    thematicBreak: $2bf1b027ba1a9817$export$ba7b13e047416c03
};


/**
 * @typedef {import('./types.js').Join} Join
 */ 

const $d8b40e7326f8eefb$export$f7e2c8231c57a8bd = [
    $d8b40e7326f8eefb$var$joinDefaults
];
/** @type {Join} */ function $d8b40e7326f8eefb$var$joinDefaults(left, right, parent, state) {
    // Indented code after list or another indented code.
    if (right.type === "code" && (0, $8638471292587e13$export$8c0df78a8cad9f4b)(right, state) && (left.type === "list" || left.type === right.type && (0, $8638471292587e13$export$8c0df78a8cad9f4b)(left, state))) return false;
    // Two lists with the same marker.
    if (left.type === "list" && left.type === right.type && Boolean(left.ordered) === Boolean(right.ordered) && !(left.ordered ? state.options.bulletOrderedOther : state.options.bulletOther)) return false;
    // Join children of a list or an item.
    // In which case, `parent` has a `spread` field.
    if ("spread" in parent && typeof parent.spread === "boolean") {
        if (left.type === "paragraph" && // Two paragraphs.
        (left.type === right.type || right.type === "definition" || // Paragraph followed by a setext heading.
        right.type === "heading" && (0, $d3959050bef90f0d$export$78863676235adfbc)(right, state))) return;
        return parent.spread ? 1 : 0;
    }
}


/**
 * @typedef {import('./types.js').Unsafe} Unsafe
 * @typedef {import('./types.js').ConstructName} ConstructName
 */ /**
 * List of constructs that occur in phrasing (paragraphs, headings), but cannot
 * contain things like attention (emphasis, strong), images, or links.
 * So they sort of cancel each other out.
 * Note: could use a better name.
 *
 * @type {Array<ConstructName>}
 */ const $a7f84ec365aa3ef2$var$fullPhrasingSpans = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
];
const $a7f84ec365aa3ef2$export$aa1c11b655786597 = [
    {
        character: "	",
        after: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: "	",
        before: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: "	",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde"
        ]
    },
    {
        character: "\r",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde",
            "codeFencedMetaGraveAccent",
            "codeFencedMetaTilde",
            "destinationLiteral",
            "headingAtx"
        ]
    },
    {
        character: "\n",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde",
            "codeFencedMetaGraveAccent",
            "codeFencedMetaTilde",
            "destinationLiteral",
            "headingAtx"
        ]
    },
    {
        character: " ",
        after: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: " ",
        before: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: " ",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde"
        ]
    },
    // An exclamation mark can start an image, if it is followed by a link or
    // a link reference.
    {
        character: "!",
        after: "\\[",
        inConstruct: "phrasing",
        notInConstruct: $a7f84ec365aa3ef2$var$fullPhrasingSpans
    },
    // A quote can break out of a title.
    {
        character: '"',
        inConstruct: "titleQuote"
    },
    // A number sign could start an ATX heading if it starts a line.
    {
        atBreak: true,
        character: "#"
    },
    {
        character: "#",
        inConstruct: "headingAtx",
        after: "(?:[\r\n]|$)"
    },
    // Dollar sign and percentage are not used in markdown.
    // An ampersand could start a character reference.
    {
        character: "&",
        after: "[#A-Za-z]",
        inConstruct: "phrasing"
    },
    // An apostrophe can break out of a title.
    {
        character: "'",
        inConstruct: "titleApostrophe"
    },
    // A left paren could break out of a destination raw.
    {
        character: "(",
        inConstruct: "destinationRaw"
    },
    // A left paren followed by `]` could make something into a link or image.
    {
        before: "\\]",
        character: "(",
        inConstruct: "phrasing",
        notInConstruct: $a7f84ec365aa3ef2$var$fullPhrasingSpans
    },
    // A right paren could start a list item or break out of a destination
    // raw.
    {
        atBreak: true,
        before: "\\d+",
        character: ")"
    },
    {
        character: ")",
        inConstruct: "destinationRaw"
    },
    // An asterisk can start thematic breaks, list items, emphasis, strong.
    {
        atBreak: true,
        character: "*",
        after: "(?:[ 	\r\n*])"
    },
    {
        character: "*",
        inConstruct: "phrasing",
        notInConstruct: $a7f84ec365aa3ef2$var$fullPhrasingSpans
    },
    // A plus sign could start a list item.
    {
        atBreak: true,
        character: "+",
        after: "(?:[ 	\r\n])"
    },
    // A dash can start thematic breaks, list items, and setext heading
    // underlines.
    {
        atBreak: true,
        character: "-",
        after: "(?:[ 	\r\n-])"
    },
    // A dot could start a list item.
    {
        atBreak: true,
        before: "\\d+",
        character: ".",
        after: "(?:[ 	\r\n]|$)"
    },
    // Slash, colon, and semicolon are not used in markdown for constructs.
    // A less than can start html (flow or text) or an autolink.
    // HTML could start with an exclamation mark (declaration, cdata, comment),
    // slash (closing tag), question mark (instruction), or a letter (tag).
    // An autolink also starts with a letter.
    // Finally, it could break out of a destination literal.
    {
        atBreak: true,
        character: "<",
        after: "[!/?A-Za-z]"
    },
    {
        character: "<",
        after: "[!/?A-Za-z]",
        inConstruct: "phrasing",
        notInConstruct: $a7f84ec365aa3ef2$var$fullPhrasingSpans
    },
    {
        character: "<",
        inConstruct: "destinationLiteral"
    },
    // An equals to can start setext heading underlines.
    {
        atBreak: true,
        character: "="
    },
    // A greater than can start block quotes and it can break out of a
    // destination literal.
    {
        atBreak: true,
        character: ">"
    },
    {
        character: ">",
        inConstruct: "destinationLiteral"
    },
    // Question mark and at sign are not used in markdown for constructs.
    // A left bracket can start definitions, references, labels,
    {
        atBreak: true,
        character: "["
    },
    {
        character: "[",
        inConstruct: "phrasing",
        notInConstruct: $a7f84ec365aa3ef2$var$fullPhrasingSpans
    },
    {
        character: "[",
        inConstruct: [
            "label",
            "reference"
        ]
    },
    // A backslash can start an escape (when followed by punctuation) or a
    // hard break (when followed by an eol).
    // Note: typical escapes are handled in `safe`!
    {
        character: "\\",
        after: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    // A right bracket can exit labels.
    {
        character: "]",
        inConstruct: [
            "label",
            "reference"
        ]
    },
    // Caret is not used in markdown for constructs.
    // An underscore can start emphasis, strong, or a thematic break.
    {
        atBreak: true,
        character: "_"
    },
    {
        character: "_",
        inConstruct: "phrasing",
        notInConstruct: $a7f84ec365aa3ef2$var$fullPhrasingSpans
    },
    // A grave accent can start code (fenced or text), or it can break out of
    // a grave accent code fence.
    {
        atBreak: true,
        character: "`"
    },
    {
        character: "`",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedMetaGraveAccent"
        ]
    },
    {
        character: "`",
        inConstruct: "phrasing",
        notInConstruct: $a7f84ec365aa3ef2$var$fullPhrasingSpans
    },
    // Left brace, vertical bar, right brace are not used in markdown for
    // constructs.
    // A tilde can start code (fenced).
    {
        atBreak: true,
        character: "~"
    }
];








function $1624d103b3cd89c0$export$49a1dda9e62e8ae6(tree, options = {}) {
    /** @type {State} */ const state = {
        enter: enter,
        indentLines: $ef23088a57cfa1fa$export$7c3cf23d514b264a,
        associationId: (0, $300d161149dff68b$export$c4ca1a6065421754),
        containerPhrasing: $1624d103b3cd89c0$var$containerPhrasingBound,
        containerFlow: $1624d103b3cd89c0$var$containerFlowBound,
        createTracker: (0, $325c56aac767f616$export$6b2a7d5132615086),
        safe: $1624d103b3cd89c0$var$safeBound,
        stack: [],
        unsafe: [],
        join: [],
        // @ts-expect-error: we’ll fill it next.
        handlers: {},
        options: {},
        indexStack: [],
        // @ts-expect-error: we’ll add `handle` later.
        handle: undefined
    };
    (0, $db3380ebc1fa4391$export$8d21e34596265fa2)(state, {
        unsafe: $a7f84ec365aa3ef2$export$aa1c11b655786597,
        join: $d8b40e7326f8eefb$export$f7e2c8231c57a8bd,
        handlers: $861b2e02d53c06f9$export$8f34ce051745d39e
    });
    (0, $db3380ebc1fa4391$export$8d21e34596265fa2)(state, options);
    if (state.options.tightDefinitions) (0, $db3380ebc1fa4391$export$8d21e34596265fa2)(state, {
        join: [
            $1624d103b3cd89c0$var$joinDefinition
        ]
    });
    state.handle = (0, $1a093c163236440f$export$d6a12bfbbedf6185)("type", {
        invalid: $1624d103b3cd89c0$var$invalid,
        unknown: $1624d103b3cd89c0$var$unknown,
        handlers: state.handlers
    });
    let result = state.handle(tree, undefined, state, {
        before: "\n",
        after: "\n",
        now: {
            line: 1,
            column: 1
        },
        lineShift: 0
    });
    if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) result += "\n";
    return result;
    /** @type {Enter} */ function enter(name) {
        state.stack.push(name);
        return exit;
        function exit() {
            state.stack.pop();
        }
    }
}
/**
 * @param {unknown} value
 * @returns {never}
 */ function $1624d103b3cd89c0$var$invalid(value) {
    throw new Error("Cannot handle value `" + value + "`, expected node");
}
/**
 * @param {unknown} node
 * @returns {never}
 */ function $1624d103b3cd89c0$var$unknown(node) {
    // @ts-expect-error: fine.
    throw new Error("Cannot handle unknown node `" + node.type + "`");
}
/** @type {Join} */ function $1624d103b3cd89c0$var$joinDefinition(left, right) {
    // No blank line between adjacent definitions.
    if (left.type === "definition" && left.type === right.type) return 0;
}
/**
 * Serialize the children of a parent that contains phrasing children.
 *
 * These children will be joined flush together.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Parent & {children: Array<PhrasingContent>}} parent
 *   Parent of flow nodes.
 * @param {Info} info
 *   Info on where we are in the document we are generating.
 * @returns {string}
 *   Serialized children, joined together.
 */ function $1624d103b3cd89c0$var$containerPhrasingBound(parent, info) {
    return (0, $ad0c4130838a8e9c$export$f4090a9439f37631)(parent, this, info);
}
/**
 * Serialize the children of a parent that contains flow children.
 *
 * These children will typically be joined by blank lines.
 * What they are joined by exactly is defined by `Join` functions.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Parent & {children: Array<FlowContent>}} parent
 *   Parent of flow nodes.
 * @param {TrackFields} info
 *   Info on where we are in the document we are generating.
 * @returns {string}
 *   Serialized children, joined by (blank) lines.
 */ function $1624d103b3cd89c0$var$containerFlowBound(parent, info) {
    return (0, $5d811d6b2c99e2fb$export$134f7fdacfea8b16)(parent, this, info);
}
/**
 * Make a string safe for embedding in markdown constructs.
 *
 * In markdown, almost all punctuation characters can, in certain cases,
 * result in something.
 * Whether they do is highly subjective to where they happen and in what
 * they happen.
 *
 * To solve this, `mdast-util-to-markdown` tracks:
 *
 * * Characters before and after something;
 * * What “constructs” we are in.
 *
 * This information is then used by this function to escape or encode
 * special characters.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {string | null | undefined} value
 *   Raw value to make safe.
 * @param {SafeConfig} config
 *   Configuration.
 * @returns {string}
 *   Serialized markdown safe for embedding.
 */ function $1624d103b3cd89c0$var$safeBound(value, config) {
    return (0, $b08bd3b190805b70$export$170b8c323eee7bec)(this, value, config);
}


function $159059a52c0b5697$export$2e2bcd8739ae039(options) {
    /** @type {import('unified').CompilerFunction<Node, string>} */ const compiler = (tree)=>{
        // Assume options.
        const settings = /** @type {Options} */ this.data("settings");
        return (0, $1624d103b3cd89c0$export$49a1dda9e62e8ae6)(tree, Object.assign({}, settings, options, {
            // Note: this option is not in the readme.
            // The goal is for it to be set by plugins on `data` instead of being
            // passed by users.
            extensions: /** @type {ToMarkdownOptions['extensions']} */ this.data("toMarkdownExtensions") || []
        }));
    };
    Object.assign(this, {
        Compiler: compiler
    });
}


var $c2b4d45d25be41ff$export$2e2bcd8739ae039 = (0, $159059a52c0b5697$export$2e2bcd8739ae039);


/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').List} List
 * @typedef {import('./search.js').SearchOptions} SearchOptions
 * @typedef {import('./contents.js').ContentsOptions} ContentsOptions
 */ /**
 * @typedef {Root | Content} Node
 * @typedef {SearchOptions & ContentsOptions & ExtraOptions} Options
 *
 * @typedef ExtraOptions
 *   Extra configuration fields.
 * @property {string | null | undefined} [heading]
 *   Heading to look for, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
 *
 * @typedef Result
 *   Results.
 * @property {number | null} index
 *   Index of the node right after the table of contents heading, `-1` if no
 *   heading was found, `null` if no `heading` was given.
 * @property {number | null} endIndex
 *   Index of the first node after `heading` that is not part of its section,
 *   `-1` if no heading was found, `null` if no `heading` was given, same as
 *   `index` if there are no nodes between `heading` and the first heading in
 *   the table of contents.
 * @property {List | null} map
 *   List representing the generated table of contents, `null` if no table of
 *   contents could be created, either because no heading was found or because
 *   no following headings were found.
 */ /**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('unist-util-is').Test} Test
 */ /**
 * @typedef {Root | Content} Node
 * @typedef {Heading['depth']} Rank
 *
 */ /**
 * @typedef SearchOptions
 *   Search configuration.
 * @property {Rank | null | undefined} [maxDepth=6]
 *   Maximum heading depth to include in the table of contents.
 *
 *   This is inclusive: when set to `3`, level three headings are included
 *   (those with three hashes, `###`).
 * @property {string | null | undefined} [skip]
 *   Headings to skip, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
 *
 *   Any heading matching this expression will not be present in the table of
 *   contents.
 * @property {Test} [parents]
 *   Allow headings to be children of certain node types (default: the to `toc`
 *   given `tree`, to only allow top-level headings).
 *
 *   Internally, uses `unist-util-is` to check, so `parents` can be any
 *   `is`-compatible test.
 *
 * @typedef SearchEntry
 *   Entry.
 * @property {string} id
 *   ID of entry.
 * @property {Array<PhrasingContent>} children
 *   Contents of entry.
 * @property {Rank} depth
 *   Rank of entry.
 *
 * @typedef SearchResult
 *   Results.
 * @property {number} index
 *   Where the contents section starts, if looking for a heading.
 * @property {number} endIndex
 *   Where the contents section ends, if looking for a heading.
 * @property {Array<SearchEntry>} map
 *   List of entries.
 */ // This module is generated by `script/`.
/* eslint-disable no-control-regex, no-misleading-character-class, no-useless-escape */ const $8e576dc50eebcf63$export$17b0f4d84dbfeedf = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;


const $03d636ec9f3b686f$var$own = Object.hasOwnProperty;
class $03d636ec9f3b686f$export$2e2bcd8739ae039 {
    /**
   * Create a new slug class.
   */ constructor(){
        /** @type {Record<string, number>} */ // eslint-disable-next-line no-unused-expressions
        this.occurrences;
        this.reset();
    }
    /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */ slug(value, maintainCase) {
        const self = this;
        let result = $03d636ec9f3b686f$export$74643d1fe038be1a(value, maintainCase === true);
        const originalSlug = result;
        while($03d636ec9f3b686f$var$own.call(self.occurrences, result)){
            self.occurrences[originalSlug]++;
            result = originalSlug + "-" + self.occurrences[originalSlug];
        }
        self.occurrences[result] = 0;
        return result;
    }
    /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */ reset() {
        this.occurrences = Object.create(null);
    }
}
function $03d636ec9f3b686f$export$74643d1fe038be1a(value, maintainCase) {
    if (typeof value !== "string") return "";
    if (!maintainCase) value = value.toLowerCase();
    return value.replace((0, $8e576dc50eebcf63$export$17b0f4d84dbfeedf), "").replace(/ /g, "-");
}





/**
 * Transform a string into an applicable expression.
 *
 * @param {string} value
 * @returns {RegExp}
 */ function $ef2e22938f161c74$export$6cca600862d7245d(value) {
    return new RegExp("^(" + value + ")$", "i");
}


const $5ba075f64d19ab2c$var$slugs = new (0, $03d636ec9f3b686f$export$2e2bcd8739ae039)();
function $5ba075f64d19ab2c$export$d76128d007d19019(root, expression, settings) {
    const skip = settings.skip ? (0, $ef2e22938f161c74$export$6cca600862d7245d)(settings.skip) : undefined;
    const parents = (0, $a2952a5583676625$export$9c68d69a4c5bbcf9)(settings.parents || ((d)=>d === root));
    /** @type {Array<SearchEntry>} */ const map = [];
    /** @type {number | undefined} */ let index;
    /** @type {number | undefined} */ let endIndex;
    /** @type {Heading | undefined} */ let opening;
    $5ba075f64d19ab2c$var$slugs.reset();
    // Visit all headings in `root`.  We `slug` all headings (to account for
    // duplicates), but only create a TOC from top-level headings (by default).
    (0, $2e2334da2ddd5a95$export$bf638b60ea8b89b7)(root, "heading", (node, position, parent)=>{
        const value = (0, $bfcd2ed5526988b5$export$f84e8e69fd4488a5)(node, {
            includeImageAlt: false
        });
        /** @type {string} */ // @ts-expect-error `hProperties` from <https://github.com/syntax-tree/mdast-util-to-hast>
        const id = node.data && node.data.hProperties && node.data.hProperties.id;
        const slug = $5ba075f64d19ab2c$var$slugs.slug(id || value);
        if (!parents(parent)) return;
        // Our opening heading.
        if (position !== null && expression && !index && expression.test(value)) {
            index = position + 1;
            opening = node;
            return;
        }
        // Our closing heading.
        if (position !== null && opening && !endIndex && node.depth <= opening.depth) endIndex = position;
        // A heading after the closing (if we were looking for one).
        if ((endIndex || !expression) && (!settings.maxDepth || node.depth <= settings.maxDepth) && (!skip || !skip.test(value))) map.push({
            depth: node.depth,
            children: node.children,
            id: slug
        });
    });
    return {
        index: index === undefined ? -1 : index,
        // <sindresorhus/eslint-plugin-unicorn#980>
        // @ts-expect-error Looks like a parent.
        endIndex: index === undefined ? -1 : endIndex || root.children.length,
        map: map
    };
}


/**
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
 * @typedef {import('./search.js').SearchEntry} SearchEntry
 */ /**
 * @typedef ContentsOptions
 *   Build configuration.
 * @property {boolean | null | undefined} [tight=false]
 *   Whether to compile list items tightly.
 * @property {boolean | null | undefined} [ordered=false]
 *   Whether to compile list items as an ordered list, otherwise they are
 *   unordered.
 * @property {string | null | undefined} [prefix=undefined]
 *   Add a prefix to links to headings in the table of contents.
 *
 *   Useful for example when later going from mdast to hast and sanitizing with
 *   `hast-util-sanitize`.
 */ 
function $2815b30a573329c9$export$fd59df041b888442(map, settings) {
    const { ordered: ordered = false , tight: tight = false , prefix: prefix = null  } = settings;
    /** @type {List} */ const table = {
        type: "list",
        ordered: ordered,
        spread: false,
        children: []
    };
    let minDepth = Number.POSITIVE_INFINITY;
    let index = -1;
    // Find minimum depth.
    while(++index < map.length)if (map[index].depth < minDepth) minDepth = map[index].depth;
    // Normalize depth.
    index = -1;
    while(++index < map.length)map[index].depth -= minDepth - 1;
    // Add TOC to list.
    index = -1;
    while(++index < map.length)$2815b30a573329c9$var$insert(map[index], table, {
        ordered: ordered,
        tight: tight,
        prefix: prefix
    });
    return table;
}
/**
 * Insert an entry into `parent`.
 *
 * @param {SearchEntry} entry
 * @param {List | ListItem} parent
 * @param {ContentsOptions} settings
 */ function $2815b30a573329c9$var$insert(entry, parent, settings) {
    let index = -1;
    const tail = parent.children[parent.children.length - 1];
    if (parent.type === "list") {
        if (entry.depth === 1) parent.children.push({
            type: "listItem",
            spread: false,
            children: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "link",
                            title: null,
                            url: "#" + (settings.prefix || "") + entry.id,
                            children: $2815b30a573329c9$var$all(entry.children)
                        }
                    ]
                }
            ]
        });
        else if (parent.children.length > 0) {
            const tail = parent.children[parent.children.length - 1];
            $2815b30a573329c9$var$insert(entry, tail, settings);
        } else {
            /** @type {ListItem} */ const item = {
                type: "listItem",
                spread: false,
                children: []
            };
            parent.children.push(item);
            $2815b30a573329c9$var$insert(entry, item, settings);
        }
    } else if (tail && tail.type === "list") {
        entry.depth--;
        $2815b30a573329c9$var$insert(entry, tail, settings);
    } else {
        /** @type {List} */ const item = {
            type: "list",
            ordered: settings.ordered,
            spread: false,
            children: []
        };
        parent.children.push(item);
        entry.depth--;
        $2815b30a573329c9$var$insert(entry, item, settings);
    }
    if (parent.type === "list" && !settings.tight) {
        parent.spread = false;
        while(++index < parent.children.length)if (parent.children[index].children.length > 1) {
            parent.spread = true;
            break;
        }
    } else parent.spread = !settings.tight;
}
/**
 * @param {Array<PhrasingContent>} [nodes]
 * @returns {Array<StaticPhrasingContent>}
 */ function $2815b30a573329c9$var$all(nodes) {
    /** @type {Array<StaticPhrasingContent>} */ let result = [];
    let index = -1;
    if (nodes) while(++index < nodes.length)result = result.concat($2815b30a573329c9$var$one(nodes[index]));
    return result;
}
/**
 * @param {PhrasingContent} node
 * @returns {StaticPhrasingContent | Array<StaticPhrasingContent>}
 */ function $2815b30a573329c9$var$one(node) {
    if (node.type === "footnoteReference") return [];
    if (node.type === "link" || node.type === "linkReference" || node.type === "footnote") return $2815b30a573329c9$var$all(node.children);
    if ("children" in node) {
        const { children: children , position: position , ...copy } = node;
        return Object.assign((0, (/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports)))(true, {}, copy), {
            children: $2815b30a573329c9$var$all(node.children)
        });
    }
    const { position: position , ...copy } = node;
    return (0, (/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports)))(true, {}, copy);
}



function $a36ec5f5a847f885$export$7f73341d82aa0ab(tree, options) {
    const settings = options || {};
    const heading = settings.heading ? (0, $ef2e22938f161c74$export$6cca600862d7245d)(settings.heading) : undefined;
    const result = (0, $5ba075f64d19ab2c$export$d76128d007d19019)(tree, heading, settings);
    return {
        index: heading ? result.index : null,
        endIndex: heading ? result.endIndex : null,
        map: result.map.length > 0 ? (0, $2815b30a573329c9$export$fd59df041b888442)(result.map, settings) : null
    };
}


/**
 * @typedef {import('unist').Node} Node
 */ /**
 * @typedef {Array<Node> | string} ChildrenOrValue
 *   List to use as `children` or value to use as `value`.
 *
 * @typedef {Record<string, unknown>} Props
 *   Other fields to add to the node.
 */ /**
 * Build a node.
 *
 * @param type
 *   Node type.
 * @param props
 *   Fields assigned to node.
 * @param value
 *   Children of node or value of `node` (cast to string).
 * @returns
 *   Built node.
 */ const $42a4bdf6855db294$export$3b14a55fb2447963 = /**
   * @type {(
   *   (<T extends string>(type: T) => {type: T}) &
   *   (<T extends string, P extends Props>(type: T, props: P) => {type: T} & P) &
   *   (<T extends string>(type: T, value: string) => {type: T, value: string}) &
   *   (<T extends string, P extends Props>(type: T, props: P, value: string) => {type: T, value: string} & P) &
   *   (<T extends string, C extends Array<Node>>(type: T, children: C) => {type: T, children: C}) &
   *   (<T extends string, P extends Props, C extends Array<Node>>(type: T, props: P, children: C) => {type: T, children: C} & P)
   * )}
   */ /**
     * @param {string} type
     * @param {Props | ChildrenOrValue | null | undefined} [props]
     * @param {ChildrenOrValue | null | undefined} [value]
     * @returns {Node}
     */ function(type, props, value) {
    /** @type {Node} */ const node = {
        type: String(type)
    };
    if ((value === undefined || value === null) && (typeof props === "string" || Array.isArray(props))) value = props;
    else Object.assign(node, props);
    if (Array.isArray(value)) // @ts-expect-error: create a parent.
    node.children = value;
    else if (value !== undefined && value !== null) // @ts-expect-error: create a literal.
    node.value = String(value);
    return node;
};


const $54bdd71fd28e2aea$export$7e553efa7989e1cf = "https://github.com/quilicicf/markdown-formatter"; // NOTE: must be the same as in package.json
const $54bdd71fd28e2aea$export$a3a70aa7a3b39543 = "https://github.com/quilicicf/markdown-formatter/issues"; // NOTE: must be the same as in package.json
const $54bdd71fd28e2aea$export$d5bdadeb30299f2a = {
    min: 2,
    max: 4
};
const $54bdd71fd28e2aea$export$b569b77ba4d08a5a = /^<!-- TOC START(.*) -->$/;
const $54bdd71fd28e2aea$export$7ee1dac3270bd4fe = /^<!-- TOC END(.*) -->$/;
const $54bdd71fd28e2aea$export$9d00029181b90361 = {
    NONE: "none",
    TOP: "top",
    TOC: "toc"
};
const $54bdd71fd28e2aea$export$116138d416609c54 = `<!-- Formatted by ${$54bdd71fd28e2aea$export$7e553efa7989e1cf} -->`;
const $54bdd71fd28e2aea$export$3722e1f52846c911 = `<!-- TOC END: Formatted by ${$54bdd71fd28e2aea$export$7e553efa7989e1cf} -->`;
const $54bdd71fd28e2aea$export$ccfc6da16e7b695c = {
    watermark: $54bdd71fd28e2aea$export$9d00029181b90361.NONE
};
const $54bdd71fd28e2aea$export$47362cd2804d02b3 = {
    bullet: "*",
    emphasis: "_",
    fences: true,
    gfm: true,
    listItemIndent: "1",
    rule: "-",
    ruleSpaces: false,
    strong: "_"
};


var $f00e1e19bdd3058b$export$2e2bcd8739ae039 = (part)=>part.type === "html" && (0, $54bdd71fd28e2aea$export$b569b77ba4d08a5a).test(part.value);



var $89a6ee6cce26b01b$export$2e2bcd8739ae039 = (part)=>part.type === "html" && (0, $54bdd71fd28e2aea$export$7ee1dac3270bd4fe).test(part.value);


var $8049247a3a5ba199$export$2e2bcd8739ae039 = (tree)=>tree.children.reduce((seed, part)=>{
        if (seed.tocStart && !seed.isInToc) return seed;
        if ((0, $89a6ee6cce26b01b$export$2e2bcd8739ae039)(part)) return {
            ...seed,
            isInToc: false
        };
        if ((0, $f00e1e19bdd3058b$export$2e2bcd8739ae039)(part)) return {
            ...seed,
            tocStart: part,
            tocStartIndex: seed.tocStartIndex,
            isInToc: true
        };
        return seed.isInToc ? {
            ...seed,
            tocContent: [
                ...seed.tocContent,
                part
            ],
            tocSize: seed.tocSize + 1
        } : {
            ...seed,
            tocStartIndex: seed.tocStartIndex + 1
        };
    }, {
        tocStartIndex: 0,
        tocSize: 0,
        tocStart: undefined,
        tocContent: [],
        isInToc: false
    });


/**
 * Takes a GLOBAL (add flag g) regex and executes it against the same string as long as it yields results.
 * The exec results are handled by the given matchHandler and returned in an array.
 */ const $817312938e2f3811$var$matchAll = (regex, string, matchHandler = (i)=>i, currentMatches = [])=>{
    const nextMatch = regex.exec(string);
    if (!nextMatch) return currentMatches;
    return [
        ...$817312938e2f3811$var$matchAll(regex, string, matchHandler, [
            ...currentMatches,
            matchHandler(nextMatch)
        ])
    ];
};
var $817312938e2f3811$export$2e2bcd8739ae039 = $817312938e2f3811$var$matchAll;



const $27da8d5ca2c82d11$var$CONFIG_CLEANERS = {
    min (minAsString) {
        try {
            return parseInt(minAsString, 10);
        } catch (error) {
            throw Error(`Min must be a number, got ${minAsString}`);
        }
    },
    max (maxAsString) {
        try {
            return parseInt(maxAsString, 10);
        } catch (error) {
            throw Error(`Min must be a number, got ${maxAsString}`);
        }
    }
};
var $27da8d5ca2c82d11$export$2e2bcd8739ae039 = (tocStart)=>{
    const configAsString = (0, $54bdd71fd28e2aea$export$b569b77ba4d08a5a).exec(tocStart)[1];
    const configItems = (0, $817312938e2f3811$export$2e2bcd8739ae039)(/([^\s:]+):([^\s]+)/g, configAsString, (match)=>({
            key: match[1],
            value: match[2]
        }));
    return configItems.map((configItem)=>{
        if (!$27da8d5ca2c82d11$var$CONFIG_CLEANERS[configItem.key]) return configItem;
        try {
            return {
                key: configItem.key,
                value: $27da8d5ca2c82d11$var$CONFIG_CLEANERS[configItem.key](configItem.value)
            };
        } catch (error) {
            process.stderr.write(error.message);
            return {};
        }
    }).filter(Boolean).reduce((seed, { value: value , key: key  })=>({
            ...seed,
            [key]: value
        }), {});
};


var $6bd05442ceb4daa2$export$2e2bcd8739ae039 = (number, { min: min , max: max  })=>number >= min && number <= max;



const $45243cd9e40e539d$var$transformer = (tree, file)=>{
    const tocStartFinder = (0, $8049247a3a5ba199$export$2e2bcd8739ae039)(tree);
    if (!tocStartFinder.tocStart) {
        file.info("No ToC start found, only simple formatting was done");
        return;
    }
    const tocConfiguration = {
        ...(0, $54bdd71fd28e2aea$export$d5bdadeb30299f2a),
        ...(0, $27da8d5ca2c82d11$export$2e2bcd8739ae039)(tocStartFinder.tocStart.value)
    };
    const filteredHeadings = tree.children.filter((part)=>part.type === "heading" && (0, $6bd05442ceb4daa2$export$2e2bcd8739ae039)(part.depth, tocConfiguration));
    const toc = (0, $a36ec5f5a847f885$export$7f73341d82aa0ab)((0, $42a4bdf6855db294$export$3b14a55fb2447963)("root", filteredHeadings)).map;
    tree.children.splice(tocStartFinder.tocStartIndex + 1, tocStartFinder.tocSize, toc);
};
var $45243cd9e40e539d$export$2e2bcd8739ae039 = ()=>$45243cd9e40e539d$var$transformer;





var $5e454db95f23c9d5$export$2e2bcd8739ae039 = (tree)=>{
    const tocEnd = tree.children.find((part)=>(0, $89a6ee6cce26b01b$export$2e2bcd8739ae039)(part));
    if (tocEnd) tocEnd.value = (0, $54bdd71fd28e2aea$export$3722e1f52846c911);
};



const $9819a8d429fed0be$var$isWatermarkTop = (part)=>part.type === "html" && part.value === (0, $54bdd71fd28e2aea$export$116138d416609c54);
var $9819a8d429fed0be$export$2e2bcd8739ae039 = (tree, file)=>{
    const watermarkIndex = tree.children // Watermark can be moved by user
    .map((part, index)=>({
            part: part,
            index: index
        })).filter(({ part: part  })=>$9819a8d429fed0be$var$isWatermarkTop(part)).map(({ index: index  })=>index).find(()=>true);
    if (typeof watermarkIndex === "number") {
        file.info(`Watermark found at index ${watermarkIndex}, destroying it to replace it`);
        tree.children.splice(watermarkIndex, 1);
    }
};


var $b8ebac65dd90ab58$export$2e2bcd8739ae039 = (watermarkType)=>()=>(tree, file)=>{
            (0, $9819a8d429fed0be$export$2e2bcd8739ae039)(tree, file);
            if (watermarkType === (0, $54bdd71fd28e2aea$export$9d00029181b90361).NONE) return;
            if (watermarkType === (0, $54bdd71fd28e2aea$export$9d00029181b90361).TOP) tree.children.splice(0, 0, {
                type: "html",
                value: (0, $54bdd71fd28e2aea$export$116138d416609c54)
            });
            if (watermarkType === (0, $54bdd71fd28e2aea$export$9d00029181b90361).TOC) (0, $5e454db95f23c9d5$export$2e2bcd8739ae039)(tree);
        };



var $dfad2de4ddbd453c$export$2e2bcd8739ae039 = async (sourceString, parameterMarkdownFormatterOptions = {}, parameterStringifyOptions = {})=>{
    const markdownFormatterOptions = {
        ...(0, $54bdd71fd28e2aea$export$ccfc6da16e7b695c),
        ...parameterMarkdownFormatterOptions
    };
    const stringifyOptions = {
        ...(0, $54bdd71fd28e2aea$export$47362cd2804d02b3),
        ...parameterStringifyOptions
    };
    return (0, $67f604d39c4880b2$export$7cc1b2fe10c52bb)().use((0, $998d99a10a985a7f$export$2e2bcd8739ae039)).use((0, $d7530f4c779c68cb$export$2e2bcd8739ae039)).use((0, $45243cd9e40e539d$export$2e2bcd8739ae039)).use((0, $b8ebac65dd90ab58$export$2e2bcd8739ae039)(markdownFormatterOptions.watermark)).use((0, $c2b4d45d25be41ff$export$2e2bcd8739ae039), stringifyOptions).process(sourceString);
};


//# sourceMappingURL=formatFromString.js.map
