export const URLParams = new URLSearchParams(window.location.search);

export function removeHttp(str: string): string {
  return str ? str?.replace?.(/^http(s?):/, '') : '';
}
