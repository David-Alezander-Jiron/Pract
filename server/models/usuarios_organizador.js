// server/models/usuarios_organizador.js
module.exports = (sequelize, DataTypes) => {
    const UsuariosOrganizador = sequelize.define('UsuariosOrganizador', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombres: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      telefono: {
        type: DataTypes.STRING(20)
      },
      rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return UsuariosOrganizador;
  };
  