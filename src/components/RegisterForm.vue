<script setup>
import { ref, reactive } from 'vue'
const title = ref('Projeto 2 - Components')
const user = reactive({
  name: '',
  email: '',
  password: '',
  cofirmPassword: '',
  adress: '',
  city: '',
  selectedState: '',
  birthDate: '',
  hobbies: '',
  programmingLanguages: '',
  biografia: ''
})

const states = [
  { uf: 'AC', name: 'Acre' },
  { uf: 'AL', name: 'Alagoas' },
  { uf: 'AP', name: 'Amapá' },
  { uf: 'AM', name: 'Amazonas' },
  { uf: 'BA', name: 'Bahia' },
  { uf: 'CE', name: 'Ceará' },
  { uf: 'DF', name: 'Distrito Federal' },
  { uf: 'ES', name: 'Espírito Santo' },
  { uf: 'GO', name: 'Goiás' },
  { uf: 'MA', name: 'Maranhão' },
  { uf: 'MT', name: 'Mato Grosso' },
  { uf: 'MS', name: 'Mato Grosso do Sul' },
  { uf: 'MG', name: 'Minas Gerais' },
  { uf: 'PA', name: 'Pará' },
  { uf: 'PB', name: 'Paraíba' },
  { uf: 'PR', name: 'Paraná' },
  { uf: 'PE', name: 'Pernambuco' },
  { uf: 'PI', name: 'Piauí' },
  { uf: 'RJ', name: 'Rio de Janeiro' },
  { uf: 'RN', name: 'Rio Grande do Norte' },
  { uf: 'RS', name: 'Rio Grande do Sul' },
  { uf: 'RO', name: 'Rondônia' },
  { uf: 'RR', name: 'Roraima' },
  { uf: 'SC', name: 'Santa Catarina' },
  { uf: 'SP', name: 'São Paulo' },
  { uf: 'SE', name: 'Sergipe' },
  { uf: 'TO', name: 'Tocantins' }
]
</script>

<template>
  <div class="form-container">
    <h1 class="title">Registre-se em</h1>
    <h1 class="title">{{ title }}</h1>
    <form action="" class="form"></form>
  </div>
  <div class="results-container"></div>
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
