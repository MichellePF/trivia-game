<template>
  <div class="container">
    <div class="wrap">
      <a class="btn_logout" @click="logOut">Log Out</a>
    </div>
    <div class="wrapper">
      <input v-model="buscador" type="text" class="validate input" placeholder="Qué jugador buscas?">
    </div>
    <div class="container_button">
      <div class="button"><router-link class="link" to="/game">Play</router-link></div>
    </div>
    <div class="container_score">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Answers</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="puntaje in Buscador" :key="puntaje.id">
            <td>{{puntaje.fecha}}</td>
            <td>{{puntaje.usuario.nombre}}</td>
            <td>{{puntaje.puntaje}}/3</td>
            <td>{{puntaje.porcentaje}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>

    </div>
    
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "Home",
  data() {
    return {
      score:[],
      buscador: ""
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    Buscador(){
      return this.score.filter((puntaje)=> puntaje.usuario.nombre.includes(this.buscador))
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
    }
  },
  firestore(){
    return {
     score: db.collection("score").orderBy('porcentaje','asc')
    }
  }
}
</script>

<style scoped>
.wrap {
    text-align: end;
    margin-top: 20px;
}

.wrap a {
    background: #1a2537;
    color: white;
    padding: 15px;
    text-decoration: none;
    margin-right: 10px;
}

.wrap a:hover {
  background: cadetblue;
}

.container_score {
  display:flex;
  justify-content: center;
}

table{
	background-color: white;
	text-align: center;
	border-collapse: collapse;
	width: 80%;
	margin: 30px;
}

th, td{
	padding: 20px;
}

thead{
	background-color: #246355;
	border-bottom: solid 5px #0F362D;
	color: white;
}

tr:nth-child(even){
	background-color: #ddd;
}

tr:hover td{
	background-color: #369681;
	color: white;
}

.container_button{
  display: flex;
  justify-content: center;
}

.button {
  border: none;
  width: 50%;
  font-size: 50px;
  background: #1a2537;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
.button:hover {
  background: cadetblue;
}
.link {
  text-decoration: none;
  color: white;
  font-weight: 600;
}
.link:hover {
  color: #1a2537;

}

.wrapper{
  background: #0F362D;
  width: 20%;
  padding: 15px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 30px;
}

.wrapper .input {
  width: 85%;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}



</style>