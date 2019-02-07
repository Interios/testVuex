<template>
  <div id="app">
    <img src="./assets/logo.png">
    <elem />
  </div>
</template>


<script>
  import elem from './components/ListCrypto.vue'

  export default {
    name: 'app',
    components: { 
      elem 
    }
  }
</script>


<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 20px

  h1, h2
    font-weight: normal
    font-size: 40px
  .table
    margin: auto
    width: 800px
</style>
