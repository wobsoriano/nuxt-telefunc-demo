<script setup lang="ts">
import { onDeleteTodo, onGetTodos, onToggleTodo } from './index.telefunc.mjs'

const { data: todos, refresh } = await useAsyncData(() => onGetTodos())

async function handleChange(id: number) {
  await onToggleTodo(id)
  await refresh()
}

async function handleDelete(id: number) {
  await onDeleteTodo(id)
  await refresh()
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
        <p>
          <span :style="{textDecoration: todo.completed ? 'line-through' : undefined}">{{ todo.content }}</span>
          {{ todo.completed ? ' ✅ done' : '' }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style>
input[type="checkbox"] {
  cursor: pointer;
  margin: 13;
}
</style>
