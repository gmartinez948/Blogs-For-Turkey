module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        authoIncrement: true,
      },
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: "authorId",
    });
  };
  return User;
};
