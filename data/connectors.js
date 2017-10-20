// import Sequelize from 'sequelize';
// import casual from 'casual';
// import _ from 'lodash';
// import fetch from 'node-fetch';
import models from './../models';

// console.log('data', data);
// const db = new Sequelize('vcoin', 'postgres', null, {
//   port: 5435,
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },
//   // storage: './blog.sqlite',
// });
//
// const AuthorModel = db.define('author', {
//   firstName: { type: Sequelize.STRING },
//   lastName: { type: Sequelize.STRING },
// });
//
// const PostModel = db.define('post', {
//   title: { type: Sequelize.STRING },
//   text: { type: Sequelize.STRING },
// });
//
// AuthorModel.hasMany(PostModel);
// PostModel.belongsTo(AuthorModel);
//
// // create mock data with a seed, so we always get the same
// casual.seed(123);
// db.sync({ force: true }).then(() => {
//   _.times(10, () => {
//     return AuthorModel.create({
//       firstName: casual.first_name,
//       lastName: casual.last_name,
//     }).then((author) => {
//       return author.createPost({
//         title: `A post by ${author.firstName}`,
//         text: casual.sentences(3),
//       });
//     });
//   });
// });

// const Author = models.author;
// const Post = models.post;


// modify the mock data creation to also create some views:
// casual.seed(123);
// db.sync({ force: true }).then(() => {
//   _.times(10, () => {
//     return AuthorModel.create({
//       firstName: casual.first_name,
//       lastName: casual.last_name,
//     }).then((author) => {
//       return author.createPost({
//         title: `A post by ${author.firstName}`,
//         text: casual.sentences(3),
//       });
//         // .then((post) => { // <- the new part starts here
//         // create some View mocks
//         // return View.update(
//         //   { postId: post.id },
//         //   { views: casual.integer(0, 100) },
//         //   { upsert: true });
//       // });
//     });
//   });
// });

// add this somewhere in the middle
// const FortuneCookie = {
//   getOne() {
//     return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
//       .then(res => res.json())
//       .then(res => {
//         return res[0].fortune.message;
//       });
//   },
// };

export { models };
