<template>
  <div class="instructions">
    <ul>
      
      <li>Para poder jugar debes <router-link to="/login" class="enlace_texto">iniciar sesión</router-link> con tu cuenta</li>
      <li>Si no tienes cuenta regístrate <router-link to="/register" class="enlace_texto">aquí</router-link></li>
      <li>Puede agregar mas preguntas al quiz desde este enlace <router-link to="/quiz" class="enlace_texto"> Quiz</router-link></li>
      <li>Puedes revisar tu puntaje en el <router-link to="/" class="enlace_texto"> Home</router-link></li>
      <li>Para buscar el puntaje de alguien en específico usa el buscador en el Home</li>
      <li>Para cerrar sesión usa el botón logOut</li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>
.instructions{
  width: 700px;
  background: #24303c;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
  border-radius: 4px;
  font-family: 'calibri';
  color: white;
  box-shadow: 7px 13px 37px #000;
  font-size: 20px;
}
.enlace_texto{
  color: white;
}
</style>