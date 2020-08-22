<template>
  <div class="container">
    <div id="error-message" v-if="error">
      <div class="error">{{ error }}</div>
    </div>
    <div class="wrap_container">
      <form class="formulario" @submit.prevent="register">
        <h1>Registrate</h1>
        <div class="contenedor">
          <div class="input-contenedor">
            <i class="fas fa-envelope icon"></i>
            <input required type="text" placeholder="Nombre" v-model="name" />
          </div>
          <div class="input-contenedor">
            <i class="fas fa-envelope icon"></i>
            <input required type="email" placeholder="Correo Electronico" v-model="email" />
          </div>

          <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
            <input required type="password" placeholder="Contraseña" v-model="password" />
          </div>

          <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
            <input required type="password" id="repeat" placeholder="Repetir contraseña" v-model="password_again"/>
          </div>
          <input type="submit" value="Registrate" class="button" />
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>
            ¿Ya tienes una cuenta?
            <a class="link" href="#">Iniciar Sesion</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_again: "",
    };
  },

  computed: {
    error() {
      return this.$store.state.error;
    },
  },

  methods: {
    register() {
      // const repeat = document.getElementById('repeat');
      // repeat.setCustomValidity('');

      if (this.password != this.password_again) {
        // repeat.setCustomValidity('Las contraseñas deben coincidir');
        alert("Las contraseñas deben coincidir");
        return;
      }
      const datos = {
        email: this.email,
        password: this.password,
        name: this.name,
      }
      this.$store.dispatch("register", datos);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#error-message {
  font-size: 1.7rem;
  font-weight: bold;
  background: brown;
  color: white;
}

.wrap_container {
  display: flex;
}
.contenedor {
  width: 100%;
  padding: 15px;
}
.formulario {
  background: #fff;
  margin-top: 150px;
  padding: 3px;
  border: 2px solid #1a2537;
}
h1 {
  text-align: center;
  color: #1a2537;
  font-size: 40px;
}
input[type="email"],
input[type="text"],
input[type="password"] {
  font-size: 20px;
  width: 100%;
  padding: 10px;
  border: none;
}
.input-contenedor {
  margin-bottom: 15px;
  border: 1px solid #aaa;
}
.icon {
  min-width: 50px;
  text-align: center;
  color: #999;
}
.button {
  border: none;
  width: 100%;
  color: white;
  font-size: 20px;
  background: #1a2537;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.button:hover {
  background: cadetblue;
}
p {
  text-align: center;
}
.link {
  text-decoration: none;
  color: #1a2537;
  font-weight: 600;
}
.link:hover {
  color: cadetblue;
}
@media (min-width: 768px) {
  .formulario {
    margin: auto;
    width: 500px;
    margin-top: 150px;
    border-radius: 2%;
    font-size: 15px;
  }
}
</style>