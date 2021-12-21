<template>
  <div>
    test - {{ mountains }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',

    data() {
      return {
        mountains: []
      }
    },

  async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
}
</script>
