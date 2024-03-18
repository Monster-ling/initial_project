/**
 * 限制文本的字符个数，超长打点
 * @param text 原文本
 * @param maxLength 超长阈值
 */
export const ellipsis = (text: string, maxLength: number, {
  /** 超长时在结尾处添加的符号 */
  symbol = '…',
  /** 超长时额外去掉一个结尾字符以避免添加打点符号时超长 */
  keepWidth = true,
} = {}) => {
  if (text.length <= maxLength) {
    return text;
  }
  const end = keepWidth ? maxLength - 1 : maxLength;
  return `${text.slice(0, end)}${symbol}`;
};

/**
 * 获取随机字符串
 */
export function getRandomString(digit = 8) {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const maxPos = chars.length;
  let str = '';
  for (let i = 0; i < digit; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}

/**
 * 获取带有括号的错误码字符串
 */
export function getCodeMsg(code?: number) {
  return code !== undefined ? `(${code})` : '';
}
