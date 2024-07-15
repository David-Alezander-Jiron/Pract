import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue'; // Importa el layout principal
import Dashboard from '@/views/DashboardView.vue';
import Tickets from '@/views/Tickets.vue';
import Evento from '@/views/Evento.vue';
import Projects from '@/views/ProjectsView.vue';
import Users from '@/views/UsersView.vue';
import Login from '@/views/LoginView.vue'; // Importa la vista de login

// Rutas de personal
import CrearPersonal from '@/components/personal.components/crear.vue';
import EditarPersonal from '@/components/personal.components/editar.vue';
import ListarPersonal from '@/views/Personal.vue';

// Rutas de eventos
import ListarEventos from '@/views/Evento.vue';
import NewEvento from '@/components/evento.components/crear.vue';
import EditarEvento from '@/components/evento.components/editar.vue';

const routes = [
  {
    path: '/',
    component: MainLayout, // Layout principal para las rutas principales
    children: [
      { path: '', component: Dashboard },
      { path: 'tickets', component: Tickets },
      { path: 'evento', component: Evento },
      { path: 'projects', component: Projects },
      { path: 'users', component: Users },

      // Rutas de personal
      { path: '/personal/crear', component: CrearPersonal },
      { path: '/personal/editar/:id', name: 'EditarPersonal', component: EditarPersonal },
      { path: '/personal', component: ListarPersonal },

      // Rutas de eventos
      { path: '/eventos', component: ListarEventos },
      { path: '/eventos/crear', component: NewEvento },
      { path: '/eventos/editar/:id', name: 'EditarEvento', component: EditarEvento }
    ]
  },
  {
    path: '/login',
    component: Login, // Usa el componente de login para esta ruta
    meta: { layout: 'login' } // Etiqueta para indicar el layout específico
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
