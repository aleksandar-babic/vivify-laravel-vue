<template>
  <div class="home">
    <header-bar></header-bar>
    <div class="content">
        <h1>TODO content will go here</h1>
    </div>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
export default {
  name: 'Home',
  components: {
    HeaderBar
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
