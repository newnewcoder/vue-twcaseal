<template>
  <div id="app">
    <twca-seal version="v3" logo-type="SMALL" :src="require('./assets/seal.jpeg')"></twca-seal>
  </div>
</template>

<script>
import TwcaSeal from '@/components/TwcaSeal'
export default {
  name: 'App',
  components: {
    TwcaSeal
  }
}
</script>

<style>
#app {
  margin-top: 200px;
  -webkit-box-align:center;
  -webkit-box-pack:center;
  display:-webkit-box;
}
</style>
