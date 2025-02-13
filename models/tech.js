module.exports = (sequelize, DataTypes) => {
    const Tech = sequelize.define('Tech', {
      uuid:{
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      years: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      
    }, {
      tableName: 'techs',
      timestamps: false
    });
    
    return Tech;
  };
