<template>
  <div>
    <h1>Client {{ $route.params.id}}: {{llista[$route.params.id-1].nom}} </h1>
    <button class="btn btn-warning m-2" @click="this.$router.go(-1)">Enrere</button> 
  </div>
</template>

<script>
  export default {
    name: 'Client',
    props: ['llista']
  }
</script>