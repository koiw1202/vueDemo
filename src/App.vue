<template>
  <div id="app" class="nav-main-content">
    <div class="nav-header">
      <VueHeader />
    </div>

    <div id="content" class="main-color" >
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
