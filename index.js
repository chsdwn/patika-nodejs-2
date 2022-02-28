const posts = [
  { id: 1, title: 'Lorem' },
  { id: 2, title: 'Ipsum' },
  { id: 3, title: 'Dolor' }
]

const addPost = (title) => new Promise((resolve, reject) => {
  if (!title) reject(new Error('Invalid title.'))

  setTimeout(() => {
    posts.push({ id: posts.length + 1, title })
    resolve(console.log('Post added.'))
  }, 1000)
})

const listPosts = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(posts.forEach(({ id, title }) => console.log(`#${id}: ${title}`)))  
  }, 2000)
})

const main = async () => {
  await listPosts()

  try {
    await addPost('Sit Amet')
  } catch (ex) {
    console.error(ex.message)
  }

  listPosts().then()
}
main()
