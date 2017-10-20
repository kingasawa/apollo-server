import { models } from './connectors';

const { author } = models;

const resolvers = {
  Query: {
    author(_, args) {
      console.log('Author get args', args);
      return author.find({ where: args });
    },
    getFortuneCookie() {
      return {  };
        // return FortuneCookie.getOne();
    }
  },
  Mutation: {
    createAuthor(_, args) {
      console.log('Author create args', args);
      return author.create(args);
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    views(post) {
      return 1;
      // return View.findOne({ postId: post.id })
      //        .then((view) => view.views);
    },
  },
};

export default resolvers;