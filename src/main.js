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
import VueGtag from "vue-gtag";

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
					primary: '#62D4A4',
                    background: "#212121",
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
	
app.use(VueGtag, {
    config: { id: "G-5F4LFMZQK6" }
});

app.mount('#app');
