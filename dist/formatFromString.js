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
function $qJlb$export$bail(error) {
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

function $AyWP$export$default(value) {
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
function $xt70$export$trough() {
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
        $xt70$export$wrap(fn, next)(...output);
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


function $xt70$export$wrap(middleware, callback) {
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
const $fKtl$export$proc = process;
var $UVIV$var$own = {}.hasOwnProperty;
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

function $UVIV$export$stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return '';
  } // Node.


  if ($UVIV$var$own.call(value, 'position') || $UVIV$var$own.call(value, 'type')) {
    // @ts-ignore looks like a node.
    return $UVIV$var$position(value.position);
  } // Position.


  if ($UVIV$var$own.call(value, 'start') || $UVIV$var$own.call(value, 'end')) {
    // @ts-ignore looks like a position.
    return $UVIV$var$position(value);
  } // Point.


  if ($UVIV$var$own.call(value, 'line') || $UVIV$var$own.call(value, 'column')) {
    // @ts-ignore looks like a point.
    return $UVIV$var$point(value);
  } // ?


  return '';
}
/**
 * @param {Point} point
 * @returns {string}
 */


function $UVIV$var$point(point) {
  return $UVIV$var$index(point && point.line) + ':' + $UVIV$var$index(point && point.column);
}
/**
 * @param {Position} pos
 * @returns {string}
 */


function $UVIV$var$position(pos) {
  return $UVIV$var$point(pos && pos.start) + '-' + $UVIV$var$point(pos && pos.end);
}
/**
 * @param {number} value
 * @returns {number}
 */


function $UVIV$var$index(value) {
  return value && typeof value === 'number' ? value : 1;
}

class $HT8C$export$VFileMessage extends Error {
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
        position = place.position;
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


    this.name = $UVIV$export$stringifyPosition(place) || '1:1';
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

$HT8C$export$VFileMessage.prototype.file = '';
$HT8C$export$VFileMessage.prototype.name = '';
$HT8C$export$VFileMessage.prototype.reason = '';
$HT8C$export$VFileMessage.prototype.message = '';
$HT8C$export$VFileMessage.prototype.stack = '';
$HT8C$export$VFileMessage.prototype.fatal = null;
$HT8C$export$VFileMessage.prototype.column = null;
$HT8C$export$VFileMessage.prototype.line = null;
$HT8C$export$VFileMessage.prototype.source = null;
$HT8C$export$VFileMessage.prototype.ruleId = null;
$HT8C$export$VFileMessage.prototype.position = null;
// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var $pr2S$var$order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];

class $pr2S$export$VFile {
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

    this.cwd = $fKtl$export$proc.cwd();
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

    while (++index < $pr2S$var$order.length) {
      prop = $pr2S$var$order[index]; // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.

      if (prop in options && options[prop] !== undefined) {
        this[prop] = prop === 'history' ? options[prop].concat() : options[prop];
      }
    } // Set non-path related properties.


    for (prop in options) {
      if (!$pr2S$var$order.includes(prop)) {
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
    $pr2S$var$assertNonEmpty(path, 'path');

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
    $pr2S$var$assertPath(this.path, 'dirname');
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
    $pr2S$var$assertNonEmpty(basename, 'basename');
    $pr2S$var$assertPart(basename, 'basename');
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
    $pr2S$var$assertPart(extname, 'extname');
    $pr2S$var$assertPath(this.path, 'extname');

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
    $pr2S$var$assertNonEmpty(stem, 'stem');
    $pr2S$var$assertPart(stem, 'stem');
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
    var message = new $HT8C$export$VFileMessage(reason, place, origin);

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


function $pr2S$var$assertPart(part, name) {
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


function $pr2S$var$assertNonEmpty(part, name) {
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


function $pr2S$var$assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

// Expose a frozen processor.
const $daLJ$export$unified = $daLJ$var$base().freeze();
const $daLJ$var$own = {}.hasOwnProperty; // Function to create the first processor.

/**
 * @returns {Processor}
 */

function $daLJ$var$base() {
  const transformers = $xt70$export$trough();
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
    const destination = $daLJ$var$base();
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
        $daLJ$var$assertUnfrozen('data', frozen);
        namespace[key] = value;
        return processor;
      } // Get `key`.


      return $daLJ$var$own.call(namespace, key) && namespace[key] || null;
    } // Set space.


    if (key) {
      $daLJ$var$assertUnfrozen('data', frozen);
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
    $daLJ$var$assertUnfrozen('use', frozen);

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
        if ($AyWP$export$default(entry[1]) && $AyWP$export$default(value)) {
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
    const file = $daLJ$var$vfile(doc);
    const Parser = processor.Parser;
    $daLJ$var$assertParser('parse', Parser);

    if ($daLJ$var$newable(Parser, 'parse')) {
      // @ts-expect-error: `newable` checks this.
      return new Parser(String(file), file).parse();
    } // @ts-expect-error: `newable` checks this.


    return Parser(String(file), file); // eslint-disable-line new-cap
  }
  /** @type {Processor['stringify']} */


  function stringify(node, doc) {
    processor.freeze();
    const file = $daLJ$var$vfile(doc);
    const Compiler = processor.Compiler;
    $daLJ$var$assertCompiler('stringify', Compiler);
    $daLJ$var$assertNode(node);

    if ($daLJ$var$newable(Compiler, 'compile')) {
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
    $daLJ$var$assertNode(node);
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
      transformers.run(node, $daLJ$var$vfile(doc), done);
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
    $daLJ$var$assertDone('runSync', 'run', complete); // @ts-expect-error: we either bailed on an error or have a tree.

    return result;
    /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */

    function done(error, tree) {
      $qJlb$export$bail(error);
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
    $daLJ$var$assertParser('process', processor.Parser);
    $daLJ$var$assertCompiler('process', processor.Compiler);

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
      const file = $daLJ$var$vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file) => {
        if (error || !tree || !file) {
          done(error);
        } else {
          /** @type {unknown} */
          const result = processor.stringify(tree, file);

          if (result === undefined || result === null) {// Empty.
          } else if ($daLJ$var$looksLikeAVFileValue(result)) {
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
    $daLJ$var$assertParser('processSync', processor.Parser);
    $daLJ$var$assertCompiler('processSync', processor.Compiler);
    const file = $daLJ$var$vfile(doc);
    processor.process(file, done);
    $daLJ$var$assertDone('processSync', 'process', complete);
    return file;
    /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */

    function done(error) {
      complete = true;
      $qJlb$export$bail(error);
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


function $daLJ$var$newable(value, name) {
  return typeof value === 'function' && // Prototypes do exist.
  // type-coverage:ignore-next-line
  value.prototype && ($daLJ$var$keys(value.prototype) || name in value.prototype);
}
/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */


function $daLJ$var$keys(value) {
  /** @type {string} */
  let key;

  for (key in value) {
    if ($daLJ$var$own.call(value, key)) {
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


function $daLJ$var$assertParser(name, value) {
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


function $daLJ$var$assertCompiler(name, value) {
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


function $daLJ$var$assertUnfrozen(name, frozen) {
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


function $daLJ$var$assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!$AyWP$export$default(node) || typeof node.type !== 'string') {
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


function $daLJ$var$assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}
/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */


function $daLJ$var$vfile(value) {
  return $daLJ$var$looksLikeAVFile(value) ? value : new $pr2S$export$VFile(value);
}
/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */


function $daLJ$var$looksLikeAVFile(value) {
  return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */


function $daLJ$var$looksLikeAVFileValue(value) {
  var $TdTf$$interop$default = $parcel$interopDefault($TdTf$exports);
  return typeof value === 'string' || $TdTf$$interop$default.d(value);
}

// ASSET: ../../../mdast-util-from-markdown/index.js
var $dzvc$exports = {};
// ASSET: ../../../mdast-util-to-string/index.js
var $DRco$exports = {};
$DRco$exports = $DRco$var$toString; // Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.

function $DRco$var$toString(node) {
  return node && (node.value || node.alt || node.title || 'children' in node && $DRco$var$all(node.children) || 'length' in node && $DRco$var$all(node)) || '';
}

function $DRco$var$all(values) {
  var result = [];
  var index = -1;

  while (++index < values.length) {
    result[index] = $DRco$var$toString(values[index]);
  }

  return result.join('');
}

// ASSET: ../../../micromark/dist/constant/assign.js
var $SwwW$exports = {};
var $SwwW$var$assign = Object.assign;
$SwwW$exports = $SwwW$var$assign;
// ASSET: ../../../micromark/dist/constant/has-own-property.js
var $vhRA$exports = {};
var $vhRA$var$own = {}.hasOwnProperty;
$vhRA$exports = $vhRA$var$own;
// ASSET: ../../../micromark/dist/util/normalize-identifier.js
var $EPia$exports = {};

function $EPia$var$normalizeIdentifier(value) {
  return value // Collapse Markdown whitespace.
  .replace(/[\t\n\r ]+/g, ' ') // Trim.
  .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
  // counterpart is uppercased will result in a different uppercase
  // character.
  // Hence, to get that form, we perform both lower- and uppercase.
  // Upper case makes sure keys will not interact with default prototypal
  // methods: no object method is uppercase.
  .toLowerCase().toUpperCase();
}

$EPia$exports = $EPia$var$normalizeIdentifier;
// ASSET: ../../../micromark/dist/constant/from-char-code.js
var $sqCd$exports = {};
var $sqCd$var$fromCharCode = String.fromCharCode;
$sqCd$exports = $sqCd$var$fromCharCode;
// ASSET: ../../../micromark/dist/util/safe-from-int.js
var $gHMX$exports = {};

function $gHMX$var$safeFromInt(value, base) {
  var code = parseInt(value, base);

  if ( // C0 except for HT, LF, FF, CR, space
  code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || // Out of range
  code > 1114111) {
    return '\uFFFD';
  }

  return $sqCd$exports(code);
}

$gHMX$exports = $gHMX$var$safeFromInt;
// ASSET: ../../../micromark/dist/util/miniflat.js
var $wvwD$exports = {};

function $wvwD$var$miniflat(value) {
  return value === null || value === undefined ? [] : 'length' in value ? value : [value];
}

$wvwD$exports = $wvwD$var$miniflat;
// ASSET: ../../../micromark/dist/character/markdown-line-ending.js
var $sF0i$exports = {};

function $sF0i$var$markdownLineEnding(code) {
  return code < -2;
}

$sF0i$exports = $sF0i$var$markdownLineEnding;
// ASSET: ../../../micromark/dist/character/markdown-space.js
var $fL2l$exports = {};

function $fL2l$var$markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}

$fL2l$exports = $fL2l$var$markdownSpace;
// ASSET: ../../../micromark/dist/tokenize/factory-space.js
var $VZrc$exports = {};

function $VZrc$var$spaceFactory(effects, ok, type, max) {
  var limit = max ? max - 1 : Infinity;
  var size = 0;
  return start;

  function start(code) {
    if ($fL2l$exports(code)) {
      effects.enter(type);
      return prefix(code);
    }

    return ok(code);
  }

  function prefix(code) {
    if ($fL2l$exports(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }

    effects.exit(type);
    return ok(code);
  }
}

$VZrc$exports = $VZrc$var$spaceFactory;
// ASSET: ../../../micromark/dist/initialize/content.js
var $igBv$exports = {};
Object.defineProperty($igBv$exports, '__esModule', {
  value: true
});
var $igBv$var$tokenize = $igBv$var$initializeContent;

function $igBv$var$initializeContent(effects) {
  var contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  var previous;
  return contentStart;

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $VZrc$exports(effects, contentStart, 'linePrefix');
  }

  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code);
  }

  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous: previous
    });

    if (previous) {
      previous.next = token;
    }

    previous = token;
    return data(code);
  }

  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return;
    }

    if ($sF0i$exports(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart;
    } // Data.


    effects.consume(code);
    return data;
  }
}

var $igBv$export$tokenize = $igBv$var$tokenize;
$igBv$exports.tokenize = $igBv$export$tokenize;
// ASSET: ../../../micromark/dist/tokenize/partial-blank-line.js
var $kOzL$exports = {};
var $kOzL$var$partialBlankLine = {
  tokenize: $kOzL$var$tokenizePartialBlankLine,
  partial: true
};

function $kOzL$var$tokenizePartialBlankLine(effects, ok, nok) {
  return $VZrc$exports(effects, afterWhitespace, 'linePrefix');

  function afterWhitespace(code) {
    return code === null || $sF0i$exports(code) ? ok(code) : nok(code);
  }
}

$kOzL$exports = $kOzL$var$partialBlankLine;
// ASSET: ../../../micromark/dist/initialize/document.js
var $ofuD$exports = {};
Object.defineProperty($ofuD$exports, '__esModule', {
  value: true
});
var $ofuD$var$tokenize = $ofuD$var$initializeDocument;
var $ofuD$var$containerConstruct = {
  tokenize: $ofuD$var$tokenizeContainer
};
var $ofuD$var$lazyFlowConstruct = {
  tokenize: $ofuD$var$tokenizeLazyFlow
};

function $ofuD$var$initializeDocument(effects) {
  var self = this;
  var stack = [];
  var continued = 0;
  var inspectConstruct = {
    tokenize: tokenizeInspect,
    partial: true
  };
  var inspectResult;
  var childFlow;
  var childToken;
  return start;

  function start(code) {
    if (continued < stack.length) {
      self.containerState = stack[continued][1];
      return effects.attempt(stack[continued][0].continuation, documentContinue, documentContinued)(code);
    }

    return documentContinued(code);
  }

  function documentContinue(code) {
    continued++;
    return start(code);
  }

  function documentContinued(code) {
    // If we’re in a concrete construct (such as when expecting another line of
    // HTML, or we resulted in lazy content), we can immediately start flow.
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code);
    }

    self.interrupt = childFlow && childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
    self.containerState = {};
    return effects.attempt($ofuD$var$containerConstruct, containerContinue, flowStart)(code);
  }

  function containerContinue(code) {
    stack.push([self.currentConstruct, self.containerState]);
    self.containerState = undefined;
    return documentContinued(code);
  }

  function flowStart(code) {
    if (code === null) {
      exitContainers(0, true);
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

  function flowContinue(code) {
    if (code === null) {
      continueFlow(effects.exit('chunkFlow'));
      return flowStart(code);
    }

    if ($sF0i$exports(code)) {
      effects.consume(code);
      continueFlow(effects.exit('chunkFlow'));
      return effects.check(inspectConstruct, documentAfterPeek);
    }

    effects.consume(code);
    return flowContinue;
  }

  function documentAfterPeek(code) {
    exitContainers(inspectResult.continued, inspectResult && inspectResult.flowEnd);
    continued = 0;
    return start(code);
  }

  function continueFlow(token) {
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.lazy = inspectResult && inspectResult.lazy;
    childFlow.defineSkip(token.start);
    childFlow.write(self.sliceStream(token));
  }

  function exitContainers(size, end) {
    var index = stack.length; // Close the flow.

    if (childFlow && end) {
      childFlow.write([null]);
      childToken = childFlow = undefined;
    } // Exit open containers.


    while (index-- > size) {
      self.containerState = stack[index][1];
      stack[index][0].exit.call(self, effects);
    }

    stack.length = size;
  }

  function tokenizeInspect(effects, ok) {
    var subcontinued = 0;
    inspectResult = {};
    return inspectStart;

    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self.containerState = stack[subcontinued][1];
        return effects.attempt(stack[subcontinued][0].continuation, inspectContinue, inspectLess)(code);
      } // If we’re continued but in a concrete flow, we can’t have more
      // containers.


      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true;
        return inspectDone(code);
      }

      self.interrupt = childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
      self.containerState = {};
      return effects.attempt($ofuD$var$containerConstruct, inspectFlowEnd, inspectDone)(code);
    }

    function inspectContinue(code) {
      subcontinued++;
      return self.containerState._closeFlow ? inspectFlowEnd(code) : inspectStart(code);
    }

    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        // Maybe another container?
        self.containerState = {};
        return effects.attempt($ofuD$var$containerConstruct, inspectFlowEnd, // Maybe flow, or a blank line?
        effects.attempt($ofuD$var$lazyFlowConstruct, inspectFlowEnd, effects.check($kOzL$exports, inspectFlowEnd, inspectLazy)))(code);
      } // Otherwise we’re interrupting.


      return inspectFlowEnd(code);
    }

    function inspectLazy(code) {
      // Act as if all containers are continued.
      subcontinued = stack.length;
      inspectResult.lazy = true;
      inspectResult.flowContinue = true;
      return inspectDone(code);
    } // We’re done with flow if we have more containers, or an interruption.


    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true;
      return inspectDone(code);
    }

    function inspectDone(code) {
      inspectResult.continued = subcontinued;
      self.interrupt = self.containerState = undefined;
      return ok(code);
    }
  }
}

function $ofuD$var$tokenizeContainer(effects, ok, nok) {
  return $VZrc$exports(effects, effects.attempt(this.parser.constructs.document, ok, nok), 'linePrefix', this.parser.constructs.disable.null.indexOf('codeIndented') > -1 ? undefined : 4);
}

function $ofuD$var$tokenizeLazyFlow(effects, ok, nok) {
  return $VZrc$exports(effects, effects.lazy(this.parser.constructs.flow, ok, nok), 'linePrefix', this.parser.constructs.disable.null.indexOf('codeIndented') > -1 ? undefined : 4);
}

var $ofuD$export$tokenize = $ofuD$var$tokenize;
$ofuD$exports.tokenize = $ofuD$export$tokenize;
// ASSET: ../../../micromark/dist/util/size-chunks.js
var $nEZt$exports = {}; // Counts tabs based on their expanded size, and CR+LF as one character.

function $nEZt$var$sizeChunks(chunks) {
  var index = -1;
  var size = 0;

  while (++index < chunks.length) {
    size += typeof chunks[index] === 'string' ? chunks[index].length : 1;
  }

  return size;
}

$nEZt$exports = $nEZt$var$sizeChunks;
// ASSET: ../../../micromark/dist/util/prefix-size.js
var $zmts$exports = {};

function $zmts$var$prefixSize(events, type) {
  var tail = events[events.length - 1];
  if (!tail || tail[1].type !== type) return 0;
  return $nEZt$exports(tail[2].sliceStream(tail[1]));
}

$zmts$exports = $zmts$var$prefixSize;
// ASSET: ../../../micromark/dist/constant/splice.js
var $GhFU$exports = {};
var $GhFU$var$splice = [].splice;
$GhFU$exports = $GhFU$var$splice;
// ASSET: ../../../micromark/dist/util/chunked-splice.js
var $RVQg$exports = {};

// causes a stack overflow in V8 when trying to insert 100k items for instance.
function $RVQg$var$chunkedSplice(list, start, remove, items) {
  var end = list.length;
  var chunkStart = 0;
  var parameters; // Make start between zero and `end` (included).

  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }

  remove = remove > 0 ? remove : 0; // No need to chunk the items if there’s only a couple (10k) items.

  if (items.length < 10000) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    $GhFU$exports.apply(list, parameters);
  } else {
    // Delete `remove` items starting from `start`
    if (remove) $GhFU$exports.apply(list, [start, remove]); // Insert the items in chunks to not cause stack overflows.

    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000);
      parameters.unshift(start, 0);
      $GhFU$exports.apply(list, parameters);
      chunkStart += 10000;
      start += 10000;
    }
  }
}

$RVQg$exports = $RVQg$var$chunkedSplice;
// ASSET: ../../../micromark/dist/util/shallow.js
var $PrZ2$exports = {};

function $PrZ2$var$shallow(object) {
  return $SwwW$exports({}, object);
}

$PrZ2$exports = $PrZ2$var$shallow;
// ASSET: ../../../micromark/dist/util/subtokenize.js
var $qeI2$exports = {};

function $qeI2$var$subtokenize(events) {
  var jumps = {};
  var index = -1;
  var event;
  var lineIndex;
  var otherIndex;
  var otherEvent;
  var parameters;
  var subevents;
  var more;

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
            subevents[otherIndex][1].isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    } // Enter.


    if (event[0] === 'enter') {
      if (event[1].contentType) {
        $SwwW$exports(jumps, $qeI2$var$subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    } // Exit.
    else if (event[1]._container || event[1]._movePreviousLineEndings) {
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
        event[1].end = $PrZ2$exports(events[lineIndex][1].start); // Switch container exit w/ line endings.

        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        $RVQg$exports(events, lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }

  return !more;
}

function $qeI2$var$subcontent(events, eventIndex) {
  var token = events[eventIndex][1];
  var context = events[eventIndex][2];
  var startPosition = eventIndex - 1;
  var startPositions = [];
  var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  var childEvents = tokenizer.events;
  var jumps = [];
  var gaps = {};
  var stream;
  var previous;
  var index;
  var entered;
  var end;
  var adjust; // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.

  while (token) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== token) {// Empty.
    }

    startPositions.push(startPosition);

    if (!token._tokenizer) {
      stream = context.sliceStream(token);

      if (!token.next) {
        stream.push(null);
      }

      if (previous) {
        tokenizer.defineSkip(token.start);
      }

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }

      tokenizer.write(stream);

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    } // Unravel the next token.


    previous = token;
    token = token.next;
  } // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.


  token = previous;
  index = childEvents.length;

  while (index--) {
    // Make sure we’ve at least seen something (final eol is part of the last
    // token).
    if (childEvents[index][0] === 'enter') {
      entered = true;
    } else if ( // Find a void token that includes a break.
    entered && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
      add(childEvents.slice(index + 1, end)); // Help GC.

      token._tokenizer = token.next = undefined;
      token = token.previous;
      end = index + 1;
    }
  } // Help GC.


  tokenizer.events = token._tokenizer = token.next = undefined; // Do head:

  add(childEvents.slice(0, end));
  index = -1;
  adjust = 0;

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }

  return gaps;

  function add(slice) {
    var start = startPositions.pop();
    jumps.unshift([start, start + slice.length - 1]);
    $RVQg$exports(events, start, 2, slice);
  }
}

$qeI2$exports = $qeI2$var$subtokenize;
// ASSET: ../../../micromark/dist/tokenize/content.js
var $XkW8$exports = {};
// No name because it must not be turned off.
var $XkW8$var$content = {
  tokenize: $XkW8$var$tokenizeContent,
  resolve: $XkW8$var$resolveContent,
  interruptible: true,
  lazy: true
};
var $XkW8$var$continuationConstruct = {
  tokenize: $XkW8$var$tokenizeContinuation,
  partial: true
}; // Content is transparent: it’s parsed right now. That way, definitions are also
// parsed right now: before text in paragraphs (specifically, media) are parsed.

function $XkW8$var$resolveContent(events) {
  $qeI2$exports(events);
  return events;
}

function $XkW8$var$tokenizeContent(effects, ok) {
  var previous;
  return start;

  function start(code) {
    effects.enter('content');
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    });
    return data(code);
  }

  function data(code) {
    if (code === null) {
      return contentEnd(code);
    }

    if ($sF0i$exports(code)) {
      return effects.check($XkW8$var$continuationConstruct, contentContinue, contentEnd)(code);
    } // Data.


    effects.consume(code);
    return data;
  }

  function contentEnd(code) {
    effects.exit('chunkContent');
    effects.exit('content');
    return ok(code);
  }

  function contentContinue(code) {
    effects.consume(code);
    effects.exit('chunkContent');
    previous = previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous: previous
    });
    return data;
  }
}

function $XkW8$var$tokenizeContinuation(effects, ok, nok) {
  var self = this;
  return startLookahead;

  function startLookahead(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $VZrc$exports(effects, prefixed, 'linePrefix');
  }

  function prefixed(code) {
    if (code === null || $sF0i$exports(code)) {
      return nok(code);
    }

    if (self.parser.constructs.disable.null.indexOf('codeIndented') > -1 || $zmts$exports(self.events, 'linePrefix') < 4) {
      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
    }

    return ok(code);
  }
}

$XkW8$exports = $XkW8$var$content;
// ASSET: ../../../micromark/dist/initialize/flow.js
var $v9zQ$exports = {};
Object.defineProperty($v9zQ$exports, '__esModule', {
  value: true
});
var $v9zQ$var$tokenize = $v9zQ$var$initializeFlow;

function $v9zQ$var$initializeFlow(effects) {
  var self = this;
  var initial = effects.attempt( // Try to parse a blank line.
  $kOzL$exports, atBlankEnding, // Try to parse initial flow (essentially, only code).
  effects.attempt(this.parser.constructs.flowInitial, afterConstruct, $VZrc$exports(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt($XkW8$exports, afterConstruct)), 'linePrefix')));
  return initial;

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

var $v9zQ$export$tokenize = $v9zQ$var$tokenize;
$v9zQ$exports.tokenize = $v9zQ$export$tokenize;
// ASSET: ../../../micromark/dist/initialize/text.js
var $sXzC$exports = {};
Object.defineProperty($sXzC$exports, '__esModule', {
  value: true
});
var $sXzC$var$text = $sXzC$var$initializeFactory('text');
var $sXzC$var$string = $sXzC$var$initializeFactory('string');
var $sXzC$var$resolver = {
  resolveAll: $sXzC$var$createResolver()
};

function $sXzC$var$initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: $sXzC$var$createResolver(field === 'text' ? $sXzC$var$resolveAllLineSuffixes : undefined)
  };

  function initializeText(effects) {
    var self = this;
    var constructs = this.parser.constructs[field];
    var text = effects.attempt(constructs, start, notText);
    return start;

    function start(code) {
      return atBreak(code) ? text(code) : notText(code);
    }

    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return;
      }

      effects.enter('data');
      effects.consume(code);
      return data;
    }

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code);
      } // Data.


      effects.consume(code);
      return data;
    }

    function atBreak(code) {
      var list = constructs[code];
      var index = -1;

      if (code === null) {
        return true;
      }

      if (list) {
        while (++index < list.length) {
          if (!list[index].previous || list[index].previous.call(self, self.previous)) {
            return true;
          }
        }
      }
    }
  }
}

function $sXzC$var$createResolver(extraResolver) {
  return resolveAllText;

  function resolveAllText(events, context) {
    var index = -1;
    var enter; // A rather boring computation (to merge adjacent `data` events) which
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
} // A rather ugly set of instructions which again looks at chunks in the input
// stream.
// The reason to do this here is that it is *much* faster to parse in reverse.
// And that we can’t hook into `null` to split the line suffix before an EOF.
// To do: figure out if we can make this into a clean utility, or even in core.
// As it will be useful for GFMs literal autolink extension (and maybe even
// tables?)


function $sXzC$var$resolveAllLineSuffixes(events, context) {
  var eventIndex = -1;
  var chunks;
  var data;
  var chunk;
  var index;
  var bufferIndex;
  var size;
  var tabs;
  var token;

  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === 'lineEnding') && events[eventIndex - 1][1].type === 'data') {
      data = events[eventIndex - 1][1];
      chunks = context.sliceStream(data);
      index = chunks.length;
      bufferIndex = -1;
      size = 0;
      tabs = undefined;

      while (index--) {
        chunk = chunks[index];

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
        } else if (chunk === -1) ;else {
          // Replacement character, exit.
          index++;
          break;
        }
      }

      if (size) {
        token = {
          type: eventIndex === events.length || tabs || size < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: $PrZ2$exports(data.end)
        };
        data.end = $PrZ2$exports(token.start);

        if (data.start.offset === data.end.offset) {
          $SwwW$exports(data, token);
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

var $sXzC$export$resolver = $sXzC$var$resolver;
$sXzC$exports.resolver = $sXzC$export$resolver;
var $sXzC$export$string = $sXzC$var$string;
$sXzC$exports.string = $sXzC$export$string;
var $sXzC$export$text = $sXzC$var$text;
$sXzC$exports.text = $sXzC$export$text;
// ASSET: ../../../micromark/dist/util/combine-extensions.js
var $WfpN$exports = {};

function $WfpN$var$combineExtensions(extensions) {
  var all = {};
  var index = -1;

  while (++index < extensions.length) {
    $WfpN$var$extension(all, extensions[index]);
  }

  return all;
}

function $WfpN$var$extension(all, extension) {
  var hook;
  var left;
  var right;
  var code;

  for (hook in extension) {
    left = $vhRA$exports.call(all, hook) ? all[hook] : all[hook] = {};
    right = extension[hook];

    for (code in right) {
      left[code] = $WfpN$var$constructs($wvwD$exports(right[code]), $vhRA$exports.call(left, code) ? left[code] : []);
    }
  }
}

function $WfpN$var$constructs(list, existing) {
  var index = -1;
  var before = [];

  while (++index < list.length) {
    ;
    (list[index].add === 'after' ? existing : before).push(list[index]);
  }

  $RVQg$exports(existing, 0, 0, before);
  return existing;
}

$WfpN$exports = $WfpN$var$combineExtensions;
// ASSET: ../../../micromark/dist/util/chunked-push.js
var $LYMM$exports = {};

function $LYMM$var$chunkedPush(list, items) {
  if (list.length) {
    $RVQg$exports(list, list.length, 0, items);
    return list;
  }

  return items;
}

$LYMM$exports = $LYMM$var$chunkedPush;
// ASSET: ../../../micromark/dist/util/resolve-all.js
var $hAn0$exports = {};

function $hAn0$var$resolveAll(constructs, events, context) {
  var called = [];
  var index = -1;
  var resolve;

  while (++index < constructs.length) {
    resolve = constructs[index].resolveAll;

    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }

  return events;
}

$hAn0$exports = $hAn0$var$resolveAll;
// ASSET: ../../../micromark/dist/util/serialize-chunks.js
var $C5tE$exports = {};

function $C5tE$var$serializeChunks(chunks) {
  var index = -1;
  var result = [];
  var chunk;
  var value;
  var atTab;

  while (++index < chunks.length) {
    chunk = chunks[index];

    if (typeof chunk === 'string') {
      value = chunk;
    } else if (chunk === -5) {
      value = '\r';
    } else if (chunk === -4) {
      value = '\n';
    } else if (chunk === -3) {
      value = '\r' + '\n';
    } else if (chunk === -2) {
      value = '\t';
    } else if (chunk === -1) {
      if (atTab) continue;
      value = ' ';
    } else {
      // Currently only replacement character.
      value = $sqCd$exports(chunk);
    }

    atTab = chunk === -2;
    result.push(value);
  }

  return result.join('');
}

$C5tE$exports = $C5tE$var$serializeChunks;
// ASSET: ../../../micromark/dist/util/slice-chunks.js
var $we5u$exports = {};

function $we5u$var$sliceChunks(chunks, token) {
  var startIndex = token.start._index;
  var startBufferIndex = token.start._bufferIndex;
  var endIndex = token.end._index;
  var endBufferIndex = token.end._bufferIndex;
  var view;

  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);

    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }

    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }

  return view;
}

$we5u$exports = $we5u$var$sliceChunks;
// ASSET: ../../../micromark/dist/util/create-tokenizer.js
var $zKpC$exports = {};

