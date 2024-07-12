import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/DashboardView.vue';
import Tickets from './views/Tickets.vue';
import NewTicket from './views/NewTicketView.vue';
import Projects from './views/ProjectsView.vue';
import Users from './views/UsersView.vue';
import Login from './views/LoginView.vue'; // Renombrado para asegurar un nombre multi-palabra
import MainLayout from './layouts/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'tickets', component: Tickets },
      { path: 'new-ticket', component: NewTicket },
      { path: 'projects', component: Projects },
      { path: 'users', component: Users },
    ],
  },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
