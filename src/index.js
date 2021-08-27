exports.__esModule = true;
exports.Logger = exports.LogType = void 0;
var LogType;
(function (LogType) {
    LogType[LogType["Info"] = 0] = "Info";
    LogType[LogType["Debug"] = 1] = "Debug";
    LogType[LogType["Error"] = 2] = "Error";
    LogType[LogType["CriticalError"] = 3] = "CriticalError";
})(LogType = exports.LogType || (exports.LogType = {}));
var LogAnsi = [
    "\033[33m ",
    "\033[32m ",
    "\033[31;1m ",
    "\033[31m ",
    "\033[0m ",
];
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.trace = function (error) {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function (_, stack) { return stack; };
        var err = new Error();
        Error.captureStackTrace(err, arguments.callee);
        var calle = err.stack[2];
        Error.prepareStackTrace = orig;
        this.Log(calle.getFileName() + ":" + calle.getLineNumber() + ": " + error + "\n", LogType.Error);
    };
    Logger.Log = function (msg, type) {
        console.log(LogAnsi[type] + msg + LogAnsi[4]);
    };
    Logger.L = function (msg, type) {
        this.Log(msg, type);
    };
    Logger.D = function (msg) {
        this.Log(msg, LogType.Debug);
    };
    Logger.Debug = function (msg) {
        this.Log(msg, LogType.Debug);
    };
    Logger.Err = function (msg) {
        this.trace(msg);
    };
    return Logger;
}());
exports.Logger = Logger;
