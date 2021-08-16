(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? {
    d: a.default
  } : {
    d: a
  };
}

// ASSET: formatFromString.js
var $hGuP$exports = {};

/**
 * Throw a given error.
 *
 * @param {Error | null | undefined} [error]
 */
function $ls1G$export$bail(error) {
  if (error) {
    throw error;
  }
}

// ASSET: ../../../is-buffer/index.js
var $TdTf$exports = {};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

$TdTf$exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

// ASSET: ../../../extend/index.js
var $escf$exports = {};
var $escf$var$hasOwn = Object.prototype.hasOwnProperty;
var $escf$var$toStr = Object.prototype.toString;
var $escf$var$defineProperty = Object.defineProperty;
var $escf$var$gOPD = Object.getOwnPropertyDescriptor;

var $escf$var$isArray = function isArray(arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  }

  return $escf$var$toStr.call(arr) === '[object Array]';
};

var $escf$var$isPlainObject = function isPlainObject(obj) {
  if (!obj || $escf$var$toStr.call(obj) !== '[object Object]') {
    return false;
  }

  var hasOwnConstructor = $escf$var$hasOwn.call(obj, 'constructor');
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && $escf$var$hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object

  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  } // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.


  var key;

  for (key in obj) {
    /**/
  }

  return typeof key === 'undefined' || $escf$var$hasOwn.call(obj, key);
}; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target


var $escf$var$setProperty = function setProperty(target, options) {
  if ($escf$var$defineProperty && options.name === '__proto__') {
    $escf$var$defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
}; // Return undefined instead of __proto__ if '__proto__' is not an own property


var $escf$var$getProperty = function getProperty(obj, name) {
  if (name === '__proto__') {
    if (!$escf$var$hasOwn.call(obj, name)) {
      return void 0;
    } else if ($escf$var$gOPD) {
      // In early versions of node, obj['__proto__'] is buggy when obj has
      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
      return $escf$var$gOPD(obj, name).value;
    }
  }

  return obj[name];
};

$escf$exports = function extend() {
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {}; // skip the boolean and the target

    i = 2;
  }

  if (target == null || typeof target !== 'object' && typeof target !== 'function') {
    target = {};
  }

  for (; i < length; ++i) {
    options = arguments[i]; // Only deal with non-null/undefined values

    if (options != null) {
      // Extend the base object
      for (name in options) {
        src = $escf$var$getProperty(target, name);
        copy = $escf$var$getProperty(options, name); // Prevent never-ending loop

        if (target !== copy) {
          // Recurse if we're merging plain objects or arrays
          if (deep && copy && ($escf$var$isPlainObject(copy) || (copyIsArray = $escf$var$isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && $escf$var$isArray(src) ? src : [];
            } else {
              clone = src && $escf$var$isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            $escf$var$setProperty(target, {
              name: name,
              newValue: extend(deep, clone, copy)
            }); // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            $escf$var$setProperty(target, {
              name: name,
              newValue: copy
            });
          }
        }
      }
    }
  } // Return the modified object


  return target;
};

function $oyH7$export$default(value) {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

/**
 * @typedef {(error?: Error|null|undefined, ...output: any[]) => void} Callback
 * @typedef {(...input: any[]) => any} Middleware
 *
 * @typedef {(...input: any[]) => void} Run Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 */

/**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */
function $CgfH$export$trough() {
  /** @type {Middleware[]} */
  const fns = [];
  /** @type {Pipeline} */

  const pipeline = {
    run,
    use
  };
  return pipeline;
  /** @type {Run} */

  function run(...values) {
    let middlewareIndex = -1;
    /** @type {Callback} */

    const callback = values.pop();

    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback);
    }

    next(null, ...values);
    /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {any[]} output
     */

    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index = -1;

      if (error) {
        callback(error);
        return;
      } // Copy non-nullish input into values.


      while (++index < values.length) {
        if (output[index] === null || output[index] === undefined) {
          output[index] = values[index];
        }
      } // Save the newly created `output` for the next call.


      values = output; // Next or done.

      if (fn) {
        $CgfH$export$wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  /** @type {Use} */


  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
    }

    fns.push(middelware);
    return pipeline;
  }
}
/**
 * Wrap `middleware`.
 * Can be sync or async; return a promise, receive a callback, or return new
 * values and errors.
 *
 * @param {Middleware} middleware
 * @param {Callback} callback
 */


function $CgfH$export$wrap(middleware, callback) {
  /** @type {boolean} */
  let called;
  return wrapped;
  /**
   * Call `middleware`.
   * @param {any[]} parameters
   * @returns {void}
   */

  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    /** @type {any} */

    let result;

    if (fnExpectsCallback) {
      parameters.push(done);
    }

    try {
      result = middleware(...parameters);
    } catch (error) {
      /** @type {Error} */
      const exception = error; // Well, this is quite the pickle.
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
   */


  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */


  function then(value) {
    done(null, value);
  }
}

// ASSET: ../../../node-libs-browser/node_modules/path-browserify/index.js
var $cQ80$exports = {}; // .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)

function $cQ80$var$normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


var $cQ80$export$resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = $cQ80$var$normalizeArray($cQ80$var$filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
};

$cQ80$exports.resolve = $cQ80$export$resolve; // path.normalize(path)
// posix version

var $cQ80$export$normalize = function (path) {
  var isAbsolute = $cQ80$export$isAbsolute(path),
      trailingSlash = $cQ80$var$substr(path, -1) === '/'; // Normalize the path

  path = $cQ80$var$normalizeArray($cQ80$var$filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

$cQ80$exports.normalize = $cQ80$export$normalize; // posix version

var $cQ80$export$isAbsolute = function (path) {
  return path.charAt(0) === '/';
};

$cQ80$exports.isAbsolute = $cQ80$export$isAbsolute; // posix version

var $cQ80$export$join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return $cQ80$export$normalize($cQ80$var$filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
};

$cQ80$exports.join = $cQ80$export$join; // path.relative(from, to)
// posix version

var $cQ80$export$relative = function (from, to) {
  from = $cQ80$export$resolve(from).substr(1);
  to = $cQ80$export$resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

$cQ80$exports.relative = $cQ80$export$relative;
var $cQ80$export$sep = '/';
$cQ80$exports.sep = $cQ80$export$sep;
var $cQ80$export$delimiter = ':';
$cQ80$exports.delimiter = $cQ80$export$delimiter;

var $cQ80$export$dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47
  /*/*/
  ;
  var end = -1;
  var matchedSlash = true;

  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';

  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }

  return path.slice(0, end);
};

$cQ80$exports.dirname = $cQ80$export$dirname;

function $cQ80$var$basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now
      if (!matchedSlash) {
        start = i + 1;
        break;
      }
    } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


var $cQ80$export$basename = function (path, ext) {
  var f = $cQ80$var$basename(path);

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

$cQ80$exports.basename = $cQ80$export$basename;

var $cQ80$export$extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find

  var preDotState = 0;

  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }

      continue;
    }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }

    if (code === 46
    /*.*/
    ) {
      // If this is our first dot, mark it as the start of our extension
      if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
};

$cQ80$exports.extname = $cQ80$export$extname;

function $cQ80$var$filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var $cQ80$var$substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
const $qWuj$export$proc = process;
var $EYTY$var$own = {}.hasOwnProperty;
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

/**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|Position|Point} [value]
 * @returns {string}
 */

function $EYTY$export$stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return '';
  } // Node.


  if ($EYTY$var$own.call(value, 'position') || $EYTY$var$own.call(value, 'type')) {
    // @ts-ignore looks like a node.
    return $EYTY$var$position(value.position);
  } // Position.


  if ($EYTY$var$own.call(value, 'start') || $EYTY$var$own.call(value, 'end')) {
    // @ts-ignore looks like a position.
    return $EYTY$var$position(value);
  } // Point.


  if ($EYTY$var$own.call(value, 'line') || $EYTY$var$own.call(value, 'column')) {
    // @ts-ignore looks like a point.
    return $EYTY$var$point(value);
  } // ?


  return '';
}
/**
 * @param {Point} point
 * @returns {string}
 */


function $EYTY$var$point(point) {
  return $EYTY$var$index(point && point.line) + ':' + $EYTY$var$index(point && point.column);
}
/**
 * @param {Position} pos
 * @returns {string}
 */


function $EYTY$var$position(pos) {
  return $EYTY$var$point(pos && pos.start) + '-' + $EYTY$var$point(pos && pos.end);
}
/**
 * @param {number} value
 * @returns {number}
 */


function $EYTY$var$index(value) {
  return value && typeof value === 'number' ? value : 1;
}

class $xKxw$export$VFileMessage extends Error {
  /**
   * Constructor of a message for `reason` at `place` from `origin`.
   * When an error is passed in as `reason`, copies the `stack`.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   */
  constructor(reason, place, origin) {
    /** @type {[string?, string?]} */
    var parts = [null, null];
    /** @type {Position} */

    var position = {
      start: {
        line: null,
        column: null
      },
      end: {
        line: null,
        column: null
      }
    };
    /** @type {number} */

    var index;
    super();

    if (typeof place === 'string') {
      origin = place;
      place = null;
    }

    if (typeof origin === 'string') {
      index = origin.indexOf(':');

      if (index === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index);
        parts[1] = origin.slice(index + 1);
      }
    }

    if (place) {
      // Node.
      if ('type' in place || 'position' in place) {
        if (place.position) {
          position = place.position;
        }
      } // Position.
      else if ('start' in place || 'end' in place) {
        // @ts-ignore Looks like a position.
        position = place;
      } // Point.
      else if ('line' in place || 'column' in place) {
        // @ts-ignore Looks like a point.
        position.start = place;
      }
    } // Fields from `Error`


    this.name = $EYTY$export$stringifyPosition(place) || '1:1';
    this.message = typeof reason === 'object' ? reason.message : reason;
    this.stack = typeof reason === 'object' ? reason.stack : '';
    /**
     * Reason for message.
     * @type {string}
     */

    this.reason = this.message;
    /**
     * Starting line of error.
     * @type {number?}
     */

    this.line = position.start.line;
    /**
     * Starting column of error.
     * @type {number?}
     */

    this.column = position.start.column;
    /**
     * Namespace of warning.
     * @type {string?}
     */

    this.source = parts[0];
    /**
     * Category of message.
     * @type {string?}
     */

    this.ruleId = parts[1];
    /**
     * Full range information, when available.
     * Has start and end properties, both set to an object with line and column, set to number?.
     * @type {Position?}
     */

    this.position = position; // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /* eslint-disable no-unused-expressions */

    /**
     * You may add a file property with a path of a file (used throughout the VFile ecosystem).
     * @type {string?}
     */

    this.file;
    /**
     * If true, marks associated file as no longer processable.
     * @type {boolean?}
     */

    this.fatal;
    /**
     * You may add a url property with a link to documentation for the message.
     * @type {string?}
     */

    this.url;
    /**
     * You may add a note property with a long form description of the message (supported by vfile-reporter).
     * @type {string?}
     */

    this.note;
    /* eslint-enable no-unused-expressions */
  }

}

$xKxw$export$VFileMessage.prototype.file = '';
$xKxw$export$VFileMessage.prototype.name = '';
$xKxw$export$VFileMessage.prototype.reason = '';
$xKxw$export$VFileMessage.prototype.message = '';
$xKxw$export$VFileMessage.prototype.stack = '';
$xKxw$export$VFileMessage.prototype.fatal = null;
$xKxw$export$VFileMessage.prototype.column = null;
$xKxw$export$VFileMessage.prototype.line = null;
$xKxw$export$VFileMessage.prototype.source = null;
$xKxw$export$VFileMessage.prototype.ruleId = null;
$xKxw$export$VFileMessage.prototype.position = null;
// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var $A7Nx$var$order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];

class $A7Nx$export$VFile {
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
   */
  constructor(value) {
    var index = -1;
    /** @type {VFileOptions} */

    var options;
    /** @type {string} */

    var prop;
    var $TdTf$$interop$default = $parcel$interopDefault($TdTf$exports);

    if (!value) {
      options = {};
    } else if (typeof value === 'string' || $TdTf$$interop$default.d(value)) {
      // @ts-ignore Looks like a buffer.
      options = {
        value
      };
    } else {
      // @ts-ignore Looks like file or options.
      options = value;
    }
    /**
     * Place to store custom information.
     * It’s OK to store custom data directly on the file, moving it to `data`
     * gives a little more privacy.
     * @type {Object.<string, unknown>}
     */


    this.data = {};
    /**
     * List of messages associated with the file.
     * @type {Array.<VFileMessage>}
     */

    this.messages = [];
    /**
     * List of file paths the file moved between.
     * @type {Array.<string>}
     */

    this.history = [];
    /**
     * Base of `path`.
     * Defaults to `process.cwd()` (`/` in browsers).
     * @type {string}
     */

    this.cwd = $qWuj$export$proc.cwd();
    /* eslint-disable no-unused-expressions */

    /**
     * Raw value.
     * @type {VFileValue}
     */

    this.value; // The below are non-standard, they are “well-known”.
    // As in, used in several tools.

    /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */

    this.stored;
    /**
     * Sometimes files have a non-string representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */

    this.result;
    /* eslint-enable no-unused-expressions */
    // Set path related properties in the correct order.

    while (++index < $A7Nx$var$order.length) {
      prop = $A7Nx$var$order[index]; // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.

      if (prop in options && options[prop] !== undefined) {
        this[prop] = prop === 'history' ? options[prop].concat() : options[prop];
      }
    } // Set non-path related properties.


    for (prop in options) {
      if (!$A7Nx$var$order.includes(prop)) {
        this[prop] = options[prop];
      }
    }
  }
  /**
   * Access full path (`~/index.min.js`).
   */


  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set full path (`~/index.min.js`).
   * Cannot be nullified.
   */


  set path(path) {
    $A7Nx$var$assertNonEmpty(path, 'path');

    if (this.path !== path) {
      this.history.push(path);
    }
  }
  /**
   * Access parent path (`~`).
   */


  get dirname() {
    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    return typeof this.path === 'string' ? $cQ80$$interop$default.d.dirname(this.path) : undefined;
  }
  /**
   * Set parent path (`~`).
   * Cannot be set if there's no `path` yet.
   */


  set dirname(dirname) {
    $A7Nx$var$assertPath(this.path, 'dirname');
    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    this.path = $cQ80$$interop$default.d.join(dirname || '', this.basename);
  }
  /**
   * Access basename (including extname) (`index.min.js`).
   */


  get basename() {
    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    return typeof this.path === 'string' ? $cQ80$$interop$default.d.basename(this.path) : undefined;
  }
  /**
   * Set basename (`index.min.js`).
   * Cannot contain path separators.
   * Cannot be nullified either (use `file.path = file.dirname` instead).
   */


  set basename(basename) {
    $A7Nx$var$assertNonEmpty(basename, 'basename');
    $A7Nx$var$assertPart(basename, 'basename');
    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    this.path = $cQ80$$interop$default.d.join(this.dirname || '', basename);
  }
  /**
   * Access extname (including dot) (`.js`).
   */


  get extname() {
    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    return typeof this.path === 'string' ? $cQ80$$interop$default.d.extname(this.path) : undefined;
  }
  /**
   * Set extname (including dot) (`.js`).
   * Cannot be set if there's no `path` yet and cannot contain path separators.
   */


  set extname(extname) {
    $A7Nx$var$assertPart(extname, 'extname');
    $A7Nx$var$assertPath(this.path, 'extname');

    if (extname) {
      if (extname.charCodeAt(0) !== 46
      /* `.` */
      ) {
        throw new Error('`extname` must start with `.`');
      }

      if (extname.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    this.path = $cQ80$$interop$default.d.join(this.dirname, this.stem + (extname || ''));
  }
  /**
   * Access stem (w/o extname) (`index.min`).
   */


  get stem() {
    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    return typeof this.path === 'string' ? $cQ80$$interop$default.d.basename(this.path, this.extname) : undefined;
  }
  /**
   * Set stem (w/o extname) (`index.min`).
   * Cannot be nullified, and cannot contain path separators.
   */


  set stem(stem) {
    $A7Nx$var$assertNonEmpty(stem, 'stem');
    $A7Nx$var$assertPart(stem, 'stem');
    var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);
    this.path = $cQ80$$interop$default.d.join(this.dirname || '', stem + (this.extname || ''));
  }
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
   * @returns {string}
   */


  toString(encoding) {
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
   */


  message(reason, place, origin) {
    var message = new $xKxw$export$VFileMessage(reason, place, origin);

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
   */


  info(reason, place, origin) {
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
   */


  fail(reason, place, origin) {
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
 */


function $A7Nx$var$assertPart(part, name) {
  var $cQ80$$interop$default = $parcel$interopDefault($cQ80$exports);

  if (part && part.includes($cQ80$$interop$default.d.sep)) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + $cQ80$$interop$default.d.sep + '`');
  }
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string} part
 * @param {string} name
 * @returns {void}
 */


function $A7Nx$var$assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}
/**
 * Assert `path` exists.
 *
 * @param {string} path
 * @param {string} name
 * @returns {void}
 */


function $A7Nx$var$assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

// Expose a frozen processor.
const $H2iU$export$unified = $H2iU$var$base().freeze();
const $H2iU$var$own = {}.hasOwnProperty; // Function to create the first processor.

/**
 * @returns {Processor}
 */

function $H2iU$var$base() {
  const transformers = $CgfH$export$trough();
  /** @type {Processor['attachers']} */

  const attachers = [];
  /** @type {Record<string, unknown>} */

  let namespace = {};
  /** @type {boolean|undefined} */

  let frozen;
  let freezeIndex = -1; // Data management.
  // @ts-expect-error: overloads are handled.

  processor.data = data;
  processor.Parser = undefined;
  processor.Compiler = undefined; // Lock.

  processor.freeze = freeze; // Plugins.

  processor.attachers = attachers; // @ts-expect-error: overloads are handled.

  processor.use = use; // API.

  processor.parse = parse;
  processor.stringify = stringify; // @ts-expect-error: overloads are handled.

  processor.run = run;
  processor.runSync = runSync; // @ts-expect-error: overloads are handled.

  processor.process = process;
  processor.processSync = processSync; // Expose.

  return processor; // Create a new processor based on the processor in the current scope.

  /** @type {Processor} */

  function processor() {
    const destination = $H2iU$var$base();
    let index = -1;

    while (++index < attachers.length) {
      destination.use(...attachers[index]);
    }

    var $escf$$interop$default = $parcel$interopDefault($escf$exports);
    destination.data($escf$$interop$default.d(true, {}, namespace));
    return destination;
  }
  /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */


  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        $H2iU$var$assertUnfrozen('data', frozen);
        namespace[key] = value;
        return processor;
      } // Get `key`.


      return $H2iU$var$own.call(namespace, key) && namespace[key] || null;
    } // Set space.


    if (key) {
      $H2iU$var$assertUnfrozen('data', frozen);
      namespace = key;
      return processor;
    } // Get space.


    return namespace;
  }
  /** @type {Processor['freeze']} */


  function freeze() {
    if (frozen) {
      return processor;
    }

    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];

      if (options[0] === false) {
        continue;
      }

      if (options[0] === true) {
        options[1] = undefined;
      }
      /** @type {Transformer|void} */


      const transformer = attacher.call(processor, ...options);

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
   */


  function use(value, ...options) {
    /** @type {Record<string, unknown>|undefined} */
    let settings;
    $H2iU$var$assertUnfrozen('use', frozen);

    if (value === null || value === undefined) {// Empty.
    } else if (typeof value === 'function') {
      addPlugin(value, ...options);
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`');
    }

    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }

    return processor;
    /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */

    function add(value) {
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
     */


    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */


    function addList(plugins) {
      let index = -1;

      if (plugins === null || plugins === undefined) {// Empty.
      } else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
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
     */


    function addPlugin(plugin, value) {
      let index = -1;
      /** @type {Processor['attachers'][number]|undefined} */

      let entry;

      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entry = attachers[index];
          break;
        }
      }

      if (entry) {
        if ($oyH7$export$default(entry[1]) && $oyH7$export$default(value)) {
          var $escf$$interop$default = $parcel$interopDefault($escf$exports);
          value = $escf$$interop$default.d(true, entry[1], value);
        }

        entry[1] = value;
      } else {
        // @ts-expect-error: fine.
        attachers.push([...arguments]);
      }
    }
  }
  /** @type {Processor['parse']} */


  function parse(doc) {
    processor.freeze();
    const file = $H2iU$var$vfile(doc);
    const Parser = processor.Parser;
    $H2iU$var$assertParser('parse', Parser);

    if ($H2iU$var$newable(Parser, 'parse')) {
      // @ts-expect-error: `newable` checks this.
      return new Parser(String(file), file).parse();
    } // @ts-expect-error: `newable` checks this.


    return Parser(String(file), file); // eslint-disable-line new-cap
  }
  /** @type {Processor['stringify']} */


  function stringify(node, doc) {
    processor.freeze();
    const file = $H2iU$var$vfile(doc);
    const Compiler = processor.Compiler;
    $H2iU$var$assertCompiler('stringify', Compiler);
    $H2iU$var$assertNode(node);

    if ($H2iU$var$newable(Compiler, 'compile')) {
      // @ts-expect-error: `newable` checks this.
      return new Compiler(node, file).compile();
    } // @ts-expect-error: `newable` checks this.


    return Compiler(node, file); // eslint-disable-line new-cap
  }
  /**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */


  function run(node, doc, callback) {
    $H2iU$var$assertNode(node);
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
     */

    function executor(resolve, reject) {
      // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
      transformers.run(node, $H2iU$var$vfile(doc), done);
      /**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */

      function done(error, tree, file) {
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
  /** @type {Processor['runSync']} */


  function runSync(node, file) {
    /** @type {Node|undefined} */
    let result;
    /** @type {boolean|undefined} */

    let complete;
    processor.run(node, file, done);
    $H2iU$var$assertDone('runSync', 'run', complete); // @ts-expect-error: we either bailed on an error or have a tree.

    return result;
    /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */

    function done(error, tree) {
      $ls1G$export$bail(error);
      result = tree;
      complete = true;
    }
  }
  /**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */


  function process(doc, callback) {
    processor.freeze();
    $H2iU$var$assertParser('process', processor.Parser);
    $H2iU$var$assertCompiler('process', processor.Compiler);

    if (!callback) {
      return new Promise(executor);
    }

    executor(null, callback);
    /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */

    function executor(resolve, reject) {
      const file = $H2iU$var$vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file) => {
        if (error || !tree || !file) {
          done(error);
        } else {
          /** @type {unknown} */
          const result = processor.stringify(tree, file);

          if (result === undefined || result === null) {// Empty.
          } else if ($H2iU$var$looksLikeAVFileValue(result)) {
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
       */

      function done(error, file) {
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
  /** @type {Processor['processSync']} */


  function processSync(doc) {
    /** @type {boolean|undefined} */
    let complete;
    processor.freeze();
    $H2iU$var$assertParser('processSync', processor.Parser);
    $H2iU$var$assertCompiler('processSync', processor.Compiler);
    const file = $H2iU$var$vfile(doc);
    processor.process(file, done);
    $H2iU$var$assertDone('processSync', 'process', complete);
    return file;
    /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */

    function done(error) {
      complete = true;
      $ls1G$export$bail(error);
    }
  }
}
/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */


function $H2iU$var$newable(value, name) {
  return typeof value === 'function' && // Prototypes do exist.
  // type-coverage:ignore-next-line
  value.prototype && ($H2iU$var$keys(value.prototype) || name in value.prototype);
}
/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */


function $H2iU$var$keys(value) {
  /** @type {string} */
  let key;

  for (key in value) {
    if ($H2iU$var$own.call(value, key)) {
      return true;
    }
  }

  return false;
}
/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */


function $H2iU$var$assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Parser`');
  }
}
/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */


function $H2iU$var$assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Compiler`');
  }
}
/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */


function $H2iU$var$assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error('Cannot call `' + name + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
  }
}
/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */


function $H2iU$var$assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!$oyH7$export$default(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`'); // Fine.
  }
}
/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */


function $H2iU$var$assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}
/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */


function $H2iU$var$vfile(value) {
  return $H2iU$var$looksLikeAVFile(value) ? value : new $A7Nx$export$VFile(value);
}
/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */


function $H2iU$var$looksLikeAVFile(value) {
  return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */


function $H2iU$var$looksLikeAVFileValue(value) {
  var $TdTf$$interop$default = $parcel$interopDefault($TdTf$exports);
  return typeof value === 'string' || $TdTf$$interop$default.d(value);
}

/**
 * @typedef Options
 * @property {boolean} [includeImageAlt=true]
 */

/**
 * Get the text content of a node.
 * Prefer the node’s plain-text fields, otherwise serialize its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} node
 * @param {Options} [options]
 * @returns {string}
 */
function $DRco$export$toString(node, options) {
  var {
    includeImageAlt = true
  } = options || {};
  return $DRco$var$one(node, includeImageAlt);
}
/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */


function $DRco$var$one(node, includeImageAlt) {
  return node && typeof node === 'object' && (node.value || (includeImageAlt ? node.alt : '') || 'children' in node && $DRco$var$all(node.children, includeImageAlt) || Array.isArray(node) && $DRco$var$all(node, includeImageAlt)) || '';
}
/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */


function $DRco$var$all(values, includeImageAlt) {
  /** @type {Array.<string>} */
  var result = [];
  var index = -1;

  while (++index < values.length) {
    result[index] = $DRco$var$one(values[index], includeImageAlt);
  }

  return result.join('');
}

/**
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
 */
function $pAhx$export$splice(list, start, remove, items) {
  const end = list.length;
  let chunkStart = 0;
  /** @type {unknown[]} */

  let parameters; // Make start between zero and `end` (included).

  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }

  remove = remove > 0 ? remove : 0; // No need to chunk the items if there’s only a couple (10k) items.

  if (items.length < 10000) {
    parameters = Array.from(items);
    parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
    ;
    [].splice.apply(list, parameters);
  } else {
    // Delete `remove` items starting from `start`
    if (remove) [].splice.apply(list, [start, remove]); // Insert the items in chunks to not cause stack overflows.

    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000);
      parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
      ;
      [].splice.apply(list, parameters);
      chunkStart += 10000;
      start += 10000;
    }
  }
}
/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {T[]} items
 * @returns {T[]}
 */


function $pAhx$export$push(list, items) {
  if (list.length > 0) {
    $pAhx$export$splice(list, list.length, 0, items);
    return list;
  }

  return items;
}

const $L3gV$var$hasOwnProperty = {}.hasOwnProperty;
/**
 * Combine several syntax extensions into one.
 *
 * @param {Extension[]} extensions List of syntax extensions.
 * @returns {NormalizedExtension} A single combined extension.
 */

function $L3gV$export$combineExtensions(extensions) {
  /** @type {NormalizedExtension} */
  const all = {};
  let index = -1;

  while (++index < extensions.length) {
    $L3gV$var$syntaxExtension(all, extensions[index]);
  }

  return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */


function $L3gV$var$syntaxExtension(all, extension) {
  /** @type {string} */
  let hook;

  for (hook in extension) {
    const maybe = $L3gV$var$hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    const left = maybe || (all[hook] = {});
    const right = extension[hook];
    /** @type {string} */

    let code;

    for (code in right) {
      if (!$L3gV$var$hasOwnProperty.call(left, code)) left[code] = [];
      const value = right[code];
      $L3gV$var$constructs( // @ts-expect-error Looks like a list.
      left[code], Array.isArray(value) ? value : value ? [value] : []);
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
 */


function $L3gV$var$constructs(existing, list) {
  let index = -1;
  /** @type {unknown[]} */

  const before = [];

  while (++index < list.length) {
    // @ts-expect-error Looks like an object.
    ;
    (list[index].add === 'after' ? existing : before).push(list[index]);
  }

  $pAhx$export$splice(existing, 0, 0, before);
}
/**
 * Combine several HTML extensions into one.
 *
 * @param {HtmlExtension[]} htmlExtensions List of HTML extensions.
 * @returns {HtmlExtension} A single combined extension.
 */


function $L3gV$export$combineHtmlExtensions(htmlExtensions) {
  /** @type {HtmlExtension} */
  const handlers = {};
  let index = -1;

  while (++index < htmlExtensions.length) {
    $L3gV$var$htmlExtension(handlers, htmlExtensions[index]);
  }

  return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all Extension to merge into.
 * @param {HtmlExtension} extension Extension to merge.
 * @returns {void}
 */


function $L3gV$var$htmlExtension(all, extension) {
  /** @type {string} */
  let hook;

  for (hook in extension) {
    const maybe = $L3gV$var$hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    const left = maybe || (all[hook] = {});
    const right = extension[hook];
    /** @type {string} */

    let type;

    if (right) {
      for (type in right) {
        left[type] = right[type];
      }
    }
  }
}

// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
const $mrs6$export$unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 */
const $nPGJ$export$asciiAlpha = $nPGJ$var$regexCheck(/[A-Za-z]/);
/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 */

const $nPGJ$export$asciiDigit = $nPGJ$var$regexCheck(/\d/);
/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 */

const $nPGJ$export$asciiHexDigit = $nPGJ$var$regexCheck(/[\dA-Fa-f]/);
/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 */

const $nPGJ$export$asciiAlphanumeric = $nPGJ$var$regexCheck(/[\dA-Za-z]/);
/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 */

const $nPGJ$export$asciiPunctuation = $nPGJ$var$regexCheck(/[!-/:-@[-`{-~]/);
/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 */

