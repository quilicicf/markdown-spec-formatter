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
function $2e2c1408d9e9d499$export$dd911e13ecb11e05(error) {
    if (error) throw error;
}


var $6e86b2ac314f5402$exports = {};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ $6e86b2ac314f5402$exports = function isBuffer(obj) {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};


var $09d2ed0130d345e0$exports = {};
'use strict';
var $09d2ed0130d345e0$var$hasOwn = Object.prototype.hasOwnProperty;
var $09d2ed0130d345e0$var$toStr = Object.prototype.toString;
var $09d2ed0130d345e0$var$defineProperty = Object.defineProperty;
var $09d2ed0130d345e0$var$gOPD = Object.getOwnPropertyDescriptor;
var $09d2ed0130d345e0$var$isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') return Array.isArray(arr);
    return $09d2ed0130d345e0$var$toStr.call(arr) === '[object Array]';
};
var $09d2ed0130d345e0$var$isPlainObject = function isPlainObject(obj) {
    if (!obj || $09d2ed0130d345e0$var$toStr.call(obj) !== '[object Object]') return false;
    var hasOwnConstructor = $09d2ed0130d345e0$var$hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && $09d2ed0130d345e0$var$hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return false;
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj);
    return typeof key === 'undefined' || $09d2ed0130d345e0$var$hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var $09d2ed0130d345e0$var$setProperty = function setProperty(target, options) {
    if ($09d2ed0130d345e0$var$defineProperty && options.name === '__proto__') $09d2ed0130d345e0$var$defineProperty(target, options.name, {
        enumerable: true,
        configurable: true,
        value: options.newValue,
        writable: true
    });
    else target[options.name] = options.newValue;
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var $09d2ed0130d345e0$var$getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
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
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {
        };
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== 'object' && typeof target !== 'function') target = {
    };
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
                    } else clone = src && $09d2ed0130d345e0$var$isPlainObject(src) ? src : {
                    };
                    // Never move original objects, clone them
                    $09d2ed0130d345e0$var$setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy)
                    });
                // Don't bring in undefined values
                } else if (typeof copy !== 'undefined') $09d2ed0130d345e0$var$setProperty(target, {
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
    if (Object.prototype.toString.call(value) !== '[object Object]') return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}


function $c822911a670f131a$export$91b56f5ca106aa43() {
    /** @type {Middleware[]} */ const fns = [];
    /** @type {Pipeline} */ const pipeline = {
        run: run,
        use: use
    };
    /** @type {Run} */ function run(...values) {
        let middlewareIndex = -1;
        /** @type {Callback} */ const callback = values.pop();
        if (typeof callback !== 'function') {
            throw new TypeError('Expected function as last argument, not ' + callback);
        }
        next(null, ...values);
        /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {any[]} output
     */ function next(error, ...output) {
            const fn = fns[++middlewareIndex];
            let index = -1;
            if (error) {
                callback(error);
                return;
            }
            // Copy non-nullish input into values.
            while(++index < values.length){
                if (output[index] === null || output[index] === undefined) {
                    output[index] = values[index];
                }
            }
            // Save the newly created `output` for the next call.
            values = output;
            // Next or done.
            if (fn) {
                $c822911a670f131a$export$4997ffc0176396a6(fn, next)(...output);
            } else {
                callback(null, ...output);
            }
        }
    }
    /** @type {Use} */ function use(middelware) {
        if (typeof middelware !== 'function') {
            throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
        }
        fns.push(middelware);
        return pipeline;
    }
    return pipeline;
}
function $c822911a670f131a$export$4997ffc0176396a6(middleware, callback) {
    /** @type {boolean} */ let called;
    /**
   * Call `middleware`.
   * @param {any[]} parameters
   * @returns {void}
   */ function wrapped(...parameters) {
        const fnExpectsCallback = middleware.length > parameters.length;
        /** @type {any} */ let result;
        if (fnExpectsCallback) {
            parameters.push(done);
        }
        try {
            result = middleware(...parameters);
        } catch (error) {
            /** @type {Error} */ const exception = error;
            // Well, this is quite the pickle.
            // `middleware` received a callback and called it synchronously, but that
            // threw an error.
            // The only thing left to do is to throw the thing instead.
            if (fnExpectsCallback && called) {
                throw exception;
            }
            return done(exception);
        }
        if (!fnExpectsCallback) {
            if (result instanceof Promise) {
                result.then(then, done);
            } else if (result instanceof Error) {
                done(result);
            } else {
                then(result);
            }
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
    return wrapped;
}





const $5fe37d3ed8a97b90$export$97a5aaf482767187 = process;


var $62747123a0a6bbca$var$own = {
}.hasOwnProperty;
function $62747123a0a6bbca$export$c304dd45fe166145(value) {
    // Nothing.
    if (!value || typeof value !== 'object') return '';
    // Node.
    if ($62747123a0a6bbca$var$own.call(value, 'position') || $62747123a0a6bbca$var$own.call(value, 'type')) // @ts-ignore looks like a node.
    return $62747123a0a6bbca$var$position(value.position);
    // Position.
    if ($62747123a0a6bbca$var$own.call(value, 'start') || $62747123a0a6bbca$var$own.call(value, 'end')) // @ts-ignore looks like a position.
    return $62747123a0a6bbca$var$position(value);
    // Point.
    if ($62747123a0a6bbca$var$own.call(value, 'line') || $62747123a0a6bbca$var$own.call(value, 'column')) // @ts-ignore looks like a point.
    return $62747123a0a6bbca$var$point(value);
    // ?
    return '';
}
/**
 * @param {Point} point
 * @returns {string}
 */ function $62747123a0a6bbca$var$point(point) {
    return $62747123a0a6bbca$var$index(point && point.line) + ':' + $62747123a0a6bbca$var$index(point && point.column);
}
/**
 * @param {Position} pos
 * @returns {string}
 */ function $62747123a0a6bbca$var$position(pos) {
    return $62747123a0a6bbca$var$point(pos && pos.start) + '-' + $62747123a0a6bbca$var$point(pos && pos.end);
}
/**
 * @param {number} value
 * @returns {number}
 */ function $62747123a0a6bbca$var$index(value) {
    return value && typeof value === 'number' ? value : 1;
}


class $511efc99b1adac5b$export$752e5c445fe834ef extends Error {
    /**
   * Constructor of a message for `reason` at `place` from `origin`.
   * When an error is passed in as `reason`, copies the `stack`.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   */ constructor(reason, place, origin){
        /** @type {[string?, string?]} */ var parts = [
            null,
            null
        ];
        /** @type {Position} */ var position = {
            start: {
                line: null,
                column: null
            },
            end: {
                line: null,
                column: null
            }
        };
        /** @type {number} */ var index;
        super();
        if (typeof place === 'string') {
            origin = place;
            place = null;
        }
        if (typeof origin === 'string') {
            index = origin.indexOf(':');
            if (index === -1) parts[1] = origin;
            else {
                parts[0] = origin.slice(0, index);
                parts[1] = origin.slice(index + 1);
            }
        }
        if (place) {
            // Node.
            if ('type' in place || 'position' in place) {
                if (place.position) position = place.position;
            } else if ('start' in place || 'end' in place) // @ts-ignore Looks like a position.
            position = place;
            else if ('line' in place || 'column' in place) // @ts-ignore Looks like a point.
            position.start = place;
        }
        // Fields from `Error`
        this.name = $62747123a0a6bbca$export$c304dd45fe166145(place) || '1:1';
        this.message = typeof reason === 'object' ? reason.message : reason;
        this.stack = typeof reason === 'object' ? reason.stack : '';
        /**
     * Reason for message.
     * @type {string}
     */ this.reason = this.message;
        /**
     * Starting line of error.
     * @type {number?}
     */ this.line = position.start.line;
        /**
     * Starting column of error.
     * @type {number?}
     */ this.column = position.start.column;
        /**
     * Namespace of warning.
     * @type {string?}
     */ this.source = parts[0];
        /**
     * Category of message.
     * @type {string?}
     */ this.ruleId = parts[1];
        /**
     * Full range information, when available.
     * Has start and end properties, both set to an object with line and column, set to number?.
     * @type {Position?}
     */ this.position = position;
        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.
        /* eslint-disable no-unused-expressions */ /**
     * You may add a file property with a path of a file (used throughout the VFile ecosystem).
     * @type {string?}
     */ this.file;
        /**
     * If true, marks associated file as no longer processable.
     * @type {boolean?}
     */ this.fatal;
        /**
     * You may add a url property with a link to documentation for the message.
     * @type {string?}
     */ this.url;
        /**
     * You may add a note property with a long form description of the message (supported by vfile-reporter).
     * @type {string?}
     */ this.note;
    /* eslint-enable no-unused-expressions */ }
}
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.file = '';
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.name = '';
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.reason = '';
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.message = '';
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.stack = '';
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.fatal = null;
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.column = null;
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.line = null;
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.source = null;
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.ruleId = null;
$511efc99b1adac5b$export$752e5c445fe834ef.prototype.position = null;


// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var $3965753896da6f59$var$order = [
    'history',
    'path',
    'basename',
    'stem',
    'extname',
    'dirname'
];
class $3965753896da6f59$export$93dff69eb10dc7ce {
    /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, treats it as `{value: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All other given fields are set on the newly created `VFile`.
   *
   * Path related properties are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {VFileCompatible} [value]
   */ constructor(value){
        var index = -1;
        /** @type {VFileOptions} */ var options;
        /** @type {string} */ var prop;
        if (!value) options = {
        };
        else if (typeof value === 'string' || (/*@__PURE__*/$parcel$interopDefault($6e86b2ac314f5402$exports))(value)) // @ts-ignore Looks like a buffer.
        options = {
            value: value
        };
        else // @ts-ignore Looks like file or options.
        options = value;
        /**
     * Place to store custom information.
     * It’s OK to store custom data directly on the file, moving it to `data`
     * gives a little more privacy.
     * @type {Object.<string, unknown>}
     */ this.data = {
        };
        /**
     * List of messages associated with the file.
     * @type {Array.<VFileMessage>}
     */ this.messages = [];
        /**
     * List of file paths the file moved between.
     * @type {Array.<string>}
     */ this.history = [];
        /**
     * Base of `path`.
     * Defaults to `process.cwd()` (`/` in browsers).
     * @type {string}
     */ this.cwd = $5fe37d3ed8a97b90$export$97a5aaf482767187.cwd();
        /* eslint-disable no-unused-expressions */ /**
     * Raw value.
     * @type {VFileValue}
     */ this.value;
        // The below are non-standard, they are “well-known”.
        // As in, used in several tools.
        /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */ this.stored;
        /**
     * Sometimes files have a non-string representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */ this.result;
        /* eslint-enable no-unused-expressions */ // Set path related properties in the correct order.
        while(++index < $3965753896da6f59$var$order.length){
            prop = $3965753896da6f59$var$order[index];
            // Note: we specifically use `in` instead of `hasOwnProperty` to accept
            // `vfile`s too.
            if (prop in options && options[prop] !== undefined) this[prop] = prop === 'history' ? options[prop].concat() : options[prop];
        }
        // Set non-path related properties.
        for(prop in options)if (!$3965753896da6f59$var$order.includes(prop)) this[prop] = options[prop];
    }
    /**
   * Access full path (`~/index.min.js`).
   */ get path() {
        return this.history[this.history.length - 1];
    }
    /**
   * Set full path (`~/index.min.js`).
   * Cannot be nullified.
   */ set path(path) {
        $3965753896da6f59$var$assertNonEmpty(path, 'path');
        if (this.path !== path) this.history.push(path);
    }
    /**
   * Access parent path (`~`).
   */ get dirname() {
        return typeof this.path === 'string' ? $b134cfc87243defb$re_export$path.dirname(this.path) : undefined;
    }
    /**
   * Set parent path (`~`).
   * Cannot be set if there's no `path` yet.
   */ set dirname(dirname) {
        $3965753896da6f59$var$assertPath(this.path, 'dirname');
        this.path = $b134cfc87243defb$re_export$path.join(dirname || '', this.basename);
    }
    /**
   * Access basename (including extname) (`index.min.js`).
   */ get basename() {
        return typeof this.path === 'string' ? $b134cfc87243defb$re_export$path.basename(this.path) : undefined;
    }
    /**
   * Set basename (`index.min.js`).
   * Cannot contain path separators.
   * Cannot be nullified either (use `file.path = file.dirname` instead).
   */ set basename(basename) {
        $3965753896da6f59$var$assertNonEmpty(basename, 'basename');
        $3965753896da6f59$var$assertPart(basename, 'basename');
        this.path = $b134cfc87243defb$re_export$path.join(this.dirname || '', basename);
    }
    /**
   * Access extname (including dot) (`.js`).
   */ get extname() {
        return typeof this.path === 'string' ? $b134cfc87243defb$re_export$path.extname(this.path) : undefined;
    }
    /**
   * Set extname (including dot) (`.js`).
   * Cannot be set if there's no `path` yet and cannot contain path separators.
   */ set extname(extname) {
        $3965753896da6f59$var$assertPart(extname, 'extname');
        $3965753896da6f59$var$assertPath(this.path, 'extname');
        if (extname) {
            if (extname.charCodeAt(0) !== 46 /* `.` */ ) throw new Error('`extname` must start with `.`');
            if (extname.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
        }
        this.path = $b134cfc87243defb$re_export$path.join(this.dirname, this.stem + (extname || ''));
    }
    /**
   * Access stem (w/o extname) (`index.min`).
   */ get stem() {
        return typeof this.path === 'string' ? $b134cfc87243defb$re_export$path.basename(this.path, this.extname) : undefined;
    }
    /**
   * Set stem (w/o extname) (`index.min`).
   * Cannot be nullified, and cannot contain path separators.
   */ set stem(stem) {
        $3965753896da6f59$var$assertNonEmpty(stem, 'stem');
        $3965753896da6f59$var$assertPart(stem, 'stem');
        this.path = $b134cfc87243defb$re_export$path.join(this.dirname || '', stem + (this.extname || ''));
    }
    /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
   * @returns {string}
   */ toString(encoding) {
        // @ts-ignore string’s don’t accept the parameter, but buffers do.
        return (this.value || '').toString(encoding);
    }
    /**
   * Create a message and associates it w/ the file.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */ message(reason, place, origin) {
        var message = new $511efc99b1adac5b$export$752e5c445fe834ef(reason, place, origin);
        if (this.path) {
            message.name = this.path + ':' + message.name;
            message.file = this.path;
        }
        message.fatal = false;
        this.messages.push(message);
        return message;
    }
    /**
   * Info: create a message, associate it with the file, and mark the fatality
   * as `null`.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */ info(reason, place, origin) {
        var message = this.message(reason, place, origin);
        message.fatal = null;
        return message;
    }
    /**
   * Fail: create a message, associate it with the file, mark the fatality as
   * `true`.
   * Note: fatal errors mean a file is no longer processable.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {never}
   */ fail(reason, place, origin) {
        var message = this.message(reason, place, origin);
        message.fatal = true;
        throw message;
    }
}
/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string} part
 * @param {string} name
 * @returns {void}
 */ function $3965753896da6f59$var$assertPart(part, name) {
    if (part && part.includes($b134cfc87243defb$re_export$path.sep)) throw new Error('`' + name + '` cannot be a path: did not expect `' + $b134cfc87243defb$re_export$path.sep + '`');
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string} part
 * @param {string} name
 * @returns {void}
 */ function $3965753896da6f59$var$assertNonEmpty(part, name) {
    if (!part) throw new Error('`' + name + '` cannot be empty');
}
/**
 * Assert `path` exists.
 *
 * @param {string} path
 * @param {string} name
 * @returns {void}
 */ function $3965753896da6f59$var$assertPath(path, name) {
    if (!path) throw new Error('Setting `' + name + '` requires `path` to be set too');
}



const $67f604d39c4880b2$export$7cc1b2fe10c52bb = $67f604d39c4880b2$var$base().freeze();
const $67f604d39c4880b2$var$own = {
}.hasOwnProperty;
// Function to create the first processor.
/**
 * @returns {Processor}
 */ function $67f604d39c4880b2$var$base() {
    const transformers = $c822911a670f131a$export$91b56f5ca106aa43();
    /** @type {Processor['attachers']} */ const attachers = [];
    /** @type {Record<string, unknown>} */ let namespace = {
    };
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
    // Create a new processor based on the processor in the current scope.
    /** @type {Processor} */ function processor() {
        const destination = $67f604d39c4880b2$var$base();
        let index = -1;
        while(++index < attachers.length){
            destination.use(...attachers[index]);
        }
        destination.data((/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports))(true, {
        }, namespace));
        return destination;
    }
    /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */ function data(key, value) {
        if (typeof key === 'string') {
            // Set `key`.
            if (arguments.length === 2) {
                $67f604d39c4880b2$var$assertUnfrozen('data', frozen);
                namespace[key] = value;
                return processor;
            }
            // Get `key`.
            return $67f604d39c4880b2$var$own.call(namespace, key) && namespace[key] || null;
        }
        // Set space.
        if (key) {
            $67f604d39c4880b2$var$assertUnfrozen('data', frozen);
            namespace = key;
            return processor;
        }
        // Get space.
        return namespace;
    }
    /** @type {Processor['freeze']} */ function freeze() {
        if (frozen) {
            return processor;
        }
        while(++freezeIndex < attachers.length){
            const [attacher, ...options] = attachers[freezeIndex];
            if (options[0] === false) {
                continue;
            }
            if (options[0] === true) {
                options[1] = undefined;
            }
            /** @type {Transformer|void} */ const transformer = attacher.call(processor, ...options);
            if (typeof transformer === 'function') {
                transformers.use(transformer);
            }
        }
        frozen = true;
        freezeIndex = Number.POSITIVE_INFINITY;
        return processor;
    }
    /**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */ function use(value1, ...options1) {
        /** @type {Record<string, unknown>|undefined} */ let settings;
        $67f604d39c4880b2$var$assertUnfrozen('use', frozen);
        if (value1 === null || value1 === undefined) {
        // Empty.
        } else if (typeof value1 === 'function') {
            addPlugin(value1, ...options1);
        } else if (typeof value1 === 'object') {
            if (Array.isArray(value1)) {
                addList(value1);
            } else {
                addPreset(value1);
            }
        } else {
            throw new TypeError('Expected usable value, not `' + value1 + '`');
        }
        if (settings) {
            namespace.settings = Object.assign(namespace.settings || {
            }, settings);
        }
        return processor;
        /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */ function add(value) {
            if (typeof value === 'function') {
                addPlugin(value);
            } else if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    const [plugin, ...options] = value;
                    addPlugin(plugin, ...options);
                } else {
                    addPreset(value);
                }
            } else {
                throw new TypeError('Expected usable value, not `' + value + '`');
            }
        }
        /**
     * @param {Preset} result
     * @returns {void}
     */ function addPreset(result) {
            addList(result.plugins);
            if (result.settings) {
                settings = Object.assign(settings || {
                }, result.settings);
            }
        }
        /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */ function addList(plugins) {
            let index = -1;
            if (plugins === null || plugins === undefined) {
            // Empty.
            } else if (Array.isArray(plugins)) {
                while(++index < plugins.length){
                    const thing = plugins[index];
                    add(thing);
                }
            } else {
                throw new TypeError('Expected a list of plugins, not `' + plugins + '`');
            }
        }
        /**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */ function addPlugin(plugin, value) {
            let index = -1;
            /** @type {Processor['attachers'][number]|undefined} */ let entry;
            while(++index < attachers.length){
                if (attachers[index][0] === plugin) {
                    entry = attachers[index];
                    break;
                }
            }
            if (entry) {
                if ($2a5eff7c75fac51a$export$2e2bcd8739ae039(entry[1]) && $2a5eff7c75fac51a$export$2e2bcd8739ae039(value)) {
                    value = (/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports))(true, entry[1], value);
                }
                entry[1] = value;
            } else {
                // @ts-expect-error: fine.
                attachers.push([
                    ...arguments
                ]);
            }
        }
    }
    /** @type {Processor['parse']} */ function parse(doc) {
        processor.freeze();
        const file = $67f604d39c4880b2$var$vfile(doc);
        const Parser = processor.Parser;
        $67f604d39c4880b2$var$assertParser('parse', Parser);
        if ($67f604d39c4880b2$var$newable(Parser, 'parse')) {
            // @ts-expect-error: `newable` checks this.
            return new Parser(String(file), file).parse();
        }
        // @ts-expect-error: `newable` checks this.
        return Parser(String(file), file) // eslint-disable-line new-cap
        ;
    }
    /** @type {Processor['stringify']} */ function stringify(node, doc) {
        processor.freeze();
        const file = $67f604d39c4880b2$var$vfile(doc);
        const Compiler = processor.Compiler;
        $67f604d39c4880b2$var$assertCompiler('stringify', Compiler);
        $67f604d39c4880b2$var$assertNode(node);
        if ($67f604d39c4880b2$var$newable(Compiler, 'compile')) {
            // @ts-expect-error: `newable` checks this.
            return new Compiler(node, file).compile();
        }
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
        if (!callback && typeof doc === 'function') {
            callback = doc;
            doc = undefined;
        }
        if (!callback) {
            return new Promise(executor);
        }
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
                if (error) {
                    reject(error);
                } else if (resolve) {
                    resolve(tree);
                } else {
                    // @ts-expect-error: `callback` is defined if `resolve` is not.
                    callback(null, tree, file);
                }
            }
        }
    }
    /** @type {Processor['runSync']} */ function runSync(node, file) {
        /** @type {Node|undefined} */ let result;
        /** @type {boolean|undefined} */ let complete;
        processor.run(node, file, done);
        $67f604d39c4880b2$var$assertDone('runSync', 'run', complete);
        // @ts-expect-error: we either bailed on an error or have a tree.
        return result;
        /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */ function done(error, tree) {
            $2e2c1408d9e9d499$export$dd911e13ecb11e05(error);
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
        $67f604d39c4880b2$var$assertParser('process', processor.Parser);
        $67f604d39c4880b2$var$assertCompiler('process', processor.Compiler);
        if (!callback) {
            return new Promise(executor);
        }
        executor(null, callback);
        /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */ function executor(resolve, reject) {
            const file1 = $67f604d39c4880b2$var$vfile(doc);
            processor.run(processor.parse(file1), file1, (error, tree, file)=>{
                if (error || !tree || !file) {
                    done(error);
                } else {
                    /** @type {unknown} */ const result = processor.stringify(tree, file);
                    if (result === undefined || result === null) {
                    // Empty.
                    } else if ($67f604d39c4880b2$var$looksLikeAVFileValue(result)) {
                        file.value = result;
                    } else {
                        file.result = result;
                    }
                    done(error, file);
                }
            });
            /**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */ function done(error, file) {
                if (error || !file) {
                    reject(error);
                } else if (resolve) {
                    resolve(file);
                } else {
                    // @ts-expect-error: `callback` is defined if `resolve` is not.
                    callback(null, file);
                }
            }
        }
    }
    /** @type {Processor['processSync']} */ function processSync(doc) {
        /** @type {boolean|undefined} */ let complete;
        processor.freeze();
        $67f604d39c4880b2$var$assertParser('processSync', processor.Parser);
        $67f604d39c4880b2$var$assertCompiler('processSync', processor.Compiler);
        const file = $67f604d39c4880b2$var$vfile(doc);
        processor.process(file, done);
        $67f604d39c4880b2$var$assertDone('processSync', 'process', complete);
        return file;
        /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */ function done(error) {
            complete = true;
            $2e2c1408d9e9d499$export$dd911e13ecb11e05(error);
        }
    }
    // Expose.
    return processor;
}
/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */ function $67f604d39c4880b2$var$newable(value, name) {
    return typeof value === 'function' && // Prototypes do exist.
    // type-coverage:ignore-next-line
    value.prototype && ($67f604d39c4880b2$var$keys(value.prototype) || name in value.prototype);
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
    if (typeof value !== 'function') throw new TypeError('Cannot `' + name + '` without `Parser`');
}
/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */ function $67f604d39c4880b2$var$assertCompiler(name, value) {
    if (typeof value !== 'function') throw new TypeError('Cannot `' + name + '` without `Compiler`');
}
/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */ function $67f604d39c4880b2$var$assertUnfrozen(name, frozen) {
    if (frozen) throw new Error('Cannot call `' + name + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
}
/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */ function $67f604d39c4880b2$var$assertNode(node) {
    // `isPlainObj` unfortunately uses `any` instead of `unknown`.
    // type-coverage:ignore-next-line
    if (!$2a5eff7c75fac51a$export$2e2bcd8739ae039(node) || typeof node.type !== 'string') throw new TypeError('Expected node, got `' + node + '`');
}
/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */ function $67f604d39c4880b2$var$assertDone(name, asyncName, complete) {
    if (!complete) throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
}
/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */ function $67f604d39c4880b2$var$vfile(value) {
    return $67f604d39c4880b2$var$looksLikeAVFile(value) ? value : new $3965753896da6f59$export$93dff69eb10dc7ce(value);
}
/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */ function $67f604d39c4880b2$var$looksLikeAVFile(value) {
    return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */ function $67f604d39c4880b2$var$looksLikeAVFileValue(value) {
    return typeof value === 'string' || (/*@__PURE__*/$parcel$interopDefault($6e86b2ac314f5402$exports))(value);
}



function $8003bbdddaa577f1$export$f84e8e69fd4488a5(node, options) {
    var { includeImageAlt: includeImageAlt = true  } = options || {
    };
    return $8003bbdddaa577f1$var$one(node, includeImageAlt);
}
/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */ function $8003bbdddaa577f1$var$one(node, includeImageAlt) {
    return node && typeof node === 'object' && (node.value || (includeImageAlt ? node.alt : '') || 'children' in node && $8003bbdddaa577f1$var$all(node.children, includeImageAlt) || Array.isArray(node) && $8003bbdddaa577f1$var$all(node, includeImageAlt)) || '';
}
/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */ function $8003bbdddaa577f1$var$all(values, includeImageAlt) {
    /** @type {Array.<string>} */ var result = [];
    var index = -1;
    while(++index < values.length)result[index] = $8003bbdddaa577f1$var$one(values[index], includeImageAlt);
    return result.join('');
}


function $e3740fd54cb8c53f$export$869882364835d202(list, start, remove, items) {
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


const $467394f305db958c$var$hasOwnProperty = {
}.hasOwnProperty;
function $467394f305db958c$export$86a865d89ef3c690(extensions) {
    /** @type {NormalizedExtension} */ const all = {
    };
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
        const left = maybe || (all[hook] = {
        });
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
    while(++index < list.length)(list[index].add === 'after' ? existing : before).push(list[index]);
    $e3740fd54cb8c53f$export$869882364835d202(existing, 0, 0, before);
}
function $467394f305db958c$export$eaf8c406dfb0a620(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {
    };
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
        const left = maybe || (all[hook] = {
        });
        const right = extension[hook];
        /** @type {string} */ let type;
        if (right) for(type in right)left[type] = right[type];
    }
}


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
const $2d97e78534b5d038$export$aa04114dd888a7a0 = $2d97e78534b5d038$var$regexCheck($3b2b46a791d7287a$export$85b5101f24802e8c);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */ function $2d97e78534b5d038$var$regexCheck(regex) {
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */ function check(code) {
        return code !== null && regex.test(String.fromCharCode(code));
    }
    return check;
}


function $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    /** @type {State} */ function start(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code) && (size++) < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
    return start;
}



const $7cca34f15ebbf281$export$a7db06668cad9adb = {
    tokenize: $7cca34f15ebbf281$var$initializeContent
};
/** @type {Initializer} */ function $7cca34f15ebbf281$var$initializeContent(effects) {
    const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    /** @type {Token} */ let previous;
    /** @type {State} */ function afterContentStartConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, contentStart, 'linePrefix');
    }
    /** @type {State} */ function paragraphInitial(code) {
        effects.enter('paragraph');
        return lineStart(code);
    }
    /** @type {State} */ function lineStart(code) {
        const token = effects.enter('chunkText', {
            contentType: 'text',
            previous: previous
        });
        if (previous) {
            previous.next = token;
        }
        previous = token;
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            effects.exit('chunkText');
            effects.exit('paragraph');
            effects.consume(code);
            return;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.consume(code);
            effects.exit('chunkText');
            return lineStart;
        } // Data.
        effects.consume(code);
        return data;
    }
    return contentStart;
}





const $412deb289bc41196$export$5a7bfc01df82fcd1 = {
    tokenize: $412deb289bc41196$var$initializeDocument
};
/** @type {Construct} */ const $412deb289bc41196$var$containerConstruct = {
    tokenize: $412deb289bc41196$var$tokenizeContainer
};
/** @type {Initializer} */ function $412deb289bc41196$var$initializeDocument(effects) {
    const self = this;
    /** @type {StackItem[]} */ const stack = [];
    let continued = 0;
    /** @type {TokenizeContext|undefined} */ let childFlow;
    /** @type {Token|undefined} */ let childToken;
    /** @type {number} */ let lineStartOffset;
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
        if (self.containerState._closeFlow) closeFlow();
        continued++;
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
            if (!childFlow) {
                return documentContinued(code);
            } // If we have concrete content, such as block HTML or fenced code,
            // we can’t have containers “pierce” into them, so we can immediately
            // start.
            if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
                return flowStart(code);
            } // If we do have flow, it could still be a blank line,
            // but we’d be interrupting it w/ a new container if there’s a current
            // construct.
            self.interrupt = Boolean(childFlow.currentConstruct);
        } // Check if there is a new container.
        self.containerState = {
        };
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
        self.containerState = {
        };
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
        effects.enter('chunkFlow', {
            contentType: 'flow',
            previous: childToken,
            _tokenizer: childFlow
        });
        return flowContinue(code);
    }
    /** @type {State} */ function flowContinue(code) {
        if (code === null) {
            writeToChild(effects.exit('chunkFlow'), true);
            exitContainers(0);
            effects.consume(code);
            return;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.consume(code);
            writeToChild(effects.exit('chunkFlow')) // Get ready for the next line.
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
                childFlow.events[index][1].start.offset < lineStartOffset && (!childFlow.events[index][1].end || childFlow.events[index][1].end.offset > lineStartOffset)) {
                    // Exit: there’s still something open, which means it’s a lazy line
                    // part of something.
                    return;
                }
            }
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {boolean|undefined} */ let seen;
            /** @type {Point|undefined} */ let point // Find the previous chunk (the one before the lazy line).
            ;
            while(indexBeforeFlow--){
                if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === 'chunkFlow') {
                    if (seen) {
                        point = self.events[indexBeforeFlow][1].end;
                        break;
                    }
                    seen = true;
                }
            }
            exitContainers(continued) // Fix positions.
            ;
            index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({
                }, point);
                index++;
            } // Inject the exits earlier (they’re still also at the end).
            $e3740fd54cb8c53f$export$869882364835d202(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)) // Discard the duplicate exits.
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
        while((index--) > size){
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
    return start;
}
/** @type {Tokenizer} */ function $412deb289bc41196$var$tokenizeContainer(effects, ok, nok) {
    return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, effects.attempt(this.parser.constructs.document, ok, nok), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
}




function $076e9255d90ad183$export$e3902bc0d835cad0(code) {
    if (code === null || $2d97e78534b5d038$export$a30284361b3814b7(code) || $2d97e78534b5d038$export$a0ff789c034ffdf4(code)) return 1;
    if ($2d97e78534b5d038$export$aa04114dd888a7a0(code)) return 2;
}


function $2d1cd621ae059249$export$3ff61ec196ff408b(constructs, events, context) {
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


const $4a83c38545e2870b$export$45b92471da762af7 = {
    name: 'attention',
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
    if (events[index][0] === 'enter' && events[index][1].type === 'attentionSequence' && events[index][1]._close) {
        open = index // Now walk back to find an opener.
        ;
        while(open--)// Find a token that can open the closer.
        if (events[open][0] === 'exit' && events[open][1].type === 'attentionSequence' && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
            // If the opening can close or the closing can open,
            // and the close size *is not* a multiple of three,
            // but the sum of the opening and closing size *is* multiple of three,
            // then don’t match.
            if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) continue;
             // Number of markers to use from the sequence.
            use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
            const start = Object.assign({
            }, events[open][1].end);
            const end = Object.assign({
            }, events[index][1].start);
            $4a83c38545e2870b$var$movePoint(start, -use);
            $4a83c38545e2870b$var$movePoint(end, use);
            openingSequence = {
                type: use > 1 ? 'strongSequence' : 'emphasisSequence',
                start: start,
                end: Object.assign({
                }, events[open][1].end)
            };
            closingSequence = {
                type: use > 1 ? 'strongSequence' : 'emphasisSequence',
                start: Object.assign({
                }, events[index][1].start),
                end: end
            };
            text = {
                type: use > 1 ? 'strongText' : 'emphasisText',
                start: Object.assign({
                }, events[open][1].end),
                end: Object.assign({
                }, events[index][1].start)
            };
            group = {
                type: use > 1 ? 'strong' : 'emphasis',
                start: Object.assign({
                }, openingSequence.start),
                end: Object.assign({
                }, closingSequence.end)
            };
            events[open][1].end = Object.assign({
            }, openingSequence.start);
            events[index][1].start = Object.assign({
            }, closingSequence.end);
            nextEvents = [] // If there are more markers in the opening, add them before.
            ;
            if (events[open][1].end.offset - events[open][1].start.offset) nextEvents = $e3740fd54cb8c53f$export$4cbf152802aa238(nextEvents, [
                [
                    'enter',
                    events[open][1],
                    context
                ],
                [
                    'exit',
                    events[open][1],
                    context
                ]
            ]);
             // Opening.
            nextEvents = $e3740fd54cb8c53f$export$4cbf152802aa238(nextEvents, [
                [
                    'enter',
                    group,
                    context
                ],
                [
                    'enter',
                    openingSequence,
                    context
                ],
                [
                    'exit',
                    openingSequence,
                    context
                ],
                [
                    'enter',
                    text,
                    context
                ]
            ]) // Between.
            ;
            nextEvents = $e3740fd54cb8c53f$export$4cbf152802aa238(nextEvents, $2d1cd621ae059249$export$3ff61ec196ff408b(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)) // Closing.
            ;
            nextEvents = $e3740fd54cb8c53f$export$4cbf152802aa238(nextEvents, [
                [
                    'exit',
                    text,
                    context
                ],
                [
                    'enter',
                    closingSequence,
                    context
                ],
                [
                    'exit',
                    closingSequence,
                    context
                ],
                [
                    'exit',
                    group,
                    context
                ]
            ]) // If there are more markers in the closing, add them after.
            ;
            if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = $e3740fd54cb8c53f$export$4cbf152802aa238(nextEvents, [
                    [
                        'enter',
                        events[index][1],
                        context
                    ],
                    [
                        'exit',
                        events[index][1],
                        context
                    ]
                ]);
            } else offset = 0;
            $e3740fd54cb8c53f$export$869882364835d202(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - offset - 2;
            break;
        }
    }
     // Remove remaining sequences.
    index = -1;
    while(++index < events.length)if (events[index][1].type === 'attentionSequence') events[index][1].type = 'data';
    return events;
}
/** @type {Tokenizer} */ function $4a83c38545e2870b$var$tokenizeAttention(effects, ok) {
    const before = $076e9255d90ad183$export$e3902bc0d835cad0(this.previous);
    /** @type {NonNullable<Code>} */ let marker;
    /** @type {State} */ function start(code) {
        effects.enter('attentionSequence');
        marker = code;
        return sequence(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            return sequence;
        }
        const token = effects.exit('attentionSequence');
        const after = $076e9255d90ad183$export$e3902bc0d835cad0(code);
        const open = !after || after === 2 && before;
        const close = !before || before === 2 && after;
        token._open = Boolean(marker === 42 ? open : open && (before || !close));
        token._close = Boolean(marker === 42 ? close : close && (after || !open));
        return ok(code);
    }
    return start;
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


const $d65a4e456a4c0dfc$export$17ddf85e4c916ad6 = {
    name: 'autolink',
    tokenize: $d65a4e456a4c0dfc$var$tokenizeAutolink
};
/** @type {Tokenizer} */ function $d65a4e456a4c0dfc$var$tokenizeAutolink(effects, ok, nok) {
    let size = 1;
    /** @type {State} */ function start(code) {
        effects.enter('autolink');
        effects.enter('autolinkMarker');
        effects.consume(code);
        effects.exit('autolinkMarker');
        effects.enter('autolinkProtocol');
        return open;
    }
    /** @type {State} */ function open(code) {
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
            effects.consume(code);
            return schemeOrEmailAtext;
        }
        return $2d97e78534b5d038$export$4397998b34fe597d(code) ? emailAtext(code) : nok(code);
    }
    /** @type {State} */ function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || $2d97e78534b5d038$export$75c76db11865a9f4(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
    }
    /** @type {State} */ function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
            effects.consume(code);
            return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || $2d97e78534b5d038$export$75c76db11865a9f4(code)) && size++ < 32) {
            effects.consume(code);
            return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
    }
    /** @type {State} */ function urlInside(code) {
        if (code === 62) {
            effects.exit('autolinkProtocol');
            return end(code);
        }
        if (code === null || code === 32 || code === 60 || $2d97e78534b5d038$export$67dbf494fc8394df(code)) {
            return nok(code);
        }
        effects.consume(code);
        return urlInside;
    }
    /** @type {State} */ function emailAtext(code) {
        if (code === 64) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if ($2d97e78534b5d038$export$4397998b34fe597d(code)) {
            effects.consume(code);
            return emailAtext;
        }
        return nok(code);
    }
    /** @type {State} */ function emailAtSignOrDot(code) {
        return $2d97e78534b5d038$export$75c76db11865a9f4(code) ? emailLabel(code) : nok(code);
    }
    /** @type {State} */ function emailLabel(code) {
        if (code === 46) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (code === 62) {
            // Exit, then change the type.
            effects.exit('autolinkProtocol').type = 'autolinkEmail';
            return end(code);
        }
        return emailValue(code);
    }
    /** @type {State} */ function emailValue(code) {
        if ((code === 45 || $2d97e78534b5d038$export$75c76db11865a9f4(code)) && size++ < 63) {
            effects.consume(code);
            return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
    }
    /** @type {State} */ function end(code) {
        effects.enter('autolinkMarker');
        effects.consume(code);
        effects.exit('autolinkMarker');
        effects.exit('autolink');
        return ok;
    }
    return start;
}



