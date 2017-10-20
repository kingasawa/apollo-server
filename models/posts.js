module.exports = (sequelize, DataTypes) => (
  sequelize.define('post', {
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
  }, {
    classMethods: {
      associate: ({ post, author }) => {
        post.belongsTo(author);
      },
    },
  })
);

