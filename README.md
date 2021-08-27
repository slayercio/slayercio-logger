# Slayercio Logger

Simple zero-dependent logger for use in JavaScript / TypeScript projects.

Error and Critical methods provide stack tree logging.

## Usage

1. Import lib

   ```javascript
   //JavaScript
   const { Logger, LogType } = require("slayercio-logger");
   //TypeScript
   import { Logger, LogType } from "slayercio-logger";
   ```

2. Simple Log

   ```javascript
    Logger.Log(msg: string, type: LogType);
    // or
    Logger.L(msg: string, type: LogType);
   ```

3. Debug
   ```javascript
    Logger.Debug(msg: string);
    // or
    Logger.D(msg: string);
   ```
4. Error
   ```javascript
    Logger.Error(msg: string);
    // or
    Logger.E(msg: string);
   ```
5. Critical Error
   ```javascript
   Logger.Critical(msg: string);
   // or
   Logger.C(msg: string);
   ```
