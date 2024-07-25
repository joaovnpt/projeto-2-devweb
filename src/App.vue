<script setup>
import RegisterComponent from './components/RegisterComponent.vue'
import DataComponent from './components/DataComponent.vue'
</script>

<template>
  <div class="container">
    <data-component class="data-component" />
    <register-component class="register-component" />
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
  }
  
  .data-component {
    width: 50%;
  }
  
  .register-component {
    width: 50%;
  }
</style>