const $nPGJ$export$asciiAtext = $nPGJ$var$regexCheck(/[#-'*+\--9=?A-Z^-~]/);
/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 * @returns {code is number}
 */

function $nPGJ$export$asciiControl(code) {
  return (// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127)
  );
}
/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 * @returns {code is number}
 */


function $nPGJ$export$markdownLineEndingOrSpace(code) {
  return code !== null && (code < 0 || code === 32);
}
/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 * @returns {code is number}
 */


function $nPGJ$export$markdownLineEnding(code) {
  return code !== null && code < -2;
}
/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 * @returns {code is number}
 */


function $nPGJ$export$markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}
/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */


const $nPGJ$export$unicodeWhitespace = $nPGJ$var$regexCheck(/\s/);
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */
// Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.

const $nPGJ$export$unicodePunctuation = $nPGJ$var$regexCheck($mrs6$export$unicodePunctuationRegex);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */

function $nPGJ$var$regexCheck(regex) {
  return check;
  /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */

  function check(code) {
    return code !== null && regex.test(String.fromCharCode(code));
  }
}

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {string} type
 * @param {number} [max=Infinity]
 * @returns {State}
 */
function $CdtX$export$factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.enter(type);
      return prefix(code);
    }

    return ok(code);
  }
  /** @type {State} */


  function prefix(code) {
    if ($nPGJ$export$markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }

    effects.exit(type);
    return ok(code);
  }
}

/** @type {InitialConstruct} */
const $M9jy$export$content = {
  tokenize: $M9jy$var$initializeContent
};
/** @type {Initializer} */

function $M9jy$var$initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  /** @type {Token} */

  let previous;
  return contentStart;
  /** @type {State} */

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $CdtX$export$factorySpace(effects, contentStart, 'linePrefix');
  }
  /** @type {State} */


  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code);
  }
  /** @type {State} */


  function lineStart(code) {
    const token = effects.enter('chunkText', {
      contentType: 'text',
      previous
    });

    if (previous) {
      previous.next = token;
    }

    previous = token;
    return data(code);
  }
  /** @type {State} */


  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart;
    } // Data.


    effects.consume(code);
    return data;
  }
}

/** @type {InitialConstruct} */
const $AqAQ$export$document = {
  tokenize: $AqAQ$var$initializeDocument
};
/** @type {Construct} */

const $AqAQ$var$containerConstruct = {
  tokenize: $AqAQ$var$tokenizeContainer
};
/** @type {Initializer} */

function $AqAQ$var$initializeDocument(effects) {
  const self = this;
  /** @type {StackItem[]} */

  const stack = [];
  let continued = 0;
  /** @type {TokenizeContext|undefined} */

  let childFlow;
  /** @type {Token|undefined} */

  let childToken;
  /** @type {number} */

  let lineStartOffset;
  return start;
  /** @type {State} */

  function start(code) {
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
  /** @type {State} */


  function documentContinue(code) {
    if (self.containerState._closeFlow) closeFlow();
    continued++;
    return start(code);
  }
  /** @type {State} */


  function checkNewContainers(code) {
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


    self.containerState = {};
    return effects.check($AqAQ$var$containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
  }
  /** @type {State} */


  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code);
  }
  /** @type {State} */


  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code);
  }
  /** @type {State} */


  function documentContinued(code) {
    // Try new containers.
    self.containerState = {};
    return effects.attempt($AqAQ$var$containerConstruct, containerContinue, flowStart)(code);
  }
  /** @type {State} */


  function containerContinue(code) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]); // Try another.

    return documentContinued(code);
  }
  /** @type {State} */


  function flowStart(code) {
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
  /** @type {State} */


  function flowContinue(code) {
    if (code === null) {
      writeToChild(effects.exit('chunkFlow'), true);
      exitContainers(0);
      effects.consume(code);
      return;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      effects.consume(code);
      writeToChild(effects.exit('chunkFlow')); // Get ready for the next line.

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
   */


  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream); // Alright, so we just added a lazy line:
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

      while (index--) {
        if ( // The token starts before the line ending…
        childFlow.events[index][1].start.offset < lineStartOffset && (!childFlow.events[index][1].end || // …or ends after it.
        childFlow.events[index][1].end.offset > lineStartOffset)) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return;
        }
      }

      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {boolean|undefined} */

      let seen;
      /** @type {Point|undefined} */

      let point; // Find the previous chunk (the one before the lazy line).

      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === 'chunkFlow') {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break;
          }

          seen = true;
        }
      }

      exitContainers(continued); // Fix positions.

      index = indexBeforeExits;

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).


      $pAhx$export$splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)); // Discard the duplicate exits.

      self.events.length = index;
    }
  }
  /**
   * @param {number} size
   * @returns {void}
   */


  function exitContainers(size) {
    let index = stack.length; // Exit open containers.

    while (index-- > size) {
      const entry = stack[index];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }

    stack.length = size;
  }

  function closeFlow() {
    childFlow.write([null]);
    childToken = undefined;
    childFlow = undefined;
    self.containerState._closeFlow = undefined;
  }
}
/** @type {Tokenizer} */


function $AqAQ$var$tokenizeContainer(effects, ok, nok) {
  return $CdtX$export$factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
}

/**
 * Classify whether a character code represents whitespace, punctuation, or
 * something else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * Note that eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 * @returns {number|undefined}
 */
function $HSj1$export$classifyCharacter(code) {
  if (code === null || $nPGJ$export$markdownLineEndingOrSpace(code) || $nPGJ$export$unicodeWhitespace(code)) {
    return 1;
  }

  if ($nPGJ$export$unicodePunctuation(code)) {
    return 2;
  }
}

/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 */

/**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */
function $KETX$export$resolveAll(constructs, events, context) {
  /** @type {Resolver[]} */
  const called = [];
  let index = -1;

  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll;

    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }

  return events;
}

/** @type {Construct} */
const $PgCJ$export$attention = {
  name: 'attention',
  tokenize: $PgCJ$var$tokenizeAttention,
  resolveAll: $PgCJ$var$resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */

function $PgCJ$var$resolveAllAttention(events, context) {
  let index = -1;
  /** @type {number} */

  let open;
  /** @type {Token} */

  let group;
  /** @type {Token} */

  let text;
  /** @type {Token} */

  let openingSequence;
  /** @type {Token} */

  let closingSequence;
  /** @type {number} */

  let use;
  /** @type {Event[]} */

  let nextEvents;
  /** @type {number} */

  let offset; // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.

  while (++index < events.length) {
    // Find a token that can close.
    if (events[index][0] === 'enter' && events[index][1].type === 'attentionSequence' && events[index][1]._close) {
      open = index; // Now walk back to find an opener.

      while (open--) {
        // Find a token that can open the closer.
        if (events[open][0] === 'exit' && events[open][1].type === 'attentionSequence' && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
            continue;
          } // Number of markers to use from the sequence.


          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index][1].start);
          $PgCJ$var$movePoint(start, -use);
          $PgCJ$var$movePoint(end, use);
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: Object.assign({}, events[index][1].start),
            end
          };
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index][1].start)
          };
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index][1].start = Object.assign({}, closingSequence.end);
          nextEvents = []; // If there are more markers in the opening, add them before.

          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = $pAhx$export$push(nextEvents, [['enter', events[open][1], context], ['exit', events[open][1], context]]);
          } // Opening.


          nextEvents = $pAhx$export$push(nextEvents, [['enter', group, context], ['enter', openingSequence, context], ['exit', openingSequence, context], ['enter', text, context]]); // Between.

          nextEvents = $pAhx$export$push(nextEvents, $KETX$export$resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)); // Closing.

          nextEvents = $pAhx$export$push(nextEvents, [['exit', text, context], ['enter', closingSequence, context], ['exit', closingSequence, context], ['exit', group, context]]); // If there are more markers in the closing, add them after.

          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = $pAhx$export$push(nextEvents, [['enter', events[index][1], context], ['exit', events[index][1], context]]);
          } else {
            offset = 0;
          }

          $pAhx$export$splice(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  } // Remove remaining sequences.


  index = -1;

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }

  return events;
}
/** @type {Tokenizer} */


function $PgCJ$var$tokenizeAttention(effects, ok) {
  const before = $HSj1$export$classifyCharacter(this.previous);
  /** @type {NonNullable<Code>} */

  let marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('attentionSequence');
    marker = code;
    return sequence(code);
  }
  /** @type {State} */


  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      return sequence;
    }

    const token = effects.exit('attentionSequence');
    const after = $HSj1$export$classifyCharacter(code);
    const open = !after || after === 2 && before;
    const close = !before || before === 2 && after;
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
 */


function $PgCJ$var$movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}

/** @type {Construct} */
const $pPAW$export$autolink = {
  name: 'autolink',
  tokenize: $pPAW$var$tokenizeAutolink
};
/** @type {Tokenizer} */

function $pPAW$var$tokenizeAutolink(effects, ok, nok) {
  let size = 1;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('autolink');
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.enter('autolinkProtocol');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }

    return $nPGJ$export$asciiAtext(code) ? emailAtext(code) : nok(code);
  }
  /** @type {State} */


  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || $nPGJ$export$asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
  }
  /** @type {State} */


  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside;
    }

    if ((code === 43 || code === 45 || code === 46 || $nPGJ$export$asciiAlphanumeric(code)) && size++ < 32) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }

    return emailAtext(code);
  }
  /** @type {State} */


  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol');
      return end(code);
    }

    if (code === null || code === 32 || code === 60 || $nPGJ$export$asciiControl(code)) {
      return nok(code);
    }

    effects.consume(code);
    return urlInside;
  }
  /** @type {State} */


  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }

    if ($nPGJ$export$asciiAtext(code)) {
      effects.consume(code);
      return emailAtext;
    }

    return nok(code);
  }
  /** @type {State} */


  function emailAtSignOrDot(code) {
    return $nPGJ$export$asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
  }
  /** @type {State} */


  function emailLabel(code) {
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
  /** @type {State} */


  function emailValue(code) {
    if ((code === 45 || $nPGJ$export$asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code);
      return code === 45 ? emailValue : emailLabel;
    }

    return nok(code);
  }
  /** @type {State} */


  function end(code) {
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.exit('autolink');
    return ok;
  }
}

/** @type {Construct} */
const $jK8i$export$blankLine = {
  tokenize: $jK8i$var$tokenizeBlankLine,
  partial: true
};
/** @type {Tokenizer} */

function $jK8i$var$tokenizeBlankLine(effects, ok, nok) {
  return $CdtX$export$factorySpace(effects, afterWhitespace, 'linePrefix');
  /** @type {State} */

  function afterWhitespace(code) {
    return code === null || $nPGJ$export$markdownLineEnding(code) ? ok(code) : nok(code);
  }
}

/** @type {Construct} */
const $nevD$export$blockQuote = {
  name: 'blockQuote',
  tokenize: $nevD$var$tokenizeBlockQuoteStart,
  continuation: {
    tokenize: $nevD$var$tokenizeBlockQuoteContinuation
  },
  exit: $nevD$var$exit
};
/** @type {Tokenizer} */

function $nevD$var$tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
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
  /** @type {State} */


  function after(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace');
      effects.consume(code);
      effects.exit('blockQuotePrefixWhitespace');
      effects.exit('blockQuotePrefix');
      return ok;
    }

    effects.exit('blockQuotePrefix');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function $nevD$var$tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return $CdtX$export$factorySpace(effects, effects.attempt($nevD$export$blockQuote, ok, nok), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
}
/** @type {Exiter} */


function $nevD$var$exit(effects) {
  effects.exit('blockQuote');
}

/** @type {Construct} */
const $p8vB$export$characterEscape = {
  name: 'characterEscape',
  tokenize: $p8vB$var$tokenizeCharacterEscape
};
/** @type {Tokenizer} */

function $p8vB$var$tokenizeCharacterEscape(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('characterEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    effects.exit('escapeMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if ($nPGJ$export$asciiPunctuation(code)) {
      effects.enter('characterEscapeValue');
      effects.consume(code);
      effects.exit('characterEscapeValue');
      effects.exit('characterEscape');
      return ok;
    }

    return nok(code);
  }
}

var $xLRb$export$characterEntities = {
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
var $S7VQ$var$own = {}.hasOwnProperty;
/**
 * @param {string} characters
 * @returns {string|false}
 */

function $S7VQ$export$decodeEntity(characters) {
  return $S7VQ$var$own.call($xLRb$export$characterEntities, characters) ? $xLRb$export$characterEntities[characters] : false;
}

/** @type {Construct} */
const $m1Uo$export$characterReference = {
  name: 'characterReference',
  tokenize: $m1Uo$var$tokenizeCharacterReference
};
/** @type {Tokenizer} */

function $m1Uo$var$tokenizeCharacterReference(effects, ok, nok) {
  const self = this;
  let size = 0;
  /** @type {number} */

  let max;
  /** @type {(code: Code) => code is number} */

  let test;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('characterReference');
    effects.enter('characterReferenceMarker');
    effects.consume(code);
    effects.exit('characterReferenceMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric');
      effects.consume(code);
      effects.exit('characterReferenceMarkerNumeric');
      return numeric;
    }

    effects.enter('characterReferenceValue');
    max = 31;
    test = $nPGJ$export$asciiAlphanumeric;
    return value(code);
  }
  /** @type {State} */


  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal');
      effects.consume(code);
      effects.exit('characterReferenceMarkerHexadecimal');
      effects.enter('characterReferenceValue');
      max = 6;
      test = $nPGJ$export$asciiHexDigit;
      return value;
    }

    effects.enter('characterReferenceValue');
    max = 7;
    test = $nPGJ$export$asciiDigit;
    return value(code);
  }
  /** @type {State} */


  function value(code) {
    /** @type {Token} */
    let token;

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue');

      if (test === $nPGJ$export$asciiAlphanumeric && !$S7VQ$export$decodeEntity(self.sliceSerialize(token))) {
        return nok(code);
      }

      effects.enter('characterReferenceMarker');
      effects.consume(code);
      effects.exit('characterReferenceMarker');
      effects.exit('characterReference');
      return ok;
    }

    if (test(code) && size++ < max) {
      effects.consume(code);
      return value;
    }

    return nok(code);
  }
}

/** @type {Construct} */
const $Wq01$export$codeFenced = {
  name: 'codeFenced',
  tokenize: $Wq01$var$tokenizeCodeFenced,
  concrete: true
};
/** @type {Tokenizer} */

function $Wq01$var$tokenizeCodeFenced(effects, ok, nok) {
  const self = this;
  /** @type {Construct} */

  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  /** @type {Construct} */

  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  /** @type {NonNullable<Code>} */

  let marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeFenced');
    effects.enter('codeFencedFence');
    effects.enter('codeFencedFenceSequence');
    marker = code;
    return sequenceOpen(code);
  }
  /** @type {State} */


  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }

    effects.exit('codeFencedFenceSequence');
    return sizeOpen < 3 ? nok(code) : $CdtX$export$factorySpace(effects, infoOpen, 'whitespace')(code);
  }
  /** @type {State} */


  function infoOpen(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return openAfter(code);
    }

    effects.enter('codeFencedFenceInfo');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return info(code);
  }
  /** @type {State} */


  function info(code) {
    if (code === null || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return $CdtX$export$factorySpace(effects, infoAfter, 'whitespace')(code);
    }

    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return info;
  }
  /** @type {State} */


  function infoAfter(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return openAfter(code);
    }

    effects.enter('codeFencedFenceMeta');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return meta(code);
  }
  /** @type {State} */


  function meta(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceMeta');
      return openAfter(code);
    }

    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return meta;
  }
  /** @type {State} */


  function openAfter(code) {
    effects.exit('codeFencedFence');
    return self.interrupt ? ok(code) : contentStart(code);
  }
  /** @type {State} */


  function contentStart(code) {
    if (code === null) {
      return after(code);
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? $CdtX$export$factorySpace(effects, contentStart, 'linePrefix', initialPrefix + 1) : contentStart), after)(code);
    }

    effects.enter('codeFlowValue');
    return contentContinue(code);
  }
  /** @type {State} */


  function contentContinue(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return contentStart(code);
    }

    effects.consume(code);
    return contentContinue;
  }
  /** @type {State} */


  function after(code) {
    effects.exit('codeFenced');
    return ok(code);
  }
  /** @type {Tokenizer} */


  function tokenizeNonLazyLine(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart;
    }
    /** @type {State} */


    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
  }
  /** @type {Tokenizer} */


  function tokenizeClosingFence(effects, ok, nok) {
    let size = 0;
    return $CdtX$export$factorySpace(effects, closingSequenceStart, 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
    /** @type {State} */

    function closingSequenceStart(code) {
      effects.enter('codeFencedFence');
      effects.enter('codeFencedFenceSequence');
      return closingSequence(code);
    }
    /** @type {State} */


    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code);
        size++;
        return closingSequence;
      }

      if (size < sizeOpen) return nok(code);
      effects.exit('codeFencedFenceSequence');
      return $CdtX$export$factorySpace(effects, closingSequenceEnd, 'whitespace')(code);
    }
    /** @type {State} */


    function closingSequenceEnd(code) {
      if (code === null || $nPGJ$export$markdownLineEnding(code)) {
        effects.exit('codeFencedFence');
        return ok(code);
      }

      return nok(code);
    }
  }
}

/** @type {Construct} */
const $Jake$export$codeIndented = {
  name: 'codeIndented',
  tokenize: $Jake$var$tokenizeCodeIndented
};
/** @type {Construct} */

const $Jake$var$indentedContent = {
  tokenize: $Jake$var$tokenizeIndentedContent,
  partial: true
};
/** @type {Tokenizer} */

function $Jake$var$tokenizeCodeIndented(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeIndented');
    return $CdtX$export$factorySpace(effects, afterStartPrefix, 'linePrefix', 4 + 1)(code);
  }
  /** @type {State} */


  function afterStartPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
  }
  /** @type {State} */


  function afterPrefix(code) {
    if (code === null) {
      return after(code);
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      return effects.attempt($Jake$var$indentedContent, afterPrefix, after)(code);
    }

    effects.enter('codeFlowValue');
    return content(code);
  }
  /** @type {State} */


  function content(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return afterPrefix(code);
    }

    effects.consume(code);
    return content;
  }
  /** @type {State} */


  function after(code) {
    effects.exit('codeIndented');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function $Jake$var$tokenizeIndentedContent(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
    // If this is a lazy line, it can’t be code.
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return start;
    }

    return $CdtX$export$factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code);
  }
  /** @type {State} */


  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : $nPGJ$export$markdownLineEnding(code) ? start(code) : nok(code);
  }
}

/** @type {Construct} */
const $K3XP$export$codeText = {
  name: 'codeText',
  tokenize: $K3XP$var$tokenizeCodeText,
  resolve: $K3XP$var$resolveCodeText,
  previous: $K3XP$var$previous
};
/** @type {Resolver} */

function $K3XP$var$resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  /** @type {number} */

  let index;
  /** @type {number|undefined} */

  let enter; // If we start and end with an EOL or a space.

  if ((events[headEnterIndex][1].type === 'lineEnding' || events[headEnterIndex][1].type === 'space') && (events[tailExitIndex][1].type === 'lineEnding' || events[tailExitIndex][1].type === 'space')) {
    index = headEnterIndex; // And we have data.

    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[headEnterIndex][1].type = 'codeTextPadding';
        events[tailExitIndex][1].type = 'codeTextPadding';
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  } // Merge adjacent spaces and data.


  index = headEnterIndex - 1;
  tailExitIndex++;

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index;
      }
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
/** @type {Previous} */


function $K3XP$var$previous(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
/** @type {Tokenizer} */


function $K3XP$var$tokenizeCodeText(effects, ok, nok) {
  const self = this;
  let sizeOpen = 0;
  /** @type {number} */

  let size;
  /** @type {Token} */

  let token;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeText');
    effects.enter('codeTextSequence');
    return openingSequence(code);
  }
  /** @type {State} */


  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence;
    }

    effects.exit('codeTextSequence');
    return gap(code);
  }
  /** @type {State} */


  function gap(code) {
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

    if ($nPGJ$export$markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return gap;
    } // Data.


    effects.enter('codeTextData');
    return data(code);
  } // In code.

  /** @type {State} */


  function data(code) {
    if (code === null || code === 32 || code === 96 || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('codeTextData');
      return gap(code);
    }

    effects.consume(code);
    return data;
  } // Closing fence.

  /** @type {State} */


  function closingSequence(code) {
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
}

/**
 * Tokenize subcontent.
 *
 * @param {Event[]} events
 * @returns {boolean}
 */
function $SX27$export$subtokenize(events) {
  /** @type {Record<string, number>} */
  const jumps = {};
  let index = -1;
  /** @type {Event} */

  let event;
  /** @type {number|undefined} */

  let lineIndex;
  /** @type {number} */

  let otherIndex;
  /** @type {Event} */

  let otherEvent;
  /** @type {Event[]} */

  let parameters;
  /** @type {Event[]} */

  let subevents;
  /** @type {boolean|undefined} */

  let more;

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }

    event = events[index]; // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.

    if (index && event[1].type === 'chunkFlow' && events[index - 1][1].type === 'listItemPrefix') {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;

      if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'lineEndingBlank') {
        otherIndex += 2;
      }

      if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'content') {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break;
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    } // Enter.


    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, $SX27$var$subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    } // Exit.
    else if (event[1]._container) {
      otherIndex = index;
      lineIndex = undefined;

      while (otherIndex--) {
        otherEvent = events[otherIndex];

        if (otherEvent[1].type === 'lineEnding' || otherEvent[1].type === 'lineEndingBlank') {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank';
            }

            otherEvent[1].type = 'lineEnding';
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = Object.assign({}, events[lineIndex][1].start); // Switch container exit w/ line endings.

        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        $pAhx$export$splice(events, lineIndex, index - lineIndex + 1, parameters);
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
 */


function $SX27$var$subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  /** @type {number[]} */

  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  /** @type {[number, number][]} */

  const jumps = [];
  /** @type {Record<string, number>} */

  const gaps = {};
  /** @type {Chunk[]} */

  let stream;
  /** @type {Token|undefined} */

  let previous;
  let index = -1;
  /** @type {Token|undefined} */

  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start]; // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.

  while (current) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== current) {// Empty.
    }

    startPositions.push(startPosition);

    if (!current._tokenizer) {
      stream = context.sliceStream(current);

      if (!current.next) {
        stream.push(null);
      }

      if (previous) {
        tokenizer.defineSkip(current.start);
      }

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }

      tokenizer.write(stream);

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    } // Unravel the next token.


    previous = current;
    current = current.next;
  } // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.


  current = token;

  while (++index < childEvents.length) {
    if ( // Find a void token that includes a break.
    childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
      start = index + 1;
      breaks.push(start); // Help GC.

      current._tokenizer = undefined;
      current.previous = undefined;
      current = current.next;
    }
  } // Help GC.


  tokenizer.events = []; // If there’s one more token (which is the cases for lines that end in an
  // EOF), that’s perfect: the last point we found starts it.
  // If there isn’t then make sure any remaining content is added to it.

  if (current) {
    // Help GC.
    current._tokenizer = undefined;
    current.previous = undefined;
  } else {
    breaks.pop();
  } // Now splice the events from the subtokenizer into the current events,
  // moving back to front so that splice indices aren’t affected.


  index = breaks.length;

  while (index--) {
    const slice = childEvents.slice(breaks[index], breaks[index + 1]);
    const start = startPositions.pop();
    jumps.unshift([start, start + slice.length - 1]);
    $pAhx$export$splice(events, start, 2, slice);
  }

  index = -1;

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }

  return gaps;
}

/**
 * No name because it must not be turned off.
 * @type {Construct}
 */
const $iztb$export$content = {
  tokenize: $iztb$var$tokenizeContent,
  resolve: $iztb$var$resolveContent
};
/** @type {Construct} */

const $iztb$var$continuationConstruct = {
  tokenize: $iztb$var$tokenizeContinuation,
  partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */

function $iztb$var$resolveContent(events) {
  $SX27$export$subtokenize(events);
  return events;
}
/** @type {Tokenizer} */


function $iztb$var$tokenizeContent(effects, ok) {
  /** @type {Token} */
  let previous;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('content');
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    });
    return data(code);
  }
  /** @type {State} */


  function data(code) {
    if (code === null) {
      return contentEnd(code);
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      return effects.check($iztb$var$continuationConstruct, contentContinue, contentEnd)(code);
    } // Data.


    effects.consume(code);
    return data;
  }
  /** @type {State} */


  function contentEnd(code) {
    effects.exit('chunkContent');
    effects.exit('content');
    return ok(code);
  }
  /** @type {State} */


  function contentContinue(code) {
    effects.consume(code);
    effects.exit('chunkContent');
    previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous
    });
    previous = previous.next;
    return data;
  }
}
/** @type {Tokenizer} */


function $iztb$var$tokenizeContinuation(effects, ok, nok) {
  const self = this;
  return startLookahead;
  /** @type {State} */

  function startLookahead(code) {
    effects.exit('chunkContent');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $CdtX$export$factorySpace(effects, prefixed, 'linePrefix');
  }
  /** @type {State} */


  function prefixed(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return nok(code);
    }

    const tail = self.events[self.events.length - 1];

    if (!self.parser.constructs.disable.null.includes('codeIndented') && tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok(code);
    }

    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
  }
}

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} literalType
 * @param {string} literalMarkerType
 * @param {string} rawType
 * @param {string} stringType
 * @param {number} [max=Infinity]
 * @returns {State}
 */
// eslint-disable-next-line max-params
function $BD5r$export$factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  /** @type {State} */

  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }

    if (code === null || code === 41 || $nPGJ$export$asciiControl(code)) {
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
  /** @type {State} */


  function destinationEnclosedBefore(code) {
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
  /** @type {State} */


  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString');
      effects.exit(stringType);
      return destinationEnclosedBefore(code);
    }

    if (code === null || code === 60 || $nPGJ$export$markdownLineEnding(code)) {
      return nok(code);
    }

    effects.consume(code);
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  /** @type {State} */


  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return destinationEnclosed;
    }

    return destinationEnclosed(code);
  }
  /** @type {State} */


  function destinationRaw(code) {
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

    if (code === null || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code);
      effects.exit('chunkString');
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code);
    }

    if ($nPGJ$export$asciiControl(code)) return nok(code);
    effects.consume(code);
    return code === 92 ? destinationRawEscape : destinationRaw;
  }
  /** @type {State} */


  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return destinationRaw;
    }

    return destinationRaw(code);
  }
}

/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params
function $kfsH$export$factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  /** @type {boolean} */

  let data;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  /** @type {State} */


  function atBreak(code) {
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

    if ($nPGJ$export$markdownLineEnding(code)) {
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
  /** @type {State} */


  function label(code) {
    if (code === null || code === 91 || code === 93 || $nPGJ$export$markdownLineEnding(code) || size++ > 999) {
      effects.exit('chunkString');
      return atBreak(code);
    }

    effects.consume(code);
    data = data || !$nPGJ$export$markdownSpace(code);
    return code === 92 ? labelEscape : label;
  }
  /** @type {State} */


  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label;
    }

    return label(code);
  }
}

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params
function $L9iw$export$factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  let marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak;
  }
  /** @type {State} */


  function atFirstTitleBreak(code) {
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
  /** @type {State} */


  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }

    if (code === null) {
      return nok(code);
    } // Note: blank lines can’t exist in content.


    if ($nPGJ$export$markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return $CdtX$export$factorySpace(effects, atTitleBreak, 'linePrefix');
    }

    effects.enter('chunkString', {
      contentType: 'string'
    });
    return title(code);
  }
  /** @type {State} */


  function title(code) {
    if (code === marker || code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('chunkString');
      return atTitleBreak(code);
    }

    effects.consume(code);
    return code === 92 ? titleEscape : title;
  }
  /** @type {State} */


  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title;
    }

    return title(code);
  }
}

/**
 * @param {Effects} effects
 * @param {State} ok
 */
function $DEjW$export$factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  let seen;
  return start;
  /** @type {State} */

  function start(code) {
    if ($nPGJ$export$markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start;
    }

    if ($nPGJ$export$markdownSpace(code)) {
      return $CdtX$export$factorySpace(effects, start, seen ? 'linePrefix' : 'lineSuffix')(code);
    }

    return ok(code);
  }
}

