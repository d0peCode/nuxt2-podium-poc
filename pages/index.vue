<template>
  <div>
    test - {{ response }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',

  data() {
    return {
      response: '',
    }
  },

  created() {
    console.log('created');

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(data => {
        console.log(data);

        this.response = data;
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        console.log('finished');
      })

  }
}
</script>
