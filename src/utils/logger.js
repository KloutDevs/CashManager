const winston = require('winston');
const a_colors = require('ansi-colors');

const error = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => a_colors.bgRed('ERROR') + ` ${log.message}`)
});

const info = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => a_colors.bgGreen('INFO') + ` ${log.message}`)
});

const warn = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => a_colors.bgYellow('WARNING') + ` ${log.message}`)
});

const debug = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => a_colors.bgCyan('DEBUG') + ` ${log.message}`)
});

const database = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => a_colors.bgMagenta('DATABASE') + ` ${log.message}`)
});

const custom = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => log.message)
});

module.exports = {
  logger: async function (level, argument) {
    if (level == 'info') {
      try {
        info.log('info', argument);
        return true;
      } catch (e) {
        console.error(e);
      }
    } else if (level == 'warn') {
      try {
        warn.log('info', argument);
        return true;
      } catch (e) {
        console.error(e);
      }
    } else if (level == 'debug') {
      try {
        debug.log('info', argument);
        return true;
      } catch (e) {
        console.error(e);
      }
    } else if (level == 'error') {
      try {
        error.log('info', argument);
        return true;
      } catch (e) {
        console.error(e);
      }
    } else if (level == 'database') {
      try {
        database.log('info', argument);
        return true;
      } catch (e) {
        console.error(e);
      }
    } else if (level == 'custom') {
      try {
        custom.log('info', argument);
        return true;
      } catch (e) {
        console.error(e);
      }
    }
  }
};