// Create a tokenizer.
// Tokenizers deal with one type of data (e.g., containers, flow, text).
// The parser is the object dealing with it all.
// `initialize` works like other constructs, except that only its `tokenize`
// function is used, in which case it doesn’t receive an `ok` or `nok`.
// `from` can be given to set the point before the first character, although
// when further lines are indented, they must be set with `defineSkip`.
function $zKpC$var$createTokenizer(parser, initialize, from) {
  var point = from ? $PrZ2$exports(from) : {
    line: 1,
    column: 1,
    offset: 0
  };
  var columnStart = {};
  var resolveAllConstructs = [];
  var chunks = [];
  var stack = [];
  var effects = {
    consume: consume,
    enter: enter,
    exit: exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    }),
    lazy: constructFactory(onsuccessfulcheck, {
      lazy: true
    })
  }; // State and tools for resolving and serializing.

  var context = {
    previous: null,
    events: [],
    parser: parser,
    sliceStream: sliceStream,
    sliceSerialize: sliceSerialize,
    now: now,
    defineSkip: skip,
    write: write
  }; // The state function.

  var state = initialize.tokenize.call(context, effects); // Track which character we expect to be consumed, to catch bugs.

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  } // Store where we are in the input stream.


  point._index = 0;
  point._bufferIndex = -1;
  return context;

  function write(slice) {
    chunks = $LYMM$exports(chunks, slice);
    main(); // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return [];
    }

    addResult(initialize, 0); // Otherwise, resolve, and exit.

    context.events = $hAn0$exports(resolveAllConstructs, context.events, context);
    return context.events;
  } //
  // Tools.
  //


  function sliceSerialize(token) {
    return $C5tE$exports(sliceStream(token));
  }

  function sliceStream(token) {
    return $we5u$exports(chunks, token);
  }

  function now() {
    return $PrZ2$exports(point);
  }

  function skip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  } //
  // State management.
  //
  // Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
  // `consume`).
  // Here is where we walk through the chunks, which either include strings of
  // several characters, or numerical character codes.
  // The reason to do this in a loop instead of a call is so the stack can
  // drain.


  function main() {
    var chunkIndex;
    var chunk;

    while (point._index < chunks.length) {
      chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

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
  } // Deal with one code.


  function go(code) {
    state = state(code);
  } // Move a character forward.


  function consume(code) {
    if ($sF0i$exports(code)) {
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

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    } // Expose the previous character.


    context.previous = code; // Mark as consumed.
  } // Start a token.


  function enter(type, fields) {
    var token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token;
  } // Stop a token.


  function exit(type) {
    var token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token;
  } // Use results.


  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  } // Discard results.


  function onsuccessfulcheck(construct, info) {
    info.restore();
  } // Factory to attempt/check/interrupt.


  function constructFactory(onreturn, fields) {
    return hook; // Handle either an object mapping codes to constructs, a list of
    // constructs, or a single construct.

    function hook(constructs, returnState, bogusState) {
      var listOfConstructs;
      var constructIndex;
      var currentConstruct;
      var info;
      return constructs.tokenize || 'length' in constructs ? handleListOfConstructs($wvwD$exports(constructs)) : handleMapOfConstructs;

      function handleMapOfConstructs(code) {
        if (code in constructs || null in constructs) {
          return handleListOfConstructs(constructs.null ?
          /* c8 ignore next */
          $wvwD$exports(constructs[code]).concat($wvwD$exports(constructs.null)) : constructs[code])(code);
        }

        return bogusState(code);
      }

      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        return handleConstruct(list[constructIndex]);
      }

      function handleConstruct(construct) {
        return start;

        function start(code) {
          // To do: not nede to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;

          if (!construct.partial) {
            context.currentConstruct = construct;
          }

          if (construct.name && context.parser.constructs.disable.null.indexOf(construct.name) > -1) {
            return nok();
          }

          return construct.tokenize.call(fields ? $SwwW$exports({}, context, fields) : context, effects, ok, nok)(code);
        }
      }

      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }

      function nok(code) {
        info.restore();

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }

        return bogusState;
      }
    }
  }

  function addResult(construct, from) {
    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
      resolveAllConstructs.push(construct);
    }

    if (construct.resolve) {
      $RVQg$exports(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }

  function store() {
    var startPoint = now();
    var startPrevious = context.previous;
    var startCurrentConstruct = context.currentConstruct;
    var startEventsIndex = context.events.length;
    var startStack = Array.from(stack);
    return {
      restore: restore,
      from: startEventsIndex
    };

    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}

$zKpC$exports = $zKpC$var$createTokenizer;
// ASSET: ../../../micromark/dist/character/markdown-line-ending-or-space.js
var $iubz$exports = {};

function $iubz$var$markdownLineEndingOrSpace(code) {
  return code < 0 || code === 32;
}

$iubz$exports = $iubz$var$markdownLineEndingOrSpace;
// ASSET: ../../../micromark/dist/util/regex-check.js
var $kGne$exports = {};

function $kGne$var$regexCheck(regex) {
  return check;

  function check(code) {
    return regex.test($sqCd$exports(code));
  }
}

$kGne$exports = $kGne$var$regexCheck;
// ASSET: ../../../micromark/dist/constant/unicode-punctuation-regex.js
var $ajlQ$exports = {}; // This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.

var $ajlQ$var$unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
$ajlQ$exports = $ajlQ$var$unicodePunctuation;
// ASSET: ../../../micromark/dist/character/unicode-punctuation.js
var $FyH5$exports = {};
// In fact adds to the bundle size.
var $FyH5$var$unicodePunctuation = $kGne$exports($ajlQ$exports);
$FyH5$exports = $FyH5$var$unicodePunctuation;
// ASSET: ../../../micromark/dist/character/unicode-whitespace.js
var $UvgB$exports = {};
var $UvgB$var$unicodeWhitespace = $kGne$exports(/\s/);
$UvgB$exports = $UvgB$var$unicodeWhitespace;
// ASSET: ../../../micromark/dist/util/classify-character.js
var $D2oE$exports = {};

// Classify whether a character is unicode whitespace, unicode punctuation, or
// anything else.
// Used for attention (emphasis, strong), whose sequences can open or close
// based on the class of surrounding characters.
function $D2oE$var$classifyCharacter(code) {
  if (code === null || $iubz$exports(code) || $UvgB$exports(code)) {
    return 1;
  }

  if ($FyH5$exports(code)) {
    return 2;
  }
}

$D2oE$exports = $D2oE$var$classifyCharacter;
// ASSET: ../../../micromark/dist/util/move-point.js
var $zHDu$exports = {}; // chunks (replacement characters, tabs, or line endings).

function $zHDu$var$movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
  return point;
}

$zHDu$exports = $zHDu$var$movePoint;
// ASSET: ../../../micromark/dist/tokenize/attention.js
var $d19H$exports = {};
var $d19H$var$attention = {
  name: 'attention',
  tokenize: $d19H$var$tokenizeAttention,
  resolveAll: $d19H$var$resolveAllAttention
};

function $d19H$var$resolveAllAttention(events, context) {
  var index = -1;
  var open;
  var group;
  var text;
  var openingSequence;
  var closingSequence;
  var use;
  var nextEvents;
  var offset; // Walk through all events.
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
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: $zHDu$exports($PrZ2$exports(events[open][1].end), -use),
            end: $PrZ2$exports(events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: $PrZ2$exports(events[index][1].start),
            end: $zHDu$exports($PrZ2$exports(events[index][1].start), use)
          };
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: $PrZ2$exports(events[open][1].end),
            end: $PrZ2$exports(events[index][1].start)
          };
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: $PrZ2$exports(openingSequence.start),
            end: $PrZ2$exports(closingSequence.end)
          };
          events[open][1].end = $PrZ2$exports(openingSequence.start);
          events[index][1].start = $PrZ2$exports(closingSequence.end);
          nextEvents = []; // If there are more markers in the opening, add them before.

          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = $LYMM$exports(nextEvents, [['enter', events[open][1], context], ['exit', events[open][1], context]]);
          } // Opening.


          nextEvents = $LYMM$exports(nextEvents, [['enter', group, context], ['enter', openingSequence, context], ['exit', openingSequence, context], ['enter', text, context]]); // Between.

          nextEvents = $LYMM$exports(nextEvents, $hAn0$exports(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)); // Closing.

          nextEvents = $LYMM$exports(nextEvents, [['exit', text, context], ['enter', closingSequence, context], ['exit', closingSequence, context], ['exit', group, context]]); // If there are more markers in the closing, add them after.

          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = $LYMM$exports(nextEvents, [['enter', events[index][1], context], ['exit', events[index][1], context]]);
          } else {
            offset = 0;
          }

          $RVQg$exports(events, open - 1, index - open + 3, nextEvents);
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

function $d19H$var$tokenizeAttention(effects, ok) {
  var before = $D2oE$exports(this.previous);
  var marker;
  return start;

  function start(code) {
    effects.enter('attentionSequence');
    marker = code;
    return sequence(code);
  }

  function sequence(code) {
    var token;
    var after;
    var open;
    var close;

    if (code === marker) {
      effects.consume(code);
      return sequence;
    }

    token = effects.exit('attentionSequence');
    after = $D2oE$exports(code);
    open = !after || after === 2 && before;
    close = !before || before === 2 && after;
    token._open = marker === 42 ? open : open && (before || !close);
    token._close = marker === 42 ? close : close && (after || !open);
    return ok(code);
  }
}

$d19H$exports = $d19H$var$attention;
// ASSET: ../../../micromark/dist/character/ascii-alphanumeric.js
var $oB2J$exports = {};
var $oB2J$var$asciiAlphanumeric = $kGne$exports(/[\dA-Za-z]/);
$oB2J$exports = $oB2J$var$asciiAlphanumeric;
// ASSET: ../../../micromark/dist/character/ascii-alpha.js
var $ry7a$exports = {};
var $ry7a$var$asciiAlpha = $kGne$exports(/[A-Za-z]/);
$ry7a$exports = $ry7a$var$asciiAlpha;
// ASSET: ../../../micromark/dist/character/ascii-atext.js
var $vO68$exports = {};
var $vO68$var$asciiAtext = $kGne$exports(/[#-'*+\--9=?A-Z^-~]/);
$vO68$exports = $vO68$var$asciiAtext;
// ASSET: ../../../micromark/dist/character/ascii-control.js
var $SPmF$exports = {}; // Note: EOF is seen as ASCII control here, because `null < 32 == true`.

function $SPmF$var$asciiControl(code) {
  return (// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code < 32 || code === 127
  );
}

$SPmF$exports = $SPmF$var$asciiControl;
// ASSET: ../../../micromark/dist/tokenize/autolink.js
var $uzwq$exports = {};
var $uzwq$var$autolink = {
  name: 'autolink',
  tokenize: $uzwq$var$tokenizeAutolink
};

function $uzwq$var$tokenizeAutolink(effects, ok, nok) {
  var size = 1;
  return start;

  function start(code) {
    effects.enter('autolink');
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.enter('autolinkProtocol');
    return open;
  }

  function open(code) {
    if ($ry7a$exports(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }

    return $vO68$exports(code) ? emailAtext(code) : nok(code);
  }

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || $oB2J$exports(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
  }

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside;
    }

    if ((code === 43 || code === 45 || code === 46 || $oB2J$exports(code)) && size++ < 32) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }

    return emailAtext(code);
  }

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol');
      return end(code);
    }

    if (code === 32 || code === 60 || $SPmF$exports(code)) {
      return nok(code);
    }

    effects.consume(code);
    return urlInside;
  }

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }

    if ($vO68$exports(code)) {
      effects.consume(code);
      return emailAtext;
    }

    return nok(code);
  }

  function emailAtSignOrDot(code) {
    return $oB2J$exports(code) ? emailLabel(code) : nok(code);
  }

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

  function emailValue(code) {
    if ((code === 45 || $oB2J$exports(code)) && size++ < 63) {
      effects.consume(code);
      return code === 45 ? emailValue : emailLabel;
    }

    return nok(code);
  }

  function end(code) {
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.exit('autolink');
    return ok;
  }
}

$uzwq$exports = $uzwq$var$autolink;
// ASSET: ../../../micromark/dist/tokenize/block-quote.js
var $nBAC$exports = {};
var $nBAC$var$blockQuote = {
  name: 'blockQuote',
  tokenize: $nBAC$var$tokenizeBlockQuoteStart,
  continuation: {
    tokenize: $nBAC$var$tokenizeBlockQuoteContinuation
  },
  exit: $nBAC$var$exit
};

