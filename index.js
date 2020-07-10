const chalk  = require('chalk'),
      config = require('config'),
      moment = require('moment');
/** 
 * * Logging Levels: 
 * * -------------------------------- 
 * * DEBUG: error, warn, info, debug 
 * * INFO:  error, warn, info 
 * * WARN:  error, warn 
 * * ERROR: error 
 * */
const levels = {
    "DEBUG": ['ERROR', 'WARN', 'INFO', 'DEBUG'],
    "INFO" : ['ERROR', 'WARN', 'INFO'],
    "WARN" : ['ERROR', 'WARN'],
    "ERROR": ['ERROR']
};
let logLevel = config.has('server.logLevel') ? config.get('server.logLevel') : "DEBUG";
module.exports = {
    init:function(logLvl = 'DEBUG'){
        logLevel = logLvl;
    },
    log: function () { 
        Array.prototype.unshift.call(arguments, chalk.white('[' + moment().format("YYYY-MM-DD HH:mm:ss") + '] log:')); 
        console.log.apply(this, arguments); 
    }, 
    info: function () { 
        if (levels[logLevel].indexOf("INFO") > -1) { 
            Array.prototype.unshift.call(arguments, chalk.green('[' + moment().format("YYYY-MM-DD HH:mm:ss") + '] info:')); 
            console.log.apply(this, arguments); 
        } 
    }, 
    debug: function () { 
        if (levels[logLevel].indexOf("DEBUG") > -1) { 
            Array.prototype.unshift.call(arguments, chalk.blue('[' + moment().format("YYYY-MM-DD HH:mm:ss") + '] debug:')); 
            console.log.apply(this, arguments); 
        } 
    }, 
    warn: function () { 
        if (levels[logLevel].indexOf("WARN") > -1) { 
            Array.prototype.unshift.call(arguments, chalk.yellow('[' + moment().format("YYYY-MM-DD HH:mm:ss") + '] warn:')); 
            console.log.apply(this, arguments); 
        } 
    }, 
    error: function () { 
        if (levels[logLevel].indexOf("ERROR") > -1) { 
            Array.prototype.unshift.call(arguments, chalk.red('[' + moment().format("YYYY-MM-DD HH:mm:ss") + '] error:')); 
            console.log.apply(this, arguments); 
        } 
    }
}