const $68b861ff9f9a6ffe$export$d50d28ce3ab2a612 = {
    tokenize: $68b861ff9f9a6ffe$var$tokenizeBlankLine,
    partial: true
};
/** @type {Tokenizer} */ function $68b861ff9f9a6ffe$var$tokenizeBlankLine(effects, ok, nok) {
    /** @type {State} */ function afterWhitespace(code) {
        return code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code) ? ok(code) : nok(code);
    }
    return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, afterWhitespace, 'linePrefix');
}



const $f20166fc2e09646a$export$200dcd0a5903c968 = {
    name: 'blockQuote',
    tokenize: $f20166fc2e09646a$var$tokenizeBlockQuoteStart,
    continuation: {
        tokenize: $f20166fc2e09646a$var$tokenizeBlockQuoteContinuation
    },
    exit: $f20166fc2e09646a$var$exit
};
/** @type {Tokenizer} */ function $f20166fc2e09646a$var$tokenizeBlockQuoteStart(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        if (code === 62) {
            const state = self.containerState;
            if (!state.open) {
                effects.enter('blockQuote', {
                    _container: true
                });
                state.open = true;
            }
            effects.enter('blockQuotePrefix');
            effects.enter('blockQuoteMarker');
            effects.consume(code);
            effects.exit('blockQuoteMarker');
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.enter('blockQuotePrefixWhitespace');
            effects.consume(code);
            effects.exit('blockQuotePrefixWhitespace');
            effects.exit('blockQuotePrefix');
            return ok;
        }
        effects.exit('blockQuotePrefix');
        return ok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $f20166fc2e09646a$var$tokenizeBlockQuoteContinuation(effects, ok, nok) {
    return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, effects.attempt($f20166fc2e09646a$export$200dcd0a5903c968, ok, nok), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
}
/** @type {Exiter} */ function $f20166fc2e09646a$var$exit(effects) {
    effects.exit('blockQuote');
}


const $81781b60d5cd3cfc$export$2005478564e78d96 = {
    name: 'characterEscape',
    tokenize: $81781b60d5cd3cfc$var$tokenizeCharacterEscape
};
/** @type {Tokenizer} */ function $81781b60d5cd3cfc$var$tokenizeCharacterEscape(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        effects.enter('characterEscape');
        effects.enter('escapeMarker');
        effects.consume(code);
        effects.exit('escapeMarker');
        return open;
    }
    /** @type {State} */ function open(code) {
        if ($2d97e78534b5d038$export$35794a7d1db99380(code)) {
            effects.enter('characterEscapeValue');
            effects.consume(code);
            effects.exit('characterEscapeValue');
            effects.exit('characterEscape');
            return ok;
        }
        return nok(code);
    }
    return start;
}

var $52512792806e1b27$export$ec810d1aafce79a7 = {
    AEli: 'Æ',
    AElig: 'Æ',
    AM: '&',
    AMP: '&',
    Aacut: 'Á',
    Aacute: 'Á',
    Abreve: 'Ă',
    Acir: 'Â',
    Acirc: 'Â',
    Acy: 'А',
    Afr: '𝔄',
    Agrav: 'À',
    Agrave: 'À',
    Alpha: 'Α',
    Amacr: 'Ā',
    And: '⩓',
    Aogon: 'Ą',
    Aopf: '𝔸',
    ApplyFunction: '⁡',
    Arin: 'Å',
    Aring: 'Å',
    Ascr: '𝒜',
    Assign: '≔',
    Atild: 'Ã',
    Atilde: 'Ã',
    Aum: 'Ä',
    Auml: 'Ä',
    Backslash: '∖',
    Barv: '⫧',
    Barwed: '⌆',
    Bcy: 'Б',
    Because: '∵',
    Bernoullis: 'ℬ',
    Beta: 'Β',
    Bfr: '𝔅',
    Bopf: '𝔹',
    Breve: '˘',
    Bscr: 'ℬ',
    Bumpeq: '≎',
    CHcy: 'Ч',
    COP: '©',
    COPY: '©',
    Cacute: 'Ć',
    Cap: '⋒',
    CapitalDifferentialD: 'ⅅ',
    Cayleys: 'ℭ',
    Ccaron: 'Č',
    Ccedi: 'Ç',
    Ccedil: 'Ç',
    Ccirc: 'Ĉ',
    Cconint: '∰',
    Cdot: 'Ċ',
    Cedilla: '¸',
    CenterDot: '·',
    Cfr: 'ℭ',
    Chi: 'Χ',
    CircleDot: '⊙',
    CircleMinus: '⊖',
    CirclePlus: '⊕',
    CircleTimes: '⊗',
    ClockwiseContourIntegral: '∲',
    CloseCurlyDoubleQuote: '”',
    CloseCurlyQuote: '’',
    Colon: '∷',
    Colone: '⩴',
    Congruent: '≡',
    Conint: '∯',
    ContourIntegral: '∮',
    Copf: 'ℂ',
    Coproduct: '∐',
    CounterClockwiseContourIntegral: '∳',
    Cross: '⨯',
    Cscr: '𝒞',
    Cup: '⋓',
    CupCap: '≍',
    DD: 'ⅅ',
    DDotrahd: '⤑',
    DJcy: 'Ђ',
    DScy: 'Ѕ',
    DZcy: 'Џ',
    Dagger: '‡',
    Darr: '↡',
    Dashv: '⫤',
    Dcaron: 'Ď',
    Dcy: 'Д',
    Del: '∇',
    Delta: 'Δ',
    Dfr: '𝔇',
    DiacriticalAcute: '´',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    DiacriticalGrave: '`',
    DiacriticalTilde: '˜',
    Diamond: '⋄',
    DifferentialD: 'ⅆ',
    Dopf: '𝔻',
    Dot: '¨',
    DotDot: '⃜',
    DotEqual: '≐',
    DoubleContourIntegral: '∯',
    DoubleDot: '¨',
    DoubleDownArrow: '⇓',
    DoubleLeftArrow: '⇐',
    DoubleLeftRightArrow: '⇔',
    DoubleLeftTee: '⫤',
    DoubleLongLeftArrow: '⟸',
    DoubleLongLeftRightArrow: '⟺',
    DoubleLongRightArrow: '⟹',
    DoubleRightArrow: '⇒',
    DoubleRightTee: '⊨',
    DoubleUpArrow: '⇑',
    DoubleUpDownArrow: '⇕',
    DoubleVerticalBar: '∥',
    DownArrow: '↓',
    DownArrowBar: '⤓',
    DownArrowUpArrow: '⇵',
    DownBreve: '̑',
    DownLeftRightVector: '⥐',
    DownLeftTeeVector: '⥞',
    DownLeftVector: '↽',
    DownLeftVectorBar: '⥖',
    DownRightTeeVector: '⥟',
    DownRightVector: '⇁',
    DownRightVectorBar: '⥗',
    DownTee: '⊤',
    DownTeeArrow: '↧',
    Downarrow: '⇓',
    Dscr: '𝒟',
    Dstrok: 'Đ',
    ENG: 'Ŋ',
    ET: 'Ð',
    ETH: 'Ð',
    Eacut: 'É',
    Eacute: 'É',
    Ecaron: 'Ě',
    Ecir: 'Ê',
    Ecirc: 'Ê',
    Ecy: 'Э',
    Edot: 'Ė',
    Efr: '𝔈',
    Egrav: 'È',
    Egrave: 'È',
    Element: '∈',
    Emacr: 'Ē',
    EmptySmallSquare: '◻',
    EmptyVerySmallSquare: '▫',
    Eogon: 'Ę',
    Eopf: '𝔼',
    Epsilon: 'Ε',
    Equal: '⩵',
    EqualTilde: '≂',
    Equilibrium: '⇌',
    Escr: 'ℰ',
    Esim: '⩳',
    Eta: 'Η',
    Eum: 'Ë',
    Euml: 'Ë',
    Exists: '∃',
    ExponentialE: 'ⅇ',
    Fcy: 'Ф',
    Ffr: '𝔉',
    FilledSmallSquare: '◼',
    FilledVerySmallSquare: '▪',
    Fopf: '𝔽',
    ForAll: '∀',
    Fouriertrf: 'ℱ',
    Fscr: 'ℱ',
    GJcy: 'Ѓ',
    G: '>',
    GT: '>',
    Gamma: 'Γ',
    Gammad: 'Ϝ',
    Gbreve: 'Ğ',
    Gcedil: 'Ģ',
    Gcirc: 'Ĝ',
    Gcy: 'Г',
    Gdot: 'Ġ',
    Gfr: '𝔊',
    Gg: '⋙',
    Gopf: '𝔾',
    GreaterEqual: '≥',
    GreaterEqualLess: '⋛',
    GreaterFullEqual: '≧',
    GreaterGreater: '⪢',
    GreaterLess: '≷',
    GreaterSlantEqual: '⩾',
    GreaterTilde: '≳',
    Gscr: '𝒢',
    Gt: '≫',
    HARDcy: 'Ъ',
    Hacek: 'ˇ',
    Hat: '^',
    Hcirc: 'Ĥ',
    Hfr: 'ℌ',
    HilbertSpace: 'ℋ',
    Hopf: 'ℍ',
    HorizontalLine: '─',
    Hscr: 'ℋ',
    Hstrok: 'Ħ',
    HumpDownHump: '≎',
    HumpEqual: '≏',
    IEcy: 'Е',
    IJlig: 'Ĳ',
    IOcy: 'Ё',
    Iacut: 'Í',
    Iacute: 'Í',
    Icir: 'Î',
    Icirc: 'Î',
    Icy: 'И',
    Idot: 'İ',
    Ifr: 'ℑ',
    Igrav: 'Ì',
    Igrave: 'Ì',
    Im: 'ℑ',
    Imacr: 'Ī',
    ImaginaryI: 'ⅈ',
    Implies: '⇒',
    Int: '∬',
    Integral: '∫',
    Intersection: '⋂',
    InvisibleComma: '⁣',
    InvisibleTimes: '⁢',
    Iogon: 'Į',
    Iopf: '𝕀',
    Iota: 'Ι',
    Iscr: 'ℐ',
    Itilde: 'Ĩ',
    Iukcy: 'І',
    Ium: 'Ï',
    Iuml: 'Ï',
    Jcirc: 'Ĵ',
    Jcy: 'Й',
    Jfr: '𝔍',
    Jopf: '𝕁',
    Jscr: '𝒥',
    Jsercy: 'Ј',
    Jukcy: 'Є',
    KHcy: 'Х',
    KJcy: 'Ќ',
    Kappa: 'Κ',
    Kcedil: 'Ķ',
    Kcy: 'К',
    Kfr: '𝔎',
    Kopf: '𝕂',
    Kscr: '𝒦',
    LJcy: 'Љ',
    L: '<',
    LT: '<',
    Lacute: 'Ĺ',
    Lambda: 'Λ',
    Lang: '⟪',
    Laplacetrf: 'ℒ',
    Larr: '↞',
    Lcaron: 'Ľ',
    Lcedil: 'Ļ',
    Lcy: 'Л',
    LeftAngleBracket: '⟨',
    LeftArrow: '←',
    LeftArrowBar: '⇤',
    LeftArrowRightArrow: '⇆',
    LeftCeiling: '⌈',
    LeftDoubleBracket: '⟦',
    LeftDownTeeVector: '⥡',
    LeftDownVector: '⇃',
    LeftDownVectorBar: '⥙',
    LeftFloor: '⌊',
    LeftRightArrow: '↔',
    LeftRightVector: '⥎',
    LeftTee: '⊣',
    LeftTeeArrow: '↤',
    LeftTeeVector: '⥚',
    LeftTriangle: '⊲',
    LeftTriangleBar: '⧏',
    LeftTriangleEqual: '⊴',
    LeftUpDownVector: '⥑',
    LeftUpTeeVector: '⥠',
    LeftUpVector: '↿',
    LeftUpVectorBar: '⥘',
    LeftVector: '↼',
    LeftVectorBar: '⥒',
    Leftarrow: '⇐',
    Leftrightarrow: '⇔',
    LessEqualGreater: '⋚',
    LessFullEqual: '≦',
    LessGreater: '≶',
    LessLess: '⪡',
    LessSlantEqual: '⩽',
    LessTilde: '≲',
    Lfr: '𝔏',
    Ll: '⋘',
    Lleftarrow: '⇚',
    Lmidot: 'Ŀ',
    LongLeftArrow: '⟵',
    LongLeftRightArrow: '⟷',
    LongRightArrow: '⟶',
    Longleftarrow: '⟸',
    Longleftrightarrow: '⟺',
    Longrightarrow: '⟹',
    Lopf: '𝕃',
    LowerLeftArrow: '↙',
    LowerRightArrow: '↘',
    Lscr: 'ℒ',
    Lsh: '↰',
    Lstrok: 'Ł',
    Lt: '≪',
    Map: '⤅',
    Mcy: 'М',
    MediumSpace: ' ',
    Mellintrf: 'ℳ',
    Mfr: '𝔐',
    MinusPlus: '∓',
    Mopf: '𝕄',
    Mscr: 'ℳ',
    Mu: 'Μ',
    NJcy: 'Њ',
    Nacute: 'Ń',
    Ncaron: 'Ň',
    Ncedil: 'Ņ',
    Ncy: 'Н',
    NegativeMediumSpace: '​',
    NegativeThickSpace: '​',
    NegativeThinSpace: '​',
    NegativeVeryThinSpace: '​',
    NestedGreaterGreater: '≫',
    NestedLessLess: '≪',
    NewLine: '\n',
    Nfr: '𝔑',
    NoBreak: '⁠',
    NonBreakingSpace: ' ',
    Nopf: 'ℕ',
    Not: '⫬',
    NotCongruent: '≢',
    NotCupCap: '≭',
    NotDoubleVerticalBar: '∦',
    NotElement: '∉',
    NotEqual: '≠',
    NotEqualTilde: '≂̸',
    NotExists: '∄',
    NotGreater: '≯',
    NotGreaterEqual: '≱',
    NotGreaterFullEqual: '≧̸',
    NotGreaterGreater: '≫̸',
    NotGreaterLess: '≹',
    NotGreaterSlantEqual: '⩾̸',
    NotGreaterTilde: '≵',
    NotHumpDownHump: '≎̸',
    NotHumpEqual: '≏̸',
    NotLeftTriangle: '⋪',
    NotLeftTriangleBar: '⧏̸',
    NotLeftTriangleEqual: '⋬',
    NotLess: '≮',
    NotLessEqual: '≰',
    NotLessGreater: '≸',
    NotLessLess: '≪̸',
    NotLessSlantEqual: '⩽̸',
    NotLessTilde: '≴',
    NotNestedGreaterGreater: '⪢̸',
    NotNestedLessLess: '⪡̸',
    NotPrecedes: '⊀',
    NotPrecedesEqual: '⪯̸',
    NotPrecedesSlantEqual: '⋠',
    NotReverseElement: '∌',
    NotRightTriangle: '⋫',
    NotRightTriangleBar: '⧐̸',
    NotRightTriangleEqual: '⋭',
    NotSquareSubset: '⊏̸',
    NotSquareSubsetEqual: '⋢',
    NotSquareSuperset: '⊐̸',
    NotSquareSupersetEqual: '⋣',
    NotSubset: '⊂⃒',
    NotSubsetEqual: '⊈',
    NotSucceeds: '⊁',
    NotSucceedsEqual: '⪰̸',
    NotSucceedsSlantEqual: '⋡',
    NotSucceedsTilde: '≿̸',
    NotSuperset: '⊃⃒',
    NotSupersetEqual: '⊉',
    NotTilde: '≁',
    NotTildeEqual: '≄',
    NotTildeFullEqual: '≇',
    NotTildeTilde: '≉',
    NotVerticalBar: '∤',
    Nscr: '𝒩',
    Ntild: 'Ñ',
    Ntilde: 'Ñ',
    Nu: 'Ν',
    OElig: 'Œ',
    Oacut: 'Ó',
    Oacute: 'Ó',
    Ocir: 'Ô',
    Ocirc: 'Ô',
    Ocy: 'О',
    Odblac: 'Ő',
    Ofr: '𝔒',
    Ograv: 'Ò',
    Ograve: 'Ò',
    Omacr: 'Ō',
    Omega: 'Ω',
    Omicron: 'Ο',
    Oopf: '𝕆',
    OpenCurlyDoubleQuote: '“',
    OpenCurlyQuote: '‘',
    Or: '⩔',
    Oscr: '𝒪',
    Oslas: 'Ø',
    Oslash: 'Ø',
    Otild: 'Õ',
    Otilde: 'Õ',
    Otimes: '⨷',
    Oum: 'Ö',
    Ouml: 'Ö',
    OverBar: '‾',
    OverBrace: '⏞',
    OverBracket: '⎴',
    OverParenthesis: '⏜',
    PartialD: '∂',
    Pcy: 'П',
    Pfr: '𝔓',
    Phi: 'Φ',
    Pi: 'Π',
    PlusMinus: '±',
    Poincareplane: 'ℌ',
    Popf: 'ℙ',
    Pr: '⪻',
    Precedes: '≺',
    PrecedesEqual: '⪯',
    PrecedesSlantEqual: '≼',
    PrecedesTilde: '≾',
    Prime: '″',
    Product: '∏',
    Proportion: '∷',
    Proportional: '∝',
    Pscr: '𝒫',
    Psi: 'Ψ',
    QUO: '"',
    QUOT: '"',
    Qfr: '𝔔',
    Qopf: 'ℚ',
    Qscr: '𝒬',
    RBarr: '⤐',
    RE: '®',
    REG: '®',
    Racute: 'Ŕ',
    Rang: '⟫',
    Rarr: '↠',
    Rarrtl: '⤖',
    Rcaron: 'Ř',
    Rcedil: 'Ŗ',
    Rcy: 'Р',
    Re: 'ℜ',
    ReverseElement: '∋',
    ReverseEquilibrium: '⇋',
    ReverseUpEquilibrium: '⥯',
    Rfr: 'ℜ',
    Rho: 'Ρ',
    RightAngleBracket: '⟩',
    RightArrow: '→',
    RightArrowBar: '⇥',
    RightArrowLeftArrow: '⇄',
    RightCeiling: '⌉',
    RightDoubleBracket: '⟧',
    RightDownTeeVector: '⥝',
    RightDownVector: '⇂',
    RightDownVectorBar: '⥕',
    RightFloor: '⌋',
    RightTee: '⊢',
    RightTeeArrow: '↦',
    RightTeeVector: '⥛',
    RightTriangle: '⊳',
    RightTriangleBar: '⧐',
    RightTriangleEqual: '⊵',
    RightUpDownVector: '⥏',
    RightUpTeeVector: '⥜',
    RightUpVector: '↾',
    RightUpVectorBar: '⥔',
    RightVector: '⇀',
    RightVectorBar: '⥓',
    Rightarrow: '⇒',
    Ropf: 'ℝ',
    RoundImplies: '⥰',
    Rrightarrow: '⇛',
    Rscr: 'ℛ',
    Rsh: '↱',
    RuleDelayed: '⧴',
    SHCHcy: 'Щ',
    SHcy: 'Ш',
    SOFTcy: 'Ь',
    Sacute: 'Ś',
    Sc: '⪼',
    Scaron: 'Š',
    Scedil: 'Ş',
    Scirc: 'Ŝ',
    Scy: 'С',
    Sfr: '𝔖',
    ShortDownArrow: '↓',
    ShortLeftArrow: '←',
    ShortRightArrow: '→',
    ShortUpArrow: '↑',
    Sigma: 'Σ',
    SmallCircle: '∘',
    Sopf: '𝕊',
    Sqrt: '√',
    Square: '□',
    SquareIntersection: '⊓',
    SquareSubset: '⊏',
    SquareSubsetEqual: '⊑',
    SquareSuperset: '⊐',
    SquareSupersetEqual: '⊒',
    SquareUnion: '⊔',
    Sscr: '𝒮',
    Star: '⋆',
    Sub: '⋐',
    Subset: '⋐',
    SubsetEqual: '⊆',
    Succeeds: '≻',
    SucceedsEqual: '⪰',
    SucceedsSlantEqual: '≽',
    SucceedsTilde: '≿',
    SuchThat: '∋',
    Sum: '∑',
    Sup: '⋑',
    Superset: '⊃',
    SupersetEqual: '⊇',
    Supset: '⋑',
    THOR: 'Þ',
    THORN: 'Þ',
    TRADE: '™',
    TSHcy: 'Ћ',
    TScy: 'Ц',
    Tab: '\t',
    Tau: 'Τ',
    Tcaron: 'Ť',
    Tcedil: 'Ţ',
    Tcy: 'Т',
    Tfr: '𝔗',
    Therefore: '∴',
    Theta: 'Θ',
    ThickSpace: '  ',
    ThinSpace: ' ',
    Tilde: '∼',
    TildeEqual: '≃',
    TildeFullEqual: '≅',
    TildeTilde: '≈',
    Topf: '𝕋',
    TripleDot: '⃛',
    Tscr: '𝒯',
    Tstrok: 'Ŧ',
    Uacut: 'Ú',
    Uacute: 'Ú',
    Uarr: '↟',
    Uarrocir: '⥉',
    Ubrcy: 'Ў',
    Ubreve: 'Ŭ',
    Ucir: 'Û',
    Ucirc: 'Û',
    Ucy: 'У',
    Udblac: 'Ű',
    Ufr: '𝔘',
    Ugrav: 'Ù',
    Ugrave: 'Ù',
    Umacr: 'Ū',
    UnderBar: '_',
    UnderBrace: '⏟',
    UnderBracket: '⎵',
    UnderParenthesis: '⏝',
    Union: '⋃',
    UnionPlus: '⊎',
    Uogon: 'Ų',
    Uopf: '𝕌',
    UpArrow: '↑',
    UpArrowBar: '⤒',
    UpArrowDownArrow: '⇅',
    UpDownArrow: '↕',
    UpEquilibrium: '⥮',
    UpTee: '⊥',
    UpTeeArrow: '↥',
    Uparrow: '⇑',
    Updownarrow: '⇕',
    UpperLeftArrow: '↖',
    UpperRightArrow: '↗',
    Upsi: 'ϒ',
    Upsilon: 'Υ',
    Uring: 'Ů',
    Uscr: '𝒰',
    Utilde: 'Ũ',
    Uum: 'Ü',
    Uuml: 'Ü',
    VDash: '⊫',
    Vbar: '⫫',
    Vcy: 'В',
    Vdash: '⊩',
    Vdashl: '⫦',
    Vee: '⋁',
    Verbar: '‖',
    Vert: '‖',
    VerticalBar: '∣',
    VerticalLine: '|',
    VerticalSeparator: '❘',
    VerticalTilde: '≀',
    VeryThinSpace: ' ',
    Vfr: '𝔙',
    Vopf: '𝕍',
    Vscr: '𝒱',
    Vvdash: '⊪',
    Wcirc: 'Ŵ',
    Wedge: '⋀',
    Wfr: '𝔚',
    Wopf: '𝕎',
    Wscr: '𝒲',
    Xfr: '𝔛',
    Xi: 'Ξ',
    Xopf: '𝕏',
    Xscr: '𝒳',
    YAcy: 'Я',
    YIcy: 'Ї',
    YUcy: 'Ю',
    Yacut: 'Ý',
    Yacute: 'Ý',
    Ycirc: 'Ŷ',
    Ycy: 'Ы',
    Yfr: '𝔜',
    Yopf: '𝕐',
    Yscr: '𝒴',
    Yuml: 'Ÿ',
    ZHcy: 'Ж',
    Zacute: 'Ź',
    Zcaron: 'Ž',
    Zcy: 'З',
    Zdot: 'Ż',
    ZeroWidthSpace: '​',
    Zeta: 'Ζ',
    Zfr: 'ℨ',
    Zopf: 'ℤ',
    Zscr: '𝒵',
    aacut: 'á',
    aacute: 'á',
    abreve: 'ă',
    ac: '∾',
    acE: '∾̳',
    acd: '∿',
    acir: 'â',
    acirc: 'â',
    acut: '´',
    acute: '´',
    acy: 'а',
    aeli: 'æ',
    aelig: 'æ',
    af: '⁡',
    afr: '𝔞',
    agrav: 'à',
    agrave: 'à',
    alefsym: 'ℵ',
    aleph: 'ℵ',
    alpha: 'α',
    amacr: 'ā',
    amalg: '⨿',
    am: '&',
    amp: '&',
    and: '∧',
    andand: '⩕',
    andd: '⩜',
    andslope: '⩘',
    andv: '⩚',
    ang: '∠',
    ange: '⦤',
    angle: '∠',
    angmsd: '∡',
    angmsdaa: '⦨',
    angmsdab: '⦩',
    angmsdac: '⦪',
    angmsdad: '⦫',
    angmsdae: '⦬',
    angmsdaf: '⦭',
    angmsdag: '⦮',
    angmsdah: '⦯',
    angrt: '∟',
    angrtvb: '⊾',
    angrtvbd: '⦝',
    angsph: '∢',
    angst: 'Å',
    angzarr: '⍼',
    aogon: 'ą',
    aopf: '𝕒',
    ap: '≈',
    apE: '⩰',
    apacir: '⩯',
    ape: '≊',
    apid: '≋',
    apos: "'",
    approx: '≈',
    approxeq: '≊',
    arin: 'å',
    aring: 'å',
    ascr: '𝒶',
    ast: '*',
    asymp: '≈',
    asympeq: '≍',
    atild: 'ã',
    atilde: 'ã',
    aum: 'ä',
    auml: 'ä',
    awconint: '∳',
    awint: '⨑',
    bNot: '⫭',
    backcong: '≌',
    backepsilon: '϶',
    backprime: '‵',
    backsim: '∽',
    backsimeq: '⋍',
    barvee: '⊽',
    barwed: '⌅',
    barwedge: '⌅',
    bbrk: '⎵',
    bbrktbrk: '⎶',
    bcong: '≌',
    bcy: 'б',
    bdquo: '„',
    becaus: '∵',
    because: '∵',
    bemptyv: '⦰',
    bepsi: '϶',
    bernou: 'ℬ',
    beta: 'β',
    beth: 'ℶ',
    between: '≬',
    bfr: '𝔟',
    bigcap: '⋂',
    bigcirc: '◯',
    bigcup: '⋃',
    bigodot: '⨀',
    bigoplus: '⨁',
    bigotimes: '⨂',
    bigsqcup: '⨆',
    bigstar: '★',
    bigtriangledown: '▽',
    bigtriangleup: '△',
    biguplus: '⨄',
    bigvee: '⋁',
    bigwedge: '⋀',
    bkarow: '⤍',
    blacklozenge: '⧫',
    blacksquare: '▪',
    blacktriangle: '▴',
    blacktriangledown: '▾',
    blacktriangleleft: '◂',
    blacktriangleright: '▸',
    blank: '␣',
    blk12: '▒',
    blk14: '░',
    blk34: '▓',
    block: '█',
    bne: '=⃥',
    bnequiv: '≡⃥',
    bnot: '⌐',
    bopf: '𝕓',
    bot: '⊥',
    bottom: '⊥',
    bowtie: '⋈',
    boxDL: '╗',
    boxDR: '╔',
    boxDl: '╖',
    boxDr: '╓',
    boxH: '═',
    boxHD: '╦',
    boxHU: '╩',
    boxHd: '╤',
    boxHu: '╧',
    boxUL: '╝',
    boxUR: '╚',
    boxUl: '╜',
    boxUr: '╙',
    boxV: '║',
    boxVH: '╬',
    boxVL: '╣',
    boxVR: '╠',
    boxVh: '╫',
    boxVl: '╢',
    boxVr: '╟',
    boxbox: '⧉',
    boxdL: '╕',
    boxdR: '╒',
    boxdl: '┐',
    boxdr: '┌',
    boxh: '─',
    boxhD: '╥',
    boxhU: '╨',
    boxhd: '┬',
    boxhu: '┴',
    boxminus: '⊟',
    boxplus: '⊞',
    boxtimes: '⊠',
    boxuL: '╛',
    boxuR: '╘',
    boxul: '┘',
    boxur: '└',
    boxv: '│',
    boxvH: '╪',
    boxvL: '╡',
    boxvR: '╞',
    boxvh: '┼',
    boxvl: '┤',
    boxvr: '├',
    bprime: '‵',
    breve: '˘',
    brvba: '¦',
    brvbar: '¦',
    bscr: '𝒷',
    bsemi: '⁏',
    bsim: '∽',
    bsime: '⋍',
    bsol: '\\',
    bsolb: '⧅',
    bsolhsub: '⟈',
    bull: '•',
    bullet: '•',
    bump: '≎',
    bumpE: '⪮',
    bumpe: '≏',
    bumpeq: '≏',
    cacute: 'ć',
    cap: '∩',
    capand: '⩄',
    capbrcup: '⩉',
    capcap: '⩋',
    capcup: '⩇',
    capdot: '⩀',
    caps: '∩︀',
    caret: '⁁',
    caron: 'ˇ',
    ccaps: '⩍',
    ccaron: 'č',
    ccedi: 'ç',
    ccedil: 'ç',
    ccirc: 'ĉ',
    ccups: '⩌',
    ccupssm: '⩐',
    cdot: 'ċ',
    cedi: '¸',
    cedil: '¸',
    cemptyv: '⦲',
    cen: '¢',
    cent: '¢',
    centerdot: '·',
    cfr: '𝔠',
    chcy: 'ч',
    check: '✓',
    checkmark: '✓',
    chi: 'χ',
    cir: '○',
    cirE: '⧃',
    circ: 'ˆ',
    circeq: '≗',
    circlearrowleft: '↺',
    circlearrowright: '↻',
    circledR: '®',
    circledS: 'Ⓢ',
    circledast: '⊛',
    circledcirc: '⊚',
    circleddash: '⊝',
    cire: '≗',
    cirfnint: '⨐',
    cirmid: '⫯',
    cirscir: '⧂',
    clubs: '♣',
    clubsuit: '♣',
    colon: ':',
    colone: '≔',
    coloneq: '≔',
    comma: ',',
    commat: '@',
    comp: '∁',
    compfn: '∘',
    complement: '∁',
    complexes: 'ℂ',
    cong: '≅',
    congdot: '⩭',
    conint: '∮',
    copf: '𝕔',
    coprod: '∐',
    cop: '©',
    copy: '©',
    copysr: '℗',
    crarr: '↵',
    cross: '✗',
    cscr: '𝒸',
    csub: '⫏',
    csube: '⫑',
    csup: '⫐',
    csupe: '⫒',
    ctdot: '⋯',
    cudarrl: '⤸',
    cudarrr: '⤵',
    cuepr: '⋞',
    cuesc: '⋟',
    cularr: '↶',
    cularrp: '⤽',
    cup: '∪',
    cupbrcap: '⩈',
    cupcap: '⩆',
    cupcup: '⩊',
    cupdot: '⊍',
    cupor: '⩅',
    cups: '∪︀',
    curarr: '↷',
    curarrm: '⤼',
    curlyeqprec: '⋞',
    curlyeqsucc: '⋟',
    curlyvee: '⋎',
    curlywedge: '⋏',
    curre: '¤',
    curren: '¤',
    curvearrowleft: '↶',
    curvearrowright: '↷',
    cuvee: '⋎',
    cuwed: '⋏',
    cwconint: '∲',
    cwint: '∱',
    cylcty: '⌭',
    dArr: '⇓',
    dHar: '⥥',
    dagger: '†',
    daleth: 'ℸ',
    darr: '↓',
    dash: '‐',
    dashv: '⊣',
    dbkarow: '⤏',
    dblac: '˝',
    dcaron: 'ď',
    dcy: 'д',
    dd: 'ⅆ',
    ddagger: '‡',
    ddarr: '⇊',
    ddotseq: '⩷',
    de: '°',
    deg: '°',
    delta: 'δ',
    demptyv: '⦱',
    dfisht: '⥿',
    dfr: '𝔡',
    dharl: '⇃',
    dharr: '⇂',
    diam: '⋄',
    diamond: '⋄',
    diamondsuit: '♦',
    diams: '♦',
    die: '¨',
    digamma: 'ϝ',
    disin: '⋲',
    div: '÷',
    divid: '÷',
    divide: '÷',
    divideontimes: '⋇',
    divonx: '⋇',
    djcy: 'ђ',
    dlcorn: '⌞',
    dlcrop: '⌍',
    dollar: '$',
    dopf: '𝕕',
    dot: '˙',
    doteq: '≐',
    doteqdot: '≑',
    dotminus: '∸',
    dotplus: '∔',
    dotsquare: '⊡',
    doublebarwedge: '⌆',
    downarrow: '↓',
    downdownarrows: '⇊',
    downharpoonleft: '⇃',
    downharpoonright: '⇂',
    drbkarow: '⤐',
    drcorn: '⌟',
    drcrop: '⌌',
    dscr: '𝒹',
    dscy: 'ѕ',
    dsol: '⧶',
    dstrok: 'đ',
    dtdot: '⋱',
    dtri: '▿',
    dtrif: '▾',
    duarr: '⇵',
    duhar: '⥯',
    dwangle: '⦦',
    dzcy: 'џ',
    dzigrarr: '⟿',
    eDDot: '⩷',
    eDot: '≑',
    eacut: 'é',
    eacute: 'é',
    easter: '⩮',
    ecaron: 'ě',
    ecir: 'ê',
    ecirc: 'ê',
    ecolon: '≕',
    ecy: 'э',
    edot: 'ė',
    ee: 'ⅇ',
    efDot: '≒',
    efr: '𝔢',
    eg: '⪚',
    egrav: 'è',
    egrave: 'è',
    egs: '⪖',
    egsdot: '⪘',
    el: '⪙',
    elinters: '⏧',
    ell: 'ℓ',
    els: '⪕',
    elsdot: '⪗',
    emacr: 'ē',
    empty: '∅',
    emptyset: '∅',
    emptyv: '∅',
    emsp13: ' ',
    emsp14: ' ',
    emsp: ' ',
    eng: 'ŋ',
    ensp: ' ',
    eogon: 'ę',
    eopf: '𝕖',
    epar: '⋕',
    eparsl: '⧣',
    eplus: '⩱',
    epsi: 'ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    eqcirc: '≖',
    eqcolon: '≕',
    eqsim: '≂',
    eqslantgtr: '⪖',
    eqslantless: '⪕',
    equals: '=',
    equest: '≟',
    equiv: '≡',
    equivDD: '⩸',
    eqvparsl: '⧥',
    erDot: '≓',
    erarr: '⥱',
    escr: 'ℯ',
    esdot: '≐',
    esim: '≂',
    eta: 'η',
    et: 'ð',
    eth: 'ð',
    eum: 'ë',
    euml: 'ë',
    euro: '€',
    excl: '!',
    exist: '∃',
    expectation: 'ℰ',
    exponentiale: 'ⅇ',
    fallingdotseq: '≒',
    fcy: 'ф',
    female: '♀',
    ffilig: 'ﬃ',
    fflig: 'ﬀ',
    ffllig: 'ﬄ',
    ffr: '𝔣',
    filig: 'ﬁ',
    fjlig: 'fj',
    flat: '♭',
    fllig: 'ﬂ',
    fltns: '▱',
    fnof: 'ƒ',
    fopf: '𝕗',
    forall: '∀',
    fork: '⋔',
    forkv: '⫙',
    fpartint: '⨍',
    frac1: '¼',
    frac12: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac3: '¾',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄',
    frown: '⌢',
    fscr: '𝒻',
    gE: '≧',
    gEl: '⪌',
    gacute: 'ǵ',
    gamma: 'γ',
    gammad: 'ϝ',
    gap: '⪆',
    gbreve: 'ğ',
    gcirc: 'ĝ',
    gcy: 'г',
    gdot: 'ġ',
    ge: '≥',
    gel: '⋛',
    geq: '≥',
    geqq: '≧',
    geqslant: '⩾',
    ges: '⩾',
    gescc: '⪩',
    gesdot: '⪀',
    gesdoto: '⪂',
    gesdotol: '⪄',
    gesl: '⋛︀',
    gesles: '⪔',
    gfr: '𝔤',
    gg: '≫',
    ggg: '⋙',
    gimel: 'ℷ',
    gjcy: 'ѓ',
    gl: '≷',
    glE: '⪒',
    gla: '⪥',
    glj: '⪤',
    gnE: '≩',
    gnap: '⪊',
    gnapprox: '⪊',
    gne: '⪈',
    gneq: '⪈',
    gneqq: '≩',
    gnsim: '⋧',
    gopf: '𝕘',
    grave: '`',
    gscr: 'ℊ',
    gsim: '≳',
    gsime: '⪎',
    gsiml: '⪐',
    g: '>',
    gt: '>',
    gtcc: '⪧',
    gtcir: '⩺',
    gtdot: '⋗',
    gtlPar: '⦕',
    gtquest: '⩼',
    gtrapprox: '⪆',
    gtrarr: '⥸',
    gtrdot: '⋗',
    gtreqless: '⋛',
    gtreqqless: '⪌',
    gtrless: '≷',
    gtrsim: '≳',
    gvertneqq: '≩︀',
    gvnE: '≩︀',
    hArr: '⇔',
    hairsp: ' ',
    half: '½',
    hamilt: 'ℋ',
    hardcy: 'ъ',
    harr: '↔',
    harrcir: '⥈',
    harrw: '↭',
    hbar: 'ℏ',
    hcirc: 'ĥ',
    hearts: '♥',
    heartsuit: '♥',
    hellip: '…',
    hercon: '⊹',
    hfr: '𝔥',
    hksearow: '⤥',
    hkswarow: '⤦',
    hoarr: '⇿',
    homtht: '∻',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    hopf: '𝕙',
    horbar: '―',
    hscr: '𝒽',
    hslash: 'ℏ',
    hstrok: 'ħ',
    hybull: '⁃',
    hyphen: '‐',
    iacut: 'í',
    iacute: 'í',
    ic: '⁣',
    icir: 'î',
    icirc: 'î',
    icy: 'и',
    iecy: 'е',
    iexc: '¡',
    iexcl: '¡',
    iff: '⇔',
    ifr: '𝔦',
    igrav: 'ì',
    igrave: 'ì',
    ii: 'ⅈ',
    iiiint: '⨌',
    iiint: '∭',
    iinfin: '⧜',
    iiota: '℩',
    ijlig: 'ĳ',
    imacr: 'ī',
    image: 'ℑ',
    imagline: 'ℐ',
    imagpart: 'ℑ',
    imath: 'ı',
    imof: '⊷',
    imped: 'Ƶ',
    in: '∈',
    incare: '℅',
    infin: '∞',
    infintie: '⧝',
    inodot: 'ı',
    int: '∫',
    intcal: '⊺',
    integers: 'ℤ',
    intercal: '⊺',
    intlarhk: '⨗',
    intprod: '⨼',
    iocy: 'ё',
    iogon: 'į',
    iopf: '𝕚',
    iota: 'ι',
    iprod: '⨼',
    iques: '¿',
    iquest: '¿',
    iscr: '𝒾',
    isin: '∈',
    isinE: '⋹',
    isindot: '⋵',
    isins: '⋴',
    isinsv: '⋳',
    isinv: '∈',
    it: '⁢',
    itilde: 'ĩ',
    iukcy: 'і',
    ium: 'ï',
    iuml: 'ï',
    jcirc: 'ĵ',
    jcy: 'й',
    jfr: '𝔧',
    jmath: 'ȷ',
    jopf: '𝕛',
    jscr: '𝒿',
    jsercy: 'ј',
    jukcy: 'є',
    kappa: 'κ',
    kappav: 'ϰ',
    kcedil: 'ķ',
    kcy: 'к',
    kfr: '𝔨',
    kgreen: 'ĸ',
    khcy: 'х',
    kjcy: 'ќ',
    kopf: '𝕜',
    kscr: '𝓀',
    lAarr: '⇚',
    lArr: '⇐',
    lAtail: '⤛',
    lBarr: '⤎',
    lE: '≦',
    lEg: '⪋',
    lHar: '⥢',
    lacute: 'ĺ',
    laemptyv: '⦴',
    lagran: 'ℒ',
    lambda: 'λ',
    lang: '⟨',
    langd: '⦑',
    langle: '⟨',
    lap: '⪅',
    laqu: '«',
    laquo: '«',
    larr: '←',
    larrb: '⇤',
    larrbfs: '⤟',
    larrfs: '⤝',
    larrhk: '↩',
    larrlp: '↫',
    larrpl: '⤹',
    larrsim: '⥳',
    larrtl: '↢',
    lat: '⪫',
    latail: '⤙',
    late: '⪭',
    lates: '⪭︀',
    lbarr: '⤌',
    lbbrk: '❲',
    lbrace: '{',
    lbrack: '[',
    lbrke: '⦋',
    lbrksld: '⦏',
    lbrkslu: '⦍',
    lcaron: 'ľ',
    lcedil: 'ļ',
    lceil: '⌈',
    lcub: '{',
    lcy: 'л',
    ldca: '⤶',
    ldquo: '“',
    ldquor: '„',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    ldsh: '↲',
    le: '≤',
    leftarrow: '←',
    leftarrowtail: '↢',
    leftharpoondown: '↽',
    leftharpoonup: '↼',
    leftleftarrows: '⇇',
    leftrightarrow: '↔',
    leftrightarrows: '⇆',
    leftrightharpoons: '⇋',
    leftrightsquigarrow: '↭',
    leftthreetimes: '⋋',
    leg: '⋚',
    leq: '≤',
    leqq: '≦',
    leqslant: '⩽',
    les: '⩽',
    lescc: '⪨',
    lesdot: '⩿',
    lesdoto: '⪁',
    lesdotor: '⪃',
    lesg: '⋚︀',
    lesges: '⪓',
    lessapprox: '⪅',
    lessdot: '⋖',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    lessgtr: '≶',
    lesssim: '≲',
    lfisht: '⥼',
    lfloor: '⌊',
    lfr: '𝔩',
    lg: '≶',
    lgE: '⪑',
    lhard: '↽',
    lharu: '↼',
    lharul: '⥪',
    lhblk: '▄',
    ljcy: 'љ',
    ll: '≪',
    llarr: '⇇',
    llcorner: '⌞',
    llhard: '⥫',
    lltri: '◺',
    lmidot: 'ŀ',
    lmoust: '⎰',
    lmoustache: '⎰',
    lnE: '≨',
    lnap: '⪉',
    lnapprox: '⪉',
    lne: '⪇',
    lneq: '⪇',
    lneqq: '≨',
    lnsim: '⋦',
    loang: '⟬',
    loarr: '⇽',
    lobrk: '⟦',
    longleftarrow: '⟵',
    longleftrightarrow: '⟷',
    longmapsto: '⟼',
    longrightarrow: '⟶',
    looparrowleft: '↫',
    looparrowright: '↬',
    lopar: '⦅',
    lopf: '𝕝',
    loplus: '⨭',
    lotimes: '⨴',
    lowast: '∗',
    lowbar: '_',
    loz: '◊',
    lozenge: '◊',
    lozf: '⧫',
    lpar: '(',
    lparlt: '⦓',
    lrarr: '⇆',
    lrcorner: '⌟',
    lrhar: '⇋',
    lrhard: '⥭',
    lrm: '‎',
    lrtri: '⊿',
    lsaquo: '‹',
    lscr: '𝓁',
    lsh: '↰',
    lsim: '≲',
    lsime: '⪍',
    lsimg: '⪏',
    lsqb: '[',
    lsquo: '‘',
    lsquor: '‚',
    lstrok: 'ł',
    l: '<',
    lt: '<',
    ltcc: '⪦',
    ltcir: '⩹',
    ltdot: '⋖',
    lthree: '⋋',
    ltimes: '⋉',
    ltlarr: '⥶',
    ltquest: '⩻',
    ltrPar: '⦖',
    ltri: '◃',
    ltrie: '⊴',
    ltrif: '◂',
    lurdshar: '⥊',
    luruhar: '⥦',
    lvertneqq: '≨︀',
    lvnE: '≨︀',
    mDDot: '∺',
    mac: '¯',
    macr: '¯',
    male: '♂',
    malt: '✠',
    maltese: '✠',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    mapstoleft: '↤',
    mapstoup: '↥',
    marker: '▮',
    mcomma: '⨩',
    mcy: 'м',
    mdash: '—',
    measuredangle: '∡',
    mfr: '𝔪',
    mho: '℧',
    micr: 'µ',
    micro: 'µ',
    mid: '∣',
    midast: '*',
    midcir: '⫰',
    middo: '·',
    middot: '·',
    minus: '−',
    minusb: '⊟',
    minusd: '∸',
    minusdu: '⨪',
    mlcp: '⫛',
    mldr: '…',
    mnplus: '∓',
    models: '⊧',
    mopf: '𝕞',
    mp: '∓',
    mscr: '𝓂',
    mstpos: '∾',
    mu: 'μ',
    multimap: '⊸',
    mumap: '⊸',
    nGg: '⋙̸',
    nGt: '≫⃒',
    nGtv: '≫̸',
    nLeftarrow: '⇍',
    nLeftrightarrow: '⇎',
    nLl: '⋘̸',
    nLt: '≪⃒',
    nLtv: '≪̸',
    nRightarrow: '⇏',
    nVDash: '⊯',
    nVdash: '⊮',
    nabla: '∇',
    nacute: 'ń',
    nang: '∠⃒',
    nap: '≉',
    napE: '⩰̸',
    napid: '≋̸',
    napos: 'ŉ',
    napprox: '≉',
    natur: '♮',
    natural: '♮',
    naturals: 'ℕ',
    nbs: ' ',
    nbsp: ' ',
    nbump: '≎̸',
    nbumpe: '≏̸',
    ncap: '⩃',
    ncaron: 'ň',
    ncedil: 'ņ',
    ncong: '≇',
    ncongdot: '⩭̸',
    ncup: '⩂',
    ncy: 'н',
    ndash: '–',
    ne: '≠',
    neArr: '⇗',
    nearhk: '⤤',
    nearr: '↗',
    nearrow: '↗',
    nedot: '≐̸',
    nequiv: '≢',
    nesear: '⤨',
    nesim: '≂̸',
    nexist: '∄',
    nexists: '∄',
    nfr: '𝔫',
    ngE: '≧̸',
    nge: '≱',
    ngeq: '≱',
    ngeqq: '≧̸',
    ngeqslant: '⩾̸',
    nges: '⩾̸',
    ngsim: '≵',
    ngt: '≯',
    ngtr: '≯',
    nhArr: '⇎',
    nharr: '↮',
    nhpar: '⫲',
    ni: '∋',
    nis: '⋼',
    nisd: '⋺',
    niv: '∋',
    njcy: 'њ',
    nlArr: '⇍',
    nlE: '≦̸',
    nlarr: '↚',
    nldr: '‥',
    nle: '≰',
    nleftarrow: '↚',
    nleftrightarrow: '↮',
    nleq: '≰',
    nleqq: '≦̸',
    nleqslant: '⩽̸',
    nles: '⩽̸',
    nless: '≮',
    nlsim: '≴',
    nlt: '≮',
    nltri: '⋪',
    nltrie: '⋬',
    nmid: '∤',
    nopf: '𝕟',
    no: '¬',
    not: '¬',
    notin: '∉',
    notinE: '⋹̸',
    notindot: '⋵̸',
    notinva: '∉',
    notinvb: '⋷',
    notinvc: '⋶',
    notni: '∌',
    notniva: '∌',
    notnivb: '⋾',
    notnivc: '⋽',
    npar: '∦',
    nparallel: '∦',
    nparsl: '⫽⃥',
    npart: '∂̸',
    npolint: '⨔',
    npr: '⊀',
    nprcue: '⋠',
    npre: '⪯̸',
    nprec: '⊀',
    npreceq: '⪯̸',
    nrArr: '⇏',
    nrarr: '↛',
    nrarrc: '⤳̸',
    nrarrw: '↝̸',
    nrightarrow: '↛',
    nrtri: '⋫',
    nrtrie: '⋭',
    nsc: '⊁',
    nsccue: '⋡',
    nsce: '⪰̸',
    nscr: '𝓃',
    nshortmid: '∤',
    nshortparallel: '∦',
    nsim: '≁',
    nsime: '≄',
    nsimeq: '≄',
    nsmid: '∤',
    nspar: '∦',
    nsqsube: '⋢',
    nsqsupe: '⋣',
    nsub: '⊄',
    nsubE: '⫅̸',
    nsube: '⊈',
    nsubset: '⊂⃒',
    nsubseteq: '⊈',
    nsubseteqq: '⫅̸',
    nsucc: '⊁',
    nsucceq: '⪰̸',
    nsup: '⊅',
    nsupE: '⫆̸',
    nsupe: '⊉',
    nsupset: '⊃⃒',
    nsupseteq: '⊉',
    nsupseteqq: '⫆̸',
    ntgl: '≹',
    ntild: 'ñ',
    ntilde: 'ñ',
    ntlg: '≸',
    ntriangleleft: '⋪',
    ntrianglelefteq: '⋬',
    ntriangleright: '⋫',
    ntrianglerighteq: '⋭',
    nu: 'ν',
    num: '#',
    numero: '№',
    numsp: ' ',
    nvDash: '⊭',
    nvHarr: '⤄',
    nvap: '≍⃒',
    nvdash: '⊬',
    nvge: '≥⃒',
    nvgt: '>⃒',
    nvinfin: '⧞',
    nvlArr: '⤂',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvltrie: '⊴⃒',
    nvrArr: '⤃',
    nvrtrie: '⊵⃒',
    nvsim: '∼⃒',
    nwArr: '⇖',
    nwarhk: '⤣',
    nwarr: '↖',
    nwarrow: '↖',
    nwnear: '⤧',
    oS: 'Ⓢ',
    oacut: 'ó',
    oacute: 'ó',
    oast: '⊛',
    ocir: 'ô',
    ocirc: 'ô',
    ocy: 'о',
    odash: '⊝',
    odblac: 'ő',
    odiv: '⨸',
    odot: '⊙',
    odsold: '⦼',
    oelig: 'œ',
    ofcir: '⦿',
    ofr: '𝔬',
    ogon: '˛',
    ograv: 'ò',
    ograve: 'ò',
    ogt: '⧁',
    ohbar: '⦵',
    ohm: 'Ω',
    oint: '∮',
    olarr: '↺',
    olcir: '⦾',
    olcross: '⦻',
    oline: '‾',
    olt: '⧀',
    omacr: 'ō',
    omega: 'ω',
    omicron: 'ο',
    omid: '⦶',
    ominus: '⊖',
    oopf: '𝕠',
    opar: '⦷',
    operp: '⦹',
    oplus: '⊕',
    or: '∨',
    orarr: '↻',
    ord: 'º',
    order: 'ℴ',
    orderof: 'ℴ',
    ordf: 'ª',
    ordm: 'º',
    origof: '⊶',
    oror: '⩖',
    orslope: '⩗',
    orv: '⩛',
    oscr: 'ℴ',
    oslas: 'ø',
    oslash: 'ø',
    osol: '⊘',
    otild: 'õ',
    otilde: 'õ',
    otimes: '⊗',
    otimesas: '⨶',
    oum: 'ö',
    ouml: 'ö',
    ovbar: '⌽',
    par: '¶',
    para: '¶',
    parallel: '∥',
    parsim: '⫳',
    parsl: '⫽',
    part: '∂',
    pcy: 'п',
    percnt: '%',
    period: '.',
    permil: '‰',
    perp: '⊥',
    pertenk: '‱',
    pfr: '𝔭',
    phi: 'φ',
    phiv: 'ϕ',
    phmmat: 'ℳ',
    phone: '☎',
    pi: 'π',
    pitchfork: '⋔',
    piv: 'ϖ',
    planck: 'ℏ',
    planckh: 'ℎ',
    plankv: 'ℏ',
    plus: '+',
    plusacir: '⨣',
    plusb: '⊞',
    pluscir: '⨢',
    plusdo: '∔',
    plusdu: '⨥',
    pluse: '⩲',
    plusm: '±',
    plusmn: '±',
    plussim: '⨦',
    plustwo: '⨧',
    pm: '±',
    pointint: '⨕',
    popf: '𝕡',
    poun: '£',
    pound: '£',
    pr: '≺',
    prE: '⪳',
    prap: '⪷',
    prcue: '≼',
    pre: '⪯',
    prec: '≺',
    precapprox: '⪷',
    preccurlyeq: '≼',
    preceq: '⪯',
    precnapprox: '⪹',
    precneqq: '⪵',
    precnsim: '⋨',
    precsim: '≾',
    prime: '′',
    primes: 'ℙ',
    prnE: '⪵',
    prnap: '⪹',
    prnsim: '⋨',
    prod: '∏',
    profalar: '⌮',
    profline: '⌒',
    profsurf: '⌓',
    prop: '∝',
    propto: '∝',
    prsim: '≾',
    prurel: '⊰',
    pscr: '𝓅',
    psi: 'ψ',
    puncsp: ' ',
    qfr: '𝔮',
    qint: '⨌',
    qopf: '𝕢',
    qprime: '⁗',
    qscr: '𝓆',
    quaternions: 'ℍ',
    quatint: '⨖',
    quest: '?',
    questeq: '≟',
    quo: '"',
    quot: '"',
    rAarr: '⇛',
    rArr: '⇒',
    rAtail: '⤜',
    rBarr: '⤏',
    rHar: '⥤',
    race: '∽̱',
    racute: 'ŕ',
    radic: '√',
    raemptyv: '⦳',
    rang: '⟩',
    rangd: '⦒',
    range: '⦥',
    rangle: '⟩',
    raqu: '»',
    raquo: '»',
    rarr: '→',
    rarrap: '⥵',
    rarrb: '⇥',
    rarrbfs: '⤠',
    rarrc: '⤳',
    rarrfs: '⤞',
    rarrhk: '↪',
    rarrlp: '↬',
    rarrpl: '⥅',
    rarrsim: '⥴',
    rarrtl: '↣',
    rarrw: '↝',
    ratail: '⤚',
    ratio: '∶',
    rationals: 'ℚ',
    rbarr: '⤍',
    rbbrk: '❳',
    rbrace: '}',
    rbrack: ']',
    rbrke: '⦌',
    rbrksld: '⦎',
    rbrkslu: '⦐',
    rcaron: 'ř',
    rcedil: 'ŗ',
    rceil: '⌉',
    rcub: '}',
    rcy: 'р',
    rdca: '⤷',
    rdldhar: '⥩',
    rdquo: '”',
    rdquor: '”',
    rdsh: '↳',
    real: 'ℜ',
    realine: 'ℛ',
    realpart: 'ℜ',
    reals: 'ℝ',
    rect: '▭',
    re: '®',
    reg: '®',
    rfisht: '⥽',
    rfloor: '⌋',
    rfr: '𝔯',
    rhard: '⇁',
    rharu: '⇀',
    rharul: '⥬',
    rho: 'ρ',
    rhov: 'ϱ',
    rightarrow: '→',
    rightarrowtail: '↣',
    rightharpoondown: '⇁',
    rightharpoonup: '⇀',
    rightleftarrows: '⇄',
    rightleftharpoons: '⇌',
    rightrightarrows: '⇉',
    rightsquigarrow: '↝',
    rightthreetimes: '⋌',
    ring: '˚',
    risingdotseq: '≓',
    rlarr: '⇄',
    rlhar: '⇌',
    rlm: '‏',
    rmoust: '⎱',
    rmoustache: '⎱',
    rnmid: '⫮',
    roang: '⟭',
    roarr: '⇾',
    robrk: '⟧',
    ropar: '⦆',
    ropf: '𝕣',
    roplus: '⨮',
    rotimes: '⨵',
    rpar: ')',
    rpargt: '⦔',
    rppolint: '⨒',
    rrarr: '⇉',
    rsaquo: '›',
    rscr: '𝓇',
    rsh: '↱',
    rsqb: ']',
    rsquo: '’',
    rsquor: '’',
    rthree: '⋌',
    rtimes: '⋊',
    rtri: '▹',
    rtrie: '⊵',
    rtrif: '▸',
    rtriltri: '⧎',
    ruluhar: '⥨',
    rx: '℞',
    sacute: 'ś',
    sbquo: '‚',
    sc: '≻',
    scE: '⪴',
    scap: '⪸',
    scaron: 'š',
    sccue: '≽',
    sce: '⪰',
    scedil: 'ş',
    scirc: 'ŝ',
    scnE: '⪶',
    scnap: '⪺',
    scnsim: '⋩',
    scpolint: '⨓',
    scsim: '≿',
    scy: 'с',
    sdot: '⋅',
    sdotb: '⊡',
    sdote: '⩦',
    seArr: '⇘',
    searhk: '⤥',
    searr: '↘',
    searrow: '↘',
    sec: '§',
    sect: '§',
    semi: ';',
    seswar: '⤩',
    setminus: '∖',
    setmn: '∖',
    sext: '✶',
    sfr: '𝔰',
    sfrown: '⌢',
    sharp: '♯',
    shchcy: 'щ',
    shcy: 'ш',
    shortmid: '∣',
    shortparallel: '∥',
    sh: '­',
    shy: '­',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    sim: '∼',
    simdot: '⩪',
    sime: '≃',
    simeq: '≃',
    simg: '⪞',
    simgE: '⪠',
    siml: '⪝',
    simlE: '⪟',
    simne: '≆',
    simplus: '⨤',
    simrarr: '⥲',
    slarr: '←',
    smallsetminus: '∖',
    smashp: '⨳',
    smeparsl: '⧤',
    smid: '∣',
    smile: '⌣',
    smt: '⪪',
    smte: '⪬',
    smtes: '⪬︀',
    softcy: 'ь',
    sol: '/',
    solb: '⧄',
    solbar: '⌿',
    sopf: '𝕤',
    spades: '♠',
    spadesuit: '♠',
    spar: '∥',
    sqcap: '⊓',
    sqcaps: '⊓︀',
    sqcup: '⊔',
    sqcups: '⊔︀',
    sqsub: '⊏',
    sqsube: '⊑',
    sqsubset: '⊏',
    sqsubseteq: '⊑',
    sqsup: '⊐',
    sqsupe: '⊒',
    sqsupset: '⊐',
    sqsupseteq: '⊒',
    squ: '□',
    square: '□',
    squarf: '▪',
    squf: '▪',
    srarr: '→',
    sscr: '𝓈',
    ssetmn: '∖',
    ssmile: '⌣',
    sstarf: '⋆',
    star: '☆',
    starf: '★',
    straightepsilon: 'ϵ',
    straightphi: 'ϕ',
    strns: '¯',
    sub: '⊂',
    subE: '⫅',
    subdot: '⪽',
    sube: '⊆',
    subedot: '⫃',
    submult: '⫁',
    subnE: '⫋',
    subne: '⊊',
    subplus: '⪿',
    subrarr: '⥹',
    subset: '⊂',
    subseteq: '⊆',
    subseteqq: '⫅',
    subsetneq: '⊊',
    subsetneqq: '⫋',
    subsim: '⫇',
    subsub: '⫕',
    subsup: '⫓',
    succ: '≻',
    succapprox: '⪸',
    succcurlyeq: '≽',
    succeq: '⪰',
    succnapprox: '⪺',
    succneqq: '⪶',
    succnsim: '⋩',
    succsim: '≿',
    sum: '∑',
    sung: '♪',
    sup: '⊃',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    supE: '⫆',
    supdot: '⪾',
    supdsub: '⫘',
    supe: '⊇',
    supedot: '⫄',
    suphsol: '⟉',
    suphsub: '⫗',
    suplarr: '⥻',
    supmult: '⫂',
    supnE: '⫌',
    supne: '⊋',
    supplus: '⫀',
    supset: '⊃',
    supseteq: '⊇',
    supseteqq: '⫆',
    supsetneq: '⊋',
    supsetneqq: '⫌',
    supsim: '⫈',
    supsub: '⫔',
    supsup: '⫖',
    swArr: '⇙',
    swarhk: '⤦',
    swarr: '↙',
    swarrow: '↙',
    swnwar: '⤪',
    szli: 'ß',
    szlig: 'ß',
    target: '⌖',
    tau: 'τ',
    tbrk: '⎴',
    tcaron: 'ť',
    tcedil: 'ţ',
    tcy: 'т',
    tdot: '⃛',
    telrec: '⌕',
    tfr: '𝔱',
    there4: '∴',
    therefore: '∴',
    theta: 'θ',
    thetasym: 'ϑ',
    thetav: 'ϑ',
    thickapprox: '≈',
    thicksim: '∼',
    thinsp: ' ',
    thkap: '≈',
    thksim: '∼',
    thor: 'þ',
    thorn: 'þ',
    tilde: '˜',
    time: '×',
    times: '×',
    timesb: '⊠',
    timesbar: '⨱',
    timesd: '⨰',
    tint: '∭',
    toea: '⤨',
    top: '⊤',
    topbot: '⌶',
    topcir: '⫱',
    topf: '𝕥',
    topfork: '⫚',
    tosa: '⤩',
    tprime: '‴',
    trade: '™',
    triangle: '▵',
    triangledown: '▿',
    triangleleft: '◃',
    trianglelefteq: '⊴',
    triangleq: '≜',
    triangleright: '▹',
    trianglerighteq: '⊵',
    tridot: '◬',
    trie: '≜',
    triminus: '⨺',
    triplus: '⨹',
    trisb: '⧍',
    tritime: '⨻',
    trpezium: '⏢',
    tscr: '𝓉',
    tscy: 'ц',
    tshcy: 'ћ',
    tstrok: 'ŧ',
    twixt: '≬',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    uArr: '⇑',
    uHar: '⥣',
    uacut: 'ú',
    uacute: 'ú',
    uarr: '↑',
    ubrcy: 'ў',
    ubreve: 'ŭ',
    ucir: 'û',
    ucirc: 'û',
    ucy: 'у',
    udarr: '⇅',
    udblac: 'ű',
    udhar: '⥮',
    ufisht: '⥾',
    ufr: '𝔲',
    ugrav: 'ù',
    ugrave: 'ù',
    uharl: '↿',
    uharr: '↾',
    uhblk: '▀',
    ulcorn: '⌜',
    ulcorner: '⌜',
    ulcrop: '⌏',
    ultri: '◸',
    umacr: 'ū',
    um: '¨',
    uml: '¨',
    uogon: 'ų',
    uopf: '𝕦',
    uparrow: '↑',
    updownarrow: '↕',
    upharpoonleft: '↿',
    upharpoonright: '↾',
    uplus: '⊎',
    upsi: 'υ',
    upsih: 'ϒ',
    upsilon: 'υ',
    upuparrows: '⇈',
    urcorn: '⌝',
    urcorner: '⌝',
    urcrop: '⌎',
    uring: 'ů',
    urtri: '◹',
    uscr: '𝓊',
    utdot: '⋰',
    utilde: 'ũ',
    utri: '▵',
    utrif: '▴',
    uuarr: '⇈',
    uum: 'ü',
    uuml: 'ü',
    uwangle: '⦧',
    vArr: '⇕',
    vBar: '⫨',
    vBarv: '⫩',
    vDash: '⊨',
    vangrt: '⦜',
    varepsilon: 'ϵ',
    varkappa: 'ϰ',
    varnothing: '∅',
    varphi: 'ϕ',
    varpi: 'ϖ',
    varpropto: '∝',
    varr: '↕',
    varrho: 'ϱ',
    varsigma: 'ς',
    varsubsetneq: '⊊︀',
    varsubsetneqq: '⫋︀',
    varsupsetneq: '⊋︀',
    varsupsetneqq: '⫌︀',
    vartheta: 'ϑ',
    vartriangleleft: '⊲',
    vartriangleright: '⊳',
    vcy: 'в',
    vdash: '⊢',
    vee: '∨',
    veebar: '⊻',
    veeeq: '≚',
    vellip: '⋮',
    verbar: '|',
    vert: '|',
    vfr: '𝔳',
    vltri: '⊲',
    vnsub: '⊂⃒',
    vnsup: '⊃⃒',
    vopf: '𝕧',
    vprop: '∝',
    vrtri: '⊳',
    vscr: '𝓋',
    vsubnE: '⫋︀',
    vsubne: '⊊︀',
    vsupnE: '⫌︀',
    vsupne: '⊋︀',
    vzigzag: '⦚',
    wcirc: 'ŵ',
    wedbar: '⩟',
    wedge: '∧',
    wedgeq: '≙',
    weierp: '℘',
    wfr: '𝔴',
    wopf: '𝕨',
    wp: '℘',
    wr: '≀',
    wreath: '≀',
    wscr: '𝓌',
    xcap: '⋂',
    xcirc: '◯',
    xcup: '⋃',
    xdtri: '▽',
    xfr: '𝔵',
    xhArr: '⟺',
    xharr: '⟷',
    xi: 'ξ',
    xlArr: '⟸',
    xlarr: '⟵',
    xmap: '⟼',
    xnis: '⋻',
    xodot: '⨀',
    xopf: '𝕩',
    xoplus: '⨁',
    xotime: '⨂',
    xrArr: '⟹',
    xrarr: '⟶',
    xscr: '𝓍',
    xsqcup: '⨆',
    xuplus: '⨄',
    xutri: '△',
    xvee: '⋁',
    xwedge: '⋀',
    yacut: 'ý',
    yacute: 'ý',
    yacy: 'я',
    ycirc: 'ŷ',
    ycy: 'ы',
    ye: '¥',
    yen: '¥',
    yfr: '𝔶',
    yicy: 'ї',
    yopf: '𝕪',
    yscr: '𝓎',
    yucy: 'ю',
    yum: 'ÿ',
    yuml: 'ÿ',
    zacute: 'ź',
    zcaron: 'ž',
    zcy: 'з',
    zdot: 'ż',
    zeetrf: 'ℨ',
    zeta: 'ζ',
    zfr: '𝔷',
    zhcy: 'ж',
    zigrarr: '⇝',
    zopf: '𝕫',
    zscr: '𝓏',
    zwj: '‍',
    zwnj: '‌'
};


