import '@unocss/reset/tailwind.css';
import './styles/index.scss';

import { createApp } from 'vue';

import { createPinia } from 'pinia';

// import { registerReport } from '@/plugins';
import { pageAdaptation } from '@/shared/utils';

import App from './app.vue';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

pageAdaptation();
// registerReport(app);

app.mount('#app');
