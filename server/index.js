const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const morgan = require ('morgan');

// Configuración de la base de datos
const sequelize = new Sequelize('ticket1.0', 'root', '', {
  host: 'localhost',
  port:'',
  dialect: 'mysql',
  logging: false,
});

// Importar modelos
const Detalles = require('./models/detalles')(sequelize, Sequelize);
const Evento = require('./models/evento')(sequelize, Sequelize);
const EventoLocacion = require('./models/evento_locacion')(sequelize, Sequelize);
const EventoParticipantes = require('./models/evento_participantes')(sequelize, Sequelize);
const EventoPatrocinadores = require('./models/evento_patrocinadores')(sequelize, Sequelize);
const EventoPersonal = require('./models/evento_personal')(sequelize, Sequelize);
const EventoTickets = require('./models/evento_tickets')(sequelize, Sequelize);
const Locacion = require('./models/locacion')(sequelize, Sequelize);
const Pagina = require('./models/pagina')(sequelize, Sequelize);
const Participantes = require('./models/participantes')(sequelize, Sequelize);
const Patrocinadores = require('./models/patrocinadores')(sequelize, Sequelize);
const Personal = require('./models/personal')(sequelize, Sequelize);
const Roles = require('./models/roles')(sequelize, Sequelize);
const Tickets = require('./models/tickets')(sequelize, Sequelize);
const TipoEvento = require('./models/tipoevento')(sequelize, Sequelize);
const UbiPersonal = require('./models/ubi_personal')(sequelize, Sequelize);
const UsuariosOrganizador = require('./models/usuarios_organizador')(sequelize, Sequelize);