/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */
function $XmO1$export$normalizeIdentifier(value) {
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

/** @type {Construct} */
const $jENv$export$definition = {
  name: 'definition',
  tokenize: $jENv$var$tokenizeDefinition
};
/** @type {Construct} */

const $jENv$var$titleConstruct = {
  tokenize: $jENv$var$tokenizeTitle,
  partial: true
};
/** @type {Tokenizer} */

function $jENv$var$tokenizeDefinition(effects, ok, nok) {
  const self = this;
  /** @type {string} */

  let identifier;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('definition');
    return $kfsH$export$factoryLabel.call(self, effects, labelAfter, nok, 'definitionLabel', 'definitionLabelMarker', 'definitionLabelString')(code);
  }
  /** @type {State} */


  function labelAfter(code) {
    identifier = $XmO1$export$normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));

    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker'); // Note: blank lines can’t exist in content.

      return $DEjW$export$factoryWhitespace(effects, $BD5r$export$factoryDestination(effects, effects.attempt($jENv$var$titleConstruct, $CdtX$export$factorySpace(effects, after, 'whitespace'), $CdtX$export$factorySpace(effects, after, 'whitespace')), nok, 'definitionDestination', 'definitionDestinationLiteral', 'definitionDestinationLiteralMarker', 'definitionDestinationRaw', 'definitionDestinationString'));
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('definition');

      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }

      return ok(code);
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function $jENv$var$tokenizeTitle(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    return $nPGJ$export$markdownLineEndingOrSpace(code) ? $DEjW$export$factoryWhitespace(effects, before)(code) : nok(code);
  }
  /** @type {State} */


  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return $L9iw$export$factoryTitle(effects, $CdtX$export$factorySpace(effects, after, 'whitespace'), nok, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    return code === null || $nPGJ$export$markdownLineEnding(code) ? ok(code) : nok(code);
  }
}

/** @type {Construct} */
const $nEkx$export$hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: $nEkx$var$tokenizeHardBreakEscape
};
/** @type {Tokenizer} */

function $nEkx$var$tokenizeHardBreakEscape(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('hardBreakEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    return open;
  }
  /** @type {State} */


  function open(code) {
    if ($nPGJ$export$markdownLineEnding(code)) {
      effects.exit('escapeMarker');
      effects.exit('hardBreakEscape');
      return ok(code);
    }

    return nok(code);
  }
}

/** @type {Construct} */
const $uQc4$export$headingAtx = {
  name: 'headingAtx',
  tokenize: $uQc4$var$tokenizeHeadingAtx,
  resolve: $uQc4$var$resolveHeadingAtx
};
/** @type {Resolver} */

function $uQc4$var$resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  /** @type {Token} */

  let content;
  /** @type {Token} */

  let text; // Prefix whitespace, part of the opening.

  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2;
  } // Suffix whitespace, part of the closing.


  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === 'whitespace') {
    contentEnd -= 2;
  }

  if (events[contentEnd][1].type === 'atxHeadingSequence' && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === 'whitespace')) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }

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
    $pAhx$export$splice(events, contentStart, contentEnd - contentStart + 1, [['enter', content, context], ['enter', text, context], ['exit', text, context], ['exit', content, context]]);
  }

  return events;
}
/** @type {Tokenizer} */


function $uQc4$var$tokenizeHeadingAtx(effects, ok, nok) {
  const self = this;
  let size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('atxHeading');
    effects.enter('atxHeadingSequence');
    return fenceOpenInside(code);
  }
  /** @type {State} */


  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return fenceOpenInside;
    }

    if (code === null || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence');
      return self.interrupt ? ok(code) : headingBreak(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence');
      return sequence(code);
    }

    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('atxHeading');
      return ok(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      return $CdtX$export$factorySpace(effects, headingBreak, 'whitespace')(code);
    }

    effects.enter('atxHeadingText');
    return data(code);
  }
  /** @type {State} */


  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence;
    }

    effects.exit('atxHeadingSequence');
    return headingBreak(code);
  }
  /** @type {State} */


  function data(code) {
    if (code === null || code === 35 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText');
      return headingBreak(code);
    }

    effects.consume(code);
    return data;
  }
}

/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result
 * in more relaxed rules (condition 6): because they are known blocks, the
 * HTML-like syntax doesn’t have to be strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.29/#html-blocks>.
 */
const $L9gG$export$htmlBlockNames = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'source', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];
/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result in
 * HTML that can include lines w/o exiting, until a closing tag also in this
 * list is found (condition 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.29/#html-blocks>.
 *
 * Note that `textarea` is not available in `CommonMark@0.29` but has been
 * merged to the primary branch and is slated to be released in the next release
 * of CommonMark.
 */

const $L9gG$export$htmlRawNames = ['pre', 'script', 'style', 'textarea'];

/** @type {Construct} */
const $bU8t$export$htmlFlow = {
  name: 'htmlFlow',
  tokenize: $bU8t$var$tokenizeHtmlFlow,
  resolveTo: $bU8t$var$resolveToHtmlFlow,
  concrete: true
};
/** @type {Construct} */

const $bU8t$var$nextBlankConstruct = {
  tokenize: $bU8t$var$tokenizeNextBlank,
  partial: true
};
/** @type {Resolver} */

function $bU8t$var$resolveToHtmlFlow(events) {
  let index = events.length;

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break;
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start; // Add the prefix start to the HTML line token.

    events[index + 1][1].start = events[index - 2][1].start; // Remove the line prefix.

    events.splice(index - 2, 2);
  }

  return events;
}
/** @type {Tokenizer} */


function $bU8t$var$tokenizeHtmlFlow(effects, ok, nok) {
  const self = this;
  /** @type {number} */

  let kind;
  /** @type {boolean} */

  let startTag;
  /** @type {string} */

  let buffer;
  /** @type {number} */

  let index;
  /** @type {Code} */

  let marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('htmlFlow');
    effects.enter('htmlFlowData');
    effects.consume(code);
    return open;
  }
  /** @type {State} */


  function open(code) {
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
      kind = 3; // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.

      return self.interrupt ? ok : continuationDeclarationInside;
    }

    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      startTag = true;
      return tagName;
    }

    return nok(code);
  }
  /** @type {State} */


  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code);
      kind = 2;
      return commentOpenInside;
    }

    if (code === 91) {
      effects.consume(code);
      kind = 5;
      buffer = 'CDATA[';
      index = 0;
      return cdataOpenInside;
    }

    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      kind = 4;
      return self.interrupt ? ok : continuationDeclarationInside;
    }

    return nok(code);
  }
  /** @type {State} */


  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside;
    }

    return nok(code);
  }
  /** @type {State} */


  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
    }

    return nok(code);
  }
  /** @type {State} */


  function tagCloseStart(code) {
    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }

    return nok(code);
  }
  /** @type {State} */


  function tagName(code) {
    if (code === null || code === 47 || code === 62 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      if (code !== 47 && startTag && $L9gG$export$htmlRawNames.includes(buffer.toLowerCase())) {
        kind = 1;
        return self.interrupt ? ok(code) : continuation(code);
      }

      if ($L9gG$export$htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = 6;

        if (code === 47) {
          effects.consume(code);
          return basicSelfClosing;
        }

        return self.interrupt ? ok(code) : continuation(code);
      }

      kind = 7; // Do not support complete HTML when interrupting

      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
    }

    if (code === 45 || $nPGJ$export$asciiAlphanumeric(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName;
    }

    return nok(code);
  }
  /** @type {State} */


  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self.interrupt ? ok : continuation;
    }

    return nok(code);
  }
  /** @type {State} */


  function completeClosingTagAfter(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }

    return completeEnd(code);
  }
  /** @type {State} */


  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd;
    }

    if (code === 58 || code === 95 || $nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      return completeAttributeName;
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }

    return completeEnd(code);
  }
  /** @type {State} */


  function completeAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || $nPGJ$export$asciiAlphanumeric(code)) {
      effects.consume(code);
      return completeAttributeName;
    }

    return completeAttributeNameAfter(code);
  }
  /** @type {State} */


  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }

    return completeAttributeNameBefore(code);
  }
  /** @type {State} */


  function completeAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted;
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }

    marker = null;
    return completeAttributeValueUnquoted(code);
  }
  /** @type {State} */


  function completeAttributeValueQuoted(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return nok(code);
    }

    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter;
    }

    effects.consume(code);
    return completeAttributeValueQuoted;
  }
  /** @type {State} */


  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      return completeAttributeNameAfter(code);
    }

    effects.consume(code);
    return completeAttributeValueUnquoted;
  }
  /** @type {State} */


  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || $nPGJ$export$markdownSpace(code)) {
      return completeAttributeNameBefore(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter;
    }

    return nok(code);
  }
  /** @type {State} */


  function completeAfter(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return completeAfter;
    }

    return code === null || $nPGJ$export$markdownLineEnding(code) ? continuation(code) : nok(code);
  }
  /** @type {State} */


  function continuation(code) {
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

    if ($nPGJ$export$markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check($bU8t$var$nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
    }

    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return continuationAtLineEnding(code);
    }

    effects.consume(code);
    return continuation;
  }
  /** @type {State} */


  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData');
    return htmlContinueStart(code);
  }
  /** @type {State} */


  function htmlContinueStart(code) {
    if (code === null) {
      return done(code);
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code);
    }

    effects.enter('htmlFlowData');
    return continuation(code);
  }
  /** @type {Tokenizer} */


  function htmlLineEnd(effects, ok, nok) {
    return start;
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart;
    }
    /** @type {State} */


    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
  }
  /** @type {State} */


  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationRawEndTag(code) {
    if (code === 62 && $L9gG$export$htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code);
      return continuationClose;
    }

    if ($nPGJ$export$asciiAlpha(code) && buffer.length < 8) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return continuationRawEndTag;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationClose(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('htmlFlowData');
      return done(code);
    }

    effects.consume(code);
    return continuationClose;
  }
  /** @type {State} */


  function done(code) {
    effects.exit('htmlFlow');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function $bU8t$var$tokenizeNextBlank(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.exit('htmlFlowData');
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    return effects.attempt($jK8i$export$blankLine, ok, nok);
  }
}

/** @type {Construct} */
const $MqEf$export$htmlText = {
  name: 'htmlText',
  tokenize: $MqEf$var$tokenizeHtmlText
};
/** @type {Tokenizer} */

function $MqEf$var$tokenizeHtmlText(effects, ok, nok) {
  const self = this;
  /** @type {NonNullable<Code>|undefined} */

  let marker;
  /** @type {string} */

  let buffer;
  /** @type {number} */

  let index;
  /** @type {State} */

  let returnState;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('htmlText');
    effects.enter('htmlTextData');
    effects.consume(code);
    return open;
  }
  /** @type {State} */


  function open(code) {
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

    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen;
    }

    return nok(code);
  }
  /** @type {State} */


  function declarationOpen(code) {
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

    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      return declaration;
    }

    return nok(code);
  }
  /** @type {State} */


  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentStart;
    }

    return nok(code);
  }
  /** @type {State} */


  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code);
    }

    if (code === 45) {
      effects.consume(code);
      return commentStartDash;
    }

    return comment(code);
  }
  /** @type {State} */


  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code);
    }

    return comment(code);
  }
  /** @type {State} */


  function comment(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 45) {
      effects.consume(code);
      return commentClose;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = comment;
      return atLineEnding(code);
    }

    effects.consume(code);
    return comment;
  }
  /** @type {State} */


  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return end;
    }

    return comment(code);
  }
  /** @type {State} */


  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? cdata : cdataOpen;
    }

    return nok(code);
  }
  /** @type {State} */


  function cdata(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 93) {
      effects.consume(code);
      return cdataClose;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = cdata;
      return atLineEnding(code);
    }

    effects.consume(code);
    return cdata;
  }
  /** @type {State} */


  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }

    return cdata(code);
  }
  /** @type {State} */


  function cdataEnd(code) {
    if (code === 62) {
      return end(code);
    }

    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }

    return cdata(code);
  }
  /** @type {State} */


  function declaration(code) {
    if (code === null || code === 62) {
      return end(code);
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = declaration;
      return atLineEnding(code);
    }

    effects.consume(code);
    return declaration;
  }
  /** @type {State} */


  function instruction(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 63) {
      effects.consume(code);
      return instructionClose;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = instruction;
      return atLineEnding(code);
    }

    effects.consume(code);
    return instruction;
  }
  /** @type {State} */


  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code);
  }
  /** @type {State} */


  function tagCloseStart(code) {
    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      return tagClose;
    }

    return nok(code);
  }
  /** @type {State} */


  function tagClose(code) {
    if (code === 45 || $nPGJ$export$asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose;
    }

    return tagCloseBetween(code);
  }
  /** @type {State} */


  function tagCloseBetween(code) {
    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }

    return end(code);
  }
  /** @type {State} */


  function tagOpen(code) {
    if (code === 45 || $nPGJ$export$asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen;
    }

    if (code === 47 || code === 62 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }

    if (code === 58 || code === 95 || $nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }

    return end(code);
  }
  /** @type {State} */


  function tagOpenAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || $nPGJ$export$asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }

    return tagOpenAttributeNameAfter(code);
  }
  /** @type {State} */


  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }

    return tagOpenBetween(code);
  }
  /** @type {State} */


  function tagOpenAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }

    effects.consume(code);
    marker = undefined;
    return tagOpenAttributeValueUnquoted;
  }
  /** @type {State} */


  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter;
    }

    if (code === null) {
      return nok(code);
    }

    if ($nPGJ$export$markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code);
    }

    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }
  /** @type {State} */


  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }

    if (code === 62 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }

    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  } // We can’t have blank lines in content, so no need to worry about empty
  // tokens.

  /** @type {State} */


  function atLineEnding(code) {
    effects.exit('htmlTextData');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $CdtX$export$factorySpace(effects, afterPrefix, 'linePrefix', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
  }
  /** @type {State} */


  function afterPrefix(code) {
    effects.enter('htmlTextData');
    return returnState(code);
  }
  /** @type {State} */


  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit('htmlTextData');
      effects.exit('htmlText');
      return ok;
    }

    return nok(code);
  }
}

/** @type {Construct} */
const $YAW5$export$labelEnd = {
  name: 'labelEnd',
  tokenize: $YAW5$var$tokenizeLabelEnd,
  resolveTo: $YAW5$var$resolveToLabelEnd,
  resolveAll: $YAW5$var$resolveAllLabelEnd
};
/** @type {Construct} */

const $YAW5$var$resourceConstruct = {
  tokenize: $YAW5$var$tokenizeResource
};
/** @type {Construct} */

const $YAW5$var$fullReferenceConstruct = {
  tokenize: $YAW5$var$tokenizeFullReference
};
/** @type {Construct} */

const $YAW5$var$collapsedReferenceConstruct = {
  tokenize: $YAW5$var$tokenizeCollapsedReference
};
/** @type {Resolver} */

function $YAW5$var$resolveAllLabelEnd(events) {
  let index = -1;
  /** @type {Token} */

  let token;

  while (++index < events.length) {
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
/** @type {Resolver} */


function $YAW5$var$resolveToLabelEnd(events, context) {
  let index = events.length;
  let offset = 0;
  /** @type {Token} */

  let token;
  /** @type {number|undefined} */

  let open;
  /** @type {number|undefined} */

  let close;
  /** @type {Event[]} */

  let media; // Find an opening.

  while (index--) {
    token = events[index][1];

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (token.type === 'link' || token.type === 'labelLink' && token._inactive) {
        break;
      } // Mark other link openings as inactive, as we can’t have links in
      // links.


      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index][0] === 'enter' && (token.type === 'labelImage' || token.type === 'labelLink') && !token._balanced) {
        open = index;

        if (token.type !== 'labelLink') {
          offset = 2;
          break;
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index;
    }
  }

  const group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: 'label',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text = {
    type: 'labelText',
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [['enter', group, context], ['enter', label, context]]; // Opening marker.

  media = $pAhx$export$push(media, events.slice(open + 1, open + offset + 3)); // Text open.

  media = $pAhx$export$push(media, [['enter', text, context]]); // Between.

  media = $pAhx$export$push(media, $KETX$export$resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)); // Text close, marker close, label close.

  media = $pAhx$export$push(media, [['exit', text, context], events[close - 2], events[close - 1], ['exit', label, context]]); // Reference, resource, or so.

  media = $pAhx$export$push(media, events.slice(close + 1)); // Media close.

  media = $pAhx$export$push(media, [['exit', group, context]]);
  $pAhx$export$splice(events, open, events.length, media);
  return events;
}
/** @type {Tokenizer} */


function $YAW5$var$tokenizeLabelEnd(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  /** @type {Token} */

  let labelStart;
  /** @type {boolean} */

  let defined; // Find an opening.

  while (index--) {
    if ((self.events[index][1].type === 'labelImage' || self.events[index][1].type === 'labelLink') && !self.events[index][1]._balanced) {
      labelStart = self.events[index][1];
      break;
    }
  }

  return start;
  /** @type {State} */

  function start(code) {
    if (!labelStart) {
      return nok(code);
    } // It’s a balanced bracket, but contains a link.


    if (labelStart._inactive) return balanced(code);
    defined = self.parser.defined.includes($XmO1$export$normalizeIdentifier(self.sliceSerialize({
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
  /** @type {State} */


  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt($YAW5$var$resourceConstruct, ok, defined ? ok : balanced)(code);
    } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?


    if (code === 91) {
      return effects.attempt($YAW5$var$fullReferenceConstruct, ok, defined ? effects.attempt($YAW5$var$collapsedReferenceConstruct, ok, balanced) : balanced)(code);
    } // Shortcut reference: `[asd]`?


    return defined ? ok(code) : balanced(code);
  }
  /** @type {State} */


  function balanced(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}
/** @type {Tokenizer} */


function $YAW5$var$tokenizeResource(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('resource');
    effects.enter('resourceMarker');
    effects.consume(code);
    effects.exit('resourceMarker');
    return $DEjW$export$factoryWhitespace(effects, open);
  }
  /** @type {State} */


  function open(code) {
    if (code === 41) {
      return end(code);
    }

    return $BD5r$export$factoryDestination(effects, destinationAfter, nok, 'resourceDestination', 'resourceDestinationLiteral', 'resourceDestinationLiteralMarker', 'resourceDestinationRaw', 'resourceDestinationString', 3)(code);
  }
  /** @type {State} */


  function destinationAfter(code) {
    return $nPGJ$export$markdownLineEndingOrSpace(code) ? $DEjW$export$factoryWhitespace(effects, between)(code) : end(code);
  }
  /** @type {State} */


  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return $L9iw$export$factoryTitle(effects, $DEjW$export$factoryWhitespace(effects, end), nok, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(code);
    }

    return end(code);
  }
  /** @type {State} */


  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker');
      effects.consume(code);
      effects.exit('resourceMarker');
      effects.exit('resource');
      return ok;
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function $YAW5$var$tokenizeFullReference(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
    return $kfsH$export$factoryLabel.call(self, effects, afterLabel, nok, 'reference', 'referenceMarker', 'referenceString')(code);
  }
  /** @type {State} */


  function afterLabel(code) {
    return self.parser.defined.includes($XmO1$export$normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
  }
}
/** @type {Tokenizer} */


function $YAW5$var$tokenizeCollapsedReference(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('reference');
    effects.enter('referenceMarker');
    effects.consume(code);
    effects.exit('referenceMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker');
      effects.consume(code);
      effects.exit('referenceMarker');
      effects.exit('reference');
      return ok;
    }

    return nok(code);
  }
}

/** @type {Construct} */
const $lusR$export$labelStartImage = {
  name: 'labelStartImage',
  tokenize: $lusR$var$tokenizeLabelStartImage,
  resolveAll: $YAW5$export$labelEnd.resolveAll
};
/** @type {Tokenizer} */

function $lusR$var$tokenizeLabelStartImage(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('labelImage');
    effects.enter('labelImageMarker');
    effects.consume(code);
    effects.exit('labelImageMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelImage');
      return after;
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    /* Hidden footnotes hook */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

/** @type {Construct} */
const $djxC$export$labelStartLink = {
  name: 'labelStartLink',
  tokenize: $djxC$var$tokenizeLabelStartLink,
  resolveAll: $YAW5$export$labelEnd.resolveAll
};
/** @type {Tokenizer} */

function $djxC$var$tokenizeLabelStartLink(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('labelLink');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelLink');
    return after;
  }
  /** @type {State} */


  function after(code) {
    /* Hidden footnotes hook. */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

/** @type {Construct} */
const $oQtw$export$lineEnding = {
  name: 'lineEnding',
  tokenize: $oQtw$var$tokenizeLineEnding
};
/** @type {Tokenizer} */

function $oQtw$var$tokenizeLineEnding(effects, ok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $CdtX$export$factorySpace(effects, ok, 'linePrefix');
  }
}

/** @type {Construct} */
const $ishr$export$thematicBreak = {
  name: 'thematicBreak',
  tokenize: $ishr$var$tokenizeThematicBreak
};
/** @type {Tokenizer} */

function $ishr$var$tokenizeThematicBreak(effects, ok, nok) {
  let size = 0;
  /** @type {NonNullable<Code>} */

  let marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('thematicBreak');
    marker = code;
    return atBreak(code);
  }
  /** @type {State} */


  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence');
      return sequence(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      return $CdtX$export$factorySpace(effects, atBreak, 'whitespace')(code);
    }

    if (size < 3 || code !== null && !$nPGJ$export$markdownLineEnding(code)) {
      return nok(code);
    }

    effects.exit('thematicBreak');
    return ok(code);
  }
  /** @type {State} */


  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence;
    }

    effects.exit('thematicBreakSequence');
    return atBreak(code);
  }
}

/** @type {Construct} */
const $msOb$export$list = {
  name: 'list',
  tokenize: $msOb$var$tokenizeListStart,
  continuation: {
    tokenize: $msOb$var$tokenizeListContinuation
  },
  exit: $msOb$var$tokenizeListEnd
};
/** @type {Construct} */

const $msOb$var$listItemPrefixWhitespaceConstruct = {
  tokenize: $msOb$var$tokenizeListItemPrefixWhitespace,
  partial: true
};
/** @type {Construct} */

const $msOb$var$indentConstruct = {
  tokenize: $msOb$var$tokenizeIndent,
  partial: true
};
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function $msOb$var$tokenizeListStart(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? 'listUnordered' : 'listOrdered');

    if (kind === 'listUnordered' ? !self.containerState.marker || code === self.containerState.marker : $nPGJ$export$asciiDigit(code)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }

      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix');
        return code === 42 || code === 45 ? effects.check($ishr$export$thematicBreak, nok, atMarker)(code) : atMarker(code);
      }

      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix');
        effects.enter('listItemValue');
        return inside(code);
      }
    }

    return nok(code);
  }
  /** @type {State} */


  function inside(code) {
    if ($nPGJ$export$asciiDigit(code) && ++size < 10) {
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
   **/


  function atMarker(code) {
    effects.enter('listItemMarker');
    effects.consume(code);
    effects.exit('listItemMarker');
    self.containerState.marker = self.containerState.marker || code;
    return effects.check($jK8i$export$blankLine, // Can’t be empty when interrupting.
    self.interrupt ? nok : onBlank, effects.attempt($msOb$var$listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  /** @type {State} */


  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }
  /** @type {State} */


  function otherPrefix(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace');
      effects.consume(code);
      effects.exit('listItemPrefixWhitespace');
      return endOfPrefix;
    }

    return nok(code);
  }
  /** @type {State} */


  function endOfPrefix(code) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
    return ok(code);
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */


function $msOb$var$tokenizeListContinuation(effects, ok, nok) {
  const self = this;
  self.containerState._closeFlow = undefined;
  return effects.check($jK8i$export$blankLine, onBlank, notBlank);
  /** @type {State} */

  function onBlank(code) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine; // We have a blank line.
    // Still, try to consume at most the items size.

    return $CdtX$export$factorySpace(effects, ok, 'listItemIndent', self.containerState.size + 1)(code);
  }
  /** @type {State} */


  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !$nPGJ$export$markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code);
    }

    self.containerState.furtherBlankLines = undefined;
    self.containerState.initialBlankLine = undefined;
    return effects.attempt($msOb$var$indentConstruct, ok, notInCurrentItem)(code);
  }
  /** @type {State} */


  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true; // As we’re closing flow, we’re no longer interrupting.

    self.interrupt = undefined;
    return $CdtX$export$factorySpace(effects, effects.attempt($msOb$export$list, ok, nok), 'linePrefix', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */


function $msOb$var$tokenizeIndent(effects, ok, nok) {
  const self = this;
  return $CdtX$export$factorySpace(effects, afterPrefix, 'listItemIndent', self.containerState.size + 1);
  /** @type {State} */

  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'listItemIndent' && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
  }
}
/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */


function $msOb$var$tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */


function $msOb$var$tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this;
  return $CdtX$export$factorySpace(effects, afterPrefix, 'listItemPrefixWhitespace', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4 + 1);
  /** @type {State} */

  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return !$nPGJ$export$markdownSpace(code) && tail && tail[1].type === 'listItemPrefixWhitespace' ? ok(code) : nok(code);
  }
}

/** @type {Construct} */
const $YT26$export$setextUnderline = {
  name: 'setextUnderline',
  tokenize: $YT26$var$tokenizeSetextUnderline,
  resolveTo: $YT26$var$resolveToSetextUnderline
};
/** @type {Resolver} */

function $YT26$var$resolveToSetextUnderline(events, context) {
  let index = events.length;
  /** @type {number|undefined} */

  let content;
  /** @type {number|undefined} */

  let text;
  /** @type {number|undefined} */

  let definition; // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.

  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index;
        break;
      }

      if (events[index][1].type === 'paragraph') {
        text = index;
      }
    } // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index;
      }
    }
  }

  const heading = {
    type: 'setextHeading',
    start: Object.assign({}, events[text][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }; // Change the paragraph to setext heading text.

  events[text][1].type = 'setextHeadingText'; // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.

  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = Object.assign({}, events[definition][1].end);
  } else {
    events[content][1] = heading;
  } // Add the heading exit at the end.


  events.push(['exit', heading, context]);
  return events;
}
/** @type {Tokenizer} */


function $YT26$var$tokenizeSetextUnderline(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  /** @type {NonNullable<Code>} */

  let marker;
  /** @type {boolean} */

  let paragraph; // Find an opening.

  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (self.events[index][1].type !== 'lineEnding' && self.events[index][1].type !== 'linePrefix' && self.events[index][1].type !== 'content') {
      paragraph = self.events[index][1].type === 'paragraph';
      break;
    }
  }

  return start;
  /** @type {State} */

  function start(code) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine');
      effects.enter('setextHeadingLineSequence');
      marker = code;
      return closingSequence(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence;
    }

    effects.exit('setextHeadingLineSequence');
    return $CdtX$export$factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code);
  }
  /** @type {State} */


  function closingSequenceEnd(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      effects.exit('setextHeadingLine');
      return ok(code);
    }

    return nok(code);
  }
}

/** @type {InitialConstruct} */
const $uZ5V$export$flow = {
  tokenize: $uZ5V$var$initializeFlow
};
/** @type {Initializer} */

function $uZ5V$var$initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt( // Try to parse a blank line.
  $jK8i$export$blankLine, atBlankEnding, // Try to parse initial flow (essentially, only code).
  effects.attempt(this.parser.constructs.flowInitial, afterConstruct, $CdtX$export$factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt($iztb$export$content, afterConstruct)), 'linePrefix')));
  return initial;
  /** @type {State} */

  function atBlankEnding(code) {
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
  /** @type {State} */


  function afterConstruct(code) {
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
}

/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
const $RhUQ$export$resolver = {
  resolveAll: $RhUQ$var$createResolver()
};
const $RhUQ$export$string = $RhUQ$var$initializeFactory('string');
const $RhUQ$export$text = $RhUQ$var$initializeFactory('text');
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */

function $RhUQ$var$initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: $RhUQ$var$createResolver(field === 'text' ? $RhUQ$var$resolveAllLineSuffixes : undefined)
  };
  /** @type {Initializer} */

  function initializeText(effects) {
    const self = this;
    const constructs = this.parser.constructs[field];
    const text = effects.attempt(constructs, start, notText);
    return start;
    /** @type {State} */

    function start(code) {
      return atBreak(code) ? text(code) : notText(code);
    }
    /** @type {State} */


    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return;
      }

      effects.enter('data');
      effects.consume(code);
      return data;
    }
    /** @type {State} */


    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code);
      } // Data.


      effects.consume(code);
      return data;
    }
    /**
     * @param {Code} code
     * @returns {boolean}
     */


    function atBreak(code) {
      if (code === null) {
        return true;
      }

      const list = constructs[code];
      let index = -1;

      if (list) {
        while (++index < list.length) {
          const item = list[index];

          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }

      return false;
    }
  }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */


