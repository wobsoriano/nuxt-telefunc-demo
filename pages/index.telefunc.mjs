import Keyv from 'keyv'

const keyv = new Keyv('sqlite://db.sqlite');

async function findAll() {
  let todoItems = await keyv.get('todos')
  if (!todoItems) {
    await keyv.set('todos', [])
    todoItems = await keyv.get('todos')
  }
  return todoItems
}

async function createNew({ text }) {
  const createdAt = Date.now()
  const todoItems = await keyv.get('todos')
  todoItems.push({ text, createdAt })
  await keyv.set('todos', todoItems)
  return todoItems
}

export async function onLoad() {
  const todoItems = await findAll()
  return { todoItems }
}

export async function onNewTodo({ text }) {
  await createNew({ text })
  const todoItems = await findAll()
  return { todoItems }
}