function $nBAC$var$tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this;
  return start;

  function start(code) {
    if (code === 62) {
      if (!self.containerState.open) {
        effects.enter('blockQuote', {
          _container: true
        });
        self.containerState.open = true;
      }

      effects.enter('blockQuotePrefix');
      effects.enter('blockQuoteMarker');
      effects.consume(code);
      effects.exit('blockQuoteMarker');
      return after;
    }

    return nok(code);
  }

  function after(code) {
    if ($fL2l$exports(code)) {
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

function $nBAC$var$tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return $VZrc$exports(effects, effects.attempt($nBAC$var$blockQuote, ok, nok), 'linePrefix', this.parser.constructs.disable.null.indexOf('codeIndented') > -1 ? undefined : 4);
}

function $nBAC$var$exit(effects) {
  effects.exit('blockQuote');
}

$nBAC$exports = $nBAC$var$blockQuote;
// ASSET: ../../../micromark/dist/character/ascii-punctuation.js
var $uXzI$exports = {};
var $uXzI$var$asciiPunctuation = $kGne$exports(/[!-/:-@[-`{-~]/);
$uXzI$exports = $uXzI$var$asciiPunctuation;
// ASSET: ../../../micromark/dist/tokenize/character-escape.js
var $T3Yn$exports = {};
var $T3Yn$var$characterEscape = {
  name: 'characterEscape',
  tokenize: $T3Yn$var$tokenizeCharacterEscape
};

function $T3Yn$var$tokenizeCharacterEscape(effects, ok, nok) {
  return start;

  function start(code) {
    effects.enter('characterEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    effects.exit('escapeMarker');
    return open;
  }

  function open(code) {
    if ($uXzI$exports(code)) {
      effects.enter('characterEscapeValue');
      effects.consume(code);
      effects.exit('characterEscapeValue');
      effects.exit('characterEscape');
      return ok;
    }

    return nok(code);
  }
}

$T3Yn$exports = $T3Yn$var$characterEscape;
// ASSET: ../../../character-entities/index.json
var $Migq$exports = {};
$Migq$exports = {
  "AEli": "Æ",
  "AElig": "Æ",
  "AM": "&",
  "AMP": "&",
  "Aacut": "Á",
  "Aacute": "Á",
  "Abreve": "Ă",
  "Acir": "Â",
  "Acirc": "Â",
  "Acy": "А",
  "Afr": "𝔄",
  "Agrav": "À",
  "Agrave": "À",
  "Alpha": "Α",
  "Amacr": "Ā",
  "And": "⩓",
  "Aogon": "Ą",
  "Aopf": "𝔸",
  "ApplyFunction": "⁡",
  "Arin": "Å",
  "Aring": "Å",
  "Ascr": "𝒜",
  "Assign": "≔",
  "Atild": "Ã",
  "Atilde": "Ã",
  "Aum": "Ä",
  "Auml": "Ä",
  "Backslash": "∖",
  "Barv": "⫧",
  "Barwed": "⌆",
  "Bcy": "Б",
  "Because": "∵",
  "Bernoullis": "ℬ",
  "Beta": "Β",
  "Bfr": "𝔅",
  "Bopf": "𝔹",
  "Breve": "˘",
  "Bscr": "ℬ",
  "Bumpeq": "≎",
  "CHcy": "Ч",
  "COP": "©",
  "COPY": "©",
  "Cacute": "Ć",
  "Cap": "⋒",
  "CapitalDifferentialD": "ⅅ",
  "Cayleys": "ℭ",
  "Ccaron": "Č",
  "Ccedi": "Ç",
  "Ccedil": "Ç",
  "Ccirc": "Ĉ",
  "Cconint": "∰",
  "Cdot": "Ċ",
  "Cedilla": "¸",
  "CenterDot": "·",
  "Cfr": "ℭ",
  "Chi": "Χ",
  "CircleDot": "⊙",
  "CircleMinus": "⊖",
  "CirclePlus": "⊕",
  "CircleTimes": "⊗",
  "ClockwiseContourIntegral": "∲",
  "CloseCurlyDoubleQuote": "”",
  "CloseCurlyQuote": "’",
  "Colon": "∷",
  "Colone": "⩴",
  "Congruent": "≡",
  "Conint": "∯",
  "ContourIntegral": "∮",
  "Copf": "ℂ",
  "Coproduct": "∐",
  "CounterClockwiseContourIntegral": "∳",
  "Cross": "⨯",
  "Cscr": "𝒞",
  "Cup": "⋓",
  "CupCap": "≍",
  "DD": "ⅅ",
  "DDotrahd": "⤑",
  "DJcy": "Ђ",
  "DScy": "Ѕ",
  "DZcy": "Џ",
  "Dagger": "‡",
  "Darr": "↡",
  "Dashv": "⫤",
  "Dcaron": "Ď",
  "Dcy": "Д",
  "Del": "∇",
  "Delta": "Δ",
  "Dfr": "𝔇",
  "DiacriticalAcute": "´",
  "DiacriticalDot": "˙",
  "DiacriticalDoubleAcute": "˝",
  "DiacriticalGrave": "`",
  "DiacriticalTilde": "˜",
  "Diamond": "⋄",
  "DifferentialD": "ⅆ",
  "Dopf": "𝔻",
  "Dot": "¨",
  "DotDot": "⃜",
  "DotEqual": "≐",
  "DoubleContourIntegral": "∯",
  "DoubleDot": "¨",
  "DoubleDownArrow": "⇓",
  "DoubleLeftArrow": "⇐",
  "DoubleLeftRightArrow": "⇔",
  "DoubleLeftTee": "⫤",
  "DoubleLongLeftArrow": "⟸",
  "DoubleLongLeftRightArrow": "⟺",
  "DoubleLongRightArrow": "⟹",
  "DoubleRightArrow": "⇒",
  "DoubleRightTee": "⊨",
  "DoubleUpArrow": "⇑",
  "DoubleUpDownArrow": "⇕",
  "DoubleVerticalBar": "∥",
  "DownArrow": "↓",
  "DownArrowBar": "⤓",
  "DownArrowUpArrow": "⇵",
  "DownBreve": "̑",
  "DownLeftRightVector": "⥐",
  "DownLeftTeeVector": "⥞",
  "DownLeftVector": "↽",
  "DownLeftVectorBar": "⥖",
  "DownRightTeeVector": "⥟",
  "DownRightVector": "⇁",
  "DownRightVectorBar": "⥗",
  "DownTee": "⊤",
  "DownTeeArrow": "↧",
  "Downarrow": "⇓",
  "Dscr": "𝒟",
  "Dstrok": "Đ",
  "ENG": "Ŋ",
  "ET": "Ð",
  "ETH": "Ð",
  "Eacut": "É",
  "Eacute": "É",
  "Ecaron": "Ě",
  "Ecir": "Ê",
  "Ecirc": "Ê",
  "Ecy": "Э",
  "Edot": "Ė",
  "Efr": "𝔈",
  "Egrav": "È",
  "Egrave": "È",
  "Element": "∈",
  "Emacr": "Ē",
  "EmptySmallSquare": "◻",
  "EmptyVerySmallSquare": "▫",
  "Eogon": "Ę",
  "Eopf": "𝔼",
  "Epsilon": "Ε",
  "Equal": "⩵",
  "EqualTilde": "≂",
  "Equilibrium": "⇌",
  "Escr": "ℰ",
  "Esim": "⩳",
  "Eta": "Η",
  "Eum": "Ë",
  "Euml": "Ë",
  "Exists": "∃",
  "ExponentialE": "ⅇ",
  "Fcy": "Ф",
  "Ffr": "𝔉",
  "FilledSmallSquare": "◼",
  "FilledVerySmallSquare": "▪",
  "Fopf": "𝔽",
  "ForAll": "∀",
  "Fouriertrf": "ℱ",
  "Fscr": "ℱ",
  "GJcy": "Ѓ",
  "G": ">",
  "GT": ">",
  "Gamma": "Γ",
  "Gammad": "Ϝ",
  "Gbreve": "Ğ",
  "Gcedil": "Ģ",
  "Gcirc": "Ĝ",
  "Gcy": "Г",
  "Gdot": "Ġ",
  "Gfr": "𝔊",
  "Gg": "⋙",
  "Gopf": "𝔾",
  "GreaterEqual": "≥",
  "GreaterEqualLess": "⋛",
  "GreaterFullEqual": "≧",
  "GreaterGreater": "⪢",
  "GreaterLess": "≷",
  "GreaterSlantEqual": "⩾",
  "GreaterTilde": "≳",
  "Gscr": "𝒢",
  "Gt": "≫",
  "HARDcy": "Ъ",
  "Hacek": "ˇ",
  "Hat": "^",
  "Hcirc": "Ĥ",
  "Hfr": "ℌ",
  "HilbertSpace": "ℋ",
  "Hopf": "ℍ",
  "HorizontalLine": "─",
  "Hscr": "ℋ",
  "Hstrok": "Ħ",
  "HumpDownHump": "≎",
  "HumpEqual": "≏",
  "IEcy": "Е",
  "IJlig": "Ĳ",
  "IOcy": "Ё",
  "Iacut": "Í",
  "Iacute": "Í",
  "Icir": "Î",
  "Icirc": "Î",
  "Icy": "И",
  "Idot": "İ",
  "Ifr": "ℑ",
  "Igrav": "Ì",
  "Igrave": "Ì",
  "Im": "ℑ",
  "Imacr": "Ī",
  "ImaginaryI": "ⅈ",
  "Implies": "⇒",
  "Int": "∬",
  "Integral": "∫",
  "Intersection": "⋂",
  "InvisibleComma": "⁣",
  "InvisibleTimes": "⁢",
  "Iogon": "Į",
  "Iopf": "𝕀",
  "Iota": "Ι",
  "Iscr": "ℐ",
  "Itilde": "Ĩ",
  "Iukcy": "І",
  "Ium": "Ï",
  "Iuml": "Ï",
  "Jcirc": "Ĵ",
  "Jcy": "Й",
  "Jfr": "𝔍",
  "Jopf": "𝕁",
  "Jscr": "𝒥",
  "Jsercy": "Ј",
  "Jukcy": "Є",
  "KHcy": "Х",
  "KJcy": "Ќ",
  "Kappa": "Κ",
  "Kcedil": "Ķ",
  "Kcy": "К",
  "Kfr": "𝔎",
  "Kopf": "𝕂",
  "Kscr": "𝒦",
  "LJcy": "Љ",
  "L": "<",
  "LT": "<",
  "Lacute": "Ĺ",
  "Lambda": "Λ",
  "Lang": "⟪",
  "Laplacetrf": "ℒ",
  "Larr": "↞",
  "Lcaron": "Ľ",
  "Lcedil": "Ļ",
  "Lcy": "Л",
  "LeftAngleBracket": "⟨",
  "LeftArrow": "←",
  "LeftArrowBar": "⇤",
  "LeftArrowRightArrow": "⇆",
  "LeftCeiling": "⌈",
  "LeftDoubleBracket": "⟦",
  "LeftDownTeeVector": "⥡",
  "LeftDownVector": "⇃",
  "LeftDownVectorBar": "⥙",
  "LeftFloor": "⌊",
  "LeftRightArrow": "↔",
  "LeftRightVector": "⥎",
  "LeftTee": "⊣",
  "LeftTeeArrow": "↤",
  "LeftTeeVector": "⥚",
  "LeftTriangle": "⊲",
  "LeftTriangleBar": "⧏",
  "LeftTriangleEqual": "⊴",
  "LeftUpDownVector": "⥑",
  "LeftUpTeeVector": "⥠",
  "LeftUpVector": "↿",
  "LeftUpVectorBar": "⥘",
  "LeftVector": "↼",
  "LeftVectorBar": "⥒",
  "Leftarrow": "⇐",
  "Leftrightarrow": "⇔",
  "LessEqualGreater": "⋚",
  "LessFullEqual": "≦",
  "LessGreater": "≶",
  "LessLess": "⪡",
  "LessSlantEqual": "⩽",
  "LessTilde": "≲",
  "Lfr": "𝔏",
  "Ll": "⋘",
  "Lleftarrow": "⇚",
  "Lmidot": "Ŀ",
  "LongLeftArrow": "⟵",
  "LongLeftRightArrow": "⟷",
  "LongRightArrow": "⟶",
  "Longleftarrow": "⟸",
  "Longleftrightarrow": "⟺",
  "Longrightarrow": "⟹",
  "Lopf": "𝕃",
  "LowerLeftArrow": "↙",
  "LowerRightArrow": "↘",
  "Lscr": "ℒ",
  "Lsh": "↰",
  "Lstrok": "Ł",
  "Lt": "≪",
  "Map": "⤅",
  "Mcy": "М",
  "MediumSpace": " ",
  "Mellintrf": "ℳ",
  "Mfr": "𝔐",
  "MinusPlus": "∓",
  "Mopf": "𝕄",
  "Mscr": "ℳ",
  "Mu": "Μ",
  "NJcy": "Њ",
  "Nacute": "Ń",
  "Ncaron": "Ň",
  "Ncedil": "Ņ",
  "Ncy": "Н",
  "NegativeMediumSpace": "​",
  "NegativeThickSpace": "​",
  "NegativeThinSpace": "​",
  "NegativeVeryThinSpace": "​",
  "NestedGreaterGreater": "≫",
  "NestedLessLess": "≪",
  "NewLine": "\n",
  "Nfr": "𝔑",
  "NoBreak": "⁠",
  "NonBreakingSpace": " ",
  "Nopf": "ℕ",
  "Not": "⫬",
  "NotCongruent": "≢",
  "NotCupCap": "≭",
  "NotDoubleVerticalBar": "∦",
  "NotElement": "∉",
  "NotEqual": "≠",
  "NotEqualTilde": "≂̸",
  "NotExists": "∄",
  "NotGreater": "≯",
  "NotGreaterEqual": "≱",
  "NotGreaterFullEqual": "≧̸",
  "NotGreaterGreater": "≫̸",
  "NotGreaterLess": "≹",
  "NotGreaterSlantEqual": "⩾̸",
  "NotGreaterTilde": "≵",
  "NotHumpDownHump": "≎̸",
  "NotHumpEqual": "≏̸",
  "NotLeftTriangle": "⋪",
  "NotLeftTriangleBar": "⧏̸",
  "NotLeftTriangleEqual": "⋬",
  "NotLess": "≮",
  "NotLessEqual": "≰",
  "NotLessGreater": "≸",
  "NotLessLess": "≪̸",
  "NotLessSlantEqual": "⩽̸",
  "NotLessTilde": "≴",
  "NotNestedGreaterGreater": "⪢̸",
  "NotNestedLessLess": "⪡̸",
  "NotPrecedes": "⊀",
  "NotPrecedesEqual": "⪯̸",
  "NotPrecedesSlantEqual": "⋠",
  "NotReverseElement": "∌",
  "NotRightTriangle": "⋫",
  "NotRightTriangleBar": "⧐̸",
  "NotRightTriangleEqual": "⋭",
  "NotSquareSubset": "⊏̸",
  "NotSquareSubsetEqual": "⋢",
  "NotSquareSuperset": "⊐̸",
  "NotSquareSupersetEqual": "⋣",
  "NotSubset": "⊂⃒",
  "NotSubsetEqual": "⊈",
  "NotSucceeds": "⊁",
  "NotSucceedsEqual": "⪰̸",
  "NotSucceedsSlantEqual": "⋡",
  "NotSucceedsTilde": "≿̸",
  "NotSuperset": "⊃⃒",
  "NotSupersetEqual": "⊉",
  "NotTilde": "≁",
  "NotTildeEqual": "≄",
  "NotTildeFullEqual": "≇",
  "NotTildeTilde": "≉",
  "NotVerticalBar": "∤",
  "Nscr": "𝒩",
  "Ntild": "Ñ",
  "Ntilde": "Ñ",
  "Nu": "Ν",
  "OElig": "Œ",
  "Oacut": "Ó",
  "Oacute": "Ó",
  "Ocir": "Ô",
  "Ocirc": "Ô",
  "Ocy": "О",
  "Odblac": "Ő",
  "Ofr": "𝔒",
  "Ograv": "Ò",
  "Ograve": "Ò",
  "Omacr": "Ō",
  "Omega": "Ω",
  "Omicron": "Ο",
  "Oopf": "𝕆",
  "OpenCurlyDoubleQuote": "“",
  "OpenCurlyQuote": "‘",
  "Or": "⩔",
  "Oscr": "𝒪",
  "Oslas": "Ø",
  "Oslash": "Ø",
  "Otild": "Õ",
  "Otilde": "Õ",
  "Otimes": "⨷",
  "Oum": "Ö",
  "Ouml": "Ö",
  "OverBar": "‾",
  "OverBrace": "⏞",
  "OverBracket": "⎴",
  "OverParenthesis": "⏜",
  "PartialD": "∂",
  "Pcy": "П",
  "Pfr": "𝔓",
  "Phi": "Φ",
  "Pi": "Π",
  "PlusMinus": "±",
  "Poincareplane": "ℌ",
  "Popf": "ℙ",
  "Pr": "⪻",
  "Precedes": "≺",
  "PrecedesEqual": "⪯",
  "PrecedesSlantEqual": "≼",
  "PrecedesTilde": "≾",
  "Prime": "″",
  "Product": "∏",
  "Proportion": "∷",
  "Proportional": "∝",
  "Pscr": "𝒫",
  "Psi": "Ψ",
  "QUO": "\"",
  "QUOT": "\"",
  "Qfr": "𝔔",
  "Qopf": "ℚ",
  "Qscr": "𝒬",
  "RBarr": "⤐",
  "RE": "®",
  "REG": "®",
  "Racute": "Ŕ",
  "Rang": "⟫",
  "Rarr": "↠",
  "Rarrtl": "⤖",
  "Rcaron": "Ř",
  "Rcedil": "Ŗ",
  "Rcy": "Р",
  "Re": "ℜ",
  "ReverseElement": "∋",
  "ReverseEquilibrium": "⇋",
  "ReverseUpEquilibrium": "⥯",
  "Rfr": "ℜ",
  "Rho": "Ρ",
  "RightAngleBracket": "⟩",
  "RightArrow": "→",
  "RightArrowBar": "⇥",
  "RightArrowLeftArrow": "⇄",
  "RightCeiling": "⌉",
  "RightDoubleBracket": "⟧",
  "RightDownTeeVector": "⥝",
  "RightDownVector": "⇂",
  "RightDownVectorBar": "⥕",
  "RightFloor": "⌋",
  "RightTee": "⊢",
  "RightTeeArrow": "↦",
  "RightTeeVector": "⥛",
  "RightTriangle": "⊳",
  "RightTriangleBar": "⧐",
  "RightTriangleEqual": "⊵",
  "RightUpDownVector": "⥏",
  "RightUpTeeVector": "⥜",
  "RightUpVector": "↾",
  "RightUpVectorBar": "⥔",
  "RightVector": "⇀",
  "RightVectorBar": "⥓",
  "Rightarrow": "⇒",
  "Ropf": "ℝ",
  "RoundImplies": "⥰",
  "Rrightarrow": "⇛",
  "Rscr": "ℛ",
  "Rsh": "↱",
  "RuleDelayed": "⧴",
  "SHCHcy": "Щ",
  "SHcy": "Ш",
  "SOFTcy": "Ь",
  "Sacute": "Ś",
  "Sc": "⪼",
  "Scaron": "Š",
  "Scedil": "Ş",
  "Scirc": "Ŝ",
  "Scy": "С",
  "Sfr": "𝔖",
  "ShortDownArrow": "↓",
  "ShortLeftArrow": "←",
  "ShortRightArrow": "→",
  "ShortUpArrow": "↑",
  "Sigma": "Σ",
  "SmallCircle": "∘",
  "Sopf": "𝕊",
  "Sqrt": "√",
  "Square": "□",
  "SquareIntersection": "⊓",
  "SquareSubset": "⊏",
  "SquareSubsetEqual": "⊑",
  "SquareSuperset": "⊐",
  "SquareSupersetEqual": "⊒",
  "SquareUnion": "⊔",
  "Sscr": "𝒮",
  "Star": "⋆",
  "Sub": "⋐",
  "Subset": "⋐",
  "SubsetEqual": "⊆",
  "Succeeds": "≻",
  "SucceedsEqual": "⪰",
  "SucceedsSlantEqual": "≽",
  "SucceedsTilde": "≿",
  "SuchThat": "∋",
  "Sum": "∑",
  "Sup": "⋑",
  "Superset": "⊃",
  "SupersetEqual": "⊇",
  "Supset": "⋑",
  "THOR": "Þ",
  "THORN": "Þ",
  "TRADE": "™",
  "TSHcy": "Ћ",
  "TScy": "Ц",
  "Tab": "\t",
  "Tau": "Τ",
  "Tcaron": "Ť",
  "Tcedil": "Ţ",
  "Tcy": "Т",
  "Tfr": "𝔗",
  "Therefore": "∴",
  "Theta": "Θ",
  "ThickSpace": "  ",
  "ThinSpace": " ",
  "Tilde": "∼",
  "TildeEqual": "≃",
  "TildeFullEqual": "≅",
  "TildeTilde": "≈",
  "Topf": "𝕋",
  "TripleDot": "⃛",
  "Tscr": "𝒯",
  "Tstrok": "Ŧ",
  "Uacut": "Ú",
  "Uacute": "Ú",
  "Uarr": "↟",
  "Uarrocir": "⥉",
  "Ubrcy": "Ў",
  "Ubreve": "Ŭ",
  "Ucir": "Û",
  "Ucirc": "Û",
  "Ucy": "У",
  "Udblac": "Ű",
  "Ufr": "𝔘",
  "Ugrav": "Ù",
  "Ugrave": "Ù",
  "Umacr": "Ū",
  "UnderBar": "_",
  "UnderBrace": "⏟",
  "UnderBracket": "⎵",
  "UnderParenthesis": "⏝",
  "Union": "⋃",
  "UnionPlus": "⊎",
  "Uogon": "Ų",
  "Uopf": "𝕌",
  "UpArrow": "↑",
  "UpArrowBar": "⤒",
  "UpArrowDownArrow": "⇅",
  "UpDownArrow": "↕",
  "UpEquilibrium": "⥮",
  "UpTee": "⊥",
  "UpTeeArrow": "↥",
  "Uparrow": "⇑",
  "Updownarrow": "⇕",
  "UpperLeftArrow": "↖",
  "UpperRightArrow": "↗",
  "Upsi": "ϒ",
  "Upsilon": "Υ",
  "Uring": "Ů",
  "Uscr": "𝒰",
  "Utilde": "Ũ",
  "Uum": "Ü",
  "Uuml": "Ü",
  "VDash": "⊫",
  "Vbar": "⫫",
  "Vcy": "В",
  "Vdash": "⊩",
  "Vdashl": "⫦",
  "Vee": "⋁",
  "Verbar": "‖",
  "Vert": "‖",
  "VerticalBar": "∣",
  "VerticalLine": "|",
  "VerticalSeparator": "❘",
  "VerticalTilde": "≀",
  "VeryThinSpace": " ",
  "Vfr": "𝔙",
  "Vopf": "𝕍",
  "Vscr": "𝒱",
  "Vvdash": "⊪",
  "Wcirc": "Ŵ",
  "Wedge": "⋀",
  "Wfr": "𝔚",
  "Wopf": "𝕎",
  "Wscr": "𝒲",
  "Xfr": "𝔛",
  "Xi": "Ξ",
  "Xopf": "𝕏",
  "Xscr": "𝒳",
  "YAcy": "Я",
  "YIcy": "Ї",
  "YUcy": "Ю",
  "Yacut": "Ý",
  "Yacute": "Ý",
  "Ycirc": "Ŷ",
  "Ycy": "Ы",
  "Yfr": "𝔜",
  "Yopf": "𝕐",
  "Yscr": "𝒴",
  "Yuml": "Ÿ",
  "ZHcy": "Ж",
  "Zacute": "Ź",
  "Zcaron": "Ž",
  "Zcy": "З",
  "Zdot": "Ż",
  "ZeroWidthSpace": "​",
  "Zeta": "Ζ",
  "Zfr": "ℨ",
  "Zopf": "ℤ",
  "Zscr": "𝒵",
  "aacut": "á",
  "aacute": "á",
  "abreve": "ă",
  "ac": "∾",
  "acE": "∾̳",
  "acd": "∿",
  "acir": "â",
  "acirc": "â",
  "acut": "´",
  "acute": "´",
  "acy": "а",
  "aeli": "æ",
  "aelig": "æ",
  "af": "⁡",
  "afr": "𝔞",
  "agrav": "à",
  "agrave": "à",
  "alefsym": "ℵ",
  "aleph": "ℵ",
  "alpha": "α",
  "amacr": "ā",
  "amalg": "⨿",
  "am": "&",
  "amp": "&",
  "and": "∧",
  "andand": "⩕",
  "andd": "⩜",
  "andslope": "⩘",
  "andv": "⩚",
  "ang": "∠",
  "ange": "⦤",
  "angle": "∠",
  "angmsd": "∡",
  "angmsdaa": "⦨",
  "angmsdab": "⦩",
  "angmsdac": "⦪",
  "angmsdad": "⦫",
  "angmsdae": "⦬",
  "angmsdaf": "⦭",
  "angmsdag": "⦮",
  "angmsdah": "⦯",
  "angrt": "∟",
  "angrtvb": "⊾",
  "angrtvbd": "⦝",
  "angsph": "∢",
  "angst": "Å",
  "angzarr": "⍼",
  "aogon": "ą",
  "aopf": "𝕒",
  "ap": "≈",
  "apE": "⩰",
  "apacir": "⩯",
  "ape": "≊",
  "apid": "≋",
  "apos": "'",
  "approx": "≈",
  "approxeq": "≊",
  "arin": "å",
  "aring": "å",
  "ascr": "𝒶",
  "ast": "*",
  "asymp": "≈",
  "asympeq": "≍",
  "atild": "ã",
  "atilde": "ã",
  "aum": "ä",
  "auml": "ä",
  "awconint": "∳",
  "awint": "⨑",
  "bNot": "⫭",
  "backcong": "≌",
  "backepsilon": "϶",
  "backprime": "‵",
  "backsim": "∽",
  "backsimeq": "⋍",
  "barvee": "⊽",
  "barwed": "⌅",
  "barwedge": "⌅",
  "bbrk": "⎵",
  "bbrktbrk": "⎶",
  "bcong": "≌",
  "bcy": "б",
  "bdquo": "„",
  "becaus": "∵",
  "because": "∵",
  "bemptyv": "⦰",
  "bepsi": "϶",
  "bernou": "ℬ",
  "beta": "β",
  "beth": "ℶ",
  "between": "≬",
  "bfr": "𝔟",
  "bigcap": "⋂",
  "bigcirc": "◯",
  "bigcup": "⋃",
  "bigodot": "⨀",
  "bigoplus": "⨁",
  "bigotimes": "⨂",
  "bigsqcup": "⨆",
  "bigstar": "★",
  "bigtriangledown": "▽",
  "bigtriangleup": "△",
  "biguplus": "⨄",
  "bigvee": "⋁",
  "bigwedge": "⋀",
  "bkarow": "⤍",
  "blacklozenge": "⧫",
  "blacksquare": "▪",
  "blacktriangle": "▴",
  "blacktriangledown": "▾",
  "blacktriangleleft": "◂",
  "blacktriangleright": "▸",
  "blank": "␣",
  "blk12": "▒",
  "blk14": "░",
  "blk34": "▓",
  "block": "█",
  "bne": "=⃥",
  "bnequiv": "≡⃥",
  "bnot": "⌐",
  "bopf": "𝕓",
  "bot": "⊥",
  "bottom": "⊥",
  "bowtie": "⋈",
  "boxDL": "╗",
  "boxDR": "╔",
  "boxDl": "╖",
  "boxDr": "╓",
  "boxH": "═",
  "boxHD": "╦",
  "boxHU": "╩",
  "boxHd": "╤",
  "boxHu": "╧",
  "boxUL": "╝",
  "boxUR": "╚",
  "boxUl": "╜",
  "boxUr": "╙",
  "boxV": "║",
  "boxVH": "╬",
  "boxVL": "╣",
  "boxVR": "╠",
  "boxVh": "╫",
  "boxVl": "╢",
  "boxVr": "╟",
  "boxbox": "⧉",
  "boxdL": "╕",
  "boxdR": "╒",
  "boxdl": "┐",
  "boxdr": "┌",
  "boxh": "─",
  "boxhD": "╥",
  "boxhU": "╨",
  "boxhd": "┬",
  "boxhu": "┴",
  "boxminus": "⊟",
  "boxplus": "⊞",
  "boxtimes": "⊠",
  "boxuL": "╛",
  "boxuR": "╘",
  "boxul": "┘",
  "boxur": "└",
  "boxv": "│",
  "boxvH": "╪",
  "boxvL": "╡",
  "boxvR": "╞",
  "boxvh": "┼",
  "boxvl": "┤",
  "boxvr": "├",
  "bprime": "‵",
  "breve": "˘",
  "brvba": "¦",
  "brvbar": "¦",
  "bscr": "𝒷",
  "bsemi": "⁏",
  "bsim": "∽",
  "bsime": "⋍",
  "bsol": "\\",
  "bsolb": "⧅",
  "bsolhsub": "⟈",
  "bull": "•",
  "bullet": "•",
  "bump": "≎",
  "bumpE": "⪮",
  "bumpe": "≏",
  "bumpeq": "≏",
  "cacute": "ć",
  "cap": "∩",
  "capand": "⩄",
  "capbrcup": "⩉",
  "capcap": "⩋",
  "capcup": "⩇",
  "capdot": "⩀",
  "caps": "∩︀",
  "caret": "⁁",
  "caron": "ˇ",
  "ccaps": "⩍",
  "ccaron": "č",
  "ccedi": "ç",
  "ccedil": "ç",
  "ccirc": "ĉ",
  "ccups": "⩌",
  "ccupssm": "⩐",
  "cdot": "ċ",
  "cedi": "¸",
  "cedil": "¸",
  "cemptyv": "⦲",
  "cen": "¢",
  "cent": "¢",
  "centerdot": "·",
  "cfr": "𝔠",
  "chcy": "ч",
  "check": "✓",
  "checkmark": "✓",
  "chi": "χ",
  "cir": "○",
  "cirE": "⧃",
  "circ": "ˆ",
  "circeq": "≗",
  "circlearrowleft": "↺",
  "circlearrowright": "↻",
  "circledR": "®",
  "circledS": "Ⓢ",
  "circledast": "⊛",
  "circledcirc": "⊚",
  "circleddash": "⊝",
  "cire": "≗",
  "cirfnint": "⨐",
  "cirmid": "⫯",
  "cirscir": "⧂",
  "clubs": "♣",
  "clubsuit": "♣",
  "colon": ":",
  "colone": "≔",
  "coloneq": "≔",
  "comma": ",",
  "commat": "@",
  "comp": "∁",
  "compfn": "∘",
  "complement": "∁",
  "complexes": "ℂ",
  "cong": "≅",
  "congdot": "⩭",
  "conint": "∮",
  "copf": "𝕔",
  "coprod": "∐",
  "cop": "©",
  "copy": "©",
  "copysr": "℗",
  "crarr": "↵",
  "cross": "✗",
  "cscr": "𝒸",
  "csub": "⫏",
  "csube": "⫑",
  "csup": "⫐",
  "csupe": "⫒",
  "ctdot": "⋯",
  "cudarrl": "⤸",
  "cudarrr": "⤵",
  "cuepr": "⋞",
  "cuesc": "⋟",
  "cularr": "↶",
  "cularrp": "⤽",
  "cup": "∪",
  "cupbrcap": "⩈",
  "cupcap": "⩆",
  "cupcup": "⩊",
  "cupdot": "⊍",
  "cupor": "⩅",
  "cups": "∪︀",
  "curarr": "↷",
  "curarrm": "⤼",
  "curlyeqprec": "⋞",
  "curlyeqsucc": "⋟",
  "curlyvee": "⋎",
  "curlywedge": "⋏",
  "curre": "¤",
  "curren": "¤",
  "curvearrowleft": "↶",
  "curvearrowright": "↷",
  "cuvee": "⋎",
  "cuwed": "⋏",
  "cwconint": "∲",
  "cwint": "∱",
  "cylcty": "⌭",
  "dArr": "⇓",
  "dHar": "⥥",
  "dagger": "†",
  "daleth": "ℸ",
  "darr": "↓",
  "dash": "‐",
  "dashv": "⊣",
  "dbkarow": "⤏",
  "dblac": "˝",
  "dcaron": "ď",
  "dcy": "д",
  "dd": "ⅆ",
  "ddagger": "‡",
  "ddarr": "⇊",
  "ddotseq": "⩷",
  "de": "°",
  "deg": "°",
  "delta": "δ",
  "demptyv": "⦱",
  "dfisht": "⥿",
  "dfr": "𝔡",
  "dharl": "⇃",
  "dharr": "⇂",
  "diam": "⋄",
  "diamond": "⋄",
  "diamondsuit": "♦",
  "diams": "♦",
  "die": "¨",
  "digamma": "ϝ",
  "disin": "⋲",
  "div": "÷",
  "divid": "÷",
  "divide": "÷",
  "divideontimes": "⋇",
  "divonx": "⋇",
  "djcy": "ђ",
  "dlcorn": "⌞",
  "dlcrop": "⌍",
  "dollar": "$",
  "dopf": "𝕕",
  "dot": "˙",
  "doteq": "≐",
  "doteqdot": "≑",
  "dotminus": "∸",
  "dotplus": "∔",
  "dotsquare": "⊡",
  "doublebarwedge": "⌆",
  "downarrow": "↓",
  "downdownarrows": "⇊",
  "downharpoonleft": "⇃",
  "downharpoonright": "⇂",
  "drbkarow": "⤐",
  "drcorn": "⌟",
  "drcrop": "⌌",
  "dscr": "𝒹",
  "dscy": "ѕ",
  "dsol": "⧶",
  "dstrok": "đ",
  "dtdot": "⋱",
  "dtri": "▿",
  "dtrif": "▾",
  "duarr": "⇵",
  "duhar": "⥯",
  "dwangle": "⦦",
  "dzcy": "џ",
  "dzigrarr": "⟿",
  "eDDot": "⩷",
  "eDot": "≑",
  "eacut": "é",
  "eacute": "é",
  "easter": "⩮",
  "ecaron": "ě",
  "ecir": "ê",
  "ecirc": "ê",
  "ecolon": "≕",
  "ecy": "э",
  "edot": "ė",
  "ee": "ⅇ",
  "efDot": "≒",
  "efr": "𝔢",
  "eg": "⪚",
  "egrav": "è",
  "egrave": "è",
  "egs": "⪖",
  "egsdot": "⪘",
  "el": "⪙",
  "elinters": "⏧",
  "ell": "ℓ",
  "els": "⪕",
  "elsdot": "⪗",
  "emacr": "ē",
  "empty": "∅",
  "emptyset": "∅",
  "emptyv": "∅",
  "emsp13": " ",
  "emsp14": " ",
  "emsp": " ",
  "eng": "ŋ",
  "ensp": " ",
  "eogon": "ę",
  "eopf": "𝕖",
  "epar": "⋕",
  "eparsl": "⧣",
  "eplus": "⩱",
  "epsi": "ε",
  "epsilon": "ε",
  "epsiv": "ϵ",
  "eqcirc": "≖",
  "eqcolon": "≕",
  "eqsim": "≂",
  "eqslantgtr": "⪖",
  "eqslantless": "⪕",
  "equals": "=",
  "equest": "≟",
  "equiv": "≡",
  "equivDD": "⩸",
  "eqvparsl": "⧥",
  "erDot": "≓",
  "erarr": "⥱",
  "escr": "ℯ",
  "esdot": "≐",
  "esim": "≂",
  "eta": "η",
  "et": "ð",
  "eth": "ð",
  "eum": "ë",
  "euml": "ë",
  "euro": "€",
  "excl": "!",
  "exist": "∃",
  "expectation": "ℰ",
  "exponentiale": "ⅇ",
  "fallingdotseq": "≒",
  "fcy": "ф",
  "female": "♀",
  "ffilig": "ﬃ",
  "fflig": "ﬀ",
  "ffllig": "ﬄ",
  "ffr": "𝔣",
  "filig": "ﬁ",
  "fjlig": "fj",
  "flat": "♭",
  "fllig": "ﬂ",
  "fltns": "▱",
  "fnof": "ƒ",
  "fopf": "𝕗",
  "forall": "∀",
  "fork": "⋔",
  "forkv": "⫙",
  "fpartint": "⨍",
  "frac1": "¼",
  "frac12": "½",
  "frac13": "⅓",
  "frac14": "¼",
  "frac15": "⅕",
  "frac16": "⅙",
  "frac18": "⅛",
  "frac23": "⅔",
  "frac25": "⅖",
  "frac3": "¾",
  "frac34": "¾",
  "frac35": "⅗",
  "frac38": "⅜",
  "frac45": "⅘",
  "frac56": "⅚",
  "frac58": "⅝",
  "frac78": "⅞",
  "frasl": "⁄",
  "frown": "⌢",
  "fscr": "𝒻",
  "gE": "≧",
  "gEl": "⪌",
  "gacute": "ǵ",
  "gamma": "γ",
  "gammad": "ϝ",
  "gap": "⪆",
  "gbreve": "ğ",
  "gcirc": "ĝ",
  "gcy": "г",
  "gdot": "ġ",
  "ge": "≥",
  "gel": "⋛",
  "geq": "≥",
  "geqq": "≧",
  "geqslant": "⩾",
  "ges": "⩾",
  "gescc": "⪩",
  "gesdot": "⪀",
  "gesdoto": "⪂",
  "gesdotol": "⪄",
  "gesl": "⋛︀",
  "gesles": "⪔",
  "gfr": "𝔤",
  "gg": "≫",
  "ggg": "⋙",
  "gimel": "ℷ",
  "gjcy": "ѓ",
  "gl": "≷",
  "glE": "⪒",
  "gla": "⪥",
  "glj": "⪤",
  "gnE": "≩",
  "gnap": "⪊",
  "gnapprox": "⪊",
  "gne": "⪈",
  "gneq": "⪈",
  "gneqq": "≩",
  "gnsim": "⋧",
  "gopf": "𝕘",
  "grave": "`",
  "gscr": "ℊ",
  "gsim": "≳",
  "gsime": "⪎",
  "gsiml": "⪐",
  "g": ">",
  "gt": ">",
  "gtcc": "⪧",
  "gtcir": "⩺",
  "gtdot": "⋗",
  "gtlPar": "⦕",
  "gtquest": "⩼",
  "gtrapprox": "⪆",
  "gtrarr": "⥸",
  "gtrdot": "⋗",
  "gtreqless": "⋛",
  "gtreqqless": "⪌",
  "gtrless": "≷",
  "gtrsim": "≳",
  "gvertneqq": "≩︀",
  "gvnE": "≩︀",
  "hArr": "⇔",
  "hairsp": " ",
  "half": "½",
  "hamilt": "ℋ",
  "hardcy": "ъ",
  "harr": "↔",
  "harrcir": "⥈",
  "harrw": "↭",
  "hbar": "ℏ",
  "hcirc": "ĥ",
  "hearts": "♥",
  "heartsuit": "♥",
  "hellip": "…",
  "hercon": "⊹",
  "hfr": "𝔥",
  "hksearow": "⤥",
  "hkswarow": "⤦",
  "hoarr": "⇿",
  "homtht": "∻",
  "hookleftarrow": "↩",
  "hookrightarrow": "↪",
  "hopf": "𝕙",
  "horbar": "―",
  "hscr": "𝒽",
  "hslash": "ℏ",
  "hstrok": "ħ",
  "hybull": "⁃",
  "hyphen": "‐",
  "iacut": "í",
  "iacute": "í",
  "ic": "⁣",
  "icir": "î",
  "icirc": "î",
  "icy": "и",
  "iecy": "е",
  "iexc": "¡",
  "iexcl": "¡",
  "iff": "⇔",
  "ifr": "𝔦",
  "igrav": "ì",
  "igrave": "ì",
  "ii": "ⅈ",
  "iiiint": "⨌",
  "iiint": "∭",
  "iinfin": "⧜",
  "iiota": "℩",
  "ijlig": "ĳ",
  "imacr": "ī",
  "image": "ℑ",
  "imagline": "ℐ",
  "imagpart": "ℑ",
  "imath": "ı",
  "imof": "⊷",
  "imped": "Ƶ",
  "in": "∈",
  "incare": "℅",
  "infin": "∞",
  "infintie": "⧝",
  "inodot": "ı",
  "int": "∫",
  "intcal": "⊺",
  "integers": "ℤ",
  "intercal": "⊺",
  "intlarhk": "⨗",
  "intprod": "⨼",
  "iocy": "ё",
  "iogon": "į",
  "iopf": "𝕚",
  "iota": "ι",
  "iprod": "⨼",
  "iques": "¿",
  "iquest": "¿",
  "iscr": "𝒾",
  "isin": "∈",
  "isinE": "⋹",
  "isindot": "⋵",
  "isins": "⋴",
  "isinsv": "⋳",
  "isinv": "∈",
  "it": "⁢",
  "itilde": "ĩ",
  "iukcy": "і",
  "ium": "ï",
  "iuml": "ï",
  "jcirc": "ĵ",
  "jcy": "й",
  "jfr": "𝔧",
  "jmath": "ȷ",
  "jopf": "𝕛",
  "jscr": "𝒿",
  "jsercy": "ј",
  "jukcy": "є",
  "kappa": "κ",
  "kappav": "ϰ",
  "kcedil": "ķ",
  "kcy": "к",
  "kfr": "𝔨",
  "kgreen": "ĸ",
  "khcy": "х",
  "kjcy": "ќ",
  "kopf": "𝕜",
  "kscr": "𝓀",
  "lAarr": "⇚",
  "lArr": "⇐",
  "lAtail": "⤛",
  "lBarr": "⤎",
  "lE": "≦",
  "lEg": "⪋",
  "lHar": "⥢",
  "lacute": "ĺ",
  "laemptyv": "⦴",
  "lagran": "ℒ",
  "lambda": "λ",
  "lang": "⟨",
  "langd": "⦑",
  "langle": "⟨",
  "lap": "⪅",
  "laqu": "«",
  "laquo": "«",
  "larr": "←",
  "larrb": "⇤",
  "larrbfs": "⤟",
  "larrfs": "⤝",
  "larrhk": "↩",
  "larrlp": "↫",
  "larrpl": "⤹",
  "larrsim": "⥳",
  "larrtl": "↢",
  "lat": "⪫",
  "latail": "⤙",
  "late": "⪭",
  "lates": "⪭︀",
  "lbarr": "⤌",
  "lbbrk": "❲",
  "lbrace": "{",
  "lbrack": "[",
  "lbrke": "⦋",
  "lbrksld": "⦏",
  "lbrkslu": "⦍",
  "lcaron": "ľ",
  "lcedil": "ļ",
  "lceil": "⌈",
  "lcub": "{",
  "lcy": "л",
  "ldca": "⤶",
  "ldquo": "“",
  "ldquor": "„",
  "ldrdhar": "⥧",
  "ldrushar": "⥋",
  "ldsh": "↲",
  "le": "≤",
  "leftarrow": "←",
  "leftarrowtail": "↢",
  "leftharpoondown": "↽",
  "leftharpoonup": "↼",
  "leftleftarrows": "⇇",
  "leftrightarrow": "↔",
  "leftrightarrows": "⇆",
  "leftrightharpoons": "⇋",
  "leftrightsquigarrow": "↭",
  "leftthreetimes": "⋋",
  "leg": "⋚",
  "leq": "≤",
  "leqq": "≦",
  "leqslant": "⩽",
  "les": "⩽",
  "lescc": "⪨",
  "lesdot": "⩿",
  "lesdoto": "⪁",
  "lesdotor": "⪃",
  "lesg": "⋚︀",
  "lesges": "⪓",
  "lessapprox": "⪅",
  "lessdot": "⋖",
  "lesseqgtr": "⋚",
  "lesseqqgtr": "⪋",
  "lessgtr": "≶",
  "lesssim": "≲",
  "lfisht": "⥼",
  "lfloor": "⌊",
  "lfr": "𝔩",
  "lg": "≶",
  "lgE": "⪑",
  "lhard": "↽",
  "lharu": "↼",
  "lharul": "⥪",
  "lhblk": "▄",
  "ljcy": "љ",
  "ll": "≪",
  "llarr": "⇇",
  "llcorner": "⌞",
  "llhard": "⥫",
  "lltri": "◺",
  "lmidot": "ŀ",
  "lmoust": "⎰",
  "lmoustache": "⎰",
  "lnE": "≨",
  "lnap": "⪉",
  "lnapprox": "⪉",
  "lne": "⪇",
  "lneq": "⪇",
  "lneqq": "≨",
  "lnsim": "⋦",
  "loang": "⟬",
  "loarr": "⇽",
  "lobrk": "⟦",
  "longleftarrow": "⟵",
  "longleftrightarrow": "⟷",
  "longmapsto": "⟼",
  "longrightarrow": "⟶",
  "looparrowleft": "↫",
  "looparrowright": "↬",
  "lopar": "⦅",
  "lopf": "𝕝",
  "loplus": "⨭",
  "lotimes": "⨴",
  "lowast": "∗",
  "lowbar": "_",
  "loz": "◊",
  "lozenge": "◊",
  "lozf": "⧫",
  "lpar": "(",
  "lparlt": "⦓",
  "lrarr": "⇆",
  "lrcorner": "⌟",
  "lrhar": "⇋",
  "lrhard": "⥭",
  "lrm": "‎",
  "lrtri": "⊿",
  "lsaquo": "‹",
  "lscr": "𝓁",
  "lsh": "↰",
  "lsim": "≲",
  "lsime": "⪍",
  "lsimg": "⪏",
  "lsqb": "[",
  "lsquo": "‘",
  "lsquor": "‚",
  "lstrok": "ł",
  "l": "<",
  "lt": "<",
  "ltcc": "⪦",
  "ltcir": "⩹",
  "ltdot": "⋖",
  "lthree": "⋋",
  "ltimes": "⋉",
  "ltlarr": "⥶",
  "ltquest": "⩻",
  "ltrPar": "⦖",
  "ltri": "◃",
  "ltrie": "⊴",
  "ltrif": "◂",
  "lurdshar": "⥊",
  "luruhar": "⥦",
  "lvertneqq": "≨︀",
  "lvnE": "≨︀",
  "mDDot": "∺",
  "mac": "¯",
  "macr": "¯",
  "male": "♂",
  "malt": "✠",
  "maltese": "✠",
  "map": "↦",
  "mapsto": "↦",
  "mapstodown": "↧",
  "mapstoleft": "↤",
  "mapstoup": "↥",
  "marker": "▮",
  "mcomma": "⨩",
  "mcy": "м",
  "mdash": "—",
  "measuredangle": "∡",
  "mfr": "𝔪",
  "mho": "℧",
  "micr": "µ",
  "micro": "µ",
  "mid": "∣",
  "midast": "*",
  "midcir": "⫰",
  "middo": "·",
  "middot": "·",
  "minus": "−",
  "minusb": "⊟",
  "minusd": "∸",
  "minusdu": "⨪",
  "mlcp": "⫛",
  "mldr": "…",
  "mnplus": "∓",
  "models": "⊧",
  "mopf": "𝕞",
  "mp": "∓",
  "mscr": "𝓂",
  "mstpos": "∾",
  "mu": "μ",
  "multimap": "⊸",
  "mumap": "⊸",
  "nGg": "⋙̸",
  "nGt": "≫⃒",
  "nGtv": "≫̸",
  "nLeftarrow": "⇍",
  "nLeftrightarrow": "⇎",
  "nLl": "⋘̸",
  "nLt": "≪⃒",
  "nLtv": "≪̸",
  "nRightarrow": "⇏",
  "nVDash": "⊯",
  "nVdash": "⊮",
  "nabla": "∇",
  "nacute": "ń",
  "nang": "∠⃒",
  "nap": "≉",
  "napE": "⩰̸",
  "napid": "≋̸",
  "napos": "ŉ",
  "napprox": "≉",
  "natur": "♮",
  "natural": "♮",
  "naturals": "ℕ",
  "nbs": " ",
  "nbsp": " ",
  "nbump": "≎̸",
  "nbumpe": "≏̸",
  "ncap": "⩃",
  "ncaron": "ň",
  "ncedil": "ņ",
  "ncong": "≇",
  "ncongdot": "⩭̸",
  "ncup": "⩂",
  "ncy": "н",
  "ndash": "–",
  "ne": "≠",
  "neArr": "⇗",
  "nearhk": "⤤",
  "nearr": "↗",
  "nearrow": "↗",
  "nedot": "≐̸",
  "nequiv": "≢",
  "nesear": "⤨",
  "nesim": "≂̸",
  "nexist": "∄",
  "nexists": "∄",
  "nfr": "𝔫",
  "ngE": "≧̸",
  "nge": "≱",
  "ngeq": "≱",
  "ngeqq": "≧̸",
  "ngeqslant": "⩾̸",
  "nges": "⩾̸",
  "ngsim": "≵",
  "ngt": "≯",
  "ngtr": "≯",
  "nhArr": "⇎",
  "nharr": "↮",
  "nhpar": "⫲",
  "ni": "∋",
  "nis": "⋼",
  "nisd": "⋺",
  "niv": "∋",
  "njcy": "њ",
  "nlArr": "⇍",
  "nlE": "≦̸",
  "nlarr": "↚",
  "nldr": "‥",
  "nle": "≰",
  "nleftarrow": "↚",
  "nleftrightarrow": "↮",
  "nleq": "≰",
  "nleqq": "≦̸",
  "nleqslant": "⩽̸",
  "nles": "⩽̸",
  "nless": "≮",
  "nlsim": "≴",
  "nlt": "≮",
  "nltri": "⋪",
  "nltrie": "⋬",
  "nmid": "∤",
  "nopf": "𝕟",
  "no": "¬",
  "not": "¬",
  "notin": "∉",
  "notinE": "⋹̸",
  "notindot": "⋵̸",
  "notinva": "∉",
  "notinvb": "⋷",
  "notinvc": "⋶",
  "notni": "∌",
  "notniva": "∌",
  "notnivb": "⋾",
  "notnivc": "⋽",
  "npar": "∦",
  "nparallel": "∦",
  "nparsl": "⫽⃥",
  "npart": "∂̸",
  "npolint": "⨔",
  "npr": "⊀",
  "nprcue": "⋠",
  "npre": "⪯̸",
  "nprec": "⊀",
  "npreceq": "⪯̸",
  "nrArr": "⇏",
  "nrarr": "↛",
  "nrarrc": "⤳̸",
  "nrarrw": "↝̸",
  "nrightarrow": "↛",
  "nrtri": "⋫",
  "nrtrie": "⋭",
  "nsc": "⊁",
  "nsccue": "⋡",
  "nsce": "⪰̸",
  "nscr": "𝓃",
  "nshortmid": "∤",
  "nshortparallel": "∦",
  "nsim": "≁",
  "nsime": "≄",
  "nsimeq": "≄",
  "nsmid": "∤",
  "nspar": "∦",
  "nsqsube": "⋢",
  "nsqsupe": "⋣",
  "nsub": "⊄",
  "nsubE": "⫅̸",
  "nsube": "⊈",
  "nsubset": "⊂⃒",
  "nsubseteq": "⊈",
  "nsubseteqq": "⫅̸",
  "nsucc": "⊁",
  "nsucceq": "⪰̸",
  "nsup": "⊅",
  "nsupE": "⫆̸",
  "nsupe": "⊉",
  "nsupset": "⊃⃒",
  "nsupseteq": "⊉",
  "nsupseteqq": "⫆̸",
  "ntgl": "≹",
  "ntild": "ñ",
  "ntilde": "ñ",
  "ntlg": "≸",
  "ntriangleleft": "⋪",
  "ntrianglelefteq": "⋬",
  "ntriangleright": "⋫",
  "ntrianglerighteq": "⋭",
  "nu": "ν",
  "num": "#",
  "numero": "№",
  "numsp": " ",
  "nvDash": "⊭",
  "nvHarr": "⤄",
  "nvap": "≍⃒",
  "nvdash": "⊬",
  "nvge": "≥⃒",
  "nvgt": ">⃒",
  "nvinfin": "⧞",
  "nvlArr": "⤂",
  "nvle": "≤⃒",
  "nvlt": "<⃒",
  "nvltrie": "⊴⃒",
  "nvrArr": "⤃",
  "nvrtrie": "⊵⃒",
  "nvsim": "∼⃒",
  "nwArr": "⇖",
  "nwarhk": "⤣",
  "nwarr": "↖",
  "nwarrow": "↖",
  "nwnear": "⤧",
  "oS": "Ⓢ",
  "oacut": "ó",
  "oacute": "ó",
  "oast": "⊛",
  "ocir": "ô",
  "ocirc": "ô",
  "ocy": "о",
  "odash": "⊝",
  "odblac": "ő",
  "odiv": "⨸",
  "odot": "⊙",
  "odsold": "⦼",
  "oelig": "œ",
  "ofcir": "⦿",
  "ofr": "𝔬",
  "ogon": "˛",
  "ograv": "ò",
  "ograve": "ò",
  "ogt": "⧁",
  "ohbar": "⦵",
  "ohm": "Ω",
  "oint": "∮",
  "olarr": "↺",
  "olcir": "⦾",
  "olcross": "⦻",
  "oline": "‾",
  "olt": "⧀",
  "omacr": "ō",
  "omega": "ω",
  "omicron": "ο",
  "omid": "⦶",
  "ominus": "⊖",
  "oopf": "𝕠",
  "opar": "⦷",
  "operp": "⦹",
  "oplus": "⊕",
  "or": "∨",
  "orarr": "↻",
  "ord": "º",
  "order": "ℴ",
  "orderof": "ℴ",
  "ordf": "ª",
  "ordm": "º",
  "origof": "⊶",
  "oror": "⩖",
  "orslope": "⩗",
  "orv": "⩛",
  "oscr": "ℴ",
  "oslas": "ø",
  "oslash": "ø",
  "osol": "⊘",
  "otild": "õ",
  "otilde": "õ",
  "otimes": "⊗",
  "otimesas": "⨶",
  "oum": "ö",
  "ouml": "ö",
  "ovbar": "⌽",
  "par": "¶",
  "para": "¶",
  "parallel": "∥",
  "parsim": "⫳",
  "parsl": "⫽",
  "part": "∂",
  "pcy": "п",
  "percnt": "%",
  "period": ".",
  "permil": "‰",
  "perp": "⊥",
  "pertenk": "‱",
  "pfr": "𝔭",
  "phi": "φ",
  "phiv": "ϕ",
  "phmmat": "ℳ",
  "phone": "☎",
  "pi": "π",
  "pitchfork": "⋔",
  "piv": "ϖ",
  "planck": "ℏ",
  "planckh": "ℎ",
  "plankv": "ℏ",
  "plus": "+",
  "plusacir": "⨣",
  "plusb": "⊞",
  "pluscir": "⨢",
  "plusdo": "∔",
  "plusdu": "⨥",
  "pluse": "⩲",
  "plusm": "±",
  "plusmn": "±",
  "plussim": "⨦",
  "plustwo": "⨧",
  "pm": "±",
  "pointint": "⨕",
  "popf": "𝕡",
  "poun": "£",
  "pound": "£",
  "pr": "≺",
  "prE": "⪳",
  "prap": "⪷",
  "prcue": "≼",
  "pre": "⪯",
  "prec": "≺",
  "precapprox": "⪷",
  "preccurlyeq": "≼",
  "preceq": "⪯",
  "precnapprox": "⪹",
  "precneqq": "⪵",
  "precnsim": "⋨",
  "precsim": "≾",
  "prime": "′",
  "primes": "ℙ",
  "prnE": "⪵",
  "prnap": "⪹",
  "prnsim": "⋨",
  "prod": "∏",
  "profalar": "⌮",
  "profline": "⌒",
  "profsurf": "⌓",
  "prop": "∝",
  "propto": "∝",
  "prsim": "≾",
  "prurel": "⊰",
  "pscr": "𝓅",
  "psi": "ψ",
  "puncsp": " ",
  "qfr": "𝔮",
  "qint": "⨌",
  "qopf": "𝕢",
  "qprime": "⁗",
  "qscr": "𝓆",
  "quaternions": "ℍ",
  "quatint": "⨖",
  "quest": "?",
  "questeq": "≟",
  "quo": "\"",
  "quot": "\"",
  "rAarr": "⇛",
  "rArr": "⇒",
  "rAtail": "⤜",
  "rBarr": "⤏",
  "rHar": "⥤",
  "race": "∽̱",
  "racute": "ŕ",
  "radic": "√",
  "raemptyv": "⦳",
  "rang": "⟩",
  "rangd": "⦒",
  "range": "⦥",
  "rangle": "⟩",
  "raqu": "»",
  "raquo": "»",
  "rarr": "→",
  "rarrap": "⥵",
  "rarrb": "⇥",
  "rarrbfs": "⤠",
  "rarrc": "⤳",
  "rarrfs": "⤞",
  "rarrhk": "↪",
  "rarrlp": "↬",
  "rarrpl": "⥅",
  "rarrsim": "⥴",
  "rarrtl": "↣",
  "rarrw": "↝",
  "ratail": "⤚",
  "ratio": "∶",
  "rationals": "ℚ",
  "rbarr": "⤍",
  "rbbrk": "❳",
  "rbrace": "}",
  "rbrack": "]",
  "rbrke": "⦌",
  "rbrksld": "⦎",
  "rbrkslu": "⦐",
  "rcaron": "ř",
  "rcedil": "ŗ",
  "rceil": "⌉",
  "rcub": "}",
  "rcy": "р",
  "rdca": "⤷",
  "rdldhar": "⥩",
  "rdquo": "”",
  "rdquor": "”",
  "rdsh": "↳",
  "real": "ℜ",
  "realine": "ℛ",
  "realpart": "ℜ",
  "reals": "ℝ",
  "rect": "▭",
  "re": "®",
  "reg": "®",
  "rfisht": "⥽",
  "rfloor": "⌋",
  "rfr": "𝔯",
  "rhard": "⇁",
  "rharu": "⇀",
  "rharul": "⥬",
  "rho": "ρ",
  "rhov": "ϱ",
  "rightarrow": "→",
  "rightarrowtail": "↣",
  "rightharpoondown": "⇁",
  "rightharpoonup": "⇀",
  "rightleftarrows": "⇄",
  "rightleftharpoons": "⇌",
  "rightrightarrows": "⇉",
  "rightsquigarrow": "↝",
  "rightthreetimes": "⋌",
  "ring": "˚",
  "risingdotseq": "≓",
  "rlarr": "⇄",
  "rlhar": "⇌",
  "rlm": "‏",
  "rmoust": "⎱",
  "rmoustache": "⎱",
  "rnmid": "⫮",
  "roang": "⟭",
  "roarr": "⇾",
  "robrk": "⟧",
  "ropar": "⦆",
  "ropf": "𝕣",
  "roplus": "⨮",
  "rotimes": "⨵",
  "rpar": ")",
  "rpargt": "⦔",
  "rppolint": "⨒",
  "rrarr": "⇉",
  "rsaquo": "›",
  "rscr": "𝓇",
  "rsh": "↱",
  "rsqb": "]",
  "rsquo": "’",
  "rsquor": "’",
  "rthree": "⋌",
  "rtimes": "⋊",
  "rtri": "▹",
  "rtrie": "⊵",
  "rtrif": "▸",
  "rtriltri": "⧎",
  "ruluhar": "⥨",
  "rx": "℞",
  "sacute": "ś",
  "sbquo": "‚",
  "sc": "≻",
  "scE": "⪴",
  "scap": "⪸",
  "scaron": "š",
  "sccue": "≽",
  "sce": "⪰",
  "scedil": "ş",
  "scirc": "ŝ",
  "scnE": "⪶",
  "scnap": "⪺",
  "scnsim": "⋩",
  "scpolint": "⨓",
  "scsim": "≿",
  "scy": "с",
  "sdot": "⋅",
  "sdotb": "⊡",
  "sdote": "⩦",
  "seArr": "⇘",
  "searhk": "⤥",
  "searr": "↘",
  "searrow": "↘",
  "sec": "§",
  "sect": "§",
  "semi": ";",
  "seswar": "⤩",
  "setminus": "∖",
  "setmn": "∖",
  "sext": "✶",
  "sfr": "𝔰",
  "sfrown": "⌢",
  "sharp": "♯",
  "shchcy": "щ",
  "shcy": "ш",
  "shortmid": "∣",
  "shortparallel": "∥",
  "sh": "­",
  "shy": "­",
  "sigma": "σ",
  "sigmaf": "ς",
  "sigmav": "ς",
  "sim": "∼",
  "simdot": "⩪",
  "sime": "≃",
  "simeq": "≃",
  "simg": "⪞",
  "simgE": "⪠",
  "siml": "⪝",
  "simlE": "⪟",
  "simne": "≆",
  "simplus": "⨤",
  "simrarr": "⥲",
  "slarr": "←",
  "smallsetminus": "∖",
  "smashp": "⨳",
  "smeparsl": "⧤",
  "smid": "∣",
  "smile": "⌣",
  "smt": "⪪",
  "smte": "⪬",
  "smtes": "⪬︀",
  "softcy": "ь",
  "sol": "/",
  "solb": "⧄",
  "solbar": "⌿",
  "sopf": "𝕤",
  "spades": "♠",
  "spadesuit": "♠",
  "spar": "∥",
  "sqcap": "⊓",
  "sqcaps": "⊓︀",
  "sqcup": "⊔",
  "sqcups": "⊔︀",
  "sqsub": "⊏",
  "sqsube": "⊑",
  "sqsubset": "⊏",
  "sqsubseteq": "⊑",
  "sqsup": "⊐",
  "sqsupe": "⊒",
  "sqsupset": "⊐",
  "sqsupseteq": "⊒",
  "squ": "□",
  "square": "□",
  "squarf": "▪",
  "squf": "▪",
  "srarr": "→",
  "sscr": "𝓈",
  "ssetmn": "∖",
  "ssmile": "⌣",
  "sstarf": "⋆",
  "star": "☆",
  "starf": "★",
  "straightepsilon": "ϵ",
  "straightphi": "ϕ",
  "strns": "¯",
  "sub": "⊂",
  "subE": "⫅",
  "subdot": "⪽",
  "sube": "⊆",
  "subedot": "⫃",
  "submult": "⫁",
  "subnE": "⫋",
  "subne": "⊊",
  "subplus": "⪿",
  "subrarr": "⥹",
  "subset": "⊂",
  "subseteq": "⊆",
  "subseteqq": "⫅",
  "subsetneq": "⊊",
  "subsetneqq": "⫋",
  "subsim": "⫇",
  "subsub": "⫕",
  "subsup": "⫓",
  "succ": "≻",
  "succapprox": "⪸",
  "succcurlyeq": "≽",
  "succeq": "⪰",
  "succnapprox": "⪺",
  "succneqq": "⪶",
  "succnsim": "⋩",
  "succsim": "≿",
  "sum": "∑",
  "sung": "♪",
  "sup": "⊃",
  "sup1": "¹",
  "sup2": "²",
  "sup3": "³",
  "supE": "⫆",
  "supdot": "⪾",
  "supdsub": "⫘",
  "supe": "⊇",
  "supedot": "⫄",
  "suphsol": "⟉",
  "suphsub": "⫗",
  "suplarr": "⥻",
  "supmult": "⫂",
  "supnE": "⫌",
  "supne": "⊋",
  "supplus": "⫀",
  "supset": "⊃",
  "supseteq": "⊇",
  "supseteqq": "⫆",
  "supsetneq": "⊋",
  "supsetneqq": "⫌",
  "supsim": "⫈",
  "supsub": "⫔",
  "supsup": "⫖",
  "swArr": "⇙",
  "swarhk": "⤦",
  "swarr": "↙",
  "swarrow": "↙",
  "swnwar": "⤪",
  "szli": "ß",
  "szlig": "ß",
  "target": "⌖",
  "tau": "τ",
  "tbrk": "⎴",
  "tcaron": "ť",
  "tcedil": "ţ",
  "tcy": "т",
  "tdot": "⃛",
  "telrec": "⌕",
  "tfr": "𝔱",
  "there4": "∴",
  "therefore": "∴",
  "theta": "θ",
  "thetasym": "ϑ",
  "thetav": "ϑ",
  "thickapprox": "≈",
  "thicksim": "∼",
  "thinsp": " ",
  "thkap": "≈",
  "thksim": "∼",
  "thor": "þ",
  "thorn": "þ",
  "tilde": "˜",
  "time": "×",
  "times": "×",
  "timesb": "⊠",
  "timesbar": "⨱",
  "timesd": "⨰",
  "tint": "∭",
  "toea": "⤨",
  "top": "⊤",
  "topbot": "⌶",
  "topcir": "⫱",
  "topf": "𝕥",
  "topfork": "⫚",
  "tosa": "⤩",
  "tprime": "‴",
  "trade": "™",
  "triangle": "▵",
  "triangledown": "▿",
  "triangleleft": "◃",
  "trianglelefteq": "⊴",
  "triangleq": "≜",
  "triangleright": "▹",
  "trianglerighteq": "⊵",
  "tridot": "◬",
  "trie": "≜",
  "triminus": "⨺",
  "triplus": "⨹",
  "trisb": "⧍",
  "tritime": "⨻",
  "trpezium": "⏢",
  "tscr": "𝓉",
  "tscy": "ц",
  "tshcy": "ћ",
  "tstrok": "ŧ",
  "twixt": "≬",
  "twoheadleftarrow": "↞",
  "twoheadrightarrow": "↠",
  "uArr": "⇑",
  "uHar": "⥣",
  "uacut": "ú",
  "uacute": "ú",
  "uarr": "↑",
  "ubrcy": "ў",
  "ubreve": "ŭ",
  "ucir": "û",
  "ucirc": "û",
  "ucy": "у",
  "udarr": "⇅",
  "udblac": "ű",
  "udhar": "⥮",
  "ufisht": "⥾",
  "ufr": "𝔲",
  "ugrav": "ù",
  "ugrave": "ù",
  "uharl": "↿",
  "uharr": "↾",
  "uhblk": "▀",
  "ulcorn": "⌜",
  "ulcorner": "⌜",
  "ulcrop": "⌏",
  "ultri": "◸",
  "umacr": "ū",
  "um": "¨",
  "uml": "¨",
  "uogon": "ų",
  "uopf": "𝕦",
  "uparrow": "↑",
  "updownarrow": "↕",
  "upharpoonleft": "↿",
  "upharpoonright": "↾",
  "uplus": "⊎",
  "upsi": "υ",
  "upsih": "ϒ",
  "upsilon": "υ",
  "upuparrows": "⇈",
  "urcorn": "⌝",
  "urcorner": "⌝",
  "urcrop": "⌎",
  "uring": "ů",
  "urtri": "◹",
  "uscr": "𝓊",
  "utdot": "⋰",
  "utilde": "ũ",
  "utri": "▵",
  "utrif": "▴",
  "uuarr": "⇈",
  "uum": "ü",
  "uuml": "ü",
  "uwangle": "⦧",
  "vArr": "⇕",
  "vBar": "⫨",
  "vBarv": "⫩",
  "vDash": "⊨",
  "vangrt": "⦜",
  "varepsilon": "ϵ",
  "varkappa": "ϰ",
  "varnothing": "∅",
  "varphi": "ϕ",
  "varpi": "ϖ",
  "varpropto": "∝",
  "varr": "↕",
  "varrho": "ϱ",
  "varsigma": "ς",
  "varsubsetneq": "⊊︀",
  "varsubsetneqq": "⫋︀",
  "varsupsetneq": "⊋︀",
  "varsupsetneqq": "⫌︀",
  "vartheta": "ϑ",
  "vartriangleleft": "⊲",
  "vartriangleright": "⊳",
  "vcy": "в",
  "vdash": "⊢",
  "vee": "∨",
  "veebar": "⊻",
  "veeeq": "≚",
  "vellip": "⋮",
  "verbar": "|",
  "vert": "|",
  "vfr": "𝔳",
  "vltri": "⊲",
  "vnsub": "⊂⃒",
  "vnsup": "⊃⃒",
  "vopf": "𝕧",
  "vprop": "∝",
  "vrtri": "⊳",
  "vscr": "𝓋",
  "vsubnE": "⫋︀",
  "vsubne": "⊊︀",
  "vsupnE": "⫌︀",
  "vsupne": "⊋︀",
  "vzigzag": "⦚",
  "wcirc": "ŵ",
  "wedbar": "⩟",
  "wedge": "∧",
  "wedgeq": "≙",
  "weierp": "℘",
  "wfr": "𝔴",
  "wopf": "𝕨",
  "wp": "℘",
  "wr": "≀",
  "wreath": "≀",
  "wscr": "𝓌",
  "xcap": "⋂",
  "xcirc": "◯",
  "xcup": "⋃",
  "xdtri": "▽",
  "xfr": "𝔵",
  "xhArr": "⟺",
  "xharr": "⟷",
  "xi": "ξ",
  "xlArr": "⟸",
  "xlarr": "⟵",
  "xmap": "⟼",
  "xnis": "⋻",
  "xodot": "⨀",
  "xopf": "𝕩",
  "xoplus": "⨁",
  "xotime": "⨂",
  "xrArr": "⟹",
  "xrarr": "⟶",
  "xscr": "𝓍",
  "xsqcup": "⨆",
  "xuplus": "⨄",
  "xutri": "△",
  "xvee": "⋁",
  "xwedge": "⋀",
  "yacut": "ý",
  "yacute": "ý",
  "yacy": "я",
  "ycirc": "ŷ",
  "ycy": "ы",
  "ye": "¥",
  "yen": "¥",
  "yfr": "𝔶",
  "yicy": "ї",
  "yopf": "𝕪",
  "yscr": "𝓎",
  "yucy": "ю",
  "yum": "ÿ",
  "yuml": "ÿ",
  "zacute": "ź",
  "zcaron": "ž",
  "zcy": "з",
  "zdot": "ż",
  "zeetrf": "ℨ",
  "zeta": "ζ",
  "zfr": "𝔷",
  "zhcy": "ж",
  "zigrarr": "⇝",
  "zopf": "𝕫",
  "zscr": "𝓏",
  "zwj": "‍",
  "zwnj": "‌"
};
// ASSET: ../../../parse-entities/decode-entity.js
var $S7VQ$exports = {};
$S7VQ$exports = $S7VQ$var$decodeEntity;
var $S7VQ$var$own = {}.hasOwnProperty;

function $S7VQ$var$decodeEntity(characters) {
  return $S7VQ$var$own.call($Migq$exports, characters) ? $Migq$exports[characters] : false;
}

// ASSET: ../../../micromark/dist/character/ascii-digit.js
var $rH8i$exports = {};
var $rH8i$var$asciiDigit = $kGne$exports(/\d/);
$rH8i$exports = $rH8i$var$asciiDigit;
// ASSET: ../../../micromark/dist/character/ascii-hex-digit.js
var $dNim$exports = {};
var $dNim$var$asciiHexDigit = $kGne$exports(/[\dA-Fa-f]/);
$dNim$exports = $dNim$var$asciiHexDigit;
// ASSET: ../../../micromark/dist/tokenize/character-reference.js
var $qJia$exports = {};

function $qJia$var$_interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}

var $qJia$var$decodeEntity__default = /*#__PURE__*/$qJia$var$_interopDefaultLegacy($S7VQ$exports);
var $qJia$var$characterReference = {
  name: 'characterReference',
  tokenize: $qJia$var$tokenizeCharacterReference
};

function $qJia$var$tokenizeCharacterReference(effects, ok, nok) {
  var self = this;
  var size = 0;
  var max;
  var test;
  return start;

  function start(code) {
    effects.enter('characterReference');
    effects.enter('characterReferenceMarker');
    effects.consume(code);
    effects.exit('characterReferenceMarker');
    return open;
  }

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric');
      effects.consume(code);
      effects.exit('characterReferenceMarkerNumeric');
      return numeric;
    }

    effects.enter('characterReferenceValue');
    max = 31;
    test = $oB2J$exports;
    return value(code);
  }

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal');
      effects.consume(code);
      effects.exit('characterReferenceMarkerHexadecimal');
      effects.enter('characterReferenceValue');
      max = 6;
      test = $dNim$exports;
      return value;
    }

    effects.enter('characterReferenceValue');
    max = 7;
    test = $rH8i$exports;
    return value(code);
  }

  function value(code) {
    var token;

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue');

      if (test === $oB2J$exports && !$qJia$var$decodeEntity__default['default'](self.sliceSerialize(token))) {
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

$qJia$exports = $qJia$var$characterReference;
// ASSET: ../../../micromark/dist/tokenize/code-fenced.js
var $jdpT$exports = {};
var $jdpT$var$codeFenced = {
  name: 'codeFenced',
  tokenize: $jdpT$var$tokenizeCodeFenced,
  concrete: true
};

function $jdpT$var$tokenizeCodeFenced(effects, ok, nok) {
  var self = this;
  var closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  var initialPrefix = $zmts$exports(this.events, 'linePrefix');
  var sizeOpen = 0;
  var marker;
  return start;

  function start(code) {
    effects.enter('codeFenced');
    effects.enter('codeFencedFence');
    effects.enter('codeFencedFenceSequence');
    marker = code;
    return sequenceOpen(code);
  }

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }

    effects.exit('codeFencedFenceSequence');
    return sizeOpen < 3 ? nok(code) : $VZrc$exports(effects, infoOpen, 'whitespace')(code);
  }

  function infoOpen(code) {
    if (code === null || $sF0i$exports(code)) {
      return openAfter(code);
    }

    effects.enter('codeFencedFenceInfo');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return info(code);
  }

  function info(code) {
    if (code === null || $iubz$exports(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return $VZrc$exports(effects, infoAfter, 'whitespace')(code);
    }

    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return info;
  }

  function infoAfter(code) {
    if (code === null || $sF0i$exports(code)) {
      return openAfter(code);
    }

    effects.enter('codeFencedFenceMeta');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return meta(code);
  }

  function meta(code) {
    if (code === null || $sF0i$exports(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceMeta');
      return openAfter(code);
    }

    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return meta;
  }

  function openAfter(code) {
    effects.exit('codeFencedFence');
    return self.interrupt ? ok(code) : content(code);
  }

  function content(code) {
    if (code === null) {
      return after(code);
    }

    if ($sF0i$exports(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return effects.attempt(closingFenceConstruct, after, initialPrefix ? $VZrc$exports(effects, content, 'linePrefix', initialPrefix + 1) : content);
    }

    effects.enter('codeFlowValue');
    return contentContinue(code);
  }

  function contentContinue(code) {
    if (code === null || $sF0i$exports(code)) {
      effects.exit('codeFlowValue');
      return content(code);
    }

    effects.consume(code);
    return contentContinue;
  }

  function after(code) {
    effects.exit('codeFenced');
    return ok(code);
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0;
    return $VZrc$exports(effects, closingSequenceStart, 'linePrefix', this.parser.constructs.disable.null.indexOf('codeIndented') > -1 ? undefined : 4);

    function closingSequenceStart(code) {
      effects.enter('codeFencedFence');
      effects.enter('codeFencedFenceSequence');
      return closingSequence(code);
    }

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code);
        size++;
        return closingSequence;
      }

      if (size < sizeOpen) return nok(code);
      effects.exit('codeFencedFenceSequence');
      return $VZrc$exports(effects, closingSequenceEnd, 'whitespace')(code);
    }

    function closingSequenceEnd(code) {
      if (code === null || $sF0i$exports(code)) {
        effects.exit('codeFencedFence');
        return ok(code);
      }

      return nok(code);
    }
  }
}