function $RhUQ$var$createResolver(extraResolver) {
  return resolveAllText;
  /** @type {Resolver} */

  function resolveAllText(events, context) {
    let index = -1;
    /** @type {number|undefined} */

    let enter; // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.

    while (++index <= events.length) {
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
 */


function $RhUQ$var$resolveAllLineSuffixes(events, context) {
  let eventIndex = -1;

  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === 'lineEnding') && events[eventIndex - 1][1].type === 'data') {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      /** @type {boolean|undefined} */

      let tabs;

      while (index--) {
        const chunk = chunks[index];

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }

          if (bufferIndex) break;
          bufferIndex = -1;
        } // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {// Empty
        } else {
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
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);

        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ['enter', token, context], ['exit', token, context]);
          eventIndex += 2;
        }
      }

      eventIndex++;
    }
  }

  return events;
}

/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
 * @returns {TokenizeContext}
 */
function $I59B$export$createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  let point = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  /** @type {Record<string, number>} */

  const columnStart = {};
  /** @type {Construct[]} */

  const resolveAllConstructs = [];
  /** @type {Chunk[]} */

  let chunks = [];
  /** @type {Token[]} */

  let stack = [];
  /** @type {boolean|undefined} */

  let consumed = true;
  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */

  const effects = {
    consume,
    enter,
    exit,
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
   */

  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  /**
   * The state function.
   *
   * @type {State|void}
   */

  let state = initialize.tokenize.call(context, effects);
  /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */

  let expectedCode;

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }

  return context;
  /** @type {TokenizeContext['write']} */

  function write(slice) {
    chunks = $pAhx$export$push(chunks, slice);
    main(); // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return [];
    }

    addResult(initialize, 0); // Otherwise, resolve, and exit.

    context.events = $KETX$export$resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  } //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */


  function sliceSerialize(token, expandTabs) {
    return $I59B$var$serializeChunks(sliceStream(token), expandTabs);
  }
  /** @type {TokenizeContext['sliceStream']} */


  function sliceStream(token) {
    return $I59B$var$sliceChunks(chunks, token);
  }
  /** @type {TokenizeContext['now']} */


  function now() {
    return Object.assign({}, point);
  }
  /** @type {TokenizeContext['defineSkip']} */


  function defineSkip(value) {
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
   */


  function main() {
    /** @type {number} */
    let chunkIndex;

    while (point._index < chunks.length) {
      const chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

      if (typeof chunk === 'string') {
        chunkIndex = point._index;

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }

        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
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
   */


  function go(code) {
    consumed = undefined;
    expectedCode = code;
    state = state(code);
  }
  /** @type {Effects['consume']} */


  function consume(code) {
    if ($nPGJ$export$markdownLineEnding(code)) {
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
      point._bufferIndex++; // At end of string chunk.
      // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
      // strings.

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    } // Expose the previous character.


    context.previous = code; // Mark as consumed.

    consumed = true;
  }
  /** @type {Effects['enter']} */


  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token;
  }
  /** @type {Effects['exit']} */


  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token;
  }
  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */


  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */


  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */


  function constructFactory(onreturn, fields) {
    return hook;
    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Construct[]|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */

    function hook(constructs, returnState, bogusState) {
      /** @type {Construct[]} */
      let listOfConstructs;
      /** @type {number} */

      let constructIndex;
      /** @type {Construct} */

      let currentConstruct;
      /** @type {Info} */

      let info;
      return Array.isArray(constructs) ?
      /* c8 ignore next 1 */
      handleListOfConstructs(constructs) : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
      ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */

      function handleMapOfConstructs(map) {
        return start;
        /** @type {State} */

        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [// To do: add more extension tests.

          /* c8 ignore next 2 */
          ...(Array.isArray(def) ? def : def ? [def] : []), ...(Array.isArray(all) ? all : all ? [all] : [])];
          return handleListOfConstructs(list)(code);
        }
      }
      /**
       * Handle a list of construct.
       *
       * @param {Construct[]} list
       * @returns {State}
       */


      function handleListOfConstructs(list) {
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
       */


      function handleConstruct(construct) {
        return start;
        /** @type {State} */

        function start(code) {
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

          return construct.tokenize.call( // If we do have fields, create an object w/ `context` as its
          // prototype.
          // This allows a “live binding”, which is needed for `interrupt`.
          fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
        }
      }
      /** @type {State} */


      function ok(code) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      /** @type {State} */


      function nok(code) {
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
   */


  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }

    if (construct.resolve) {
      $pAhx$export$splice(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  /**
   * Store state.
   *
   * @returns {Info}
   */


  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    /**
     * Restore state.
     *
     * @returns {void}
     */

    function restore() {
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
   */


  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Chunk[]} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Chunk[]}
 */


function $I59B$var$sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  /** @type {Chunk[]} */

  let view;

  if (startIndex === endIndex) {
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);

    if (startBufferIndex > -1) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view[0] = view[0].slice(startBufferIndex);
    }

    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }

  return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Chunk[]} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */


function $I59B$var$serializeChunks(chunks, expandTabs) {
  let index = -1;
  /** @type {string[]} */

  const result = [];
  /** @type {boolean|undefined} */

  let atTab;

  while (++index < chunks.length) {
    const chunk = chunks[index];
    /** @type {string} */

    let value;

    if (typeof chunk === 'string') {
      value = chunk;
    } else switch (chunk) {
      case -5:
        {
          value = '\r';
          break;
        }

      case -4:
        {
          value = '\n';
          break;
        }

      case -3:
        {
          value = '\r' + '\n';
          break;
        }

      case -2:
        {
          value = expandTabs ? ' ' : '\t';
          break;
        }

      case -1:
        {
          if (!expandTabs && atTab) continue;
          value = ' ';
          break;
        }

      default:
        {
          // Currently only replacement character.
          value = String.fromCharCode(chunk);
        }
    }

    atTab = chunk === -2;
    result.push(value);
  }

  return result.join('');
}

// ASSET: ../../../micromark/lib/constructs.js
var $utzc$exports = {};

/** @type {Extension['document']} */
const $utzc$export$document = {
  [42]: $msOb$export$list,
  [43]: $msOb$export$list,
  [45]: $msOb$export$list,
  [48]: $msOb$export$list,
  [49]: $msOb$export$list,
  [50]: $msOb$export$list,
  [51]: $msOb$export$list,
  [52]: $msOb$export$list,
  [53]: $msOb$export$list,
  [54]: $msOb$export$list,
  [55]: $msOb$export$list,
  [56]: $msOb$export$list,
  [57]: $msOb$export$list,
  [62]: $nevD$export$blockQuote
};
/** @type {Extension['contentInitial']} */

$utzc$exports.document = $utzc$export$document;
const $utzc$export$contentInitial = {
  [91]: $jENv$export$definition
};
/** @type {Extension['flowInitial']} */

$utzc$exports.contentInitial = $utzc$export$contentInitial;
const $utzc$export$flowInitial = {
  [-2]: $Jake$export$codeIndented,
  [-1]: $Jake$export$codeIndented,
  [32]: $Jake$export$codeIndented
};
/** @type {Extension['flow']} */

$utzc$exports.flowInitial = $utzc$export$flowInitial;
const $utzc$export$flow = {
  [35]: $uQc4$export$headingAtx,
  [42]: $ishr$export$thematicBreak,
  [45]: [$YT26$export$setextUnderline, $ishr$export$thematicBreak],
  [60]: $bU8t$export$htmlFlow,
  [61]: $YT26$export$setextUnderline,
  [95]: $ishr$export$thematicBreak,
  [96]: $Wq01$export$codeFenced,
  [126]: $Wq01$export$codeFenced
};
/** @type {Extension['string']} */

$utzc$exports.flow = $utzc$export$flow;
const $utzc$export$string = {
  [38]: $m1Uo$export$characterReference,
  [92]: $p8vB$export$characterEscape
};
/** @type {Extension['text']} */

$utzc$exports.string = $utzc$export$string;
const $utzc$export$text = {
  [-5]: $oQtw$export$lineEnding,
  [-4]: $oQtw$export$lineEnding,
  [-3]: $oQtw$export$lineEnding,
  [33]: $lusR$export$labelStartImage,
  [38]: $m1Uo$export$characterReference,
  [42]: $PgCJ$export$attention,
  [60]: [$pPAW$export$autolink, $MqEf$export$htmlText],
  [91]: $djxC$export$labelStartLink,
  [92]: [$nEkx$export$hardBreakEscape, $p8vB$export$characterEscape],
  [93]: $YAW5$export$labelEnd,
  [95]: $PgCJ$export$attention,
  [96]: $K3XP$export$codeText
};
/** @type {Extension['insideSpan']} */

$utzc$exports.text = $utzc$export$text;
const $utzc$export$insideSpan = {
  null: [$PgCJ$export$attention, $RhUQ$export$resolver]
};
/** @type {Extension['disable']} */

$utzc$exports.insideSpan = $utzc$export$insideSpan;
const $utzc$export$disable = {
  null: []
};
$utzc$exports.disable = $utzc$export$disable;

/**
 * @param {ParseOptions} [options]
 * @returns {ParseContext}
 */
function $ancV$export$parse(options = {}) {
  /** @type {FullNormalizedExtension} */
  // @ts-expect-error `defaultConstructs` is full, so the result will be too.
  const constructs = $L3gV$export$combineExtensions( // @ts-expect-error Same as above.
  [$utzc$exports].concat(options.extensions || []));
  /** @type {ParseContext} */

  const parser = {
    defined: [],
    lazy: {},
    constructs,
    content: create($M9jy$export$content),
    document: create($AqAQ$export$document),
    flow: create($uZ5V$export$flow),
    string: create($RhUQ$export$string),
    text: create($RhUQ$export$text)
  };
  return parser;
  /**
   * @param {InitialConstruct} initial
   */

  function create(initial) {
    return creator;
    /** @type {Create} */

    function creator(from) {
      return $I59B$export$createTokenizer(parser, initial, from);
    }
  }
}

/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Chunk[]}
 */
const $nZ1u$var$search = /[\0\t\n\r]/g;
/**
 * @returns {Preprocessor}
 */

function $nZ1u$export$preprocess() {
  let column = 1;
  let buffer = '';
  /** @type {boolean|undefined} */

  let start = true;
  /** @type {boolean|undefined} */

  let atCarriageReturn;
  return preprocessor;
  /** @type {Preprocessor} */

  function preprocessor(value, encoding, end) {
    /** @type {Chunk[]} */
    const chunks = [];
    /** @type {RegExpMatchArray|null} */

    let match;
    /** @type {number} */

    let next;
    /** @type {number} */

    let startPosition;
    /** @type {number} */

    let endPosition;
    /** @type {Code} */

    let code; // @ts-expect-error `Buffer` does allow an encoding.

    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = '';

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }

      start = undefined;
    }

    while (startPosition < value.length) {
      $nZ1u$var$search.lastIndex = startPosition;
      match = $nZ1u$var$search.exec(value);
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

        switch (code) {
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

              while (column++ < next) chunks.push(-1);

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
}

/**
 * @param {Event[]} events
 * @returns {Event[]}
 */
function $ASp9$export$postprocess(events) {
  while (!$SX27$export$subtokenize(events)) {// Empty
  }

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
 */
function $TR5p$export$decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base);

  if ( // C0 except for HT, LF, FF, CR, space
  code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || // Out of range
  code > 1114111) {
    return '\uFFFD';
  }

  return String.fromCharCode(code);
}

const $ITvO$var$own = {}.hasOwnProperty;
/**
 * @param value Markdown to parse (`string` or `Buffer`).
 * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
 * @param [options] Configuration
 */

const $ITvO$export$fromMarkdown =
/**
 * @type {(
 *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
 *   ((value: Value, options?: Options) => Root)
 * )}
 */

/**
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {Options} [options]
 * @returns {Root}
 */
function (value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding;
    encoding = undefined;
  }

  return $ITvO$var$compiler(options)($ASp9$export$postprocess($ancV$export$parse(options).document().write($nZ1u$export$preprocess()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options} [options]
 */


function $ITvO$var$compiler(options = {}) {
  /** @type {NormalizedExtension} */
  // @ts-expect-error: our base has all required fields, so the result will too.
  const config = $ITvO$var$configure({
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
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
  }, options.mdastExtensions || []);
  /** @type {CompileData} */

  const data = {};
  return compile;
  /**
   * @param {Array.<Event>} events
   * @returns {Root}
   */

  function compile(events) {
    /** @type {Root} */
    let tree = {
      type: 'root',
      children: []
    };
    /** @type {CompileContext['stack']} */

    const stack = [tree];
    /** @type {CompileContext['tokenStack']} */

    const tokenStack = [];
    /** @type {Array.<number>} */

    const listStack = [];
    /** @type {Omit<CompileContext, 'sliceSerialize'>} */

    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      buffer,
      resume,
      setData,
      getData
    };
    let index = -1;

    while (++index < events.length) {
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

    while (++index < events.length) {
      const handler = config[events[index][0]];

      if ($ITvO$var$own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(Object.assign({
          sliceSerialize: events[index][2].sliceSerialize
        }, context), events[index][1]);
      }
    }

    if (tokenStack.length > 0) {
      throw new Error('Cannot close document, a token (`' + tokenStack[tokenStack.length - 1].type + '`, ' + $EYTY$export$stringifyPosition({
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

    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree;
    }

    return tree;
  }
  /**
   * @param {Array.<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */


  function prepareList(events, start, length) {
    let index = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    /** @type {Token|undefined} */

    let listItem;
    /** @type {number|undefined} */

    let lineIndex;
    /** @type {number|undefined} */

    let firstBlankLineIndex;
    /** @type {boolean|undefined} */

    let atMarker;

    while (++index <= length) {
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
      } else if (event[1].type === 'linePrefix' || event[1].type === 'listItemValue' || event[1].type === 'listItemMarker' || event[1].type === 'listItemPrefix' || event[1].type === 'listItemPrefixWhitespace') {// Empty.
      } else {
        atMarker = undefined;
      }

      if (!containerBalance && event[0] === 'enter' && event[1].type === 'listItemPrefix' || containerBalance === -1 && event[0] === 'exit' && (event[1].type === 'listUnordered' || event[1].type === 'listOrdered')) {
        if (listItem) {
          let tailIndex = index;
          lineIndex = undefined;

          while (tailIndex--) {
            const tailEvent = events[tailIndex];

            if (tailEvent[1].type === 'lineEnding' || tailEvent[1].type === 'lineEndingBlank') {
              if (tailEvent[0] === 'exit') continue;

              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank';
                listSpread = true;
              }

              tailEvent[1].type = 'lineEnding';
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === 'linePrefix' || tailEvent[1].type === 'blockQuotePrefix' || tailEvent[1].type === 'blockQuotePrefixWhitespace' || tailEvent[1].type === 'blockQuoteMarker' || tailEvent[1].type === 'listItemIndent') {// Empty
            } else {
              break;
            }
          }

          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            // @ts-expect-error Patched.
            listItem._spread = true;
          } // Fix position.


          listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        } // Create a new list item.


        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            // @ts-expect-error Patched
            _spread: false,
            start: Object.assign({}, event[1].start)
          }; // @ts-expect-error: `listItem` is most definitely defined, TS...

          events.splice(index, 0, ['enter', listItem, event[2]]);
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
   */


  function setData(key, value) {
    data[key] = value;
  }
  /**
   * @type {CompileContext['getData']}
   * @template {string} K
   * @param {K} key
   * @returns {CompileData[K]}
   */


  function getData(key) {
    return data[key];
  }
  /**
   * @param {Point} d
   * @returns {Point}
   */


  function point(d) {
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
   */


  function opener(create, and) {
    return open;
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }
  /** @type {CompileContext['buffer']} */


  function buffer() {
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
   */


  function enter(node, token) {
    /** @type {Parent} */
    // @ts-expect-error: Assume parent.
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push(token); // @ts-expect-error: `end` will be patched later.

    node.position = {
      start: point(token.start)
    };
    return node;
  }
  /**
   * @param {Handle} [and]
   * @returns {Handle}
   */


  function closer(and) {
    return close;
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }
  /** @type {CompileContext['exit']} */


  function exit(token) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();

    if (!open) {
      throw new Error('Cannot close `' + token.type + '` (' + $EYTY$export$stringifyPosition({
        start: token.start,
        end: token.end
      }) + '): it’s not open');
    } else if (open.type !== token.type) {
      throw new Error('Cannot close `' + token.type + '` (' + $EYTY$export$stringifyPosition({
        start: token.start,
        end: token.end
      }) + '): a different token (`' + open.type + '`, ' + $EYTY$export$stringifyPosition({
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
   */


  function resume() {
    return $DRco$export$toString(this.stack.pop());
  } //
  // Handlers.
  //

  /** @type {Handle} */


  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }
  /** @type {Handle} */


  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(token), 10);
      setData('expectingFirstListItemValue');
    }
  }
  /** @type {Handle} */


  function onexitcodefencedfenceinfo() {
    const data = this.resume();
    this.stack[this.stack.length - 1].lang = data;
  }
  /** @type {Handle} */


  function onexitcodefencedfencemeta() {
    const data = this.resume();
    this.stack[this.stack.length - 1].meta = data;
  }
  /** @type {Handle} */


  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return;
    this.buffer();
    setData('flowCodeInside', true);
  }
  /** @type {Handle} */


  function onexitcodefenced() {
    const data = this.resume();
    this.stack[this.stack.length - 1].value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    setData('flowCodeInside');
  }
  /** @type {Handle} */


  function onexitcodeindented() {
    const data = this.resume();
    this.stack[this.stack.length - 1].value = data.replace(/(\r?\n|\r)$/g, '');
  }
  /** @type {Handle} */


  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    const label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = $XmO1$export$normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  /** @type {Handle} */


  function onexitdefinitiontitlestring() {
    const data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }
  /** @type {Handle} */


  function onexitdefinitiondestinationstring() {
    const data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }
  /** @type {Handle} */


  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).length;
    }
  }
  /** @type {Handle} */


  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }
  /** @type {Handle} */


  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  /** @type {Handle} */


  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }
  /** @type {Handle} */


  function onenterdata(token) {
    /** @type {Parent} */
    // @ts-expect-error: assume parent.
    const parent = this.stack[this.stack.length - 1];
    /** @type {Node} */
    // @ts-expect-error: assume child.

    let tail = parent.children[parent.children.length - 1];

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text(); // @ts-expect-error: we’ll add `end` later.

      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }

    this.stack.push(tail);
  }
  /** @type {Handle} */


  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */


  function onexitlineending(token) {
    /** @type {Parent} */
    // @ts-expect-error: supposed to be a parent.
    const context = this.stack[this.stack.length - 1]; // If we’re at a hard break, include the line ending in there.

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
  /** @type {Handle} */


  function onexithardbreak() {
    setData('atHardBreak', true);
  }
  /** @type {Handle} */


  function onexithtmlflow() {
    const data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }
  /** @type {Handle} */


  function onexithtmltext() {
    const data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }
  /** @type {Handle} */


  function onexitcodetext() {
    const data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }
  /** @type {Handle} */


  function onexitlink() {
    const context = this.stack[this.stack.length - 1]; // To do: clean.

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
  /** @type {Handle} */


  function onexitimage() {
    const context = this.stack[this.stack.length - 1]; // To do: clean.

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
  /** @type {Handle} */


  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = $XmO1$export$normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  /** @type {Handle} */


  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    this.stack[this.stack.length - 1].label = value; // Assume a reference.

    setData('inReference', true);

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children;
    } else {
      this.stack[this.stack.length - 1].alt = value;
    }
  }
  /** @type {Handle} */


  function onexitresourcedestinationstring() {
    const data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }
  /** @type {Handle} */


  function onexitresourcetitlestring() {
    const data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }
  /** @type {Handle} */


  function onexitresource() {
    setData('inReference');
  }
  /** @type {Handle} */


  function onenterreference() {
    setData('referenceType', 'collapsed');
  }
  /** @type {Handle} */


  function onexitreferencestring(token) {
    const label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = $XmO1$export$normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData('referenceType', 'full');
  }
  /** @type {Handle} */


  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }
  /** @type {Handle} */


  function onexitcharacterreferencevalue(token) {
    const data = this.sliceSerialize(token);
    const type = getData('characterReferenceType');
    /** @type {string} */

    let value;

    if (type) {
      value = $TR5p$export$decodeNumericCharacterReference(data, type === 'characterReferenceMarkerNumeric' ? 10 : 16);
      setData('characterReferenceType');
    } else {
      // @ts-expect-error `decodeEntity` can return false for invalid named
      // character references, but everything we’ve tokenized is valid.
      value = $S7VQ$export$decodeEntity(data);
    }

    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */


  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
  }
  /** @type {Handle} */


  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = 'mailto:' + this.sliceSerialize(token);
  } //
  // Creaters.
  //

  /** @returns {Blockquote} */


  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    };
  }
  /** @returns {Code} */


  function codeFlow() {
    // @ts-expect-error: we’ve always used `null`.
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    };
  }
  /** @returns {InlineCode} */


  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    };
  }
  /** @returns {Definition} */


  function definition() {
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
  /** @returns {Emphasis} */


  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    };
  }
  /** @returns {Heading} */


  function heading() {
    // @ts-expect-error `depth` will be set later.
    return {
      type: 'heading',
      depth: undefined,
      children: []
    };
  }
  /** @returns {Break} */


  function hardBreak() {
    return {
      type: 'break'
    };
  }
  /** @returns {HTML} */


  function html() {
    return {
      type: 'html',
      value: ''
    };
  }
  /** @returns {Image} */


  function image() {
    // @ts-expect-error: we’ve always used `null`.
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    };
  }
  /** @returns {Link} */


  function link() {
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
   */


  function list(token) {
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
   */


  function listItem(token) {
    return {
      type: 'listItem',
      // @ts-expect-error Patched.
      spread: token._spread,
      // @ts-expect-error: we’ve always used `null`.
      checked: null,
      children: []
    };
  }
  /** @returns {Paragraph} */


  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    };
  }
  /** @returns {Strong} */


  function strong() {
    return {
      type: 'strong',
      children: []
    };
  }
  /** @returns {Text} */


  function text() {
    return {
      type: 'text',
      value: ''
    };
  }
  /** @returns {ThematicBreak} */


  function thematicBreak() {
    return {
      type: 'thematicBreak'
    };
  }
}
/**
 * @param {Extension} combined
 * @param {Array.<Extension|Array.<Extension>>} extensions
 * @returns {Extension}
 */


function $ITvO$var$configure(combined, extensions) {
  let index = -1;

  while (++index < extensions.length) {
    const value = extensions[index];

    if (Array.isArray(value)) {
      $ITvO$var$configure(combined, value);
    } else {
      $ITvO$var$extension(combined, value);
    }
  }

  return combined;
}
/**
 * @param {Extension} combined
 * @param {Extension} extension
 * @returns {void}
 */


