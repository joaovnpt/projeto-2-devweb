<script setup>
import { reactive, ref, computed, defineEmits, defineProps } from 'vue'
defineProps(['title'])

const emit = defineEmits(['formSubmitted'])

const user = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  address: '',
  city: '',
  selectedState: '',
  birthDate: '',
  hobbies: '',
  programmingLanguages: '',
  biography: ''
})

const showData = ref(false)
const buttonText = computed(() => (showData.value ? 'Hide' : 'Show'))

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

function dataVerification() {
  if (user.name === '') {
    alert('"Name" is required')
    Event.preventDefault() //faz o programa parar e não aparecer o DataComponent mesmo que a condição seja atingida
  } 
   else if (user.email === '') {
    alert('"Email" is required')
    Event.preventDefault()
  } else if (user.password === '') {
    alert('"password" is required')
    Event.preventDefault()
  } else if (user.confirmPassword === '') {
    alert('"Confirm password" is required')
    Event.preventDefault()
  } else if (user.address === '') {
    alert('"address" is required')
    Event.preventDefault()
  } else if (user.selectedState === '') {
    alert('"State" is required')
    Event.preventDefault()
  } else if (user.birthDate === '') {
    alert('"Birth date" is required')
    Event.preventDefault()
  } else if (user.city === '') {
    alert('"City" is required')
    Event.preventDefault()
  } else if (user.hobbies === '') {
    alert('"Hobbies" is required')
    Event.preventDefault()
  } else if (user.programmingLanguages === '') {
    alert('"Programming Languages" is required')
    Event.preventDefault()
  } else if (user.biography === '') {
    alert('"biography" is required')
    Event.preventDefault()
  } else if (user.password != user.confirmPassword) {
    alert('Passwords must be the same.')
    Event.preventDefault()
  } 
  else {
    showData.value = !showData.value
    emit('formSubmitted', { ...user })
  }
}
</script>

<template>
  <div class="form-container">
    <div class="title-container">
      <h1 class="title" id="static-title">Register on</h1>
      <h1 class="title" id="dynamic-title">{{ title }}</h1>
    </div>
    <form action="" class="form" @submit.prevent="dataVerification()">
      <div class="layout-2-2">
        <!--Nesta div, o layour será de 2 colunas e duas linhas (2-2)-->
        <div class="form-item">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" v-model="user.name" />
        </div>

        <div class="form-item" id="email-area">
          <label for="email">Email:</label>
          <input type="email" name="name" id="email" v-model="user.email" />
        </div>

        <div class="form-item">
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" v-model="user.password" />
        </div>

        <div class="form-item" id="confirm-password-area">
          <label for="confirm-password">Confirm your password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            v-model="user.confirmPassword"
          />
        </div>
      </div>

      <div class="form-item">
        <label for="address">Address:</label>
        <input type="text" name="address" id="address" v-model="user.address" />
      </div>

      <div class="layout-3-2">
        <div class="form-item" id="city-area">
          <label for="city">City:</label>
          <input type="text" name="city" id="city" v-model="user.city" />
        </div>

        <div class="form-item" id="states-area">
          <label for="slct-states">State:</label>
          <select name="slctStates" id="slct-states" v-model="user.selectedState">
            <option value="" disabled>Select your state</option>
            <option v-for="state of states" :key="state.uf">
              {{ state.uf }}
            </option>
          </select>
        </div>

        <div class="form-item" id="birth-date-area">
          <label for="birth-date">Birth date:</label>
          <input type="date" name="birthDate" id="birth-date" v-model="user.birthDate" />
        </div>

        <div class="form-item" id="hobbies-area">
          <label for="hobbies">Hobbies:</label>
          <input type="text" name="hobbies" id="hobbies" v-model="user.hobbies" />
        </div>

        <div class="form-item" id="programming-languages-area">
          <label for="programming-languages">Programming languages:</label>
          <input
            type="text"
            name="programmingLanguages"
            id="programming-languages"
            v-model="user.programmingLanguages"
          />
        </div>
      </div>

      <div class="form-item">
        <label for="biography">Biography:</label>
        <textarea
          name="biography"
          id="biography"
          cols="25"
          rows="10"
          v-model="user.biography"
        ></textarea>
      </div>

      <button type="submit">{{ buttonText }}</button>
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
  display: grid;
  margin: 50px 20px 50px 20px;
  gap: 10px 0;
}

.form-item {
  display: grid;
  grid-auto-columns: auto;
}

#confirm-password-area {
  justify-self: end;
  margin-left: 60px;
}

#email-area {
  justify-self: end;
}

#birth-date {
  width: 110px;
}

#birth-date-area {
  justify-self: end;
}

input {
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border-color: #aeaeae;
  border-style: solid;
  border-width: 1px;
  background-color: #f2f2f2;
}

#address {
  width: auto;
}

select {
  display: flex;
  width: 60px;
}

.layout-2-2 {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px 0;
  justify-content: start;
}

.layout-3-2 {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'city state birth-date'
    'hobbies . programming-languages';
  gap: 10px 0;
}

#city-area {
  grid-area: city;
}

#states-area {
  grid-area: state;
}

#birth-date-area {
  grid-area: birth-date;
}

#hobbies-area {
  grid-area: hobbies;
}

#programming-languages-area {
  grid-area: programming-languages;
}

button {
  background-color: rgba(132, 0, 143, 1);
  color: white;
  height: 40px;
  width: 140px;
  border-radius: 10px;
  border: 0;
  transition: 150ms;
}

button:hover {
  transform: scale(1.02);
  background-color: rgb(108, 0, 117);
  transition: 150ms ease-in-out
}
</style>
