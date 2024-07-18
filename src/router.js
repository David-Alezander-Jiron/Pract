import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue'; // Importa el layout principal
import Dashboard from '@/views/DashboardView.vue';
import Tickets from '@/views/Tickets.vue';
import Evento from '@/views/Evento.vue';
import Projects from '@/views/ProjectsView.vue';
import UsersView from '@/views/UsersView.vue'; // Importa la vista de gestión de usuarios
import Login from '@/views/register-login/LoginView.vue'; // Importa la vista de login
import RegisterNew from '@/views/register-login/Register.vue'; // Importa la vista de registro
import Error404 from '@/views/Pagina404.vue';

const routes = [
  {
    path: '/',
    component: MainLayout, // Layout principal para las rutas principales
    children: [
      { path: '', component: Dashboard },
      { path: 'tickets', component: Tickets },
      { path: 'evento', component: Evento },
      { path: 'projects', component: Projects },
      { path: 'users', component: UsersView }, // Ruta para la gestión de usuarios

      // Otras rutas existentes...
    ]
  },
  {
    path: '/login',
    component: Login, // Usa el componente de login para esta ruta
    meta: { layout: 'login' } // Etiqueta para indicar el layout específico
  },
  {
    path: '/register',
    component: RegisterNew // Usa el componente de registro para esta ruta
  },

  // Ruta para el error 404
  {
    path: '/:pathMatch(.*)*',
    component: Error404,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

