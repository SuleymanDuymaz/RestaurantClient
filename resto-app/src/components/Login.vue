<template>
    <h1>LOGİN PAGE </h1>
      <div class="login">
        <input type="text" v-model="this.email" placeholder="Enter Mail" />
         <input type="password"   v-model="this.password" placeholder="Enter Password" />
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/SignUp">Dont You Have Account?</router-link>
        </p>
        </div>
</template>
<style>
.login input {
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-right: auto;
margin-left: auto;
border: 1px solid skyblue;
}

.login button {
width: 300px;
height: 40px;
background-color: skyblue;
border: 1px solid skyblue;
cursor: pointer;
}

</style>
<script>
import axios from 'axios'

export default({
       name:'LoginVue',

       data() {
        return {
            email:'',
            password:''           
        }
       },
       methods: {

         async login(){
     
            let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            //burada sorun olabilir dikkatlice bak açınca

            if(result.status==200 && result.data.length>0){
             localStorage.setItem("user-info",JSON.stringify(result.data[0]));
             this.$router.push({name:'Home'})
            }
        },
       
       
       },
       mounted() {
        //this.checkUserInformation();
       },
})
</script>
