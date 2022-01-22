import { createWebHistory, createRouter } from "vue-router";
import Ground from "./components/views/Ground.vue"
import Home from "./components/views/Home.vue"
import Point from "./components/views/Point.vue"
import Affiliate from "./components/views/Affiliate.vue"
import Calendar from "./components/views/Calendar.vue"
import StudentCouncil from "./components/views/StudentCouncil.vue"


const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/Point", name: "Point", component: Point },
    { path: "/Affiliate", name: "Affiliate", component: Affiliate },
    { path: "/Calendar", name: "Calendar", component: Calendar },
    { path: "/StudentCouncil", name: "StudentCouncil", component: StudentCouncil },
    { path: "/Ground", name: "Ground", component: Ground },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;