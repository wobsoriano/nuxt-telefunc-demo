<script setup lang="ts">
import { onDeleteTodo, onGetTodos, onToggleTodo } from './index.telefunc.mjs'

const todos = await onGetTodos()

async function handleChange(id: number) {
  await onToggleTodo(id)
  // await todos.refresh()
}

async function handleDelete(id: number) {
  await onDeleteTodo(id)
  // await todos.refresh()
}
</script>

<template>
  <div>
    <ul >
      <li v-for="todo in todos" :key="todo.id">
        <h2>
          <span>{{ todo.title }}</span>
          <input type="checkbox" :checked="todo.completed" @change="handleChange(todo.id)" />
          <button @click="handleDelete(todo.id)">remove</button>
        </h2>
      </li>
    </ul>
  </div>
</template>
