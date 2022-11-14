import { telefunc } from 'telefunc/vite'

export default defineNuxtConfig({
  alias: {
    'keyv': 'node_modules/keyv/src/index.js'
  },
  vite: {
    plugins: [
      telefunc()
    ],
  }
})
