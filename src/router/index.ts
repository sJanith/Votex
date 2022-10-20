import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Dashboard/index.vue";
import TaskDashboard from "../components/Task/index.vue";
import AddTask from '../components/Task/AddTask/index.vue'
import EditTask from '../components/Task/EditTask/index.vue'
import Reprots from '../components/Reports/index.vue'
import Charts from '../components/Charts/Chart.vue'
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
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
  {
    path: "/taskdashboard/add",
    name: "Create Task",
    component: AddTask,
  },

  {
    path: "/taskdashboard/edit/:id",
    name: "Edit Task",
    component: EditTask,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes, //same --- > routes:routes
});
export default router;