function $ITvO$var$extension(combined, extension) {
  /** @type {string} */
  let key;

  for (key in extension) {
    if ($ITvO$var$own.call(extension, key)) {
      const list = key === 'canContainEols' || key === 'transforms';
      const maybe = $ITvO$var$own.call(combined, key) ? combined[key] : undefined;
      /* c8 ignore next */

      const left = maybe || (combined[key] = list ? [] : {});
      const right = extension[key];

      if (right) {
        if (list) {
          // @ts-expect-error: `left` is an array.
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}

/** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */
function $Thyu$export$default(options) {
  /** @type {import('unified').ParserFunction<Root>} */
  const parser = doc => {
    // Assume options.
    const settings = this.data('settings');
    return $ITvO$export$fromMarkdown(doc, Object.assign({}, settings, options, {
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

const $O1uF$var$www = {
  tokenize: $O1uF$var$tokenizeWww,
  partial: true
};
const $O1uF$var$domain = {
  tokenize: $O1uF$var$tokenizeDomain,
  partial: true
};
const $O1uF$var$path = {
  tokenize: $O1uF$var$tokenizePath,
  partial: true
};
const $O1uF$var$punctuation = {
  tokenize: $O1uF$var$tokenizePunctuation,
  partial: true
};
const $O1uF$var$namedCharacterReference = {
  tokenize: $O1uF$var$tokenizeNamedCharacterReference,
  partial: true
};
const $O1uF$var$wwwAutolink = {
  tokenize: $O1uF$var$tokenizeWwwAutolink,
  previous: $O1uF$var$previousWww
};
const $O1uF$var$httpAutolink = {
  tokenize: $O1uF$var$tokenizeHttpAutolink,
  previous: $O1uF$var$previousHttp
};
const $O1uF$var$emailAutolink = {
  tokenize: $O1uF$var$tokenizeEmailAutolink,
  previous: $O1uF$var$previousEmail
};
/** @type {ConstructRecord} */

const $O1uF$var$text = {};
/** @type {Extension} */

const $O1uF$export$gfmAutolinkLiteral = {
  text: $O1uF$var$text
};
let $O1uF$var$code = 48; // Add alphanumerics.

while ($O1uF$var$code < 123) {
  $O1uF$var$text[$O1uF$var$code] = $O1uF$var$emailAutolink;
  $O1uF$var$code++;
  if ($O1uF$var$code === 58) $O1uF$var$code = 65;else if ($O1uF$var$code === 91) $O1uF$var$code = 97;
}

$O1uF$var$text[43] = $O1uF$var$emailAutolink;
$O1uF$var$text[45] = $O1uF$var$emailAutolink;
$O1uF$var$text[46] = $O1uF$var$emailAutolink;
$O1uF$var$text[95] = $O1uF$var$emailAutolink;
$O1uF$var$text[72] = [$O1uF$var$emailAutolink, $O1uF$var$httpAutolink];
$O1uF$var$text[104] = [$O1uF$var$emailAutolink, $O1uF$var$httpAutolink];
$O1uF$var$text[87] = [$O1uF$var$emailAutolink, $O1uF$var$wwwAutolink];
$O1uF$var$text[119] = [$O1uF$var$emailAutolink, $O1uF$var$wwwAutolink];
/** @type {Tokenizer} */

function $O1uF$var$tokenizeEmailAutolink(effects, ok, nok) {
  const self = this;
  /** @type {boolean} */

  let hasDot;
  /** @type {boolean|undefined} */

  let hasDigitInLastSegment;
  return start;
  /** @type {State} */

  function start(code) {
    if (!$O1uF$var$gfmAtext(code) || !$O1uF$var$previousEmail(self.previous) || $O1uF$var$previousUnbalanced(self.events)) {
      return nok(code);
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkEmail');
    return atext(code);
  }
  /** @type {State} */


  function atext(code) {
    if ($O1uF$var$gfmAtext(code)) {
      effects.consume(code);
      return atext;
    }

    if (code === 64) {
      effects.consume(code);
      return label;
    }

    return nok(code);
  }
  /** @type {State} */


  function label(code) {
    if (code === 46) {
      return effects.check($O1uF$var$punctuation, done, dotContinuation)(code);
    }

    if (code === 45 || code === 95) {
      return effects.check($O1uF$var$punctuation, nok, dashOrUnderscoreContinuation)(code);
    }

    if ($nPGJ$export$asciiAlphanumeric(code)) {
      if (!hasDigitInLastSegment && $nPGJ$export$asciiDigit(code)) {
        hasDigitInLastSegment = true;
      }

      effects.consume(code);
      return label;
    }

    return done(code);
  }
  /** @type {State} */


  function dotContinuation(code) {
    effects.consume(code);
    hasDot = true;
    hasDigitInLastSegment = undefined;
    return label;
  }
  /** @type {State} */


  function dashOrUnderscoreContinuation(code) {
    effects.consume(code);
    return afterDashOrUnderscore;
  }
  /** @type {State} */


  function afterDashOrUnderscore(code) {
    if (code === 46) {
      return effects.check($O1uF$var$punctuation, nok, dotContinuation)(code);
    }

    return label(code);
  }
  /** @type {State} */


  function done(code) {
    if (hasDot && !hasDigitInLastSegment) {
      effects.exit('literalAutolinkEmail');
      effects.exit('literalAutolink');
      return ok(code);
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function $O1uF$var$tokenizeWwwAutolink(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
    if (code !== 87 && code !== 119 || !$O1uF$var$previousWww(self.previous) || $O1uF$var$previousUnbalanced(self.events)) {
      return nok(code);
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkWww'); // For `www.` we check instead of attempt, because when it matches, GH
    // treats it as part of a domain (yes, it says a valid domain must come
    // after `www.`, but that’s not how it’s implemented by them).

    return effects.check($O1uF$var$www, effects.attempt($O1uF$var$domain, effects.attempt($O1uF$var$path, done), nok), nok)(code);
  }
  /** @type {State} */


  function done(code) {
    effects.exit('literalAutolinkWww');
    effects.exit('literalAutolink');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function $O1uF$var$tokenizeHttpAutolink(effects, ok, nok) {
  const self = this;
  return start;
  /** @type {State} */

  function start(code) {
    if (code !== 72 && code !== 104 || !$O1uF$var$previousHttp(self.previous) || $O1uF$var$previousUnbalanced(self.events)) {
      return nok(code);
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkHttp');
    effects.consume(code);
    return t1;
  }
  /** @type {State} */


  function t1(code) {
    if (code === 84 || code === 116) {
      effects.consume(code);
      return t2;
    }

    return nok(code);
  }
  /** @type {State} */


  function t2(code) {
    if (code === 84 || code === 116) {
      effects.consume(code);
      return p;
    }

    return nok(code);
  }
  /** @type {State} */


  function p(code) {
    if (code === 80 || code === 112) {
      effects.consume(code);
      return s;
    }

    return nok(code);
  }
  /** @type {State} */


  function s(code) {
    if (code === 83 || code === 115) {
      effects.consume(code);
      return colon;
    }

    return colon(code);
  }
  /** @type {State} */


  function colon(code) {
    if (code === 58) {
      effects.consume(code);
      return slash1;
    }

    return nok(code);
  }
  /** @type {State} */


  function slash1(code) {
    if (code === 47) {
      effects.consume(code);
      return slash2;
    }

    return nok(code);
  }
  /** @type {State} */


  function slash2(code) {
    if (code === 47) {
      effects.consume(code);
      return after;
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    return code === null || $nPGJ$export$asciiControl(code) || $nPGJ$export$unicodeWhitespace(code) || $nPGJ$export$unicodePunctuation(code) ? nok(code) : effects.attempt($O1uF$var$domain, effects.attempt($O1uF$var$path, done), nok)(code);
  }
  /** @type {State} */


  function done(code) {
    effects.exit('literalAutolinkHttp');
    effects.exit('literalAutolink');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function $O1uF$var$tokenizeWww(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.consume(code);
    return w2;
  }
  /** @type {State} */


  function w2(code) {
    if (code === 87 || code === 119) {
      effects.consume(code);
      return w3;
    }

    return nok(code);
  }
  /** @type {State} */


  function w3(code) {
    if (code === 87 || code === 119) {
      effects.consume(code);
      return dot;
    }

    return nok(code);
  }
  /** @type {State} */


  function dot(code) {
    if (code === 46) {
      effects.consume(code);
      return after;
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    return code === null || $nPGJ$export$markdownLineEnding(code) ? nok(code) : ok(code);
  }
}
/** @type {Tokenizer} */


function $O1uF$var$tokenizeDomain(effects, ok, nok) {
  /** @type {boolean|undefined} */
  let hasUnderscoreInLastSegment;
  /** @type {boolean|undefined} */

  let hasUnderscoreInLastLastSegment;
  return domain;
  /** @type {State} */

  function domain(code) {
    if (code === 38) {
      return effects.check($O1uF$var$namedCharacterReference, done, punctuationContinuation)(code);
    }

    if (code === 46 || code === 95) {
      return effects.check($O1uF$var$punctuation, done, punctuationContinuation)(code);
    } // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
    // occur, which sounds like ASCII only, but they also support `www.點看.com`,
    // so that’s Unicode.
    // Instead of some new production for Unicode alphanumerics, markdown
    // already has that for Unicode punctuation and whitespace, so use those.


    if (code === null || $nPGJ$export$asciiControl(code) || $nPGJ$export$unicodeWhitespace(code) || code !== 45 && $nPGJ$export$unicodePunctuation(code)) {
      return done(code);
    }

    effects.consume(code);
    return domain;
  }
  /** @type {State} */


  function punctuationContinuation(code) {
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
  /** @type {State} */


  function done(code) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok(code);
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function $O1uF$var$tokenizePath(effects, ok) {
  let balance = 0;
  return inPath;
  /** @type {State} */

  function inPath(code) {
    if (code === 38) {
      return effects.check($O1uF$var$namedCharacterReference, ok, continuedPunctuation)(code);
    }

    if (code === 40) {
      balance++;
    }

    if (code === 41) {
      return effects.check($O1uF$var$punctuation, parenAtPathEnd, continuedPunctuation)(code);
    }

    if ($O1uF$var$pathEnd(code)) {
      return ok(code);
    }

    if ($O1uF$var$trailingPunctuation(code)) {
      return effects.check($O1uF$var$punctuation, ok, continuedPunctuation)(code);
    }

    effects.consume(code);
    return inPath;
  }
  /** @type {State} */


  function continuedPunctuation(code) {
    effects.consume(code);
    return inPath;
  }
  /** @type {State} */


  function parenAtPathEnd(code) {
    balance--;
    return balance < 0 ? ok(code) : continuedPunctuation(code);
  }
}
/** @type {Tokenizer} */


function $O1uF$var$tokenizeNamedCharacterReference(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.consume(code);
    return inside;
  }
  /** @type {State} */


  function inside(code) {
    if ($nPGJ$export$asciiAlpha(code)) {
      effects.consume(code);
      return inside;
    }

    if (code === 59) {
      effects.consume(code);
      return after;
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    // If the named character reference is followed by the end of the path, it’s
    // not continued punctuation.
    return $O1uF$var$pathEnd(code) ? ok(code) : nok(code);
  }
}
/** @type {Tokenizer} */


function $O1uF$var$tokenizePunctuation(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.consume(code);
    return after;
  }
  /** @type {State} */


  function after(code) {
    // Check the next.
    if ($O1uF$var$trailingPunctuation(code)) {
      effects.consume(code);
      return after;
    } // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.


    return $O1uF$var$pathEnd(code) ? ok(code) : nok(code);
  }
}
/**
 * @param {Code} code
 * @returns {boolean}
 */


function $O1uF$var$trailingPunctuation(code) {
  return code === 33 || code === 34 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 60 || code === 63 || code === 95 || code === 126;
}
/**
 * @param {Code} code
 * @returns {boolean}
 */


function $O1uF$var$pathEnd(code) {
  return code === null || code === 60 || $nPGJ$export$markdownLineEndingOrSpace(code);
}
/**
 * @param {Code} code
 * @returns {boolean}
 */


function $O1uF$var$gfmAtext(code) {
  return code === 43 || code === 45 || code === 46 || code === 95 || $nPGJ$export$asciiAlphanumeric(code);
}
/** @type {Previous} */


function $O1uF$var$previousWww(code) {
  return code === null || code === 40 || code === 42 || code === 95 || code === 126 || $nPGJ$export$markdownLineEndingOrSpace(code);
}
/** @type {Previous} */


function $O1uF$var$previousHttp(code) {
  return code === null || !$nPGJ$export$asciiAlpha(code);
}
/** @type {Previous} */


function $O1uF$var$previousEmail(code) {
  return code !== 47 && $O1uF$var$previousHttp(code);
}
/**
 * @param {Event[]} events
 * @returns {boolean}
 */


function $O1uF$var$previousUnbalanced(events) {
  let index = events.length;
  let result = false;

  while (index--) {
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

  if (events.length > 0 && !result) {
    // @ts-expect-error Mark the last token as “walked into” w/o finding
    // anything.
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }

  return result;
}

const $CyiE$var$characterReferences = {
  '"': 'quot',
  '&': 'amp',
  '<': 'lt',
  '>': 'gt'
};
/**
 * Encode only the dangerous HTML characters.
 *
 * This ensures that certain characters which have special meaning in HTML are
 * dealt with.
 * Technically, we can skip `>` and `"` in many cases, but CM includes them.
 *
 * @param {string} value
 * @returns {string}
 */

function $CyiE$export$encode(value) {
  return value.replace(/["&<>]/g, replace);
  /**
   * @param {string} value
   * @returns {string}
   */

  function replace(value) {
    // @ts-expect-error Hush, it’s fine.
    return '&' + $CyiE$var$characterReferences[value] + ';';
  }
}

/**
 * Make a value safe for injection as a URL.
 *
 * This encodes unsafe characters with percent-encoding and skips already
 * encoded sequences (see `normalizeUri` below).
 * Further unsafe characters are encoded as character references (see
 * `micromark-util-encode`).
 *
 * Then, a regex of allowed protocols can be given, in which case the URL is
 * sanitized.
 * For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`,
 * or `/^https?$/i` for `img[src]`.
 * If the URL includes an unknown protocol (one not matched by `protocol`, such
 * as a dangerous example, `javascript:`), the value is ignored.
 *
 * @param {string|undefined} url
 * @param {RegExp} [protocol]
 * @returns {string}
 */
function $yIyf$export$sanitizeUri(url, protocol) {
  const value = $CyiE$export$encode($yIyf$var$normalizeUri(url || ''));

  if (!protocol) {
    return value;
  }

  const colon = value.indexOf(':');
  const questionMark = value.indexOf('?');
  const numberSign = value.indexOf('#');
  const slash = value.indexOf('/');

  if ( // If there is no protocol, it’s relative.
  colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.
  protocol.test(value.slice(0, colon))) {
    return value;
  }

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
 */


function $yIyf$var$normalizeUri(value) {
  /** @type {string[]} */
  const result = [];
  let index = -1;
  let start = 0;
  let skip = 0;

  while (++index < value.length) {
    const code = value.charCodeAt(index);
    /** @type {string} */

    let replace = ''; // A correct percent encoded value.

    if (code === 37 && $nPGJ$export$asciiAlphanumeric(value.charCodeAt(index + 1)) && $nPGJ$export$asciiAlphanumeric(value.charCodeAt(index + 2))) {
      skip = 2;
    } // ASCII.
    else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
        replace = String.fromCharCode(code);
      }
    } // Astral.
    else if (code > 55295 && code < 57344) {
      const next = value.charCodeAt(index + 1); // A correct surrogate pair.

      if (code < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code, next);
        skip = 1;
      } // Lone surrogate.
      else {
        replace = '\uFFFD';
      }
    } // Unicode.
    else {
      replace = String.fromCharCode(code);
    }

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

/** @type {HtmlExtension} */
const $Newd$export$gfmAutolinkLiteralHtml = {
  exit: {
    literalAutolinkEmail: $Newd$var$literalAutolinkEmail,
    literalAutolinkHttp: $Newd$var$literalAutolinkHttp,
    literalAutolinkWww: $Newd$var$literalAutolinkWww
  }
};
/** @type {Handle} */

function $Newd$var$literalAutolinkWww(token) {
  $Newd$var$anchorFromToken.call(this, token, 'http://');
}
/** @type {Handle} */


function $Newd$var$literalAutolinkEmail(token) {
  $Newd$var$anchorFromToken.call(this, token, 'mailto:');
}
/** @type {Handle} */


function $Newd$var$literalAutolinkHttp(token) {
  $Newd$var$anchorFromToken.call(this, token);
}
/**
 * @this CompileContext
 * @param {Token} token
 * @param {string} [protocol]
 * @returns {void}
 */


function $Newd$var$anchorFromToken(token, protocol) {
  const url = this.sliceSerialize(token);
  this.tag('<a href="' + $yIyf$export$sanitizeUri((protocol || '') + url) + '">');
  this.raw(this.encode(url));
  this.tag('</a>');
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

/** @type {HtmlExtension} */
const $PfEX$export$gfmStrikethroughHtml = {
  enter: {
    strikethrough() {
      this.tag('<del>');
    }

  },
  exit: {
    strikethrough() {
      this.tag('</del>');
    }

  }
};

/**
 * @param {Options} [options]
 * @returns {Extension}
 */
function $n5wY$export$gfmStrikethrough(options = {}) {
  let single = options.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };

  if (single === null || single === undefined) {
    single = true;
  }

  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    }
  };
  /**
   * Take events and resolve strikethrough.
   *
   * @type {Resolver}
   */

  function resolveAllStrikethrough(events, context) {
    let index = -1;
    /** @type {Token} */

    let strikethrough;
    /** @type {Token} */

    let text;
    /** @type {number} */

    let open;
    /** @type {Event[]} */

    let nextEvents; // Walk through all events.

    while (++index < events.length) {
      // Find a token that can close.
      if (events[index][0] === 'enter' && events[index][1].type === 'strikethroughSequenceTemporary' && events[index][1]._close) {
        open = index; // Now walk back to find an opener.

        while (open--) {
          // Find a token that can open the closer.
          if (events[open][0] === 'exit' && events[open][1].type === 'strikethroughSequenceTemporary' && events[open][1]._open && // If the sizes are the same:
          events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index][1].type = 'strikethroughSequence';
            events[open][1].type = 'strikethroughSequence';
            strikethrough = {
              type: 'strikethrough',
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index][1].end)
            };
            text = {
              type: 'strikethroughText',
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index][1].start)
            }; // Opening.

            nextEvents = [['enter', strikethrough, context], ['enter', events[open][1], context], ['exit', events[open][1], context], ['enter', text, context]]; // Between.

            $pAhx$export$splice(nextEvents, nextEvents.length, 0, $KETX$export$resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)); // Closing.

            $pAhx$export$splice(nextEvents, nextEvents.length, 0, [['exit', text, context], ['enter', events[index][1], context], ['exit', events[index][1], context], ['exit', strikethrough, context]]);
            $pAhx$export$splice(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }

    index = -1;

    while (++index < events.length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = 'data';
      }
    }

    return events;
  }
  /** @type {Tokenizer} */


  function tokenizeStrikethrough(effects, ok, nok) {
    const previous = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    /** @type {State} */

    function start(code) {
      if (code !== 126 || previous === 126 && events[events.length - 1][1].type !== 'characterEscape') {
        return nok(code);
      }

      effects.enter('strikethroughSequenceTemporary');
      return more(code);
    }
    /** @type {State} */


    function more(code) {
      const before = $HSj1$export$classifyCharacter(previous);

      if (code === 126) {
        // If this is the third marker, exit.
        if (size > 1) return nok(code);
        effects.consume(code);
        size++;
        return more;
      }

      if (size < 2 && !single) return nok(code);
      const token = effects.exit('strikethroughSequenceTemporary');
      const after = $HSj1$export$classifyCharacter(code);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok(code);
    }
  }
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

/**
 * @typedef {import('./syntax.js').Align} Align
 */
const $fTbc$var$alignment = {
  null: '',
  left: ' align="left"',
  right: ' align="right"',
  center: ' align="center"'
};
/** @type {HtmlExtension} */

const $fTbc$export$gfmTableHtml = {
  enter: {
    table(token) {
      this.lineEndingIfNeeded();
      this.tag('<table>'); // @ts-expect-error Custom.

      this.setData('tableAlign', token._align);
    },

    tableBody() {
      // Clear slurping line ending from the delimiter row.
      this.setData('slurpOneLineEnding');
      this.tag('<tbody>');
    },

    tableData() {
      /** @type {string|undefined} */
      const align = // @ts-expect-error Custom.
      $fTbc$var$alignment[this.getData('tableAlign')[this.getData('tableColumn')]];

      if (align === undefined) {
        // Capture results to ignore them.
        this.buffer();
      } else {
        this.lineEndingIfNeeded();
        this.tag('<td' + align + '>');
      }
    },

    tableHead() {
      this.lineEndingIfNeeded();
      this.tag('<thead>');
    },

    tableHeader() {
      this.lineEndingIfNeeded();
      this.tag('<th' + // @ts-expect-error Custom.
      $fTbc$var$alignment[this.getData('tableAlign')[this.getData('tableColumn')]] + '>');
    },

    tableRow() {
      this.setData('tableColumn', 0);
      this.lineEndingIfNeeded();
      this.tag('<tr>');
    }

  },
  exit: {
    // Overwrite the default code text data handler to unescape escaped pipes when
    // they are in tables.
    codeTextData(token) {
      let value = this.sliceSerialize(token);

      if (this.getData('tableAlign')) {
        value = value.replace(/\\([\\|])/g, $fTbc$var$replace);
      }

      this.raw(this.encode(value));
    },

    table() {
      this.setData('tableAlign'); // If there was no table body, make sure the slurping from the delimiter row
      // is cleared.

      this.setData('slurpAllLineEndings');
      this.lineEndingIfNeeded();
      this.tag('</table>');
    },

    tableBody() {
      this.lineEndingIfNeeded();
      this.tag('</tbody>');
    },

    tableData() {
      /** @type {number} */
      // @ts-expect-error Custom.
      const column = this.getData('tableColumn'); // @ts-expect-error Custom.

      if (column in this.getData('tableAlign')) {
        this.tag('</td>');
        this.setData('tableColumn', column + 1);
      } else {
        // Stop capturing.
        this.resume();
      }
    },

    tableHead() {
      this.lineEndingIfNeeded();
      this.tag('</thead>');
      this.setData('slurpOneLineEnding', true); // Slurp the line ending from the delimiter row.
    },

    tableHeader() {
      this.tag('</th>'); // @ts-expect-error Custom.

      this.setData('tableColumn', this.getData('tableColumn') + 1);
    },

    tableRow() {
      /** @type {Align[]} */
      // @ts-expect-error Custom.
      const align = this.getData('tableAlign');
      /** @type {number} */
      // @ts-expect-error Custom.

      let column = this.getData('tableColumn');

      while (column < align.length) {
        this.lineEndingIfNeeded(); // @ts-expect-error `null` is fine as an index.

        this.tag('<td' + $fTbc$var$alignment[align[column]] + '></td>');
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
 */

function $fTbc$var$replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0;
}

/** @type {Extension} */
const $zHdR$export$gfmTable = {
  flow: {
    null: {
      tokenize: $zHdR$var$tokenizeTable,
      resolve: $zHdR$var$resolveTable
    }
  }
};
const $zHdR$var$setextUnderlineMini = {
  tokenize: $zHdR$var$tokenizeSetextUnderlineMini,
  partial: true
};
const $zHdR$var$nextPrefixedOrBlank = {
  tokenize: $zHdR$var$tokenizeNextPrefixedOrBlank,
  partial: true
};
/** @type {Resolver} */

function $zHdR$var$resolveTable(events, context) {
  let index = -1;
  /** @type {Token} */

  let token;
  /** @type {boolean|undefined} */

  let inHead;
  /** @type {boolean|undefined} */

  let inDelimiterRow;
  /** @type {boolean|undefined} */

  let inRow;
  /** @type {Token} */

  let cell;
  /** @type {Token} */

  let content;
  /** @type {Token} */

  let text;
  /** @type {number|undefined} */

  let contentStart;
  /** @type {number|undefined} */

  let contentEnd;
  /** @type {number|undefined} */

  let cellStart;

  while (++index < events.length) {
    token = events[index][1];

    if (inRow) {
      if (token.type === 'temporaryTableCellContent') {
        contentStart = contentStart || index;
        contentEnd = index;
      }

      if ( // Combine separate content parts into one.
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
        events.splice( // @ts-expect-error `contentStart` is defined if `contentEnd` is too.
        contentStart, // @ts-expect-error `contentStart` is defined if `contentEnd` is too.
        contentEnd - contentStart + 1, ['enter', content, context], ['enter', text, context], ['exit', text, context], ['exit', content, context]); // @ts-expect-error `contentStart` is defined if `contentEnd` is too.

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
      events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, ['exit', cell, context]);
      events.splice(cellStart, 0, ['enter', cell, context]);
      index += 2;
      cellStart = index + 1;
    }

    if (token.type === 'tableRow') {
      inRow = events[index][0] === 'enter';

      if (inRow) {
        cellStart = index + 1;
      }
    }

    if (token.type === 'tableDelimiterRow') {
      inDelimiterRow = events[index][0] === 'enter';

      if (inDelimiterRow) {
        cellStart = index + 1;
      }
    }

    if (token.type === 'tableHead') {
      inHead = events[index][0] === 'enter';
    }
  }

  return events;
}
/** @type {Tokenizer} */


function $zHdR$var$tokenizeTable(effects, ok, nok) {
  const self = this;
  /** @type {Align[]} */

  const align = [];
  let tableHeaderCount = 0;
  /** @type {boolean|undefined} */

  let seenDelimiter;
  /** @type {boolean|undefined} */

  let hasDash;
  return start;
  /** @type {State} */

  function start(code) {
    // @ts-expect-error Custom.
    effects.enter('table')._align = align;
    effects.enter('tableHead');
    effects.enter('tableRow'); // If we start with a pipe, we open a cell marker.

    if (code === 124) {
      return cellDividerHead(code);
    }

    tableHeaderCount++;
    effects.enter('temporaryTableCellContent'); // Can’t be space or eols at the start of a construct, so we’re in a cell.

    return inCellContentHead(code);
  }
  /** @type {State} */


  function cellDividerHead(code) {
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    seenDelimiter = true;
    return cellBreakHead;
  }
  /** @type {State} */


  function cellBreakHead(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return atRowEndHead(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceHead;
    }

    if (seenDelimiter) {
      seenDelimiter = undefined;
      tableHeaderCount++;
    }

    if (code === 124) {
      return cellDividerHead(code);
    } // Anything else is cell content.


    effects.enter('temporaryTableCellContent');
    return inCellContentHead(code);
  }
  /** @type {State} */


  function inWhitespaceHead(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return inWhitespaceHead;
    }

    effects.exit('whitespace');
    return cellBreakHead(code);
  }
  /** @type {State} */


  function inCellContentHead(code) {
    // EOF, whitespace, pipe
    if (code === null || code === 124 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      effects.exit('temporaryTableCellContent');
      return cellBreakHead(code);
    }

    effects.consume(code);
    return code === 92 ? inCellContentEscapeHead : inCellContentHead;
  }
  /** @type {State} */


  function inCellContentEscapeHead(code) {
    if (code === 92 || code === 124) {
      effects.consume(code);
      return inCellContentHead;
    } // Anything else.


    return inCellContentHead(code);
  }
  /** @type {State} */


  function atRowEndHead(code) {
    if (code === null) {
      return nok(code);
    }

    effects.exit('tableRow');
    effects.exit('tableHead');
    return effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, atDelimiterLineStart, nok)(code);
  }
  /** @type {State} */


  function atDelimiterLineStart(code) {
    // To do: is the lazy setext thing still needed?
    return effects.check($zHdR$var$setextUnderlineMini, nok, // Support an indent before the delimiter row.
    $CdtX$export$factorySpace(effects, rowStartDelimiter, 'linePrefix', 4))(code);
  }
  /** @type {State} */


  function rowStartDelimiter(code) {
    // If there’s another space, or we’re at the EOL/EOF, exit.
    if (code === null || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      return nok(code);
    }

    effects.enter('tableDelimiterRow');
    return atDelimiterRowBreak(code);
  }
  /** @type {State} */


  function atDelimiterRowBreak(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return rowEndDelimiter(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceDelimiter;
    }

    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      align.push(null);
      return inFillerDelimiter;
    }

    if (code === 58) {
      effects.enter('tableDelimiterAlignment');
      effects.consume(code);
      effects.exit('tableDelimiterAlignment');
      align.push('left');
      return afterLeftAlignment;
    } // If we start with a pipe, we open a cell marker.


    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return atDelimiterRowBreak;
    }

    return nok(code);
  }
  /** @type {State} */


  function inWhitespaceDelimiter(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return inWhitespaceDelimiter;
    }

    effects.exit('whitespace');
    return atDelimiterRowBreak(code);
  }
  /** @type {State} */


  function inFillerDelimiter(code) {
    if (code === 45) {
      effects.consume(code);
      return inFillerDelimiter;
    }

    effects.exit('tableDelimiterFiller');

    if (code === 58) {
      effects.enter('tableDelimiterAlignment');
      effects.consume(code);
      effects.exit('tableDelimiterAlignment');
      align[align.length - 1] = align[align.length - 1] === 'left' ? 'center' : 'right';
      return afterRightAlignment;
    }

    return atDelimiterRowBreak(code);
  }
  /** @type {State} */


  function afterLeftAlignment(code) {
    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      return inFillerDelimiter;
    } // Anything else is not ok.


    return nok(code);
  }
  /** @type {State} */


  function afterRightAlignment(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return rowEndDelimiter(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceDelimiter;
    } // `|`


    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return atDelimiterRowBreak;
    }

    return nok(code);
  }
  /** @type {State} */


  function rowEndDelimiter(code) {
    effects.exit('tableDelimiterRow'); // Exit if there was no dash at all, or if the header cell count is not the
    // delimiter cell count.

    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code);
    }

    if (code === null) {
      return tableClose(code);
    }

    return effects.check($zHdR$var$nextPrefixedOrBlank, tableClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, $CdtX$export$factorySpace(effects, bodyStart, 'linePrefix', 4), tableClose))(code);
  }
  /** @type {State} */


  function tableClose(code) {
    effects.exit('table');
    return ok(code);
  }
  /** @type {State} */


  function bodyStart(code) {
    effects.enter('tableBody');
    return rowStartBody(code);
  }
  /** @type {State} */


  function rowStartBody(code) {
    effects.enter('tableRow'); // If we start with a pipe, we open a cell marker.

    if (code === 124) {
      return cellDividerBody(code);
    }

    effects.enter('temporaryTableCellContent'); // Can’t be space or eols at the start of a construct, so we’re in a cell.

    return inCellContentBody(code);
  }
  /** @type {State} */


  function cellDividerBody(code) {
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    return cellBreakBody;
  }
  /** @type {State} */


  function cellBreakBody(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return atRowEndBody(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceBody;
    } // `|`


    if (code === 124) {
      return cellDividerBody(code);
    } // Anything else is cell content.


    effects.enter('temporaryTableCellContent');
    return inCellContentBody(code);
  }
  /** @type {State} */


  function inWhitespaceBody(code) {
    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return inWhitespaceBody;
    }

    effects.exit('whitespace');
    return cellBreakBody(code);
  }
  /** @type {State} */


  function inCellContentBody(code) {
    // EOF, whitespace, pipe
    if (code === null || code === 124 || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      effects.exit('temporaryTableCellContent');
      return cellBreakBody(code);
    }

    effects.consume(code);
    return code === 92 ? inCellContentEscapeBody : inCellContentBody;
  }
  /** @type {State} */


  function inCellContentEscapeBody(code) {
    if (code === 92 || code === 124) {
      effects.consume(code);
      return inCellContentBody;
    } // Anything else.


    return inCellContentBody(code);
  }
  /** @type {State} */


  function atRowEndBody(code) {
    effects.exit('tableRow');

    if (code === null) {
      return tableBodyClose(code);
    }

    return effects.check($zHdR$var$nextPrefixedOrBlank, tableBodyClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, $CdtX$export$factorySpace(effects, rowStartBody, 'linePrefix', 4), tableBodyClose))(code);
  }
  /** @type {State} */


  function tableBodyClose(code) {
    effects.exit('tableBody');
    return tableClose(code);
  }
  /** @type {Tokenizer} */


  function tokenizeRowEnd(effects, ok, nok) {
    return start;
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart;
    }
    /** @type {State} */


    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
  }
} // Based on micromark, but that won’t work as we’re in a table, and that expects
// content.
// <https://github.com/micromark/micromark/blob/main/lib/tokenize/setext-underline.js>

/** @type {Tokenizer} */


function $zHdR$var$tokenizeSetextUnderlineMini(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    if (code !== 45) {
      return nok(code);
    }

    effects.enter('setextUnderline');
    return sequence(code);
  }
  /** @type {State} */


  function sequence(code) {
    if (code === 45) {
      effects.consume(code);
      return sequence;
    }

    return whitespace(code);
  }
  /** @type {State} */


  function whitespace(code) {
    if (code === null || $nPGJ$export$markdownLineEnding(code)) {
      return ok(code);
    }

    if ($nPGJ$export$markdownSpace(code)) {
      effects.consume(code);
      return whitespace;
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function $zHdR$var$tokenizeNextPrefixedOrBlank(effects, ok, nok) {
  let size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    // This is a check, so we don’t care about tokens, but we open a bogus one
    // so we’re valid.
    effects.enter('check'); // EOL.

    effects.consume(code);
    return whitespace;
  }
  /** @type {State} */


  function whitespace(code) {
    if (code === -1 || code === 32) {
      effects.consume(code);
      size++;
      return size === 4 ? ok : whitespace;
    } // EOF or whitespace


    if (code === null || $nPGJ$export$markdownLineEndingOrSpace(code)) {
      return ok(code);
    } // Anything else.


    return nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 */

/**
 * An opening or closing tag, followed by a case-insensitive specific tag name,
 * followed by HTML whitespace, a greater than, or a slash.
 */
const $z1HD$var$reFlow = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi;
/**
 * As HTML (text) parses tags separately (and v. strictly), we don’t need to be
 * global.
 */

const $z1HD$var$reText = new RegExp('^' + $z1HD$var$reFlow.source, 'i');
/** @type {HtmlExtension} */

const $z1HD$export$gfmTagfilterHtml = {
  exit: {
    htmlFlowData(token) {
      $z1HD$var$exitHtmlData.call(this, token, $z1HD$var$reFlow);
    },

    htmlTextData(token) {
      $z1HD$var$exitHtmlData.call(this, token, $z1HD$var$reText);
    }

  }
};
/**
 * @this {CompileContext}
 * @param {Token} token
 * @param {RegExp} filter
 */

function $z1HD$var$exitHtmlData(token, filter) {
  let value = this.sliceSerialize(token);

  if (this.options.allowDangerousHtml) {
    value = value.replace(filter, '&lt;$1$2');
  }

  this.raw(this.encode(value));
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

/** @type {HtmlExtension} */
const $GZyO$export$gfmTaskListItemHtml = {
  enter: {
    taskListCheck() {
      this.tag('<input ');
    }

  },
  exit: {
    taskListCheck() {
      this.tag('disabled="" type="checkbox">');
    },

    taskListCheckValueChecked() {
      this.tag('checked="" ');
    }

  }
};
const $HhZM$var$tasklistCheck = {
  tokenize: $HhZM$var$tokenizeTasklistCheck
};
const $HhZM$export$gfmTaskListItem = {
  text: {
    [91]: $HhZM$var$tasklistCheck
  }
};
/** @type {Tokenizer} */

function $HhZM$var$tokenizeTasklistCheck(effects, ok, nok) {
  const self = this;
  return open;
  /** @type {State} */

  function open(code) {
    if ( // Exit if there’s stuff before.
    self.previous !== null || // Exit if not in the first content that is the first child of a list
    // item.
    !self._gfmTasklistFirstContentOfListItem) {
      return nok(code);
    }

    effects.enter('taskListCheck');
    effects.enter('taskListCheckMarker');
    effects.consume(code);
    effects.exit('taskListCheckMarker');
    return inside;
  }
  /** @type {State} */


  function inside(code) {
    if ($nPGJ$export$markdownSpace(code)) {
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
  /** @type {State} */


  function close(code) {
    if (code === 93) {
      effects.enter('taskListCheckMarker');
      effects.consume(code);
      effects.exit('taskListCheckMarker');
      effects.exit('taskListCheck');
      return effects.check({
        tokenize: $HhZM$var$spaceThenNonSpace
      }, ok, nok);
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function $HhZM$var$spaceThenNonSpace(effects, ok, nok) {
  const self = this;
  return $CdtX$export$factorySpace(effects, after, 'whitespace');
  /** @type {State} */

  function after(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'whitespace' && code !== null && !$nPGJ$export$markdownLineEndingOrSpace(code) ? ok(code) : nok(code);
  }
}

/**
 * Support GFM or markdown on github.com.
 *
 * @param {Options} [options]
 * @returns {Extension}
 */
function $BN64$export$gfm(options) {
  return $L3gV$export$combineExtensions([$O1uF$export$gfmAutolinkLiteral, $n5wY$export$gfmStrikethrough(options), $zHdR$export$gfmTable, $HhZM$export$gfmTaskListItem]);
}
/** @type {HtmlExtension} */


const $BN64$export$gfmHtml = $L3gV$export$combineHtmlExtensions([$Newd$export$gfmAutolinkLiteralHtml, $PfEX$export$gfmStrikethroughHtml, $fTbc$export$gfmTableHtml, $z1HD$export$gfmTagfilterHtml, $GZyO$export$gfmTaskListItemHtml]);

/**
 * Get the total count of `character` in `value`.
 *
 * @param {any} value Content, coerced to string
 * @param {string} character Single character to look for
 * @return {number} Number of times `character` occurred in `value`.
 */
function $cjM6$export$ccount(value, character) {
  var source = String(value);
  var count = 0;
  var index;

  if (typeof character !== 'string') {
    throw new Error('Expected character');
  }

  index = source.indexOf(character);

  while (index !== -1) {
    count++;
    index = source.indexOf(character, index + character.length);
  }

  return count;
}

function $tBjT$export$default(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  } // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.


  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

const $obk0$export$convert =
/**
 * Generate an assertion from a check.
 * @param {Test} [test]
 * When nullish, checks if `node` is a `Node`.
 * When `string`, works like passing `function (node) {return node.type === test}`.
 * When `function` checks if function passed the node is true.
 * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 * When `array`, checks any one of the subtests pass.
 * @returns {AssertAnything}
 */
function (test) {
  if (test === undefined || test === null) {
    return $obk0$var$ok;
  }

  if (typeof test === 'string') {
    return $obk0$var$typeFactory(test);
  }

  if (typeof test === 'object') {
    return Array.isArray(test) ? $obk0$var$anyFactory(test) : $obk0$var$propsFactory(test);
  }

  if (typeof test === 'function') {
    return $obk0$var$castFactory(test);
  }

  throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */


function $obk0$var$anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  const checks = [];
  let index = -1;

  while (++index < tests.length) {
    checks[index] = $obk0$export$convert(tests[index]);
  }

  return $obk0$var$castFactory(any);
  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */

  function any(...parameters) {
    let index = -1;

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) return true;
    }

    return false;
  }
}
/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */


function $obk0$var$propsFactory(check) {
  return $obk0$var$castFactory(all);
  /**
   * @param {Node} node
   * @returns {boolean}
   */

  function all(node) {
    /** @type {string} */
    let key;

    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false;
    }

    return true;
  }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */


function $obk0$var$typeFactory(check) {
  return $obk0$var$castFactory(type);
  /**
   * @param {Node} node
   */

  function type(node) {
    return node && node.type === check;
  }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */


function $obk0$var$castFactory(check) {
  return assertion;
  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */

  function assertion(...parameters) {
    // @ts-expect-error: spreading is fine.
    return Boolean(check.call(this, ...parameters));
  }
} // Utility to return true.


function $obk0$var$ok() {
  return true;
}

/**
 * @param {string} d
 * @returns {string}
 */
function $QQLh$export$color(d) {
  return '\u001B[33m' + d + '\u001B[39m';
}

/**
 * Continue traversing as normal
 */
const $hzw0$export$CONTINUE = true;
/**
 * Do not traverse this node’s children
 */

const $hzw0$export$SKIP = 'skip';
/**
 * Stop traversing immediately
 */

const $hzw0$export$EXIT = false;

const $hzw0$export$visitParents =
/**
 * Visit children of tree which pass a test
 *
 * @param {Node} tree Abstract syntax tree to walk
 * @param {Test} test test Test node
 * @param {Visitor<Node>} visitor Function to run for each node
 * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
 */
function (tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor; // @ts-ignore no visitor given, so `visitor` is test.

    visitor = test;
    test = null;
  }

  var is = $obk0$export$convert(test);
  var step = reverse ? -1 : 1;
  factory(tree, null, [])();
  /**
   * @param {Node} node
   * @param {number?} index
   * @param {Array.<Parent>} parents
   */

  function factory(node, index, parents) {
    /** @type {Object.<string, unknown>} */
    var value = typeof node === 'object' && node !== null ? node : {};
    /** @type {string} */

    var name;

    if (typeof value.type === 'string') {
      name = typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
      Object.defineProperty(visit, 'name', {
        value: 'node (' + $QQLh$export$color(value.type + (name ? '<' + name + '>' : '')) + ')'
      });
    }

    return visit;

    function visit() {
      /** @type {ActionTuple} */
      var result = [];
      /** @type {ActionTuple} */

      var subresult;
      /** @type {number} */

      var offset;
      /** @type {Array.<Parent>} */

      var grandparents;

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = $hzw0$var$toResult(visitor(node, parents));

        if (result[0] === $hzw0$export$EXIT) {
          return result;
        }
      }

      if (node.children && result[0] !== $hzw0$export$SKIP) {
        // @ts-ignore looks like a parent.
        offset = (reverse ? node.children.length : -1) + step; // @ts-ignore looks like a parent.

        grandparents = parents.concat(node); // @ts-ignore looks like a parent.

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();

          if (subresult[0] === $hzw0$export$EXIT) {
            return subresult;
          }

          offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
        }
      }

      return result;
    }
  }
};
/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */


function $hzw0$var$toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'number') {
    return [$hzw0$export$CONTINUE, value];
  }

  return [value];
}

const $kmKp$var$own = {}.hasOwnProperty;
/**
 * @param tree mdast tree
 * @param find Value to find and remove. When `string`, escaped and made into a global `RegExp`
 * @param [replace] Value to insert.
 *   * When `string`, turned into a Text node.
 *   * When `Function`, called with the results of calling `RegExp.exec` as
 *     arguments, in which case it can return a single or a list of `Node`,
 *     a `string` (which is wrapped in a `Text` node), or `false` to not replace
 * @param [options] Configuration.
 */

const $kmKp$export$findAndReplace =
/**
 * @param {Node} tree
 * @param {Find|FindAndReplaceSchema|FindAndReplaceList} find
 * @param {Replace|Options} [replace]
 * @param {Options} [options]
 */
function (tree, find, replace, options) {
  /** @type {Options|undefined} */
  let settings;
  /** @type {FindAndReplaceSchema|FindAndReplaceList} */

  let schema;

  if (typeof find === 'string' || find instanceof RegExp) {
    // @ts-expect-error don’t expect options twice.
    schema = [[find, replace]];
    settings = options;
  } else {
    schema = find; // @ts-expect-error don’t expect replace twice.

    settings = replace;
  }

  if (!settings) {
    settings = {};
  }

  const ignored = $obk0$export$convert(settings.ignore || []);
  const pairs = $kmKp$var$toPairs(schema);
  let pairIndex = -1;

  while (++pairIndex < pairs.length) {
    $hzw0$export$visitParents(tree, 'text', visitor);
  }

  return tree;
  /** @type {import('unist-util-visit-parents').Visitor<Text>} */

  function visitor(node, parents) {
    let index = -1;
    /** @type {Parent|undefined} */

    let grandparent;

    while (++index < parents.length) {
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
   */


  function handler(node, parent) {
    const find = pairs[pairIndex][0];
    const replace = pairs[pairIndex][1];
    let start = 0; // @ts-expect-error: TS is wrong, some of these children can be text.

    let index = parent.children.indexOf(node);
    /** @type {Array.<PhrasingContent>} */

    let nodes = [];
    /** @type {number|undefined} */

    let position;
    find.lastIndex = 0;
    let match = find.exec(node.value);

    while (match) {
      position = match.index; // @ts-expect-error this is perfectly fine, typescript.

      let value = replace(...match, {
        index: match.index,
        input: match.input
      });

      if (typeof value === 'string') {
        value = value.length > 0 ? {
          type: 'text',
          value
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
      nodes = [node];
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
};
/**
 * @param {FindAndReplaceSchema|FindAndReplaceList} schema
 * @returns {Pairs}
 */


function $kmKp$var$toPairs(schema) {
  /** @type {Pairs} */
  const result = [];

  if (typeof schema !== 'object') {
    throw new TypeError('Expected array or object as schema');
  }

  if (Array.isArray(schema)) {
    let index = -1;

    while (++index < schema.length) {
      result.push([$kmKp$var$toExpression(schema[index][0]), $kmKp$var$toFunction(schema[index][1])]);
    }
  } else {
    /** @type {string} */
    let key;

    for (key in schema) {
      if ($kmKp$var$own.call(schema, key)) {
        result.push([$kmKp$var$toExpression(key), $kmKp$var$toFunction(schema[key])]);
      }
    }
  }

  return result;
}
/**
 * @param {Find} find
 * @returns {RegExp}
 */


function $kmKp$var$toExpression(find) {
  return typeof find === 'string' ? new RegExp($tBjT$export$default(find), 'g') : find;
}
/**
 * @param {Replace} replace
 * @returns {ReplaceFunction}
 */


function $kmKp$var$toFunction(replace) {
  return typeof replace === 'function' ? replace : () => replace;
}

const $Avtr$var$inConstruct = 'phrasing';
const $Avtr$var$notInConstruct = ['autolink', 'link', 'image', 'label'];
/** @type {FromMarkdownExtension} */

const $Avtr$export$gfmAutolinkLiteralFromMarkdown = {
  transforms: [$Avtr$var$transformGfmAutolinkLiterals],
  enter: {
    literalAutolink: $Avtr$var$enterLiteralAutolink,
    literalAutolinkEmail: $Avtr$var$enterLiteralAutolinkValue,
    literalAutolinkHttp: $Avtr$var$enterLiteralAutolinkValue,
    literalAutolinkWww: $Avtr$var$enterLiteralAutolinkValue
  },
  exit: {
    literalAutolink: $Avtr$var$exitLiteralAutolink,
    literalAutolinkEmail: $Avtr$var$exitLiteralAutolinkEmail,
    literalAutolinkHttp: $Avtr$var$exitLiteralAutolinkHttp,
    literalAutolinkWww: $Avtr$var$exitLiteralAutolinkWww
  }
};
/** @type {ToMarkdownExtension} */

const $Avtr$export$gfmAutolinkLiteralToMarkdown = {
  unsafe: [{
    character: '@',
    before: '[+\\-.\\w]',
    after: '[\\-.\\w]',
    inConstruct: $Avtr$var$inConstruct,
    notInConstruct: $Avtr$var$notInConstruct
  }, {
    character: '.',
    before: '[Ww]',
    after: '[\\-.\\w]',
    inConstruct: $Avtr$var$inConstruct,
    notInConstruct: $Avtr$var$notInConstruct
  }, {
    character: ':',
    before: '[ps]',
    after: '\\/',
    inConstruct: $Avtr$var$inConstruct,
    notInConstruct: $Avtr$var$notInConstruct
  }]
};
/** @type {FromMarkdownHandle} */

function $Avtr$var$enterLiteralAutolink(token) {
  this.enter({
    type: 'link',
    title: null,
    url: '',
    children: []
  }, token);
}
/** @type {FromMarkdownHandle} */


function $Avtr$var$enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
/** @type {FromMarkdownHandle} */


function $Avtr$var$exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
/** @type {FromMarkdownHandle} */


function $Avtr$var$exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node = this.stack[this.stack.length - 1];
  node.url = 'http://' + this.sliceSerialize(token);
}
/** @type {FromMarkdownHandle} */


function $Avtr$var$exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
/** @type {FromMarkdownHandle} */


function $Avtr$var$exitLiteralAutolink(token) {
  this.exit(token);
}
/** @type {FromMarkdownTransform} */


function $Avtr$var$transformGfmAutolinkLiterals(tree) {
  $kmKp$export$findAndReplace(tree, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, $Avtr$var$findUrl], [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, $Avtr$var$findEmail]], {
    ignore: ['link', 'linkReference']
  });
}
/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} protocol
 * @param {string} domain
 * @param {string} path
 * @param {RegExpMatchObject} match
 */
// eslint-disable-next-line max-params


function $Avtr$var$findUrl(_, protocol, domain, path, match) {
  let prefix = ''; // Not an expected previous character.

  if (!$Avtr$var$previous(match)) {
    return false;
  } // Treat `www` as part of the domain.


  if (/^w/i.test(protocol)) {
    domain = protocol + domain;
    protocol = '';
    prefix = 'http://';
  }

  if (!$Avtr$var$isCorrectDomain(domain)) {
    return false;
  }

  const parts = $Avtr$var$splitUrl(domain + path);
  if (!parts[0]) return false;
  /** @type {PhrasingContent} */

  const result = {
    type: 'link',
    title: null,
    url: prefix + protocol + parts[0],
    children: [{
      type: 'text',
      value: protocol + parts[0]
    }]
  };

  if (parts[1]) {
    return [result, {
      type: 'text',
      value: parts[1]
    }];
  }

  return result;
}
/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} atext
 * @param {string} label
 * @param {RegExpMatchObject} match
 */


function $Avtr$var$findEmail(_, atext, label, match) {
  // Not an expected previous character.
  if (!$Avtr$var$previous(match, true) || /[_-]$/.test(label)) {
    return false;
  }

  return {
    type: 'link',
    title: null,
    url: 'mailto:' + atext + '@' + label,
    children: [{
      type: 'text',
      value: atext + '@' + label
    }]
  };
}
/**
 * @param {string} domain
 * @returns {boolean}
 */


function $Avtr$var$isCorrectDomain(domain) {
  const parts = domain.split('.');

  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }

  return true;
}
/**
 * @param {string} url
 * @returns {[string, string|undefined]}
 */


function $Avtr$var$splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  /** @type {number} */

  let closingParenIndex;
  /** @type {number} */

  let openingParens;
  /** @type {number} */

  let closingParens;
  /** @type {string|undefined} */

  let trail;

  if (trailExec) {
    url = url.slice(0, trailExec.index);
    trail = trailExec[0];
    closingParenIndex = trail.indexOf(')');
    openingParens = $cjM6$export$ccount(url, '(');
    closingParens = $cjM6$export$ccount(url, ')');

    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1);
      trail = trail.slice(closingParenIndex + 1);
      closingParenIndex = trail.indexOf(')');
      closingParens++;
    }
  }

  return [url, trail];
}
/**
 * @param {RegExpMatchObject} match
 * @param {boolean} [email=false]
 * @returns {boolean}
 */


function $Avtr$var$previous(match, email) {
  const code = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || $nPGJ$export$unicodeWhitespace(code) || $nPGJ$export$unicodePunctuation(code)) && (!email || code !== 47);
}

/**
 * @typedef {import('../types.js').Node} Node
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').SafeOptions} SafeOptions
 * @typedef {import('../types.js').Context} Context
 */

/**
 * @param {Parent} parent
 * @param {Context} context
 * @param {SafeOptions} safeOptions
 * @returns {string}
 */
function $bjW5$export$containerPhrasing(parent, context, safeOptions) {
  const children = parent.children || [];
  /** @type {Array.<string>} */

  const results = [];
  let index = -1;
  let before = safeOptions.before;

  while (++index < children.length) {
    const child = children[index];
    /** @type {string} */

    let after;

    if (index + 1 < children.length) {
      // @ts-expect-error: hush, it’s actually a `zwitch`.
      let handle = context.handle.handlers[children[index + 1].type];
      if (handle && handle.peek) handle = handle.peek;
      after = handle ? handle(children[index + 1], parent, context, {
        before: '',
        after: ''
      }).charAt(0) : '';
    } else {
      after = safeOptions.after;
    } // In some cases, html (text) can be found in phrasing right after an eol.
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
      before,
      after
    }));
    before = results[results.length - 1].slice(-1);
  }

  return results.join('');
}

/** @type {FromMarkdownExtension} */
const $Y5Wt$export$gfmStrikethroughFromMarkdown = {
  canContainEols: ['delete'],
  enter: {
    strikethrough: $Y5Wt$var$enterStrikethrough
  },
  exit: {
    strikethrough: $Y5Wt$var$exitStrikethrough
  }
};
/** @type {ToMarkdownExtension} */

const $Y5Wt$export$gfmStrikethroughToMarkdown = {
  unsafe: [{
    character: '~',
    inConstruct: 'phrasing'
  }],
  handlers: {
    delete: $Y5Wt$var$handleDelete
  }
};
$Y5Wt$var$handleDelete.peek = $Y5Wt$var$peekDelete;
/** @type {FromMarkdownHandle} */

function $Y5Wt$var$enterStrikethrough(token) {
  this.enter({
    type: 'delete',
    children: []
  }, token);
}
/** @type {FromMarkdownHandle} */


function $Y5Wt$var$exitStrikethrough(token) {
  this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {Delete} node
 */


function $Y5Wt$var$handleDelete(node, _, context) {
  const exit = context.enter('emphasis');
  const value = $bjW5$export$containerPhrasing(node, context, {
    before: '~',
    after: '~'
  });
  exit();
  return '~~' + value + '~~';
}
/** @type {ToMarkdownHandle} */


function $Y5Wt$var$peekDelete() {
  return '~';
}

/**
 * @typedef {import('../types.js').Unsafe} Unsafe
 */

/**
 * @param {Unsafe} pattern
 * @returns {RegExp}
 */
function $nDhW$export$patternCompile(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? '[\\r\\n][\\t ]*' : '') + (pattern.before ? '(?:' + pattern.before + ')' : '');
    pattern._compiled = new RegExp((before ? '(' + before + ')' : '') + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') + pattern.character + (pattern.after ? '(?:' + pattern.after + ')' : ''), 'g');
  }

  return pattern._compiled;
}

$dy9Q$export$inlineCode.peek = $dy9Q$var$inlineCodePeek;
/**
 * @type {Handle}
 * @param {InlineCode} node
 */

function $dy9Q$export$inlineCode(node, _, context) {
  let value = node.value || '';
  let sequence = '`';
  let index = -1; // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.

  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`';
  } // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.


  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = ' ' + value + ' ';
  } // We have a potential problem: certain characters after eols could result in
  // blocks being seen.
  // For example, if someone injected the string `'\n# b'`, then that would
  // result in an ATX heading.
  // We can’t escape characters in `inlineCode`, but because eols are
  // transformed to spaces when going from markdown to HTML anyway, we can swap
  // them out.


  while (++index < context.unsafe.length) {
    const pattern = context.unsafe[index];
    const expression = $nDhW$export$patternCompile(pattern);
    /** @type {RegExpExecArray|null} */

    let match; // Only look for `atBreak`s.
    // Btw: note that `atBreak` patterns will always start the regex at LF or
    // CR.

    if (!pattern.atBreak) continue;

    while (match = expression.exec(value)) {
      let position = match.index; // Support CRLF (patterns only look for one of the characters).

      if (value.charCodeAt(position) === 10
      /* `\n` */
      && value.charCodeAt(position - 1) === 13
      /* `\r` */
      ) {
        position--;
      }

      value = value.slice(0, position) + ' ' + value.slice(match.index + 1);
    }
  }

  return sequence + value + sequence;
}
/**
 * @type {Handle}
 */


function $dy9Q$var$inlineCodePeek() {
  return '`';
}

/**
 * @typedef MarkdownTableOptions
 * @property {string|null|Array.<string|null|undefined>} [align]
 * @property {boolean} [padding=true]
 * @property {boolean} [delimiterStart=true]
 * @property {boolean} [delimiterStart=true]
 * @property {boolean} [delimiterEnd=true]
 * @property {boolean} [alignDelimiters=true]
 * @property {(value: string) => number} [stringLength]
 */

/**
 * Create a table from a matrix of strings.
 *
 * @param {Array.<Array.<string|null|undefined>>} table
 * @param {MarkdownTableOptions} [options]
 * @returns {string}
 */
function $Fr8A$export$markdownTable(table, options) {
  const settings = options || {};
  const align = (settings.align || []).concat();
  const stringLength = settings.stringLength || $Fr8A$var$defaultStringLength;
  /** @type {number[]} Character codes as symbols for alignment per column. */

  const alignments = [];
  let rowIndex = -1;
  /** @type {string[][]} Cells per row. */

  const cellMatrix = [];
  /** @type {number[][]} Sizes of each cell per row. */

  const sizeMatrix = [];
  /** @type {number[]} */

  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  /** @type {number} */

  let columnIndex;
  /** @type {string[]} Cells of current row */

  let row;
  /** @type {number[]} Sizes of current row */

  let sizes;
  /** @type {number} Sizes of current cell */

  let size;
  /** @type {string} Current cell */

  let cell;
  /** @type {string[]} Chunks of current line. */

  let line;
  /** @type {string} */

  let before;
  /** @type {string} */

  let after;
  /** @type {number} */

  let code; // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.

  while (++rowIndex < table.length) {
    columnIndex = -1;
    row = [];
    sizes = [];

    if (table[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table[rowIndex].length;
    }

    while (++columnIndex < table[rowIndex].length) {
      cell = $Fr8A$var$serialize(table[rowIndex][columnIndex]);

      if (settings.alignDelimiters !== false) {
        size = stringLength(cell);
        sizes[columnIndex] = size;

        if (longestCellByColumn[columnIndex] === undefined || size > longestCellByColumn[columnIndex]) {
          longestCellByColumn[columnIndex] = size;
        }
      }

      row.push(cell);
    }

    cellMatrix[rowIndex] = row;
    sizeMatrix[rowIndex] = sizes;
  } // Figure out which alignments to use.


  columnIndex = -1;

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = $Fr8A$var$toAlignment(align[columnIndex]);
    }
  } else {
    code = $Fr8A$var$toAlignment(align);

    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code;
    }
  } // Inject the alignment row.


  columnIndex = -1;
  row = [];
  sizes = [];

  while (++columnIndex < mostCellsPerRow) {
    code = alignments[columnIndex];
    before = '';
    after = '';

    if (code === 99
    /* `c` */
    ) {
      before = ':';
      after = ':';
    } else if (code === 108
    /* `l` */
    ) {
      before = ':';
    } else if (code === 114
    /* `r` */
    ) {
      after = ':';
    } // There *must* be at least one hyphen-minus in each alignment cell.


    size = settings.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
    cell = before + '-'.repeat(size) + after;

    if (settings.alignDelimiters !== false) {
      size = before.length + size + after.length;

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }

      sizes[columnIndex] = size;
    }

    row[columnIndex] = cell;
  } // Inject the alignment row.


  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  /** @type {string[]} */

  const lines = [];

  while (++rowIndex < cellMatrix.length) {
    row = cellMatrix[rowIndex];
    sizes = sizeMatrix[rowIndex];
    columnIndex = -1;
    line = [];

    while (++columnIndex < mostCellsPerRow) {
      cell = row[columnIndex] || '';
      before = '';
      after = '';

      if (settings.alignDelimiters !== false) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
        code = alignments[columnIndex];

        if (code === 114
        /* `r` */
        ) {
          before = ' '.repeat(size);
        } else if (code === 99
        /* `c` */
        ) {
          if (size % 2) {
            before = ' '.repeat(size / 2 + 0.5);
            after = ' '.repeat(size / 2 - 0.5);
          } else {
            before = ' '.repeat(size / 2);
            after = before;
          }
        } else {
          after = ' '.repeat(size);
        }
      }

      if (settings.delimiterStart !== false && !columnIndex) {
        line.push('|');
      }

      if (settings.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(settings.alignDelimiters === false && cell === '') && (settings.delimiterStart !== false || columnIndex)) {
        line.push(' ');
      }

      if (settings.alignDelimiters !== false) {
        line.push(before);
      }

      line.push(cell);

      if (settings.alignDelimiters !== false) {
        line.push(after);
      }

      if (settings.padding !== false) {
        line.push(' ');
      }

      if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push('|');
      }
    }

    lines.push(settings.delimiterEnd === false ? line.join('').replace(/ +$/, '') : line.join(''));
  }

  return lines.join('\n');
}
/**
 * @param {string|null|undefined} [value]
 * @returns {string}
 */


