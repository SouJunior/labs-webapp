// import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/main.scss';

const savedTheme = localStorage.getItem('theme') || 'dark';

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'myTheme',
		themes: {
			myTheme: {
				dark: savedTheme == 'light' ? false : true,
				colors: {
					primary: '#62d4a4',
					background: "#121212",
				}
			}
		},
	}
});

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
