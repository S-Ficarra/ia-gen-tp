module.exports = (sequelize, DataTypes) => {
  const Counter = sequelize.define('Counter', {
    value: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  return Counter;
};