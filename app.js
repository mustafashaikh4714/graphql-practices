import { GraphQLServer } from 'graphql-yoga'

const users = [
  {
    id: 1,
    name: 'Mustafa',
  },
  {
    id: 2,
    name: 'Niraj',
    age: 21,
  },
  {
    id: 3,
    name: 'Rahul',
    age: 21,
  },
]
const posts = [
  {
    id: '32542345',
    title: 'First Post',
    body: '',
    published: false,
    author: 1,
  },
  {
    id: '12542345',
    title: 'Second Post',
    body: '',
    published: false,
    author: 3,
  },
  {
    id: '87542345',
    title: 'Third Post',
    body: '',
    published: false,
    author: 1,
  },
]
const comments = [
  {
    id: 101,
    text: 'Nice post',
    author: 1,
    post: '32542345',
  },
  {
    id: 102,
    text: 'Keep posting stuff',
    author: 1,
    post: '32542345',
  },
  {
    id: 103,
    text: 'Good post',
    author: 2,
    post: '12542345',
  },
  {
    id: 104,
    text: 'I like your posts!',
    author: 3,
    post: '12542345',
  },
]

const typeDefs = `
  type Query {
    users(query: String): [User!]! 
    me: User!
    posts: [Post!]! 
    comments: [Comment!]!
  }
  type User {
    id: ID!
    name:String!
    age: Int
    posts: [Post!]! 
    comments: [Comment!]!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }
  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (args.query)
        return users.filter((user) =>
          user.name.toLowerCase().includes(args.query.toLowerCase())
        )

      return users
    },
    me() {
      return {
        id: '12345',
        name: 'Mustafa Shaikh',
        age: 21,
      }
    },

    posts() {
      return posts
    },
    comments() {
      return comments
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author)
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.post === parent.id)
    },
  },

  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => post.author === parent.id)
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.author === parent.id)
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author)
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => post.id === parent.post)
    },
  },
}
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => {
  console.log('Server Listening on port 4000.')
})
