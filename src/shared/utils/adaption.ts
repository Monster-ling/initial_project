import { throttle } from 'lodash-es';

const MAX_PAGE_WIDTH = 500;

function checkSimpleFit() {
  const { documentElement } = window.document;
  if (documentElement.clientWidth > MAX_PAGE_WIDTH) {
    documentElement.classList.add('simple_fit');
  } else {
    documentElement.classList.remove('simple_fit');
  }
}
/**
 * 页面布局方式自适应逻辑
 */
export function pageAdaptation() {
  checkSimpleFit();
  window.addEventListener('resize', throttle(() => checkSimpleFit(), 200));
}
