<template>
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text"  v-model="this.email" placeholder="Enter Mail" />
         <input type="password" v-model="this.password" placeholder="Enter Password" />
        <input type="password" v-model="this.passwordAgain"  placeholder="Password Again"/>
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">login</router-link>
        </p>
        </div>



</template>
<style>
.register input {
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-right: auto;
margin-left: auto;
border: 1px solid skyblue;
}

.register button {
width: 300px;
height: 40px;
background-color: skyblue;
border: 1px solid skyblue;
cursor: pointer;
}


</style>
<script>
import axios from 'axios'
export default{
    name:'SignUp',

    data() {
        return {
            name:'',
            email:'',
            password:'',
            passwordAgain:'',
        }
    },
    methods: {
        async signUp(){
            let result=await axios.post("http://localhost:3000/users",{
                email:this.email,
                password:this.password,
                name:this.name


            });

            console.warn(result);   
            if(result.status===201){
                
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'Home'})
            }
            else{
                alert(result.error);
            }

        },
        checkUserInformation(){
            let user=localStorage.getItem('user-info');
            if (user) {
                    this.$router.push({name:'Home'});
            }


        },
    },

           mounted() {
            this.checkUserInformation();
          //this.signUp();
       }
}

</script>