module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
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
      tableName: 'skills',
      timestamps: false
    });
    
    return Skill;
  };
