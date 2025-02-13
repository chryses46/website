module.exports = (sequelize, DataTypes) => {
    const Accomplishment = sequelize.define('Accomplishment', {
      uuid:{
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      
    }, {
      tableName: 'accomplishments',
      timestamps: false
    });
    
    return Accomplishment;
  };
