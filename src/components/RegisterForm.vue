<script setup>

    const titulo = "Projeto 2 - Componentes"

</script>

<template>
    <div class="form-container">
        <h1 class="titulo">Registre-se em</h1>
        <h1 class="titulo">{{ titulo }}</h1>
    </div>
    <div class="results-container">

    </div>
</template>

<style scoped>

.form-container {
    width: 50%;
}

.results-container {
    width: 50%;
    display: flex;
    justify-self: flex-start;
    color: black;
}

</style>