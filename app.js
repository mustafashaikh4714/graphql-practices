import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Comment from './resolvers/Comment'
import Mutation from './resolvers/Mutation'
import Post from './resolvers/Post'
import Query from './resolvers/Query'
import User from './resolvers/User'

const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Comment,
}
const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: { db },
})
server.start(() => {
  console.log('Server Listening on port 4000.')
})
