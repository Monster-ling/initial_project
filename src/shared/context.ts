import { LogLevel } from '@/shared/types';

import { URLParams } from './utils/url';

export const context = {
  /** 页面 TAG */
  get ptag() {
    return URLParams.get('ptag') || '';
  },
  /** AID */
  get aid() {
    return decodeURIComponent(URLParams.get('aid') || '');
  },

  /** 是否为本地调试 */
  get isDev() {
    return import.meta.env.DEV && URLParams.get('debug') === 'dev';
  },
  /** 日志输出级别 */
  get logLevel() {
    const logLevel = URLParams.get('loglevel');
    if (!logLevel) {
      return import.meta.env.DEV ? LogLevel.DEBUG : LogLevel.WARN;
    }
    if (logLevel === 'debug') {
      return LogLevel.DEBUG;
    }
    return Number(logLevel);
  },
} as const;
