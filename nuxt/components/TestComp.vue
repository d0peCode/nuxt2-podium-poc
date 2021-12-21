<template>
  <div>
    <h1>testcomp.vue</h1>
    <button @click="test">test1</button>
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>
