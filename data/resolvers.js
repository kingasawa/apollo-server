import { models  } from './connectors';

const { author } = models;

const resolvers = {
  Query: {
    author(_, args) {
      return author.find({ where: args });
    },
    getFortuneCookie() {
      return {  };
        // return FortuneCookie.getOne();
    }
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