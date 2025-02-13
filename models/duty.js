module.exports = (sequelize, DataTypes) => {
    const Duty = sequelize.define('Duty', {
      uuid:{
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      exp_id:{
        type: DataTypes.UUIDV4,
        allowNull: false
      },
      duty: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      
    }, {
      tableName: 'experience_duties',
      timestamps: false
    });
    
    Duty.associate = function(models) {
      Duty.belongsTo(models.Experience, {
        foreignKey: 'exp_id',
        as: 'experience'
      });
    };

    return Duty;
  };
