<template>
  <div>
    data from api:
    <pre>
      {{ mountains }}
    </pre>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      mountains: []
    }
  },

  mounted() {
    console.log('mounted')
  },

  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then(res => res.json())
  },

  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>
