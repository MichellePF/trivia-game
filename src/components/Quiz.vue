<template>
<div>
  <div class="wrap">
			<form @submit.prevent="add_question">
				<p>Question</p>
				<input required type="text" class="field" v-model="new_question"> <br/>

				<p>Answer correct</p>
				<input required type="text" class="field validate" v-model="answer_correct"> <br/>

				<p>Answer fake</p>
				<input required type="text" class="field validate" v-model="answer_fake"> <br/>

        <p>Answer fake</p>
				<input required type="text" class="field validate" v-model="answer_fake2"> <br/>

        <p>answer fake</p>
				<input required type="text" class="field validate" v-model="answer_fake3"> <br/>


				<p class="center-content">
				<input type="submit" class="btn btn-green" value="Send information">
				</p>

			</form>
		</div>
</div>
  
</template>

<script>
import { db } from '../firebase'; 
export default {
  name: "Quiz",
  data(){
    return {
      new_question: "",
      answer_correct: "",
      answer_fake:"",
      answer_fake2:"",
      answer_fake3:"",

    }
  },
  methods: {
    add_question(){
      let answers = [
        {
          text: this.answer_correct,
          isCorrect: true
        },
        {
          text: this.answer_fake,
          isCorrect: false
        },
        {
          text: this.answer_fake2,
          isCorrect: false
        },
        {
          text: this.answer_fake3,
          isCorrect: false
        },
      ]
      answers = answers.sort(()=> 0.5 - Math.random())

      db.collection("quiz").add({
        usuario:{
          nombre:this.$store.state.user.name,
          id:this.$store.state.user.id
        }, 
        text:this.new_question,
        answers: answers
      })
      this.new_question= "",
      this.answer_correct= "",
      this.answer_fake="",
      this.answer_fake2="",
      this.answer_fake3=""
    }
  },
  firestore() {          
		return {
			quiz: db.collection('quiz')
		}
	}
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
}
form{
	background-color: white;
	border: 3px solid  cadetblue;
	color: #1a2537;
	font-size: 0.8em;
	padding: 50px;
	margin-top: 20px;
	width: 400px;
}
form p {
  font-size: 20px;
}

input[type=text]{
	padding-left: 0;
	outline: none;
	width: 97%;
}

.current {
	margin-top: 15px;
	border: 0;
	outline: none;
	width: 100%;
}

.field{
	border: solid 1px #ccc;
	padding: 10px;
  width: 100%;

			
}
.field:focus{
	border-color: cadetblue;
}

.center-content{
	text-align: center;
}
.btn{
	border-radius: 3px;
	display: inline-block;
	padding: 20px 15px;
	text-decoration: none;
	text-shadow: 0 1px 0 rgba(255,255,255,0.3);
	box-shadow: 0 1px 1px rgba(0,0,0,0.3); 
  width: 100%;
}

.btn-green{
	color: white;
	background-color: #1a2537;
}
.btn-green:hover{
	background-color:  cadetblue;	
}
.btn-green:active{
	background-color: #29962A;
}
</style>