// Sincronizar modelos con la base de datos
sequelize.sync().then(() => {
  console.log('Modelos sincronizados con la base de datos.');
}).catch(err => {
  console.error('Error al sincronizar los modelos con la base de datos:', err);
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

//iniciar rol 
const initRoles = async () => {
  const roles = ['Administrador', 'Usuario'];
  for (const role of roles) {
    await Roles.findOrCreate({
      where: { nombre: role }
    });
  }
};
module.exports = initRoles;



// Rutas para Detalles
app.get('/detalles', async (req, res) => {
  const detalles = await Detalles.findAll();
  res.json(detalles);
});

app.post('/detalles', async (req, res) => {
  const nuevoDetalle = await Detalles.create(req.body);
  res.json(nuevoDetalle);
});

app.get('/detalles/:id', async (req, res) => {
  const detalle = await Detalles.findByPk(req.params.id);
  res.json(detalle);
});

app.put('/detalles/:id', async (req, res) => {
  const detalle = await Detalles.findByPk(req.params.id);
  if (detalle) {
    await detalle.update(req.body);
    res.json(detalle);
  } else {
    res.status(404).send('Detalle no encontrado');
  }
});

app.delete('/detalles/:id', async (req, res) => {
  const detalle = await Detalles.findByPk(req.params.id);
  if (detalle) {
    await detalle.destroy();
    res.json({ message: 'Detalle eliminado' });
  } else {
    res.status(404).send('Detalle no encontrado');
  }
});

// Rutas para Evento
app.get('/eventos', async (req, res) => {
  const eventos = await Evento.findAll();
  res.json(eventos);
});

app.post('/eventos', async (req, res) => {
  const nuevoEvento = await Evento.create(req.body);
  res.json(nuevoEvento);
});

app.get('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  res.json(evento);
});

app.put('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.update(req.body);
    res.json(evento);
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

app.delete('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.destroy();
    res.json({ message: 'Evento eliminado' });
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

// Rutas para EventoLocacion
app.get('/evento_locaciones', async (req, res) => {
  const eventoLocaciones = await EventoLocacion.findAll();
  res.json(eventoLocaciones);
});

app.post('/evento_locaciones', async (req, res) => {
  const nuevaEventoLocacion = await EventoLocacion.create(req.body);
  res.json(nuevaEventoLocacion);
});

app.get('/evento_locaciones/:id', async (req, res) => {
  const eventoLocacion = await EventoLocacion.findByPk(req.params.id);
  res.json(eventoLocacion);
});

app.put('/evento_locaciones/:id', async (req, res) => {
  const eventoLocacion = await EventoLocacion.findByPk(req.params.id);
  if (eventoLocacion) {
    await eventoLocacion.update(req.body);
    res.json(eventoLocacion);
  } else {
    res.status(404).send('Evento Locacion no encontrado');
  }
});

app.delete('/evento_locaciones/:id', async (req, res) => {
  const eventoLocacion = await EventoLocacion.findByPk(req.params.id);
  if (eventoLocacion) {
    await eventoLocacion.destroy();
    res.json({ message: 'Evento Locacion eliminado' });
  } else {
    res.status(404).send('Evento Locacion no encontrado');
  }
});

// Rutas para EventoParticipantes
app.get('/evento_participantes', async (req, res) => {
  const eventoParticipantes = await EventoParticipantes.findAll();
  res.json(eventoParticipantes);
});

app.post('/evento_participantes', async (req, res) => {
  const nuevoEventoParticipantes = await EventoParticipantes.create(req.body);
  res.json(nuevoEventoParticipantes);
});

app.get('/evento_participantes/:id', async (req, res) => {
  const eventoParticipantes = await EventoParticipantes.findByPk(req.params.id);
  res.json(eventoParticipantes);
});

app.put('/evento_participantes/:id', async (req, res) => {
  const eventoParticipantes = await EventoParticipantes.findByPk(req.params.id);
  if (eventoParticipantes) {
    await eventoParticipantes.update(req.body);
    res.json(eventoParticipantes);
  } else {
    res.status(404).send('Evento Participantes no encontrado');
  }
});

app.delete('/evento_participantes/:id', async (req, res) => {
  const eventoParticipantes = await EventoParticipantes.findByPk(req.params.id);
  if (eventoParticipantes) {
    await eventoParticipantes.destroy();
    res.json({ message: 'Evento Participantes eliminado' });
  } else {
    res.status(404).send('Evento Participantes no encontrado');
  }
});

// Rutas para EventoPatrocinadores
app.get('/evento_patrocinadores', async (req, res) => {
  const eventoPatrocinadores = await EventoPatrocinadores.findAll();
  res.json(eventoPatrocinadores);
});

app.post('/evento_patrocinadores', async (req, res) => {
  const nuevoEventoPatrocinadores = await EventoPatrocinadores.create(req.body);
  res.json(nuevoEventoPatrocinadores);
});

app.get('/evento_patrocinadores/:id', async (req, res) => {
  const eventoPatrocinadores = await EventoPatrocinadores.findByPk(req.params.id);
  res.json(eventoPatrocinadores);
});

app.put('/evento_patrocinadores/:id', async (req, res) => {
  const eventoPatrocinadores = await EventoPatrocinadores.findByPk(req.params.id);
  if (eventoPatrocinadores) {
    await eventoPatrocinadores.update(req.body);
    res.json(eventoPatrocinadores);
  } else {
    res.status(404).send('Evento Patrocinadores no encontrado');
  }
});

app.delete('/evento_patrocinadores/:id', async (req, res) => {
  const eventoPatrocinadores = await EventoPatrocinadores.findByPk(req.params.id);
  if (eventoPatrocinadores) {
    await eventoPatrocinadores.destroy();
    res.json({ message: 'Evento Patrocinadores eliminado' });
  } else {
    res.status(404).send('Evento Patrocinadores no encontrado');
  }
});

// Rutas para EventoPersonal
app.get('/evento_personal', async (req, res) => {
  const eventoPersonal = await EventoPersonal.findAll();
  res.json(eventoPersonal);
});

app.post('/evento_personal', async (req, res) => {
  const nuevoEventoPersonal = await EventoPersonal.create(req.body);
  res.json(nuevoEventoPersonal);
});

app.get('/evento_personal/:id', async (req, res) => {
  const eventoPersonal = await EventoPersonal.findByPk(req.params.id);
  res.json(eventoPersonal);
});

app.put('/evento_personal/:id', async (req, res) => {
  const eventoPersonal = await EventoPersonal.findByPk(req.params.id);
  if (eventoPersonal) {
    await eventoPersonal.update(req.body);
    res.json(eventoPersonal);
  } else {
    res.status(404).send('Evento Personal no encontrado');
  }
});

app.delete('/evento_personal/:id', async (req, res) => {
  const eventoPersonal = await EventoPersonal.findByPk(req.params.id);
  if (eventoPersonal) {
    await eventoPersonal.destroy();
    res.json({ message: 'Evento Personal eliminado' });
  } else {
    res.status(404).send('Evento Personal no encontrado');
  }
});

// Rutas para EventoTickets
app.get('/evento_tickets', async (req, res) => {
  const eventoTickets = await EventoTickets.findAll();
  res.json(eventoTickets);
});

app.post('/evento_tickets', async (req, res) => {
  const nuevoEventoTickets = await EventoTickets.create(req.body);
  res.json(nuevoEventoTickets);
});

app.get('/evento_tickets/:id', async (req, res) => {
  const eventoTickets = await EventoTickets.findByPk(req.params.id);
  res.json(eventoTickets);
});

app.put('/evento_tickets/:id', async (req, res) => {
  const eventoTickets = await EventoTickets.findByPk(req.params.id);
  if (eventoTickets) {
    await eventoTickets.update(req.body);
    res.json(eventoTickets);
  } else {
    res.status(404).send('Evento Tickets no encontrado');
  }
});

app.delete('/evento_tickets/:id', async (req, res) => {
  const eventoTickets = await EventoTickets.findByPk(req.params.id);
  if (eventoTickets) {
    await eventoTickets.destroy();
    res.json({ message: 'Evento Tickets eliminado' });
  } else {
    res.status(404).send('Evento Tickets no encontrado');
  }
});

// Rutas para Locacion
app.get('/locaciones', async (req, res) => {
  const locaciones = await Locacion.findAll();
  res.json(locaciones);
});

app.post('/locaciones', async (req, res) => {
  const nuevaLocacion = await Locacion.create(req.body);
  res.json(nuevaLocacion);
});

app.get('/locaciones/:id', async (req, res) => {
  const locacion = await Locacion.findByPk(req.params.id);
  res.json(locacion);
});

app.put('/locaciones/:id', async (req, res) => {
  const locacion = await Locacion.findByPk(req.params.id);
  if (locacion) {
    await locacion.update(req.body);
    res.json(locacion);
  } else {
    res.status(404).send('Locacion no encontrada');
  }
});

app.delete('/locaciones/:id', async (req, res) => {
  const locacion = await Locacion.findByPk(req.params.id);
  if (locacion) {
    await locacion.destroy();
    res.json({ message: 'Locacion eliminada' });
  } else {
    res.status(404).send('Locacion no encontrada');
  }
});

// Rutas para Pagina
app.get('/paginas', async (req, res) => {
  const paginas = await Pagina.findAll();
  res.json(paginas);
});

app.post('/paginas', async (req, res) => {
  const nuevaPagina = await Pagina.create(req.body);
  res.json(nuevaPagina);
});

app.get('/paginas/:id', async (req, res) => {
  const pagina = await Pagina.findByPk(req.params.id);
  res.json(pagina);
});

app.put('/paginas/:id', async (req, res) => {
  const pagina = await Pagina.findByPk(req.params.id);
  if (pagina) {
    await pagina.update(req.body);
    res.json(pagina);
  } else {
    res.status(404).send('Pagina no encontrada');
  }
});

app.delete('/paginas/:id', async (req, res) => {
  const pagina = await Pagina.findByPk(req.params.id);
  if (pagina) {
    await pagina.destroy();
    res.json({ message: 'Pagina eliminada' });
  } else {
    res.status(404).send('Pagina no encontrada');
  }
});

// Rutas para Participantes
app.get('/participantes', async (req, res) => {
  const participantes = await Participantes.findAll();
  res.json(participantes);
});

app.post('/participantes', async (req, res) => {
  const nuevoParticipante = await Participantes.create(req.body);
  res.json(nuevoParticipante);
});

app.get('/participantes/:id', async (req, res) => {
  const participante = await Participantes.findByPk(req.params.id);
  res.json(participante);
});

app.put('/participantes/:id', async (req, res) => {
  const participante = await Participantes.findByPk(req.params.id);
  if (participante) {
    await participante.update(req.body);
    res.json(participante);
  } else {
    res.status(404).send('Participante no encontrado');
  }
});

app.delete('/participantes/:id', async (req, res) => {
  const participante = await Participantes.findByPk(req.params.id);
  if (participante) {
    await participante.destroy();
    res.json({ message: 'Participante eliminado' });
  } else {
    res.status(404).send('Participante no encontrado');
  }
});

// Rutas para Patrocinadores
app.get('/patrocinadores', async (req, res) => {
  const patrocinadores = await Patrocinadores.findAll();
  res.json(patrocinadores);
});

app.post('/patrocinadores', async (req, res) => {
  const nuevoPatrocinador = await Patrocinadores.create(req.body);
  res.json(nuevoPatrocinador);
});

app.get('/patrocinadores/:id', async (req, res) => {
  const patrocinador = await Patrocinadores.findByPk(req.params.id);
  res.json(patrocinador);
});

app.put('/patrocinadores/:id', async (req, res) => {
  const patrocinador = await Patrocinadores.findByPk(req.params.id);
  if (patrocinador) {
    await patrocinador.update(req.body);
    res.json(patrocinador);
  } else {
    res.status(404).send('Patrocinador no encontrado');
  }
});

app.delete('/patrocinadores/:id', async (req, res) => {
  const patrocinador = await Patrocinadores.findByPk(req.params.id);
  if (patrocinador) {
    await patrocinador.destroy();
    res.json({ message: 'Patrocinador eliminado' });
  } else {
    res.status(404).send('Patrocinador no encontrado');
  }
});

// Rutas para Personal
app.get('/personal', async (req, res) => {
  const personal = await Personal.findAll();
  res.json(personal);
});

app.post('/personal', async (req, res) => {
  const nuevoPersonal = await Personal.create(req.body);
  res.json(nuevoPersonal);
});

app.get('/personal/:id', async (req, res) => {
  const personal = await Personal.findByPk(req.params.id);
  res.json(personal);
});

app.put('/personal/:id', async (req, res) => {
  const personal = await Personal.findByPk(req.params.id);
  if (personal) {
    await personal.update(req.body);
    res.json(personal);
  } else {
    res.status(404).send('Personal no encontrado');
  }
});

app.delete('/personal/:id', async (req, res) => {
  const personal = await Personal.findByPk(req.params.id);
  if (personal) {
    await personal.destroy();
    res.json({ message: 'Personal eliminado' });
  } else {
    res.status(404).send('Personal no encontrado');
  }
});

// Rutas para Roles
app.get('/roles', async (req, res) => {
  const roles = await Roles.findAll();
  res.json(roles);
});

app.post('/roles', async (req, res) => {
  const nuevoRol = await Roles.create(req.body);
  res.json(nuevoRol);
});

app.get('/roles/:id', async (req, res) => {
  const rol = await Roles.findByPk(req.params.id);
  res.json(rol);
});

app.put('/roles/:id', async (req, res) => {
  const rol = await Roles.findByPk(req.params.id);
  if (rol) {
    await rol.update(req.body);
    res.json(rol);
  } else {
    res.status(404).send('Rol no encontrado');
  }
});

app.delete('/roles/:id', async (req, res) => {
  const rol = await Roles.findByPk(req.params.id);
  if (rol) {
    await rol.destroy();
    res.json({ message: 'Rol eliminado' });
  } else {
    res.status(404).send('Rol no encontrado');
  }
});

// Rutas para Tickets
app.get('/tickets', async (req, res) => {
  const tickets = await Tickets.findAll();
  res.json(tickets);
});

app.post('/tickets', async (req, res) => {
  const nuevoTicket = await Tickets.create(req.body);
  res.json(nuevoTicket);
});

app.get('/tickets/:id', async (req, res) => {
  const ticket = await Tickets.findByPk(req.params.id);
  res.json(ticket);
});

app.put('/tickets/:id', async (req, res) => {
  const ticket = await Tickets.findByPk(req.params.id);
  if (ticket) {
    await ticket.update(req.body);
    res.json(ticket);
  } else {
    res.status(404).send('Ticket no encontrado');
  }
});

app.delete('/tickets/:id', async (req, res) => {
  const ticket = await Tickets.findByPk(req.params.id);
  if (ticket) {
    await ticket.destroy();
    res.json({ message: 'Ticket eliminado' });
  } else {
    res.status(404).send('Ticket no encontrado');
  }
});

// Rutas para TipoEvento
app.get('/tipoeventos', async (req, res) => {
  const tipoEventos = await TipoEvento.findAll();
  res.json(tipoEventos);
});

app.post('/tipoeventos', async (req, res) => {
  const nuevoTipoEvento = await TipoEvento.create(req.body);
  res.json(nuevoTipoEvento);
});

app.get('/tipoeventos/:id', async (req, res) => {
  const tipoEvento = await TipoEvento.findByPk(req.params.id);
  res.json(tipoEvento);
});

app.put('/tipoeventos/:id', async (req, res) => {
  const tipoEvento = await TipoEvento.findByPk(req.params.id);
  if (tipoEvento) {
    await tipoEvento.update(req.body);
    res.json(tipoEvento);
  } else {
    res.status(404).send('Tipo Evento no encontrado');
  }
});

app.delete('/tipoeventos/:id', async (req, res) => {
  const tipoEvento = await TipoEvento.findByPk(req.params.id);
  if (tipoEvento) {
    await tipoEvento.destroy();
    res.json({ message: 'Tipo Evento eliminado' });
  } else {
    res.status(404).send('Tipo Evento no encontrado');
  }
});

// Rutas para UbiPersonal
app.get('/ubi_personal', async (req, res) => {
  const ubiPersonal = await UbiPersonal.findAll();
  res.json(ubiPersonal);
});

app.post('/ubi_personal', async (req, res) => {
  const nuevoUbiPersonal = await UbiPersonal.create(req.body);
  res.json(nuevoUbiPersonal);
});

app.get('/ubi_personal/:id', async (req, res) => {
  const ubiPersonal = await UbiPersonal.findByPk(req.params.id);
  res.json(ubiPersonal);
});

app.put('/ubi_personal/:id', async (req, res) => {
  const ubiPersonal = await UbiPersonal.findByPk(req.params.id);
  if (ubiPersonal) {
    await ubiPersonal.update(req.body);
    res.json(ubiPersonal);
  } else {
    res.status(404).send('Ubi Personal no encontrado');
  }
});

app.delete('/ubi_personal/:id', async (req, res) => {
  const ubiPersonal = await UbiPersonal.findByPk(req.params.id);
  if (ubiPersonal) {
    await ubiPersonal.destroy();
    res.json({ message: 'Ubi Personal eliminado' });
  } else {
    res.status(404).send('Ubi Personal no encontrado');
  }
});

// Rutas para UsuariosOrganizador
app.get('/usuarios_organizador', async (req, res) => {
  const usuariosOrganizador = await UsuariosOrganizador.findAll();
  res.json(usuariosOrganizador);
});

app.post('/usuarios_organizador', async (req, res) => {
  const nuevoUsuariosOrganizador = await UsuariosOrganizador.create(req.body);
  res.json(nuevoUsuariosOrganizador);
});

app.get('/usuarios_organizador/:id', async (req, res) => {
  const usuariosOrganizador = await UsuariosOrganizador.findByPk(req.params.id);
  res.json(usuariosOrganizador);
});

app.put('/usuarios_organizador/:id', async (req, res) => {
  const usuariosOrganizador = await UsuariosOrganizador.findByPk(req.params.id);
  if (usuariosOrganizador) {
    await usuariosOrganizador.update(req.body);
    res.json(usuariosOrganizador);
  } else {
    res.status(404).send('Usuarios Organizador no encontrado');
  }
});

app.delete('/usuarios_organizador/:id', async (req, res) => {
  const usuariosOrganizador = await UsuariosOrganizador.findByPk(req.params.id);
  if (usuariosOrganizador) {
    await usuariosOrganizador.destroy();
    res.json({ message: 'Usuarios Organizador eliminado' });
  } else {
    res.status(404).send('Usuarios Organizador no encontrado');
  }
});

app.post('/login', async (req, res) => {
  const { correo, password } = req.body;
  try {
    const user = await UsuariosOrganizador.findOne({ where: { correo, password } });
    if (user) {
      res.json({ success: true, message: 'Login exitoso', user });
    } else {
      res.json({ success: false, message: 'Correo o contraseña incorrectos' });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});



const startServer = async () => {
  try {
    await sequelize.sync({ force: false }); // Sincroniza la base de datos
    await initRoles(); // Inicializa los roles
    app.listen(3000, () => {
      console.log('Servidor corriendo en puerto 3000');
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor:', error);
  }
};

startServer();

