// server/models/evento.js
module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      capacidad_personas: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tipo_evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      organizador_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Evento;
  };
  