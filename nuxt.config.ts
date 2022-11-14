import { telefunc } from 'telefunc/vite'

import fs from 'fs'

export default defineNuxtConfig({
  build: {
    // transpile: ['@prisma/client']
  },
  vite: {
    plugins: [
      telefunc()
    ],
    define: {
      'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
    }
  },
  hooks: {
    'build:done'() {
      console.log('finished building')
    }
  },
  
})
