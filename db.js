const users = [
  {
    id: 1,
    name: 'Mustafa',
    email: 'mustafa@gmail.com',
  },
  {
    id: 2,
    name: 'Niraj',
    age: 21,
    email: 'niraj@gmail.com',
  },
  {
    id: 3,
    name: 'Rahul',
    age: 21,
    email: 'rahul@gmail.com',
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

const db = {
  users,
  posts,
  comments,
}

export default db
