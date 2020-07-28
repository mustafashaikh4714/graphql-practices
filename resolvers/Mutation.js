const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => user.email === args.data.email)
    if (emailTaken) throw new Error('Email Taken!')
    const newUser = {
      id: uuidv4(),
      ...args.data,
    }
    db.users.push(newUser)
    return newUser
  },
  createPost(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author)
    if (!userExists) throw new Error('User not found!')
    const newPost = {
      id: uuidv4(),
      ...args.data,
    }
    db.posts.push(newPost)
    return newPost
  },
  addComment(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author)
    if (!userExists) throw new Error('User not found!')

    const postExists = db.posts.some((post) => post.id === args.data.post)
    if (!postExists) throw new Error('Post not found')

    const post = db.posts.find((post) => post.id === args.data.post)
    if (postExists && !post.published) throw new Error('Post is not published')

    const newComment = {
      id: uuidv4(),
      ...args.data,
    }
    db.comments.push(newComment)
    return newComment
  },
}

export default Mutation
