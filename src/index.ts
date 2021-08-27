export enum LogType {
  Info,
  Debug,
  Error,
  CriticalError,
}

const LogAnsi = [
  "\033[33m ",
  "\033[32m ",
  "\033[31;1m ",
  "\033[31m ",
  "\033[0m ",
];

export class Logger {
  private static trace(error: string) {
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    const calle = err.stack[2];
    Error.prepareStackTrace = orig;
    this.Log(
      `${(calle as any).getFileName()}:${(
        calle as any
      ).getLineNumber()}: ${error}\n`,
      LogType.Error
    );
  }

  static Log(msg: string, type?: LogType): void {
    console.log(LogAnsi[type] + msg + LogAnsi[4]);
  }

  static L(msg: string, type?: LogType): void {
    this.Log(msg, type);
  }
  static D(msg: string) {
    this.Log(msg, LogType.Debug);
  }
  static Debug(msg: string) {
    this.Log(msg, LogType.Debug);
  }
  static Err(msg: string) {
    this.trace(msg);
  }
}
