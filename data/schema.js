import {
  makeExecutableSchema,
} from 'graphql-tools';

import resolvers from './resolvers';

import { readFileSync } from 'fs';

const typeDefs = readFileSync(__dirname + '/typeDefs.graphqls', 'utf8');

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