var $7c9eedf9985e9319$var$own = {
}.hasOwnProperty;
function $7c9eedf9985e9319$export$3fc0912547321ab3(characters) {
    return $7c9eedf9985e9319$var$own.call($52512792806e1b27$export$ec810d1aafce79a7, characters) ? $52512792806e1b27$export$ec810d1aafce79a7[characters] : false;
}



const $6047486b929e4c53$export$e31905600aaf3d8e = {
    name: 'characterReference',
    tokenize: $6047486b929e4c53$var$tokenizeCharacterReference
};
/** @type {Tokenizer} */ function $6047486b929e4c53$var$tokenizeCharacterReference(effects, ok, nok) {
    const self = this;
    let size = 0;
    /** @type {number} */ let max;
    /** @type {(code: Code) => code is number} */ let test;
    /** @type {State} */ function start(code) {
        effects.enter('characterReference');
        effects.enter('characterReferenceMarker');
        effects.consume(code);
        effects.exit('characterReferenceMarker');
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 35) {
            effects.enter('characterReferenceMarkerNumeric');
            effects.consume(code);
            effects.exit('characterReferenceMarkerNumeric');
            return numeric;
        }
        effects.enter('characterReferenceValue');
        max = 31;
        test = $2d97e78534b5d038$export$75c76db11865a9f4;
        return value(code);
    }
    /** @type {State} */ function numeric(code) {
        if (code === 88 || code === 120) {
            effects.enter('characterReferenceMarkerHexadecimal');
            effects.consume(code);
            effects.exit('characterReferenceMarkerHexadecimal');
            effects.enter('characterReferenceValue');
            max = 6;
            test = $2d97e78534b5d038$export$eca2752363989806;
            return value;
        }
        effects.enter('characterReferenceValue');
        max = 7;
        test = $2d97e78534b5d038$export$ca8b5b1a6c320e6e;
        return value(code);
    }
    /** @type {State} */ function value(code) {
        /** @type {Token} */ let token;
        if (code === 59 && size) {
            token = effects.exit('characterReferenceValue');
            if (test === $2d97e78534b5d038$export$75c76db11865a9f4 && !$7c9eedf9985e9319$export$3fc0912547321ab3(self.sliceSerialize(token))) {
                return nok(code);
            }
            effects.enter('characterReferenceMarker');
            effects.consume(code);
            effects.exit('characterReferenceMarker');
            effects.exit('characterReference');
            return ok;
        }
        if (test(code) && (size++) < max) {
            effects.consume(code);
            return value;
        }
        return nok(code);
    }
    return start;
}



const $66f5470bc387380a$export$c23e4921f8d87e7c = {
    name: 'codeFenced',
    tokenize: $66f5470bc387380a$var$tokenizeCodeFenced,
    concrete: true
};
/** @type {Tokenizer} */ function $66f5470bc387380a$var$tokenizeCodeFenced(effects1, ok1, nok1) {
    const self1 = this;
    /** @type {Construct} */ const closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
    };
    /** @type {Construct} */ const nonLazyLine = {
        tokenize: tokenizeNonLazyLine,
        partial: true
    };
    const tail = this.events[this.events.length - 1];
    const initialPrefix = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let sizeOpen = 0;
    /** @type {NonNullable<Code>} */ let marker;
    /** @type {State} */ function start1(code) {
        effects1.enter('codeFenced');
        effects1.enter('codeFencedFence');
        effects1.enter('codeFencedFenceSequence');
        marker = code;
        return sequenceOpen(code);
    }
    /** @type {State} */ function sequenceOpen(code) {
        if (code === marker) {
            effects1.consume(code);
            sizeOpen++;
            return sequenceOpen;
        }
        effects1.exit('codeFencedFenceSequence');
        return sizeOpen < 3 ? nok1(code) : $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects1, infoOpen, 'whitespace')(code);
    }
    /** @type {State} */ function infoOpen(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return openAfter(code);
        }
        effects1.enter('codeFencedFenceInfo');
        effects1.enter('chunkString', {
            contentType: 'string'
        });
        return info(code);
    }
    /** @type {State} */ function info(code) {
        if (code === null || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            effects1.exit('chunkString');
            effects1.exit('codeFencedFenceInfo');
            return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects1, infoAfter, 'whitespace')(code);
        }
        if (code === 96 && code === marker) return nok1(code);
        effects1.consume(code);
        return info;
    }
    /** @type {State} */ function infoAfter(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return openAfter(code);
        }
        effects1.enter('codeFencedFenceMeta');
        effects1.enter('chunkString', {
            contentType: 'string'
        });
        return meta(code);
    }
    /** @type {State} */ function meta(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects1.exit('chunkString');
            effects1.exit('codeFencedFenceMeta');
            return openAfter(code);
        }
        if (code === 96 && code === marker) return nok1(code);
        effects1.consume(code);
        return meta;
    }
    /** @type {State} */ function openAfter(code) {
        effects1.exit('codeFencedFence');
        return self1.interrupt ? ok1(code) : contentStart(code);
    }
    /** @type {State} */ function contentStart(code) {
        if (code === null) {
            return after(code);
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return effects1.attempt(nonLazyLine, effects1.attempt(closingFenceConstruct, after, initialPrefix ? $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects1, contentStart, 'linePrefix', initialPrefix + 1) : contentStart), after)(code);
        }
        effects1.enter('codeFlowValue');
        return contentContinue(code);
    }
    /** @type {State} */ function contentContinue(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects1.exit('codeFlowValue');
            return contentStart(code);
        }
        effects1.consume(code);
        return contentContinue;
    }
    /** @type {State} */ function after(code) {
        effects1.exit('codeFenced');
        return ok1(code);
    }
    /** @type {Tokenizer} */ function tokenizeNonLazyLine(effects, ok, nok) {
        const self = this;
        return start;
        /** @type {State} */ function start(code) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {Tokenizer} */ function tokenizeClosingFence(effects, ok, nok) {
        let size = 0;
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, closingSequenceStart, 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
        /** @type {State} */ function closingSequenceStart(code) {
            effects.enter('codeFencedFence');
            effects.enter('codeFencedFenceSequence');
            return closingSequence(code);
        }
        /** @type {State} */ function closingSequence(code) {
            if (code === marker) {
                effects.consume(code);
                size++;
                return closingSequence;
            }
            if (size < sizeOpen) return nok(code);
            effects.exit('codeFencedFenceSequence');
            return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, closingSequenceEnd, 'whitespace')(code);
        }
        /** @type {State} */ function closingSequenceEnd(code) {
            if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
                effects.exit('codeFencedFence');
                return ok(code);
            }
            return nok(code);
        }
    }
    return start1;
}



const $325a2048196bfedc$export$47910b7ab28d1853 = {
    name: 'codeIndented',
    tokenize: $325a2048196bfedc$var$tokenizeCodeIndented
};
/** @type {Construct} */ const $325a2048196bfedc$var$indentedContent = {
    tokenize: $325a2048196bfedc$var$tokenizeIndentedContent,
    partial: true
};
/** @type {Tokenizer} */ function $325a2048196bfedc$var$tokenizeCodeIndented(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        effects.enter('codeIndented');
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, afterStartPrefix, 'linePrefix', 5)(code);
    }
    /** @type {State} */ function afterStartPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        if (code === null) {
            return after(code);
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return effects.attempt($325a2048196bfedc$var$indentedContent, afterPrefix, after)(code);
        }
        effects.enter('codeFlowValue');
        return content(code);
    }
    /** @type {State} */ function content(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.exit('codeFlowValue');
            return afterPrefix(code);
        }
        effects.consume(code);
        return content;
    }
    /** @type {State} */ function after(code) {
        effects.exit('codeIndented');
        return ok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $325a2048196bfedc$var$tokenizeIndentedContent(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        // If this is a lazy line, it can’t be code.
        if (self.parser.lazy[self.now().line]) {
            return nok(code);
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            return start;
        }
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, afterPrefix, 'linePrefix', 5)(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : $2d97e78534b5d038$export$34a1dff1c0936953(code) ? start(code) : nok(code);
    }
    return start;
}


