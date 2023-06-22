import { createApp } from "vue";
import App from "./App.vue";
import "../style.css";
import i18nPlugin from './plugins/i18n'

const app = createApp(App);
app.mount("#app");

app.use(i18nPlugin, {
    'Edit Movie': 'Редактировать фильм',
    'Add Movie': 'Добавить фильм',
})
