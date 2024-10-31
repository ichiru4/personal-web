<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
</script>

<template>
       <TopNav />
       <div class="main-content">
              <RouterView></RouterView>
       </div>
</template>

<style scoped>
.main-content {
       padding-top: 60px;
}
</style>
