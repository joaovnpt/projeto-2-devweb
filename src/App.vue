<script setup>
import { ref } from 'vue'
import DataComponent from './components/DataComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'

const showData = ref(false)

const user = ref({ name: '' });

const handleUpdateUser = (updatedUser) => {
  user.value = updatedUser
}

function handleFormSubmitted() {
  showData.value = true
}

function handleToggleDataVisibility(visible) {
  showData.value = visible
}
</script>

<template>
  <div class="container">
    <DataComponent :user="user" class="data-component" v-if="showData" />
    <RegisterComponent
      class="register-component"
      @updateUser="handleUpdateUser"
      title="Project 2: Components"
      @formSubmitted="handleFormSubmitted"
      @toggleDataVisibility="handleToggleDataVisibility"
    />
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
}

.data-component {
  width: 50%;
}

.register-component {
  width: 50%;
}
</style>
