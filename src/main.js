import { createApp } from "vue";
import App from "./App.vue";
import "../style.css";
import { createRouter, createWebHistory } from "vue-router";
import i18nPlugin from './plugins/i18n'
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        {
            path: "/:id",
            name: "movie",
            component: () => import("./pages/MovieDetailPage.vue"),
            props: (route) => ({ id: Number(route.params.id) }),
        },
    ],
})

const app = createApp(App);

app.use(i18nPlugin, {
    'Edit Movie': 'Редактировать фильм',
    'Add Movie': 'Добавить фильм',
})
app.use(router)

app.mount("#app");