function $Fr8A$var$serialize(value) {
  return value === null || value === undefined ? '' : String(value);
}
/**
 * @param {string} value
 * @returns {number}
 */


function $Fr8A$var$defaultStringLength(value) {
  return value.length;
}
/**
 * @param {string|null|undefined} value
 * @returns {number}
 */


function $Fr8A$var$toAlignment(value) {
  const code = typeof value === 'string' ? value.charCodeAt(0) : 0;
  return code === 67
  /* `C` */
  || code === 99
  /* `c` */
  ? 99
  /* `c` */
  : code === 76
  /* `L` */
  || code === 108
  /* `l` */
  ? 108
  /* `l` */
  : code === 82
  /* `R` */
  || code === 114
  /* `r` */
  ? 114
  /* `r` */
  : 0;
}

/** @type {FromMarkdownExtension} */
const $SfSD$export$gfmTableFromMarkdown = {
  enter: {
    table: $SfSD$var$enterTable,
    tableData: $SfSD$var$enterCell,
    tableHeader: $SfSD$var$enterCell,
    tableRow: $SfSD$var$enterRow
  },
  exit: {
    codeText: $SfSD$var$exitCodeText,
    table: $SfSD$var$exitTable,
    tableData: $SfSD$var$exit,
    tableHeader: $SfSD$var$exit,
    tableRow: $SfSD$var$exit
  }
};
/** @type {FromMarkdownHandle} */

function $SfSD$var$enterTable(token) {
  /** @type {AlignType[]} */
  // @ts-expect-error: `align` is custom.
  const align = token._align;
  this.enter({
    type: 'table',
    align,
    children: []
  }, token);
  this.setData('inTable', true);
}
/** @type {FromMarkdownHandle} */


function $SfSD$var$exitTable(token) {
  this.exit(token);
  this.setData('inTable');
}
/** @type {FromMarkdownHandle} */


function $SfSD$var$enterRow(token) {
  this.enter({
    type: 'tableRow',
    children: []
  }, token);
}
/** @type {FromMarkdownHandle} */


function $SfSD$var$exit(token) {
  this.exit(token);
}
/** @type {FromMarkdownHandle} */


function $SfSD$var$enterCell(token) {
  this.enter({
    type: 'tableCell',
    children: []
  }, token);
} // Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.

/** @type {FromMarkdownHandle} */


function $SfSD$var$exitCodeText(token) {
  let value = this.resume();

  if (this.getData('inTable')) {
    value = value.replace(/\\([\\|])/g, $SfSD$var$replace);
  }

  const node = this.stack[this.stack.length - 1];
  node.value = value;
  this.exit(token);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */


function $SfSD$var$replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0;
}
/**
 * @param {Options} [options]
 * @returns {ToMarkdownExtension}
 */


