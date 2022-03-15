<template>
  <div id="app">
    <t-header></t-header>
    <router-view/>
    <t-footer></t-footer>
  </div>
</template>

<script>

import  THeader from './components/t-header'
import TFooter from './components/t-footer'
export default {
  name: 'App',
  components: {
    THeader,
    TFooter,
  }
}
</script>

<style>

@import "assets/style.css";

</style>
