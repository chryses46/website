module.exports = (sequelize, DataTypes) => {
    const Experience = sequelize.define('Experience', {
      uuid:{
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      company_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      company_location: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      work_location: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      
    }, {
      tableName: 'experiences',
      timestamps: false
    });
    
    Experience.associate = function(models) {
      Experience.hasMany(models.Duty, {
        foreignKey: 'exp_id',
        as: 'duties'
      });
    };

    return Experience;
  };
