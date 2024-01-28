<template>
  <div id="app">
    <VueHeader />
    <div id="content" class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueHeader from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
     VueHeader
    ,
  }
}
</script>

<style>

</style>
