<template>
  <div>
    <button @click="test">test</button>
    data from api:
    <pre>
      {{ mountains }}
    </pre>
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
