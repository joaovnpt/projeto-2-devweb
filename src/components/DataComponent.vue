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
    <p>password: {{ props.user.password }}</p>
    <p>Address: {{ props.user.address }}</p>
    <p>City: {{ props.user.city }}</p>
    <p>State: {{ props.user.selectedState }}</p>
    <p>Birth Date: {{ props.user.birthDate }}</p>
    <p>Hobbies: {{ props.user.hobbies }}</p>
    <p>Programming Languages: {{ props.user.programmingLanguages }}</p>
    <p>Biography: {{ props.user.biography }}</p>
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
