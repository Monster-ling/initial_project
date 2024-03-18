import { context } from '@/shared/context';
import { LogLevel } from '@/shared/types';

const prefix = '[sku-jump]';

const reportLog = (...args: any[]) => {
  const logString = args.map(arg => ((typeof arg === 'string') ? arg : JSON.stringify(arg))).join(' ');
  window.$aegis?.report(logString);
};

export const logger = {
  debug(...args: any[]) {
    if (context.logLevel <= LogLevel.DEBUG) {
      console.debug(prefix, ...args);
    }
  },
  info(...args: any[]) {
    if (context.logLevel <= LogLevel.INFO) {
      console.info(prefix, ...args);
    }
  },
  infoAll(...args: any[]) {
    if (context.logLevel <= LogLevel.INFO) {
      console.log(prefix, ...args);
    }
    window.$aegis?.infoAll(...args);
  },
  warn(...args: any[]) {
    if (context.logLevel <= LogLevel.WARN) {
      console.warn(prefix, ...args);
    }
    reportLog('[warn]', ...args);
  },
  error(...args: any[]) {
    if (context.logLevel <= LogLevel.ERROR) {
      console.error(prefix, ...args);
    }
    reportLog('[error]', ...args);
  },
};
