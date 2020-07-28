const Query = {
  users(parent, args, { db }, info) {
    if (args.query)
      return db.users.filter((user) =>
        user.name.toLowerCase().includes(args.query.toLowerCase())
      )

    return db.users
  },
  me() {
    return {
      id: '12345',
      name: 'Mustafa Shaikh',
      age: 21,
    }
  },

  posts(parent, args, { db }, info) {
    return db.posts
  },
  comments(parent, args, { db }, info) {
    return db.comments
  },
}
export default Query