function $SfSD$export$gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? ' ' : '|';
  return {
    unsafe: [{
      character: '\r',
      inConstruct: 'tableCell'
    }, {
      character: '\n',
      inConstruct: 'tableCell'
    }, // A pipe, when followed by a tab or space (padding), or a dash or colon
    // (unpadded delimiter row), could result in a table.
    {
      atBreak: true,
      character: '|',
      after: '[\t :-]'
    }, // A pipe in a cell must be encoded.
    {
      character: '|',
      inConstruct: 'tableCell'
    }, // A colon must be followed by a dash, in which case it could start a
    // delimiter row.
    {
      atBreak: true,
      character: ':',
      after: '-'
    }, // A delimiter row can also start with a dash, when followed by more
    // dashes, a colon, or a pipe.
    // This is a stricter version than the built in check for lists, thematic
    // breaks, and setex heading underlines though:
    // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
    {
      atBreak: true,
      character: '-',
      after: '[:|-]'
    }],
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
   */

  function handleTable(node, _, context) {
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
   */


  function handleTableRow(node, _, context) {
    const row = handleTableRowAsData(node, context); // `markdown-table` will always add an align row

    const value = serializeData([row]);
    return value.slice(0, value.indexOf('\n'));
  }
  /**
   * @type {ToMarkdownHandle}
   * @param {TableCell} node
   */


  function handleTableCell(node, _, context) {
    const exit = context.enter('tableCell');
    const subexit = context.enter('phrasing');
    const value = $bjW5$export$containerPhrasing(node, context, {
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
   */


  function serializeData(matrix, align) {
    return $Fr8A$export$markdownTable(matrix, {
      align,
      alignDelimiters,
      padding,
      stringLength
    });
  }
  /**
   * @param {Table} node
   * @param {ToMarkdownContext} context
   */


  function handleTableAsData(node, context) {
    const children = node.children;
    let index = -1;
    /** @type {Array.<Array.<string>>} */

    const result = [];
    const subexit = context.enter('table');

    while (++index < children.length) {
      result[index] = handleTableRowAsData(children[index], context);
    }

    subexit();
    return result;
  }
  /**
   * @param {TableRow} node
   * @param {ToMarkdownContext} context
   */


  function handleTableRowAsData(node, context) {
    const children = node.children;
    let index = -1;
    /** @type {Array.<string>} */

    const result = [];
    const subexit = context.enter('tableRow');

    while (++index < children.length) {
      result[index] = handleTableCell(children[index], node, context);
    }

    subexit();
    return result;
  }
  /**
   * @type {ToMarkdownHandle}
   * @param {InlineCode} node
   */


  function inlineCodeWithTable(node, parent, context) {
    let value = $dy9Q$export$inlineCode(node, parent, context);

    if (context.stack.includes('tableCell')) {
      value = value.replace(/\|/g, '\\$&');
    }

    return value;
  }
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['bullet'], undefined>}
 */
function $MxNf$export$checkBullet(context) {
  const marker = context.options.bullet || '*';

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error('Cannot serialize items with `' + marker + '` for `options.bullet`, expected `*`, `+`, or `-`');
  }

  return marker;
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['listItemIndent'], undefined>}
 */
function $Spxt$export$checkListItemIndent(context) {
  const style = context.options.listItemIndent || 'tab'; // To do: remove in a major.
  // @ts-expect-error: deprecated.

  if (style === 1 || style === '1') {
    return 'one';
  }

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error('Cannot serialize items with `' + style + '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`');
  }

  return style;
}

/**
 * @typedef {import('../types.js').Node} Node
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').Join} Join
 * @typedef {import('../types.js').Context} Context
 */

/**
 * @param {Parent} parent
 * @param {Context} context
 * @returns {string}
 */
function $UtAL$export$containerFlow(parent, context) {
  const children = parent.children || [];
  /** @type {Array.<string>} */

  const results = [];
  let index = -1;

  while (++index < children.length) {
    const child = children[index];
    results.push(context.handle(child, parent, context, {
      before: '\n',
      after: '\n'
    }));

    if (index < children.length - 1) {
      results.push(between(child, children[index + 1]));
    }
  }

  return results.join('');
  /**
   * @param {Node} left
   * @param {Node} right
   * @returns {string}
   */

  function between(left, right) {
    let index = context.join.length;
    /** @type {ReturnType<Join>} */

    let result;

    while (index--) {
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
}

/**
 * @callback Map
 * @param {string} value
 * @param {number} line
 * @param {boolean} blank
 * @returns {string}
 */
const $LkVL$var$eol = /\r?\n|\r/g;
/**
 * @param {string} value
 * @param {Map} map
 * @returns {string}
 */

function $LkVL$export$indentLines(value, map) {
  /** @type {Array.<string>} */
  const result = [];
  let start = 0;
  let line = 0;
  /** @type {RegExpExecArray|null} */

  let match;

  while (match = $LkVL$var$eol.exec(value)) {
    one(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }

  one(value.slice(start));
  return result.join('');
  /**
   * @param {string} value
   */

  function one(value) {
    result.push(map(value, line, !value));
  }
}

/**
 * @type {Handle}
 * @param {ListItem} node
 */
function $AhBl$export$listItem(node, parent, context) {
  const listItemIndent = $Spxt$export$checkListItemIndent(context);
  /** @type {string} */

  let bullet = $MxNf$export$checkBullet(context);

  if (parent && parent.type === 'list' && parent.ordered) {
    bullet = (typeof parent.start === 'number' && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + '.';
  }

  let size = bullet.length + 1;

  if (listItemIndent === 'tab' || listItemIndent === 'mixed' && (parent && 'spread' in parent && parent.spread || node.spread)) {
    size = Math.ceil(size / 4) * 4;
  }

  const exit = context.enter('listItem');
  const value = $LkVL$export$indentLines($UtAL$export$containerFlow(node, context), map);
  exit();
  return value;
  /** @type {Map} */

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : ' '.repeat(size)) + line;
    }

    return (blank ? bullet : bullet + ' '.repeat(size - bullet.length)) + line;
  }
}

/** @type {FromMarkdownExtension} */
const $HG1i$export$gfmTaskListItemFromMarkdown = {
  exit: {
    taskListCheckValueChecked: $HG1i$var$exitCheck,
    taskListCheckValueUnchecked: $HG1i$var$exitCheck,
    paragraph: $HG1i$var$exitParagraphWithTaskListItem
  }
};
/** @type {ToMarkdownExtension} */

const $HG1i$export$gfmTaskListItemToMarkdown = {
  unsafe: [{
    atBreak: true,
    character: '-',
    after: '[:|-]'
  }],
  handlers: {
    listItem: $HG1i$var$listItemWithTaskListItem
  }
};
/** @type {FromMarkdownHandle} */

function $HG1i$var$exitCheck(token) {
  // We’re always in a paragraph, in a list item.
  this.stack[this.stack.length - 2].checked = token.type === 'taskListCheckValueChecked';
}
/** @type {FromMarkdownHandle} */


function $HG1i$var$exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  /** @type {Paragraph} */
  // @ts-expect-error: must be true.

  const node = this.stack[this.stack.length - 1];
  /** @type {BlockContent[]} */
  // @ts-expect-error: check whether `parent` is a `listItem` later.

  const siblings = parent.children;
  const head = node.children[0];
  let index = -1;
  /** @type {Paragraph|undefined} */

  let firstParaghraph;

  if (parent && parent.type === 'listItem' && typeof parent.checked === 'boolean' && head && head.type === 'text') {
    while (++index < siblings.length) {
      const sibling = siblings[index];

      if (sibling.type === 'paragraph') {
        firstParaghraph = sibling;
        break;
      }
    }

    if (firstParaghraph === node) {
      // Must start with a space or a tab.
      head.value = head.value.slice(1);

      if (head.value.length === 0) {
        node.children.shift();
      } else {
        // @ts-expect-error: must be true.
        head.position.start.column++; // @ts-expect-error: must be true.

        head.position.start.offset++; // @ts-expect-error: must be true.

        node.position.start = Object.assign({}, head.position.start);
      }
    }
  }

  this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {ListItem} node
 */


function $HG1i$var$listItemWithTaskListItem(node, parent, context) {
  const head = node.children[0];
  let value = $AhBl$export$listItem(node, parent, context);

  if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }

  return value;
  /**
   * @param {string} $0
   * @returns {string}
   */

  function check($0) {
    return $0 + '[' + (node.checked ? 'x' : ' ') + '] ';
  }
}

/**
 * @type {Array.<FromMarkdownExtension>}
 */
const $xGO0$export$gfmFromMarkdown = [$Avtr$export$gfmAutolinkLiteralFromMarkdown, $Y5Wt$export$gfmStrikethroughFromMarkdown, $SfSD$export$gfmTableFromMarkdown, $HG1i$export$gfmTaskListItemFromMarkdown];
/**
 * @param {Options} [options]
 * @returns {ToMarkdownExtension}
 */

function $xGO0$export$gfmToMarkdown(options) {
  return {
    extensions: [$Avtr$export$gfmAutolinkLiteralToMarkdown, $Y5Wt$export$gfmStrikethroughToMarkdown, $SfSD$export$gfmTableToMarkdown(options), $HG1i$export$gfmTaskListItemToMarkdown]
  };
}

/**
 * Plugin to support GitHub Flavored Markdown (GFM).
 *
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
function $Egyt$export$default(options = {}) {
  const data = this.data();
  add('micromarkExtensions', $BN64$export$gfm(options));
  add('fromMarkdownExtensions', $xGO0$export$gfmFromMarkdown);
  add('toMarkdownExtensions', $xGO0$export$gfmToMarkdown(options));
  /**
   * @param {string} field
   * @param {unknown} value
   */

  function add(field, value) {
    const list = // Other extensions

    /* c8 ignore next 2 */
    data[field] ? data[field] : data[field] = [];
    list.push(value);
  }
}

var $nGVJ$var$own = {}.hasOwnProperty;
/**
 * @callback Handler
 * @param {...unknown} value
 * @return {unknown}
 *
 * @typedef {Record<string, Handler>} Handlers
 *
 * @typedef {Object} Options
 * @property {Handler} [unknown]
 * @property {Handler} [invalid]
 * @property {Handlers} [handlers]
 */

/**
 * Handle values based on a property.
 *
 * @param {string} key
 * @param {Options} [options]
 */

function $nGVJ$export$zwitch(key, options) {
  var settings = options || {};
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
   */

  function one(value) {
    var fn = one.invalid;
    var handlers = one.handlers;

    if (value && $nGVJ$var$own.call(value, key)) {
      fn = $nGVJ$var$own.call(handlers, value[key]) ? handlers[value[key]] : one.unknown;
    }

    if (fn) {
      return fn.apply(this, arguments);
    }
  }

  one.handlers = settings.handlers || {};
  one.invalid = settings.invalid;
  one.unknown = settings.unknown;
  return one;
}

/**
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').Context} Context
 */

/**
 * @param {Context} base
 * @param {Options} extension
 * @returns {Context}
 */
function $Ppel$export$configure(base, extension) {
  let index = -1;
  /** @type {string} */

  let key; // First do subextensions.

  if (extension.extensions) {
    while (++index < extension.extensions.length) {
      $Ppel$export$configure(base, extension.extensions[index]);
    }
  }

  for (key in extension) {
    if (key === 'extensions') {// Empty.
    } else if (key === 'unsafe' || key === 'join') {
      /* c8 ignore next 2 */
      // @ts-expect-error: hush.
      base[key] = [...(base[key] || []), ...(extension[key] || [])];
    } else if (key === 'handlers') {
      base[key] = Object.assign(base[key], extension[key] || {});
    } else {
      // @ts-expect-error: hush.
      base.options[key] = extension[key];
    }
  }

  return base;
}

/**
 * @type {Handle}
 * @param {Blockquote} node
 */
function $AORw$export$blockquote(node, _, context) {
  const exit = context.enter('blockquote');
  const value = $LkVL$export$indentLines($UtAL$export$containerFlow(node, context), $AORw$var$map);
  exit();
  return value;
}
/** @type {Map} */


function $AORw$var$map(line, _, blank) {
  return '>' + (blank ? '' : ' ') + line;
}

/**
 * @typedef {import('../types.js').Unsafe} Unsafe
 */

/**
 * @param {Array.<string>} stack
 * @param {Unsafe} pattern
 * @returns {boolean}
 */
function $Ti7D$export$patternInScope(stack, pattern) {
  return $Ti7D$var$listInScope(stack, pattern.inConstruct, true) && !$Ti7D$var$listInScope(stack, pattern.notInConstruct, false);
}
/**
 * @param {Array.<string>} stack
 * @param {Unsafe['inConstruct']} list
 * @param {boolean} none
 * @returns {boolean}
 */


function $Ti7D$var$listInScope(stack, list, none) {
  if (!list) {
    return none;
  }

  if (typeof list === 'string') {
    list = [list];
  }

  let index = -1;

  while (++index < list.length) {
    if (stack.includes(list[index])) {
      return true;
    }
  }

  return false;
}

/**
 * @type {Handle}
 * @param {Break} _
 */
function $hiJF$export$hardBreak(_, _1, context, safe) {
  let index = -1;

  while (++index < context.unsafe.length) {
    // If we can’t put eols in this construct (setext headings, tables), use a
    // space instead.
    if (context.unsafe[index].character === '\n' && $Ti7D$export$patternInScope(context.stack, context.unsafe[index])) {
      return /[ \t]/.test(safe.before) ? '' : ' ';
    }
  }

  return '\\\n';
}

/**
 * Get the count of the longest repeating streak of `character` in `value`.
 *
 * @param {string} value Content.
 * @param {string} character Single character to look for
 * @returns {number} Count of most frequent adjacent `character`s in `value`
 */
function $rvoy$export$longestStreak(value, character) {
  var source = String(value);
  var index = source.indexOf(character);
  var expected = index;
  var count = 0;
  var max = 0;

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character');
  }

  while (index !== -1) {
    if (index === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }

    expected = index + 1;
    index = source.indexOf(character, expected);
  }

  return max;
}

/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../types.js').Context} Context
 */

/**
 * @param {Code} node
 * @param {Context} context
 * @returns {boolean}
 */
function $UK2E$export$formatCodeAsIndented(node, context) {
  return Boolean(!context.options.fences && node.value && // If there’s no info…
  !node.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(node.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['fence'], undefined>}
 */
function $gC2b$export$checkFence(context) {
  const marker = context.options.fence || '`';

  if (marker !== '`' && marker !== '~') {
    throw new Error('Cannot serialize code with `' + marker + '` for `options.fence`, expected `` ` `` or `~`');
  }

  return marker;
}

/**
 * @param {Context} context
 * @param {string|null|undefined} input
 * @param {SafeOptions & {encode?: Array.<string>}} config
 * @returns {string}
 */
function $hCI8$export$safe(context, input, config) {
  const value = (config.before || '') + (input || '') + (config.after || '');
  /** @type {Array.<number>} */

  const positions = [];
  /** @type {Array.<string>} */

  const result = [];
  /** @type {Record<number, {before: boolean, after: boolean}>} */

  const infos = {};
  let index = -1;

  while (++index < context.unsafe.length) {
    const pattern = context.unsafe[index];

    if (!$Ti7D$export$patternInScope(context.stack, pattern)) {
      continue;
    }

    const expression = $nDhW$export$patternCompile(pattern);
    /** @type {RegExpExecArray|null} */

    let match;

    while (match = expression.exec(value)) {
      const before = 'before' in pattern || Boolean(pattern.atBreak);
      const after = ('after' in pattern);
      const position = match.index + (before ? match[1].length : 0);

      if (positions.includes(position)) {
        if (infos[position].before && !before) {
          infos[position].before = false;
        }

        if (infos[position].after && !after) {
          infos[position].after = false;
        }
      } else {
        positions.push(position);
        infos[position] = {
          before,
          after
        };
      }
    }
  }

  positions.sort($hCI8$var$numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index = -1;

  while (++index < positions.length) {
    const position = positions[index]; // Character before or after matched:

    if (position < start || position >= end) {
      continue;
    } // If this character is supposed to be escaped because it has a condition on
    // the next character, and the next character is definitly being escaped,
    // then skip this escape.


    if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after) {
      continue;
    }

    if (start !== position) {
      // If we have to use a character reference, an ampersand would be more
      // correct, but as backslashes only care about punctuation, either will
      // do the trick
      result.push($hCI8$var$escapeBackslashes(value.slice(start, position), '\\'));
    }

    start = position;

    if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || !config.encode.includes(value.charAt(position)))) {
      // Character escape.
      result.push('\\');
    } else {
      // Character reference.
      result.push('&#x' + value.charCodeAt(position).toString(16).toUpperCase() + ';');
      start++;
    }
  }

  result.push($hCI8$var$escapeBackslashes(value.slice(start, end), config.after));
  return result.join('');
}
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */


function $hCI8$var$numerical(a, b) {
  return a - b;
}
/**
 * @param {string} value
 * @param {string} after
 * @returns {string}
 */


function $hCI8$var$escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  /** @type {Array.<number>} */

  const positions = [];
  /** @type {Array.<string>} */

  const results = [];
  const whole = value + after;
  let index = -1;
  let start = 0;
  /** @type {RegExpExecArray|null} */

  let match;

  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }

  while (++index < positions.length) {
    if (start !== positions[index]) {
      results.push(value.slice(start, positions[index]));
    }

    results.push('\\');
    start = positions[index];
  }

  results.push(value.slice(start));
  return results.join('');
}

/**
 * @type {Handle}
 * @param {Code} node
 */
function $FoF0$export$code(node, _, context) {
  const marker = $gC2b$export$checkFence(context);
  const raw = node.value || '';
  const suffix = marker === '`' ? 'GraveAccent' : 'Tilde';
  /** @type {string} */

  let value;
  /** @type {Exit} */

  let exit;

  if ($UK2E$export$formatCodeAsIndented(node, context)) {
    exit = context.enter('codeIndented');
    value = $LkVL$export$indentLines(raw, $FoF0$var$map);
  } else {
    const sequence = marker.repeat(Math.max($rvoy$export$longestStreak(raw, marker) + 1, 3));
    /** @type {Exit} */

    let subexit;
    exit = context.enter('codeFenced');
    value = sequence;

    if (node.lang) {
      subexit = context.enter('codeFencedLang' + suffix);
      value += $hCI8$export$safe(context, node.lang, {
        before: '`',
        after: ' ',
        encode: ['`']
      });
      subexit();
    }

    if (node.lang && node.meta) {
      subexit = context.enter('codeFencedMeta' + suffix);
      value += ' ' + $hCI8$export$safe(context, node.meta, {
        before: ' ',
        after: '\n',
        encode: ['`']
      });
      subexit();
    }

    value += '\n';

    if (raw) {
      value += raw + '\n';
    }

    value += sequence;
  }

  exit();
  return value;
}
/** @type {Map} */


function $FoF0$var$map(line, _, blank) {
  return (blank ? '' : '    ') + line;
}

