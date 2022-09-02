import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Dashboard/index.vue";
import TaskDashboard from "../components/Task/index.vue";
import AddTask from '../components/Task/AddTask/index.vue'
import Reprots from '../components/Reports/index.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/taskdashboard",
    name: "Task Dashboard",
    component: TaskDashboard,
  },

  {
    path: "/reports",
    name: "Reports",
    component: Reprots,
  },
  {
    path: "/taskdashboard/add",
    name: "Create Task",
    component: AddTask,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes, //same --- > routes:routes
});
export default router;