$jdpT$exports = $jdpT$var$codeFenced;
// ASSET: ../../../micromark/dist/tokenize/code-indented.js
var $yiMF$exports = {};
var $yiMF$var$codeIndented = {
  name: 'codeIndented',
  tokenize: $yiMF$var$tokenizeCodeIndented,
  resolve: $yiMF$var$resolveCodeIndented
};
var $yiMF$var$indentedContentConstruct = {
  tokenize: $yiMF$var$tokenizeIndentedContent,
  partial: true
};

function $yiMF$var$resolveCodeIndented(events, context) {
  var code = {
    type: 'codeIndented',
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  };
  $RVQg$exports(events, 0, 0, [['enter', code, context]]);
  $RVQg$exports(events, events.length, 0, [['exit', code, context]]);
  return events;
}

function $yiMF$var$tokenizeCodeIndented(effects, ok, nok) {
  return effects.attempt($yiMF$var$indentedContentConstruct, afterPrefix, nok);

  function afterPrefix(code) {
    if (code === null) {
      return ok(code);
    }

    if ($sF0i$exports(code)) {
      return effects.attempt($yiMF$var$indentedContentConstruct, afterPrefix, ok)(code);
    }

    effects.enter('codeFlowValue');
    return content(code);
  }

  function content(code) {
    if (code === null || $sF0i$exports(code)) {
      effects.exit('codeFlowValue');
      return afterPrefix(code);
    }

    effects.consume(code);
    return content;
  }
}

function $yiMF$var$tokenizeIndentedContent(effects, ok, nok) {
  var self = this;
  return $VZrc$exports(effects, afterPrefix, 'linePrefix', 4 + 1);

  function afterPrefix(code) {
    if ($sF0i$exports(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return $VZrc$exports(effects, afterPrefix, 'linePrefix', 4 + 1);
    }

    return $zmts$exports(self.events, 'linePrefix') < 4 ? nok(code) : ok(code);
  }
}

$yiMF$exports = $yiMF$var$codeIndented;
// ASSET: ../../../micromark/dist/tokenize/code-text.js
var $Ggc3$exports = {};
var $Ggc3$var$codeText = {
  name: 'codeText',
  tokenize: $Ggc3$var$tokenizeCodeText,
  resolve: $Ggc3$var$resolveCodeText,
  previous: $Ggc3$var$previous
};

function $Ggc3$var$resolveCodeText(events) {
  var tailExitIndex = events.length - 4;
  var headEnterIndex = 3;
  var index;
  var enter; // If we start and end with an EOL or a space.

  if ((events[headEnterIndex][1].type === 'lineEnding' || events[headEnterIndex][1].type === 'space') && (events[tailExitIndex][1].type === 'lineEnding' || events[tailExitIndex][1].type === 'space')) {
    index = headEnterIndex; // And we have data.

    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = events[headEnterIndex][1].type = 'codeTextPadding';
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

function $Ggc3$var$previous(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}

function $Ggc3$var$tokenizeCodeText(effects, ok, nok) {
  var sizeOpen = 0;
  var size;
  var token;
  return start;

  function start(code) {
    effects.enter('codeText');
    effects.enter('codeTextSequence');
    return openingSequence(code);
  }

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence;
    }

    effects.exit('codeTextSequence');
    return gap(code);
  }

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

    if ($sF0i$exports(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return gap;
    } // Data.


    effects.enter('codeTextData');
    return data(code);
  } // In code.


  function data(code) {
    if (code === null || code === 32 || code === 96 || $sF0i$exports(code)) {
      effects.exit('codeTextData');
      return gap(code);
    }

    effects.consume(code);
    return data;
  } // Closing fence.


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

$Ggc3$exports = $Ggc3$var$codeText;
// ASSET: ../../../micromark/dist/tokenize/factory-destination.js
var $ARD2$exports = {};

// eslint-disable-next-line max-params
function $ARD2$var$destinationFactory(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  var limit = max || Infinity;
  var balance = 0;
  return start;

  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }

    if ($SPmF$exports(code)) {
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

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString');
      effects.exit(stringType);
      return destinationEnclosedBefore(code);
    }

    if (code === null || code === 60 || $sF0i$exports(code)) {
      return nok(code);
    }

    effects.consume(code);
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return destinationEnclosed;
    }

    return destinationEnclosed(code);
  }

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

    if (code === null || $iubz$exports(code)) {
      if (balance) return nok(code);
      effects.exit('chunkString');
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code);
    }

    if ($SPmF$exports(code)) return nok(code);
    effects.consume(code);
    return code === 92 ? destinationRawEscape : destinationRaw;
  }

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return destinationRaw;
    }

    return destinationRaw(code);
  }
}

