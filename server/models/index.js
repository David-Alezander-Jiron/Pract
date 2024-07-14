// server/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mi_base_de_datos', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};

// Importar modelos
db.Detalles = require('./detalles')(sequelize, DataTypes);
db.Evento = require('./evento')(sequelize, DataTypes);
db.EventoLocacion = require('./evento_locacion')(sequelize, DataTypes);
db.EventoParticipantes = require('./evento_participantes')(sequelize, DataTypes);
db.EventoPatrocinadores = require('./evento_patrocinadores')(sequelize, DataTypes);
db.EventoPersonal = require('./evento_personal')(sequelize, DataTypes);
db.EventoTickets = require('./evento_tickets')(sequelize, DataTypes);
db.Locacion = require('./locacion')(sequelize, DataTypes);
db.Pagina = require('./pagina')(sequelize, DataTypes);
db.Participantes = require('./participantes')(sequelize, DataTypes);
db.Patrocinadores = require('./patrocinadores')(sequelize, DataTypes);
db.Personal = require('./personal')(sequelize, DataTypes);
db.Roles = require('./roles')(sequelize, DataTypes);
db.Tickets = require('./tickets')(sequelize, DataTypes);
db.TipoEvento = require('./tipoevento')(sequelize, DataTypes);
db.UbiPersonal = require('./ubi_personal')(sequelize, DataTypes);
db.UsuariosOrganizador = require('./usuarios_organizador')(sequelize, DataTypes);

// Definir relaciones
db.Detalles.belongsTo(db.Evento, { foreignKey: 'evento_id' });
db.Evento.belongsTo(db.UsuariosOrganizador, { foreignKey: 'organizador_id' });
db.Evento.belongsTo(db.TipoEvento, { foreignKey: 'tipo_evento_id' });
db.EventoLocacion.belongsTo(db.Evento, { foreignKey: 'evento_id' });
db.EventoLocacion.belongsTo(db.Locacion, { foreignKey: 'locacion_id' });
db.EventoParticipantes.belongsTo(db.Evento, { foreignKey: 'evento_id' });
db.EventoParticipantes.belongsTo(db.Participantes, { foreignKey: 'participante_id' });
db.EventoPatrocinadores.belongsTo(db.Evento, { foreignKey: 'evento_id' });
db.EventoPatrocinadores.belongsTo(db.Patrocinadores, { foreignKey: 'patrocinador_id' });
db.EventoPersonal.belongsTo(db.Evento, { foreignKey: 'evento_id' });
db.EventoPersonal.belongsTo(db.Personal, { foreignKey: 'personal_id' });
db.EventoTickets.belongsTo(db.Evento, { foreignKey: 'evento_id' });
db.EventoTickets.belongsTo(db.Tickets, { foreignKey: 'ticket_id' });
db.Pagina.belongsTo(db.Evento, { foreignKey: 'evento_id' });
db.Tickets.belongsTo(db.Participantes, { foreignKey: 'participante_id' });
db.UbiPersonal.belongsTo(db.Locacion, { foreignKey: 'locacion_id' });
db.UbiPersonal.belongsTo(db.Personal, { foreignKey: 'personal_id' });
db.UsuariosOrganizador.belongsTo(db.Roles, { foreignKey: 'rol_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
