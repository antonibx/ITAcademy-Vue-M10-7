<template>
  <div>
    <h1>BOTIGA</h1>
    <button class="btn btn-primary m-2" @click="canviaComponent('alimentacio')">Alimentació</button>
    <button class="btn btn-primary m-2" @click="canviaComponent('congelats')">Congelats</button> 
    <component v-bind:is="seccio"></component>
  </div>
</template>

<script>
import Alimentacio from "@/components/Alimentacio.vue"
import Congelats from "@/components/Congelats.vue"

export default {
  name: 'Botiga',
  components:{
    Alimentacio,
    Congelats
  },
  data() {
    return{
      seccio: ''
    }
  },
  methods: {
    canviaComponent(dada) {
      this.seccio = dada;
    }
  }
}
</script>