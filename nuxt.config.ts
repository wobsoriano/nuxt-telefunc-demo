import { telefunc } from 'telefunc/vite'

export default defineNuxtConfig({
  build: {
    // transpile: ['telefunc']
  },
  vite: {
    plugins: [
      telefunc()
    ],
  },
})
