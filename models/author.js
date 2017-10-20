module.exports = (sequelize, DataTypes) => (
  sequelize.define('author', {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
  }, {
    classMethods: {
      associate: ({ author, post }) => {
        author.hasMany(post);
      },
    },
  }));
