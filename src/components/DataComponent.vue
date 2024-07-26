<script setup>
import { ref, defineProps } from 'vue'
const title = ref('Your data here')

const props = defineProps({
  user: {
    type: Object
  }
})
</script>

<template>
  <div class="data-container">
    <h1>{{ title }}</h1>
    <p>Name: {{ props.user.name }}</p>
    <p>Email: {{ props.user.email }}</p>
  </div>
</template>

<style scoped>
.data-container {
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