const $8c581d5a6ffc76b5$export$d24f93e715f9df88 = {
    name: 'codeText',
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
    if ((events[headEnterIndex][1].type === 'lineEnding' || events[headEnterIndex][1].type === 'space') && (events[tailExitIndex][1].type === 'lineEnding' || events[tailExitIndex][1].type === 'space')) {
        index = headEnterIndex // And we have data.
        ;
        while(++index < tailExitIndex)if (events[index][1].type === 'codeTextData') {
            // Then we have padding.
            events[headEnterIndex][1].type = 'codeTextPadding';
            events[tailExitIndex][1].type = 'codeTextPadding';
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
        }
    } // Merge adjacent spaces and data.
    index = headEnterIndex - 1;
    tailExitIndex++;
    while(++index <= tailExitIndex){
        if (enter === undefined) {
            if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') enter = index;
        } else if (index === tailExitIndex || events[index][1].type === 'lineEnding') {
            events[enter][1].type = 'codeTextData';
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
    return code !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
/** @type {Tokenizer} */ function $8c581d5a6ffc76b5$var$tokenizeCodeText(effects, ok, nok) {
    const self = this;
    let sizeOpen = 0;
    /** @type {number} */ let size;
    /** @type {Token} */ let token;
    /** @type {State} */ function start(code) {
        effects.enter('codeText');
        effects.enter('codeTextSequence');
        return openingSequence(code);
    }
    /** @type {State} */ function openingSequence(code) {
        if (code === 96) {
            effects.consume(code);
            sizeOpen++;
            return openingSequence;
        }
        effects.exit('codeTextSequence');
        return gap(code);
    }
    /** @type {State} */ function gap(code) {
        // EOF.
        if (code === null) {
            return nok(code);
        } // Closing fence?
        // Could also be data.
        if (code === 96) {
            token = effects.enter('codeTextSequence');
            size = 0;
            return closingSequence(code);
        } // Tabs don’t work, and virtual spaces don’t make sense.
        if (code === 32) {
            effects.enter('space');
            effects.consume(code);
            effects.exit('space');
            return gap;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            return gap;
        } // Data.
        effects.enter('codeTextData');
        return data(code);
    } // In code.
    /** @type {State} */ function data(code) {
        if (code === null || code === 32 || code === 96 || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.exit('codeTextData');
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
            effects.exit('codeTextSequence');
            effects.exit('codeText');
            return ok(code);
        } // More or less accents: mark as data.
        token.type = 'codeTextData';
        return data(code);
    }
    return start;
}




function $1994b46ae75d2098$export$12949d1dd00fddf4(events) {
    /** @type {Record<string, number>} */ const jumps = {
    };
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
        if (index && event[1].type === 'chunkFlow' && events[index - 1][1].type === 'listItemPrefix') {
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'lineEndingBlank') otherIndex += 2;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'content') while(++otherIndex < subevents.length){
                if (subevents[otherIndex][1].type === 'content') break;
                if (subevents[otherIndex][1].type === 'chunkText') {
                    subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                    otherIndex++;
                }
            }
        } // Enter.
        if (event[0] === 'enter') {
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
                if (otherEvent[1].type === 'lineEnding' || otherEvent[1].type === 'lineEndingBlank') {
                    if (otherEvent[0] === 'enter') {
                        if (lineIndex) events[lineIndex][1].type = 'lineEndingBlank';
                        otherEvent[1].type = 'lineEnding';
                        lineIndex = otherIndex;
                    }
                } else break;
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = Object.assign({
                }, events[lineIndex][1].start) // Switch container exit w/ line endings.
                ;
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                $e3740fd54cb8c53f$export$869882364835d202(events, lineIndex, index - lineIndex + 1, parameters);
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
    /** @type {Record<string, number>} */ const gaps = {
    };
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
    childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
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
        $e3740fd54cb8c53f$export$869882364835d202(events, start, 2, slice);
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
    $1994b46ae75d2098$export$12949d1dd00fddf4(events);
    return events;
}
/** @type {Tokenizer} */ function $1e6b44114e63325a$var$tokenizeContent(effects, ok) {
    /** @type {Token} */ let previous;
    /** @type {State} */ function start(code) {
        effects.enter('content');
        previous = effects.enter('chunkContent', {
            contentType: 'content'
        });
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            return contentEnd(code);
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return effects.check($1e6b44114e63325a$var$continuationConstruct, contentContinue, contentEnd)(code);
        } // Data.
        effects.consume(code);
        return data;
    }
    /** @type {State} */ function contentEnd(code) {
        effects.exit('chunkContent');
        effects.exit('content');
        return ok(code);
    }
    /** @type {State} */ function contentContinue(code) {
        effects.consume(code);
        effects.exit('chunkContent');
        previous.next = effects.enter('chunkContent', {
            contentType: 'content',
            previous: previous
        });
        previous = previous.next;
        return data;
    }
    return start;
}
/** @type {Tokenizer} */ function $1e6b44114e63325a$var$tokenizeContinuation(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function startLookahead(code) {
        effects.exit('chunkContent');
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, prefixed, 'linePrefix');
    }
    /** @type {State} */ function prefixed(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return nok(code);
        }
        const tail = self.events[self.events.length - 1];
        if (!self.parser.constructs.disable.null.includes('codeIndented') && tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4) {
            return ok(code);
        }
        return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
    }
    return startLookahead;
}


function $a55811878a6d919b$export$2e6c8deaa96af245(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    /** @type {State} */ function start(code) {
        if (code === 60) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return destinationEnclosedBefore;
        }
        if (code === null || code === 41 || $2d97e78534b5d038$export$67dbf494fc8394df(code)) {
            return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter('chunkString', {
            contentType: 'string'
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
        effects.enter('chunkString', {
            contentType: 'string'
        });
        return destinationEnclosed(code);
    }
    /** @type {State} */ function destinationEnclosed(code) {
        if (code === 62) {
            effects.exit('chunkString');
            effects.exit(stringType);
            return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return nok(code);
        }
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
                effects.exit('chunkString');
                effects.exit(stringType);
                effects.exit(rawType);
                effects.exit(type);
                return ok(code);
            }
            effects.consume(code);
            return destinationRaw;
        }
        if (code === null || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            if (balance) return nok(code);
            effects.exit('chunkString');
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if ($2d97e78534b5d038$export$67dbf494fc8394df(code)) return nok(code);
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
    return start;
}



function $4536f5abd1e4f7fe$export$7b768614d8ba97a7(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let data;
    /** @type {State} */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /** @type {State} */ function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && '_hiddenFootnoteSupport' in self.parser.constructs || size > 999) {
            return nok(code);
        }
        if (code === 93) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            return atBreak;
        }
        effects.enter('chunkString', {
            contentType: 'string'
        });
        return label(code);
    }
    /** @type {State} */ function label(code) {
        if (code === null || code === 91 || code === 93 || $2d97e78534b5d038$export$34a1dff1c0936953(code) || size++ > 999) {
            effects.exit('chunkString');
            return atBreak(code);
        }
        effects.consume(code);
        data = data || !$2d97e78534b5d038$export$2c6cf65c1127992a(code);
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
    return start;
}





function $cb5c88803ba9609f$export$f970569cc855e483(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
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
        if (code === null) {
            return nok(code);
        } // Note: blank lines can’t exist in content.
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, atTitleBreak, 'linePrefix');
        }
        effects.enter('chunkString', {
            contentType: 'string'
        });
        return title(code);
    }
    /** @type {State} */ function title(code) {
        if (code === marker || code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.exit('chunkString');
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
    return start;
}




function $20e7a21d90fe4811$export$1f27bd1aa33ce173(effects, ok) {
    /** @type {boolean} */ let seen;
    /** @type {State} */ function start(code) {
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            seen = true;
            return start;
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, start, seen ? 'linePrefix' : 'lineSuffix')(code);
        }
        return ok(code);
    }
    return start;
}


function $d172c91bf9d24083$export$806d55e226cfcd08(value) {
    return value // Collapse Markdown whitespace.
    .replace(/[\t\n\r ]+/g, ' ') // Trim.
    .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}



const $8c9f7f00fff845d7$export$69f215ed977cdb73 = {
    name: 'definition',
    tokenize: $8c9f7f00fff845d7$var$tokenizeDefinition
};
/** @type {Construct} */ const $8c9f7f00fff845d7$var$titleConstruct = {
    tokenize: $8c9f7f00fff845d7$var$tokenizeTitle,
    partial: true
};
/** @type {Tokenizer} */ function $8c9f7f00fff845d7$var$tokenizeDefinition(effects, ok, nok) {
    const self = this;
    /** @type {string} */ let identifier;
    /** @type {State} */ function start(code) {
        effects.enter('definition');
        return $4536f5abd1e4f7fe$export$7b768614d8ba97a7.call(self, effects, labelAfter, nok, 'definitionLabel', 'definitionLabelMarker', 'definitionLabelString')(code);
    }
    /** @type {State} */ function labelAfter(code) {
        identifier = $d172c91bf9d24083$export$806d55e226cfcd08(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
            effects.enter('definitionMarker');
            effects.consume(code);
            effects.exit('definitionMarker') // Note: blank lines can’t exist in content.
            ;
            return $20e7a21d90fe4811$export$1f27bd1aa33ce173(effects, $a55811878a6d919b$export$2e6c8deaa96af245(effects, effects.attempt($8c9f7f00fff845d7$var$titleConstruct, $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, after, 'whitespace'), $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, after, 'whitespace')), nok, 'definitionDestination', 'definitionDestinationLiteral', 'definitionDestinationLiteralMarker', 'definitionDestinationRaw', 'definitionDestinationString'));
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.exit('definition');
            if (!self.parser.defined.includes(identifier)) {
                self.parser.defined.push(identifier);
            }
            return ok(code);
        }
        return nok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $8c9f7f00fff845d7$var$tokenizeTitle(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        return $2d97e78534b5d038$export$a30284361b3814b7(code) ? $20e7a21d90fe4811$export$1f27bd1aa33ce173(effects, before)(code) : nok(code);
    }
    /** @type {State} */ function before(code) {
        if (code === 34 || code === 39 || code === 40) {
            return $cb5c88803ba9609f$export$f970569cc855e483(effects, $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, after, 'whitespace'), nok, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(code);
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        return code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code) ? ok(code) : nok(code);
    }
    return start;
}


const $3562f2aa4264913a$export$86c573ab9e06f418 = {
    name: 'hardBreakEscape',
    tokenize: $3562f2aa4264913a$var$tokenizeHardBreakEscape
};
/** @type {Tokenizer} */ function $3562f2aa4264913a$var$tokenizeHardBreakEscape(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        effects.enter('hardBreakEscape');
        effects.enter('escapeMarker');
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.exit('escapeMarker');
            effects.exit('hardBreakEscape');
            return ok(code);
        }
        return nok(code);
    }
    return start;
}




const $43b35896caf66e80$export$3871e9deb360695c = {
    name: 'headingAtx',
    tokenize: $43b35896caf66e80$var$tokenizeHeadingAtx,
    resolve: $43b35896caf66e80$var$resolveHeadingAtx
};
/** @type {Resolver} */ function $43b35896caf66e80$var$resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    /** @type {Token} */ let content;
    /** @type {Token} */ let text // Prefix whitespace, part of the opening.
    ;
    if (events[contentStart][1].type === 'whitespace') contentStart += 2;
     // Suffix whitespace, part of the closing.
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === 'whitespace') contentEnd -= 2;
    if (events[contentEnd][1].type === 'atxHeadingSequence' && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === 'whitespace')) contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    if (contentEnd > contentStart) {
        content = {
            type: 'atxHeadingText',
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end
        };
        text = {
            type: 'chunkText',
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end,
            // @ts-expect-error Constants are fine to assign.
            contentType: 'text'
        };
        $e3740fd54cb8c53f$export$869882364835d202(events, contentStart, contentEnd - contentStart + 1, [
            [
                'enter',
                content,
                context
            ],
            [
                'enter',
                text,
                context
            ],
            [
                'exit',
                text,
                context
            ],
            [
                'exit',
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
    /** @type {State} */ function start(code) {
        effects.enter('atxHeading');
        effects.enter('atxHeadingSequence');
        return fenceOpenInside(code);
    }
    /** @type {State} */ function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
            effects.consume(code);
            return fenceOpenInside;
        }
        if (code === null || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            effects.exit('atxHeadingSequence');
            return self.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
    }
    /** @type {State} */ function headingBreak(code) {
        if (code === 35) {
            effects.enter('atxHeadingSequence');
            return sequence(code);
        }
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.exit('atxHeading');
            return ok(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, headingBreak, 'whitespace')(code);
        }
        effects.enter('atxHeadingText');
        return data(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === 35) {
            effects.consume(code);
            return sequence;
        }
        effects.exit('atxHeadingSequence');
        return headingBreak(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null || code === 35 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            effects.exit('atxHeadingText');
            return headingBreak(code);
        }
        effects.consume(code);
        return data;
    }
    return start;
}


const $278742f10417da06$export$7364aee1c59d1879 = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'section',
    'source',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul'
];
const $278742f10417da06$export$948e66da505d080 = [
    'pre',
    'script',
    'style',
    'textarea'
];



