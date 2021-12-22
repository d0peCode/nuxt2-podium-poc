import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      'nuxt-podium-module',
      {
        podletOptions: {
          name: 'myPodletNameb', // required
          version: `1.0.0`, // required
          pathname: '/', // required
          manifest: '/manifest.json', // optional
          development: false // optional, defaults to false
        }
      }
    ]
  ]
})
