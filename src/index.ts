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
    this.LogE(
      `${(calle as any).getFileName()}:${(calle as any).getLineNumber()}: `,
      `${error}\n`
    );
  }
  private static tracec(error: string) {
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    const calle = err.stack[2];
    Error.prepareStackTrace = orig;
    this.LogCE(
      `${(calle as any).getFileName()}:${(calle as any).getLineNumber()}: `,
      `${error}\n`
    );
  }

  static Log(msg: string, type?: LogType): void {
    console.log(LogAnsi[type] + msg + LogAnsi[4]);
  }

  private static LogE(msg: string, error: string) {
    console.log(msg + LogAnsi[LogType.Error] + error + LogAnsi[4]);
  }
  private static LogCE(msg: string, error: string) {
    console.log(msg + LogAnsi[LogType.CriticalError] + error + LogAnsi[4]);
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
  static Error(msg: string) {
    this.trace(msg);
  }
  static E(msg: string) {
    this.Error(msg);
  }
  static Critical(msg: string) {
    this.tracec(msg);
  }
  static C(msg: string) {
    this.Critical(msg);
  }
}
