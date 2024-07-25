<script setup>
import { ref, reactive } from 'vue'
const title = ref('Projeto 2 - Components')
const user = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  adress: '',
  city: '',
  selectedState: '',
  birthDate: '',
  hobbies: '',
  programmingLanguages: '',
  biography: ''
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
    <h1 class="title">Register on</h1>
    <h1 class="title">{{ title }}</h1>
    <form action="" class="form">
      .
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" v-model="user.name" />

      <label for="email">Email:</label>
      <input type="text" name="name" id="email" v-model="user.email" />

      <label for="password">Password:</label>
      <input type="password" name="password" id="password" v-model="user.password" />

      <label for="confirmPassword">Confirm your password:</label>
      <input type="password" name="confirmPassword" id="confirmPassword" v-model="user.confirmPassword" />

      <label for="adress">Adress:</label>
      <input type="adress" name="adress" id="adress" v-model="user.adress" />

      <label for="city">City:</label>
      <input type="text" name="city" id="city" v-model="user.city" />

      <label for="state">State:</label>
      <select name="slctStates" id="slctStates" v-model="user.selectedState">
        <option value="" disabled>Select your state</option>
        <option v-for="state of states" :key="state.uf">
          {{ state.uf }}
        </option>
      </select>

      <label for="birthDate">Birth date:</label>
      <input type="date" name="birthDate" id="birthDate" v-model="user.birthDate">

      <label for="hobbies">Hobbies:</label>
      <input type="text" name="hobbies" id="hobbies" v-model="user.hobbies">

      <label for="programmingLanguages">Programming languages:</label>
      <input type="text" name="programmingLanguages" id="programmingLanguages" v-model="user.programmingLanguages">

      <label for="biography">Biography:</label>
      <textarea name="biography" id="biography" cols="25" rows="10" v-model="user.biography"></textarea>
      
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;;
}
</style>
