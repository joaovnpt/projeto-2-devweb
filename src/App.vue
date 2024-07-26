<script setup>
import { ref } from 'vue'
import DataComponent from './components/DataComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'

const showData = ref(false)

const user = ref({ name: '' })

function handleFormSubmitted(updatedUser) {
  showData.value = !showData.value
  user.value = updatedUser
}

</script>

<template>
  <div class="container">
    <RegisterComponent
      class="register-component"
      title="Project 2: Components"
      @formSubmitted="handleFormSubmitted"
    />
    <DataComponent :user="user" class="data-component" v-if="showData" />
  </div>
</template>

<style scoped>
@media (max-width: 1090px) {
  .container {
    display: flex !important;
    flex-direction: column !important;
  }
}

.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.data-component {
  width: 50%;
  height: 100vh;
}

.register-component {
  width: 50%;
}
</style>
