<template>
  <div>
    <h1>CLIENTS</h1>

    <router-link :to="{name: 'Clients', params: {id: item.num} }" v-for="(item, index) of llista" :key="index">
      <button class="btn btn-primary m-2">Boto {{item.nom}}</button> 
    </router-link>

    <Client :llista="llista" />

  </div>
</template>

<script>
import Client from "@/components/Client.vue"

export default {
  name: 'Clients',
  components:{
    Client
  },
  data() {
    return{
      llista: [{num: 1, nom: "Joan"},{num: 2, nom: "Maria"},{num: 3, nom: "Pere"}]
    }
  },
  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>

