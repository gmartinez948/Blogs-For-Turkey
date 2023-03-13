module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "post",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      authorId: { type: DataTypes.INTEGER }
      username: { type: DataTypes.STRING },
      title: { type: DataTypes.STRING },
      body: { type: DataTypes.STRING },
      likes: { type: DataTypes.INTEGER },
      updatedAt: { type: DataTypes.DATE },
      commentsEnabled: { type: DataTypes.BOOLEAN },
    },
    {
      freezeTableName: true,
    }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: "authorId",
    });
  };
  return Post;
};