const $d0d399add511d511$export$476ac411cb7d0d8f = {
    name: 'htmlFlow',
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
        if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') break;
    }
    if (index > 1 && events[index - 2][1].type === 'linePrefix') {
        // Add the prefix start to the HTML token.
        events[index][1].start = events[index - 2][1].start // Add the prefix start to the HTML line token.
        ;
        events[index + 1][1].start = events[index - 2][1].start // Remove the line prefix.
        ;
        events.splice(index - 2, 2);
    }
    return events;
}
/** @type {Tokenizer} */ function $d0d399add511d511$var$tokenizeHtmlFlow(effects1, ok1, nok1) {
    const self = this;
    /** @type {number} */ let kind;
    /** @type {boolean} */ let startTag;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {Code} */ let marker;
    /** @type {State} */ function start1(code) {
        effects1.enter('htmlFlow');
        effects1.enter('htmlFlowData');
        effects1.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 33) {
            effects1.consume(code);
            return declarationStart;
        }
        if (code === 47) {
            effects1.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects1.consume(code);
            kind = 3 // While we’re in an instruction instead of a declaration, we’re on a `?`
            ;
            // right now, so we do need to search for `>`, similar to declarations.
            return self.interrupt ? ok1 : continuationDeclarationInside;
        }
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
            effects1.consume(code);
            buffer = String.fromCharCode(code);
            startTag = true;
            return tagName;
        }
        return nok1(code);
    }
    /** @type {State} */ function declarationStart(code) {
        if (code === 45) {
            effects1.consume(code);
            kind = 2;
            return commentOpenInside;
        }
        if (code === 91) {
            effects1.consume(code);
            kind = 5;
            buffer = 'CDATA[';
            index = 0;
            return cdataOpenInside;
        }
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
            effects1.consume(code);
            kind = 4;
            return self.interrupt ? ok1 : continuationDeclarationInside;
        }
        return nok1(code);
    }
    /** @type {State} */ function commentOpenInside(code) {
        if (code === 45) {
            effects1.consume(code);
            return self.interrupt ? ok1 : continuationDeclarationInside;
        }
        return nok1(code);
    }
    /** @type {State} */ function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects1.consume(code);
            return index === buffer.length ? self.interrupt ? ok1 : continuation : cdataOpenInside;
        }
        return nok1(code);
    }
    /** @type {State} */ function tagCloseStart(code) {
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
            effects1.consume(code);
            buffer = String.fromCharCode(code);
            return tagName;
        }
        return nok1(code);
    }
    /** @type {State} */ function tagName(code) {
        if (code === null || code === 47 || code === 62 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            if (code !== 47 && startTag && $278742f10417da06$export$948e66da505d080.includes(buffer.toLowerCase())) {
                kind = 1;
                return self.interrupt ? ok1(code) : continuation(code);
            }
            if ($278742f10417da06$export$7364aee1c59d1879.includes(buffer.toLowerCase())) {
                kind = 6;
                if (code === 47) {
                    effects1.consume(code);
                    return basicSelfClosing;
                }
                return self.interrupt ? ok1(code) : continuation(code);
            }
            kind = 7 // Do not support complete HTML when interrupting
            ;
            return self.interrupt && !self.parser.lazy[self.now().line] ? nok1(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || $2d97e78534b5d038$export$75c76db11865a9f4(code)) {
            effects1.consume(code);
            buffer += String.fromCharCode(code);
            return tagName;
        }
        return nok1(code);
    }
    /** @type {State} */ function basicSelfClosing(code) {
        if (code === 62) {
            effects1.consume(code);
            return self.interrupt ? ok1 : continuation;
        }
        return nok1(code);
    }
    /** @type {State} */ function completeClosingTagAfter(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return completeClosingTagAfter;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeNameBefore(code) {
        if (code === 47) {
            effects1.consume(code);
            return completeEnd;
        }
        if (code === 58 || code === 95 || $2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
            effects1.consume(code);
            return completeAttributeName;
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return completeAttributeNameBefore;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || $2d97e78534b5d038$export$75c76db11865a9f4(code)) {
            effects1.consume(code);
            return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
    }
    /** @type {State} */ function completeAttributeNameAfter(code) {
        if (code === 61) {
            effects1.consume(code);
            return completeAttributeValueBefore;
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
    }
    /** @type {State} */ function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok1(code);
        }
        if (code === 34 || code === 39) {
            effects1.consume(code);
            marker = code;
            return completeAttributeValueQuoted;
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return completeAttributeValueBefore;
        }
        marker = null;
        return completeAttributeValueUnquoted(code);
    }
    /** @type {State} */ function completeAttributeValueQuoted(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return nok1(code);
        }
        if (code === marker) {
            effects1.consume(code);
            return completeAttributeValueQuotedAfter;
        }
        effects1.consume(code);
        return completeAttributeValueQuoted;
    }
    /** @type {State} */ function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            return completeAttributeNameAfter(code);
        }
        effects1.consume(code);
        return completeAttributeValueUnquoted;
    }
    /** @type {State} */ function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || $2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            return completeAttributeNameBefore(code);
        }
        return nok1(code);
    }
    /** @type {State} */ function completeEnd(code) {
        if (code === 62) {
            effects1.consume(code);
            return completeAfter;
        }
        return nok1(code);
    }
    /** @type {State} */ function completeAfter(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return completeAfter;
        }
        return code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code) ? continuation(code) : nok1(code);
    }
    /** @type {State} */ function continuation(code) {
        if (code === 45 && kind === 2) {
            effects1.consume(code);
            return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
            effects1.consume(code);
            return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
            effects1.consume(code);
            return continuationClose;
        }
        if (code === 63 && kind === 3) {
            effects1.consume(code);
            return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
            effects1.consume(code);
            return continuationCharacterDataInside;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code) && (kind === 6 || kind === 7)) {
            return effects1.check($d0d399add511d511$var$nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
        }
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return continuationAtLineEnding(code);
        }
        effects1.consume(code);
        return continuation;
    }
    /** @type {State} */ function continuationAtLineEnding(code) {
        effects1.exit('htmlFlowData');
        return htmlContinueStart(code);
    }
    /** @type {State} */ function htmlContinueStart(code) {
        if (code === null) {
            return done(code);
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return effects1.attempt({
                tokenize: htmlLineEnd,
                partial: true
            }, htmlContinueStart, done)(code);
        }
        effects1.enter('htmlFlowData');
        return continuation(code);
    }
    /** @type {Tokenizer} */ function htmlLineEnd(effects, ok, nok) {
        return start;
        /** @type {State} */ function start(code) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {State} */ function continuationCommentInside(code) {
        if (code === 45) {
            effects1.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawTagOpen(code) {
        if (code === 47) {
            effects1.consume(code);
            buffer = '';
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawEndTag(code) {
        if (code === 62 && $278742f10417da06$export$948e66da505d080.includes(buffer.toLowerCase())) {
            effects1.consume(code);
            return continuationClose;
        }
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code) && buffer.length < 8) {
            effects1.consume(code);
            buffer += String.fromCharCode(code);
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationCharacterDataInside(code) {
        if (code === 93) {
            effects1.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationDeclarationInside(code) {
        if (code === 62) {
            effects1.consume(code);
            return continuationClose;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationClose(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects1.exit('htmlFlowData');
            return done(code);
        }
        effects1.consume(code);
        return continuationClose;
    }
    /** @type {State} */ function done(code) {
        effects1.exit('htmlFlow');
        return ok1(code);
    }
    return start1;
}
/** @type {Tokenizer} */ function $d0d399add511d511$var$tokenizeNextBlank(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        effects.exit('htmlFlowData');
        effects.enter('lineEndingBlank');
        effects.consume(code);
        effects.exit('lineEndingBlank');
        return effects.attempt($68b861ff9f9a6ffe$export$d50d28ce3ab2a612, ok, nok);
    }
    return start;
}



const $a4322c42fc5bfa79$export$398af27f284914fe = {
    name: 'htmlText',
    tokenize: $a4322c42fc5bfa79$var$tokenizeHtmlText
};
/** @type {Tokenizer} */ function $a4322c42fc5bfa79$var$tokenizeHtmlText(effects, ok, nok) {
    const self = this;
    /** @type {NonNullable<Code>|undefined} */ let marker;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {State} */ let returnState;
    /** @type {State} */ function start(code) {
        effects.enter('htmlText');
        effects.enter('htmlTextData');
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
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
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
            buffer = 'CDATA[';
            index = 0;
            return cdataOpen;
        }
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
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
        if (code === null || code === 62) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentStartDash;
        }
        return comment(code);
    }
    /** @type {State} */ function commentStartDash(code) {
        if (code === null || code === 62) {
            return nok(code);
        }
        return comment(code);
    }
    /** @type {State} */ function comment(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentClose;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
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
        if (code === null) {
            return nok(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataClose;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
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
        if (code === 62) {
            return end(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /** @type {State} */ function declaration(code) {
        if (code === null || code === 62) {
            return end(code);
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            returnState = declaration;
            return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
    }
    /** @type {State} */ function instruction(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 63) {
            effects.consume(code);
            return instructionClose;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
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
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
            effects.consume(code);
            return tagClose;
        }
        return nok(code);
    }
    /** @type {State} */ function tagClose(code) {
        if (code === 45 || $2d97e78534b5d038$export$75c76db11865a9f4(code)) {
            effects.consume(code);
            return tagClose;
        }
        return tagCloseBetween(code);
    }
    /** @type {State} */ function tagCloseBetween(code) {
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            returnState = tagCloseBetween;
            return atLineEnding(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.consume(code);
            return tagCloseBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpen(code) {
        if (code === 45 || $2d97e78534b5d038$export$75c76db11865a9f4(code)) {
            effects.consume(code);
            return tagOpen;
        }
        if (code === 47 || code === 62 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    /** @type {State} */ function tagOpenBetween(code) {
        if (code === 47) {
            effects.consume(code);
            return end;
        }
        if (code === 58 || code === 95 || $2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            returnState = tagOpenBetween;
            return atLineEnding(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.consume(code);
            return tagOpenBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || $2d97e78534b5d038$export$75c76db11865a9f4(code)) {
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
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            returnState = tagOpenAttributeNameAfter;
            return atLineEnding(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.consume(code);
            return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
    }
    /** @type {State} */ function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok(code);
        }
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return tagOpenAttributeValueQuoted;
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            returnState = tagOpenAttributeValueBefore;
            return atLineEnding(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
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
        if (code === null) {
            return nok(code);
        }
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            returnState = tagOpenAttributeValueQuoted;
            return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
    }
    /** @type {State} */ function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    /** @type {State} */ function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
            return nok(code);
        }
        if (code === 62 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
    } // We can’t have blank lines in content, so no need to worry about empty
    // tokens.
    /** @type {State} */ function atLineEnding(code) {
        effects.exit('htmlTextData');
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, afterPrefix, 'linePrefix', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
    }
    /** @type {State} */ function afterPrefix(code) {
        effects.enter('htmlTextData');
        return returnState(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 62) {
            effects.consume(code);
            effects.exit('htmlTextData');
            effects.exit('htmlText');
            return ok;
        }
        return nok(code);
    }
    return start;
}









const $4ca27e6a0d375a47$export$470a5dafbbf62654 = {
    name: 'labelEnd',
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
        if (token.type === 'labelImage' || token.type === 'labelLink' || token.type === 'labelEnd') {
            // Remove the marker.
            events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
            token.type = 'data';
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
            if (token.type === 'link' || token.type === 'labelLink' && token._inactive) break;
             // Mark other link openings as inactive, as we can’t have links in
            // links.
            if (events[index][0] === 'enter' && token.type === 'labelLink') token._inactive = true;
        } else if (close) {
            if (events[index][0] === 'enter' && (token.type === 'labelImage' || token.type === 'labelLink') && !token._balanced) {
                open = index;
                if (token.type !== 'labelLink') {
                    offset = 2;
                    break;
                }
            }
        } else if (token.type === 'labelEnd') close = index;
    }
    const group = {
        type: events[open][1].type === 'labelLink' ? 'link' : 'image',
        start: Object.assign({
        }, events[open][1].start),
        end: Object.assign({
        }, events[events.length - 1][1].end)
    };
    const label = {
        type: 'label',
        start: Object.assign({
        }, events[open][1].start),
        end: Object.assign({
        }, events[close][1].end)
    };
    const text = {
        type: 'labelText',
        start: Object.assign({
        }, events[open + offset + 2][1].end),
        end: Object.assign({
        }, events[close - 2][1].start)
    };
    media = [
        [
            'enter',
            group,
            context
        ],
        [
            'enter',
            label,
            context
        ]
    ] // Opening marker.
    ;
    media = $e3740fd54cb8c53f$export$4cbf152802aa238(media, events.slice(open + 1, open + offset + 3)) // Text open.
    ;
    media = $e3740fd54cb8c53f$export$4cbf152802aa238(media, [
        [
            'enter',
            text,
            context
        ]
    ]) // Between.
    ;
    media = $e3740fd54cb8c53f$export$4cbf152802aa238(media, $2d1cd621ae059249$export$3ff61ec196ff408b(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)) // Text close, marker close, label close.
    ;
    media = $e3740fd54cb8c53f$export$4cbf152802aa238(media, [
        [
            'exit',
            text,
            context
        ],
        events[close - 2],
        events[close - 1],
        [
            'exit',
            label,
            context
        ]
    ]) // Reference, resource, or so.
    ;
    media = $e3740fd54cb8c53f$export$4cbf152802aa238(media, events.slice(close + 1)) // Media close.
    ;
    media = $e3740fd54cb8c53f$export$4cbf152802aa238(media, [
        [
            'exit',
            group,
            context
        ]
    ]);
    $e3740fd54cb8c53f$export$869882364835d202(events, open, events.length, media);
    return events;
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeLabelEnd(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Token} */ let labelStart;
    /** @type {boolean} */ let defined // Find an opening.
    ;
    while(index--)if ((self.events[index][1].type === 'labelImage' || self.events[index][1].type === 'labelLink') && !self.events[index][1]._balanced) {
        labelStart = self.events[index][1];
        break;
    }
    /** @type {State} */ function start(code) {
        if (!labelStart) {
            return nok(code);
        } // It’s a balanced bracket, but contains a link.
        if (labelStart._inactive) return balanced(code);
        defined = self.parser.defined.includes($d172c91bf9d24083$export$806d55e226cfcd08(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        })));
        effects.enter('labelEnd');
        effects.enter('labelMarker');
        effects.consume(code);
        effects.exit('labelMarker');
        effects.exit('labelEnd');
        return afterLabelEnd;
    }
    /** @type {State} */ function afterLabelEnd(code) {
        // Resource: `[asd](fgh)`.
        if (code === 40) {
            return effects.attempt($4ca27e6a0d375a47$var$resourceConstruct, ok, defined ? ok : balanced)(code);
        } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
        if (code === 91) {
            return effects.attempt($4ca27e6a0d375a47$var$fullReferenceConstruct, ok, defined ? effects.attempt($4ca27e6a0d375a47$var$collapsedReferenceConstruct, ok, balanced) : balanced)(code);
        } // Shortcut reference: `[asd]`?
        return defined ? ok(code) : balanced(code);
    }
    /** @type {State} */ function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeResource(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        effects.enter('resource');
        effects.enter('resourceMarker');
        effects.consume(code);
        effects.exit('resourceMarker');
        return $20e7a21d90fe4811$export$1f27bd1aa33ce173(effects, open);
    }
    /** @type {State} */ function open(code) {
        if (code === 41) {
            return end(code);
        }
        return $a55811878a6d919b$export$2e6c8deaa96af245(effects, destinationAfter, nok, 'resourceDestination', 'resourceDestinationLiteral', 'resourceDestinationLiteralMarker', 'resourceDestinationRaw', 'resourceDestinationString', 3)(code);
    }
    /** @type {State} */ function destinationAfter(code) {
        return $2d97e78534b5d038$export$a30284361b3814b7(code) ? $20e7a21d90fe4811$export$1f27bd1aa33ce173(effects, between)(code) : end(code);
    }
    /** @type {State} */ function between(code) {
        if (code === 34 || code === 39 || code === 40) {
            return $cb5c88803ba9609f$export$f970569cc855e483(effects, $20e7a21d90fe4811$export$1f27bd1aa33ce173(effects, end), nok, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(code);
        }
        return end(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 41) {
            effects.enter('resourceMarker');
            effects.consume(code);
            effects.exit('resourceMarker');
            effects.exit('resource');
            return ok;
        }
        return nok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeFullReference(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        return $4536f5abd1e4f7fe$export$7b768614d8ba97a7.call(self, effects, afterLabel, nok, 'reference', 'referenceMarker', 'referenceString')(code);
    }
    /** @type {State} */ function afterLabel(code) {
        return self.parser.defined.includes($d172c91bf9d24083$export$806d55e226cfcd08(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $4ca27e6a0d375a47$var$tokenizeCollapsedReference(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        effects.enter('reference');
        effects.enter('referenceMarker');
        effects.consume(code);
        effects.exit('referenceMarker');
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 93) {
            effects.enter('referenceMarker');
            effects.consume(code);
            effects.exit('referenceMarker');
            effects.exit('reference');
            return ok;
        }
        return nok(code);
    }
    return start;
}


const $be729fc38c3709d2$export$3d754936e25aa5f5 = {
    name: 'labelStartImage',
    tokenize: $be729fc38c3709d2$var$tokenizeLabelStartImage,
    resolveAll: $4ca27e6a0d375a47$export$470a5dafbbf62654.resolveAll
};
/** @type {Tokenizer} */ function $be729fc38c3709d2$var$tokenizeLabelStartImage(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        effects.enter('labelImage');
        effects.enter('labelImageMarker');
        effects.consume(code);
        effects.exit('labelImageMarker');
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 91) {
            effects.enter('labelMarker');
            effects.consume(code);
            effects.exit('labelMarker');
            effects.exit('labelImage');
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        /* Hidden footnotes hook */ /* c8 ignore next 3 */ return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
    }
    return start;
}


const $6fd393c5d2eefd57$export$5c0cee0701a3b584 = {
    name: 'labelStartLink',
    tokenize: $6fd393c5d2eefd57$var$tokenizeLabelStartLink,
    resolveAll: $4ca27e6a0d375a47$export$470a5dafbbf62654.resolveAll
};
/** @type {Tokenizer} */ function $6fd393c5d2eefd57$var$tokenizeLabelStartLink(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        effects.enter('labelLink');
        effects.enter('labelMarker');
        effects.consume(code);
        effects.exit('labelMarker');
        effects.exit('labelLink');
        return after;
    }
    /** @type {State} */ function after(code) {
        /* Hidden footnotes hook. */ /* c8 ignore next 3 */ return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
    }
    return start;
}



const $01ab3c7fab6a2888$export$8e62e0ad51c97b2 = {
    name: 'lineEnding',
    tokenize: $01ab3c7fab6a2888$var$tokenizeLineEnding
};
/** @type {Tokenizer} */ function $01ab3c7fab6a2888$var$tokenizeLineEnding(effects, ok) {
    /** @type {State} */ function start(code) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, ok, 'linePrefix');
    }
    return start;
}






const $f71f47bc904aa875$export$ba7b13e047416c03 = {
    name: 'thematicBreak',
    tokenize: $f71f47bc904aa875$var$tokenizeThematicBreak
};
/** @type {Tokenizer} */ function $f71f47bc904aa875$var$tokenizeThematicBreak(effects, ok, nok) {
    let size = 0;
    /** @type {NonNullable<Code>} */ let marker;
    /** @type {State} */ function start(code) {
        effects.enter('thematicBreak');
        marker = code;
        return atBreak(code);
    }
    /** @type {State} */ function atBreak(code) {
        if (code === marker) {
            effects.enter('thematicBreakSequence');
            return sequence(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, atBreak, 'whitespace')(code);
        }
        if (size < 3 || code !== null && !$2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return nok(code);
        }
        effects.exit('thematicBreak');
        return ok(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            size++;
            return sequence;
        }
        effects.exit('thematicBreakSequence');
        return atBreak(code);
    }
    return start;
}


const $d2833e58c9c658a1$export$8837f4fc672e936d = {
    name: 'list',
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
    let initialSize = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    /** @type {State} */ function start(code) {
        const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? 'listUnordered' : 'listOrdered');
        if (kind === 'listUnordered' ? !self.containerState.marker || code === self.containerState.marker : $2d97e78534b5d038$export$ca8b5b1a6c320e6e(code)) {
            if (!self.containerState.type) {
                self.containerState.type = kind;
                effects.enter(kind, {
                    _container: true
                });
            }
            if (kind === 'listUnordered') {
                effects.enter('listItemPrefix');
                return code === 42 || code === 45 ? effects.check($f71f47bc904aa875$export$ba7b13e047416c03, nok, atMarker)(code) : atMarker(code);
            }
            if (!self.interrupt || code === 49) {
                effects.enter('listItemPrefix');
                effects.enter('listItemValue');
                return inside(code);
            }
        }
        return nok(code);
    }
    /** @type {State} */ function inside(code) {
        if ($2d97e78534b5d038$export$ca8b5b1a6c320e6e(code) && ++size < 10) {
            effects.consume(code);
            return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
            effects.exit('listItemValue');
            return atMarker(code);
        }
        return nok(code);
    }
    /**
   * @type {State}
   **/ function atMarker(code) {
        effects.enter('listItemMarker');
        effects.consume(code);
        effects.exit('listItemMarker');
        self.containerState.marker = self.containerState.marker || code;
        return effects.check($68b861ff9f9a6ffe$export$d50d28ce3ab2a612, self.interrupt ? nok : onBlank, effects.attempt($d2833e58c9c658a1$var$listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
    }
    /** @type {State} */ function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
    }
    /** @type {State} */ function otherPrefix(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.enter('listItemPrefixWhitespace');
            effects.consume(code);
            effects.exit('listItemPrefixWhitespace');
            return endOfPrefix;
        }
        return nok(code);
    }
    /** @type {State} */ function endOfPrefix(code) {
        self.containerState.size = initialSize + self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
        return ok(code);
    }
    return start;
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function $d2833e58c9c658a1$var$tokenizeListContinuation(effects, ok, nok) {
    const self = this;
    self.containerState._closeFlow = undefined;
    /** @type {State} */ function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine // We have a blank line.
        ;
        // Still, try to consume at most the items size.
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, ok, 'listItemIndent', self.containerState.size + 1)(code);
    }
    /** @type {State} */ function notBlank(code) {
        if (self.containerState.furtherBlankLines || !$2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
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
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, effects.attempt($d2833e58c9c658a1$export$8837f4fc672e936d, ok, nok), 'linePrefix', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
    }
    return effects.check($68b861ff9f9a6ffe$export$d50d28ce3ab2a612, onBlank, notBlank);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function $d2833e58c9c658a1$var$tokenizeIndent(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === 'listItemIndent' && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
    }
    return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, afterPrefix, 'listItemIndent', self.containerState.size + 1);
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
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return !$2d97e78534b5d038$export$2c6cf65c1127992a(code) && tail && tail[1].type === 'listItemPrefixWhitespace' ? ok(code) : nok(code);
    }
    return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, afterPrefix, 'listItemPrefixWhitespace', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 5);
}



const $6a0c7b3b406c4a5e$export$e104e2de391dfde9 = {
    name: 'setextUnderline',
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
    while(index--)if (events[index][0] === 'enter') {
        if (events[index][1].type === 'content') {
            content = index;
            break;
        }
        if (events[index][1].type === 'paragraph') text = index;
    } else {
        if (events[index][1].type === 'content') // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
        if (!definition && events[index][1].type === 'definition') definition = index;
    }
    const heading = {
        type: 'setextHeading',
        start: Object.assign({
        }, events[text][1].start),
        end: Object.assign({
        }, events[events.length - 1][1].end)
    } // Change the paragraph to setext heading text.
    ;
    events[text][1].type = 'setextHeadingText' // If we have definitions in the content, we’ll keep on having content,
    ;
    // but we need move it.
    if (definition) {
        events.splice(text, 0, [
            'enter',
            heading,
            context
        ]);
        events.splice(definition + 1, 0, [
            'exit',
            events[content][1],
            context
        ]);
        events[content][1].end = Object.assign({
        }, events[definition][1].end);
    } else events[content][1] = heading;
     // Add the heading exit at the end.
    events.push([
        'exit',
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
    if (self.events[index][1].type !== 'lineEnding' && self.events[index][1].type !== 'linePrefix' && self.events[index][1].type !== 'content') {
        paragraph = self.events[index][1].type === 'paragraph';
        break;
    }
    /** @type {State} */ function start(code) {
        if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
            effects.enter('setextHeadingLine');
            effects.enter('setextHeadingLineSequence');
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
        effects.exit('setextHeadingLineSequence');
        return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, closingSequenceEnd, 'lineSuffix')(code);
    }
    /** @type {State} */ function closingSequenceEnd(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            effects.exit('setextHeadingLine');
            return ok(code);
        }
        return nok(code);
    }
    return start;
}





const $5753f3a56a579788$export$ccc7b0636abaffc3 = {
    tokenize: $5753f3a56a579788$var$initializeFlow
};
/** @type {Initializer} */ function $5753f3a56a579788$var$initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(// Try to parse a blank line.
    $68b861ff9f9a6ffe$export$d50d28ce3ab2a612, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt($1e6b44114e63325a$export$a7db06668cad9adb, afterConstruct)), 'linePrefix')));
    /** @type {State} */ function atBlankEnding(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter('lineEndingBlank');
        effects.consume(code);
        effects.exit('lineEndingBlank');
        self.currentConstruct = undefined;
        return initial;
    }
    /** @type {State} */ function afterConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        self.currentConstruct = undefined;
        return initial;
    }
    return initial;
}


const $3b1483f8f85e6b8d$export$50397835cbfdbc24 = {
    resolveAll: $3b1483f8f85e6b8d$var$createResolver()
};
const $3b1483f8f85e6b8d$export$22b082955e083ec3 = $3b1483f8f85e6b8d$var$initializeFactory('string');
const $3b1483f8f85e6b8d$export$6f093cfa640b7166 = $3b1483f8f85e6b8d$var$initializeFactory('text');
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */ function $3b1483f8f85e6b8d$var$initializeFactory(field) {
    /** @type {Initializer} */ function initializeText(effects) {
        const self = this;
        const constructs = this.parser.constructs[field];
        const $3b1483f8f85e6b8d$export$6f093cfa640b7166 = effects.attempt(constructs, start, notText);
        return start;
        /** @type {State} */ function start(code) {
            return atBreak(code) ? $3b1483f8f85e6b8d$export$6f093cfa640b7166(code) : notText(code);
        }
        /** @type {State} */ function notText(code) {
            if (code === null) {
                effects.consume(code);
                return;
            }
            effects.enter('data');
            effects.consume(code);
            return data;
        }
        /** @type {State} */ function data(code) {
            if (atBreak(code)) {
                effects.exit('data');
                return $3b1483f8f85e6b8d$export$6f093cfa640b7166(code);
            } // Data.
            effects.consume(code);
            return data;
        }
        /**
     * @param {Code} code
     * @returns {boolean}
     */ function atBreak(code) {
            if (code === null) {
                return true;
            }
            const list = constructs[code];
            let index = -1;
            if (list) {
                while(++index < list.length){
                    const item = list[index];
                    if (!item.previous || item.previous.call(self, self.previous)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
    return {
        tokenize: initializeText,
        resolveAll: $3b1483f8f85e6b8d$var$createResolver(field === 'text' ? $3b1483f8f85e6b8d$var$resolveAllLineSuffixes : undefined)
    };
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */ function $3b1483f8f85e6b8d$var$createResolver(extraResolver) {
    /** @type {Resolver} */ function resolveAllText(events, context) {
        let index = -1;
        /** @type {number|undefined} */ let enter // A rather boring computation (to merge adjacent `data` events) which
        ;
        // improves mm performance by 29%.
        while(++index <= events.length){
            if (enter === undefined) {
                if (events[index] && events[index][1].type === 'data') {
                    enter = index;
                    index++;
                }
            } else if (!events[index] || events[index][1].type !== 'data') {
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
    return resolveAllText;
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
    let eventIndex = -1;
    while(++eventIndex <= events.length)if ((eventIndex === events.length || events[eventIndex][1].type === 'lineEnding') && events[eventIndex - 1][1].type === 'data') {
        const data = events[eventIndex - 1][1];
        const chunks = context.sliceStream(data);
        let index = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        /** @type {boolean|undefined} */ let tabs;
        while(index--){
            const chunk = chunks[index];
            if (typeof chunk === 'string') {
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
                type: eventIndex === events.length || tabs || size < 2 ? 'lineSuffix' : 'hardBreakTrailing',
                start: {
                    line: data.end.line,
                    column: data.end.column - size,
                    offset: data.end.offset - size,
                    _index: data.start._index + index,
                    _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
                },
                end: Object.assign({
                }, data.end)
            };
            data.end = Object.assign({
            }, token.start);
            if (data.start.offset === data.end.offset) Object.assign(data, token);
            else {
                events.splice(eventIndex, 0, [
                    'enter',
                    token,
                    context
                ], [
                    'exit',
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





function $6e1090a00c9e7d03$export$ae34f10ee4b29837(parser, initialize, from1) {
    /** @type {Point} */ let point = Object.assign(from1 ? Object.assign({
    }, from1) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    /** @type {Record<string, number>} */ const columnStart = {
    };
    /** @type {Construct[]} */ const resolveAllConstructs = [];
    /** @type {Chunk[]} */ let chunks = [];
    /** @type {Token[]} */ let stack = [];
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
        containerState: {
        },
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
    /** @type {TokenizeContext['write']} */ function write(slice) {
        chunks = $e3740fd54cb8c53f$export$4cbf152802aa238(chunks, slice);
        main() // Exit if we’re not done, resolve might change stuff.
        ;
        if (chunks[chunks.length - 1] !== null) {
            return [];
        }
        addResult(initialize, 0) // Otherwise, resolve, and exit.
        ;
        context.events = $2d1cd621ae059249$export$3ff61ec196ff408b(resolveAllConstructs, context.events, context);
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
        return Object.assign({
        }, point);
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
            if (typeof chunk === 'string') {
                chunkIndex = point._index;
                if (point._bufferIndex < 0) {
                    point._bufferIndex = 0;
                }
                while(point._index === chunkIndex && point._bufferIndex < chunk.length){
                    go(chunk.charCodeAt(point._bufferIndex));
                }
            } else {
                go(chunk);
            }
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
        if ($2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            point.line++;
            point.column = 1;
            point.offset += code === -3 ? 2 : 1;
            accountForPotentialSkip();
        } else if (code !== -1) {
            point.column++;
            point.offset++;
        } // Not in a string chunk.
        if (point._bufferIndex < 0) {
            point._index++;
        } else {
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
        const token = fields || {
        };
        token.type = type;
        token.start = now();
        context.events.push([
            'enter',
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
            'exit',
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
     * @param {Construct|Construct[]|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */ function hook(constructs, returnState, bogusState) {
            /** @type {Construct[]} */ let listOfConstructs;
            /** @type {number} */ let constructIndex;
            /** @type {Construct} */ let currentConstruct;
            /** @type {Info} */ let info;
            return Array.isArray(constructs) ? /* c8 ignore next 1 */ handleListOfConstructs(constructs) : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
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
       * @param {Construct[]} list
       * @returns {State}
       */ function handleListOfConstructs(list) {
                listOfConstructs = list;
                constructIndex = 0;
                if (list.length === 0) {
                    return bogusState;
                }
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
                    if (!construct.partial) {
                        context.currentConstruct = construct;
                    }
                    if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
                        return nok(code);
                    }
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
                if (++constructIndex < listOfConstructs.length) {
                    return handleConstruct(listOfConstructs[constructIndex]);
                }
                return bogusState;
            }
        }
    }
    /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */ function addResult(construct, from) {
        if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
            resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
            $e3740fd54cb8c53f$export$869882364835d202(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
        }
        if (construct.resolveTo) {
            context.events = construct.resolveTo(context.events, context);
        }
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
    return context;
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Chunk[]} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Chunk[]}
 */ function $6e1090a00c9e7d03$var$sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    /** @type {Chunk[]} */ let view;
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
 * @param {Chunk[]} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */ function $6e1090a00c9e7d03$var$serializeChunks(chunks, expandTabs) {
    let index = -1;
    /** @type {string[]} */ const result = [];
    /** @type {boolean|undefined} */ let atTab;
    while(++index < chunks.length){
        const chunk = chunks[index];
        /** @type {string} */ let value;
        if (typeof chunk === 'string') value = chunk;
        else switch(chunk){
            case -5:
                value = '\r';
                break;
            case -4:
                value = '\n';
                break;
            case -3:
                value = "\r\n";
                break;
            case -2:
                value = expandTabs ? ' ' : '\t';
                break;
            case -1:
                if (!expandTabs && atTab) continue;
                value = ' ';
                break;
            default:
                // Currently only replacement character.
                value = String.fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
    }
    return result.join('');
}


var $6d496cbd7e0550bc$exports = {};

$parcel$export($6d496cbd7e0550bc$exports, "document", () => $6d496cbd7e0550bc$export$5a7bfc01df82fcd1);
$parcel$export($6d496cbd7e0550bc$exports, "contentInitial", () => $6d496cbd7e0550bc$export$5a2181fb44b58173);
$parcel$export($6d496cbd7e0550bc$exports, "flowInitial", () => $6d496cbd7e0550bc$export$cf8bead395eff824);
$parcel$export($6d496cbd7e0550bc$exports, "flow", () => $6d496cbd7e0550bc$export$ccc7b0636abaffc3);
$parcel$export($6d496cbd7e0550bc$exports, "string", () => $6d496cbd7e0550bc$export$22b082955e083ec3);
$parcel$export($6d496cbd7e0550bc$exports, "text", () => $6d496cbd7e0550bc$export$6f093cfa640b7166);
$parcel$export($6d496cbd7e0550bc$exports, "insideSpan", () => $6d496cbd7e0550bc$export$d44f260a3f9b69f5);
$parcel$export($6d496cbd7e0550bc$exports, "disable", () => $6d496cbd7e0550bc$export$e20fbacbb41798b);


const $6d496cbd7e0550bc$export$5a7bfc01df82fcd1 = {
    [42]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [43]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [45]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [48]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [49]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [50]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [51]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [52]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [53]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [54]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [55]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [56]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [57]: $d2833e58c9c658a1$export$8837f4fc672e936d,
    [62]: $f20166fc2e09646a$export$200dcd0a5903c968
};
const $6d496cbd7e0550bc$export$5a2181fb44b58173 = {
    [91]: $8c9f7f00fff845d7$export$69f215ed977cdb73
};
const $6d496cbd7e0550bc$export$cf8bead395eff824 = {
    [-2]: $325a2048196bfedc$export$47910b7ab28d1853,
    [-1]: $325a2048196bfedc$export$47910b7ab28d1853,
    [32]: $325a2048196bfedc$export$47910b7ab28d1853
};
const $6d496cbd7e0550bc$export$ccc7b0636abaffc3 = {
    [35]: $43b35896caf66e80$export$3871e9deb360695c,
    [42]: $f71f47bc904aa875$export$ba7b13e047416c03,
    [45]: [
        $6a0c7b3b406c4a5e$export$e104e2de391dfde9,
        $f71f47bc904aa875$export$ba7b13e047416c03
    ],
    [60]: $d0d399add511d511$export$476ac411cb7d0d8f,
    [61]: $6a0c7b3b406c4a5e$export$e104e2de391dfde9,
    [95]: $f71f47bc904aa875$export$ba7b13e047416c03,
    [96]: $66f5470bc387380a$export$c23e4921f8d87e7c,
    [126]: $66f5470bc387380a$export$c23e4921f8d87e7c
};
const $6d496cbd7e0550bc$export$22b082955e083ec3 = {
    [38]: $6047486b929e4c53$export$e31905600aaf3d8e,
    [92]: $81781b60d5cd3cfc$export$2005478564e78d96
};
const $6d496cbd7e0550bc$export$6f093cfa640b7166 = {
    [-5]: $01ab3c7fab6a2888$export$8e62e0ad51c97b2,
    [-4]: $01ab3c7fab6a2888$export$8e62e0ad51c97b2,
    [-3]: $01ab3c7fab6a2888$export$8e62e0ad51c97b2,
    [33]: $be729fc38c3709d2$export$3d754936e25aa5f5,
    [38]: $6047486b929e4c53$export$e31905600aaf3d8e,
    [42]: $4a83c38545e2870b$export$45b92471da762af7,
    [60]: [
        $d65a4e456a4c0dfc$export$17ddf85e4c916ad6,
        $a4322c42fc5bfa79$export$398af27f284914fe
    ],
    [91]: $6fd393c5d2eefd57$export$5c0cee0701a3b584,
    [92]: [
        $3562f2aa4264913a$export$86c573ab9e06f418,
        $81781b60d5cd3cfc$export$2005478564e78d96
    ],
    [93]: $4ca27e6a0d375a47$export$470a5dafbbf62654,
    [95]: $4a83c38545e2870b$export$45b92471da762af7,
    [96]: $8c581d5a6ffc76b5$export$d24f93e715f9df88
};
const $6d496cbd7e0550bc$export$d44f260a3f9b69f5 = {
    null: [
        $4a83c38545e2870b$export$45b92471da762af7,
        $3b1483f8f85e6b8d$export$50397835cbfdbc24
    ]
};
const $6d496cbd7e0550bc$export$e20fbacbb41798b = {
    null: []
};


function $2c5ac88f01b7d626$export$98e6a39c04603d36(options = {
}) {
    /** @type {FullNormalizedExtension} */ // @ts-expect-error `defaultConstructs` is full, so the result will be too.
    const constructs = $467394f305db958c$export$86a865d89ef3c690(// @ts-expect-error Same as above.
    [
        $6d496cbd7e0550bc$exports
    ].concat(options.extensions || []));
    /** @type {ParseContext} */ const parser = {
        defined: [],
        lazy: {
        },
        constructs: constructs,
        content: create($7cca34f15ebbf281$export$a7db06668cad9adb),
        document: create($412deb289bc41196$export$5a7bfc01df82fcd1),
        flow: create($5753f3a56a579788$export$ccc7b0636abaffc3),
        string: create($3b1483f8f85e6b8d$export$22b082955e083ec3),
        text: create($3b1483f8f85e6b8d$export$6f093cfa640b7166)
    };
    /**
   * @param {InitialConstruct} initial
   */ function create(initial) {
        return creator;
        /** @type {Create} */ function creator(from) {
            return $6e1090a00c9e7d03$export$ae34f10ee4b29837(parser, initial, from);
        }
    }
    return parser;
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
 * @returns {Chunk[]}
 */ const $9708880929bb458c$var$search = /[\0\t\n\r]/g;
function $9708880929bb458c$export$fc37fe19dfda43ee() {
    let column = 1;
    let buffer = '';
    /** @type {boolean|undefined} */ let start = true;
    /** @type {boolean|undefined} */ let atCarriageReturn;
    /** @type {Preprocessor} */ function preprocessor(value, encoding, end) {
        /** @type {Chunk[]} */ const chunks = [];
        /** @type {RegExpMatchArray|null} */ let match;
        /** @type {number} */ let next;
        /** @type {number} */ let startPosition;
        /** @type {number} */ let endPosition;
        /** @type {Code} */ let code // @ts-expect-error `Buffer` does allow an encoding.
        ;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = '';
        if (start) {
            if (value.charCodeAt(0) === 65279) {
                startPosition++;
            }
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
                        {
                            chunks.push(65533);
                            column++;
                            break;
                        }
                    case 9:
                        {
                            next = Math.ceil(column / 4) * 4;
                            chunks.push(-2);
                            while((column++) < next)chunks.push(-1);
                            break;
                        }
                    case 10:
                        {
                            chunks.push(-4);
                            column = 1;
                            break;
                        }
                    default:
                        {
                            atCarriageReturn = true;
                            column = 1;
                        }
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
    return preprocessor;
}



function $68d522221dac8247$export$bd0e6e1378a871d7(events) {
    while(!$1994b46ae75d2098$export$12949d1dd00fddf4(events));
    return events;
}


function $203e7bd706c7c7cd$export$15a69557afac2c20(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space
    code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) return '\uFFFD';
    return String.fromCharCode(code);
}





const $ce27e53dc3fc691d$var$own = {
}.hasOwnProperty;
const $ce27e53dc3fc691d$export$d744d789c09bfde6 = /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
   *   ((value: Value, options?: Options) => Root)
   * )}
   */ /**
   * @param {Value} value
   * @param {Encoding} [encoding]
   * @param {Options} [options]
   * @returns {Root}
   */ function(value, encoding, options) {
    if (typeof encoding !== 'string') {
        options = encoding;
        encoding = undefined;
    }
    return $ce27e53dc3fc691d$var$compiler(options)($68d522221dac8247$export$bd0e6e1378a871d7($2c5ac88f01b7d626$export$98e6a39c04603d36(options).document().write($9708880929bb458c$export$fc37fe19dfda43ee()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options} [options]
 */ function $ce27e53dc3fc691d$var$compiler(options = {
}) {
    /** @type {NormalizedExtension} */ // @ts-expect-error: our base has all required fields, so the result will too.
    const config = $ce27e53dc3fc691d$var$configure({
        transforms: [],
        canContainEols: [
            'emphasis',
            'fragment',
            'heading',
            'paragraph',
            'strong'
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
            listItem: opener(listItem1),
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
    }, options.mdastExtensions || []);
    /** @type {CompileData} */ const data1 = {
    };
    /**
   * @param {Array.<Event>} events
   * @returns {Root}
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: 'root',
            children: []
        };
        /** @type {CompileContext['stack']} */ const stack = [
            tree
        ];
        /** @type {CompileContext['tokenStack']} */ const tokenStack = [];
        /** @type {Array.<number>} */ const listStack = [];
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack: stack,
            tokenStack: tokenStack,
            config: config,
            enter: enter,
            exit: exit,
            buffer: buffer,
            resume: resume,
            setData: setData,
            getData: getData
        };
        let index = -1;
        while(++index < events.length){
            // We preprocess lists to add `listItem` tokens, and to infer whether
            // items the list itself are spread out.
            if (events[index][1].type === 'listOrdered' || events[index][1].type === 'listUnordered') {
                if (events[index][0] === 'enter') {
                    listStack.push(index);
                } else {
                    const tail = listStack.pop();
                    index = prepareList(events, tail, index);
                }
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if ($ce27e53dc3fc691d$var$own.call(handler, events[index][1].type)) {
                handler[events[index][1].type].call(Object.assign({
                    sliceSerialize: events[index][2].sliceSerialize
                }, context), events[index][1]);
            }
        }
        if (tokenStack.length > 0) {
            throw new Error('Cannot close document, a token (`' + tokenStack[tokenStack.length - 1].type + '`, ' + $62747123a0a6bbca$export$c304dd45fe166145({
                start: tokenStack[tokenStack.length - 1].start,
                end: tokenStack[tokenStack.length - 1].end
            }) + ') is still open');
        } // Figure out `root` position.
        tree.position = {
            start: point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        index = -1;
        while(++index < config.transforms.length){
            tree = config.transforms[index](tree) || tree;
        }
        return tree;
    }
    /**
   * @param {Array.<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token|undefined} */ let listItem;
        /** @type {number|undefined} */ let lineIndex;
        /** @type {number|undefined} */ let firstBlankLineIndex;
        /** @type {boolean|undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            if (event[1].type === 'listUnordered' || event[1].type === 'listOrdered' || event[1].type === 'blockQuote') {
                if (event[0] === 'enter') {
                    containerBalance++;
                } else {
                    containerBalance--;
                }
                atMarker = undefined;
            } else if (event[1].type === 'lineEndingBlank') {
                if (event[0] === 'enter') {
                    if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                        firstBlankLineIndex = index;
                    }
                    atMarker = undefined;
                }
            } else if (event[1].type === 'linePrefix' || event[1].type === 'listItemValue' || event[1].type === 'listItemMarker' || event[1].type === 'listItemPrefix' || event[1].type === 'listItemPrefixWhitespace') {
            // Empty.
            } else {
                atMarker = undefined;
            }
            if (!containerBalance && event[0] === 'enter' && event[1].type === 'listItemPrefix' || containerBalance === -1 && event[0] === 'exit' && (event[1].type === 'listUnordered' || event[1].type === 'listOrdered')) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === 'lineEnding' || tailEvent[1].type === 'lineEndingBlank') {
                            if (tailEvent[0] === 'exit') continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = 'lineEndingBlank';
                                listSpread = true;
                            }
                            tailEvent[1].type = 'lineEnding';
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === 'linePrefix' || tailEvent[1].type === 'blockQuotePrefix' || tailEvent[1].type === 'blockQuotePrefixWhitespace' || tailEvent[1].type === 'blockQuoteMarker' || tailEvent[1].type === 'listItemIndent') {
                        // Empty
                        } else {
                            break;
                        }
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                        // @ts-expect-error Patched.
                        listItem._spread = true;
                    } // Fix position.
                    listItem.end = Object.assign({
                    }, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        'exit',
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                } // Create a new list item.
                if (event[1].type === 'listItemPrefix') {
                    listItem = {
                        type: 'listItem',
                        // @ts-expect-error Patched
                        _spread: false,
                        start: Object.assign({
                        }, event[1].start)
                    } // @ts-expect-error: `listItem` is most definitely defined, TS...
                    ;
                    events.splice(index, 0, [
                        'enter',
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        } // @ts-expect-error Patched.
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * @type {CompileContext['setData']}
   * @param [value]
   */ function setData(key, value) {
        data1[key] = value;
    }
    /**
   * @type {CompileContext['getData']}
   * @template {string} K
   * @param {K} key
   * @returns {CompileData[K]}
   */ function getData(key) {
        return data1[key];
    }
    /**
   * @param {Point} d
   * @returns {Point}
   */ function point(d) {
        return {
            line: d.line,
            column: d.column,
            offset: d.offset
        };
    }
    /**
   * @param {(token: Token) => Node} create
   * @param {Handle} [and]
   * @returns {Handle}
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
    /** @type {CompileContext['buffer']} */ function buffer() {
        // @ts-expect-error: Custom node type to collect text.
        this.stack.push({
            type: 'fragment',
            children: []
        });
    }
    /**
   * @type {CompileContext['enter']}
   * @template {Node} N
   * @this {CompileContext}
   * @param {N} node
   * @param {Token} token
   * @returns {N}
   */ function enter(node, token) {
        /** @type {Parent} */ // @ts-expect-error: Assume parent.
        const parent = this.stack[this.stack.length - 1];
        parent.children.push(node);
        this.stack.push(node);
        this.tokenStack.push(token) // @ts-expect-error: `end` will be patched later.
        ;
        node.position = {
            start: point(token.start)
        };
        return node;
    }
    /**
   * @param {Handle} [and]
   * @returns {Handle}
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
    /** @type {CompileContext['exit']} */ function exit(token) {
        const node = this.stack.pop();
        const open = this.tokenStack.pop();
        if (!open) {
            throw new Error('Cannot close `' + token.type + '` (' + $62747123a0a6bbca$export$c304dd45fe166145({
                start: token.start,
                end: token.end
            }) + '): it’s not open');
        } else if (open.type !== token.type) {
            throw new Error('Cannot close `' + token.type + '` (' + $62747123a0a6bbca$export$c304dd45fe166145({
                start: token.start,
                end: token.end
            }) + '): a different token (`' + open.type + '`, ' + $62747123a0a6bbca$export$c304dd45fe166145({
                start: open.start,
                end: open.end
            }) + ') is open');
        }
        node.position.end = point(token.end);
        return node;
    }
    /**
   * @this {CompileContext}
   * @returns {string}
   */ function resume() {
        return $8003bbdddaa577f1$export$f84e8e69fd4488a5(this.stack.pop());
    } //
    // Handlers.
    //
    /** @type {Handle} */ function onenterlistordered() {
        setData('expectingFirstListItemValue', true);
    }
    /** @type {Handle} */ function onenterlistitemvalue(token) {
        if (getData('expectingFirstListItemValue')) {
            this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(token), 10);
            setData('expectingFirstListItemValue');
        }
    }
    /** @type {Handle} */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        this.stack[this.stack.length - 1].lang = data;
    }
    /** @type {Handle} */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        this.stack[this.stack.length - 1].meta = data;
    }
    /** @type {Handle} */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (getData('flowCodeInside')) return;
        this.buffer();
        setData('flowCodeInside', true);
    }
    /** @type {Handle} */ function onexitcodefenced() {
        const data = this.resume();
        this.stack[this.stack.length - 1].value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
        setData('flowCodeInside');
    }
    /** @type {Handle} */ function onexitcodeindented() {
        const data = this.resume();
        this.stack[this.stack.length - 1].value = data.replace(/(\r?\n|\r)$/g, '');
    }
    /** @type {Handle} */ function onexitdefinitionlabelstring(token) {
        // Discard label, use the source content instead.
        const label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = $d172c91bf9d24083$export$806d55e226cfcd08(this.sliceSerialize(token)).toLowerCase();
    }
    /** @type {Handle} */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        this.stack[this.stack.length - 1].title = data;
    }
    /** @type {Handle} */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        this.stack[this.stack.length - 1].url = data;
    }
    /** @type {Handle} */ function onexitatxheadingsequence(token) {
        if (!this.stack[this.stack.length - 1].depth) {
            this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).length;
        }
    }
    /** @type {Handle} */ function onexitsetextheadingtext() {
        setData('setextHeadingSlurpLineEnding', true);
    }
    /** @type {Handle} */ function onexitsetextheadinglinesequence(token) {
        this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    /** @type {Handle} */ function onexitsetextheading() {
        setData('setextHeadingSlurpLineEnding');
    }
    /** @type {Handle} */ function onenterdata(token) {
        /** @type {Parent} */ // @ts-expect-error: assume parent.
        const parent = this.stack[this.stack.length - 1];
        /** @type {Node} */ // @ts-expect-error: assume child.
        let tail = parent.children[parent.children.length - 1];
        if (!tail || tail.type !== 'text') {
            // Add a new text node.
            tail = text() // @ts-expect-error: we’ll add `end` later.
            ;
            tail.position = {
                start: point(token.start)
            };
            parent.children.push(tail);
        }
        this.stack.push(tail);
    }
    /** @type {Handle} */ function onexitdata(token) {
        const tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
    }
    /** @type {Handle} */ function onexitlineending(token) {
        /** @type {Parent} */ // @ts-expect-error: supposed to be a parent.
        const context = this.stack[this.stack.length - 1];
        // If we’re at a hard break, include the line ending in there.
        if (getData('atHardBreak')) {
            const tail = context.children[context.children.length - 1];
            tail.position.end = point(token.end);
            setData('atHardBreak');
            return;
        }
        if (!getData('setextHeadingSlurpLineEnding') && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /** @type {Handle} */ function onexithardbreak() {
        setData('atHardBreak', true);
    }
    /** @type {Handle} */ function onexithtmlflow() {
        const data = this.resume();
        this.stack[this.stack.length - 1].value = data;
    }
    /** @type {Handle} */ function onexithtmltext() {
        const data = this.resume();
        this.stack[this.stack.length - 1].value = data;
    }
    /** @type {Handle} */ function onexitcodetext() {
        const data = this.resume();
        this.stack[this.stack.length - 1].value = data;
    }
    /** @type {Handle} */ function onexitlink() {
        const context = this.stack[this.stack.length - 1] // To do: clean.
        ;
        if (getData('inReference')) {
            context.type += 'Reference';
            context.referenceType = getData('referenceType') || 'shortcut';
            delete context.url;
            delete context.title;
        } else {
            delete context.identifier;
            delete context.label;
            delete context.referenceType;
        }
        setData('referenceType');
    }
    /** @type {Handle} */ function onexitimage() {
        const context = this.stack[this.stack.length - 1] // To do: clean.
        ;
        if (getData('inReference')) {
            context.type += 'Reference';
            context.referenceType = getData('referenceType') || 'shortcut';
            delete context.url;
            delete context.title;
        } else {
            delete context.identifier;
            delete context.label;
            delete context.referenceType;
        }
        setData('referenceType');
    }
    /** @type {Handle} */ function onexitlabeltext(token) {
        this.stack[this.stack.length - 2].identifier = $d172c91bf9d24083$export$806d55e226cfcd08(this.sliceSerialize(token)).toLowerCase();
    }
    /** @type {Handle} */ function onexitlabel() {
        const fragment = this.stack[this.stack.length - 1];
        const value = this.resume();
        this.stack[this.stack.length - 1].label = value // Assume a reference.
        ;
        setData('inReference', true);
        if (this.stack[this.stack.length - 1].type === 'link') {
            this.stack[this.stack.length - 1].children = fragment.children;
        } else {
            this.stack[this.stack.length - 1].alt = value;
        }
    }
    /** @type {Handle} */ function onexitresourcedestinationstring() {
        const data = this.resume();
        this.stack[this.stack.length - 1].url = data;
    }
    /** @type {Handle} */ function onexitresourcetitlestring() {
        const data = this.resume();
        this.stack[this.stack.length - 1].title = data;
    }
    /** @type {Handle} */ function onexitresource() {
        setData('inReference');
    }
    /** @type {Handle} */ function onenterreference() {
        setData('referenceType', 'collapsed');
    }
    /** @type {Handle} */ function onexitreferencestring(token) {
        const label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = $d172c91bf9d24083$export$806d55e226cfcd08(this.sliceSerialize(token)).toLowerCase();
        setData('referenceType', 'full');
    }
    /** @type {Handle} */ function onexitcharacterreferencemarker(token) {
        setData('characterReferenceType', token.type);
    }
    /** @type {Handle} */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = getData('characterReferenceType');
        /** @type {string} */ let value;
        if (type) {
            value = $203e7bd706c7c7cd$export$15a69557afac2c20(data, type === 'characterReferenceMarkerNumeric' ? 10 : 16);
            setData('characterReferenceType');
        } else {
            // @ts-expect-error `decodeEntity` can return false for invalid named
            // character references, but everything we’ve tokenized is valid.
            value = $7c9eedf9985e9319$export$3fc0912547321ab3(data);
        }
        const tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point(token.end);
    }
    /** @type {Handle} */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
    }
    /** @type {Handle} */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = 'mailto:' + this.sliceSerialize(token);
    } //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: 'blockquote',
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        // @ts-expect-error: we’ve always used `null`.
        return {
            type: 'code',
            lang: null,
            meta: null,
            value: ''
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: 'inlineCode',
            value: ''
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: 'definition',
            identifier: '',
            // @ts-expect-error: we’ve always used `null`.
            label: null,
            // @ts-expect-error: we’ve always used `null`.
            title: null,
            url: ''
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: 'emphasis',
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        // @ts-expect-error `depth` will be set later.
        return {
            type: 'heading',
            depth: undefined,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: 'break'
        };
    }
    /** @returns {HTML} */ function html() {
        return {
            type: 'html',
            value: ''
        };
    }
    /** @returns {Image} */ function image() {
        // @ts-expect-error: we’ve always used `null`.
        return {
            type: 'image',
            title: null,
            url: '',
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        // @ts-expect-error: we’ve always used `null`.
        return {
            type: 'link',
            title: null,
            url: '',
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: 'list',
            ordered: token.type === 'listOrdered',
            // @ts-expect-error: we’ve always used `null`.
            start: null,
            // @ts-expect-error Patched.
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem1(token) {
        return {
            type: 'listItem',
            // @ts-expect-error Patched.
            spread: token._spread,
            // @ts-expect-error: we’ve always used `null`.
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: 'paragraph',
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: 'strong',
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: 'text',
            value: ''
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: 'thematicBreak'
        };
    }
    return compile;
}
/**
 * @param {Extension} combined
 * @param {Array.<Extension|Array.<Extension>>} extensions
 * @returns {Extension}
 */ function $ce27e53dc3fc691d$var$configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) $ce27e53dc3fc691d$var$configure(combined, value);
        else $ce27e53dc3fc691d$var$extension(combined, value);
    }
    return combined;
}
/**
 * @param {Extension} combined
 * @param {Extension} extension
 * @returns {void}
 */ function $ce27e53dc3fc691d$var$extension(combined, extension) {
    /** @type {string} */ let key;
    for(key in extension)if ($ce27e53dc3fc691d$var$own.call(extension, key)) {
        const list = key === 'canContainEols' || key === 'transforms';
        const maybe = $ce27e53dc3fc691d$var$own.call(combined, key) ? combined[key] : undefined;
        /* c8 ignore next */ const left = maybe || (combined[key] = list ? [] : {
        });
        const right = extension[key];
        if (right) {
            if (list) // @ts-expect-error: `left` is an array.
            combined[key] = [
                ...left,
                ...right
            ];
            else Object.assign(left, right);
        }
    }
}



function $2cde2f9981a42b5c$export$2e2bcd8739ae039(options) {
    /** @type {import('unified').ParserFunction<Root>} */ const parser = (doc)=>{
        // Assume options.
        const settings = this.data('settings');
        return $ce27e53dc3fc691d$export$d744d789c09bfde6(doc, Object.assign({
        }, settings, options, {
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: this.data('micromarkExtensions') || [],
            mdastExtensions: this.data('fromMarkdownExtensions') || []
        }));
    };
    Object.assign(this, {
        Parser: parser
    });
}


var $998d99a10a985a7f$export$2e2bcd8739ae039 = $2cde2f9981a42b5c$export$2e2bcd8739ae039;




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
/** @type {ConstructRecord} */ const $f666adda49be15dd$var$text = {
};
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
    /** @type {State} */ function start(code) {
        if (!$f666adda49be15dd$var$gfmAtext(code) || !$f666adda49be15dd$var$previousEmail(self.previous) || $f666adda49be15dd$var$previousUnbalanced(self.events)) {
            return nok(code);
        }
        effects.enter('literalAutolink');
        effects.enter('literalAutolinkEmail');
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
        if (code === 46) {
            return effects.check($f666adda49be15dd$var$punctuation, done, dotContinuation)(code);
        }
        if (code === 45 || code === 95) {
            return effects.check($f666adda49be15dd$var$punctuation, nok, dashOrUnderscoreContinuation)(code);
        }
        if ($2d97e78534b5d038$export$75c76db11865a9f4(code)) {
            if (!hasDigitInLastSegment && $2d97e78534b5d038$export$ca8b5b1a6c320e6e(code)) {
                hasDigitInLastSegment = true;
            }
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
        if (code === 46) {
            return effects.check($f666adda49be15dd$var$punctuation, nok, dotContinuation)(code);
        }
        return label(code);
    }
    /** @type {State} */ function done(code) {
        if (hasDot && !hasDigitInLastSegment) {
            effects.exit('literalAutolinkEmail');
            effects.exit('literalAutolink');
            return ok(code);
        }
        return nok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeWwwAutolink(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        if (code !== 87 && code !== 119 || !$f666adda49be15dd$var$previousWww(self.previous) || $f666adda49be15dd$var$previousUnbalanced(self.events)) {
            return nok(code);
        }
        effects.enter('literalAutolink');
        effects.enter('literalAutolinkWww') // For `www.` we check instead of attempt, because when it matches, GH
        ;
        // treats it as part of a domain (yes, it says a valid domain must come
        // after `www.`, but that’s not how it’s implemented by them).
        return effects.check($f666adda49be15dd$var$www, effects.attempt($f666adda49be15dd$var$domain, effects.attempt($f666adda49be15dd$var$path, done), nok), nok)(code);
    }
    /** @type {State} */ function done(code) {
        effects.exit('literalAutolinkWww');
        effects.exit('literalAutolink');
        return ok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeHttpAutolink(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function start(code) {
        if (code !== 72 && code !== 104 || !$f666adda49be15dd$var$previousHttp(self.previous) || $f666adda49be15dd$var$previousUnbalanced(self.events)) {
            return nok(code);
        }
        effects.enter('literalAutolink');
        effects.enter('literalAutolinkHttp');
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
        return code === null || $2d97e78534b5d038$export$67dbf494fc8394df(code) || $2d97e78534b5d038$export$a0ff789c034ffdf4(code) || $2d97e78534b5d038$export$aa04114dd888a7a0(code) ? nok(code) : effects.attempt($f666adda49be15dd$var$domain, effects.attempt($f666adda49be15dd$var$path, done), nok)(code);
    }
    /** @type {State} */ function done(code) {
        effects.exit('literalAutolinkHttp');
        effects.exit('literalAutolink');
        return ok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeWww(effects, ok, nok) {
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
        return code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code) ? nok(code) : ok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeDomain(effects, ok, nok) {
    /** @type {boolean|undefined} */ let hasUnderscoreInLastSegment;
    /** @type {boolean|undefined} */ let hasUnderscoreInLastLastSegment;
    /** @type {State} */ function domain(code) {
        if (code === 38) {
            return effects.check($f666adda49be15dd$var$namedCharacterReference, done, punctuationContinuation)(code);
        }
        if (code === 46 || code === 95) {
            return effects.check($f666adda49be15dd$var$punctuation, done, punctuationContinuation)(code);
        } // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
        // occur, which sounds like ASCII only, but they also support `www.點看.com`,
        // so that’s Unicode.
        // Instead of some new production for Unicode alphanumerics, markdown
        // already has that for Unicode punctuation and whitespace, so use those.
        if (code === null || $2d97e78534b5d038$export$67dbf494fc8394df(code) || $2d97e78534b5d038$export$a0ff789c034ffdf4(code) || code !== 45 && $2d97e78534b5d038$export$aa04114dd888a7a0(code)) {
            return done(code);
        }
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
        if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
            return ok(code);
        }
        return nok(code);
    }
    return domain;
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizePath(effects, ok) {
    let balance = 0;
    /** @type {State} */ function inPath(code) {
        if (code === 38) {
            return effects.check($f666adda49be15dd$var$namedCharacterReference, ok, continuedPunctuation)(code);
        }
        if (code === 40) {
            balance++;
        }
        if (code === 41) {
            return effects.check($f666adda49be15dd$var$punctuation, parenAtPathEnd, continuedPunctuation)(code);
        }
        if ($f666adda49be15dd$var$pathEnd(code)) {
            return ok(code);
        }
        if ($f666adda49be15dd$var$trailingPunctuation(code)) {
            return effects.check($f666adda49be15dd$var$punctuation, ok, continuedPunctuation)(code);
        }
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
    return inPath;
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizeNamedCharacterReference(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        effects.consume(code);
        return inside;
    }
    /** @type {State} */ function inside(code) {
        if ($2d97e78534b5d038$export$d65d6b62c24d5436(code)) {
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
    return start;
}
/** @type {Tokenizer} */ function $f666adda49be15dd$var$tokenizePunctuation(effects, ok, nok) {
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
    return start;
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
    return code === null || code === 60 || $2d97e78534b5d038$export$a30284361b3814b7(code);
}
/**
 * @param {Code} code
 * @returns {boolean}
 */ function $f666adda49be15dd$var$gfmAtext(code) {
    return code === 43 || code === 45 || code === 46 || code === 95 || $2d97e78534b5d038$export$75c76db11865a9f4(code);
}
/** @type {Previous} */ function $f666adda49be15dd$var$previousWww(code) {
    return code === null || code === 40 || code === 42 || code === 95 || code === 126 || $2d97e78534b5d038$export$a30284361b3814b7(code);
}
/** @type {Previous} */ function $f666adda49be15dd$var$previousHttp(code) {
    return code === null || !$2d97e78534b5d038$export$d65d6b62c24d5436(code);
}
/** @type {Previous} */ function $f666adda49be15dd$var$previousEmail(code) {
    return code !== 47 && $f666adda49be15dd$var$previousHttp(code);
}
/**
 * @param {Event[]} events
 * @returns {boolean}
 */ function $f666adda49be15dd$var$previousUnbalanced(events) {
    let index = events.length;
    let result = false;
    while(index--){
        const token = events[index][1];
        if ((token.type === 'labelLink' || token.type === 'labelImage') && !token._balanced) {
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


const $5d499cda99296975$var$characterReferences = {
    '"': 'quot',
    '&': 'amp',
    '<': 'lt',
    '>': 'gt'
};
function $5d499cda99296975$export$c564cdbbe6da493(value) {
    /**
   * @param {string} value
   * @returns {string}
   */ function replace(value) {
        // @ts-expect-error Hush, it’s fine.
        return '&' + $5d499cda99296975$var$characterReferences[value] + ';';
    }
    return value.replace(/["&<>]/g, replace);
}


function $9d5c31a0dffab546$export$d130a2d684099e5a(url, protocol) {
    const value = $5d499cda99296975$export$c564cdbbe6da493($9d5c31a0dffab546$var$normalizeUri(url || ''));
    if (!protocol) return value;
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) return value;
    return '';
}
/**
 * Normalize a URL (such as used in definitions).
 *
 * Encode unsafe characters with percent-encoding, skipping already encoded
 * sequences.
 *
 * @param {string} value
 * @returns {string}
 */ function $9d5c31a0dffab546$var$normalizeUri(value) {
    /** @type {string[]} */ const result = [];
    let index = -1;
    let start = 0;
    let skip = 0;
    while(++index < value.length){
        const code = value.charCodeAt(index);
        /** @type {string} */ let replace = '' // A correct percent encoded value.
        ;
        if (code === 37 && $2d97e78534b5d038$export$75c76db11865a9f4(value.charCodeAt(index + 1)) && $2d97e78534b5d038$export$75c76db11865a9f4(value.charCodeAt(index + 2))) skip = 2;
        else if (code < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) replace = String.fromCharCode(code);
        } else if (code > 55295 && code < 57344) {
            const next = value.charCodeAt(index + 1) // A correct surrogate pair.
            ;
            if (code < 56320 && next > 56319 && next < 57344) {
                replace = String.fromCharCode(code, next);
                skip = 1;
            } else replace = '\uFFFD';
        } else replace = String.fromCharCode(code);
        if (replace) {
            result.push(value.slice(start, index), encodeURIComponent(replace));
            start = index + skip + 1;
            replace = '';
        }
        if (skip) {
            index += skip;
            skip = 0;
        }
    }
    return result.join('') + value.slice(start);
}


const $06aaccb80082790c$export$999603f1f1c3d2f9 = {
    exit: {
        literalAutolinkEmail: $06aaccb80082790c$var$literalAutolinkEmail,
        literalAutolinkHttp: $06aaccb80082790c$var$literalAutolinkHttp,
        literalAutolinkWww: $06aaccb80082790c$var$literalAutolinkWww
    }
};
/** @type {Handle} */ function $06aaccb80082790c$var$literalAutolinkWww(token) {
    $06aaccb80082790c$var$anchorFromToken.call(this, token, 'http://');
}
/** @type {Handle} */ function $06aaccb80082790c$var$literalAutolinkEmail(token) {
    $06aaccb80082790c$var$anchorFromToken.call(this, token, 'mailto:');
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
    this.tag('<a href="' + $9d5c31a0dffab546$export$d130a2d684099e5a((protocol || '') + url) + '">');
    this.raw(this.encode(url));
    this.tag('</a>');
}



const $43f3b10e358f0a11$export$58acedca46108820 = {
    enter: {
        strikethrough () {
            this.tag('<del>');
        }
    },
    exit: {
        strikethrough () {
            this.tag('</del>');
        }
    }
};




function $26591d1023b31d2e$export$8bbec8ea1400a00e(options = {
}) {
    let single = options.singleTilde;
    const tokenizer = {
        tokenize: tokenizeStrikethrough,
        resolveAll: resolveAllStrikethrough
    };
    if (single === null || single === undefined) single = true;
    /**
   * Take events and resolve strikethrough.
   *
   * @type {Resolver}
   */ function resolveAllStrikethrough(events, context) {
        let index = -1;
        /** @type {Token} */ let strikethrough;
        /** @type {Token} */ let text;
        /** @type {number} */ let open;
        /** @type {Event[]} */ let nextEvents // Walk through all events.
        ;
        while(++index < events.length){
            // Find a token that can close.
            if (events[index][0] === 'enter' && events[index][1].type === 'strikethroughSequenceTemporary' && events[index][1]._close) {
                open = index // Now walk back to find an opener.
                ;
                while(open--){
                    // Find a token that can open the closer.
                    if (events[open][0] === 'exit' && events[open][1].type === 'strikethroughSequenceTemporary' && events[open][1]._open && events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
                        events[index][1].type = 'strikethroughSequence';
                        events[open][1].type = 'strikethroughSequence';
                        strikethrough = {
                            type: 'strikethrough',
                            start: Object.assign({
                            }, events[open][1].start),
                            end: Object.assign({
                            }, events[index][1].end)
                        };
                        text = {
                            type: 'strikethroughText',
                            start: Object.assign({
                            }, events[open][1].end),
                            end: Object.assign({
                            }, events[index][1].start)
                        } // Opening.
                        ;
                        nextEvents = [
                            [
                                'enter',
                                strikethrough,
                                context
                            ],
                            [
                                'enter',
                                events[open][1],
                                context
                            ],
                            [
                                'exit',
                                events[open][1],
                                context
                            ],
                            [
                                'enter',
                                text,
                                context
                            ]
                        ] // Between.
                        ;
                        $e3740fd54cb8c53f$export$869882364835d202(nextEvents, nextEvents.length, 0, $2d1cd621ae059249$export$3ff61ec196ff408b(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)) // Closing.
                        ;
                        $e3740fd54cb8c53f$export$869882364835d202(nextEvents, nextEvents.length, 0, [
                            [
                                'exit',
                                text,
                                context
                            ],
                            [
                                'enter',
                                events[index][1],
                                context
                            ],
                            [
                                'exit',
                                events[index][1],
                                context
                            ],
                            [
                                'exit',
                                strikethrough,
                                context
                            ]
                        ]);
                        $e3740fd54cb8c53f$export$869882364835d202(events, open - 1, index - open + 3, nextEvents);
                        index = open + nextEvents.length - 2;
                        break;
                    }
                }
            }
        }
        index = -1;
        while(++index < events.length){
            if (events[index][1].type === 'strikethroughSequenceTemporary') {
                events[index][1].type = 'data';
            }
        }
        return events;
    }
    /** @type {Tokenizer} */ function tokenizeStrikethrough(effects, ok, nok) {
        const previous = this.previous;
        const events = this.events;
        let size = 0;
        return start;
        /** @type {State} */ function start(code) {
            if (code !== 126 || previous === 126 && events[events.length - 1][1].type !== 'characterEscape') {
                return nok(code);
            }
            effects.enter('strikethroughSequenceTemporary');
            return more(code);
        }
        /** @type {State} */ function more(code) {
            const before = $076e9255d90ad183$export$e3902bc0d835cad0(previous);
            if (code === 126) {
                // If this is the third marker, exit.
                if (size > 1) return nok(code);
                effects.consume(code);
                size++;
                return more;
            }
            if (size < 2 && !single) return nok(code);
            const token = effects.exit('strikethroughSequenceTemporary');
            const after = $076e9255d90ad183$export$e3902bc0d835cad0(code);
            token._open = !after || after === 2 && Boolean(before);
            token._close = !before || before === 2 && Boolean(after);
            return ok(code);
        }
    }
    return {
        text: {
            [126]: tokenizer
        },
        insideSpan: {
            null: [
                tokenizer
            ]
        }
    };
}



/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ /**
 * @typedef {import('./syntax.js').Align} Align
 */ const $dc4cce43ce5324ac$var$alignment = {
    null: '',
    left: ' align="left"',
    right: ' align="right"',
    center: ' align="center"'
};
const $dc4cce43ce5324ac$export$c64626c032567c7f = {
    enter: {
        table (token) {
            this.lineEndingIfNeeded();
            this.tag('<table>') // @ts-expect-error Custom.
            ;
            this.setData('tableAlign', token._align);
        },
        tableBody () {
            // Clear slurping line ending from the delimiter row.
            this.setData('slurpOneLineEnding');
            this.tag('<tbody>');
        },
        tableData () {
            /** @type {string|undefined} */ const align = $dc4cce43ce5324ac$var$alignment[this.getData('tableAlign')[this.getData('tableColumn')]];
            if (align === undefined) // Capture results to ignore them.
            this.buffer();
            else {
                this.lineEndingIfNeeded();
                this.tag('<td' + align + '>');
            }
        },
        tableHead () {
            this.lineEndingIfNeeded();
            this.tag('<thead>');
        },
        tableHeader () {
            this.lineEndingIfNeeded();
            this.tag('<th' + $dc4cce43ce5324ac$var$alignment[this.getData('tableAlign')[this.getData('tableColumn')]] + '>');
        },
        tableRow () {
            this.setData('tableColumn', 0);
            this.lineEndingIfNeeded();
            this.tag('<tr>');
        }
    },
    exit: {
        // Overwrite the default code text data handler to unescape escaped pipes when
        // they are in tables.
        codeTextData (token) {
            let value = this.sliceSerialize(token);
            if (this.getData('tableAlign')) value = value.replace(/\\([\\|])/g, $dc4cce43ce5324ac$var$replace);
            this.raw(this.encode(value));
        },
        table () {
            this.setData('tableAlign') // If there was no table body, make sure the slurping from the delimiter row
            ;
            // is cleared.
            this.setData('slurpAllLineEndings');
            this.lineEndingIfNeeded();
            this.tag('</table>');
        },
        tableBody () {
            this.lineEndingIfNeeded();
            this.tag('</tbody>');
        },
        tableData () {
            /** @type {number} */ // @ts-expect-error Custom.
            const column = this.getData('tableColumn') // @ts-expect-error Custom.
            ;
            if (column in this.getData('tableAlign')) {
                this.tag('</td>');
                this.setData('tableColumn', column + 1);
            } else // Stop capturing.
            this.resume();
        },
        tableHead () {
            this.lineEndingIfNeeded();
            this.tag('</thead>');
            this.setData('slurpOneLineEnding', true) // Slurp the line ending from the delimiter row.
            ;
        },
        tableHeader () {
            this.tag('</th>') // @ts-expect-error Custom.
            ;
            this.setData('tableColumn', this.getData('tableColumn') + 1);
        },
        tableRow () {
            /** @type {Align[]} */ // @ts-expect-error Custom.
            const align = this.getData('tableAlign');
            /** @type {number} */ // @ts-expect-error Custom.
            let column = this.getData('tableColumn');
            while(column < align.length){
                this.lineEndingIfNeeded() // @ts-expect-error `null` is fine as an index.
                ;
                this.tag('<td' + $dc4cce43ce5324ac$var$alignment[align[column]] + '></td>');
                column++;
            }
            this.setData('tableColumn', column);
            this.lineEndingIfNeeded();
            this.tag('</tr>');
        }
    }
};
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */ function $dc4cce43ce5324ac$var$replace($0, $1) {
    // Pipes work, backslashes don’t (but can’t escape pipes).
    return $1 === '|' ? $1 : $0;
}



const $62e5a16290d5550a$export$e36cebda627bf2dd = {
    flow: {
        null: {
            tokenize: $62e5a16290d5550a$var$tokenizeTable,
            resolve: $62e5a16290d5550a$var$resolveTable
        }
    }
};
const $62e5a16290d5550a$var$setextUnderlineMini = {
    tokenize: $62e5a16290d5550a$var$tokenizeSetextUnderlineMini,
    partial: true
};
const $62e5a16290d5550a$var$nextPrefixedOrBlank = {
    tokenize: $62e5a16290d5550a$var$tokenizeNextPrefixedOrBlank,
    partial: true
};
/** @type {Resolver} */ function $62e5a16290d5550a$var$resolveTable(events, context) {
    let index = -1;
    /** @type {Token} */ let token;
    /** @type {boolean|undefined} */ let inHead;
    /** @type {boolean|undefined} */ let inDelimiterRow;
    /** @type {boolean|undefined} */ let inRow;
    /** @type {Token} */ let cell;
    /** @type {Token} */ let content;
    /** @type {Token} */ let text;
    /** @type {number|undefined} */ let contentStart;
    /** @type {number|undefined} */ let contentEnd;
    /** @type {number|undefined} */ let cellStart;
    while(++index < events.length){
        token = events[index][1];
        if (inRow) {
            if (token.type === 'temporaryTableCellContent') {
                contentStart = contentStart || index;
                contentEnd = index;
            }
            if (// Combine separate content parts into one.
            (token.type === 'tableCellDivider' || token.type === 'tableRow') && contentEnd) {
                content = {
                    type: 'tableContent',
                    // @ts-expect-error `contentStart` is defined if `contentEnd` is too.
                    start: events[contentStart][1].start,
                    end: events[contentEnd][1].end
                };
                text = {
                    type: 'chunkText',
                    start: content.start,
                    end: content.end,
                    // @ts-expect-error It’s fine.
                    contentType: 'text'
                };
                events.splice(// @ts-expect-error `contentStart` is defined if `contentEnd` is too.
                contentStart, contentEnd - contentStart + 1, [
                    'enter',
                    content,
                    context
                ], [
                    'enter',
                    text,
                    context
                ], [
                    'exit',
                    text,
                    context
                ], [
                    'exit',
                    content,
                    context
                ]) // @ts-expect-error `contentStart` is defined if `contentEnd` is too.
                ;
                index -= contentEnd - contentStart - 3;
                contentStart = undefined;
                contentEnd = undefined;
            }
        }
        if (events[index][0] === 'exit' && cellStart && cellStart + 1 < index && (token.type === 'tableCellDivider' || token.type === 'tableRow' && (cellStart + 3 < index || events[cellStart][1].type !== 'whitespace'))) {
            cell = {
                type: inDelimiterRow ? 'tableDelimiter' : inHead ? 'tableHeader' : 'tableData',
                start: events[cellStart][1].start,
                end: events[index][1].end
            };
            events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, [
                'exit',
                cell,
                context
            ]);
            events.splice(cellStart, 0, [
                'enter',
                cell,
                context
            ]);
            index += 2;
            cellStart = index + 1;
        }
        if (token.type === 'tableRow') {
            inRow = events[index][0] === 'enter';
            if (inRow) cellStart = index + 1;
        }
        if (token.type === 'tableDelimiterRow') {
            inDelimiterRow = events[index][0] === 'enter';
            if (inDelimiterRow) cellStart = index + 1;
        }
        if (token.type === 'tableHead') inHead = events[index][0] === 'enter';
    }
    return events;
}
/** @type {Tokenizer} */ function $62e5a16290d5550a$var$tokenizeTable(effects1, ok1, nok1) {
    const self = this;
    /** @type {Align[]} */ const align = [];
    let tableHeaderCount = 0;
    /** @type {boolean|undefined} */ let seenDelimiter;
    /** @type {boolean|undefined} */ let hasDash;
    /** @type {State} */ function start1(code) {
        // @ts-expect-error Custom.
        effects1.enter('table')._align = align;
        effects1.enter('tableHead');
        effects1.enter('tableRow') // If we start with a pipe, we open a cell marker.
        ;
        if (code === 124) {
            return cellDividerHead(code);
        }
        tableHeaderCount++;
        effects1.enter('temporaryTableCellContent') // Can’t be space or eols at the start of a construct, so we’re in a cell.
        ;
        return inCellContentHead(code);
    }
    /** @type {State} */ function cellDividerHead(code) {
        effects1.enter('tableCellDivider');
        effects1.consume(code);
        effects1.exit('tableCellDivider');
        seenDelimiter = true;
        return cellBreakHead;
    }
    /** @type {State} */ function cellBreakHead(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return atRowEndHead(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.enter('whitespace');
            effects1.consume(code);
            return inWhitespaceHead;
        }
        if (seenDelimiter) {
            seenDelimiter = undefined;
            tableHeaderCount++;
        }
        if (code === 124) {
            return cellDividerHead(code);
        } // Anything else is cell content.
        effects1.enter('temporaryTableCellContent');
        return inCellContentHead(code);
    }
    /** @type {State} */ function inWhitespaceHead(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return inWhitespaceHead;
        }
        effects1.exit('whitespace');
        return cellBreakHead(code);
    }
    /** @type {State} */ function inCellContentHead(code) {
        // EOF, whitespace, pipe
        if (code === null || code === 124 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            effects1.exit('temporaryTableCellContent');
            return cellBreakHead(code);
        }
        effects1.consume(code);
        return code === 92 ? inCellContentEscapeHead : inCellContentHead;
    }
    /** @type {State} */ function inCellContentEscapeHead(code) {
        if (code === 92 || code === 124) {
            effects1.consume(code);
            return inCellContentHead;
        } // Anything else.
        return inCellContentHead(code);
    }
    /** @type {State} */ function atRowEndHead(code) {
        if (code === null) {
            return nok1(code);
        }
        effects1.exit('tableRow');
        effects1.exit('tableHead');
        return effects1.attempt({
            tokenize: tokenizeRowEnd,
            partial: true
        }, atDelimiterLineStart, nok1)(code);
    }
    /** @type {State} */ function atDelimiterLineStart(code) {
        // To do: is the lazy setext thing still needed?
        return effects1.check($62e5a16290d5550a$var$setextUnderlineMini, nok1, $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects1, rowStartDelimiter, 'linePrefix', 4))(code);
    }
    /** @type {State} */ function rowStartDelimiter(code) {
        // If there’s another space, or we’re at the EOL/EOF, exit.
        if (code === null || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            return nok1(code);
        }
        effects1.enter('tableDelimiterRow');
        return atDelimiterRowBreak(code);
    }
    /** @type {State} */ function atDelimiterRowBreak(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return rowEndDelimiter(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.enter('whitespace');
            effects1.consume(code);
            return inWhitespaceDelimiter;
        }
        if (code === 45) {
            effects1.enter('tableDelimiterFiller');
            effects1.consume(code);
            hasDash = true;
            align.push(null);
            return inFillerDelimiter;
        }
        if (code === 58) {
            effects1.enter('tableDelimiterAlignment');
            effects1.consume(code);
            effects1.exit('tableDelimiterAlignment');
            align.push('left');
            return afterLeftAlignment;
        } // If we start with a pipe, we open a cell marker.
        if (code === 124) {
            effects1.enter('tableCellDivider');
            effects1.consume(code);
            effects1.exit('tableCellDivider');
            return atDelimiterRowBreak;
        }
        return nok1(code);
    }
    /** @type {State} */ function inWhitespaceDelimiter(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return inWhitespaceDelimiter;
        }
        effects1.exit('whitespace');
        return atDelimiterRowBreak(code);
    }
    /** @type {State} */ function inFillerDelimiter(code) {
        if (code === 45) {
            effects1.consume(code);
            return inFillerDelimiter;
        }
        effects1.exit('tableDelimiterFiller');
        if (code === 58) {
            effects1.enter('tableDelimiterAlignment');
            effects1.consume(code);
            effects1.exit('tableDelimiterAlignment');
            align[align.length - 1] = align[align.length - 1] === 'left' ? 'center' : 'right';
            return afterRightAlignment;
        }
        return atDelimiterRowBreak(code);
    }
    /** @type {State} */ function afterLeftAlignment(code) {
        if (code === 45) {
            effects1.enter('tableDelimiterFiller');
            effects1.consume(code);
            hasDash = true;
            return inFillerDelimiter;
        } // Anything else is not ok.
        return nok1(code);
    }
    /** @type {State} */ function afterRightAlignment(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return rowEndDelimiter(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.enter('whitespace');
            effects1.consume(code);
            return inWhitespaceDelimiter;
        } // `|`
        if (code === 124) {
            effects1.enter('tableCellDivider');
            effects1.consume(code);
            effects1.exit('tableCellDivider');
            return atDelimiterRowBreak;
        }
        return nok1(code);
    }
    /** @type {State} */ function rowEndDelimiter(code) {
        effects1.exit('tableDelimiterRow') // Exit if there was no dash at all, or if the header cell count is not the
        ;
        // delimiter cell count.
        if (!hasDash || tableHeaderCount !== align.length) {
            return nok1(code);
        }
        if (code === null) {
            return tableClose(code);
        }
        return effects1.check($62e5a16290d5550a$var$nextPrefixedOrBlank, tableClose, effects1.attempt({
            tokenize: tokenizeRowEnd,
            partial: true
        }, $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects1, bodyStart, 'linePrefix', 4), tableClose))(code);
    }
    /** @type {State} */ function tableClose(code) {
        effects1.exit('table');
        return ok1(code);
    }
    /** @type {State} */ function bodyStart(code) {
        effects1.enter('tableBody');
        return rowStartBody(code);
    }
    /** @type {State} */ function rowStartBody(code) {
        effects1.enter('tableRow') // If we start with a pipe, we open a cell marker.
        ;
        if (code === 124) {
            return cellDividerBody(code);
        }
        effects1.enter('temporaryTableCellContent') // Can’t be space or eols at the start of a construct, so we’re in a cell.
        ;
        return inCellContentBody(code);
    }
    /** @type {State} */ function cellDividerBody(code) {
        effects1.enter('tableCellDivider');
        effects1.consume(code);
        effects1.exit('tableCellDivider');
        return cellBreakBody;
    }
    /** @type {State} */ function cellBreakBody(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return atRowEndBody(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.enter('whitespace');
            effects1.consume(code);
            return inWhitespaceBody;
        } // `|`
        if (code === 124) {
            return cellDividerBody(code);
        } // Anything else is cell content.
        effects1.enter('temporaryTableCellContent');
        return inCellContentBody(code);
    }
    /** @type {State} */ function inWhitespaceBody(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects1.consume(code);
            return inWhitespaceBody;
        }
        effects1.exit('whitespace');
        return cellBreakBody(code);
    }
    /** @type {State} */ function inCellContentBody(code) {
        // EOF, whitespace, pipe
        if (code === null || code === 124 || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            effects1.exit('temporaryTableCellContent');
            return cellBreakBody(code);
        }
        effects1.consume(code);
        return code === 92 ? inCellContentEscapeBody : inCellContentBody;
    }
    /** @type {State} */ function inCellContentEscapeBody(code) {
        if (code === 92 || code === 124) {
            effects1.consume(code);
            return inCellContentBody;
        } // Anything else.
        return inCellContentBody(code);
    }
    /** @type {State} */ function atRowEndBody(code) {
        effects1.exit('tableRow');
        if (code === null) {
            return tableBodyClose(code);
        }
        return effects1.check($62e5a16290d5550a$var$nextPrefixedOrBlank, tableBodyClose, effects1.attempt({
            tokenize: tokenizeRowEnd,
            partial: true
        }, $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects1, rowStartBody, 'linePrefix', 4), tableBodyClose))(code);
    }
    /** @type {State} */ function tableBodyClose(code) {
        effects1.exit('tableBody');
        return tableClose(code);
    }
    /** @type {Tokenizer} */ function tokenizeRowEnd(effects, ok, nok) {
        return start;
        /** @type {State} */ function start(code) {
            effects.enter('lineEnding');
            effects.consume(code);
            effects.exit('lineEnding');
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    return start1;
} // Based on micromark, but that won’t work as we’re in a table, and that expects
// content.
// <https://github.com/micromark/micromark/blob/main/lib/tokenize/setext-underline.js>
/** @type {Tokenizer} */ function $62e5a16290d5550a$var$tokenizeSetextUnderlineMini(effects, ok, nok) {
    /** @type {State} */ function start(code) {
        if (code !== 45) {
            return nok(code);
        }
        effects.enter('setextUnderline');
        return sequence(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === 45) {
            effects.consume(code);
            return sequence;
        }
        return whitespace(code);
    }
    /** @type {State} */ function whitespace(code) {
        if (code === null || $2d97e78534b5d038$export$34a1dff1c0936953(code)) {
            return ok(code);
        }
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.consume(code);
            return whitespace;
        }
        return nok(code);
    }
    return start;
}
/** @type {Tokenizer} */ function $62e5a16290d5550a$var$tokenizeNextPrefixedOrBlank(effects, ok, nok) {
    let size = 0;
    /** @type {State} */ function start(code) {
        // This is a check, so we don’t care about tokens, but we open a bogus one
        // so we’re valid.
        effects.enter('check') // EOL.
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
        if (code === null || $2d97e78534b5d038$export$a30284361b3814b7(code)) {
            return ok(code);
        } // Anything else.
        return nok(code);
    }
    return start;
}



/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 */ /**
 * An opening or closing tag, followed by a case-insensitive specific tag name,
 * followed by HTML whitespace, a greater than, or a slash.
 */ const $4224c3796e0d1bd6$var$reFlow = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi;
/**
 * As HTML (text) parses tags separately (and v. strictly), we don’t need to be
 * global.
 */ const $4224c3796e0d1bd6$var$reText = new RegExp('^' + $4224c3796e0d1bd6$var$reFlow.source, 'i');
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
    if (this.options.allowDangerousHtml) value = value.replace(filter, '&lt;$1$2');
    this.raw(this.encode(value));
}


const $aa012d577c8027d3$export$4b6a13e2af1b08ed = {
    enter: {
        taskListCheck () {
            this.tag('<input ');
        }
    },
    exit: {
        taskListCheck () {
            this.tag('disabled="" type="checkbox">');
        },
        taskListCheckValueChecked () {
            this.tag('checked="" ');
        }
    }
};



const $ce37001db4916ed5$var$tasklistCheck = {
    tokenize: $ce37001db4916ed5$var$tokenizeTasklistCheck
};
const $ce37001db4916ed5$export$2912e8b2802475ff = {
    text: {
        [91]: $ce37001db4916ed5$var$tasklistCheck
    }
};
/** @type {Tokenizer} */ function $ce37001db4916ed5$var$tokenizeTasklistCheck(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function open(code) {
        if (// Exit if there’s stuff before.
        self.previous !== null || // item.
        !self._gfmTasklistFirstContentOfListItem) {
            return nok(code);
        }
        effects.enter('taskListCheck');
        effects.enter('taskListCheckMarker');
        effects.consume(code);
        effects.exit('taskListCheckMarker');
        return inside;
    }
    /** @type {State} */ function inside(code) {
        if ($2d97e78534b5d038$export$2c6cf65c1127992a(code)) {
            effects.enter('taskListCheckValueUnchecked');
            effects.consume(code);
            effects.exit('taskListCheckValueUnchecked');
            return close;
        }
        if (code === 88 || code === 120) {
            effects.enter('taskListCheckValueChecked');
            effects.consume(code);
            effects.exit('taskListCheckValueChecked');
            return close;
        }
        return nok(code);
    }
    /** @type {State} */ function close(code) {
        if (code === 93) {
            effects.enter('taskListCheckMarker');
            effects.consume(code);
            effects.exit('taskListCheckMarker');
            effects.exit('taskListCheck');
            return effects.check({
                tokenize: $ce37001db4916ed5$var$spaceThenNonSpace
            }, ok, nok);
        }
        return nok(code);
    }
    return open;
}
/** @type {Tokenizer} */ function $ce37001db4916ed5$var$spaceThenNonSpace(effects, ok, nok) {
    const self = this;
    /** @type {State} */ function after(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === 'whitespace' && code !== null && !$2d97e78534b5d038$export$a30284361b3814b7(code) ? ok(code) : nok(code);
    }
    return $a7f5dfe9b6212301$export$ae105c1eb063a0a2(effects, after, 'whitespace');
}



function $64fbedd63a50255e$export$59ffe8c4d7a4aab2(options) {
    return $467394f305db958c$export$86a865d89ef3c690([
        $f666adda49be15dd$export$608123d9b549151,
        $26591d1023b31d2e$export$8bbec8ea1400a00e(options),
        $62e5a16290d5550a$export$e36cebda627bf2dd,
        $ce37001db4916ed5$export$2912e8b2802475ff
    ]);
}
const $64fbedd63a50255e$export$6983b82e6105d62a = $467394f305db958c$export$eaf8c406dfb0a620([
    $06aaccb80082790c$export$999603f1f1c3d2f9,
    $43f3b10e358f0a11$export$58acedca46108820,
    $dc4cce43ce5324ac$export$c64626c032567c7f,
    $4224c3796e0d1bd6$export$c9bf87ea36d00682,
    $aa012d577c8027d3$export$4b6a13e2af1b08ed
]);


function $2caf473feed15aeb$export$fa42eaa97a352e23(value, character) {
    var source = String(value);
    var count = 0;
    var index;
    if (typeof character !== 'string') throw new Error('Expected character');
    index = source.indexOf(character);
    while(index !== -1){
        count++;
        index = source.indexOf(character, index + character.length);
    }
    return count;
}


function $f32726f9a65f6301$export$2e2bcd8739ae039(string) {
    if (typeof string !== 'string') throw new TypeError('Expected a string');
    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}


const $eaa54ddebb4188fb$export$226b3eccf92c9ed9 = /**
     * Check if a node passes a test.
     * When a `parent` node is known the `index` of node should also be given.
     *
     * @param {unknown} [node] Node to check
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @param {number|null|undefined} [index] Position of `node` in `parent`
     * @param {Parent|null|undefined} [parent] Parent of `node`
     * @param {unknown} [context] Context object to invoke `test` with
     * @returns {boolean} Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
     */ // eslint-disable-next-line max-params
function $eaa54ddebb4188fb$export$226b3eccf92c9ed9(node, test, index, parent, context) {
    const check = $eaa54ddebb4188fb$export$9c68d69a4c5bbcf9(test);
    if (index !== undefined && index !== null && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) throw new Error('Expected positive finite index');
    if (parent !== undefined && parent !== null && (!$eaa54ddebb4188fb$export$226b3eccf92c9ed9(parent) || !parent.children)) throw new Error('Expected parent node');
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) throw new Error('Expected both parent and index');
    // @ts-expect-error Looks like a node.
    return node && node.type && typeof node.type === 'string' ? Boolean(check.call(context, node, index, parent)) : false;
};
const $eaa54ddebb4188fb$export$9c68d69a4c5bbcf9 = /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */ function(test) {
    if (test === undefined || test === null) return $eaa54ddebb4188fb$var$ok;
    if (typeof test === 'string') return $eaa54ddebb4188fb$var$typeFactory(test);
    if (typeof test === 'object') return Array.isArray(test) ? $eaa54ddebb4188fb$var$anyFactory(test) : $eaa54ddebb4188fb$var$propsFactory(test);
    if (typeof test === 'function') return $eaa54ddebb4188fb$var$castFactory(test);
    throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */ function $eaa54ddebb4188fb$var$anyFactory(tests) {
    /** @type {Array.<AssertAnything>} */ const checks = [];
    let index1 = -1;
    while(++index1 < tests.length)checks[index1] = $eaa54ddebb4188fb$export$9c68d69a4c5bbcf9(tests[index1]);
    /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].call(this, ...parameters)) return true;
        }
        return false;
    }
    return $eaa54ddebb4188fb$var$castFactory(any);
}
/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */ function $eaa54ddebb4188fb$var$propsFactory(check) {
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
    return $eaa54ddebb4188fb$var$castFactory(all);
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */ function $eaa54ddebb4188fb$var$typeFactory(check) {
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
    return $eaa54ddebb4188fb$var$castFactory(type);
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */ function $eaa54ddebb4188fb$var$castFactory(check) {
    /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */ function assertion(...parameters) {
        // @ts-expect-error: spreading is fine.
        return Boolean(check.call(this, ...parameters));
    }
    return assertion;
}
// Utility to return true.
function $eaa54ddebb4188fb$var$ok() {
    return true;
}


function $240c83333c8d40f0$export$35e9368ef982300f(d) {
    return '\u001B[33m' + d + '\u001B[39m';
}


const $d6287717c804e67f$export$f4d8133c446fe484 = true;
const $d6287717c804e67f$export$8773f85c2fb2c116 = 'skip';
const $d6287717c804e67f$export$7f100f842f565dc9 = false;
const $d6287717c804e67f$export$70008a21eb6de899 = /**
     * Visit children of tree which pass a test
     *
     * @param {Node} tree Abstract syntax tree to walk
     * @param {Test} test test Test node
     * @param {Visitor<Node>} visitor Function to run for each node
     * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
     */ function(tree, test, visitor, reverse) {
    if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-ignore no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
    }
    var is = $eaa54ddebb4188fb$export$9c68d69a4c5bbcf9(test);
    var step = reverse ? -1 : 1;
    factory(tree, null, [])();
    /**
       * @param {Node} node
       * @param {number?} index
       * @param {Array.<Parent>} parents
       */ function factory(node, index, parents) {
        /** @type {Object.<string, unknown>} */ var value = typeof node === 'object' && node !== null ? node : {
        };
        /** @type {string} */ var name;
        if (typeof value.type === 'string') {
            name = typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
            Object.defineProperty(visit, 'name', {
                value: 'node (' + $240c83333c8d40f0$export$35e9368ef982300f(value.type + (name ? '<' + name + '>' : '')) + ')'
            });
        }
        function visit() {
            /** @type {ActionTuple} */ var result = [];
            /** @type {ActionTuple} */ var subresult;
            /** @type {number} */ var offset;
            /** @type {Array.<Parent>} */ var grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || null)) {
                result = $d6287717c804e67f$var$toResult(visitor(node, parents));
                if (result[0] === $d6287717c804e67f$export$7f100f842f565dc9) {
                    return result;
                }
            }
            if (node.children && result[0] !== $d6287717c804e67f$export$8773f85c2fb2c116) {
                // @ts-ignore looks like a parent.
                offset = (reverse ? node.children.length : -1) + step;
                // @ts-ignore looks like a parent.
                grandparents = parents.concat(node);
                // @ts-ignore looks like a parent.
                while(offset > -1 && offset < node.children.length){
                    subresult = factory(node.children[offset], offset, grandparents)();
                    if (subresult[0] === $d6287717c804e67f$export$7f100f842f565dc9) {
                        return subresult;
                    }
                    offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
                }
            }
            return result;
        }
        return visit;
    }
};
/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */ function $d6287717c804e67f$var$toResult(value) {
    if (Array.isArray(value)) return value;
    if (typeof value === 'number') return [
        $d6287717c804e67f$export$f4d8133c446fe484,
        value
    ];
    return [
        value
    ];
}



const $df493130529ab26e$var$own = {
}.hasOwnProperty;
const $df493130529ab26e$export$fb306ebf003fc574 = /**
     * @param {Node} tree
     * @param {Find|FindAndReplaceSchema|FindAndReplaceList} find
     * @param {Replace|Options} [replace]
     * @param {Options} [options]
     */ function(tree, find1, replace1, options) {
    /** @type {Options|undefined} */ let settings;
    /** @type {FindAndReplaceSchema|FindAndReplaceList} */ let schema;
    if (typeof find1 === 'string' || find1 instanceof RegExp) {
        // @ts-expect-error don’t expect options twice.
        schema = [
            [
                find1,
                replace1
            ]
        ];
        settings = options;
    } else {
        schema = find1;
        // @ts-expect-error don’t expect replace twice.
        settings = replace1;
    }
    if (!settings) settings = {
    };
    const ignored = $eaa54ddebb4188fb$export$9c68d69a4c5bbcf9(settings.ignore || []);
    const pairs = $df493130529ab26e$var$toPairs(schema);
    let pairIndex = -1;
    while(++pairIndex < pairs.length)$d6287717c804e67f$export$70008a21eb6de899(tree, 'text', visitor);
    /** @type {import('unist-util-visit-parents').Visitor<Text>} */ function visitor(node, parents) {
        let index = -1;
        /** @type {Parent|undefined} */ let grandparent;
        while(++index < parents.length){
            const parent = parents[index];
            if (ignored(parent, // @ts-expect-error mdast vs. unist parent.
            grandparent ? grandparent.children.indexOf(parent) : undefined, grandparent)) {
                return;
            }
            grandparent = parent;
        }
        if (grandparent) {
            return handler(node, grandparent);
        }
    }
    /**
       * @param {Text} node
       * @param {Parent} parent
       * @returns {VisitorResult}
       */ function handler(node, parent) {
        const find = pairs[pairIndex][0];
        const replace = pairs[pairIndex][1];
        let start = 0;
        // @ts-expect-error: TS is wrong, some of these children can be text.
        let index = parent.children.indexOf(node);
        /** @type {Array.<PhrasingContent>} */ let nodes = [];
        /** @type {number|undefined} */ let position;
        find.lastIndex = 0;
        let match = find.exec(node.value);
        while(match){
            position = match.index;
            // @ts-expect-error this is perfectly fine, typescript.
            let value = replace(...match, {
                index: match.index,
                input: match.input
            });
            if (typeof value === 'string') {
                value = value.length > 0 ? {
                    type: 'text',
                    value: value
                } : undefined;
            }
            if (value !== false) {
                if (start !== position) {
                    nodes.push({
                        type: 'text',
                        value: node.value.slice(start, position)
                    });
                }
                if (Array.isArray(value)) {
                    nodes.push(...value);
                } else if (value) {
                    nodes.push(value);
                }
                start = position + match[0].length;
            }
            if (!find.global) {
                break;
            }
            match = find.exec(node.value);
        }
        if (position === undefined) {
            nodes = [
                node
            ];
            index--;
        } else {
            if (start < node.value.length) {
                nodes.push({
                    type: 'text',
                    value: node.value.slice(start)
                });
            }
            parent.children.splice(index, 1, ...nodes);
        }
        return index + nodes.length + 1;
    }
    return tree;
};
/**
 * @param {FindAndReplaceSchema|FindAndReplaceList} schema
 * @returns {Pairs}
 */ function $df493130529ab26e$var$toPairs(schema) {
    /** @type {Pairs} */ const result = [];
    if (typeof schema !== 'object') throw new TypeError('Expected array or object as schema');
    if (Array.isArray(schema)) {
        let index = -1;
        while(++index < schema.length)result.push([
            $df493130529ab26e$var$toExpression(schema[index][0]),
            $df493130529ab26e$var$toFunction(schema[index][1])
        ]);
    } else {
        /** @type {string} */ let key;
        for(key in schema)if ($df493130529ab26e$var$own.call(schema, key)) result.push([
            $df493130529ab26e$var$toExpression(key),
            $df493130529ab26e$var$toFunction(schema[key])
        ]);
    }
    return result;
}
/**
 * @param {Find} find
 * @returns {RegExp}
 */ function $df493130529ab26e$var$toExpression(find) {
    return typeof find === 'string' ? new RegExp($f32726f9a65f6301$export$2e2bcd8739ae039(find), 'g') : find;
}
/**
 * @param {Replace} replace
 * @returns {ReplaceFunction}
 */ function $df493130529ab26e$var$toFunction(replace) {
    return typeof replace === 'function' ? replace : ()=>replace
    ;
}



const $396a6fe46380ed65$var$inConstruct = 'phrasing';
const $396a6fe46380ed65$var$notInConstruct = [
    'autolink',
    'link',
    'image',
    'label'
];
const $396a6fe46380ed65$export$b6afdfff2163546f = {
    transforms: [
        $396a6fe46380ed65$var$transformGfmAutolinkLiterals
    ],
    enter: {
        literalAutolink: $396a6fe46380ed65$var$enterLiteralAutolink,
        literalAutolinkEmail: $396a6fe46380ed65$var$enterLiteralAutolinkValue,
        literalAutolinkHttp: $396a6fe46380ed65$var$enterLiteralAutolinkValue,
        literalAutolinkWww: $396a6fe46380ed65$var$enterLiteralAutolinkValue
    },
    exit: {
        literalAutolink: $396a6fe46380ed65$var$exitLiteralAutolink,
        literalAutolinkEmail: $396a6fe46380ed65$var$exitLiteralAutolinkEmail,
        literalAutolinkHttp: $396a6fe46380ed65$var$exitLiteralAutolinkHttp,
        literalAutolinkWww: $396a6fe46380ed65$var$exitLiteralAutolinkWww
    }
};
const $396a6fe46380ed65$export$d3ace9096b01c39d = {
    unsafe: [
        {
            character: '@',
            before: '[+\\-.\\w]',
            after: '[\\-.\\w]',
            inConstruct: $396a6fe46380ed65$var$inConstruct,
            notInConstruct: $396a6fe46380ed65$var$notInConstruct
        },
        {
            character: '.',
            before: '[Ww]',
            after: '[\\-.\\w]',
            inConstruct: $396a6fe46380ed65$var$inConstruct,
            notInConstruct: $396a6fe46380ed65$var$notInConstruct
        },
        {
            character: ':',
            before: '[ps]',
            after: '\\/',
            inConstruct: $396a6fe46380ed65$var$inConstruct,
            notInConstruct: $396a6fe46380ed65$var$notInConstruct
        }
    ]
};
/** @type {FromMarkdownHandle} */ function $396a6fe46380ed65$var$enterLiteralAutolink(token) {
    this.enter({
        type: 'link',
        title: null,
        url: '',
        children: []
    }, token);
}
/** @type {FromMarkdownHandle} */ function $396a6fe46380ed65$var$enterLiteralAutolinkValue(token) {
    this.config.enter.autolinkProtocol.call(this, token);
}
/** @type {FromMarkdownHandle} */ function $396a6fe46380ed65$var$exitLiteralAutolinkHttp(token) {
    this.config.exit.autolinkProtocol.call(this, token);
}
/** @type {FromMarkdownHandle} */ function $396a6fe46380ed65$var$exitLiteralAutolinkWww(token) {
    this.config.exit.data.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = 'http://' + this.sliceSerialize(token);
}
/** @type {FromMarkdownHandle} */ function $396a6fe46380ed65$var$exitLiteralAutolinkEmail(token) {
    this.config.exit.autolinkEmail.call(this, token);
}
/** @type {FromMarkdownHandle} */ function $396a6fe46380ed65$var$exitLiteralAutolink(token) {
    this.exit(token);
}
/** @type {FromMarkdownTransform} */ function $396a6fe46380ed65$var$transformGfmAutolinkLiterals(tree) {
    $df493130529ab26e$export$fb306ebf003fc574(tree, [
        [
            /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
            $396a6fe46380ed65$var$findUrl
        ],
        [
            /([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,
            $396a6fe46380ed65$var$findEmail
        ]
    ], {
        ignore: [
            'link',
            'linkReference'
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
 */ // eslint-disable-next-line max-params
function $396a6fe46380ed65$var$findUrl(_, protocol, domain, path, match) {
    let prefix = '';
    // Not an expected previous character.
    if (!$396a6fe46380ed65$var$previous(match)) return false;
    // Treat `www` as part of the domain.
    if (/^w/i.test(protocol)) {
        domain = protocol + domain;
        protocol = '';
        prefix = 'http://';
    }
    if (!$396a6fe46380ed65$var$isCorrectDomain(domain)) return false;
    const parts = $396a6fe46380ed65$var$splitUrl(domain + path);
    if (!parts[0]) return false;
    /** @type {PhrasingContent} */ const result = {
        type: 'link',
        title: null,
        url: prefix + protocol + parts[0],
        children: [
            {
                type: 'text',
                value: protocol + parts[0]
            }
        ]
    };
    if (parts[1]) return [
        result,
        {
            type: 'text',
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
 */ function $396a6fe46380ed65$var$findEmail(_, atext, label, match) {
    // Not an expected previous character.
    if (!$396a6fe46380ed65$var$previous(match, true) || /[_-]$/.test(label)) return false;
    return {
        type: 'link',
        title: null,
        url: 'mailto:' + atext + '@' + label,
        children: [
            {
                type: 'text',
                value: atext + '@' + label
            }
        ]
    };
}
/**
 * @param {string} domain
 * @returns {boolean}
 */ function $396a6fe46380ed65$var$isCorrectDomain(domain) {
    const parts = domain.split('.');
    if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) return false;
    return true;
}
/**
 * @param {string} url
 * @returns {[string, string|undefined]}
 */ function $396a6fe46380ed65$var$splitUrl(url) {
    const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
    /** @type {number} */ let closingParenIndex;
    /** @type {number} */ let openingParens;
    /** @type {number} */ let closingParens;
    /** @type {string|undefined} */ let trail;
    if (trailExec) {
        url = url.slice(0, trailExec.index);
        trail = trailExec[0];
        closingParenIndex = trail.indexOf(')');
        openingParens = $2caf473feed15aeb$export$fa42eaa97a352e23(url, '(');
        closingParens = $2caf473feed15aeb$export$fa42eaa97a352e23(url, ')');
        while(closingParenIndex !== -1 && openingParens > closingParens){
            url += trail.slice(0, closingParenIndex + 1);
            trail = trail.slice(closingParenIndex + 1);
            closingParenIndex = trail.indexOf(')');
            closingParens++;
        }
    }
    return [
        url,
        trail
    ];
}
/**
 * @param {RegExpMatchObject} match
 * @param {boolean} [email=false]
 * @returns {boolean}
 */ function $396a6fe46380ed65$var$previous(match, email) {
    const code = match.input.charCodeAt(match.index - 1);
    return (match.index === 0 || $2d97e78534b5d038$export$a0ff789c034ffdf4(code) || $2d97e78534b5d038$export$aa04114dd888a7a0(code)) && (!email || code !== 47);
}


function $ad0c4130838a8e9c$export$f4090a9439f37631(parent, context, safeOptions) {
    const children = parent.children || [];
    /** @type {Array.<string>} */ const results = [];
    let index = -1;
    let before = safeOptions.before;
    while(++index < children.length){
        const child = children[index];
        /** @type {string} */ let after;
        if (index + 1 < children.length) {
            // @ts-expect-error: hush, it’s actually a `zwitch`.
            let handle = context.handle.handlers[children[index + 1].type];
            if (handle && handle.peek) handle = handle.peek;
            after = handle ? handle(children[index + 1], parent, context, {
                before: '',
                after: ''
            }).charAt(0) : '';
        } else after = safeOptions.after;
        // In some cases, html (text) can be found in phrasing right after an eol.
        // When we’d serialize that, in most cases that would be seen as html
        // (flow).
        // As we can’t escape or so to prevent it from happening, we take a somewhat
        // reasonable approach: replace that eol with a space.
        // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
        if (results.length > 0 && (before === '\r' || before === '\n') && child.type === 'html') {
            results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, ' ');
            before = ' ';
        }
        results.push(context.handle(child, parent, context, {
            before: before,
            after: after
        }));
        before = results[results.length - 1].slice(-1);
    }
    return results.join('');
}


const $ebeb141350cfa7f9$export$34d64e709dd0b9bb = {
    canContainEols: [
        'delete'
    ],
    enter: {
        strikethrough: $ebeb141350cfa7f9$var$enterStrikethrough
    },
    exit: {
        strikethrough: $ebeb141350cfa7f9$var$exitStrikethrough
    }
};
const $ebeb141350cfa7f9$export$1632835bd2c84956 = {
    unsafe: [
        {
            character: '~',
            inConstruct: 'phrasing'
        }
    ],
    handlers: {
        delete: $ebeb141350cfa7f9$var$handleDelete
    }
};
$ebeb141350cfa7f9$var$handleDelete.peek = $ebeb141350cfa7f9$var$peekDelete;
/** @type {FromMarkdownHandle} */ function $ebeb141350cfa7f9$var$enterStrikethrough(token) {
    this.enter({
        type: 'delete',
        children: []
    }, token);
}
/** @type {FromMarkdownHandle} */ function $ebeb141350cfa7f9$var$exitStrikethrough(token) {
    this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {Delete} node
 */ function $ebeb141350cfa7f9$var$handleDelete(node, _, context) {
    const exit = context.enter('emphasis');
    const value = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
        before: '~',
        after: '~'
    });
    exit();
    return '~~' + value + '~~';
}
/** @type {ToMarkdownHandle} */ function $ebeb141350cfa7f9$var$peekDelete() {
    return '~';
}



function $1df5ad01bb2635c5$export$7993761911514c15(pattern) {
    if (!pattern._compiled) {
        const before = (pattern.atBreak ? '[\\r\\n][\\t ]*' : '') + (pattern.before ? '(?:' + pattern.before + ')' : '');
        pattern._compiled = new RegExp((before ? '(' + before + ')' : '') + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') + pattern.character + (pattern.after ? '(?:' + pattern.after + ')' : ''), 'g');
    }
    return pattern._compiled;
}


$9e9198850a90c441$export$91b9bee19a0d8569.peek = $9e9198850a90c441$var$inlineCodePeek;
function $9e9198850a90c441$export$91b9bee19a0d8569(node, _, context) {
    let value = node.value || '';
    let sequence = '`';
    let index = -1;
    // If there is a single grave accent on its own in the code, use a fence of
    // two.
    // If there are two in a row, use one.
    while(new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value))sequence += '`';
    // If this is not just spaces or eols (tabs don’t count), and either the
    // first or last character are a space, eol, or tick, then pad with spaces.
    if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) value = ' ' + value + ' ';
    // We have a potential problem: certain characters after eols could result in
    // blocks being seen.
    // For example, if someone injected the string `'\n# b'`, then that would
    // result in an ATX heading.
    // We can’t escape characters in `inlineCode`, but because eols are
    // transformed to spaces when going from markdown to HTML anyway, we can swap
    // them out.
    while(++index < context.unsafe.length){
        const pattern = context.unsafe[index];
        const expression = $1df5ad01bb2635c5$export$7993761911514c15(pattern);
        /** @type {RegExpExecArray|null} */ let match;
        // Only look for `atBreak`s.
        // Btw: note that `atBreak` patterns will always start the regex at LF or
        // CR.
        if (!pattern.atBreak) continue;
        while(match = expression.exec(value)){
            let position = match.index;
            // Support CRLF (patterns only look for one of the characters).
            if (value.charCodeAt(position) === 10 /* `\n` */  && value.charCodeAt(position - 1) === 13 /* `\r` */ ) position--;
            value = value.slice(0, position) + ' ' + value.slice(match.index + 1);
        }
    }
    return sequence + value + sequence;
}
/**
 * @type {Handle}
 */ function $9e9198850a90c441$var$inlineCodePeek() {
    return '`';
}


function $08b0980a9177e436$export$cdb7288612c4f3d6(table, options) {
    const settings = options || {
    };
    const align = (settings.align || []).concat();
    const stringLength = settings.stringLength || $08b0980a9177e436$var$defaultStringLength;
    /** @type {number[]} Character codes as symbols for alignment per column. */ const alignments = [];
    let rowIndex = -1;
    /** @type {string[][]} Cells per row. */ const cellMatrix = [];
    /** @type {number[][]} Sizes of each cell per row. */ const sizeMatrix = [];
    /** @type {number[]} */ const longestCellByColumn = [];
    let mostCellsPerRow = 0;
    /** @type {number} */ let columnIndex;
    /** @type {string[]} Cells of current row */ let row;
    /** @type {number[]} Sizes of current row */ let sizes;
    /** @type {number} Sizes of current cell */ let size;
    /** @type {string} Current cell */ let cell;
    /** @type {string[]} Chunks of current line. */ let line;
    /** @type {string} */ let before;
    /** @type {string} */ let after;
    /** @type {number} */ let code;
    // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
    // do superfluous work when aligning, so optimize for aligning.
    while(++rowIndex < table.length){
        columnIndex = -1;
        row = [];
        sizes = [];
        if (table[rowIndex].length > mostCellsPerRow) mostCellsPerRow = table[rowIndex].length;
        while(++columnIndex < table[rowIndex].length){
            cell = $08b0980a9177e436$var$serialize(table[rowIndex][columnIndex]);
            if (settings.alignDelimiters !== false) {
                size = stringLength(cell);
                sizes[columnIndex] = size;
                if (longestCellByColumn[columnIndex] === undefined || size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
            }
            row.push(cell);
        }
        cellMatrix[rowIndex] = row;
        sizeMatrix[rowIndex] = sizes;
    }
    // Figure out which alignments to use.
    columnIndex = -1;
    if (typeof align === 'object' && 'length' in align) while(++columnIndex < mostCellsPerRow)alignments[columnIndex] = $08b0980a9177e436$var$toAlignment(align[columnIndex]);
    else {
        code = $08b0980a9177e436$var$toAlignment(align);
        while(++columnIndex < mostCellsPerRow)alignments[columnIndex] = code;
    }
    // Inject the alignment row.
    columnIndex = -1;
    row = [];
    sizes = [];
    while(++columnIndex < mostCellsPerRow){
        code = alignments[columnIndex];
        before = '';
        after = '';
        if (code === 99 /* `c` */ ) {
            before = ':';
            after = ':';
        } else if (code === 108 /* `l` */ ) before = ':';
        else if (code === 114 /* `r` */ ) after = ':';
        // There *must* be at least one hyphen-minus in each alignment cell.
        size = settings.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
        cell = before + '-'.repeat(size) + after;
        if (settings.alignDelimiters !== false) {
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
    /** @type {string[]} */ const lines = [];
    while(++rowIndex < cellMatrix.length){
        row = cellMatrix[rowIndex];
        sizes = sizeMatrix[rowIndex];
        columnIndex = -1;
        line = [];
        while(++columnIndex < mostCellsPerRow){
            cell = row[columnIndex] || '';
            before = '';
            after = '';
            if (settings.alignDelimiters !== false) {
                size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
                code = alignments[columnIndex];
                if (code === 114 /* `r` */ ) before = ' '.repeat(size);
                else if (code === 99 /* `c` */ ) {
                    if (size % 2) {
                        before = ' '.repeat(size / 2 + 0.5);
                        after = ' '.repeat(size / 2 - 0.5);
                    } else {
                        before = ' '.repeat(size / 2);
                        after = before;
                    }
                } else after = ' '.repeat(size);
            }
            if (settings.delimiterStart !== false && !columnIndex) line.push('|');
            if (settings.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
            // empty: there will be a closing space.
            !(settings.alignDelimiters === false && cell === '') && (settings.delimiterStart !== false || columnIndex)) line.push(' ');
            if (settings.alignDelimiters !== false) line.push(before);
            line.push(cell);
            if (settings.alignDelimiters !== false) line.push(after);
            if (settings.padding !== false) line.push(' ');
            if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) line.push('|');
        }
        lines.push(settings.delimiterEnd === false ? line.join('').replace(/ +$/, '') : line.join(''));
    }
    return lines.join('\n');
}
/**
 * @param {string|null|undefined} [value]
 * @returns {string}
 */ function $08b0980a9177e436$var$serialize(value) {
    return value === null || value === undefined ? '' : String(value);
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
    const code = typeof value === 'string' ? value.charCodeAt(0) : 0;
    return code === 67 /* `C` */  || code === 99 /* `c` */  ? 99 /* `c` */  : code === 76 /* `L` */  || code === 108 /* `l` */  ? 108 /* `l` */  : code === 82 /* `R` */  || code === 114 /* `r` */  ? 114 /* `r` */  : 0;
}


const $d78f247f5550ea64$export$8bd0ec8ecf6adb7d = {
    enter: {
        table: $d78f247f5550ea64$var$enterTable,
        tableData: $d78f247f5550ea64$var$enterCell,
        tableHeader: $d78f247f5550ea64$var$enterCell,
        tableRow: $d78f247f5550ea64$var$enterRow
    },
    exit: {
        codeText: $d78f247f5550ea64$var$exitCodeText,
        table: $d78f247f5550ea64$var$exitTable,
        tableData: $d78f247f5550ea64$var$exit,
        tableHeader: $d78f247f5550ea64$var$exit,
        tableRow: $d78f247f5550ea64$var$exit
    }
};
/** @type {FromMarkdownHandle} */ function $d78f247f5550ea64$var$enterTable(token) {
    /** @type {AlignType[]} */ // @ts-expect-error: `align` is custom.
    const align = token._align;
    this.enter({
        type: 'table',
        align: align,
        children: []
    }, token);
    this.setData('inTable', true);
}
/** @type {FromMarkdownHandle} */ function $d78f247f5550ea64$var$exitTable(token) {
    this.exit(token);
    this.setData('inTable');
}
/** @type {FromMarkdownHandle} */ function $d78f247f5550ea64$var$enterRow(token) {
    this.enter({
        type: 'tableRow',
        children: []
    }, token);
}
/** @type {FromMarkdownHandle} */ function $d78f247f5550ea64$var$exit(token) {
    this.exit(token);
}
/** @type {FromMarkdownHandle} */ function $d78f247f5550ea64$var$enterCell(token) {
    this.enter({
        type: 'tableCell',
        children: []
    }, token);
}
// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
/** @type {FromMarkdownHandle} */ function $d78f247f5550ea64$var$exitCodeText(token) {
    let value = this.resume();
    if (this.getData('inTable')) value = value.replace(/\\([\\|])/g, $d78f247f5550ea64$var$replace);
    const node = this.stack[this.stack.length - 1];
    node.value = value;
    this.exit(token);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */ function $d78f247f5550ea64$var$replace($0, $1) {
    // Pipes work, backslashes don’t (but can’t escape pipes).
    return $1 === '|' ? $1 : $0;
}
function $d78f247f5550ea64$export$dafcad76ea6e0045(options) {
    const settings = options || {
    };
    const padding = settings.tableCellPadding;
    const alignDelimiters = settings.tablePipeAlign;
    const stringLength = settings.stringLength;
    const around = padding ? ' ' : '|';
    /**
   * @type {ToMarkdownHandle}
   * @param {Table} node
   */ function handleTable(node, _, context) {
        // @ts-expect-error: fixed in `markdown-table@3.0.1`.
        return serializeData(handleTableAsData(node, context), node.align);
    }
    /**
   * This function isn’t really used normally, because we handle rows at the
   * table level.
   * But, if someone passes in a table row, this ensures we make somewhat sense.
   *
   * @type {ToMarkdownHandle}
   * @param {TableRow} node
   */ function handleTableRow(node, _, context) {
        const row = handleTableRowAsData(node, context);
        // `markdown-table` will always add an align row
        const value = serializeData([
            row
        ]);
        return value.slice(0, value.indexOf('\n'));
    }
    /**
   * @type {ToMarkdownHandle}
   * @param {TableCell} node
   */ function handleTableCell(node, _, context) {
        const exit = context.enter('tableCell');
        const subexit = context.enter('phrasing');
        const value = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
            before: around,
            after: around
        });
        subexit();
        exit();
        return value;
    }
    /**
   * @param {Array.<Array.<string>>} matrix
   * @param {Array.<string>} [align]
   */ function serializeData(matrix, align) {
        return $08b0980a9177e436$export$cdb7288612c4f3d6(matrix, {
            align: align,
            alignDelimiters: alignDelimiters,
            padding: padding,
            stringLength: stringLength
        });
    }
    /**
   * @param {Table} node
   * @param {ToMarkdownContext} context
   */ function handleTableAsData(node, context) {
        const children = node.children;
        let index = -1;
        /** @type {Array.<Array.<string>>} */ const result = [];
        const subexit = context.enter('table');
        while(++index < children.length){
            result[index] = handleTableRowAsData(children[index], context);
        }
        subexit();
        return result;
    }
    /**
   * @param {TableRow} node
   * @param {ToMarkdownContext} context
   */ function handleTableRowAsData(node, context) {
        const children = node.children;
        let index = -1;
        /** @type {Array.<string>} */ const result = [];
        const subexit = context.enter('tableRow');
        while(++index < children.length){
            result[index] = handleTableCell(children[index], node, context);
        }
        subexit();
        return result;
    }
    /**
   * @type {ToMarkdownHandle}
   * @param {InlineCode} node
   */ function inlineCodeWithTable(node, parent, context) {
        let value = $9e9198850a90c441$export$91b9bee19a0d8569(node, parent, context);
        if (context.stack.includes('tableCell')) {
            value = value.replace(/\|/g, '\\$&');
        }
        return value;
    }
    return {
        unsafe: [
            {
                character: '\r',
                inConstruct: 'tableCell'
            },
            {
                character: '\n',
                inConstruct: 'tableCell'
            },
            // A pipe, when followed by a tab or space (padding), or a dash or colon
            // (unpadded delimiter row), could result in a table.
            {
                atBreak: true,
                character: '|',
                after: '[\t :-]'
            },
            // A pipe in a cell must be encoded.
            {
                character: '|',
                inConstruct: 'tableCell'
            },
            // A colon must be followed by a dash, in which case it could start a
            // delimiter row.
            {
                atBreak: true,
                character: ':',
                after: '-'
            },
            // A delimiter row can also start with a dash, when followed by more
            // dashes, a colon, or a pipe.
            // This is a stricter version than the built in check for lists, thematic
            // breaks, and setex heading underlines though:
            // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
            {
                atBreak: true,
                character: '-',
                after: '[:|-]'
            }
        ],
        handlers: {
            table: handleTable,
            tableRow: handleTableRow,
            tableCell: handleTableCell,
            inlineCode: inlineCodeWithTable
        }
    };
}


function $5406c434144fc34c$export$7425517207a4d0ae(context) {
    const marker = context.options.bullet || '*';
    if (marker !== '*' && marker !== '+' && marker !== '-') throw new Error('Cannot serialize items with `' + marker + '` for `options.bullet`, expected `*`, `+`, or `-`');
    return marker;
}


function $bed1344bc73f7090$export$2d5358b63da92261(context) {
    const style = context.options.listItemIndent || 'tab';
    // To do: remove in a major.
    // @ts-expect-error: deprecated.
    if (style === 1 || style === '1') return 'one';
    if (style !== 'tab' && style !== 'one' && style !== 'mixed') throw new Error('Cannot serialize items with `' + style + '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`');
    return style;
}


function $5d811d6b2c99e2fb$export$134f7fdacfea8b16(parent, context) {
    const children = parent.children || [];
    /** @type {Array.<string>} */ const results = [];
    let index1 = -1;
    while(++index1 < children.length){
        const child = children[index1];
        results.push(context.handle(child, parent, context, {
            before: '\n',
            after: '\n'
        }));
        if (index1 < children.length - 1) results.push(between(child, children[index1 + 1]));
    }
    /**
   * @param {Node} left
   * @param {Node} right
   * @returns {string}
   */ function between(left, right) {
        let index = context.join.length;
        /** @type {ReturnType<Join>} */ let result;
        while(index--){
            result = context.join[index](left, right, parent, context);
            if (result === true || result === 1) {
                break;
            }
            if (typeof result === 'number') {
                return '\n'.repeat(1 + result);
            }
            if (result === false) {
                return '\n\n<!---->\n\n';
            }
        }
        return '\n\n';
    }
    return results.join('');
}


/**
 * @callback Map
 * @param {string} value
 * @param {number} line
 * @param {boolean} blank
 * @returns {string}
 */ const $ef23088a57cfa1fa$var$eol = /\r?\n|\r/g;
function $ef23088a57cfa1fa$export$7c3cf23d514b264a(value1, map) {
    /** @type {Array.<string>} */ const result = [];
    let start = 0;
    let line = 0;
    /** @type {RegExpExecArray|null} */ let match;
    while(match = $ef23088a57cfa1fa$var$eol.exec(value1)){
        one(value1.slice(start, match.index));
        result.push(match[0]);
        start = match.index + match[0].length;
        line++;
    }
    one(value1.slice(start));
    /**
   * @param {string} value
   */ function one(value) {
        result.push(map(value, line, !value));
    }
    return result.join('');
}


function $eda635173b80d801$export$76c7e83ecc9cdf05(node, parent, context) {
    const listItemIndent = $bed1344bc73f7090$export$2d5358b63da92261(context);
    /** @type {string} */ let bullet = $5406c434144fc34c$export$7425517207a4d0ae(context);
    if (parent && parent.type === 'list' && parent.ordered) bullet = (typeof parent.start === 'number' && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + '.';
    let size = bullet.length + 1;
    if (listItemIndent === 'tab' || listItemIndent === 'mixed' && (parent && 'spread' in parent && parent.spread || node.spread)) size = Math.ceil(size / 4) * 4;
    const exit = context.enter('listItem');
    const value = $ef23088a57cfa1fa$export$7c3cf23d514b264a($5d811d6b2c99e2fb$export$134f7fdacfea8b16(node, context), map);
    exit();
    /** @type {Map} */ function map(line, index, blank) {
        if (index) {
            return (blank ? '' : ' '.repeat(size)) + line;
        }
        return (blank ? bullet : bullet + ' '.repeat(size - bullet.length)) + line;
    }
    return value;
}


const $e19abc607307e827$export$a427a608608b215f = {
    exit: {
        taskListCheckValueChecked: $e19abc607307e827$var$exitCheck,
        taskListCheckValueUnchecked: $e19abc607307e827$var$exitCheck,
        paragraph: $e19abc607307e827$var$exitParagraphWithTaskListItem
    }
};
const $e19abc607307e827$export$9975722e7e834b78 = {
    unsafe: [
        {
            atBreak: true,
            character: '-',
            after: '[:|-]'
        }
    ],
    handlers: {
        listItem: $e19abc607307e827$var$listItemWithTaskListItem
    }
};
/** @type {FromMarkdownHandle} */ function $e19abc607307e827$var$exitCheck(token) {
    // We’re always in a paragraph, in a list item.
    this.stack[this.stack.length - 2].checked = token.type === 'taskListCheckValueChecked';
}
/** @type {FromMarkdownHandle} */ function $e19abc607307e827$var$exitParagraphWithTaskListItem(token) {
    const parent = this.stack[this.stack.length - 2];
    /** @type {Paragraph} */ // @ts-expect-error: must be true.
    const node = this.stack[this.stack.length - 1];
    /** @type {BlockContent[]} */ // @ts-expect-error: check whether `parent` is a `listItem` later.
    const siblings = parent.children;
    const head = node.children[0];
    let index = -1;
    /** @type {Paragraph|undefined} */ let firstParaghraph;
    if (parent && parent.type === 'listItem' && typeof parent.checked === 'boolean' && head && head.type === 'text') {
        while(++index < siblings.length){
            const sibling = siblings[index];
            if (sibling.type === 'paragraph') {
                firstParaghraph = sibling;
                break;
            }
        }
        if (firstParaghraph === node) {
            // Must start with a space or a tab.
            head.value = head.value.slice(1);
            if (head.value.length === 0) node.children.shift();
            else {
                // @ts-expect-error: must be true.
                head.position.start.column++;
                // @ts-expect-error: must be true.
                head.position.start.offset++;
                // @ts-expect-error: must be true.
                node.position.start = Object.assign({
                }, head.position.start);
            }
        }
    }
    this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {ListItem} node
 */ function $e19abc607307e827$var$listItemWithTaskListItem(node, parent, context) {
    const head = node.children[0];
    let value = $eda635173b80d801$export$76c7e83ecc9cdf05(node, parent, context);
    if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
    /**
   * @param {string} $0
   * @returns {string}
   */ function check($0) {
        return $0 + '[' + (node.checked ? 'x' : ' ') + '] ';
    }
    return value;
}


const $f79f077ff5001794$export$95adae814eb7433e = [
    $396a6fe46380ed65$export$b6afdfff2163546f,
    $ebeb141350cfa7f9$export$34d64e709dd0b9bb,
    $d78f247f5550ea64$export$8bd0ec8ecf6adb7d,
    $e19abc607307e827$export$a427a608608b215f
];
function $f79f077ff5001794$export$ea77de6901e7c72b(options) {
    return {
        extensions: [
            $396a6fe46380ed65$export$d3ace9096b01c39d,
            $ebeb141350cfa7f9$export$1632835bd2c84956,
            $d78f247f5550ea64$export$dafcad76ea6e0045(options),
            $e19abc607307e827$export$9975722e7e834b78
        ]
    };
}


function $d7530f4c779c68cb$export$2e2bcd8739ae039(options = {
}) {
    const data = this.data();
    add('micromarkExtensions', $64fbedd63a50255e$export$59ffe8c4d7a4aab2(options));
    add('fromMarkdownExtensions', $f79f077ff5001794$export$95adae814eb7433e);
    add('toMarkdownExtensions', $f79f077ff5001794$export$ea77de6901e7c72b(options));
    /**
   * @param {string} field
   * @param {unknown} value
   */ function add(field, value) {
        const list = // Other extensions
        /* c8 ignore next 2 */ data[field] ? data[field] : data[field] = [];
        list.push(value);
    }
}


var $1a093c163236440f$var$own = {
}.hasOwnProperty;
function $1a093c163236440f$export$d6a12bfbbedf6185(key, options) {
    var settings = options || {
    };
    /**
   * Handle one value.
   * Based on the bound `key`, a respective handler will be called.
   * If `value` is not an object, or doesn’t have a `key` property, the special
   * “invalid” handler will be called.
   * If `value` has an unknown `key`, the special “unknown” handler will be
   * called.
   *
   * All arguments, and the context object, are passed through to the handler,
   * and it’s result is returned.
   *
   * @param {...unknown} [value]
   * @this {unknown}
   * @returns {unknown}
   * @property {Handler} invalid
   * @property {Handler} unknown
   * @property {Handlers} handlers
   */ function one(value) {
        var fn = one.invalid;
        var handlers = one.handlers;
        if (value && $1a093c163236440f$var$own.call(value, key)) fn = $1a093c163236440f$var$own.call(handlers, value[key]) ? handlers[value[key]] : one.unknown;
        if (fn) return fn.apply(this, arguments);
    }
    one.handlers = settings.handlers || {
    };
    one.invalid = settings.invalid;
    one.unknown = settings.unknown;
    return one;
}


function $db3380ebc1fa4391$export$8d21e34596265fa2(base, extension) {
    let index = -1;
    /** @type {string} */ let key;
    // First do subextensions.
    if (extension.extensions) while(++index < extension.extensions.length)$db3380ebc1fa4391$export$8d21e34596265fa2(base, extension.extensions[index]);
    for(key in extension){
        if (key === 'extensions') ;
        else if (key === 'unsafe' || key === 'join') /* c8 ignore next 2 */ // @ts-expect-error: hush.
        base[key] = [
            ...base[key] || [],
            ...extension[key] || []
        ];
        else if (key === 'handlers') base[key] = Object.assign(base[key], extension[key] || {
        });
        else // @ts-expect-error: hush.
        base.options[key] = extension[key];
    }
    return base;
}




function $4365692ef9082566$export$67dc04e652a298ca(node, _, context) {
    const exit = context.enter('blockquote');
    const value = $ef23088a57cfa1fa$export$7c3cf23d514b264a($5d811d6b2c99e2fb$export$134f7fdacfea8b16(node, context), $4365692ef9082566$var$map);
    exit();
    return value;
}
/** @type {Map} */ function $4365692ef9082566$var$map(line, _, blank) {
    return '>' + (blank ? '' : ' ') + line;
}


function $cb161a8970a8d1f1$export$78221a09424368d(stack, pattern) {
    return $cb161a8970a8d1f1$var$listInScope(stack, pattern.inConstruct, true) && !$cb161a8970a8d1f1$var$listInScope(stack, pattern.notInConstruct, false);
}
/**
 * @param {Array.<string>} stack
 * @param {Unsafe['inConstruct']} list
 * @param {boolean} none
 * @returns {boolean}
 */ function $cb161a8970a8d1f1$var$listInScope(stack, list, none) {
    if (!list) return none;
    if (typeof list === 'string') list = [
        list
    ];
    let index = -1;
    while(++index < list.length){
        if (stack.includes(list[index])) return true;
    }
    return false;
}


function $330a6366de3826e0$export$371da9dd35aba193(_, _1, context, safe) {
    let index = -1;
    while(++index < context.unsafe.length){
        // If we can’t put eols in this construct (setext headings, tables), use a
        // space instead.
        if (context.unsafe[index].character === '\n' && $cb161a8970a8d1f1$export$78221a09424368d(context.stack, context.unsafe[index])) return /[ \t]/.test(safe.before) ? '' : ' ';
    }
    return '\\\n';
}


function $cd3f479acde3d9e1$export$711675ff42d864f2(value, character) {
    var source = String(value);
    var index = source.indexOf(character);
    var expected = index;
    var count = 0;
    var max = 0;
    if (typeof character !== 'string' || character.length !== 1) throw new Error('Expected character');
    while(index !== -1){
        if (index === expected) {
            if (++count > max) max = count;
        } else count = 1;
        expected = index + 1;
        index = source.indexOf(character, expected);
    }
    return max;
}


function $8638471292587e13$export$8c0df78a8cad9f4b(node, context) {
    return Boolean(!context.options.fences && node.value && // If there’s no info…
    !node.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
}


function $f9e6b10e576a37a4$export$7487ee7cbb2e2919(context) {
    const marker = context.options.fence || '`';
    if (marker !== '`' && marker !== '~') throw new Error('Cannot serialize code with `' + marker + '` for `options.fence`, expected `` ` `` or `~`');
    return marker;
}





function $b08bd3b190805b70$export$170b8c323eee7bec(context, input, config) {
    const value = (config.before || '') + (input || '') + (config.after || '');
    /** @type {Array.<number>} */ const positions = [];
    /** @type {Array.<string>} */ const result = [];
    /** @type {Record<number, {before: boolean, after: boolean}>} */ const infos = {
    };
    let index = -1;
    while(++index < context.unsafe.length){
        const pattern = context.unsafe[index];
        if (!$cb161a8970a8d1f1$export$78221a09424368d(context.stack, pattern)) continue;
        const expression = $1df5ad01bb2635c5$export$7993761911514c15(pattern);
        /** @type {RegExpExecArray|null} */ let match;
        while(match = expression.exec(value)){
            const before = 'before' in pattern || Boolean(pattern.atBreak);
            const after = 'after' in pattern;
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
        if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after) continue;
        if (start !== position) // If we have to use a character reference, an ampersand would be more
        // correct, but as backslashes only care about punctuation, either will
        // do the trick
        result.push($b08bd3b190805b70$var$escapeBackslashes(value.slice(start, position), '\\'));
        start = position;
        if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || !config.encode.includes(value.charAt(position)))) // Character escape.
        result.push('\\');
        else {
            // Character reference.
            result.push('&#x' + value.charCodeAt(position).toString(16).toUpperCase() + ';');
            start++;
        }
    }
    result.push($b08bd3b190805b70$var$escapeBackslashes(value.slice(start, end), config.after));
    return result.join('');
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
    /** @type {Array.<number>} */ const positions = [];
    /** @type {Array.<string>} */ const results = [];
    const whole = value + after;
    let index = -1;
    let start = 0;
    /** @type {RegExpExecArray|null} */ let match;
    while(match = expression.exec(whole))positions.push(match.index);
    while(++index < positions.length){
        if (start !== positions[index]) results.push(value.slice(start, positions[index]));
        results.push('\\');
        start = positions[index];
    }
    results.push(value.slice(start));
    return results.join('');
}


function $484d6dd7028926e7$export$6565f9f03506010b(node, _, context) {
    const marker = $f9e6b10e576a37a4$export$7487ee7cbb2e2919(context);
    const raw = node.value || '';
    const suffix = marker === '`' ? 'GraveAccent' : 'Tilde';
    /** @type {string} */ let value;
    /** @type {Exit} */ let exit;
    if ($8638471292587e13$export$8c0df78a8cad9f4b(node, context)) {
        exit = context.enter('codeIndented');
        value = $ef23088a57cfa1fa$export$7c3cf23d514b264a(raw, $484d6dd7028926e7$var$map);
    } else {
        const sequence = marker.repeat(Math.max($cd3f479acde3d9e1$export$711675ff42d864f2(raw, marker) + 1, 3));
        /** @type {Exit} */ let subexit;
        exit = context.enter('codeFenced');
        value = sequence;
        if (node.lang) {
            subexit = context.enter('codeFencedLang' + suffix);
            value += $b08bd3b190805b70$export$170b8c323eee7bec(context, node.lang, {
                before: '`',
                after: ' ',
                encode: [
                    '`'
                ]
            });
            subexit();
        }
        if (node.lang && node.meta) {
            subexit = context.enter('codeFencedMeta' + suffix);
            value += ' ' + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.meta, {
                before: ' ',
                after: '\n',
                encode: [
                    '`'
                ]
            });
            subexit();
        }
        value += '\n';
        if (raw) value += raw + '\n';
        value += sequence;
    }
    exit();
    return value;
}
/** @type {Map} */ function $484d6dd7028926e7$var$map(line, _, blank) {
    return (blank ? '' : '    ') + line;
}



const $300d161149dff68b$var$characterEscape = /\\([!-/:-@[-`{-~])/g;
const $300d161149dff68b$var$characterReference = /&(#(\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function $300d161149dff68b$export$c4ca1a6065421754(node) {
    if (node.label || !node.identifier) return node.label || '';
    return node.identifier.replace($300d161149dff68b$var$characterEscape, '$1').replace($300d161149dff68b$var$characterReference, $300d161149dff68b$var$decodeIfPossible);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */ function $300d161149dff68b$var$decodeIfPossible($0, $1) {
    return $7c9eedf9985e9319$export$3fc0912547321ab3($1) || $0;
}


function $a5e1902e7df02284$export$7aeba63896b2719(context) {
    const marker = context.options.quote || '"';
    if (marker !== '"' && marker !== "'") throw new Error('Cannot serialize title with `' + marker + '` for `options.quote`, expected `"`, or `\'`');
    return marker;
}



function $556ebabd58a12b6f$export$69f215ed977cdb73(node, _, context) {
    const marker = $a5e1902e7df02284$export$7aeba63896b2719(context);
    const suffix = marker === '"' ? 'Quote' : 'Apostrophe';
    const exit = context.enter('definition');
    let subexit = context.enter('label');
    let value = '[' + $b08bd3b190805b70$export$170b8c323eee7bec(context, $300d161149dff68b$export$c4ca1a6065421754(node), {
        before: '[',
        after: ']'
    }) + ']: ';
    subexit();
    if (// If there’s no url, or…
    !node.url || // If there’s whitespace, enclosed is prettier.
    /[ \t\r\n]/.test(node.url)) {
        subexit = context.enter('destinationLiteral');
        value += '<' + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.url, {
            before: '<',
            after: '>'
        }) + '>';
    } else {
        // No whitespace, raw is prettier.
        subexit = context.enter('destinationRaw');
        value += $b08bd3b190805b70$export$170b8c323eee7bec(context, node.url, {
            before: ' ',
            after: ' '
        });
    }
    subexit();
    if (node.title) {
        subexit = context.enter('title' + suffix);
        value += ' ' + marker + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.title, {
            before: marker,
            after: marker
        }) + marker;
        subexit();
    }
    exit();
    return value;
}


function $de8ef9f3a9d8a4cf$export$f967eb786dea04e7(context) {
    const marker = context.options.emphasis || '*';
    if (marker !== '*' && marker !== '_') throw new Error('Cannot serialize emphasis with `' + marker + '` for `options.emphasis`, expected `*`, or `_`');
    return marker;
}



$f3639a8a024602ec$export$bef81ba411953b51.peek = $f3639a8a024602ec$var$emphasisPeek;
function $f3639a8a024602ec$export$bef81ba411953b51(node, _, context) {
    const marker = $de8ef9f3a9d8a4cf$export$f967eb786dea04e7(context);
    const exit = context.enter('emphasis');
    const value = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
        before: marker,
        after: marker
    });
    exit();
    return marker + value + marker;
}
/**
 * @type {Handle}
 * @param {Emphasis} _
 */ function $f3639a8a024602ec$var$emphasisPeek(_, _1, context) {
    return context.options.emphasis || '*';
}



function $d3959050bef90f0d$export$78863676235adfbc(node, context) {
    return Boolean(context.options.setext && (!node.depth || node.depth < 3) && $8003bbdddaa577f1$export$f84e8e69fd4488a5(node));
}



function $889d82d8b03b9d4d$export$46e4a324ac90507f(node, _, context) {
    const rank = Math.max(Math.min(6, node.depth || 1), 1);
    /** @type {Exit} */ let exit;
    /** @type {Exit} */ let subexit;
    /** @type {string} */ let value;
    if ($d3959050bef90f0d$export$78863676235adfbc(node, context)) {
        exit = context.enter('headingSetext');
        subexit = context.enter('phrasing');
        value = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
            before: '\n',
            after: '\n'
        });
        subexit();
        exit();
        return value + '\n' + (rank === 1 ? '=' : '-').repeat(// The whole size…
        value.length - (Math.max(value.lastIndexOf('\r'), value.lastIndexOf('\n')) + 1));
    }
    const sequence = '#'.repeat(rank);
    exit = context.enter('headingAtx');
    subexit = context.enter('phrasing');
    value = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
        before: '# ',
        after: '\n'
    });
    value = value ? sequence + ' ' + value : sequence;
    if (context.options.closeAtx) value += ' ' + sequence;
    subexit();
    exit();
    return value;
}


/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../types.js').Handle} Handle
 */ $3a9892bfebe44b55$export$c0bb0b647f701bb5.peek = $3a9892bfebe44b55$var$htmlPeek;
function $3a9892bfebe44b55$export$c0bb0b647f701bb5(node) {
    return node.value || '';
}
/**
 * @type {Handle}
 */ function $3a9892bfebe44b55$var$htmlPeek() {
    return '<';
}




$c27fb30b38290fe3$export$5c452ff88e35e47d.peek = $c27fb30b38290fe3$var$imagePeek;
function $c27fb30b38290fe3$export$5c452ff88e35e47d(node, _, context) {
    const quote = $a5e1902e7df02284$export$7aeba63896b2719(context);
    const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
    const exit = context.enter('image');
    let subexit = context.enter('label');
    let value = '![' + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.alt, {
        before: '[',
        after: ']'
    }) + '](';
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // Or if there’s markdown whitespace or an eol, enclose.
    /[ \t\r\n]/.test(node.url)) {
        subexit = context.enter('destinationLiteral');
        value += '<' + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.url, {
            before: '<',
            after: '>'
        }) + '>';
    } else {
        // No whitespace, raw is prettier.
        subexit = context.enter('destinationRaw');
        value += $b08bd3b190805b70$export$170b8c323eee7bec(context, node.url, {
            before: '(',
            after: node.title ? ' ' : ')'
        });
    }
    subexit();
    if (node.title) {
        subexit = context.enter('title' + suffix);
        value += ' ' + quote + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.title, {
            before: quote,
            after: quote
        }) + quote;
        subexit();
    }
    value += ')';
    exit();
    return value;
}
/**
 * @type {Handle}
 */ function $c27fb30b38290fe3$var$imagePeek() {
    return '!';
}




$4bbf849aaf4fb0c8$export$f281796f6bc3b8db.peek = $4bbf849aaf4fb0c8$var$imageReferencePeek;
function $4bbf849aaf4fb0c8$export$f281796f6bc3b8db(node, _, context) {
    const type = node.referenceType;
    const exit = context.enter('imageReference');
    let subexit = context.enter('label');
    const alt = $b08bd3b190805b70$export$170b8c323eee7bec(context, node.alt, {
        before: '[',
        after: ']'
    });
    let value = '![' + alt + ']';
    subexit();
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = context.stack;
    context.stack = [];
    subexit = context.enter('reference');
    const reference = $b08bd3b190805b70$export$170b8c323eee7bec(context, $300d161149dff68b$export$c4ca1a6065421754(node), {
        before: '[',
        after: ']'
    });
    subexit();
    context.stack = stack;
    exit();
    if (type === 'full' || !alt || alt !== reference) value += '[' + reference + ']';
    else if (type !== 'shortcut') value += '[]';
    return value;
}
/**
 * @type {Handle}
 */ function $4bbf849aaf4fb0c8$var$imageReferencePeek() {
    return '!';
}





function $62bef9a4fc59ac75$export$74cae3045e3179ed(node, context) {
    const raw = $8003bbdddaa577f1$export$f84e8e69fd4488a5(node);
    return Boolean(!context.options.resourceLink && // If there’s a url…
    node.url && // And there’s a no title…
    !node.title && // And the content of `node` is a single text node…
    node.children && node.children.length === 1 && node.children[0].type === 'text' && (raw === node.url || 'mailto:' + raw === node.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work) or angle brackets…
    !/[\0- <>\u007F]/.test(node.url));
}




$e8d0bc52c8231214$export$9c30223ca0a664fb.peek = $e8d0bc52c8231214$var$linkPeek;
function $e8d0bc52c8231214$export$9c30223ca0a664fb(node, _, context) {
    const quote = $a5e1902e7df02284$export$7aeba63896b2719(context);
    const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
    /** @type {Exit} */ let exit;
    /** @type {Exit} */ let subexit;
    /** @type {string} */ let value;
    if ($62bef9a4fc59ac75$export$74cae3045e3179ed(node, context)) {
        // Hide the fact that we’re in phrasing, because escapes don’t work.
        const stack = context.stack;
        context.stack = [];
        exit = context.enter('autolink');
        value = '<' + $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
            before: '<',
            after: '>'
        }) + '>';
        exit();
        context.stack = stack;
        return value;
    }
    exit = context.enter('link');
    subexit = context.enter('label');
    value = '[' + $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
        before: '[',
        after: ']'
    }) + '](';
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // Or if there’s markdown whitespace or an eol, enclose.
    /[ \t\r\n]/.test(node.url)) {
        subexit = context.enter('destinationLiteral');
        value += '<' + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.url, {
            before: '<',
            after: '>'
        }) + '>';
    } else {
        // No whitespace, raw is prettier.
        subexit = context.enter('destinationRaw');
        value += $b08bd3b190805b70$export$170b8c323eee7bec(context, node.url, {
            before: '(',
            after: node.title ? ' ' : ')'
        });
    }
    subexit();
    if (node.title) {
        subexit = context.enter('title' + suffix);
        value += ' ' + quote + $b08bd3b190805b70$export$170b8c323eee7bec(context, node.title, {
            before: quote,
            after: quote
        }) + quote;
        subexit();
    }
    value += ')';
    exit();
    return value;
}
/**
 * @type {Handle}
 * @param {Link} node
 */ function $e8d0bc52c8231214$var$linkPeek(node, _, context) {
    return $62bef9a4fc59ac75$export$74cae3045e3179ed(node, context) ? '<' : '[';
}





$0b844487de7f5bf4$export$e6c469b1b7b2bc6a.peek = $0b844487de7f5bf4$var$linkReferencePeek;
function $0b844487de7f5bf4$export$e6c469b1b7b2bc6a(node, _, context) {
    const type = node.referenceType;
    const exit = context.enter('linkReference');
    let subexit = context.enter('label');
    const text = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
        before: '[',
        after: ']'
    });
    let value = '[' + text + ']';
    subexit();
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = context.stack;
    context.stack = [];
    subexit = context.enter('reference');
    const reference = $b08bd3b190805b70$export$170b8c323eee7bec(context, $300d161149dff68b$export$c4ca1a6065421754(node), {
        before: '[',
        after: ']'
    });
    subexit();
    context.stack = stack;
    exit();
    if (type === 'full' || !text || text !== reference) value += '[' + reference + ']';
    else if (type !== 'shortcut') value += '[]';
    return value;
}
/**
 * @type {Handle}
 */ function $0b844487de7f5bf4$var$linkReferencePeek() {
    return '[';
}



function $93fdaa3cc2df30b4$export$8837f4fc672e936d(node, _, context) {
    const exit = context.enter('list');
    const value = $5d811d6b2c99e2fb$export$134f7fdacfea8b16(node, context);
    exit();
    return value;
}




function $8ab2aa880abd4df6$export$9c206ddddb32a9b(node, _, context) {
    const exit = context.enter('paragraph');
    const subexit = context.enter('phrasing');
    const value = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
        before: '\n',
        after: '\n'
    });
    subexit();
    exit();
    return value;
}



function $659e99a1a79c8622$export$e8e78c978b129247(node, _, context) {
    return $5d811d6b2c99e2fb$export$134f7fdacfea8b16(node, context);
}


function $d7eb068802f78556$export$b7ce17905d66a6c3(context) {
    const marker = context.options.strong || '*';
    if (marker !== '*' && marker !== '_') throw new Error('Cannot serialize strong with `' + marker + '` for `options.strong`, expected `*`, or `_`');
    return marker;
}



$ea011ac40813379b$export$59ae2c325a998f89.peek = $ea011ac40813379b$var$strongPeek;
function $ea011ac40813379b$export$59ae2c325a998f89(node, _, context) {
    const marker = $d7eb068802f78556$export$b7ce17905d66a6c3(context);
    const exit = context.enter('strong');
    const value = $ad0c4130838a8e9c$export$f4090a9439f37631(node, context, {
        before: marker,
        after: marker
    });
    exit();
    return marker + marker + value + marker + marker;
}
/**
 * @type {Handle}
 * @param {Strong} _
 */ function $ea011ac40813379b$var$strongPeek(_, _1, context) {
    return context.options.strong || '*';
}



function $3c2a8a26c993146f$export$6f093cfa640b7166(node, _, context, safeOptions) {
    return $b08bd3b190805b70$export$170b8c323eee7bec(context, node.value, safeOptions);
}


function $d1dfa228b50050e6$export$72f02155834d89c4(context) {
    const repetition = context.options.ruleRepetition || 3;
    if (repetition < 3) throw new Error('Cannot serialize rules with repetition `' + repetition + '` for `options.ruleRepetition`, expected `3` or more');
    return repetition;
}


function $d84b7b24c4aca5b8$export$d8d533ef24dba866(context) {
    const marker = context.options.rule || '*';
    if (marker !== '*' && marker !== '-' && marker !== '_') throw new Error('Cannot serialize rules with `' + marker + '` for `options.rule`, expected `*`, `-`, or `_`');
    return marker;
}


function $2bf1b027ba1a9817$export$ba7b13e047416c03(_, _1, context) {
    const value = ($d84b7b24c4aca5b8$export$d8d533ef24dba866(context) + (context.options.ruleSpaces ? ' ' : '')).repeat($d1dfa228b50050e6$export$72f02155834d89c4(context));
    return context.options.ruleSpaces ? value.slice(0, -1) : value;
}


const $861b2e02d53c06f9$export$8f34ce051745d39e = {
    blockquote: $4365692ef9082566$export$67dc04e652a298ca,
    break: $330a6366de3826e0$export$371da9dd35aba193,
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




const $d8b40e7326f8eefb$export$f7e2c8231c57a8bd = [
    $d8b40e7326f8eefb$var$joinDefaults
];
/** @type {Join} */ function $d8b40e7326f8eefb$var$joinDefaults(left, right, parent, context) {
    if (// Two lists with the same marker.
    right.type === 'list' && right.type === left.type && Boolean(left.ordered) === Boolean(right.ordered) || right.type === 'code' && $8638471292587e13$export$8c0df78a8cad9f4b(right, context) && (left.type === 'list' || left.type === right.type && $8638471292587e13$export$8c0df78a8cad9f4b(left, context))) return false;
    // Join children of a list or an item.
    // In which case, `parent` has a `spread` field.
    if ('spread' in parent && typeof parent.spread === 'boolean') {
        if (left.type === 'paragraph' && (left.type === right.type || right.type === 'definition' || right.type === 'heading' && $d3959050bef90f0d$export$78863676235adfbc(right, context))) return;
        return parent.spread ? 1 : 0;
    }
}


const $a7f84ec365aa3ef2$export$aa1c11b655786597 = [
    {
        character: '\t',
        inConstruct: [
            'codeFencedLangGraveAccent',
            'codeFencedLangTilde'
        ]
    },
    {
        character: '\r',
        inConstruct: [
            'codeFencedLangGraveAccent',
            'codeFencedLangTilde',
            'codeFencedMetaGraveAccent',
            'codeFencedMetaTilde',
            'destinationLiteral',
            'headingAtx'
        ]
    },
    {
        character: '\n',
        inConstruct: [
            'codeFencedLangGraveAccent',
            'codeFencedLangTilde',
            'codeFencedMetaGraveAccent',
            'codeFencedMetaTilde',
            'destinationLiteral',
            'headingAtx'
        ]
    },
    {
        character: ' ',
        inConstruct: [
            'codeFencedLangGraveAccent',
            'codeFencedLangTilde'
        ]
    },
    // An exclamation mark can start an image, if it is followed by a link or
    // a link reference.
    {
        character: '!',
        after: '\\[',
        inConstruct: 'phrasing'
    },
    // A quote can break out of a title.
    {
        character: '"',
        inConstruct: 'titleQuote'
    },
    // A number sign could start an ATX heading if it starts a line.
    {
        atBreak: true,
        character: '#'
    },
    {
        character: '#',
        inConstruct: 'headingAtx',
        after: '(?:[\r\n]|$)'
    },
    // Dollar sign and percentage are not used in markdown.
    // An ampersand could start a character reference.
    {
        character: '&',
        after: '[#A-Za-z]',
        inConstruct: 'phrasing'
    },
    // An apostrophe can break out of a title.
    {
        character: "'",
        inConstruct: 'titleApostrophe'
    },
    // A left paren could break out of a destination raw.
    {
        character: '(',
        inConstruct: 'destinationRaw'
    },
    {
        before: '\\]',
        character: '(',
        inConstruct: 'phrasing'
    },
    // A right paren could start a list item or break out of a destination
    // raw.
    {
        atBreak: true,
        before: '\\d+',
        character: ')'
    },
    {
        character: ')',
        inConstruct: 'destinationRaw'
    },
    // An asterisk can start thematic breaks, list items, emphasis, strong.
    {
        atBreak: true,
        character: '*'
    },
    {
        character: '*',
        inConstruct: 'phrasing'
    },
    // A plus sign could start a list item.
    {
        atBreak: true,
        character: '+'
    },
    // A dash can start thematic breaks, list items, and setext heading
    // underlines.
    {
        atBreak: true,
        character: '-'
    },
    // A dot could start a list item.
    {
        atBreak: true,
        before: '\\d+',
        character: '.',
        after: '(?:[ \t\r\n]|$)'
    },
    // Slash, colon, and semicolon are not used in markdown for constructs.
    // A less than can start html (flow or text) or an autolink.
    // HTML could start with an exclamation mark (declaration, cdata, comment),
    // slash (closing tag), question mark (instruction), or a letter (tag).
    // An autolink also starts with a letter.
    // Finally, it could break out of a destination literal.
    {
        atBreak: true,
        character: '<',
        after: '[!/?A-Za-z]'
    },
    {
        character: '<',
        after: '[!/?A-Za-z]',
        inConstruct: 'phrasing'
    },
    {
        character: '<',
        inConstruct: 'destinationLiteral'
    },
    // An equals to can start setext heading underlines.
    {
        atBreak: true,
        character: '='
    },
    // A greater than can start block quotes and it can break out of a
    // destination literal.
    {
        atBreak: true,
        character: '>'
    },
    {
        character: '>',
        inConstruct: 'destinationLiteral'
    },
    // Question mark and at sign are not used in markdown for constructs.
    // A left bracket can start definitions, references, labels,
    {
        atBreak: true,
        character: '['
    },
    {
        character: '[',
        inConstruct: [
            'phrasing',
            'label',
            'reference'
        ]
    },
    // A backslash can start an escape (when followed by punctuation) or a
    // hard break (when followed by an eol).
    // Note: typical escapes are handled in `safe`!
    {
        character: '\\',
        after: '[\\r\\n]',
        inConstruct: 'phrasing'
    },
    // A right bracket can exit labels.
    {
        character: ']',
        inConstruct: [
            'label',
            'reference'
        ]
    },
    // Caret is not used in markdown for constructs.
    // An underscore can start emphasis, strong, or a thematic break.
    {
        atBreak: true,
        character: '_'
    },
    {
        before: '[^A-Za-z]',
        character: '_',
        inConstruct: 'phrasing'
    },
    {
        character: '_',
        after: '[^A-Za-z]',
        inConstruct: 'phrasing'
    },
    // A grave accent can start code (fenced or text), or it can break out of
    // a grave accent code fence.
    {
        atBreak: true,
        character: '`'
    },
    {
        character: '`',
        inConstruct: [
            'codeFencedLangGraveAccent',
            'codeFencedMetaGraveAccent',
            'phrasing'
        ]
    },
    // Left brace, vertical bar, right brace are not used in markdown for
    // constructs.
    // A tilde can start code (fenced).
    {
        atBreak: true,
        character: '~'
    }
];


function $1624d103b3cd89c0$export$49a1dda9e62e8ae6(tree, options = {
}) {
    /** @type {Context} */ // @ts-expect-error: we’ll add `handle` later.
    const context = {
        enter: enter,
        stack: [],
        unsafe: [],
        join: [],
        handlers: {
        },
        options: {
        }
    };
    $db3380ebc1fa4391$export$8d21e34596265fa2(context, {
        unsafe: $a7f84ec365aa3ef2$export$aa1c11b655786597,
        join: $d8b40e7326f8eefb$export$f7e2c8231c57a8bd,
        handlers: $861b2e02d53c06f9$export$8f34ce051745d39e
    });
    $db3380ebc1fa4391$export$8d21e34596265fa2(context, options);
    if (context.options.tightDefinitions) $db3380ebc1fa4391$export$8d21e34596265fa2(context, {
        join: [
            $1624d103b3cd89c0$var$joinDefinition
        ]
    });
    /** @type {Handle} */ context.handle = $1a093c163236440f$export$d6a12bfbbedf6185('type', {
        invalid: $1624d103b3cd89c0$var$invalid,
        unknown: // @ts-expect-error: hush.
        $1624d103b3cd89c0$var$unknown,
        // @ts-expect-error: hush.
        handlers: context.handlers
    });
    let result = context.handle(tree, null, context, {
        before: '\n',
        after: '\n'
    });
    if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) result += '\n';
    /** @type {Context['enter']} */ function enter(name) {
        context.stack.push(name);
        return exit;
        function exit() {
            context.stack.pop();
        }
    }
    return result;
}
/**
 * @type {Handle}
 * @param {unknown} value
 */ function $1624d103b3cd89c0$var$invalid(value) {
    throw new Error('Cannot handle value `' + value + '`, expected node');
}
/**
 * @type {Handle}
 * @param {Node} node
 */ function $1624d103b3cd89c0$var$unknown(node) {
    throw new Error('Cannot handle unknown node `' + node.type + '`');
}
/** @type {Join} */ function $1624d103b3cd89c0$var$joinDefinition(left, right) {
    // No blank line between adjacent definitions.
    if (left.type === 'definition' && left.type === right.type) return 0;
}



function $159059a52c0b5697$export$2e2bcd8739ae039(options) {
    /** @type {import('unified').CompilerFunction<Node, string>} */ const compiler = (tree)=>{
        // Assume options.
        const settings = this.data('settings');
        return $1624d103b3cd89c0$export$49a1dda9e62e8ae6(tree, Object.assign({
        }, settings, options, {
            // Note: this option is not in the readme.
            // The goal is for it to be set by plugins on `data` instead of being
            // passed by users.
            extensions: this.data('toMarkdownExtensions') || []
        }));
    };
    Object.assign(this, {
        Compiler: compiler
    });
}


var $c2b4d45d25be41ff$export$2e2bcd8739ae039 = $159059a52c0b5697$export$2e2bcd8739ae039;


var $03d636ec9f3b686f$exports = {};
var $8f960999d227a27a$exports = {};
$8f960999d227a27a$exports = function() {
    return /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g;
};


$03d636ec9f3b686f$exports = $03d636ec9f3b686f$var$BananaSlug;
var $03d636ec9f3b686f$var$own = Object.hasOwnProperty;
var $03d636ec9f3b686f$var$whitespace = /\s/g;
var $03d636ec9f3b686f$var$specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;
function $03d636ec9f3b686f$var$BananaSlug() {
    var self = this;
    if (!(self instanceof $03d636ec9f3b686f$var$BananaSlug)) return new $03d636ec9f3b686f$var$BananaSlug();
    self.reset();
}
/**
 * Generate a unique slug.
 * @param  {string} value String of text to slugify
 * @param  {boolean} [false] Keep the current case, otherwise make all lowercase
 * @return {string}       A unique slug string
 */ $03d636ec9f3b686f$var$BananaSlug.prototype.slug = function(value, maintainCase) {
    var self = this;
    var slug = $03d636ec9f3b686f$var$slugger(value, maintainCase === true);
    var originalSlug = slug;
    while($03d636ec9f3b686f$var$own.call(self.occurrences, slug)){
        self.occurrences[originalSlug]++;
        slug = originalSlug + '-' + self.occurrences[originalSlug];
    }
    self.occurrences[slug] = 0;
    return slug;
};
/**
 * Reset - Forget all previous slugs
 * @return void
 */ $03d636ec9f3b686f$var$BananaSlug.prototype.reset = function() {
    this.occurrences = Object.create(null);
};
function $03d636ec9f3b686f$var$slugger(string, maintainCase) {
    if (typeof string !== 'string') return '';
    if (!maintainCase) string = string.toLowerCase();
    return string.trim().replace($03d636ec9f3b686f$var$specials, '').replace($8f960999d227a27a$exports(), '').replace($03d636ec9f3b686f$var$whitespace, '-');
}
$03d636ec9f3b686f$var$BananaSlug.slug = $03d636ec9f3b686f$var$slugger;




const $cfec1dc884db9361$export$bf638b60ea8b89b7 = /**
     * Visit children of tree which pass a test
     *
     * @param {Node} tree Abstract syntax tree to walk
     * @param {Test} test test Test node
     * @param {Visitor<Node>} visitor Function to run for each node
     * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
     */ function(tree, test, visitor, reverse) {
    if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        visitor = test;
        test = null;
    }
    $d6287717c804e67f$export$70008a21eb6de899(tree, test, overload, reverse);
    /**
       * @param {Node} node
       * @param {Array.<Parent>} parents
       */ function overload(node, parents) {
        var parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
    }
};



function $ef2e22938f161c74$export$6cca600862d7245d(value) {
    return new RegExp('^(' + value + ')$', 'i');
}


const $5ba075f64d19ab2c$var$slugs = new (/*@__PURE__*/$parcel$interopDefault($03d636ec9f3b686f$exports))();
function $5ba075f64d19ab2c$export$d76128d007d19019(root, expression, settings) {
    const skip = settings.skip && $ef2e22938f161c74$export$6cca600862d7245d(settings.skip);
    const parents = $eaa54ddebb4188fb$export$9c68d69a4c5bbcf9(settings.parents || ((d)=>d === root
    ));
    /** @type {Array.<SearchEntry>} */ const map = [];
    /** @type {number|undefined} */ let index;
    /** @type {number} */ let endIndex;
    /** @type {Heading} */ let opening;
    $5ba075f64d19ab2c$var$slugs.reset();
    // Visit all headings in `root`.  We `slug` all headings (to account for
    // duplicates), but only create a TOC from top-level headings (by default).
    $cfec1dc884db9361$export$bf638b60ea8b89b7(root, 'heading', onheading);
    /** @type {HeadingVisitor} */ function onheading(node, position, parent) {
        const value = $8003bbdddaa577f1$export$f84e8e69fd4488a5(node, {
            includeImageAlt: false
        });
        /** @type {string} */ // @ts-expect-error `hProperties` from <https://github.com/syntax-tree/mdast-util-to-hast>
        const id = node.data && node.data.hProperties && node.data.hProperties.id;
        const slug = $5ba075f64d19ab2c$var$slugs.slug(id || value);
        if (!parents(parent)) {
            return;
        }
        // Our opening heading.
        if (position !== null && expression && !index && expression.test(value)) {
            index = position + 1;
            opening = node;
            return;
        }
        // Our closing heading.
        if (position !== null && opening && !endIndex && node.depth <= opening.depth) {
            endIndex = position;
        }
        // A heading after the closing (if we were looking for one).
        if ((endIndex || !expression) && (!settings.maxDepth || node.depth <= settings.maxDepth) && (!skip || !skip.test(value))) {
            map.push({
                depth: node.depth,
                children: node.children,
                id: slug
            });
        }
    }
    return {
        index: index || -1,
        // <sindresorhus/eslint-plugin-unicorn#980>
        // @ts-expect-error Looks like a parent.
        endIndex: index ? endIndex || root.children.length : -1,
        map: map
    };
}



function $2815b30a573329c9$export$fd59df041b888442(map, settings) {
    const { ordered: ordered = false , tight: tight = false , prefix: prefix = null  } = settings;
    /** @type {List} */ const table = {
        type: 'list',
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
 * @param {List|ListItem} parent
 * @param {ContentsOptions} settings
 */ function $2815b30a573329c9$var$insert(entry, parent, settings) {
    let index = -1;
    if (parent.type === 'list') {
        if (entry.depth === 1) parent.children.push({
            type: 'listItem',
            spread: false,
            children: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'link',
                            title: null,
                            url: '#' + (settings.prefix || '') + entry.id,
                            children: $2815b30a573329c9$var$all(entry.children)
                        }
                    ]
                }
            ]
        });
        else if (parent.children.length > 0) $2815b30a573329c9$var$insert(entry, parent.children[parent.children.length - 1], settings);
        else {
            /** @type {ListItem} */ const item = {
                type: 'listItem',
                spread: false,
                children: []
            };
            parent.children.push(item);
            $2815b30a573329c9$var$insert(entry, item, settings);
        }
    } else if (parent.children[parent.children.length - 1] && parent.children[parent.children.length - 1].type === 'list') {
        entry.depth--;
        $2815b30a573329c9$var$insert(entry, // @ts-expect-error It’s a `list`, we just checked.
        parent.children[parent.children.length - 1], settings);
    } else {
        /** @type {List} */ const item = {
            type: 'list',
            ordered: settings.ordered,
            spread: false,
            children: []
        };
        parent.children.push(item);
        entry.depth--;
        $2815b30a573329c9$var$insert(entry, item, settings);
    }
    if (parent.type === 'list' && !settings.tight) {
        parent.spread = false;
        while(++index < parent.children.length)if (parent.children[index].children.length > 1) {
            parent.spread = true;
            break;
        }
    } else parent.spread = !settings.tight;
}
/**
 * @param {Array.<PhrasingContent>} [nodes]
 * @returns {Array.<StaticPhrasingContent>}
 */ function $2815b30a573329c9$var$all(nodes) {
    /** @type {Array.<StaticPhrasingContent>} */ let result = [];
    let index = -1;
    if (nodes) while(++index < nodes.length)result = result.concat($2815b30a573329c9$var$one(nodes[index]));
    return result;
}
/**
 * @param {PhrasingContent} node
 * @returns {StaticPhrasingContent|Array.<StaticPhrasingContent>}
 */ function $2815b30a573329c9$var$one(node) {
    if (node.type === 'link' || node.type === 'linkReference' || node.type === 'footnote' || node.type === 'footnoteReference') // @ts-expect-error Looks like a parent.
    return $2815b30a573329c9$var$all(node.children);
    if ('children' in node) {
        const { children: children , position: position , ...copy } = node;
        return Object.assign((/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports))(true, {
        }, copy), {
            children: $2815b30a573329c9$var$all(node.children)
        });
    }
    const { position: position , ...copy } = node;
    return (/*@__PURE__*/$parcel$interopDefault($09d2ed0130d345e0$exports))(true, {
    }, copy);
}



