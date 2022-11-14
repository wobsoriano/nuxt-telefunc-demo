<script setup lang="ts">
import { onLoad, onNewTodo } from './index.telefunc.mjs'

const { data, refresh } = await useAsyncData(() => onLoad())
const text = ref('')

async function onSubmit() {
  await onNewTodo({ text: text.value })
  text.value = ''
  refresh()
}
</script>

<template>
  <div>
    <ul v-if="data">
      <li v-for="item in data.todoItems">{{ item.text }}</li>
    </ul>
    <br />
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="text" />
      <button type="submit">Add to-do</button>
    </form>
  </div>
</template>
