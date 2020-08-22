<template>
  <div>
    <form @submit.prevent="play">
      <ul v-for="new_question in desordenar.slice(0,3)" :key="new_question.id">
        <li>
          <h3>{{new_question.text}}</h3>
          <div class="wrap">
            <label>
              <input type="radio" class="option" :value="new_question.answers[0].isCorrect" :name="new_question.id"/>
              <span>{{new_question.answers[0].text}}</span>
            </label>
          </div>

          <div class="wrap">
            <label>
              <input type="radio" class="option" :value="new_question.answers[1].isCorrect" :name="new_question.id"/>
              <span>{{new_question.answers[1].text}}</span>
            </label>
          </div>

          <div class="wrap">
            <label>
              <input type="radio" class="option" :value="new_question.answers[2].isCorrect" :name="new_question.id"/>
              <span>{{new_question.answers[2].text}}</span>
            </label>
          </div>

          <div class="wrap">
            <label>
              <input type="radio" class="option" :value="new_question.answers[3].isCorrect" :name="new_question.id"/>
              <span>{{new_question.answers[3].text}}</span>
            </label>
          </div>
        </li>
      </ul>
      <br />
      <div class="container_btn">
        <button type="submit" class="btn">Jugar</button>
      </div>
      
    </form>
  </div>
</template>

<script>
import { db } from "@/firebase";
const getDate = () => {
  const trailing = (d) => ('0' + d).slice(-2);
  const now = new Date();
  return `${trailing(now.getDate())}-${trailing(now.getMonth() + 1)}-${now.getFullYear()} ${trailing(now.getHours())}:${trailing(now.getMinutes())}:${trailing(now.getSeconds())}`;
}

export default {
  name: "Game",
  data() {
    return {
      quiz: [],

    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    desordenar(){
      let answers = [...this.quiz]
      answers.sort(() => 0.5 - Math.random());
      console.log(answers)
      return answers;
    }
  },
  methods: {
    play(){
      let counter = 0
      //Question 1
      if(document.getElementsByClassName("option")[0].checked && document.getElementsByClassName("option")[0].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[1].checked && document.getElementsByClassName("option")[1].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[2].checked && document.getElementsByClassName("option")[2].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[3].checked && document.getElementsByClassName("option")[3].value=="true"){

        counter += 1

      }

      //Question 2
      if(document.getElementsByClassName("option")[4].checked && document.getElementsByClassName("option")[4].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[5].checked && document.getElementsByClassName("option")[5].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[6].checked && document.getElementsByClassName("option")[6].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[7].checked && document.getElementsByClassName("option")[7].value=="true"){

        counter += 1

      }

      //Question 3
      if(document.getElementsByClassName("option")[8].checked && document.getElementsByClassName("option")[8].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[9].checked && document.getElementsByClassName("option")[9].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[10].checked && document.getElementsByClassName("option")[10].value=="true"){

        counter += 1

      }else if(document.getElementsByClassName("option")[11].checked && document.getElementsByClassName("option")[11].value=="true"){

        counter += 1

      }

      let porcentaje = ""

      if(counter == 0){
        porcentaje="0%"

      }else if(counter == 1){
        porcentaje="33.3%"

      }else if(counter == 2){
        porcentaje="66.6%"

      }else if(counter == 3){
        porcentaje="100%"
      }
      db.collection("score").add({
        fecha: getDate(),
        porcentaje:porcentaje,
        puntaje:counter,
        usuario:{
          id:this.$store.state.user.id,
          nombre:this.$store.state.user.name
        }
      })
      this.$router.push('/');
      console.log(counter) 
    }
  },
  firestore() {
    return {
      quiz: db.collection("quiz"),
    }
  },
}
</script>
<style scoped>
ul{
  display: flex;
  justify-content: center;
}

li {
  list-style: none;
  font-size: 25px;
  margin-top: 30px;
  width: 60%;
}
.wrap {
  width: 100%;
  background: #014633;
  color: white;
  padding: 15px;
  text-decoration: none;
}

h3 {
 padding: 5px;
 width: 100%;
 color: #1a2537;
}

.option {
  margin-right: 20px;
}

.container_btn{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
}
.btn {
  border: none;
  width: 20%;
  font-size: 30px;
  background: #1a2537;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  color: white;
}

.btn:hover {
  background: cadetblue;
}
</style>