function $a36ec5f5a847f885$export$7f73341d82aa0ab(node, options) {
    const settings = options || {
    };
    const heading = settings.heading ? $ef2e22938f161c74$export$6cca600862d7245d(settings.heading) : null;
    const result = $5ba075f64d19ab2c$export$d76128d007d19019(node, heading, settings);
    return {
        index: heading ? result.index : null,
        endIndex: heading ? result.endIndex : null,
        map: result.map.length > 0 ? $2815b30a573329c9$export$fd59df041b888442(result.map, settings) : null
    };
}



var $403056a4c9e97309$export$3b14a55fb2447963 = /**
   * @param {string} type Type of node
   * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
   * @param {ChildrenOrValue} [value] `children` or `value` of node
   * @returns {Node}
   */ function(type, props, value) {
    /** @type {Node} */ var node = {
        type: String(type)
    };
    if ((value === undefined || value === null) && (typeof props === 'string' || Array.isArray(props))) value = props;
    else Object.assign(node, props);
    if (Array.isArray(value)) node.children = value;
    else if (value !== undefined && value !== null) node.value = String(value);
    return node;
};


const $54bdd71fd28e2aea$export$7e553efa7989e1cf = 'https://github.com/quilicicf/markdown-formatter'; // NOTE: must be the same as in package.json
const $54bdd71fd28e2aea$export$a3a70aa7a3b39543 = 'https://github.com/quilicicf/markdown-formatter/issues'; // NOTE: must be the same as in package.json
const $54bdd71fd28e2aea$export$d5bdadeb30299f2a = {
    min: 2,
    max: 4
};
const $54bdd71fd28e2aea$export$b569b77ba4d08a5a = /^<!-- TOC START(.*) -->$/;
const $54bdd71fd28e2aea$export$7ee1dac3270bd4fe = /^<!-- TOC END(.*) -->$/;
const $54bdd71fd28e2aea$export$9d00029181b90361 = {
    NONE: 'none',
    TOP: 'top',
    TOC: 'toc'
};
const $54bdd71fd28e2aea$export$116138d416609c54 = `<!-- Formatted by ${$54bdd71fd28e2aea$export$7e553efa7989e1cf} -->`;
const $54bdd71fd28e2aea$export$3722e1f52846c911 = `<!-- TOC END: Formatted by ${$54bdd71fd28e2aea$export$7e553efa7989e1cf} -->`;
const $54bdd71fd28e2aea$export$ccfc6da16e7b695c = {
    watermark: $54bdd71fd28e2aea$export$9d00029181b90361.NONE
};
const $54bdd71fd28e2aea$export$47362cd2804d02b3 = {
    bullet: '*',
    emphasis: '_',
    fences: true,
    gfm: true,
    listItemIndent: '1',
    rule: '-',
    ruleSpaces: false,
    strong: '_'
};