$ARD2$exports = $ARD2$var$destinationFactory;
// ASSET: ../../../micromark/dist/tokenize/factory-label.js
var $VUi0$exports = {};

// eslint-disable-next-line max-params
function $VUi0$var$labelFactory(effects, ok, nok, type, markerType, stringType) {
  var self = this;
  var size = 0;
  var data;
  return start;

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }

  function atBreak(code) {
    if (code === null || code === 91 || code === 93 && !data || code === 94 &&
    /* c8 ignore next */
    !size &&
    /* c8 ignore next */
    '_hiddenFootnoteSupport' in self.parser.constructs || size > 999) {
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

    if ($sF0i$exports(code)) {
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

  function label(code) {
    if (code === null || code === 91 || code === 93 || $sF0i$exports(code) || size++ > 999) {
      effects.exit('chunkString');
      return atBreak(code);
    }

    effects.consume(code);
    data = data || !$fL2l$exports(code);
    return code === 92 ? labelEscape : label;
  }

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label;
    }

    return label(code);
  }
}

$VUi0$exports = $VUi0$var$labelFactory;
// ASSET: ../../../micromark/dist/tokenize/factory-whitespace.js
var $svPo$exports = {};

function $svPo$var$whitespaceFactory(effects, ok) {
  var seen;
  return start;

  function start(code) {
    if ($sF0i$exports(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start;
    }

    if ($fL2l$exports(code)) {
      return $VZrc$exports(effects, start, seen ? 'linePrefix' : 'lineSuffix')(code);
    }

    return ok(code);
  }
}

$svPo$exports = $svPo$var$whitespaceFactory;
// ASSET: ../../../micromark/dist/tokenize/factory-title.js
var $KLtZ$exports = {};

function $KLtZ$var$titleFactory(effects, ok, nok, type, markerType, stringType) {
  var marker;
  return start;

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak;
  }

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

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }

    if (code === null) {
      return nok(code);
    } // Note: blank lines can’t exist in content.


    if ($sF0i$exports(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return $VZrc$exports(effects, atTitleBreak, 'linePrefix');
    }

    effects.enter('chunkString', {
      contentType: 'string'
    });
    return title(code);
  }

  function title(code) {
    if (code === marker || code === null || $sF0i$exports(code)) {
      effects.exit('chunkString');
      return atTitleBreak(code);
    }

    effects.consume(code);
    return code === 92 ? titleEscape : title;
  }

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title;
    }

    return title(code);
  }
}

$KLtZ$exports = $KLtZ$var$titleFactory;
// ASSET: ../../../micromark/dist/tokenize/definition.js
var $cQDx$exports = {};
var $cQDx$var$definition = {
  name: 'definition',
  tokenize: $cQDx$var$tokenizeDefinition
};
var $cQDx$var$titleConstruct = {
  tokenize: $cQDx$var$tokenizeTitle,
  partial: true
};

function $cQDx$var$tokenizeDefinition(effects, ok, nok) {
  var self = this;
  var identifier;
  return start;

  function start(code) {
    effects.enter('definition');
    return $VUi0$exports.call(self, effects, labelAfter, nok, 'definitionLabel', 'definitionLabelMarker', 'definitionLabelString')(code);
  }

  function labelAfter(code) {
    identifier = $EPia$exports(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));

    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker'); // Note: blank lines can’t exist in content.

      return $svPo$exports(effects, $ARD2$exports(effects, effects.attempt($cQDx$var$titleConstruct, $VZrc$exports(effects, after, 'whitespace'), $VZrc$exports(effects, after, 'whitespace')), nok, 'definitionDestination', 'definitionDestinationLiteral', 'definitionDestinationLiteralMarker', 'definitionDestinationRaw', 'definitionDestinationString'));
    }

    return nok(code);
  }

  function after(code) {
    if (code === null || $sF0i$exports(code)) {
      effects.exit('definition');

      if (self.parser.defined.indexOf(identifier) < 0) {
        self.parser.defined.push(identifier);
      }

      return ok(code);
    }

    return nok(code);
  }
}

function $cQDx$var$tokenizeTitle(effects, ok, nok) {
  return start;

  function start(code) {
    return $iubz$exports(code) ? $svPo$exports(effects, before)(code) : nok(code);
  }

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return $KLtZ$exports(effects, $VZrc$exports(effects, after, 'whitespace'), nok, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(code);
    }

    return nok(code);
  }

  function after(code) {
    return code === null || $sF0i$exports(code) ? ok(code) : nok(code);
  }
}

$cQDx$exports = $cQDx$var$definition;
// ASSET: ../../../micromark/dist/tokenize/hard-break-escape.js
var $fZsG$exports = {};
var $fZsG$var$hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: $fZsG$var$tokenizeHardBreakEscape
};

function $fZsG$var$tokenizeHardBreakEscape(effects, ok, nok) {
  return start;

  function start(code) {
    effects.enter('hardBreakEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    return open;
  }

  function open(code) {
    if ($sF0i$exports(code)) {
      effects.exit('escapeMarker');
      effects.exit('hardBreakEscape');
      return ok(code);
    }

    return nok(code);
  }
}

$fZsG$exports = $fZsG$var$hardBreakEscape;
// ASSET: ../../../micromark/dist/tokenize/heading-atx.js
var $jTAn$exports = {};
var $jTAn$var$headingAtx = {
  name: 'headingAtx',
  tokenize: $jTAn$var$tokenizeHeadingAtx,
  resolve: $jTAn$var$resolveHeadingAtx
};

function $jTAn$var$resolveHeadingAtx(events, context) {
  var contentEnd = events.length - 2;
  var contentStart = 3;
  var content;
  var text; // Prefix whitespace, part of the opening.

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
      contentType: 'text'
    };
    $RVQg$exports(events, contentStart, contentEnd - contentStart + 1, [['enter', content, context], ['enter', text, context], ['exit', text, context], ['exit', content, context]]);
  }

  return events;
}

function $jTAn$var$tokenizeHeadingAtx(effects, ok, nok) {
  var self = this;
  var size = 0;
  return start;

  function start(code) {
    effects.enter('atxHeading');
    effects.enter('atxHeadingSequence');
    return fenceOpenInside(code);
  }

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return fenceOpenInside;
    }

    if (code === null || $iubz$exports(code)) {
      effects.exit('atxHeadingSequence');
      return self.interrupt ? ok(code) : headingBreak(code);
    }

    return nok(code);
  }

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence');
      return sequence(code);
    }

    if (code === null || $sF0i$exports(code)) {
      effects.exit('atxHeading');
      return ok(code);
    }

    if ($fL2l$exports(code)) {
      return $VZrc$exports(effects, headingBreak, 'whitespace')(code);
    }

    effects.enter('atxHeadingText');
    return data(code);
  }

  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence;
    }

    effects.exit('atxHeadingSequence');
    return headingBreak(code);
  }

  function data(code) {
    if (code === null || code === 35 || $iubz$exports(code)) {
      effects.exit('atxHeadingText');
      return headingBreak(code);
    }

    effects.consume(code);
    return data;
  }
}

$jTAn$exports = $jTAn$var$headingAtx;
// ASSET: ../../../micromark/dist/constant/html-block-names.js
var $HeSN$exports = {}; // This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.

var $HeSN$var$basics = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'source', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];
$HeSN$exports = $HeSN$var$basics;
// ASSET: ../../../micromark/dist/constant/html-raw-names.js
var $FrFo$exports = {}; // This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.

var $FrFo$var$raws = ['pre', 'script', 'style', 'textarea'];
$FrFo$exports = $FrFo$var$raws;
// ASSET: ../../../micromark/dist/tokenize/html-flow.js
var $YoJD$exports = {};
var $YoJD$var$htmlFlow = {
  name: 'htmlFlow',
  tokenize: $YoJD$var$tokenizeHtmlFlow,
  resolveTo: $YoJD$var$resolveToHtmlFlow,
  concrete: true
};
var $YoJD$var$nextBlankConstruct = {
  tokenize: $YoJD$var$tokenizeNextBlank,
  partial: true
};

function $YoJD$var$resolveToHtmlFlow(events) {
  var index = events.length;

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

function $YoJD$var$tokenizeHtmlFlow(effects, ok, nok) {
  var self = this;
  var kind;
  var startTag;
  var buffer;
  var index;
  var marker;
  return start;

  function start(code) {
    effects.enter('htmlFlow');
    effects.enter('htmlFlowData');
    effects.consume(code);
    return open;
  }

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

    if ($ry7a$exports(code)) {
      effects.consume(code);
      buffer = $sqCd$exports(code);
      startTag = true;
      return tagName;
    }

    return nok(code);
  }

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

    if ($ry7a$exports(code)) {
      effects.consume(code);
      kind = 4;
      return self.interrupt ? ok : continuationDeclarationInside;
    }

    return nok(code);
  }

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside;
    }

    return nok(code);
  }

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
    }

    return nok(code);
  }

  function tagCloseStart(code) {
    if ($ry7a$exports(code)) {
      effects.consume(code);
      buffer = $sqCd$exports(code);
      return tagName;
    }

    return nok(code);
  }

  function tagName(code) {
    if (code === null || code === 47 || code === 62 || $iubz$exports(code)) {
      if (code !== 47 && startTag && $FrFo$exports.indexOf(buffer.toLowerCase()) > -1) {
        kind = 1;
        return self.interrupt ? ok(code) : continuation(code);
      }

      if ($HeSN$exports.indexOf(buffer.toLowerCase()) > -1) {
        kind = 6;

        if (code === 47) {
          effects.consume(code);
          return basicSelfClosing;
        }

        return self.interrupt ? ok(code) : continuation(code);
      }

      kind = 7; // Do not support complete HTML when interrupting.

      return self.interrupt ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
    }

    if (code === 45 || $oB2J$exports(code)) {
      effects.consume(code);
      buffer += $sqCd$exports(code);
      return tagName;
    }

    return nok(code);
  }

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self.interrupt ? ok : continuation;
    }

    return nok(code);
  }

  function completeClosingTagAfter(code) {
    if ($fL2l$exports(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }

    return completeEnd(code);
  }

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd;
    }

    if (code === 58 || code === 95 || $ry7a$exports(code)) {
      effects.consume(code);
      return completeAttributeName;
    }

    if ($fL2l$exports(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }

    return completeEnd(code);
  }

  function completeAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || $oB2J$exports(code)) {
      effects.consume(code);
      return completeAttributeName;
    }

    return completeAttributeNameAfter(code);
  }

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }

    if ($fL2l$exports(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }

    return completeAttributeNameBefore(code);
  }

  function completeAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted;
    }

    if ($fL2l$exports(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }

    marker = undefined;
    return completeAttributeValueUnquoted(code);
  }

  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter;
    }

    if (code === null || $sF0i$exports(code)) {
      return nok(code);
    }

    effects.consume(code);
    return completeAttributeValueQuoted;
  }

  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || $iubz$exports(code)) {
      return completeAttributeNameAfter(code);
    }

    effects.consume(code);
    return completeAttributeValueUnquoted;
  }

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || $fL2l$exports(code)) {
      return completeAttributeNameBefore(code);
    }

    return nok(code);
  }

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter;
    }

    return nok(code);
  }

  function completeAfter(code) {
    if ($fL2l$exports(code)) {
      effects.consume(code);
      return completeAfter;
    }

    return code === null || $sF0i$exports(code) ? continuation(code) : nok(code);
  }

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

    if ($sF0i$exports(code) && (kind === 6 || kind === 7)) {
      return effects.check($YoJD$var$nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
    }

    if (code === null || $sF0i$exports(code)) {
      return continuationAtLineEnding(code);
    }

    effects.consume(code);
    return continuation;
  }

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData');
    return htmlContinueStart(code);
  }

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code);
    }

    if ($sF0i$exports(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return htmlContinueStart;
    }

    effects.enter('htmlFlowData');
    return continuation(code);
  }

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside;
    }

    return continuation(code);
  }

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag;
    }

    return continuation(code);
  }

  function continuationRawEndTag(code) {
    if (code === 62 && $FrFo$exports.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code);
      return continuationClose;
    }

    if ($ry7a$exports(code) && buffer.length < 8) {
      effects.consume(code);
      buffer += $sqCd$exports(code);
      return continuationRawEndTag;
    }

    return continuation(code);
  }

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside;
    }

    return continuation(code);
  }

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose;
    }

    return continuation(code);
  }

  function continuationClose(code) {
    if (code === null || $sF0i$exports(code)) {
      effects.exit('htmlFlowData');
      return done(code);
    }

    effects.consume(code);
    return continuationClose;
  }

  function done(code) {
    effects.exit('htmlFlow');
    return ok(code);
  }
}

function $YoJD$var$tokenizeNextBlank(effects, ok, nok) {
  return start;

  function start(code) {
    effects.exit('htmlFlowData');
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    return effects.attempt($kOzL$exports, ok, nok);
  }
}

$YoJD$exports = $YoJD$var$htmlFlow;
// ASSET: ../../../micromark/dist/tokenize/html-text.js
var $HsnV$exports = {};
var $HsnV$var$htmlText = {
  name: 'htmlText',
  tokenize: $HsnV$var$tokenizeHtmlText
};

function $HsnV$var$tokenizeHtmlText(effects, ok, nok) {
  var self = this;
  var marker;
  var buffer;
  var index;
  var returnState;
  return start;

  function start(code) {
    effects.enter('htmlText');
    effects.enter('htmlTextData');
    effects.consume(code);
    return open;
  }

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

    if ($ry7a$exports(code)) {
      effects.consume(code);
      return tagOpen;
    }

    return nok(code);
  }

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

    if ($ry7a$exports(code)) {
      effects.consume(code);
      return declaration;
    }

    return nok(code);
  }

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentStart;
    }

    return nok(code);
  }

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

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code);
    }

    return comment(code);
  }

  function comment(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 45) {
      effects.consume(code);
      return commentClose;
    }

    if ($sF0i$exports(code)) {
      returnState = comment;
      return atLineEnding(code);
    }

    effects.consume(code);
    return comment;
  }

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return end;
    }

    return comment(code);
  }

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? cdata : cdataOpen;
    }

    return nok(code);
  }

  function cdata(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 93) {
      effects.consume(code);
      return cdataClose;
    }

    if ($sF0i$exports(code)) {
      returnState = cdata;
      return atLineEnding(code);
    }

    effects.consume(code);
    return cdata;
  }

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }

    return cdata(code);
  }

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

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code);
    }

    if ($sF0i$exports(code)) {
      returnState = declaration;
      return atLineEnding(code);
    }

    effects.consume(code);
    return declaration;
  }

  function instruction(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 63) {
      effects.consume(code);
      return instructionClose;
    }

    if ($sF0i$exports(code)) {
      returnState = instruction;
      return atLineEnding(code);
    }

    effects.consume(code);
    return instruction;
  }

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code);
  }

  function tagCloseStart(code) {
    if ($ry7a$exports(code)) {
      effects.consume(code);
      return tagClose;
    }

    return nok(code);
  }

  function tagClose(code) {
    if (code === 45 || $oB2J$exports(code)) {
      effects.consume(code);
      return tagClose;
    }

    return tagCloseBetween(code);
  }

  function tagCloseBetween(code) {
    if ($sF0i$exports(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code);
    }

    if ($fL2l$exports(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }

    return end(code);
  }

  function tagOpen(code) {
    if (code === 45 || $oB2J$exports(code)) {
      effects.consume(code);
      return tagOpen;
    }

    if (code === 47 || code === 62 || $iubz$exports(code)) {
      return tagOpenBetween(code);
    }

    return nok(code);
  }

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }

    if (code === 58 || code === 95 || $ry7a$exports(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }

    if ($sF0i$exports(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code);
    }

    if ($fL2l$exports(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }

    return end(code);
  }

  function tagOpenAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || $oB2J$exports(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }

    return tagOpenAttributeNameAfter(code);
  }

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }

    if ($sF0i$exports(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code);
    }

    if ($fL2l$exports(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }

    return tagOpenBetween(code);
  }

  function tagOpenAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }

    if ($sF0i$exports(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code);
    }

    if ($fL2l$exports(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }

    effects.consume(code);
    marker = undefined;
    return tagOpenAttributeValueUnquoted;
  }

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter;
    }

    if (code === null) {
      return nok(code);
    }

    if ($sF0i$exports(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code);
    }

    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || $iubz$exports(code)) {
      return tagOpenBetween(code);
    }

    return nok(code);
  }

  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }

    if (code === 62 || $iubz$exports(code)) {
      return tagOpenBetween(code);
    }

    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  } // We can’t have blank lines in content, so no need to worry about empty
  // tokens.


  function atLineEnding(code) {
    effects.exit('htmlTextData');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $VZrc$exports(effects, afterPrefix, 'linePrefix', self.parser.constructs.disable.null.indexOf('codeIndented') > -1 ? undefined : 4);
  }

  function afterPrefix(code) {
    effects.enter('htmlTextData');
    return returnState(code);
  }

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

$HsnV$exports = $HsnV$var$htmlText;
// ASSET: ../../../micromark/dist/tokenize/label-end.js
var $d5JQ$exports = {};
var $d5JQ$var$labelEnd = {
  name: 'labelEnd',
  tokenize: $d5JQ$var$tokenizeLabelEnd,
  resolveTo: $d5JQ$var$resolveToLabelEnd,
  resolveAll: $d5JQ$var$resolveAllLabelEnd
};
var $d5JQ$var$resourceConstruct = {
  tokenize: $d5JQ$var$tokenizeResource
};
var $d5JQ$var$fullReferenceConstruct = {
  tokenize: $d5JQ$var$tokenizeFullReference
};
var $d5JQ$var$collapsedReferenceConstruct = {
  tokenize: $d5JQ$var$tokenizeCollapsedReference
};

function $d5JQ$var$resolveAllLabelEnd(events) {
  var index = -1;
  var token;

  while (++index < events.length) {
    token = events[index][1];

    if (!token._used && (token.type === 'labelImage' || token.type === 'labelLink' || token.type === 'labelEnd')) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
      token.type = 'data';
      index++;
    }
  }

  return events;
}

function $d5JQ$var$resolveToLabelEnd(events, context) {
  var index = events.length;
  var offset = 0;
  var group;
  var label;
  var text;
  var token;
  var open;
  var close;
  var media; // Find an opening.

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

  group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: $PrZ2$exports(events[open][1].start),
    end: $PrZ2$exports(events[events.length - 1][1].end)
  };
  label = {
    type: 'label',
    start: $PrZ2$exports(events[open][1].start),
    end: $PrZ2$exports(events[close][1].end)
  };
  text = {
    type: 'labelText',
    start: $PrZ2$exports(events[open + offset + 2][1].end),
    end: $PrZ2$exports(events[close - 2][1].start)
  };
  media = [['enter', group, context], ['enter', label, context]]; // Opening marker.

  media = $LYMM$exports(media, events.slice(open + 1, open + offset + 3)); // Text open.

  media = $LYMM$exports(media, [['enter', text, context]]); // Between.

  media = $LYMM$exports(media, $hAn0$exports(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)); // Text close, marker close, label close.

  media = $LYMM$exports(media, [['exit', text, context], events[close - 2], events[close - 1], ['exit', label, context]]); // Reference, resource, or so.

  media = $LYMM$exports(media, events.slice(close + 1)); // Media close.

  media = $LYMM$exports(media, [['exit', group, context]]);
  $RVQg$exports(events, open, events.length, media);
  return events;
}

function $d5JQ$var$tokenizeLabelEnd(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  var labelStart;
  var defined; // Find an opening.

  while (index--) {
    if ((self.events[index][1].type === 'labelImage' || self.events[index][1].type === 'labelLink') && !self.events[index][1]._balanced) {
      labelStart = self.events[index][1];
      break;
    }
  }

  return start;

  function start(code) {
    if (!labelStart) {
      return nok(code);
    } // It’s a balanced bracket, but contains a link.


    if (labelStart._inactive) return balanced(code);
    defined = self.parser.defined.indexOf($EPia$exports(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }))) > -1;
    effects.enter('labelEnd');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelEnd');
    return afterLabelEnd;
  }

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt($d5JQ$var$resourceConstruct, ok, defined ? ok : balanced)(code);
    } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?


    if (code === 91) {
      return effects.attempt($d5JQ$var$fullReferenceConstruct, ok, defined ? effects.attempt($d5JQ$var$collapsedReferenceConstruct, ok, balanced) : balanced)(code);
    } // Shortcut reference: `[asd]`?


    return defined ? ok(code) : balanced(code);
  }

  function balanced(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}

function $d5JQ$var$tokenizeResource(effects, ok, nok) {
  return start;

  function start(code) {
    effects.enter('resource');
    effects.enter('resourceMarker');
    effects.consume(code);
    effects.exit('resourceMarker');
    return $svPo$exports(effects, open);
  }

  function open(code) {
    if (code === 41) {
      return end(code);
    }

    return $ARD2$exports(effects, destinationAfter, nok, 'resourceDestination', 'resourceDestinationLiteral', 'resourceDestinationLiteralMarker', 'resourceDestinationRaw', 'resourceDestinationString', 3)(code);
  }

  function destinationAfter(code) {
    return $iubz$exports(code) ? $svPo$exports(effects, between)(code) : end(code);
  }

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return $KLtZ$exports(effects, $svPo$exports(effects, end), nok, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(code);
    }

    return end(code);
  }

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

function $d5JQ$var$tokenizeFullReference(effects, ok, nok) {
  var self = this;
  return start;

  function start(code) {
    return $VUi0$exports.call(self, effects, afterLabel, nok, 'reference', 'referenceMarker', 'referenceString')(code);
  }

  function afterLabel(code) {
    return self.parser.defined.indexOf($EPia$exports(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) < 0 ? nok(code) : ok(code);
  }
}

function $d5JQ$var$tokenizeCollapsedReference(effects, ok, nok) {
  return start;

  function start(code) {
    effects.enter('reference');
    effects.enter('referenceMarker');
    effects.consume(code);
    effects.exit('referenceMarker');
    return open;
  }

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

$d5JQ$exports = $d5JQ$var$labelEnd;
// ASSET: ../../../micromark/dist/tokenize/label-start-image.js
var $WPPV$exports = {};
var $WPPV$var$labelStartImage = {
  name: 'labelStartImage',
  tokenize: $WPPV$var$tokenizeLabelStartImage,
  resolveAll: $d5JQ$exports.resolveAll
};

function $WPPV$var$tokenizeLabelStartImage(effects, ok, nok) {
  var self = this;
  return start;

  function start(code) {
    effects.enter('labelImage');
    effects.enter('labelImageMarker');
    effects.consume(code);
    effects.exit('labelImageMarker');
    return open;
  }

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

  function after(code) {
    /* c8 ignore next */
    return code === 94 &&
    /* c8 ignore next */
    '_hiddenFootnoteSupport' in self.parser.constructs ?
    /* c8 ignore next */
    nok(code) : ok(code);
  }
}

$WPPV$exports = $WPPV$var$labelStartImage;
// ASSET: ../../../micromark/dist/tokenize/label-start-link.js
var $R2A4$exports = {};
var $R2A4$var$labelStartLink = {
  name: 'labelStartLink',
  tokenize: $R2A4$var$tokenizeLabelStartLink,
  resolveAll: $d5JQ$exports.resolveAll
};

function $R2A4$var$tokenizeLabelStartLink(effects, ok, nok) {
  var self = this;
  return start;

  function start(code) {
    effects.enter('labelLink');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelLink');
    return after;
  }

  function after(code) {
    /* c8 ignore next */
    return code === 94 &&
    /* c8 ignore next */
    '_hiddenFootnoteSupport' in self.parser.constructs ?
    /* c8 ignore next */
    nok(code) : ok(code);
  }
}

$R2A4$exports = $R2A4$var$labelStartLink;
// ASSET: ../../../micromark/dist/tokenize/line-ending.js
var $A79m$exports = {};
var $A79m$var$lineEnding = {
  name: 'lineEnding',
  tokenize: $A79m$var$tokenizeLineEnding
};

function $A79m$var$tokenizeLineEnding(effects, ok) {
  return start;

  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return $VZrc$exports(effects, ok, 'linePrefix');
  }
}

$A79m$exports = $A79m$var$lineEnding;
// ASSET: ../../../micromark/dist/tokenize/thematic-break.js
var $vKMY$exports = {};
var $vKMY$var$thematicBreak = {
  name: 'thematicBreak',
  tokenize: $vKMY$var$tokenizeThematicBreak
};

function $vKMY$var$tokenizeThematicBreak(effects, ok, nok) {
  var size = 0;
  var marker;
  return start;

  function start(code) {
    effects.enter('thematicBreak');
    marker = code;
    return atBreak(code);
  }

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence');
      return sequence(code);
    }

    if ($fL2l$exports(code)) {
      return $VZrc$exports(effects, atBreak, 'whitespace')(code);
    }

    if (size < 3 || code !== null && !$sF0i$exports(code)) {
      return nok(code);
    }

    effects.exit('thematicBreak');
    return ok(code);
  }

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

$vKMY$exports = $vKMY$var$thematicBreak;
// ASSET: ../../../micromark/dist/tokenize/list.js
var $pfav$exports = {};
var $pfav$var$list = {
  name: 'list',
  tokenize: $pfav$var$tokenizeListStart,
  continuation: {
    tokenize: $pfav$var$tokenizeListContinuation
  },
  exit: $pfav$var$tokenizeListEnd
};
var $pfav$var$listItemPrefixWhitespaceConstruct = {
  tokenize: $pfav$var$tokenizeListItemPrefixWhitespace,
  partial: true
};
var $pfav$var$indentConstruct = {
  tokenize: $pfav$var$tokenizeIndent,
  partial: true
};

function $pfav$var$tokenizeListStart(effects, ok, nok) {
  var self = this;
  var initialSize = $zmts$exports(self.events, 'linePrefix');
  var size = 0;
  return start;

  function start(code) {
    var kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? 'listUnordered' : 'listOrdered');

    if (kind === 'listUnordered' ? !self.containerState.marker || code === self.containerState.marker : $rH8i$exports(code)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }

      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix');
        return code === 42 || code === 45 ? effects.check($vKMY$exports, nok, atMarker)(code) : atMarker(code);
      }

      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix');
        effects.enter('listItemValue');
        return inside(code);
      }
    }

    return nok(code);
  }

  function inside(code) {
    if ($rH8i$exports(code) && ++size < 10) {
      effects.consume(code);
      return inside;
    }

    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
      effects.exit('listItemValue');
      return atMarker(code);
    }

    return nok(code);
  }

  function atMarker(code) {
    effects.enter('listItemMarker');
    effects.consume(code);
    effects.exit('listItemMarker');
    self.containerState.marker = self.containerState.marker || code;
    return effects.check($kOzL$exports, // Can’t be empty when interrupting.
    self.interrupt ? nok : onBlank, effects.attempt($pfav$var$listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }

  function otherPrefix(code) {
    if ($fL2l$exports(code)) {
      effects.enter('listItemPrefixWhitespace');
      effects.consume(code);
      effects.exit('listItemPrefixWhitespace');
      return endOfPrefix;
    }

    return nok(code);
  }

  function endOfPrefix(code) {
    self.containerState.size = initialSize + $nEZt$exports(self.sliceStream(effects.exit('listItemPrefix')));
    return ok(code);
  }
}

function $pfav$var$tokenizeListContinuation(effects, ok, nok) {
  var self = this;
  self.containerState._closeFlow = undefined;
  return effects.check($kOzL$exports, onBlank, notBlank);

  function onBlank(code) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return ok(code);
  }

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !$fL2l$exports(code)) {
      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code);
    }

    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined;
    return effects.attempt($pfav$var$indentConstruct, ok, notInCurrentItem)(code);
  }

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true; // As we’re closing flow, we’re no longer interrupting.

    self.interrupt = undefined;
    return $VZrc$exports(effects, effects.attempt($pfav$var$list, ok, nok), 'linePrefix', self.parser.constructs.disable.null.indexOf('codeIndented') > -1 ? undefined : 4)(code);
  }
}

function $pfav$var$tokenizeIndent(effects, ok, nok) {
  var self = this;
  return $VZrc$exports(effects, afterPrefix, 'listItemIndent', self.containerState.size + 1);

  function afterPrefix(code) {
    return $zmts$exports(self.events, 'listItemIndent') === self.containerState.size ? ok(code) : nok(code);
  }
}

function $pfav$var$tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}

function $pfav$var$tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this;
  return $VZrc$exports(effects, afterPrefix, 'listItemPrefixWhitespace', self.parser.constructs.disable.null.indexOf('codeIndented') > -1 ? undefined : 4 + 1);

  function afterPrefix(code) {
    return $fL2l$exports(code) || !$zmts$exports(self.events, 'listItemPrefixWhitespace') ? nok(code) : ok(code);
  }
}

$pfav$exports = $pfav$var$list;
// ASSET: ../../../micromark/dist/tokenize/setext-underline.js
var $lH90$exports = {};
var $lH90$var$setextUnderline = {
  name: 'setextUnderline',
  tokenize: $lH90$var$tokenizeSetextUnderline,
  resolveTo: $lH90$var$resolveToSetextUnderline
};

function $lH90$var$resolveToSetextUnderline(events, context) {
  var index = events.length;
  var content;
  var text;
  var definition;
  var heading; // Find the opening of the content.
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

  heading = {
    type: 'setextHeading',
    start: $PrZ2$exports(events[text][1].start),
    end: $PrZ2$exports(events[events.length - 1][1].end)
  }; // Change the paragraph to setext heading text.

  events[text][1].type = 'setextHeadingText'; // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.

  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = $PrZ2$exports(events[definition][1].end);
  } else {
    events[content][1] = heading;
  } // Add the heading exit at the end.


  events.push(['exit', heading, context]);
  return events;
}

function $lH90$var$tokenizeSetextUnderline(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  var marker;
  var paragraph; // Find an opening.

  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (self.events[index][1].type !== 'lineEnding' && self.events[index][1].type !== 'linePrefix' && self.events[index][1].type !== 'content') {
      paragraph = self.events[index][1].type === 'paragraph';
      break;
    }
  }

  return start;

  function start(code) {
    if (!self.lazy && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine');
      effects.enter('setextHeadingLineSequence');
      marker = code;
      return closingSequence(code);
    }

    return nok(code);
  }

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence;
    }

    effects.exit('setextHeadingLineSequence');
    return $VZrc$exports(effects, closingSequenceEnd, 'lineSuffix')(code);
  }

  function closingSequenceEnd(code) {
    if (code === null || $sF0i$exports(code)) {
      effects.exit('setextHeadingLine');
      return ok(code);
    }

    return nok(code);
  }
}

