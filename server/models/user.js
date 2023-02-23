module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      userId: { type: DataTypes.INTEGER, primaryKey: true },
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};
