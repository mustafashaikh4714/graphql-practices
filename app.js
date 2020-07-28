import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Comment from './resolvers/Comment'
import Mutation from './resolvers/Mutation'
import Post from './resolvers/Post'
import Query from './resolvers/Query'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User'

const pubsub = new PubSub()
const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Comment,
  Subscription,
}
const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: { db, pubsub },
})
server.start(() => {
  console.log('Server Listening on port 4000.')
})