$lH90$exports = $lH90$var$setextUnderline;
// ASSET: ../../../micromark/dist/constructs.js
var $twGo$exports = {};
Object.defineProperty($twGo$exports, '__esModule', {
  value: true
});
var $twGo$var$document = {
  42: $pfav$exports,
  // Asterisk
  43: $pfav$exports,
  // Plus sign
  45: $pfav$exports,
  // Dash
  48: $pfav$exports,
  // 0
  49: $pfav$exports,
  // 1
  50: $pfav$exports,
  // 2
  51: $pfav$exports,
  // 3
  52: $pfav$exports,
  // 4
  53: $pfav$exports,
  // 5
  54: $pfav$exports,
  // 6
  55: $pfav$exports,
  // 7
  56: $pfav$exports,
  // 8
  57: $pfav$exports,
  // 9
  62: $nBAC$exports // Greater than

};
var $twGo$var$contentInitial = {
  91: $cQDx$exports // Left square bracket

};
var $twGo$var$flowInitial = {
  '-2': $yiMF$exports,
  // Horizontal tab
  '-1': $yiMF$exports,
  // Virtual space
  32: $yiMF$exports // Space

};
var $twGo$var$flow = {
  35: $jTAn$exports,
  // Number sign
  42: $vKMY$exports,
  // Asterisk
  45: [$lH90$exports, $vKMY$exports],
  // Dash
  60: $YoJD$exports,
  // Less than
  61: $lH90$exports,
  // Equals to
  95: $vKMY$exports,
  // Underscore
  96: $jdpT$exports,
  // Grave accent
  126: $jdpT$exports // Tilde

};
var $twGo$var$string = {
  38: $qJia$exports,
  // Ampersand
  92: $T3Yn$exports // Backslash

};
var $twGo$var$text = {
  '-5': $A79m$exports,
  // Carriage return
  '-4': $A79m$exports,
  // Line feed
  '-3': $A79m$exports,
  // Carriage return + line feed
  33: $WPPV$exports,
  // Exclamation mark
  38: $qJia$exports,
  // Ampersand
  42: $d19H$exports,
  // Asterisk
  60: [$uzwq$exports, $HsnV$exports],
  // Less than
  91: $R2A4$exports,
  // Left square bracket
  92: [$fZsG$exports, $T3Yn$exports],
  // Backslash
  93: $d5JQ$exports,
  // Right square bracket
  95: $d19H$exports,
  // Underscore
  96: $Ggc3$exports // Grave accent

};
var $twGo$var$insideSpan = {
  null: [$d19H$exports, $sXzC$export$resolver]
};
var $twGo$var$disable = {
  null: []
};
var $twGo$export$contentInitial = $twGo$var$contentInitial;
$twGo$exports.contentInitial = $twGo$export$contentInitial;
var $twGo$export$disable = $twGo$var$disable;
$twGo$exports.disable = $twGo$export$disable;
var $twGo$export$document = $twGo$var$document;
$twGo$exports.document = $twGo$export$document;
var $twGo$export$flow = $twGo$var$flow;
$twGo$exports.flow = $twGo$export$flow;
var $twGo$export$flowInitial = $twGo$var$flowInitial;
$twGo$exports.flowInitial = $twGo$export$flowInitial;
var $twGo$export$insideSpan = $twGo$var$insideSpan;
$twGo$exports.insideSpan = $twGo$export$insideSpan;
var $twGo$export$string = $twGo$var$string;
$twGo$exports.string = $twGo$export$string;
var $twGo$export$text = $twGo$var$text;
$twGo$exports.text = $twGo$export$text;
// ASSET: ../../../micromark/dist/parse.js
var $kvTQ$exports = {};

function $kvTQ$var$parse(options) {
  var settings = options || {};
  var parser = {
    defined: [],
    constructs: $WfpN$exports([$twGo$exports].concat($wvwD$exports(settings.extensions))),
    content: create($igBv$exports),
    document: create($ofuD$exports),
    flow: create($v9zQ$exports),
    string: create($sXzC$export$string),
    text: create($sXzC$export$text)
  };
  return parser;

  function create(initializer) {
    return creator;

    function creator(from) {
      return $zKpC$exports(parser, initializer, from);
    }
  }
}

$kvTQ$exports = $kvTQ$var$parse;
// ASSET: ../../../micromark/dist/preprocess.js
var $Q7LT$exports = {};
var $Q7LT$var$search = /[\0\t\n\r]/g;

function $Q7LT$var$preprocess() {
  var start = true;
  var column = 1;
  var buffer = '';
  var atCarriageReturn;
  return preprocessor;

  function preprocessor(value, encoding, end) {
    var chunks = [];
    var match;
    var next;
    var startPosition;
    var endPosition;
    var code;
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
      $Q7LT$var$search.lastIndex = startPosition;
      match = $Q7LT$var$search.exec(value);
      endPosition = match ? match.index : value.length;
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

        if (code === 0) {
          chunks.push(65533);
          column++;
        } else if (code === 9) {
          next = Math.ceil(column / 4) * 4;
          chunks.push(-2);

          while (column++ < next) chunks.push(-1);
        } else if (code === 10) {
          chunks.push(-4);
          column = 1;
        } // Must be carriage return.
        else {
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

$Q7LT$exports = $Q7LT$var$preprocess;
// ASSET: ../../../micromark/dist/postprocess.js
var $ESKl$exports = {};

function $ESKl$var$postprocess(events) {
  while (!$qeI2$exports(events)) {// Empty
  }

  return events;
}

$ESKl$exports = $ESKl$var$postprocess;
// ASSET: ../../../unist-util-stringify-position/index.js
var $EYTY$exports = {};
var $EYTY$var$own = {}.hasOwnProperty;
$EYTY$exports = $EYTY$var$stringify;

function $EYTY$var$stringify(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return '';
  } // Node.


  if ($EYTY$var$own.call(value, 'position') || $EYTY$var$own.call(value, 'type')) {
    return $EYTY$var$position(value.position);
  } // Position.


  if ($EYTY$var$own.call(value, 'start') || $EYTY$var$own.call(value, 'end')) {
    return $EYTY$var$position(value);
  } // Point.


  if ($EYTY$var$own.call(value, 'line') || $EYTY$var$own.call(value, 'column')) {
    return $EYTY$var$point(value);
  } // ?


  return '';
}

function $EYTY$var$point(point) {
  if (!point || typeof point !== 'object') {
    point = {};
  }

  return $EYTY$var$index(point.line) + ':' + $EYTY$var$index(point.column);
}

function $EYTY$var$position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {};
  }

  return $EYTY$var$point(pos.start) + '-' + $EYTY$var$point(pos.end);
}

function $EYTY$var$index(value) {
  return value && typeof value === 'number' ? value : 1;
}

// ASSET: ../../../mdast-util-from-markdown/dist/index.js
var $NBWA$exports = {};
$NBWA$exports = $NBWA$var$fromMarkdown; // These three are compiled away in the `dist/`

function $NBWA$var$fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding;
    encoding = undefined;
  }

  return $NBWA$var$compiler(options)($ESKl$exports($kvTQ$exports(options).document().write($Q7LT$exports()(value, encoding, true))));
} // Note this compiler only understand complete buffering, not streaming.


function $NBWA$var$compiler(options) {
  var settings = options || {};
  var config = $NBWA$var$configure({
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
  }, settings.mdastExtensions || []);
  var data = {};
  return compile;

  function compile(events) {
    var stack = [{
      type: 'root',
      children: []
    }];
    var tokenStack = [];
    var listStack = [];
    var index = -1;
    var handler;
    var listStart;
    var context = {
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

    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (events[index][1].type === 'listOrdered' || events[index][1].type === 'listUnordered') {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          listStart = listStack.pop(index);
          index = prepareList(events, listStart, index);
        }
      }
    }

    index = -1;

    while (++index < events.length) {
      handler = config[events[index][0]];

      if ($vhRA$exports.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call($SwwW$exports({
          sliceSerialize: events[index][2].sliceSerialize
        }, context), events[index][1]);
      }
    }

    if (tokenStack.length) {
      throw new Error('Cannot close document, a token (`' + tokenStack[tokenStack.length - 1].type + '`, ' + $EYTY$exports({
        start: tokenStack[tokenStack.length - 1].start,
        end: tokenStack[tokenStack.length - 1].end
      }) + ') is still open');
    } // Figure out `root` position.


    stack[0].position = {
      start: point(events.length ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point(events.length ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    return stack[0];
  }

  function prepareList(events, start, length) {
    var index = start - 1;
    var containerBalance = -1;
    var listSpread = false;
    var listItem;
    var tailIndex;
    var lineIndex;
    var tailEvent;
    var event;
    var firstBlankLineIndex;
    var atMarker;

    while (++index <= length) {
      event = events[index];

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
          tailIndex = index;
          lineIndex = undefined;

          while (tailIndex--) {
            tailEvent = events[tailIndex];

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
            listItem._spread = true;
          } // Fix position.


          listItem.end = point(lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        } // Create a new list item.


        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            _spread: false,
            start: point(event[1].start)
          };
          events.splice(index, 0, ['enter', listItem, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = undefined;
          atMarker = true;
        }
      }
    }

    events[start][1]._spread = listSpread;
    return length;
  }

  function setData(key, value) {
    data[key] = value;
  }

  function getData(key) {
    return data[key];
  }

  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }

  function opener(create, and) {
    return open;

    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }

  function buffer() {
    this.stack.push({
      type: 'fragment',
      children: []
    });
  }

  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node);
    this.stack.push(node);
    this.tokenStack.push(token);
    node.position = {
      start: point(token.start)
    };
    return node;
  }

  function closer(and) {
    return close;

    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }

  function exit(token) {
    var node = this.stack.pop();
    var open = this.tokenStack.pop();

    if (!open) {
      throw new Error('Cannot close `' + token.type + '` (' + $EYTY$exports({
        start: token.start,
        end: token.end
      }) + '): it’s not open');
    } else if (open.type !== token.type) {
      throw new Error('Cannot close `' + token.type + '` (' + $EYTY$exports({
        start: token.start,
        end: token.end
      }) + '): a different token (`' + open.type + '`, ' + $EYTY$exports({
        start: open.start,
        end: open.end
      }) + ') is open');
    }

    node.position.end = point(token.end);
    return node;
  }

  function resume() {
    return $DRco$exports(this.stack.pop());
  } //
  // Handlers.
  //


  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(token), 10);
      setData('expectingFirstListItemValue');
    }
  }

  function onexitcodefencedfenceinfo() {
    var data = this.resume();
    this.stack[this.stack.length - 1].lang = data;
  }

  function onexitcodefencedfencemeta() {
    var data = this.resume();
    this.stack[this.stack.length - 1].meta = data;
  }

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return;
    this.buffer();
    setData('flowCodeInside', true);
  }

  function onexitcodefenced() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    setData('flowCodeInside');
  }

  function onexitcodeindented() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = $EPia$exports(this.sliceSerialize(token)).toLowerCase();
  }

  function onexitdefinitiontitlestring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }

  function onexitdefinitiondestinationstring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }

  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).length;
    }
  }

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }

  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }

  function onenterdata(token) {
    var siblings = this.stack[this.stack.length - 1].children;
    var tail = siblings[siblings.length - 1];

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      this.stack[this.stack.length - 1].children.push(tail);
    }

    this.stack.push(tail);
  }

  function onexitdata(token) {
    var tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }

  function onexitlineending(token) {
    var context = this.stack[this.stack.length - 1]; // If we’re at a hard break, include the line ending in there.

    if (getData('atHardBreak')) {
      context.children[context.children.length - 1].position.end = point(token.end);
      setData('atHardBreak');
      return;
    }

    if (!getData('setextHeadingSlurpLineEnding') && config.canContainEols.indexOf(context.type) > -1) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }

  function onexithardbreak() {
    setData('atHardBreak', true);
  }

  function onexithtmlflow() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexithtmltext() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexitcodetext() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexitlink() {
    var context = this.stack[this.stack.length - 1]; // To do: clean.

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

  function onexitimage() {
    var context = this.stack[this.stack.length - 1]; // To do: clean.

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

  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = $EPia$exports(this.sliceSerialize(token)).toLowerCase();
  }

  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1];
    var value = this.resume();
    this.stack[this.stack.length - 1].label = value; // Assume a reference.

    setData('inReference', true);

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children;
    } else {
      this.stack[this.stack.length - 1].alt = value;
    }
  }

  function onexitresourcedestinationstring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }

  function onexitresourcetitlestring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }

  function onexitresource() {
    setData('inReference');
  }

  function onenterreference() {
    setData('referenceType', 'collapsed');
  }

  function onexitreferencestring(token) {
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = $EPia$exports(this.sliceSerialize(token)).toLowerCase();
    setData('referenceType', 'full');
  }

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }

  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token);
    var type = getData('characterReferenceType');
    var value;
    var tail;

    if (type) {
      value = $gHMX$exports(data, type === 'characterReferenceMarkerNumeric' ? 10 : 16);
      setData('characterReferenceType');
    } else {
      value = $S7VQ$exports(data);
    }

    tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point(token.end);
  }

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
  }

  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = 'mailto:' + this.sliceSerialize(token);
  } //
  // Creaters.
  //


  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    };
  }

  function codeFlow() {
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    };
  }

  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    };
  }

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    };
  }

  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    };
  }

  function heading() {
    return {
      type: 'heading',
      depth: undefined,
      children: []
    };
  }

  function hardBreak() {
    return {
      type: 'break'
    };
  }

  function html() {
    return {
      type: 'html',
      value: ''
    };
  }

  function image() {
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    };
  }

  function link() {
    return {
      type: 'link',
      title: null,
      url: '',
      children: []
    };
  }

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    };
  }

  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    };
  }

  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    };
  }

  function strong() {
    return {
      type: 'strong',
      children: []
    };
  }

  function text() {
    return {
      type: 'text',
      value: ''
    };
  }

  function thematicBreak() {
    return {
      type: 'thematicBreak'
    };
  }
}

function $NBWA$var$configure(config, extensions) {
  var index = -1;

  while (++index < extensions.length) {
    $NBWA$var$extension(config, extensions[index]);
  }

  return config;
}

function $NBWA$var$extension(config, extension) {
  var key;
  var left;

  for (key in extension) {
    left = $vhRA$exports.call(config, key) ? config[key] : config[key] = {};

    if (key === 'canContainEols') {
      config[key] = [].concat(left, extension[key]);
    } else {
      Object.assign(left, extension[key]);
    }
  }
}

$dzvc$exports = $NBWA$exports;
// ASSET: ../../../remark-parse/index.js
var $Pdu0$exports = {};
$Pdu0$exports = $Pdu0$var$parse;

function $Pdu0$var$parse(options) {
  var self = this;
  this.Parser = parse;

  function parse(doc) {
    return $dzvc$exports(doc, Object.assign({}, self.data('settings'), options, {
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self.data('micromarkExtensions') || [],
      mdastExtensions: self.data('fromMarkdownExtensions') || []
    }));
  }
}

// ASSET: ../../../micromark-extension-gfm/index.js
var $BN64$exports = {};
// ASSET: ../../../micromark-extension-gfm-autolink-literal/index.js
var $BU19$exports = {};
// ASSET: ../../../micromark-extension-gfm-autolink-literal/syntax.js
var $kmcG$exports = {};
var $kmcG$var$www = {
  tokenize: $kmcG$var$tokenizeWww
};
var $kmcG$var$http = {
  tokenize: $kmcG$var$tokenizeHttp
};
var $kmcG$var$domain = {
  tokenize: $kmcG$var$tokenizeDomain
};
var $kmcG$var$path = {
  tokenize: $kmcG$var$tokenizePath
};
var $kmcG$var$punctuation = {
  tokenize: $kmcG$var$tokenizePunctuation
};
var $kmcG$var$domainPunctuation = {
  tokenize: $kmcG$var$tokenizeDomainPunctuation
};
var $kmcG$var$paren = {
  tokenize: $kmcG$var$tokenizeParen
};
var $kmcG$var$namedCharacterReference = {
  tokenize: $kmcG$var$tokenizeNamedCharacterReference
};
var $kmcG$var$wwwAutolink = {
  tokenize: $kmcG$var$tokenizeWwwAutolink,
  previous: $kmcG$var$previous
};
var $kmcG$var$httpAutolink = {
  tokenize: $kmcG$var$tokenizeHttpAutolink,
  previous: $kmcG$var$previous
};
var $kmcG$var$emailAutolink = {
  tokenize: $kmcG$var$tokenizeEmailAutolink,
  previous: $kmcG$var$previous
};
var $kmcG$var$text = {}; // Export hooked constructs.

var $kmcG$export$text = $kmcG$var$text;
$kmcG$exports.text = $kmcG$export$text; // `0`

var $kmcG$var$code = 48; // While the code is smaller than `{`.

while ($kmcG$var$code < 123) {
  $kmcG$var$text[$kmcG$var$code] = $kmcG$var$emailAutolink;
  $kmcG$var$code++; // Jump from `:` -> `A`

  if ($kmcG$var$code === 58) $kmcG$var$code = 65; // Jump from `[` -> `a`
  else if ($kmcG$var$code === 91) $kmcG$var$code = 97;
} // `+`


$kmcG$var$text[43] = $kmcG$var$emailAutolink; // `-`

$kmcG$var$text[45] = $kmcG$var$emailAutolink; // `.`

$kmcG$var$text[46] = $kmcG$var$emailAutolink; // `_`

$kmcG$var$text[95] = $kmcG$var$emailAutolink; // `h`.

$kmcG$var$text[72] = [$kmcG$var$emailAutolink, $kmcG$var$httpAutolink];
$kmcG$var$text[104] = [$kmcG$var$emailAutolink, $kmcG$var$httpAutolink]; // `w`.

$kmcG$var$text[87] = [$kmcG$var$emailAutolink, $kmcG$var$wwwAutolink];
$kmcG$var$text[119] = [$kmcG$var$emailAutolink, $kmcG$var$wwwAutolink];

function $kmcG$var$tokenizeEmailAutolink(effects, ok, nok) {
  var self = this;
  var hasDot;
  return start;

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (!$kmcG$var$gfmAtext(code) || !$kmcG$var$previous(self.previous)) {
      return nok(code);
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkEmail');
    return atext(code);
  }

  function atext(code) {
    if ($kmcG$var$gfmAtext(code)) {
      effects.consume(code);
      return atext;
    } // `@`


    if (code === 64) {
      effects.consume(code);
      return label;
    }

    return nok(code);
  }

  function label(code) {
    // `.`
    if (code === 46) {
      return effects.check($kmcG$var$punctuation, done, dotContinuation)(code);
    }

    if ( // `-`
    code === 45 || // `_`
    code === 95) {
      return effects.check($kmcG$var$punctuation, nok, dashOrUnderscoreContinuation)(code);
    }

    if ($oB2J$exports(code)) {
      effects.consume(code);
      return label;
    }

    return done(code);
  }

  function dotContinuation(code) {
    effects.consume(code);
    hasDot = true;
    return label;
  }

  function dashOrUnderscoreContinuation(code) {
    effects.consume(code);
    return afterDashOrUnderscore;
  }

  function afterDashOrUnderscore(code) {
    // `.`
    if (code === 46) {
      return effects.check($kmcG$var$punctuation, nok, dotContinuation)(code);
    }

    return label(code);
  }

  function done(code) {
    if (hasDot) {
      effects.exit('literalAutolinkEmail');
      effects.exit('literalAutolink');
      return ok(code);
    }

    return nok(code);
  }
}

function $kmcG$var$tokenizeWwwAutolink(effects, ok, nok) {
  var self = this;
  return start;

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (code !== 87 && code - 32 !== 87 || !$kmcG$var$previous(self.previous)) {
      return nok(code);
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkWww');
    return effects.check($kmcG$var$www, effects.attempt($kmcG$var$domain, effects.attempt($kmcG$var$path, done), nok), nok)(code);
  }

  function done(code) {
    effects.exit('literalAutolinkWww');
    effects.exit('literalAutolink');
    return ok(code);
  }
}

function $kmcG$var$tokenizeHttpAutolink(effects, ok, nok) {
  var self = this;
  return start;

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (code !== 72 && code - 32 !== 72 || !$kmcG$var$previous(self.previous)) {
      return nok(code);
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkHttp');
    return effects.check($kmcG$var$http, effects.attempt($kmcG$var$domain, effects.attempt($kmcG$var$path, done), nok), nok)(code);
  }

  function done(code) {
    effects.exit('literalAutolinkHttp');
    effects.exit('literalAutolink');
    return ok(code);
  }
}

function $kmcG$var$tokenizeHttp(effects, ok, nok) {
  return start;

  function start(code) {
    // Assume a `h`.
    effects.consume(code);
    return t1;
  }

  function t1(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code);
      return t2;
    }

    return nok(code);
  }

  function t2(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code);
      return p;
    }

    return nok(code);
  }

  function p(code) {
    // `p`
    if (code === 80 || code - 32 === 80) {
      effects.consume(code);
      return s;
    }

    return nok(code);
  }

  function s(code) {
    // `s`
    if (code === 83 || code - 32 === 83) {
      effects.consume(code);
      return colon;
    }

    return colon(code);
  }

  function colon(code) {
    // `:`
    if (code === 58) {
      effects.consume(code);
      return slash1;
    }

    return nok(code);
  }

  function slash1(code) {
    // `/`
    if (code === 47) {
      effects.consume(code);
      return slash2;
    }

    return nok(code);
  }

  function slash2(code) {
    // `/`
    if (code === 47) {
      effects.consume(code);
      return after;
    }

    return nok(code);
  }

  function after(code) {
    return $SPmF$exports(code) || $UvgB$exports(code) || $FyH5$exports(code) ? nok(code) : ok(code);
  }
}

function $kmcG$var$tokenizeWww(effects, ok, nok) {
  return start;

  function start(code) {
    // Assume a `w`.
    effects.consume(code);
    return w2;
  }

  function w2(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code);
      return w3;
    }

    return nok(code);
  }

  function w3(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code);
      return dot;
    }

    return nok(code);
  }

  function dot(code) {
    // `.`
    if (code === 46) {
      effects.consume(code);
      return after;
    }

    return nok(code);
  }

  function after(code) {
    return code === null || $sF0i$exports(code) ? nok(code) : ok(code);
  }
}

function $kmcG$var$tokenizeDomain(effects, ok, nok) {
  var opened;
  var hasUnderscoreInLastSegment;
  var hasUnderscoreInLastLastSegment;
  return domain;

  function domain(code) {
    if ( // `/`
    code === 47 || $SPmF$exports(code) || $UvgB$exports(code)) {
      return done(code);
    } // `&`


    if (code === 38) {
      return effects.check($kmcG$var$namedCharacterReference, done, punctuationContinuation)(code);
    }

    if ( // `.`
    code === 46 || $kmcG$var$trailingPunctuation(code)) {
      return effects.check($kmcG$var$domainPunctuation, done, punctuationContinuation)(code);
    }

    open();
    effects.consume(code);
    return domain;
  }

  function punctuationContinuation(code) {
    // `.`
    if (code === 46) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
      hasUnderscoreInLastSegment = undefined;
      open();
      effects.consume(code);
      return domain;
    } // `_`


    if (code === 95) hasUnderscoreInLastSegment = true;
    open();
    effects.consume(code);
    return domain;
  }

  function open() {
    if (!opened) {
      effects.enter('literalAutolinkDomain');
      opened = true;
    }
  }

  function done(code) {
    if (opened && !hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      effects.exit('literalAutolinkDomain');
      return ok(code);
    }

    return nok(code);
  }
}

function $kmcG$var$tokenizePath(effects, ok) {
  var balance = 0;
  return start;

  function start(code) {
    // `/`
    return code === 47 ? atPathStart(code) : ok(code);
  }

  function atPathStart(code) {
    effects.enter('literalAutolinkPath');
    return inPath(code);
  }

  function inPath(code) {
    // `&`
    if (code === 38) {
      return effects.check($kmcG$var$namedCharacterReference, atPathEnd, continuedPunctuation)(code);
    } // `(`


    if (code === 40) {
      balance++;
    } // `)`


    if (code === 41) {
      return effects.check($kmcG$var$paren, parenAtPathEnd, continuedPunctuation)(code);
    }

    if ($kmcG$var$pathEnd(code)) {
      return atPathEnd(code);
    }

    if ($kmcG$var$trailingPunctuation(code)) {
      return effects.check($kmcG$var$punctuation, atPathEnd, continuedPunctuation)(code);
    }

    effects.consume(code);
    return inPath;
  }

  function continuedPunctuation(code) {
    effects.consume(code);
    return inPath;
  }

  function parenAtPathEnd(code) {
    balance--;
    return balance < 0 ? atPathEnd(code) : continuedPunctuation(code);
  }

  function atPathEnd(code) {
    effects.exit('literalAutolinkPath');
    return ok(code);
  }
}

function $kmcG$var$tokenizeNamedCharacterReference(effects, ok, nok) {
  return start;

  function start(code) {
    // Assume an ampersand.
    effects.enter('literalAutolinkCharacterReferenceNamed');
    effects.consume(code);
    return inside;
  }

  function inside(code) {
    if ($ry7a$exports(code)) {
      effects.consume(code);
      return inside;
    } // `;`


    if (code === 59) {
      effects.consume(code);
      return after;
    }

    return nok(code);
  }

  function after(code) {
    // If the named character reference is followed by the end of the path, it’s
    // not continued punctuation.
    effects.exit('literalAutolinkCharacterReferenceNamed');
    return $kmcG$var$pathEnd(code) ? ok(code) : nok(code);
  }
}

function $kmcG$var$tokenizeParen(effects, ok, nok) {
  return start;

  function start(code) {
    // Assume a right paren.
    effects.enter('literalAutolinkParen');
    effects.consume(code);
    return after;
  }

  function after(code) {
    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    effects.exit('literalAutolinkParen');
    return $kmcG$var$pathEnd(code) || // `)`
    code === 41 ? ok(code) : nok(code);
  }
}

function $kmcG$var$tokenizePunctuation(effects, ok, nok) {
  return start;

  function start(code) {
    effects.enter('literalAutolinkPunctuation'); // Always a valid trailing punctuation marker.

    effects.consume(code);
    return after;
  }

  function after(code) {
    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    effects.exit('literalAutolinkPunctuation');
    return $kmcG$var$pathEnd(code) ? ok(code) : nok(code);
  }
}

function $kmcG$var$tokenizeDomainPunctuation(effects, ok, nok) {
  return start;

  function start(code) {
    effects.enter('literalAutolinkPunctuation'); // Always a valid trailing punctuation marker.

    effects.consume(code);
    return after;
  }

  function after(code) {
    // Check the next.
    if ($kmcG$var$trailingPunctuation(code)) {
      effects.consume(code);
      return after;
    } // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.


    effects.exit('literalAutolinkPunctuation');
    return $kmcG$var$pathEnd(code) ? ok(code) : nok(code);
  }
}

function $kmcG$var$trailingPunctuation(code) {
  return (// `!`
    code === 33 || // `"`
    code === 34 || // `'`
    code === 39 || // `)`
    code === 41 || // `*`
    code === 42 || // `,`
    code === 44 || // `.`
    code === 46 || // `:`
    code === 58 || // `;`
    code === 59 || // `<`
    code === 60 || // `?`
    code === 63 || // `_`.
    code === 95 || // `~`
    code === 126
  );
}

function $kmcG$var$pathEnd(code) {
  return (// EOF.
    code === null || // CR, LF, CRLF, HT, VS.
    code < 0 || // Space.
    code === 32 || // `<`
    code === 60
  );
}

function $kmcG$var$gfmAtext(code) {
  return (// `+`
    code === 43 || // `-`
    code === 45 || // `.`
    code === 46 || // `_`
    code === 95 || $oB2J$exports(code)
  );
}

function $kmcG$var$previous(code) {
  return (// EOF.
    code === null || // CR, LF, CRLF, HT, VS.
    code < 0 || // Space.
    code === 32 || // `(`
    code === 40 || // `*`
    code === 42 || // `_`.
    code === 95 || // `~`
    code === 126
  );
}

$BU19$exports = $kmcG$exports;
// ASSET: ../../../micromark-extension-gfm-strikethrough/index.js
var $uAcf$exports = {};
$uAcf$exports = $uAcf$var$create;

function $uAcf$var$create(options) {
  var settings = options || {};
  var single = settings.singleTilde;
  var tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };

  if (single === null || single === undefined) {
    single = true;
  }

  return {
    text: {
      126: tokenizer
    },
    insideSpan: {
      null: tokenizer
    }
  }; // Take events and resolve strikethrough.

  function resolveAllStrikethrough(events, context) {
    var index = -1;
    var strikethrough;
    var text;
    var open;
    var nextEvents; // Walk through all events.

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
              start: $PrZ2$exports(events[open][1].start),
              end: $PrZ2$exports(events[index][1].end)
            };
            text = {
              type: 'strikethroughText',
              start: $PrZ2$exports(events[open][1].end),
              end: $PrZ2$exports(events[index][1].start)
            }; // Opening.

            nextEvents = [['enter', strikethrough, context], ['enter', events[open][1], context], ['exit', events[open][1], context], ['enter', text, context]]; // Between.

            $RVQg$exports(nextEvents, nextEvents.length, 0, $hAn0$exports(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)); // Closing.

            $RVQg$exports(nextEvents, nextEvents.length, 0, [['exit', text, context], ['enter', events[index][1], context], ['exit', events[index][1], context], ['exit', strikethrough, context]]);
            $RVQg$exports(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }

    return removeRemainingSequences(events);
  }

  function removeRemainingSequences(events) {
    var index = -1;
    var length = events.length;

    while (++index < length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = 'data';
      }
    }

    return events;
  }

  function tokenizeStrikethrough(effects, ok, nok) {
    var previous = this.previous;
    var events = this.events;
    var size = 0;
    return start;

    function start(code) {
      if (code !== 126 || previous === 126 && events[events.length - 1][1].type !== 'characterEscape') {
        return nok(code);
      }

      effects.enter('strikethroughSequenceTemporary');
      return more(code);
    }

    function more(code) {
      var before = $D2oE$exports(previous);
      var token;
      var after;

      if (code === 126) {
        // If this is the third marker, exit.
        if (size > 1) return nok(code);
        effects.consume(code);
        size++;
        return more;
      }

      if (size < 2 && !single) return nok(code);
      token = effects.exit('strikethroughSequenceTemporary');
      after = $D2oE$exports(code);
      token._open = !after || after === 2 && before;
      token._close = !before || before === 2 && after;
      return ok(code);
    }
  }
}