const $nh8P$var$characterEscape = /\\([!-/:-@[-`{-~])/g;
const $nh8P$var$characterReference = /&(#(\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
/**
 * The `label` of an association is the string value: character escapes and
 * references work, and casing is intact.
 * The `identifier` is used to match one association to another: controversially,
 * character escapes and references don’t work in this matching: `&copy;` does
 * not match `©`, and `\+` does not match `+`.
 * But casing is ignored (and whitespace) is trimmed and collapsed: ` A\nb`
 * matches `a b`.
 * So, we do prefer the label when figuring out how we’re going to serialize:
 * it has whitespace, casing, and we can ignore most useless character escapes
 * and all character references.
 *
 * @param {Association} node
 * @returns {string}
 */

function $nh8P$export$association(node) {
  if (node.label || !node.identifier) {
    return node.label || '';
  }

  return node.identifier.replace($nh8P$var$characterEscape, '$1').replace($nh8P$var$characterReference, $nh8P$var$decodeIfPossible);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */


function $nh8P$var$decodeIfPossible($0, $1) {
  return $S7VQ$export$decodeEntity($1) || $0;
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['quote'], undefined>}
 */
function $VIp3$export$checkQuote(context) {
  const marker = context.options.quote || '"';

  if (marker !== '"' && marker !== "'") {
    throw new Error('Cannot serialize title with `' + marker + '` for `options.quote`, expected `"`, or `\'`');
  }

  return marker;
}

/**
 * @type {Handle}
 * @param {Definition} node
 */
function $N15W$export$definition(node, _, context) {
  const marker = $VIp3$export$checkQuote(context);
  const suffix = marker === '"' ? 'Quote' : 'Apostrophe';
  const exit = context.enter('definition');
  let subexit = context.enter('label');
  let value = '[' + $hCI8$export$safe(context, $nh8P$export$association(node), {
    before: '[',
    after: ']'
  }) + ']: ';
  subexit();

  if ( // If there’s no url, or…
  !node.url || // If there’s whitespace, enclosed is prettier.
  /[ \t\r\n]/.test(node.url)) {
    subexit = context.enter('destinationLiteral');
    value += '<' + $hCI8$export$safe(context, node.url, {
      before: '<',
      after: '>'
    }) + '>';
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw');
    value += $hCI8$export$safe(context, node.url, {
      before: ' ',
      after: ' '
    });
  }

  subexit();

  if (node.title) {
    subexit = context.enter('title' + suffix);
    value += ' ' + marker + $hCI8$export$safe(context, node.title, {
      before: marker,
      after: marker
    }) + marker;
    subexit();
  }

  exit();
  return value;
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['emphasis'], undefined>}
 */
function $FMxS$export$checkEmphasis(context) {
  const marker = context.options.emphasis || '*';

  if (marker !== '*' && marker !== '_') {
    throw new Error('Cannot serialize emphasis with `' + marker + '` for `options.emphasis`, expected `*`, or `_`');
  }

  return marker;
}

$ovgR$export$emphasis.peek = $ovgR$var$emphasisPeek; // To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?

/**
 * @type {Handle}
 * @param {Emphasis} node
 */

function $ovgR$export$emphasis(node, _, context) {
  const marker = $FMxS$export$checkEmphasis(context);
  const exit = context.enter('emphasis');
  const value = $bjW5$export$containerPhrasing(node, context, {
    before: marker,
    after: marker
  });
  exit();
  return marker + value + marker;
}
/**
 * @type {Handle}
 * @param {Emphasis} _
 */


function $ovgR$var$emphasisPeek(_, _1, context) {
  return context.options.emphasis || '*';
}

/**
 * @param {Heading} node
 * @param {Context} context
 * @returns {boolean}
 */
function $iV2Z$export$formatHeadingAsSetext(node, context) {
  return Boolean(context.options.setext && (!node.depth || node.depth < 3) && $DRco$export$toString(node));
}

/**
 * @type {Handle}
 * @param {Heading} node
 */
function $YhCP$export$heading(node, _, context) {
  const rank = Math.max(Math.min(6, node.depth || 1), 1);
  /** @type {Exit} */

  let exit;
  /** @type {Exit} */

  let subexit;
  /** @type {string} */

  let value;

  if ($iV2Z$export$formatHeadingAsSetext(node, context)) {
    exit = context.enter('headingSetext');
    subexit = context.enter('phrasing');
    value = $bjW5$export$containerPhrasing(node, context, {
      before: '\n',
      after: '\n'
    });
    subexit();
    exit();
    return value + '\n' + (rank === 1 ? '=' : '-').repeat( // The whole size…
    value.length - (Math.max(value.lastIndexOf('\r'), value.lastIndexOf('\n')) + 1));
  }

  const sequence = '#'.repeat(rank);
  exit = context.enter('headingAtx');
  subexit = context.enter('phrasing');
  value = $bjW5$export$containerPhrasing(node, context, {
    before: '# ',
    after: '\n'
  });
  value = value ? sequence + ' ' + value : sequence;

  if (context.options.closeAtx) {
    value += ' ' + sequence;
  }

  subexit();
  exit();
  return value;
}

/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../types.js').Handle} Handle
 */
$N0J8$export$html.peek = $N0J8$var$htmlPeek;
/**
 * @type {Handle}
 * @param {HTML} node
 */

function $N0J8$export$html(node) {
  return node.value || '';
}
/**
 * @type {Handle}
 */


function $N0J8$var$htmlPeek() {
  return '<';
}

$r3wN$export$image.peek = $r3wN$var$imagePeek;
/**
 * @type {Handle}
 * @param {Image} node
 */

function $r3wN$export$image(node, _, context) {
  const quote = $VIp3$export$checkQuote(context);
  const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
  const exit = context.enter('image');
  let subexit = context.enter('label');
  let value = '![' + $hCI8$export$safe(context, node.alt, {
    before: '[',
    after: ']'
  }) + '](';
  subexit();

  if ( // If there’s no url but there is a title…
  !node.url && node.title || // Or if there’s markdown whitespace or an eol, enclose.
  /[ \t\r\n]/.test(node.url)) {
    subexit = context.enter('destinationLiteral');
    value += '<' + $hCI8$export$safe(context, node.url, {
      before: '<',
      after: '>'
    }) + '>';
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw');
    value += $hCI8$export$safe(context, node.url, {
      before: '(',
      after: node.title ? ' ' : ')'
    });
  }

  subexit();

  if (node.title) {
    subexit = context.enter('title' + suffix);
    value += ' ' + quote + $hCI8$export$safe(context, node.title, {
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
 */


function $r3wN$var$imagePeek() {
  return '!';
}

$jouf$export$imageReference.peek = $jouf$var$imageReferencePeek;
/**
 * @type {Handle}
 * @param {ImageReference} node
 */

function $jouf$export$imageReference(node, _, context) {
  const type = node.referenceType;
  const exit = context.enter('imageReference');
  let subexit = context.enter('label');
  const alt = $hCI8$export$safe(context, node.alt, {
    before: '[',
    after: ']'
  });
  let value = '![' + alt + ']';
  subexit(); // Hide the fact that we’re in phrasing, because escapes don’t work.

  const stack = context.stack;
  context.stack = [];
  subexit = context.enter('reference');
  const reference = $hCI8$export$safe(context, $nh8P$export$association(node), {
    before: '[',
    after: ']'
  });
  subexit();
  context.stack = stack;
  exit();

  if (type === 'full' || !alt || alt !== reference) {
    value += '[' + reference + ']';
  } else if (type !== 'shortcut') {
    value += '[]';
  }

  return value;
}
/**
 * @type {Handle}
 */


function $jouf$var$imageReferencePeek() {
  return '!';
}

/**
 * @param {Link} node
 * @param {Context} context
 * @returns {boolean}
 */
function $A7YD$export$formatLinkAsAutolink(node, context) {
  const raw = $DRco$export$toString(node);
  return Boolean(!context.options.resourceLink && // If there’s a url…
  node.url && // And there’s a no title…
  !node.title && // And the content of `node` is a single text node…
  node.children && node.children.length === 1 && node.children[0].type === 'text' && (raw === node.url || 'mailto:' + raw === node.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(node.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work) or angle brackets…
  !/[\0- <>\u007F]/.test(node.url));
}

$RJyx$export$link.peek = $RJyx$var$linkPeek;
/**
 * @type {Handle}
 * @param {Link} node
 */

function $RJyx$export$link(node, _, context) {
  const quote = $VIp3$export$checkQuote(context);
  const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
  /** @type {Exit} */

  let exit;
  /** @type {Exit} */

  let subexit;
  /** @type {string} */

  let value;

  if ($A7YD$export$formatLinkAsAutolink(node, context)) {
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = context.stack;
    context.stack = [];
    exit = context.enter('autolink');
    value = '<' + $bjW5$export$containerPhrasing(node, context, {
      before: '<',
      after: '>'
    }) + '>';
    exit();
    context.stack = stack;
    return value;
  }

  exit = context.enter('link');
  subexit = context.enter('label');
  value = '[' + $bjW5$export$containerPhrasing(node, context, {
    before: '[',
    after: ']'
  }) + '](';
  subexit();

  if ( // If there’s no url but there is a title…
  !node.url && node.title || // Or if there’s markdown whitespace or an eol, enclose.
  /[ \t\r\n]/.test(node.url)) {
    subexit = context.enter('destinationLiteral');
    value += '<' + $hCI8$export$safe(context, node.url, {
      before: '<',
      after: '>'
    }) + '>';
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw');
    value += $hCI8$export$safe(context, node.url, {
      before: '(',
      after: node.title ? ' ' : ')'
    });
  }

  subexit();

  if (node.title) {
    subexit = context.enter('title' + suffix);
    value += ' ' + quote + $hCI8$export$safe(context, node.title, {
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
 */


function $RJyx$var$linkPeek(node, _, context) {
  return $A7YD$export$formatLinkAsAutolink(node, context) ? '<' : '[';
}

$cpag$export$linkReference.peek = $cpag$var$linkReferencePeek;
/**
 * @type {Handle}
 * @param {LinkReference} node
 */

function $cpag$export$linkReference(node, _, context) {
  const type = node.referenceType;
  const exit = context.enter('linkReference');
  let subexit = context.enter('label');
  const text = $bjW5$export$containerPhrasing(node, context, {
    before: '[',
    after: ']'
  });
  let value = '[' + text + ']';
  subexit(); // Hide the fact that we’re in phrasing, because escapes don’t work.

  const stack = context.stack;
  context.stack = [];
  subexit = context.enter('reference');
  const reference = $hCI8$export$safe(context, $nh8P$export$association(node), {
    before: '[',
    after: ']'
  });
  subexit();
  context.stack = stack;
  exit();

  if (type === 'full' || !text || text !== reference) {
    value += '[' + reference + ']';
  } else if (type !== 'shortcut') {
    value += '[]';
  }

  return value;
}
/**
 * @type {Handle}
 */


function $cpag$var$linkReferencePeek() {
  return '[';
}

/**
 * @type {Handle}
 * @param {List} node
 */
function $tcsE$export$list(node, _, context) {
  const exit = context.enter('list');
  const value = $UtAL$export$containerFlow(node, context);
  exit();
  return value;
}

/**
 * @type {Handle}
 * @param {Paragraph} node
 */
function $JqYW$export$paragraph(node, _, context) {
  const exit = context.enter('paragraph');
  const subexit = context.enter('phrasing');
  const value = $bjW5$export$containerPhrasing(node, context, {
    before: '\n',
    after: '\n'
  });
  subexit();
  exit();
  return value;
}

/**
 * @type {Handle}
 * @param {Root} node
 */
function $RDrX$export$root(node, _, context) {
  return $UtAL$export$containerFlow(node, context);
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['strong'], undefined>}
 */
function $RAkd$export$checkStrong(context) {
  const marker = context.options.strong || '*';

  if (marker !== '*' && marker !== '_') {
    throw new Error('Cannot serialize strong with `' + marker + '` for `options.strong`, expected `*`, or `_`');
  }

  return marker;
}

$G97W$export$strong.peek = $G97W$var$strongPeek; // To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?

/**
 * @type {Handle}
 * @param {Strong} node
 */

function $G97W$export$strong(node, _, context) {
  const marker = $RAkd$export$checkStrong(context);
  const exit = context.enter('strong');
  const value = $bjW5$export$containerPhrasing(node, context, {
    before: marker,
    after: marker
  });
  exit();
  return marker + marker + value + marker + marker;
}
/**
 * @type {Handle}
 * @param {Strong} _
 */


function $G97W$var$strongPeek(_, _1, context) {
  return context.options.strong || '*';
}

/**
 * @type {Handle}
 * @param {Text} node
 */
function $ep8N$export$text(node, _, context, safeOptions) {
  return $hCI8$export$safe(context, node.value, safeOptions);
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['ruleRepetition'], undefined>}
 */
function $oKch$export$checkRuleRepetition(context) {
  const repetition = context.options.ruleRepetition || 3;

  if (repetition < 3) {
    throw new Error('Cannot serialize rules with repetition `' + repetition + '` for `options.ruleRepetition`, expected `3` or more');
  }

  return repetition;
}

/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */

/**
 * @param {Context} context
 * @returns {Exclude<Options['rule'], undefined>}
 */
function $yUUA$export$checkRule(context) {
  const marker = context.options.rule || '*';

  if (marker !== '*' && marker !== '-' && marker !== '_') {
    throw new Error('Cannot serialize rules with `' + marker + '` for `options.rule`, expected `*`, `-`, or `_`');
  }

  return marker;
}

/**
 * @type {Handle}
 * @param {ThematicBreak} _
 */
function $pBG6$export$thematicBreak(_, _1, context) {
  const value = ($yUUA$export$checkRule(context) + (context.options.ruleSpaces ? ' ' : '')).repeat($oKch$export$checkRuleRepetition(context));
  return context.options.ruleSpaces ? value.slice(0, -1) : value;
}

const $NxO5$export$handle = {
  blockquote: $AORw$export$blockquote,
  break: $hiJF$export$hardBreak,
  code: $FoF0$export$code,
  definition: $N15W$export$definition,
  emphasis: $ovgR$export$emphasis,
  hardBreak: $hiJF$export$hardBreak,
  heading: $YhCP$export$heading,
  html: $N0J8$export$html,
  image: $r3wN$export$image,
  imageReference: $jouf$export$imageReference,
  inlineCode: $dy9Q$export$inlineCode,
  link: $RJyx$export$link,
  linkReference: $cpag$export$linkReference,
  list: $tcsE$export$list,
  listItem: $AhBl$export$listItem,
  paragraph: $JqYW$export$paragraph,
  root: $RDrX$export$root,
  strong: $G97W$export$strong,
  text: $ep8N$export$text,
  thematicBreak: $pBG6$export$thematicBreak
};

/** @type {Array.<Join>} */
const $ba4B$export$join = [$ba4B$var$joinDefaults];
/** @type {Join} */

function $ba4B$var$joinDefaults(left, right, parent, context) {
  if ( // Two lists with the same marker.
  right.type === 'list' && right.type === left.type && Boolean(left.ordered) === Boolean(right.ordered) || right.type === 'code' && $UK2E$export$formatCodeAsIndented(right, context) && (left.type === 'list' || left.type === right.type && $UK2E$export$formatCodeAsIndented(left, context))) {
    return false;
  } // Join children of a list or an item.
  // In which case, `parent` has a `spread` field.


  if ('spread' in parent && typeof parent.spread === 'boolean') {
    if (left.type === 'paragraph' && (left.type === right.type || right.type === 'definition' || right.type === 'heading' && $iV2Z$export$formatHeadingAsSetext(right, context))) {
      return;
    }

    return parent.spread ? 1 : 0;
  }
}

/**
 * @typedef {import('./types.js').Unsafe} Unsafe
 */

/** @type {Array.<Unsafe>} */
const $QvnC$export$unsafe = [{
  character: '\t',
  inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde']
}, {
  character: '\r',
  inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde', 'codeFencedMetaGraveAccent', 'codeFencedMetaTilde', 'destinationLiteral', 'headingAtx']
}, {
  character: '\n',
  inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde', 'codeFencedMetaGraveAccent', 'codeFencedMetaTilde', 'destinationLiteral', 'headingAtx']
}, {
  character: ' ',
  inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde']
}, // An exclamation mark can start an image, if it is followed by a link or
// a link reference.
{
  character: '!',
  after: '\\[',
  inConstruct: 'phrasing'
}, // A quote can break out of a title.
{
  character: '"',
  inConstruct: 'titleQuote'
}, // A number sign could start an ATX heading if it starts a line.
{
  atBreak: true,
  character: '#'
}, {
  character: '#',
  inConstruct: 'headingAtx',
  after: '(?:[\r\n]|$)'
}, // Dollar sign and percentage are not used in markdown.
// An ampersand could start a character reference.
{
  character: '&',
  after: '[#A-Za-z]',
  inConstruct: 'phrasing'
}, // An apostrophe can break out of a title.
{
  character: "'",
  inConstruct: 'titleApostrophe'
}, // A left paren could break out of a destination raw.
{
  character: '(',
  inConstruct: 'destinationRaw'
}, {
  before: '\\]',
  character: '(',
  inConstruct: 'phrasing'
}, // A right paren could start a list item or break out of a destination
// raw.
{
  atBreak: true,
  before: '\\d+',
  character: ')'
}, {
  character: ')',
  inConstruct: 'destinationRaw'
}, // An asterisk can start thematic breaks, list items, emphasis, strong.
{
  atBreak: true,
  character: '*'
}, {
  character: '*',
  inConstruct: 'phrasing'
}, // A plus sign could start a list item.
{
  atBreak: true,
  character: '+'
}, // A dash can start thematic breaks, list items, and setext heading
// underlines.
{
  atBreak: true,
  character: '-'
}, // A dot could start a list item.
{
  atBreak: true,
  before: '\\d+',
  character: '.',
  after: '(?:[ \t\r\n]|$)'
}, // Slash, colon, and semicolon are not used in markdown for constructs.
// A less than can start html (flow or text) or an autolink.
// HTML could start with an exclamation mark (declaration, cdata, comment),
// slash (closing tag), question mark (instruction), or a letter (tag).
// An autolink also starts with a letter.
// Finally, it could break out of a destination literal.
{
  atBreak: true,
  character: '<',
  after: '[!/?A-Za-z]'
}, {
  character: '<',
  after: '[!/?A-Za-z]',
  inConstruct: 'phrasing'
}, {
  character: '<',
  inConstruct: 'destinationLiteral'
}, // An equals to can start setext heading underlines.
{
  atBreak: true,
  character: '='
}, // A greater than can start block quotes and it can break out of a
// destination literal.
{
  atBreak: true,
  character: '>'
}, {
  character: '>',
  inConstruct: 'destinationLiteral'
}, // Question mark and at sign are not used in markdown for constructs.
// A left bracket can start definitions, references, labels,
{
  atBreak: true,
  character: '['
}, {
  character: '[',
  inConstruct: ['phrasing', 'label', 'reference']
}, // A backslash can start an escape (when followed by punctuation) or a
// hard break (when followed by an eol).
// Note: typical escapes are handled in `safe`!
{
  character: '\\',
  after: '[\\r\\n]',
  inConstruct: 'phrasing'
}, // A right bracket can exit labels.
{
  character: ']',
  inConstruct: ['label', 'reference']
}, // Caret is not used in markdown for constructs.
// An underscore can start emphasis, strong, or a thematic break.
{
  atBreak: true,
  character: '_'
}, {
  before: '[^A-Za-z]',
  character: '_',
  inConstruct: 'phrasing'
}, {
  character: '_',
  after: '[^A-Za-z]',
  inConstruct: 'phrasing'
}, // A grave accent can start code (fenced or text), or it can break out of
// a grave accent code fence.
{
  atBreak: true,
  character: '`'
}, {
  character: '`',
  inConstruct: ['codeFencedLangGraveAccent', 'codeFencedMetaGraveAccent', 'phrasing']
}, // Left brace, vertical bar, right brace are not used in markdown for
// constructs.
// A tilde can start code (fenced).
{
  atBreak: true,
  character: '~'
}];

/**
 * @param {Node} tree
 * @param {Options} [options]
 * @returns {string}
 */
function $px1R$export$toMarkdown(tree, options = {}) {
  /** @type {Context} */
  // @ts-expect-error: we’ll add `handle` later.
  const context = {
    enter,
    stack: [],
    unsafe: [],
    join: [],
    handlers: {},
    options: {}
  };
  $Ppel$export$configure(context, {
    unsafe: $QvnC$export$unsafe,
    join: $ba4B$export$join,
    handlers: $NxO5$export$handle
  });
  $Ppel$export$configure(context, options);

  if (context.options.tightDefinitions) {
    $Ppel$export$configure(context, {
      join: [$px1R$var$joinDefinition]
    });
  }
  /** @type {Handle} */


  context.handle = $nGVJ$export$zwitch('type', {
    invalid: $px1R$var$invalid,
    // @ts-expect-error: hush.
    unknown: $px1R$var$unknown,
    // @ts-expect-error: hush.
    handlers: context.handlers
  });
  let result = context.handle(tree, null, context, {
    before: '\n',
    after: '\n'
  });

  if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
    result += '\n';
  }

  return result;
  /** @type {Context['enter']} */

  function enter(name) {
    context.stack.push(name);
    return exit;

    function exit() {
      context.stack.pop();
    }
  }
}
/**
 * @type {Handle}
 * @param {unknown} value
 */


function $px1R$var$invalid(value) {
  throw new Error('Cannot handle value `' + value + '`, expected node');
}
/**
 * @type {Handle}
 * @param {Node} node
 */


function $px1R$var$unknown(node) {
  throw new Error('Cannot handle unknown node `' + node.type + '`');
}
/** @type {Join} */


function $px1R$var$joinDefinition(left, right) {
  // No blank line between adjacent definitions.
  if (left.type === 'definition' && left.type === right.type) {
    return 0;
  }
}

/** @type {import('unified').Plugin<[Options]|void[], Node, string>} */
function $pw5r$export$default(options) {
  /** @type {import('unified').CompilerFunction<Node, string>} */
  const compiler = tree => {
    // Assume options.
    const settings = this.data('settings');
    return $px1R$export$toMarkdown(tree, Object.assign({}, settings, options, {
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

// ASSET: ../../../github-slugger/node_modules/emoji-regex/index.js
var $WM81$exports = {};

$WM81$exports = function () {
  return /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g;
};

// ASSET: ../../../github-slugger/index.js
var $FOWw$exports = {};
$FOWw$exports = $FOWw$var$BananaSlug;
var $FOWw$var$own = Object.hasOwnProperty;
var $FOWw$var$whitespace = /\s/g;
var $FOWw$var$specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;

function $FOWw$var$BananaSlug() {
  var self = this;
  if (!(self instanceof $FOWw$var$BananaSlug)) return new $FOWw$var$BananaSlug();
  self.reset();
}
/**
 * Generate a unique slug.
 * @param  {string} value String of text to slugify
 * @param  {boolean} [false] Keep the current case, otherwise make all lowercase
 * @return {string}       A unique slug string
 */


$FOWw$var$BananaSlug.prototype.slug = function (value, maintainCase) {
  var self = this;
  var slug = $FOWw$var$slugger(value, maintainCase === true);
  var originalSlug = slug;

  while ($FOWw$var$own.call(self.occurrences, slug)) {
    self.occurrences[originalSlug]++;
    slug = originalSlug + '-' + self.occurrences[originalSlug];
  }

  self.occurrences[slug] = 0;
  return slug;
};
/**
 * Reset - Forget all previous slugs
 * @return void
 */


$FOWw$var$BananaSlug.prototype.reset = function () {
  this.occurrences = Object.create(null);
};

function $FOWw$var$slugger(string, maintainCase) {
  if (typeof string !== 'string') return '';
  if (!maintainCase) string = string.toLowerCase();
  return string.trim().replace($FOWw$var$specials, '').replace($WM81$exports(), '').replace($FOWw$var$whitespace, '-');
}

$FOWw$var$BananaSlug.slug = $FOWw$var$slugger;

const $wBl8$export$visit =
/**
 * Visit children of tree which pass a test
 *
 * @param {Node} tree Abstract syntax tree to walk
 * @param {Test} test test Test node
 * @param {Visitor<Node>} visitor Function to run for each node
 * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
 */
function (tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  $hzw0$export$visitParents(tree, test, overload, reverse);
  /**
   * @param {Node} node
   * @param {Array.<Parent>} parents
   */

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

/**
 * Transform a string into an applicable expression.
 *
 * @param {string} value
 * @returns {RegExp}
 */
function $lKTi$export$toExpression(value) {
  return new RegExp('^(' + value + ')$', 'i');
}

var $FOWw$$interop$default = $parcel$interopDefault($FOWw$exports);
const $ONEv$var$slugs = new $FOWw$$interop$default.d();
/**
 * Search a node for a toc.
 *
 * @param {Node} root
 * @param {RegExp|null} expression
 * @param {SearchOptions} settings
 * @returns {SearchResult}
 */

function $ONEv$export$search(root, expression, settings) {
  const skip = settings.skip && $lKTi$export$toExpression(settings.skip);
  const parents = $obk0$export$convert(settings.parents || (d => d === root));
  /** @type {Array.<SearchEntry>} */

  const map = [];
  /** @type {number|undefined} */

  let index;
  /** @type {number} */

  let endIndex;
  /** @type {Heading} */

  let opening;
  $ONEv$var$slugs.reset(); // Visit all headings in `root`.  We `slug` all headings (to account for
  // duplicates), but only create a TOC from top-level headings (by default).

  $wBl8$export$visit(root, 'heading', onheading);
  return {
    index: index || -1,
    // <sindresorhus/eslint-plugin-unicorn#980>
    // @ts-expect-error Looks like a parent.
    endIndex: index ? endIndex || root.children.length : -1,
    // eslint-disable-line unicorn/explicit-length-check
    map
  };
  /** @type {HeadingVisitor} */

  function onheading(node, position, parent) {
    const value = $DRco$export$toString(node, {
      includeImageAlt: false
    });
    /** @type {string} */
    // @ts-expect-error `hProperties` from <https://github.com/syntax-tree/mdast-util-to-hast>

    const id = node.data && node.data.hProperties && node.data.hProperties.id;
    const slug = $ONEv$var$slugs.slug(id || value);

    if (!parents(parent)) {
      return;
    } // Our opening heading.


    if (position !== null && expression && !index && expression.test(value)) {
      index = position + 1;
      opening = node;
      return;
    } // Our closing heading.


    if (position !== null && opening && !endIndex && node.depth <= opening.depth) {
      endIndex = position;
    } // A heading after the closing (if we were looking for one).


    if ((endIndex || !expression) && (!settings.maxDepth || node.depth <= settings.maxDepth) && (!skip || !skip.test(value))) {
      map.push({
        depth: node.depth,
        children: node.children,
        id: slug
      });
    }
  }
}

/**
 * Transform a list of heading objects to a markdown list.
 *
 * @param {Array.<SearchEntry>} map
 * @param {ContentsOptions} settings
 */
function $G7LS$export$contents(map, settings) {
  const {
    ordered = false,
    tight = false,
    prefix = null
  } = settings;
  /** @type {List} */

  const table = {
    type: 'list',
    ordered,
    spread: false,
    children: []
  };
  let minDepth = Number.POSITIVE_INFINITY;
  let index = -1; // Find minimum depth.

  while (++index < map.length) {
    if (map[index].depth < minDepth) {
      minDepth = map[index].depth;
    }
  } // Normalize depth.


  index = -1;

  while (++index < map.length) {
    map[index].depth -= minDepth - 1;
  } // Add TOC to list.


  index = -1;

  while (++index < map.length) {
    $G7LS$var$insert(map[index], table, {
      ordered,
      tight,
      prefix
    });
  }

  return table;
}
/**
 * Insert an entry into `parent`.
 *
 * @param {SearchEntry} entry
 * @param {List|ListItem} parent
 * @param {ContentsOptions} settings
 */


function $G7LS$var$insert(entry, parent, settings) {
  let index = -1;

  if (parent.type === 'list') {
    if (entry.depth === 1) {
      parent.children.push({
        type: 'listItem',
        spread: false,
        children: [{
          type: 'paragraph',
          children: [{
            type: 'link',
            title: null,
            url: '#' + (settings.prefix || '') + entry.id,
            children: $G7LS$var$all(entry.children)
          }]
        }]
      });
    } else if (parent.children.length > 0) {
      $G7LS$var$insert(entry, parent.children[parent.children.length - 1], settings);
    } else {
      /** @type {ListItem} */
      const item = {
        type: 'listItem',
        spread: false,
        children: []
      };
      parent.children.push(item);
      $G7LS$var$insert(entry, item, settings);
    }
  } // List item
  else if (parent.children[parent.children.length - 1] && parent.children[parent.children.length - 1].type === 'list') {
    entry.depth--;
    $G7LS$var$insert(entry, // @ts-expect-error It’s a `list`, we just checked.
    parent.children[parent.children.length - 1], settings);
  } else {
    /** @type {List} */
    const item = {
      type: 'list',
      ordered: settings.ordered,
      spread: false,
      children: []
    };
    parent.children.push(item);
    entry.depth--;
    $G7LS$var$insert(entry, item, settings);
  }

  if (parent.type === 'list' && !settings.tight) {
    parent.spread = false;

    while (++index < parent.children.length) {
      if (parent.children[index].children.length > 1) {
        parent.spread = true;
        break;
      }
    }
  } else {
    parent.spread = !settings.tight;
  }
}
/**
 * @param {Array.<PhrasingContent>} [nodes]
 * @returns {Array.<StaticPhrasingContent>}
 */


function $G7LS$var$all(nodes) {
  /** @type {Array.<StaticPhrasingContent>} */
  let result = [];
  let index = -1;

  if (nodes) {
    while (++index < nodes.length) {
      result = result.concat($G7LS$var$one(nodes[index]));
    }
  }

  return result;
}
/**
 * @param {PhrasingContent} node
 * @returns {StaticPhrasingContent|Array.<StaticPhrasingContent>}
 */


function $G7LS$var$one(node) {
  if (node.type === 'link' || node.type === 'linkReference' || node.type === 'footnote' || node.type === 'footnoteReference') {
    // @ts-expect-error Looks like a parent.
    return $G7LS$var$all(node.children);
  }

  if ('children' in node) {
    const {
      children,
      position,
      ...copy
    } = node;
    var $escf$$interop$default = $parcel$interopDefault($escf$exports);
    return Object.assign($escf$$interop$default.d(true, {}, copy), {
      children: $G7LS$var$all(node.children)
    });
  }

  const {
    position,
    ...copy
  } = node;
  var $escf$$interop$default = $parcel$interopDefault($escf$exports);
  return $escf$$interop$default.d(true, {}, copy);
}

/**
 * Get a TOC representation of `node`.
 *
 * @param {Node} node
 * @param {Options} [options]
 * @returns {Result}
 */
function $HFu3$export$toc(node, options) {
  const settings = options || {};
  const heading = settings.heading ? $lKTi$export$toExpression(settings.heading) : null;
  const result = $ONEv$export$search(node, heading, settings);
  return {
    index: heading ? result.index : null,
    endIndex: heading ? result.endIndex : null,
    map: result.map.length > 0 ? $G7LS$export$contents(result.map, settings) : null
  };
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist').Literal} Literal
 * @typedef {Object.<string, unknown>} Props
 * @typedef {Array.<Node>|string} ChildrenOrValue
 *
 * @typedef {(<T extends string, P extends Record<string, unknown>, C extends Node[]>(type: T, props: P, children: C) => {type: T, children: C} & P)} BuildParentWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P, value: string) => {type: T, value: string} & P)} BuildLiteralWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P) => {type: T} & P)} BuildVoidWithProps
 * @typedef {(<T extends string, C extends Node[]>(type: T, children: C) => {type: T, children: C})} BuildParent
 * @typedef {(<T extends string>(type: T, value: string) => {type: T, value: string})} BuildLiteral
 * @typedef {(<T extends string>(type: T) => {type: T})} BuildVoid
 */
var $ENoQ$export$u =
/**
 * @param {string} type Type of node
 * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
 * @param {ChildrenOrValue} [value] `children` or `value` of node
 * @returns {Node}
 */
function (type, props, value) {
  /** @type {Node} */
  var node = {
    type: String(type)
  };

  if ((value === undefined || value === null) && (typeof props === 'string' || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }

  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== undefined && value !== null) {
    node.value = String(value);
  }

  return node;
};

const $iJA9$export$homePage = 'https://github.com/quilicicf/markdown-formatter'; // NOTE: must be the same as in package.json

const $iJA9$export$DEFAULT_TOC_OPTIONS = {
  min: 2,
  max: 4
};
const $iJA9$export$TOC_START_MATCHER = /^<!-- TOC START(.*) -->$/;
const $iJA9$export$TOC_END_MATCHER = /^<!-- TOC END(.*) -->$/;
const $iJA9$export$WATERMARK_VALUES = {
  NONE: 'none',
  TOP: 'top',
  TOC: 'toc'
};
const $iJA9$export$WATERMARK_TOP = `<!-- Formatted by ${$iJA9$export$homePage} -->`;
const $iJA9$export$WATERMARK_TOC = `<!-- TOC END: Formatted by ${$iJA9$export$homePage} -->`;
const $iJA9$export$DEFAULT_MARKDOWN_FORMATTER_OPTIONS = {
  watermark: $iJA9$export$WATERMARK_VALUES.NONE
};
const $iJA9$export$DEFAULT_STRINGIFY_OPTIONS = {
  bullet: '*',
  emphasis: '_',
  fences: true,
  gfm: true,
  listItemIndent: '1',
  rule: '-',
  ruleSpaces: false,
  strong: '_'
};

var $mYqI$export$default = part => part.type === 'html' && $iJA9$export$TOC_START_MATCHER.test(part.value);

var $IE7T$export$default = part => part.type === 'html' && $iJA9$export$TOC_END_MATCHER.test(part.value);

var $TRHz$export$default = tree => tree.children.reduce((seed, part) => {
  if (seed.tocStart && !seed.isInToc) {
    return seed;
  }

  if ($IE7T$export$default(part)) {
    return { ...seed,
      isInToc: false
    };
  }

  if ($mYqI$export$default(part)) {
    return { ...seed,
      tocStart: part,
      tocStartIndex: seed.tocStartIndex,
      isInToc: true
    };
  }

  return seed.isInToc ? { ...seed,
    tocContent: [...seed.tocContent, part],
    tocSize: seed.tocSize + 1
  } : { ...seed,
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
 */
const $crC0$export$default = (regex, string, matchHandler = i => i, currentMatches = []) => {
  const nextMatch = regex.exec(string);

  if (!nextMatch) {
    return currentMatches;
  }

  return [...$crC0$export$default(regex, string, matchHandler, [...currentMatches, matchHandler(nextMatch)])];
};

const $AmlW$var$CONFIG_CLEANERS = {
  min(minAsString) {
    try {
      return parseInt(minAsString, 10);
    } catch (error) {
      throw Error(`Min must be a number, got ${minAsString}`);
    }
  },

  max(maxAsString) {
    try {
      return parseInt(maxAsString, 10);
    } catch (error) {
      throw Error(`Min must be a number, got ${maxAsString}`);
    }
  }

};

var $AmlW$export$default = tocStart => {
  const configAsString = $iJA9$export$TOC_START_MATCHER.exec(tocStart)[1];
  const configItems = $crC0$export$default(/([^\s:]+):([^\s]+)/g, configAsString, match => ({
    key: match[1],
    value: match[2]
  }));
  return configItems.map(configItem => {
    if (!$AmlW$var$CONFIG_CLEANERS[configItem.key]) {
      return configItem;
    }

    try {
      return {
        key: configItem.key,
        value: $AmlW$var$CONFIG_CLEANERS[configItem.key](configItem.value)
      };
    } catch (error) {
      process.stderr.write(error.message);
      return {};
    }
  }).filter(Boolean).reduce((seed, {
    value,
    key
  }) => ({ ...seed,
    [key]: value
  }), {});
};

var $opTw$export$default = (number, {
  min,
  max
}) => number >= min && number <= max;

const $dEww$var$transformer = (tree, file) => {
  const tocStartFinder = $TRHz$export$default(tree);

  if (!tocStartFinder.tocStart) {
    file.info('No ToC start found, only simple formatting was done');
    return;
  }

  const tocConfiguration = { ...$iJA9$export$DEFAULT_TOC_OPTIONS,
    ...$AmlW$export$default(tocStartFinder.tocStart.value)
  };
  const filteredHeadings = tree.children.filter(part => part.type === 'heading' && $opTw$export$default(part.depth, tocConfiguration));
  const toc = $HFu3$export$toc($ENoQ$export$u('root', filteredHeadings)).map;
  tree.children.splice(tocStartFinder.tocStartIndex + 1, tocStartFinder.tocSize, toc);
};

var $dEww$export$default = () => $dEww$var$transformer;

var $JHHi$export$default = tree => {
  const tocEnd = tree.children.find(part => $IE7T$export$default(part));

  if (tocEnd) {
    tocEnd.value = $iJA9$export$WATERMARK_TOC;
  }
};

const $LksJ$var$isWatermarkTop = part => part.type === 'html' && part.value === $iJA9$export$WATERMARK_TOP;

var $LksJ$export$default = (tree, file) => {
  const watermarkIndex = tree.children // Watermark can be moved by user
  .map((part, index) => ({
    part,
    index
  })).filter(({
    part
  }) => $LksJ$var$isWatermarkTop(part)).map(({
    index
  }) => index).find(() => true);

  if (typeof watermarkIndex === 'number') {
    file.info(`Watermark found at index ${watermarkIndex}, destroying it to replace it`);
    tree.children.splice(watermarkIndex, 1);
  }
};

var $Rxbc$export$default = watermarkType => () => (tree, file) => {
  $LksJ$export$default(tree, file);

  if (watermarkType === $iJA9$export$WATERMARK_VALUES.NONE) {
    return;
  }

  if (watermarkType === $iJA9$export$WATERMARK_VALUES.TOP) {
    tree.children.splice(0, 0, {
      type: 'html',
      value: $iJA9$export$WATERMARK_TOP
    });
  }

  if (watermarkType === $iJA9$export$WATERMARK_VALUES.TOC) {
    $JHHi$export$default(tree);
  }
};

var $hGuP$export$default = async (sourceString, parameterMarkdownFormatterOptions = {}, parameterStringifyOptions = {}) => {
  const markdownFormatterOptions = { ...$iJA9$export$DEFAULT_MARKDOWN_FORMATTER_OPTIONS,
    ...parameterMarkdownFormatterOptions
  };
  const stringifyOptions = { ...$iJA9$export$DEFAULT_STRINGIFY_OPTIONS,
    ...parameterStringifyOptions
  };
  return $H2iU$export$unified().use($Thyu$export$default).use($Egyt$export$default).use($dEww$export$default).use($Rxbc$export$default(markdownFormatterOptions.watermark)).use($pw5r$export$default, stringifyOptions).process(sourceString);
};

$hGuP$exports.default = $hGuP$export$default;

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $hGuP$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $hGuP$exports;
  });
}
})();