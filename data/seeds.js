import casual from 'casual';
import _ from 'lodash';

module.exports = ({ sequelize, author }) => {
  sequelize.sync({ force: false }).then(() => {
    _.times(10, () => {
      return author.create({
        firstName: casual.first_name,
        lastName: casual.last_name,
      }).then((he) => {
        _.times(10, () => {
          return he.createPost({
            title: `A post by ${he.firstName}`,
            text: casual.sentences(3),
          });
        });
      });
    });
  });
};