// ASSET: ../../../micromark-extension-gfm-table/index.js
var $D8kR$exports = {};
// ASSET: ../../../micromark-extension-gfm-table/syntax.js
var $pM9v$exports = {};
var $pM9v$export$flow = {
  null: {
    tokenize: $pM9v$var$tokenizeTable,
    resolve: $pM9v$var$resolveTable,
    interruptible: true
  }
};
$pM9v$exports.flow = $pM9v$export$flow;
var $pM9v$var$setextUnderlineMini = {
  tokenize: $pM9v$var$tokenizeSetextUnderlineMini,
  partial: true
};
var $pM9v$var$nextPrefixedOrBlank = {
  tokenize: $pM9v$var$tokenizeNextPrefixedOrBlank,
  partial: true
};

function $pM9v$var$resolveTable(events, context) {
  var length = events.length;
  var index = -1;
  var token;
  var inHead;
  var inDelimiterRow;
  var inRow;
  var cell;
  var content;
  var text;
  var contentStart;
  var contentEnd;
  var cellStart;

  while (++index < length) {
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
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        text = {
          type: 'chunkText',
          start: content.start,
          end: content.end,
          contentType: 'text'
        };
        events.splice(contentStart, contentEnd - contentStart + 1, ['enter', content, context], ['enter', text, context], ['exit', text, context], ['exit', content, context]);
        index -= contentEnd - contentStart - 3;
        length = events.length;
        contentStart = undefined;
        contentEnd = undefined;
      }
    }

    if (events[index][0] === 'exit' && (token.type === 'tableCellDivider' || token.type === 'tableRow') && cellStart && cellStart + 1 < index) {
      cell = {
        type: inDelimiterRow ? 'tableDelimiter' : inHead ? 'tableHeader' : 'tableData',
        start: events[cellStart][1].start,
        end: events[index][1].end
      };
      events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, ['exit', cell, context]);
      events.splice(cellStart, 0, ['enter', cell, context]);
      index += 2;
      length = events.length;
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

function $pM9v$var$tokenizeTable(effects, ok, nok) {
  var align = [];
  var tableHeaderCount = 0;
  var seenDelimiter;
  var hasDash;
  return start;

  function start(code) {
    /* istanbul ignore if - used to be passed in beta micromark versions. */
    if (code === null || code === -5 || code === -4 || code === -3) {
      return nok(code);
    }

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

  function cellDividerHead(code) {
    // Always a pipe.
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    seenDelimiter = true;
    return cellBreakHead;
  }

  function cellBreakHead(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndHead(code);
    } // HT, VS, SP.


    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceHead;
    }

    if (seenDelimiter) {
      seenDelimiter = undefined;
      tableHeaderCount++;
    } // `|`


    if (code === 124) {
      return cellDividerHead(code);
    } // Anything else is cell content.


    effects.enter('temporaryTableCellContent');
    return inCellContentHead(code);
  }

  function inWhitespaceHead(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return inWhitespaceHead;
    }

    effects.exit('whitespace');
    return cellBreakHead(code);
  }

  function inCellContentHead(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent');
      return cellBreakHead(code);
    }

    effects.consume(code); // `\`

    return code === 92 ? inCellContentEscapeHead : inCellContentHead;
  }

  function inCellContentEscapeHead(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code);
      return inCellContentHead;
    } // Anything else.


    return inCellContentHead(code);
  }

  function atRowEndHead(code) {
    if (code === null) {
      return nok(code);
    }

    effects.exit('tableRow');
    effects.exit('tableHead'); // Always a line ending.

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding'); // If a setext heading, exit.

    return effects.check($pM9v$var$setextUnderlineMini, nok, // Support an indent before the delimiter row.
    $VZrc$exports(effects, rowStartDelimiter, 'linePrefix', 4));
  }

  function rowStartDelimiter(code) {
    // If there’s another space, or we’re at the EOL/EOF, exit.
    if (code === null || code < 0 || code === 32) {
      return nok(code);
    }

    effects.enter('tableDelimiterRow');
    return atDelimiterRowBreak(code);
  }

  function atDelimiterRowBreak(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code);
    } // HT, VS, SP.


    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceDelimiter;
    } // `-`


    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      align.push(null);
      return inFillerDelimiter;
    } // `:`


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

  function inWhitespaceDelimiter(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return inWhitespaceDelimiter;
    }

    effects.exit('whitespace');
    return atDelimiterRowBreak(code);
  }

  function inFillerDelimiter(code) {
    // `-`
    if (code === 45) {
      effects.consume(code);
      return inFillerDelimiter;
    }

    effects.exit('tableDelimiterFiller'); // `:`

    if (code === 58) {
      effects.enter('tableDelimiterAlignment');
      effects.consume(code);
      effects.exit('tableDelimiterAlignment');
      align[align.length - 1] = align[align.length - 1] === 'left' ? 'center' : 'right';
      return afterRightAlignment;
    }

    return atDelimiterRowBreak(code);
  }

  function afterLeftAlignment(code) {
    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      return inFillerDelimiter;
    } // Anything else is not ok.


    return nok(code);
  }

  function afterRightAlignment(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code);
    } // HT, VS, SP.


    if (code === -2 || code === -1 || code === 32) {
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

  function rowEndDelimiter(code) {
    effects.exit('tableDelimiterRow'); // Exit if there was no dash at all, or if the header cell count is not the
    // delimiter cell count.

    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code);
    }

    if (code === null) {
      return tableClose(code);
    }

    return effects.check($pM9v$var$nextPrefixedOrBlank, tableClose, tableContinue)(code);
  }

  function tableClose(code) {
    effects.exit('table');
    return ok(code);
  }

  function tableContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding'); // We checked that it’s not a prefixed or blank line, so we’re certain a
    // body is coming, though it may be indented.

    return $VZrc$exports(effects, bodyStart, 'linePrefix', 4);
  }

  function bodyStart(code) {
    effects.enter('tableBody');
    return rowStartBody(code);
  }

  function rowStartBody(code) {
    effects.enter('tableRow'); // If we start with a pipe, we open a cell marker.

    if (code === 124) {
      return cellDividerBody(code);
    }

    effects.enter('temporaryTableCellContent'); // Can’t be space or eols at the start of a construct, so we’re in a cell.

    return inCellContentBody(code);
  }

  function cellDividerBody(code) {
    // Always a pipe.
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    return cellBreakBody;
  }

  function cellBreakBody(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndBody(code);
    } // HT, VS, SP.


    if (code === -2 || code === -1 || code === 32) {
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

  function inWhitespaceBody(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return inWhitespaceBody;
    }

    effects.exit('whitespace');
    return cellBreakBody(code);
  }

  function inCellContentBody(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent');
      return cellBreakBody(code);
    }

    effects.consume(code); // `\`

    return code === 92 ? inCellContentEscapeBody : inCellContentBody;
  }

  function inCellContentEscapeBody(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code);
      return inCellContentBody;
    } // Anything else.


    return inCellContentBody(code);
  }

  function atRowEndBody(code) {
    effects.exit('tableRow');

    if (code === null) {
      return tableBodyClose(code);
    }

    return effects.check($pM9v$var$nextPrefixedOrBlank, tableBodyClose, tableBodyContinue)(code);
  }

  function tableBodyClose(code) {
    effects.exit('tableBody');
    return tableClose(code);
  }

  function tableBodyContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding'); // Support an optional prefix, then start a body row.

    return $VZrc$exports(effects, rowStartBody, 'linePrefix', 4);
  }
} // Based on micromark, but that won’t work as we’re in a table, and that expects
// content.
// <https://github.com/micromark/micromark/blob/main/lib/tokenize/setext-underline.js>


function $pM9v$var$tokenizeSetextUnderlineMini(effects, ok, nok) {
  return start;

  function start(code) {
    // `-`
    if (code !== 45) {
      return nok(code);
    }

    effects.enter('setextUnderline');
    return sequence(code);
  }

  function sequence(code) {
    if (code === 45) {
      effects.consume(code);
      return sequence;
    }

    return whitespace(code);
  }

  function whitespace(code) {
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return whitespace;
    }

    if (code === null || code === -5 || code === -4 || code === -3) {
      return ok(code);
    }

    return nok(code);
  }
}

function $pM9v$var$tokenizeNextPrefixedOrBlank(effects, ok, nok) {
  var size = 0;
  return start;

  function start(code) {
    // This is a check, so we don’t care about tokens, but we open a bogus one
    // so we’re valid.
    effects.enter('check'); // EOL.

    effects.consume(code);
    return whitespace;
  }

  function whitespace(code) {
    // VS or SP.
    if (code === -1 || code === 32) {
      effects.consume(code);
      size++;
      return size === 4 ? ok : whitespace;
    } // EOF or whitespace


    if (code === null || code < 0) {
      return ok(code);
    } // Anything else.


    return nok(code);
  }
}

$D8kR$exports = $pM9v$exports;
// ASSET: ../../../micromark-extension-gfm-task-list-item/index.js
var $yFSz$exports = {};
// ASSET: ../../../micromark-extension-gfm-task-list-item/syntax.js
var $dA2Y$exports = {};
var $dA2Y$var$tasklistCheck = {
  tokenize: $dA2Y$var$tokenizeTasklistCheck
};
var $dA2Y$export$text = {
  91: $dA2Y$var$tasklistCheck
};
$dA2Y$exports.text = $dA2Y$export$text;

function $dA2Y$var$tokenizeTasklistCheck(effects, ok, nok) {
  var self = this;
  return open;

  function open(code) {
    if ( // Exit if not `[`.
    code !== 91 || // Exit if there’s stuff before.
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

  function inside(code) {
    // Tab or space.
    if (code === -2 || code === 32) {
      effects.enter('taskListCheckValueUnchecked');
      effects.consume(code);
      effects.exit('taskListCheckValueUnchecked');
      return close;
    } // Upper- and lower `x`.


    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked');
      effects.consume(code);
      effects.exit('taskListCheckValueChecked');
      return close;
    }

    return nok(code);
  }

  function close(code) {
    // `]`
    if (code === 93) {
      effects.enter('taskListCheckMarker');
      effects.consume(code);
      effects.exit('taskListCheckMarker');
      effects.exit('taskListCheck');
      return effects.check({
        tokenize: $dA2Y$var$spaceThenNonSpace
      }, ok, nok);
    }

    return nok(code);
  }
}

function $dA2Y$var$spaceThenNonSpace(effects, ok, nok) {
  var self = this;
  return $VZrc$exports(effects, after, 'whitespace');

  function after(code) {
    return $zmts$exports(self.events, 'whitespace') && code !== null && !$iubz$exports(code) ? ok(code) : nok(code);
  }
}

$yFSz$exports = $dA2Y$exports;
// ASSET: ../../../micromark-extension-gfm/syntax.js
var $dYb3$exports = {};
$dYb3$exports = $dYb3$var$create;

function $dYb3$var$create(options) {
  return $WfpN$exports([$BU19$exports, $uAcf$exports(options), $D8kR$exports, $yFSz$exports]);
}

$BN64$exports = $dYb3$exports;
// ASSET: ../../../mdast-util-gfm-autolink-literal/from-markdown.js
var $wK3b$exports = {};
var $wK3b$export$enter = {
  literalAutolink: $wK3b$var$enterLiteralAutolink,
  literalAutolinkEmail: $wK3b$var$enterLiteralAutolinkValue,
  literalAutolinkHttp: $wK3b$var$enterLiteralAutolinkValue,
  literalAutolinkWww: $wK3b$var$enterLiteralAutolinkValue
};
$wK3b$exports.enter = $wK3b$export$enter;
var $wK3b$export$exit = {
  literalAutolink: $wK3b$var$exitLiteralAutolink,
  literalAutolinkEmail: $wK3b$var$exitLiteralAutolinkEmail,
  literalAutolinkHttp: $wK3b$var$exitLiteralAutolinkHttp,
  literalAutolinkWww: $wK3b$var$exitLiteralAutolinkWww
};
$wK3b$exports.exit = $wK3b$export$exit;

function $wK3b$var$enterLiteralAutolink(token) {
  this.enter({
    type: 'link',
    title: null,
    url: '',
    children: []
  }, token);
}

function $wK3b$var$enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}

function $wK3b$var$exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}

function $wK3b$var$exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  this.stack[this.stack.length - 1].url = 'http://' + this.sliceSerialize(token);
}

function $wK3b$var$exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}

function $wK3b$var$exitLiteralAutolink(token) {
  this.exit(token);
}

// ASSET: ../../../mdast-util-gfm-strikethrough/from-markdown.js
var $IcQQ$exports = {};
var $IcQQ$export$canContainEols = ['delete'];
$IcQQ$exports.canContainEols = $IcQQ$export$canContainEols;
var $IcQQ$export$enter = {
  strikethrough: $IcQQ$var$enterStrikethrough
};
$IcQQ$exports.enter = $IcQQ$export$enter;
var $IcQQ$export$exit = {
  strikethrough: $IcQQ$var$exitStrikethrough
};
$IcQQ$exports.exit = $IcQQ$export$exit;

function $IcQQ$var$enterStrikethrough(token) {
  this.enter({
    type: 'delete',
    children: []
  }, token);
}

function $IcQQ$var$exitStrikethrough(token) {
  this.exit(token);
}

// ASSET: ../../../mdast-util-gfm-table/from-markdown.js
var $UL0I$exports = {};
var $UL0I$export$enter = {
  table: $UL0I$var$enterTable,
  tableData: $UL0I$var$enterCell,
  tableHeader: $UL0I$var$enterCell,
  tableRow: $UL0I$var$enterRow
};
$UL0I$exports.enter = $UL0I$export$enter;
var $UL0I$export$exit = {
  codeText: $UL0I$var$exitCodeText,
  table: $UL0I$var$exitTable,
  tableData: $UL0I$var$exit,
  tableHeader: $UL0I$var$exit,
  tableRow: $UL0I$var$exit
};
$UL0I$exports.exit = $UL0I$export$exit;

function $UL0I$var$enterTable(token) {
  this.enter({
    type: 'table',
    align: token._align,
    children: []
  }, token);
  this.setData('inTable', true);
}

function $UL0I$var$exitTable(token) {
  this.exit(token);
  this.setData('inTable');
}

function $UL0I$var$enterRow(token) {
  this.enter({
    type: 'tableRow',
    children: []
  }, token);
}

function $UL0I$var$exit(token) {
  this.exit(token);
}

function $UL0I$var$enterCell(token) {
  this.enter({
    type: 'tableCell',
    children: []
  }, token);
} // Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.


function $UL0I$var$exitCodeText(token) {
  var value = this.resume();

  if (this.getData('inTable')) {
    value = value.replace(/\\([\\|])/g, $UL0I$var$replace);
  }

  this.stack[this.stack.length - 1].value = value;
  this.exit(token);
}

function $UL0I$var$replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0;
}

// ASSET: ../../../mdast-util-gfm-task-list-item/from-markdown.js
var $w8PE$exports = {};
var $w8PE$export$exit = {
  taskListCheckValueChecked: $w8PE$var$exitCheck,
  taskListCheckValueUnchecked: $w8PE$var$exitCheck,
  paragraph: $w8PE$var$exitParagraphWithTaskListItem
};
$w8PE$exports.exit = $w8PE$export$exit;

function $w8PE$var$exitCheck(token) {
  // We’re always in a paragraph, in a list item.
  this.stack[this.stack.length - 2].checked = token.type === 'taskListCheckValueChecked';
}

function $w8PE$var$exitParagraphWithTaskListItem(token) {
  var parent = this.stack[this.stack.length - 2];
  var node = this.stack[this.stack.length - 1];
  var siblings = parent.children;
  var head = node.children[0];
  var index = -1;
  var firstParaghraph;

  if (parent && parent.type === 'listItem' && typeof parent.checked === 'boolean' && head && head.type === 'text') {
    while (++index < siblings.length) {
      if (siblings[index].type === 'paragraph') {
        firstParaghraph = siblings[index];
        break;
      }
    }

    if (firstParaghraph === node) {
      // Must start with a space or a tab.
      head.value = head.value.slice(1);

      if (head.value.length === 0) {
        node.children.shift();
      } else {
        head.position.start.column++;
        head.position.start.offset++;
        node.position.start = Object.assign({}, head.position.start);
      }
    }
  }

  this.exit(token);
}

// ASSET: ../../../mdast-util-gfm/from-markdown.js
var $CoMP$exports = {};
var $CoMP$var$own = {}.hasOwnProperty;
$CoMP$exports = $CoMP$var$configure([$wK3b$exports, $IcQQ$exports, $UL0I$exports, $w8PE$exports]);

function $CoMP$var$configure(extensions) {
  var config = {
    canContainEols: []
  };
  var length = extensions.length;
  var index = -1;

  while (++index < length) {
    $CoMP$var$extension(config, extensions[index]);
  }

  return config;
}

function $CoMP$var$extension(config, extension) {
  var key;
  var left;
  var right;

  for (key in extension) {
    left = $CoMP$var$own.call(config, key) ? config[key] : config[key] = {};
    right = extension[key];

    if (key === 'canContainEols') {
      config[key] = [].concat(left, right);
    } else {
      Object.assign(left, right);
    }
  }
}

// ASSET: ../../../mdast-util-gfm-autolink-literal/to-markdown.js
var $q1sb$exports = {};
var $q1sb$var$inConstruct = 'phrasing';
var $q1sb$var$notInConstruct = ['autolink', 'link', 'image', 'label'];
var $q1sb$export$unsafe = [{
  character: '@',
  before: '[+\\-.\\w]',
  after: '[\\-.\\w]',
  inConstruct: $q1sb$var$inConstruct,
  notInConstruct: $q1sb$var$notInConstruct
}, {
  character: '.',
  before: '[Ww]',
  after: '[\\-.\\w]',
  inConstruct: $q1sb$var$inConstruct,
  notInConstruct: $q1sb$var$notInConstruct
}, {
  character: ':',
  before: '[ps]',
  after: '\\/',
  inConstruct: $q1sb$var$inConstruct,
  notInConstruct: $q1sb$var$notInConstruct
}];
$q1sb$exports.unsafe = $q1sb$export$unsafe;
// ASSET: ../../../mdast-util-to-markdown/lib/util/container-phrasing.js
var $bjW5$exports = {};
$bjW5$exports = $bjW5$var$phrasing;

function $bjW5$var$phrasing(parent, context, safeOptions) {
  var children = parent.children || [];
  var results = [];
  var index = -1;
  var before = safeOptions.before;
  var after;
  var handle;
  var child;

  while (++index < children.length) {
    child = children[index];

    if (index + 1 < children.length) {
      handle = context.handle.handlers[children[index + 1].type];
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
      before: before,
      after: after
    }));
    before = results[results.length - 1].slice(-1);
  }

  return results.join('');
}

// ASSET: ../../../mdast-util-gfm-strikethrough/to-markdown.js
var $ZrwL$exports = {};
var $ZrwL$export$unsafe = [{
  character: '~',
  inConstruct: 'phrasing'
}];
$ZrwL$exports.unsafe = $ZrwL$export$unsafe;
var $ZrwL$export$handlers = {
  delete: $ZrwL$var$handleDelete
};
$ZrwL$exports.handlers = $ZrwL$export$handlers;
$ZrwL$var$handleDelete.peek = $ZrwL$var$peekDelete;

function $ZrwL$var$handleDelete(node, _, context) {
  var exit = context.enter('emphasis');
  var value = $bjW5$exports(node, context, {
    before: '~',
    after: '~'
  });
  exit();
  return '~~' + value + '~~';
}

function $ZrwL$var$peekDelete() {
  return '~';
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/pattern-compile.js
var $nDhW$exports = {};
$nDhW$exports = $nDhW$var$patternCompile;

function $nDhW$var$patternCompile(pattern) {
  var before;
  var after;

  if (!pattern._compiled) {
    before = pattern.before ? '(?:' + pattern.before + ')' : '';
    after = pattern.after ? '(?:' + pattern.after + ')' : '';

    if (pattern.atBreak) {
      before = '[\\r\\n][\\t ]*' + before;
    }

    pattern._compiled = new RegExp((before ? '(' + before + ')' : '') + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') + pattern.character + (after || ''), 'g');
  }

  return pattern._compiled;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/inline-code.js
var $dy9Q$exports = {};
$dy9Q$exports = $dy9Q$var$inlineCode;
$dy9Q$var$inlineCode.peek = $dy9Q$var$inlineCodePeek;

function $dy9Q$var$inlineCode(node, parent, context) {
  var value = node.value || '';
  var sequence = '`';
  var index = -1;
  var pattern;
  var expression;
  var match;
  var position; // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.

  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`';
  } // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.


  if (/[^ \r\n]/.test(value) && (/[ \r\n`]/.test(value.charAt(0)) || /[ \r\n`]/.test(value.charAt(value.length - 1)))) {
    value = ' ' + value + ' ';
  } // We have a potential problem: certain characters after eols could result in
  // blocks being seen.
  // For example, if someone injected the string `'\n# b'`, then that would
  // result in an ATX heading.
  // We can’t escape characters in `inlineCode`, but because eols are
  // transformed to spaces when going from markdown to HTML anyway, we can swap
  // them out.


  while (++index < context.unsafe.length) {
    pattern = context.unsafe[index]; // Only look for `atBreak`s.
    // Btw: note that `atBreak` patterns will always start the regex at LF or
    // CR.

    if (!pattern.atBreak) continue;
    expression = $nDhW$exports(pattern);

    while (match = expression.exec(value)) {
      position = match.index; // Support CRLF (patterns only look for one of the characters).

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

function $dy9Q$var$inlineCodePeek() {
  return '`';
}

// ASSET: ../../../repeat-string/index.js
var $k2Qo$exports = {};
/**
 * Results cache
 */

var $k2Qo$var$res = '';
var $k2Qo$var$cache;
/**
 * Expose `repeat`
 */

$k2Qo$exports = $k2Qo$var$repeat;
/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function $k2Qo$var$repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  } // cover common, quick use cases


  if (num === 1) return str;
  if (num === 2) return str + str;
  var max = str.length * num;

  if ($k2Qo$var$cache !== str || typeof $k2Qo$var$cache === 'undefined') {
    $k2Qo$var$cache = str;
    $k2Qo$var$res = '';
  } else if ($k2Qo$var$res.length >= max) {
    return $k2Qo$var$res.substr(0, max);
  }

  while (max > $k2Qo$var$res.length && num > 1) {
    if (num & 1) {
      $k2Qo$var$res += str;
    }

    num >>= 1;
    str += str;
  }

  $k2Qo$var$res += str;
  $k2Qo$var$res = $k2Qo$var$res.substr(0, max);
  return $k2Qo$var$res;
}

// ASSET: ../../../markdown-table/index.js
var $Fr8A$exports = {};
$Fr8A$exports = $Fr8A$var$markdownTable;
var $Fr8A$var$trailingWhitespace = / +$/; // Characters.

var $Fr8A$var$space = ' ';
var $Fr8A$var$lineFeed = '\n';
var $Fr8A$var$dash = '-';
var $Fr8A$var$colon = ':';
var $Fr8A$var$verticalBar = '|';
var $Fr8A$var$x = 0;
var $Fr8A$var$C = 67;
var $Fr8A$var$L = 76;
var $Fr8A$var$R = 82;
var $Fr8A$var$c = 99;
var $Fr8A$var$l = 108;
var $Fr8A$var$r = 114; // Create a table from a matrix of strings.

function $Fr8A$var$markdownTable(table, options) {
  var settings = options || {};
  var padding = settings.padding !== false;
  var start = settings.delimiterStart !== false;
  var end = settings.delimiterEnd !== false;
  var align = (settings.align || []).concat();
  var alignDelimiters = settings.alignDelimiters !== false;
  var alignments = [];
  var stringLength = settings.stringLength || $Fr8A$var$defaultStringLength;
  var rowIndex = -1;
  var rowLength = table.length;
  var cellMatrix = [];
  var sizeMatrix = [];
  var row = [];
  var sizes = [];
  var longestCellByColumn = [];
  var mostCellsPerRow = 0;
  var cells;
  var columnIndex;
  var columnLength;
  var largest;
  var size;
  var cell;
  var lines;
  var line;
  var before;
  var after;
  var code; // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.

  while (++rowIndex < rowLength) {
    cells = table[rowIndex];
    columnIndex = -1;
    columnLength = cells.length;
    row = [];
    sizes = [];

    if (columnLength > mostCellsPerRow) {
      mostCellsPerRow = columnLength;
    }

    while (++columnIndex < columnLength) {
      cell = $Fr8A$var$serialize(cells[columnIndex]);

      if (alignDelimiters === true) {
        size = stringLength(cell);
        sizes[columnIndex] = size;
        largest = longestCellByColumn[columnIndex];

        if (largest === undefined || size > largest) {
          longestCellByColumn[columnIndex] = size;
        }
      }

      row.push(cell);
    }

    cellMatrix[rowIndex] = row;
    sizeMatrix[rowIndex] = sizes;
  } // Figure out which alignments to use.


  columnIndex = -1;
  columnLength = mostCellsPerRow;

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < columnLength) {
      alignments[columnIndex] = $Fr8A$var$toAlignment(align[columnIndex]);
    }
  } else {
    code = $Fr8A$var$toAlignment(align);

    while (++columnIndex < columnLength) {
      alignments[columnIndex] = code;
    }
  } // Inject the alignment row.


  columnIndex = -1;
  columnLength = mostCellsPerRow;
  row = [];
  sizes = [];

  while (++columnIndex < columnLength) {
    code = alignments[columnIndex];
    before = '';
    after = '';

    if (code === $Fr8A$var$l) {
      before = $Fr8A$var$colon;
    } else if (code === $Fr8A$var$r) {
      after = $Fr8A$var$colon;
    } else if (code === $Fr8A$var$c) {
      before = $Fr8A$var$colon;
      after = $Fr8A$var$colon;
    } // There *must* be at least one hyphen-minus in each alignment cell.


    size = alignDelimiters ? Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length) : 1;
    cell = before + $k2Qo$exports($Fr8A$var$dash, size) + after;

    if (alignDelimiters === true) {
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
  rowLength = cellMatrix.length;
  lines = [];

  while (++rowIndex < rowLength) {
    row = cellMatrix[rowIndex];
    sizes = sizeMatrix[rowIndex];
    columnIndex = -1;
    columnLength = mostCellsPerRow;
    line = [];

    while (++columnIndex < columnLength) {
      cell = row[columnIndex] || '';
      before = '';
      after = '';

      if (alignDelimiters === true) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
        code = alignments[columnIndex];

        if (code === $Fr8A$var$r) {
          before = $k2Qo$exports($Fr8A$var$space, size);
        } else if (code === $Fr8A$var$c) {
          if (size % 2 === 0) {
            before = $k2Qo$exports($Fr8A$var$space, size / 2);
            after = before;
          } else {
            before = $k2Qo$exports($Fr8A$var$space, size / 2 + 0.5);
            after = $k2Qo$exports($Fr8A$var$space, size / 2 - 0.5);
          }
        } else {
          after = $k2Qo$exports($Fr8A$var$space, size);
        }
      }

      if (start === true && columnIndex === 0) {
        line.push($Fr8A$var$verticalBar);
      }

      if (padding === true && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(alignDelimiters === false && cell === '') && (start === true || columnIndex !== 0)) {
        line.push($Fr8A$var$space);
      }

      if (alignDelimiters === true) {
        line.push(before);
      }

      line.push(cell);

      if (alignDelimiters === true) {
        line.push(after);
      }

      if (padding === true) {
        line.push($Fr8A$var$space);
      }

      if (end === true || columnIndex !== columnLength - 1) {
        line.push($Fr8A$var$verticalBar);
      }
    }

    line = line.join('');

    if (end === false) {
      line = line.replace($Fr8A$var$trailingWhitespace, '');
    }

    lines.push(line);
  }

  return lines.join($Fr8A$var$lineFeed);
}

function $Fr8A$var$serialize(value) {
  return value === null || value === undefined ? '' : String(value);
}

function $Fr8A$var$defaultStringLength(value) {
  return value.length;
}

function $Fr8A$var$toAlignment(value) {
  var code = typeof value === 'string' ? value.charCodeAt(0) : $Fr8A$var$x;
  return code === $Fr8A$var$L || code === $Fr8A$var$l ? $Fr8A$var$l : code === $Fr8A$var$R || code === $Fr8A$var$r ? $Fr8A$var$r : code === $Fr8A$var$C || code === $Fr8A$var$c ? $Fr8A$var$c : $Fr8A$var$x;
}

// ASSET: ../../../mdast-util-gfm-table/to-markdown.js
var $KMi0$exports = {};
$KMi0$exports = $KMi0$var$toMarkdown;

