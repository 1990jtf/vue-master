<script setup lang="ts">
import SubComponent from './component/sub.vue'
</script>
<template>
  <div class="learn-component">
    <h1>Learn Component</h1>
    <p>This is a placeholder for the learn component.</p>
    <sub-component />
  </div>
</template>
<style scoped>
.learn-component {
  padding: 20px;
  background-color: #f9f9f9;
}
.learn-component h1 {
  color: #42b883;
}
.learn-component p {
  color: #333;
}
</style>