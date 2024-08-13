import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue'; // Importa el layout principal
import Dashboard from '@/views/DashboardView.vue';
import Evento from '@/views/Evento.vue';
import Projects from '@/views/ProjectsView.vue';
import Login from '@/views/register-login/LoginView.vue'; // Importa la vista de login
import RegisterNew from '@/views/register-login/Register.vue'; // Importa la vista de registro
import Error404 from '@/views/Pagina404.vue';
import Roles from '@/views/roles.vue';
import Evento_personal from '@/views/Eventos_personal.vue';

// Rutas de usuarios
import ListadoUsuarios from '@/views/ListadoUsuarios.vue'; // Lista de usuarios
import CrearUsuario from '@/components/usuario.components/crear.vue'; // Crear usuario
import EditarUsuario from '@/components/usuario.components/editar.vue'; // Editar usuario

// Rutas de personal
import CrearPersonal from '@/components/personal.components/crear.vue';
import EditarPersonal from '@/components/personal.components/editar.vue';
import ListarPersonal from '@/views/Personal.vue';

// Rutas de eventos
import ListarEventos from '@/views/Evento.vue';
import NewEvento from '@/components/evento.components/crear.vue';
import EditarEvento from '@/components/evento.components/editar.vue';
import OpcionesEventos from '@/components/evento.components/OpcionesEventos.vue'; // Importa OpcionesEventos

// Rutas de participantes
import ListarParticipante from '@/views/ListarParticipante.vue';
import CrearParticipante from '@/components/participante.components/crear.vue';
import EditarParticipante from '@/components/participante.components/editar.vue';

// Rutas de patrocinadores
import ListarPatrocinador from '@/views/ListarPatrocinador.vue';
import CrearPatrocinador from '@/components/patrocinador.components/crear.vue';
import EditarPatrocinador from '@/components/patrocinador.components/editar.vue';

// Rutas de tickets
import Tickets from '@/views/Tickets.vue';
import crearTicket from './components/ticket.components/crear.vue';
import editarTicket from './components/ticket.components/editar.vue';

// Rutas Gestión páginas
import PaginaGestion from '@/components/paginas.components/PaginaGestion.vue';
import PaginaEvento from '@/components/paginas.components/PaginaEvento.vue';

export const allowedRoutes = [
  '/', 
  '/evento', 
  '/projects', 
  '/roles', 
  '/usuarios', 
  '/usuarios/crear', 
  '/usuarios/editar/:id', 
  '/personal/crear', 
  '/personal/editar/:id', 
  '/personal', 
  '/eventos', 
  '/eventos/crear', 
  '/eventos/editar/:id', 
  '/eventos/opciones', 
  '/participantes', 
  '/participantes/crear', 
  '/participantes/editar/:id', 
  '/patrocinadores', 
  '/patrocinadores/crear', 
  '/patrocinadores/editar/:id', 
  '/tickets', 
  '/tickets/crear', 
  '/tickets/editar/:id', 
  '/pagina-gestion', 
  '/pagina/:id',
  '/eventospersonal'
];

const routes = [
  {
    path: '/',
    component: MainLayout, // Layout principal para las rutas principales
    children: [
      { path: '', component: Dashboard, meta: { requiresAuth: true } },
      { path: 'evento', component: Evento, meta: { requiresAuth: true } },
      { path: 'projects', component: Projects, meta: { requiresAuth: true } },
      { path: 'roles', component: Roles, meta: { requiresAuth: true } },

      // Rutas de usuarios
      { path: 'usuarios', component: ListadoUsuarios, meta: { requiresAuth: true } },
      { path: 'usuarios/crear', component: CrearUsuario, meta: { requiresAuth: true } },
      { path: 'usuarios/editar/:id', name: 'EditarUsuario', component: EditarUsuario, meta: { requiresAuth: true } },

      // Rutas de personal
      { path: 'personal/crear', component: CrearPersonal, meta: { requiresAuth: true } },
      { path: 'personal/editar/:id', name: 'EditarPersonal', component: EditarPersonal, meta: { requiresAuth: true } },
      { path: 'personal', component: ListarPersonal, meta: { requiresAuth: true } },
      { path: 'eventospersonal', component: Evento_personal, meta: { requiresAuth: true } },

      // Rutas de eventos
      { path: 'eventos', component: ListarEventos, meta: { requiresAuth: true } },
      { path: 'eventos/crear', component: NewEvento, meta: { requiresAuth: true } },
      { path: 'eventos/editar/:id', name: 'EditarEvento', component: EditarEvento, meta: { requiresAuth: true } },
      { path: 'eventos/opciones', component: OpcionesEventos, meta: { requiresAuth: true } }, // Cambiado aquí

      // Rutas de participantes
      { path: 'participantes', component: ListarParticipante, meta: { requiresAuth: true } },
      { path: 'participantes/crear', component: CrearParticipante, meta: { requiresAuth: true } },
      { path: 'participantes/editar/:id', name: 'EditarParticipante', component: EditarParticipante, meta: { requiresAuth: true } },

      // Rutas de patrocinadores
      { path: 'patrocinadores', component: ListarPatrocinador, meta: { requiresAuth: true } },
      { path: 'patrocinadores/crear', component: CrearPatrocinador, meta: { requiresAuth: true } },
      { path: 'patrocinadores/editar/:id', name: 'EditarPatrocinador', component: EditarPatrocinador, meta: { requiresAuth: true } },

      // Rutas de tickets
      { path: 'tickets', component: Tickets, meta: { requiresAuth: true } },
      { path: 'tickets/crear', component: crearTicket, meta: { requiresAuth: true } },
      { path: 'tickets/editar/:id', name: 'EditarTicket', component: editarTicket, meta: { requiresAuth: true } },

      // Gestión páginas
      { path: '/pagina-gestion', component: PaginaGestion, meta: { requiresAuth: true } },
      { path: '/pagina/:id', component: PaginaEvento, meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/login',
    component: Login, // Usa el componente de login para esta ruta
    meta: { layout: 'login' }
  },
  {
    path: '/register',
    component: RegisterNew // Usa el componente de registro para esta ruta
  },

  // Error 404
  {
    path: '/:pathMatch(.*)*',
    component: Error404,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // Verificar si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verificar si el usuario está autenticado
    const isAuthenticated = !!localStorage.getItem('authToken'); // Suponiendo que guardas el token en localStorage

    if (isAuthenticated) {
      next(); // Permitir el acceso si está autenticado
    } else {
      next('/login'); // Redirigir a la página de login si no está autenticado
    }
  } else {
    next(); // Permitir el acceso si la ruta no requiere autenticación
  }
});

export default router;