var $f00e1e19bdd3058b$export$2e2bcd8739ae039 = (part)=>part.type === 'html' && $54bdd71fd28e2aea$export$b569b77ba4d08a5a.test(part.value)
;



var $89a6ee6cce26b01b$export$2e2bcd8739ae039 = (part)=>part.type === 'html' && $54bdd71fd28e2aea$export$7ee1dac3270bd4fe.test(part.value)
;


var $8049247a3a5ba199$export$2e2bcd8739ae039 = (tree)=>tree.children.reduce((seed, part)=>{
        if (seed.tocStart && !seed.isInToc) return seed;
        if ($89a6ee6cce26b01b$export$2e2bcd8739ae039(part)) return {
            ...seed,
            isInToc: false
        };
        if ($f00e1e19bdd3058b$export$2e2bcd8739ae039(part)) return {
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
    })
;


/**
 * Takes a GLOBAL (add flag g) regex and executes it against the same string as long as it yields results.
 * The exec results are handled by the given matchHandler and returned in an array.
 */ const $817312938e2f3811$var$matchAll = (regex, string, matchHandler = (i)=>i
, currentMatches = [])=>{
    const nextMatch = regex.exec(string);
    if (!nextMatch) return currentMatches;
    return [
        ...$817312938e2f3811$var$matchAll(regex, string, matchHandler, [
            ...currentMatches,
            matchHandler(nextMatch)
        ]), 
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
    const configAsString = $54bdd71fd28e2aea$export$b569b77ba4d08a5a.exec(tocStart)[1];
    const configItems = $817312938e2f3811$export$2e2bcd8739ae039(/([^\s:]+):([^\s]+)/g, configAsString, (match)=>({
            key: match[1],
            value: match[2]
        })
    );
    return configItems.map((configItem)=>{
        if (!$27da8d5ca2c82d11$var$CONFIG_CLEANERS[configItem.key]) return configItem;
        try {
            return {
                key: configItem.key,
                value: $27da8d5ca2c82d11$var$CONFIG_CLEANERS[configItem.key](configItem.value)
            };
        } catch (error) {
            process.stderr.write(error.message);
            return {
            };
        }
    }).filter(Boolean).reduce((seed, { value: value , key: key  })=>({
            ...seed,
            [key]: value
        })
    , {
    });
};


var $6bd05442ceb4daa2$export$2e2bcd8739ae039 = (number, { min: min , max: max  })=>number >= min && number <= max
;



const $45243cd9e40e539d$var$transformer = (tree, file)=>{
    const tocStartFinder = $8049247a3a5ba199$export$2e2bcd8739ae039(tree);
    if (!tocStartFinder.tocStart) {
        file.info('No ToC start found, only simple formatting was done');
        return;
    }
    const tocConfiguration = {
        ...$54bdd71fd28e2aea$export$d5bdadeb30299f2a,
        ...$27da8d5ca2c82d11$export$2e2bcd8739ae039(tocStartFinder.tocStart.value)
    };
    const filteredHeadings = tree.children.filter((part)=>part.type === 'heading' && $6bd05442ceb4daa2$export$2e2bcd8739ae039(part.depth, tocConfiguration)
    );
    const toc = $a36ec5f5a847f885$export$7f73341d82aa0ab($403056a4c9e97309$export$3b14a55fb2447963('root', filteredHeadings)).map;
    tree.children.splice(tocStartFinder.tocStartIndex + 1, tocStartFinder.tocSize, toc);
};
var $45243cd9e40e539d$export$2e2bcd8739ae039 = ()=>$45243cd9e40e539d$var$transformer
;





var $5e454db95f23c9d5$export$2e2bcd8739ae039 = (tree)=>{
    const tocEnd = tree.children.find((part)=>$89a6ee6cce26b01b$export$2e2bcd8739ae039(part)
    );
    if (tocEnd) tocEnd.value = $54bdd71fd28e2aea$export$3722e1f52846c911;
};



const $9819a8d429fed0be$var$isWatermarkTop = (part)=>part.type === 'html' && part.value === $54bdd71fd28e2aea$export$116138d416609c54
;
var $9819a8d429fed0be$export$2e2bcd8739ae039 = (tree, file)=>{
    const watermarkIndex = tree.children // Watermark can be moved by user
    .map((part, index)=>({
            part: part,
            index: index
        })
    ).filter(({ part: part  })=>$9819a8d429fed0be$var$isWatermarkTop(part)
    ).map(({ index: index  })=>index
    ).find(()=>true
    );
    if (typeof watermarkIndex === 'number') {
        file.info(`Watermark found at index ${watermarkIndex}, destroying it to replace it`);
        tree.children.splice(watermarkIndex, 1);
    }
};


var $b8ebac65dd90ab58$export$2e2bcd8739ae039 = (watermarkType)=>()=>(tree, file)=>{
            $9819a8d429fed0be$export$2e2bcd8739ae039(tree, file);
            if (watermarkType === $54bdd71fd28e2aea$export$9d00029181b90361.NONE) return;
            if (watermarkType === $54bdd71fd28e2aea$export$9d00029181b90361.TOP) tree.children.splice(0, 0, {
                type: 'html',
                value: $54bdd71fd28e2aea$export$116138d416609c54
            });
            if (watermarkType === $54bdd71fd28e2aea$export$9d00029181b90361.TOC) $5e454db95f23c9d5$export$2e2bcd8739ae039(tree);
        }
;



var $dfad2de4ddbd453c$export$2e2bcd8739ae039 = async (sourceString, parameterMarkdownFormatterOptions = {
}, parameterStringifyOptions = {
})=>{
    const markdownFormatterOptions = {
        ...$54bdd71fd28e2aea$export$ccfc6da16e7b695c,
        ...parameterMarkdownFormatterOptions
    };
    const stringifyOptions = {
        ...$54bdd71fd28e2aea$export$47362cd2804d02b3,
        ...parameterStringifyOptions
    };
    return $67f604d39c4880b2$export$7cc1b2fe10c52bb().use($998d99a10a985a7f$export$2e2bcd8739ae039).use($d7530f4c779c68cb$export$2e2bcd8739ae039).use($45243cd9e40e539d$export$2e2bcd8739ae039).use($b8ebac65dd90ab58$export$2e2bcd8739ae039(markdownFormatterOptions.watermark)).use($c2b4d45d25be41ff$export$2e2bcd8739ae039, stringifyOptions).process(sourceString);
};


//# sourceMappingURL=formatFromString.js.map