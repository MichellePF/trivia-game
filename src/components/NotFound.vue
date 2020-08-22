<template>
    <div>
      <div class="wrap">
        <a><router-link to="/">Home</router-link></a>
      </div>
        
      <img src="@/assets/404.jpg" alt="foto">
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
   .wrap {
    text-align: end;
    margin-bottom: 20px;
}

.wrap a {
    background: #0F362D;
    color: white;
    padding: 15px;
}
</style>