function $KMi0$var$toMarkdown(options) {
  var settings = options || {};
  var padding = settings.tableCellPadding;
  var alignDelimiters = settings.tablePipeAlign;
  var stringLength = settings.stringLength;
  var around = padding ? ' ' : '|';
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

  function handleTable(node, _, context) {
    return serializeData(handleTableAsData(node, context), node.align);
  } // This function isn’t really used normally, because we handle rows at the
  // table level.
  // But, if someone passes in a table row, this ensures we make somewhat sense.


  function handleTableRow(node, _, context) {
    var row = handleTableRowAsData(node, context); // `markdown-table` will always add an align row

    var value = serializeData([row]);
    return value.slice(0, value.indexOf('\n'));
  }

  function handleTableCell(node, _, context) {
    var exit = context.enter('tableCell');
    var value = $bjW5$exports(node, context, {
      before: around,
      after: around
    });
    exit();
    return value;
  }

  function serializeData(matrix, align) {
    return $Fr8A$exports(matrix, {
      align: align,
      alignDelimiters: alignDelimiters,
      padding: padding,
      stringLength: stringLength
    });
  }

  function handleTableAsData(node, context) {
    var children = node.children;
    var index = -1;
    var length = children.length;
    var result = [];
    var subexit = context.enter('table');

    while (++index < length) {
      result[index] = handleTableRowAsData(children[index], context);
    }

    subexit();
    return result;
  }

  function handleTableRowAsData(node, context) {
    var children = node.children;
    var index = -1;
    var length = children.length;
    var result = [];
    var subexit = context.enter('tableRow');

    while (++index < length) {
      result[index] = handleTableCell(children[index], node, context);
    }

    subexit();
    return result;
  }

  function inlineCodeWithTable(node, parent, context) {
    var value = $dy9Q$exports(node, parent, context);

    if (context.stack.indexOf('tableCell') !== -1) {
      value = value.replace(/\|/g, '\\$&');
    }

    return value;
  }
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-bullet.js
var $MxNf$exports = {};
$MxNf$exports = $MxNf$var$checkBullet;

function $MxNf$var$checkBullet(context) {
  var marker = context.options.bullet || '*';

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error('Cannot serialize items with `' + marker + '` for `options.bullet`, expected `*`, `+`, or `-`');
  }

  return marker;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-list-item-indent.js
var $Spxt$exports = {};
$Spxt$exports = $Spxt$var$checkListItemIndent;

function $Spxt$var$checkListItemIndent(context) {
  var style = context.options.listItemIndent || 'tab';

  if (style === 1 || style === '1') {
    return 'one';
  }

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error('Cannot serialize items with `' + style + '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`');
  }

  return style;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/container-flow.js
var $UtAL$exports = {};
$UtAL$exports = $UtAL$var$flow;

function $UtAL$var$flow(parent, context) {
  var children = parent.children || [];
  var results = [];
  var index = -1;
  var child;

  while (++index < children.length) {
    child = children[index];
    results.push(context.handle(child, parent, context, {
      before: '\n',
      after: '\n'
    }));

    if (index + 1 < children.length) {
      results.push(between(child, children[index + 1]));
    }
  }

  return results.join('');

  function between(left, right) {
    var index = -1;
    var result;

    while (++index < context.join.length) {
      result = context.join[index](left, right, parent, context);

      if (result === true || result === 1) {
        break;
      }

      if (typeof result === 'number') {
        return $k2Qo$exports('\n', 1 + Number(result));
      }

      if (result === false) {
        return '\n\n<!---->\n\n';
      }
    }

    return '\n\n';
  }
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/indent-lines.js
var $LkVL$exports = {};
$LkVL$exports = $LkVL$var$indentLines;
var $LkVL$var$eol = /\r?\n|\r/g;

function $LkVL$var$indentLines(value, map) {
  var result = [];
  var start = 0;
  var line = 0;
  var match;

  while (match = $LkVL$var$eol.exec(value)) {
    one(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }

  one(value.slice(start));
  return result.join('');

  function one(value) {
    result.push(map(value, line, !value));
  }
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/list-item.js
var $AhBl$exports = {};
$AhBl$exports = $AhBl$var$listItem;

function $AhBl$var$listItem(node, parent, context) {
  var bullet = $MxNf$exports(context);
  var listItemIndent = $Spxt$exports(context);
  var size;
  var value;
  var exit;

  if (parent && parent.ordered) {
    bullet = (parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + '.';
  }

  size = bullet.length + 1;

  if (listItemIndent === 'tab' || listItemIndent === 'mixed' && (parent && parent.spread || node.spread)) {
    size = Math.ceil(size / 4) * 4;
  }

  exit = context.enter('listItem');
  value = $LkVL$exports($UtAL$exports(node, context), map);
  exit();
  return value;

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : $k2Qo$exports(' ', size)) + line;
    }

    return (blank ? bullet : bullet + $k2Qo$exports(' ', size - bullet.length)) + line;
  }
}

// ASSET: ../../../mdast-util-gfm-task-list-item/to-markdown.js
var $PvFD$exports = {};
var $PvFD$export$unsafe = [{
  atBreak: true,
  character: '-',
  after: '[:|-]'
}];
$PvFD$exports.unsafe = $PvFD$export$unsafe;
var $PvFD$export$handlers = {
  listItem: $PvFD$var$listItemWithTaskListItem
};
$PvFD$exports.handlers = $PvFD$export$handlers;

function $PvFD$var$listItemWithTaskListItem(node, parent, context) {
  var value = $AhBl$exports(node, parent, context);
  var head = node.children[0];

  if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }

  return value;

  function check($0) {
    return $0 + '[' + (node.checked ? 'x' : ' ') + '] ';
  }
}

// ASSET: ../../../mdast-util-to-markdown/lib/configure.js
var $Ppel$exports = {};
$Ppel$exports = $Ppel$var$configure;

function $Ppel$var$configure(base, extension) {
  var index = -1;
  var key; // First do subextensions.

  if (extension.extensions) {
    while (++index < extension.extensions.length) {
      $Ppel$var$configure(base, extension.extensions[index]);
    }
  }

  for (key in extension) {
    if (key === 'extensions') {// Empty.
    } else if (key === 'unsafe' || key === 'join') {
      base[key] = base[key].concat(extension[key] || []);
    } else if (key === 'handlers') {
      base[key] = Object.assign(base[key], extension[key] || {});
    } else {
      base.options[key] = extension[key];
    }
  }

  return base;
}

// ASSET: ../../../mdast-util-gfm/to-markdown.js
var $wKIw$exports = {};
$wKIw$exports = $wKIw$var$toMarkdown;

function $wKIw$var$toMarkdown(options) {
  var config = $Ppel$exports({
    handlers: {},
    join: [],
    unsafe: [],
    options: {}
  }, {
    extensions: [$q1sb$exports, $ZrwL$exports, $KMi0$exports(options), $PvFD$exports]
  });
  return Object.assign(config.options, {
    handlers: config.handlers,
    join: config.join,
    unsafe: config.unsafe
  });
}

// ASSET: ../../../remark-gfm/index.js
var $Egyt$exports = {};
var $Egyt$var$warningIssued;
$Egyt$exports = $Egyt$var$gfm;

function $Egyt$var$gfm(options) {
  var data = this.data();
  /* istanbul ignore next - old remark. */

  if (!$Egyt$var$warningIssued && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors)) {
    $Egyt$var$warningIssued = true;
    console.warn('[remark-gfm] Warning: please upgrade to remark 13 to use this plugin');
  }

  add('micromarkExtensions', $BN64$exports(options));
  add('fromMarkdownExtensions', $CoMP$exports);
  add('toMarkdownExtensions', $wKIw$exports(options));

  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value);else data[field] = [value];
  }
}

// ASSET: ../../../mdast-util-to-markdown/index.js
var $za63$exports = {};
// ASSET: ../../../zwitch/index.js
var $nGVJ$exports = {};
$nGVJ$exports = $nGVJ$var$factory;
var $nGVJ$var$noop = Function.prototype;
var $nGVJ$var$own = {}.hasOwnProperty; // Handle values based on a property.

function $nGVJ$var$factory(key, options) {
  var settings = options || {};

  function one(value) {
    var fn = one.invalid;
    var handlers = one.handlers;

    if (value && $nGVJ$var$own.call(value, key)) {
      fn = $nGVJ$var$own.call(handlers, value[key]) ? handlers[value[key]] : one.unknown;
    }

    return (fn || $nGVJ$var$noop).apply(this, arguments);
  }

  one.handlers = settings.handlers || {};
  one.invalid = settings.invalid;
  one.unknown = settings.unknown;
  return one;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/blockquote.js
var $AORw$exports = {};
$AORw$exports = $AORw$var$blockquote;

function $AORw$var$blockquote(node, _, context) {
  var exit = context.enter('blockquote');
  var value = $LkVL$exports($UtAL$exports(node, context), $AORw$var$map);
  exit();
  return value;
}

function $AORw$var$map(line, index, blank) {
  return '>' + (blank ? '' : ' ') + line;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/pattern-in-scope.js
var $Ti7D$exports = {};
$Ti7D$exports = $Ti7D$var$patternInScope;

function $Ti7D$var$patternInScope(stack, pattern) {
  return $Ti7D$var$listInScope(stack, pattern.inConstruct, true) && !$Ti7D$var$listInScope(stack, pattern.notInConstruct);
}

function $Ti7D$var$listInScope(stack, list, none) {
  var index;

  if (!list) {
    return none;
  }

  if (typeof list === 'string') {
    list = [list];
  }

  index = -1;

  while (++index < list.length) {
    if (stack.indexOf(list[index]) !== -1) {
      return true;
    }
  }

  return false;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/break.js
var $hiJF$exports = {};
$hiJF$exports = $hiJF$var$hardBreak;

function $hiJF$var$hardBreak(node, _, context, safe) {
  var index = -1;

  while (++index < context.unsafe.length) {
    // If we can’t put eols in this construct (setext headings, tables), use a
    // space instead.
    if (context.unsafe[index].character === '\n' && $Ti7D$exports(context.stack, context.unsafe[index])) {
      return /[ \t]/.test(safe.before) ? '' : ' ';
    }
  }

  return '\\\n';
}

// ASSET: ../../../longest-streak/index.js
var $rvoy$exports = {};
$rvoy$exports = $rvoy$var$longestStreak; // Get the count of the longest repeating streak of `character` in `value`.

function $rvoy$var$longestStreak(value, character) {
  var count = 0;
  var maximum = 0;
  var expected;
  var index;

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character');
  }

  value = String(value);
  index = value.indexOf(character);
  expected = index;

  while (index !== -1) {
    count++;

    if (index === expected) {
      if (count > maximum) {
        maximum = count;
      }
    } else {
      count = 1;
    }

    expected = index + 1;
    index = value.indexOf(character, expected);
  }

  return maximum;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/format-code-as-indented.js
var $UK2E$exports = {};
$UK2E$exports = $UK2E$var$formatCodeAsIndented;

function $UK2E$var$formatCodeAsIndented(node, context) {
  return !context.options.fences && node.value && // If there’s no info…
  !node.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(node.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value);
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-fence.js
var $gC2b$exports = {};
$gC2b$exports = $gC2b$var$checkFence;

function $gC2b$var$checkFence(context) {
  var marker = context.options.fence || '`';

  if (marker !== '`' && marker !== '~') {
    throw new Error('Cannot serialize code with `' + marker + '` for `options.fence`, expected `` ` `` or `~`');
  }

  return marker;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/safe.js
var $hCI8$exports = {};
$hCI8$exports = $hCI8$var$safe;

function $hCI8$var$safe(context, input, config) {
  var value = (config.before || '') + (input || '') + (config.after || '');
  var positions = [];
  var result = [];
  var infos = {};
  var index = -1;
  var before;
  var after;
  var position;
  var pattern;
  var expression;
  var match;
  var start;
  var end;

  while (++index < context.unsafe.length) {
    pattern = context.unsafe[index];

    if (!$Ti7D$exports(context.stack, pattern)) {
      continue;
    }

    expression = $nDhW$exports(pattern);

    while (match = expression.exec(value)) {
      before = 'before' in pattern || pattern.atBreak;
      after = 'after' in pattern;
      position = match.index + (before ? match[1].length : 0);

      if (positions.indexOf(position) === -1) {
        positions.push(position);
        infos[position] = {
          before: before,
          after: after
        };
      } else {
        if (infos[position].before && !before) {
          infos[position].before = false;
        }

        if (infos[position].after && !after) {
          infos[position].after = false;
        }
      }
    }
  }

  positions.sort($hCI8$var$numerical);
  start = config.before ? config.before.length : 0;
  end = value.length - (config.after ? config.after.length : 0);
  index = -1;

  while (++index < positions.length) {
    position = positions[index];

    if ( // Character before or after matched:
    position < start || position >= end) {
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

    if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || config.encode.indexOf(value.charAt(position)) === -1)) {
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

function $hCI8$var$numerical(a, b) {
  return a - b;
}

function $hCI8$var$escapeBackslashes(value, after) {
  var expression = /\\(?=[!-/:-@[-`{-~])/g;
  var positions = [];
  var results = [];
  var index = -1;
  var start = 0;
  var whole = value + after;
  var match;

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

// ASSET: ../../../mdast-util-to-markdown/lib/handle/code.js
var $FoF0$exports = {};
$FoF0$exports = $FoF0$var$code;

function $FoF0$var$code(node, _, context) {
  var marker = $gC2b$exports(context);
  var raw = node.value || '';
  var suffix = marker === '`' ? 'GraveAccent' : 'Tilde';
  var value;
  var sequence;
  var exit;
  var subexit;

  if ($UK2E$exports(node, context)) {
    exit = context.enter('codeIndented');
    value = $LkVL$exports(raw, $FoF0$var$map);
  } else {
    sequence = $k2Qo$exports(marker, Math.max($rvoy$exports(raw, marker) + 1, 3));
    exit = context.enter('codeFenced');
    value = sequence;

    if (node.lang) {
      subexit = context.enter('codeFencedLang' + suffix);
      value += $hCI8$exports(context, node.lang, {
        before: '`',
        after: ' ',
        encode: ['`']
      });
      subexit();
    }

    if (node.lang && node.meta) {
      subexit = context.enter('codeFencedMeta' + suffix);
      value += ' ' + $hCI8$exports(context, node.meta, {
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

function $FoF0$var$map(line, _, blank) {
  return (blank ? '' : '    ') + line;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/association.js
var $nh8P$exports = {};
$nh8P$exports = $nh8P$var$association;
var $nh8P$var$characterEscape = /\\([!-/:-@[-`{-~])/g;
var $nh8P$var$characterReference = /&(#(\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi; // The `label` of an association is the string value: character escapes and
// references work, and casing is intact.
// The `identifier` is used to match one association to another: controversially,
// character escapes and references don’t work in this matching: `&copy;` does
// not match `©`, and `\+` does not match `+`.
// But casing is ignored (and whitespace) is trimmed and collapsed: ` A\nb`
// matches `a b`.
// So, we do prefer the label when figuring out how we’re going to serialize:
// it has whitespace, casing, and we can ignore most useless character escapes
// and all character references.

function $nh8P$var$association(node) {
  if (node.label || !node.identifier) {
    return node.label || '';
  }

  return node.identifier.replace($nh8P$var$characterEscape, '$1').replace($nh8P$var$characterReference, $nh8P$var$decodeIfPossible);
}

function $nh8P$var$decodeIfPossible($0, $1) {
  return $S7VQ$exports($1) || $0;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-quote.js
var $VIp3$exports = {};
$VIp3$exports = $VIp3$var$checkQuote;

function $VIp3$var$checkQuote(context) {
  var marker = context.options.quote || '"';

  if (marker !== '"' && marker !== "'") {
    throw new Error('Cannot serialize title with `' + marker + '` for `options.quote`, expected `"`, or `\'`');
  }

  return marker;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/definition.js
var $N15W$exports = {};
$N15W$exports = $N15W$var$definition;

function $N15W$var$definition(node, _, context) {
  var marker = $VIp3$exports(context);
  var suffix = marker === '"' ? 'Quote' : 'Apostrophe';
  var exit = context.enter('definition');
  var subexit = context.enter('label');
  var value = '[' + $hCI8$exports(context, $nh8P$exports(node), {
    before: '[',
    after: ']'
  }) + ']: ';
  subexit();

  if ( // If there’s no url, or…
  !node.url || // If there’s whitespace, enclosed is prettier.
  /[ \t\r\n]/.test(node.url)) {
    subexit = context.enter('destinationLiteral');
    value += '<' + $hCI8$exports(context, node.url, {
      before: '<',
      after: '>'
    }) + '>';
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw');
    value += $hCI8$exports(context, node.url, {
      before: ' ',
      after: ' '
    });
  }

  subexit();

  if (node.title) {
    subexit = context.enter('title' + suffix);
    value += ' ' + marker + $hCI8$exports(context, node.title, {
      before: marker,
      after: marker
    }) + marker;
    subexit();
  }

  exit();
  return value;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-emphasis.js
var $FMxS$exports = {};
$FMxS$exports = $FMxS$var$checkEmphasis;

function $FMxS$var$checkEmphasis(context) {
  var marker = context.options.emphasis || '*';

  if (marker !== '*' && marker !== '_') {
    throw new Error('Cannot serialize emphasis with `' + marker + '` for `options.emphasis`, expected `*`, or `_`');
  }

  return marker;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/emphasis.js
var $ovgR$exports = {};
$ovgR$exports = $ovgR$var$emphasis;
$ovgR$var$emphasis.peek = $ovgR$var$emphasisPeek;

// To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?
function $ovgR$var$emphasis(node, _, context) {
  var marker = $FMxS$exports(context);
  var exit = context.enter('emphasis');
  var value = $bjW5$exports(node, context, {
    before: marker,
    after: marker
  });
  exit();
  return marker + value + marker;
}

function $ovgR$var$emphasisPeek(node, _, context) {
  return context.options.emphasis || '*';
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/format-heading-as-setext.js
var $iV2Z$exports = {};
$iV2Z$exports = $iV2Z$var$formatHeadingAsSetext;

function $iV2Z$var$formatHeadingAsSetext(node, context) {
  return context.options.setext && (!node.depth || node.depth < 3) && $DRco$exports(node);
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/heading.js
var $YhCP$exports = {};
$YhCP$exports = $YhCP$var$heading;

function $YhCP$var$heading(node, _, context) {
  var rank = Math.max(Math.min(6, node.depth || 1), 1);
  var exit;
  var subexit;
  var value;
  var sequence;

  if ($iV2Z$exports(node, context)) {
    exit = context.enter('headingSetext');
    subexit = context.enter('phrasing');
    value = $bjW5$exports(node, context, {
      before: '\n',
      after: '\n'
    });
    subexit();
    exit();
    return value + '\n' + $k2Qo$exports(rank === 1 ? '=' : '-', // The whole size…
    value.length - (Math.max(value.lastIndexOf('\r'), value.lastIndexOf('\n')) + 1));
  }

  sequence = $k2Qo$exports('#', rank);
  exit = context.enter('headingAtx');
  subexit = context.enter('phrasing');
  value = $bjW5$exports(node, context, {
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

// ASSET: ../../../mdast-util-to-markdown/lib/handle/html.js
var $N0J8$exports = {};
$N0J8$exports = $N0J8$var$html;
$N0J8$var$html.peek = $N0J8$var$htmlPeek;

function $N0J8$var$html(node) {
  return node.value || '';
}

function $N0J8$var$htmlPeek() {
  return '<';
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/image.js
var $r3wN$exports = {};
$r3wN$exports = $r3wN$var$image;
$r3wN$var$image.peek = $r3wN$var$imagePeek;

function $r3wN$var$image(node, _, context) {
  var quote = $VIp3$exports(context);
  var suffix = quote === '"' ? 'Quote' : 'Apostrophe';
  var exit = context.enter('image');
  var subexit = context.enter('label');
  var value = '![' + $hCI8$exports(context, node.alt, {
    before: '[',
    after: ']'
  }) + '](';
  subexit();

  if ( // If there’s no url but there is a title…
  !node.url && node.title || // Or if there’s markdown whitespace or an eol, enclose.
  /[ \t\r\n]/.test(node.url)) {
    subexit = context.enter('destinationLiteral');
    value += '<' + $hCI8$exports(context, node.url, {
      before: '<',
      after: '>'
    }) + '>';
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw');
    value += $hCI8$exports(context, node.url, {
      before: '(',
      after: node.title ? ' ' : ')'
    });
  }

  subexit();

  if (node.title) {
    subexit = context.enter('title' + suffix);
    value += ' ' + quote + $hCI8$exports(context, node.title, {
      before: quote,
      after: quote
    }) + quote;
    subexit();
  }

  value += ')';
  exit();
  return value;
}

function $r3wN$var$imagePeek() {
  return '!';
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/image-reference.js
var $jouf$exports = {};
$jouf$exports = $jouf$var$imageReference;
$jouf$var$imageReference.peek = $jouf$var$imageReferencePeek;

function $jouf$var$imageReference(node, _, context) {
  var type = node.referenceType;
  var exit = context.enter('imageReference');
  var subexit = context.enter('label');
  var alt = $hCI8$exports(context, node.alt, {
    before: '[',
    after: ']'
  });
  var value = '![' + alt + ']';
  var reference;
  var stack;
  subexit(); // Hide the fact that we’re in phrasing, because escapes don’t work.

  stack = context.stack;
  context.stack = [];
  subexit = context.enter('reference');
  reference = $hCI8$exports(context, $nh8P$exports(node), {
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

function $jouf$var$imageReferencePeek() {
  return '!';
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/format-link-as-autolink.js
var $A7YD$exports = {};
$A7YD$exports = $A7YD$var$formatLinkAsAutolink;

function $A7YD$var$formatLinkAsAutolink(node, context) {
  var raw = $DRco$exports(node);
  return !context.options.resourceLink && // If there’s a url…
  node.url && // And there’s a no title…
  !node.title && // And the content of `node` is a single text node…
  node.children && node.children.length === 1 && node.children[0].type === 'text' && (raw === node.url || 'mailto:' + raw === node.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(node.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work) or angle brackets…
  !/[\0- <>\u007F]/.test(node.url);
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/link.js
var $RJyx$exports = {};
$RJyx$exports = $RJyx$var$link;
$RJyx$var$link.peek = $RJyx$var$linkPeek;

function $RJyx$var$link(node, _, context) {
  var quote = $VIp3$exports(context);
  var suffix = quote === '"' ? 'Quote' : 'Apostrophe';
  var exit;
  var subexit;
  var value;
  var stack;

  if ($A7YD$exports(node, context)) {
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    stack = context.stack;
    context.stack = [];
    exit = context.enter('autolink');
    value = '<' + $bjW5$exports(node, context, {
      before: '<',
      after: '>'
    }) + '>';
    exit();
    context.stack = stack;
    return value;
  }

  exit = context.enter('link');
  subexit = context.enter('label');
  value = '[' + $bjW5$exports(node, context, {
    before: '[',
    after: ']'
  }) + '](';
  subexit();

  if ( // If there’s no url but there is a title…
  !node.url && node.title || // Or if there’s markdown whitespace or an eol, enclose.
  /[ \t\r\n]/.test(node.url)) {
    subexit = context.enter('destinationLiteral');
    value += '<' + $hCI8$exports(context, node.url, {
      before: '<',
      after: '>'
    }) + '>';
  } else {
    // No whitespace, raw is prettier.
    subexit = context.enter('destinationRaw');
    value += $hCI8$exports(context, node.url, {
      before: '(',
      after: node.title ? ' ' : ')'
    });
  }

  subexit();

  if (node.title) {
    subexit = context.enter('title' + suffix);
    value += ' ' + quote + $hCI8$exports(context, node.title, {
      before: quote,
      after: quote
    }) + quote;
    subexit();
  }

  value += ')';
  exit();
  return value;
}

function $RJyx$var$linkPeek(node, _, context) {
  return $A7YD$exports(node, context) ? '<' : '[';
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/link-reference.js
var $cpag$exports = {};
$cpag$exports = $cpag$var$linkReference;
$cpag$var$linkReference.peek = $cpag$var$linkReferencePeek;

function $cpag$var$linkReference(node, _, context) {
  var type = node.referenceType;
  var exit = context.enter('linkReference');
  var subexit = context.enter('label');
  var text = $bjW5$exports(node, context, {
    before: '[',
    after: ']'
  });
  var value = '[' + text + ']';
  var reference;
  var stack;
  subexit(); // Hide the fact that we’re in phrasing, because escapes don’t work.

  stack = context.stack;
  context.stack = [];
  subexit = context.enter('reference');
  reference = $hCI8$exports(context, $nh8P$exports(node), {
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

function $cpag$var$linkReferencePeek() {
  return '[';
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/list.js
var $tcsE$exports = {};
$tcsE$exports = $tcsE$var$list;

function $tcsE$var$list(node, _, context) {
  var exit = context.enter('list');
  var value = $UtAL$exports(node, context);
  exit();
  return value;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/paragraph.js
var $JqYW$exports = {};
$JqYW$exports = $JqYW$var$paragraph;

function $JqYW$var$paragraph(node, _, context) {
  var exit = context.enter('paragraph');
  var subexit = context.enter('phrasing');
  var value = $bjW5$exports(node, context, {
    before: '\n',
    after: '\n'
  });
  subexit();
  exit();
  return value;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/root.js
var $RDrX$exports = {};
$RDrX$exports = $RDrX$var$root;

function $RDrX$var$root(node, _, context) {
  return $UtAL$exports(node, context);
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-strong.js
var $RAkd$exports = {};
$RAkd$exports = $RAkd$var$checkStrong;

function $RAkd$var$checkStrong(context) {
  var marker = context.options.strong || '*';

  if (marker !== '*' && marker !== '_') {
    throw new Error('Cannot serialize strong with `' + marker + '` for `options.strong`, expected `*`, or `_`');
  }

  return marker;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/strong.js
var $G97W$exports = {};
$G97W$exports = $G97W$var$strong;
$G97W$var$strong.peek = $G97W$var$strongPeek;

// To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?
function $G97W$var$strong(node, _, context) {
  var marker = $RAkd$exports(context);
  var exit = context.enter('strong');
  var value = $bjW5$exports(node, context, {
    before: marker,
    after: marker
  });
  exit();
  return marker + marker + value + marker + marker;
}

function $G97W$var$strongPeek(node, _, context) {
  return context.options.strong || '*';
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/text.js
var $ep8N$exports = {};
$ep8N$exports = $ep8N$var$text;

function $ep8N$var$text(node, parent, context, safeOptions) {
  return $hCI8$exports(context, node.value, safeOptions);
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-rule-repeat.js
var $cfeg$exports = {};
$cfeg$exports = $cfeg$var$checkRule;

function $cfeg$var$checkRule(context) {
  var repetition = context.options.ruleRepetition || 3;

  if (repetition < 3) {
    throw new Error('Cannot serialize rules with repetition `' + repetition + '` for `options.ruleRepetition`, expected `3` or more');
  }

  return repetition;
}

// ASSET: ../../../mdast-util-to-markdown/lib/util/check-rule.js
var $yUUA$exports = {};
$yUUA$exports = $yUUA$var$checkRule;

function $yUUA$var$checkRule(context) {
  var marker = context.options.rule || '*';

  if (marker !== '*' && marker !== '-' && marker !== '_') {
    throw new Error('Cannot serialize rules with `' + marker + '` for `options.rule`, expected `*`, `-`, or `_`');
  }

  return marker;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/thematic-break.js
var $pBG6$exports = {};
$pBG6$exports = $pBG6$var$thematicBreak;

function $pBG6$var$thematicBreak(node, parent, context) {
  var value = $k2Qo$exports($yUUA$exports(context) + (context.options.ruleSpaces ? ' ' : ''), $cfeg$exports(context));
  return context.options.ruleSpaces ? value.slice(0, -1) : value;
}

// ASSET: ../../../mdast-util-to-markdown/lib/handle/index.js
var $NxO5$exports = {};
$NxO5$exports.blockquote = $AORw$exports;
$NxO5$exports.break = $hiJF$exports;
$NxO5$exports.code = $FoF0$exports;
$NxO5$exports.definition = $N15W$exports;
$NxO5$exports.emphasis = $ovgR$exports;
$NxO5$exports.hardBreak = $hiJF$exports;
$NxO5$exports.heading = $YhCP$exports;
$NxO5$exports.html = $N0J8$exports;
$NxO5$exports.image = $r3wN$exports;
$NxO5$exports.imageReference = $jouf$exports;
$NxO5$exports.inlineCode = $dy9Q$exports;
$NxO5$exports.link = $RJyx$exports;
$NxO5$exports.linkReference = $cpag$exports;
$NxO5$exports.list = $tcsE$exports;
$NxO5$exports.listItem = $AhBl$exports;
$NxO5$exports.paragraph = $JqYW$exports;
$NxO5$exports.root = $RDrX$exports;
$NxO5$exports.strong = $G97W$exports;
$NxO5$exports.text = $ep8N$exports;
$NxO5$exports.thematicBreak = $pBG6$exports;
// ASSET: ../../../mdast-util-to-markdown/lib/join.js
var $ba4B$exports = {};
$ba4B$exports = [$ba4B$var$joinDefaults];

function $ba4B$var$joinDefaults(left, right, parent, context) {
  if ( // Two lists with the same marker.
  right.type === 'list' && right.type === left.type && Boolean(left.ordered) === Boolean(right.ordered) || right.type === 'code' && $UK2E$exports(right, context) && (left.type === 'list' || left.type === right.type && $UK2E$exports(left, context))) {
    return false;
  } // Join children of a list or an item.
  // In which case, `parent` has a `spread` field.


  if (typeof parent.spread === 'boolean') {
    if (left.type === 'paragraph' && (left.type === right.type || right.type === 'definition' || right.type === 'heading' && $iV2Z$exports(right, context))) {
      return;
    }

    return parent.spread ? 1 : 0;
  }
}

// ASSET: ../../../mdast-util-to-markdown/lib/unsafe.js
var $QvnC$exports = {};
$QvnC$exports = [{
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
// ASSET: ../../../mdast-util-to-markdown/lib/index.js
var $px1R$exports = {};
$px1R$exports = $px1R$var$toMarkdown;

function $px1R$var$toMarkdown(tree, options) {
  var settings = options || {};
  var context = {
    enter: enter,
    stack: [],
    unsafe: [],
    join: [],
    handlers: {},
    options: {}
  };
  var result;
  $Ppel$exports(context, {
    unsafe: $QvnC$exports,
    join: $ba4B$exports,
    handlers: $NxO5$exports
  });
  $Ppel$exports(context, settings);

  if (context.options.tightDefinitions) {
    context.join = [$px1R$var$joinDefinition].concat(context.join);
  }

  context.handle = $nGVJ$exports('type', {
    invalid: $px1R$var$invalid,
    unknown: $px1R$var$unknown,
    handlers: context.handlers
  });
  result = context.handle(tree, null, context, {
    before: '\n',
    after: '\n'
  });

  if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
    result += '\n';
  }

  return result;

  function enter(name) {
    context.stack.push(name);
    return exit;

    function exit() {
      context.stack.pop();
    }
  }
}

function $px1R$var$invalid(value) {
  throw new Error('Cannot handle value `' + value + '`, expected node');
}

function $px1R$var$unknown(node) {
  throw new Error('Cannot handle unknown node `' + node.type + '`');
}

function $px1R$var$joinDefinition(left, right) {
  // No blank line between adjacent definitions.
  if (left.type === 'definition' && left.type === right.type) {
    return 0;
  }
}

$za63$exports = $px1R$exports;
// ASSET: ../../../remark-stringify/index.js
var $hBaI$exports = {};
$hBaI$exports = $hBaI$var$stringify;

function $hBaI$var$stringify(options) {
  var self = this;
  this.Compiler = compile;

  function compile(tree) {
    return $za63$exports(tree, Object.assign({}, self.data('settings'), options, {
      // Note: this option is not in the readme.
      // The goal is for it to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self.data('toMarkdownExtensions') || []
    }));
  }
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
function $kH7o$export$toString(node, options) {
  var {
    includeImageAlt = true
  } = options || {};
  return $kH7o$var$one(node, includeImageAlt);
}
/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */


function $kH7o$var$one(node, includeImageAlt) {
  return node && typeof node === 'object' && (node.value || (includeImageAlt ? node.alt : '') || 'children' in node && $kH7o$var$all(node.children, includeImageAlt) || Array.isArray(node) && $kH7o$var$all(node, includeImageAlt)) || '';
}
/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */


function $kH7o$var$all(values, includeImageAlt) {
  /** @type {Array.<string>} */
  var result = [];
  var index = -1;

  while (++index < values.length) {
    result[index] = $kH7o$var$one(values[index], includeImageAlt);
  }

  return result.join('');
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
    const value = $kH7o$export$toString(node, {
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
  var $Pdu0$$interop$default = $parcel$interopDefault($Pdu0$exports);
  var $Egyt$$interop$default = $parcel$interopDefault($Egyt$exports);
  var $hBaI$$interop$default = $parcel$interopDefault($hBaI$exports);
  return $daLJ$export$unified().use($Pdu0$$interop$default.d).use($Egyt$$interop$default.d).use($dEww$export$default).use($Rxbc$export$default(markdownFormatterOptions.watermark)).use($hBaI$$interop$default.d, stringifyOptions).process(sourceString);
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