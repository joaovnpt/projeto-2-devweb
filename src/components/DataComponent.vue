<script setup>
import { ref } from 'vue'
const title = ref("Your data here");
</script>

<template>
    <div class="data-container">
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped>

</style>