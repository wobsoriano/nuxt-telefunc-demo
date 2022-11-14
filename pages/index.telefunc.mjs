import { Abort, shield } from 'telefunc'
import { prisma } from '../lib/prisma.mjs'

const t = shield.type

export async function onGetTodos() {
  const todos = await prisma.todo.findMany()
  return todos
}

export const onToggleTodo = shield([t.number], async (id) => {
  const todo = await getTodoItem(id)
  await prisma.todo.update({
    where: { id },
    data: { completed: !todo.completed }
  })
})

export const onDeleteTodo = shield([t.number], async (id) => {
  await ensureTodoExistence(id)
  await prisma.todo.delete({ where: { id } })
})

export const onNewTodo = shield([{ title: t.string, content: t.string }], async ({ title, content }) => {
  await prisma.todo.create({
    data: {
      title,
      content,
      completed: false
    }
  })
})

async function getTodoItem(id) {
  const todo = await prisma.todo.findUnique({ where: { id } })
  if (!todo) {
    throw Abort() // See https://telefunc.com/permissions
  }
  return todo
}
async function ensureTodoExistence(id) {
  // `getTodoItem()` will `throw Abort()` if the to-do doesn't exist
  await getTodoItem(id)
}
