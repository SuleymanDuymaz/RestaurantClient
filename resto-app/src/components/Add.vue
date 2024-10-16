<template>

<h1>ADD RESTUARANT</h1>
  <div class="add">
        <input type="text" v-model="this.name" placeholder="Enter Name" />
       <input type="text"   v-model="this.contact" placeholder="Enter Contact" />
        <input type="text"   v-model="this.address" placeholder="Enter Address" />
      
          <button @click="addRestuarant">Ekle</button>
       
 </div>
 
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>

</template>

<style>
.add input {
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-right: auto;
margin-left: auto;
border: 1px solid skyblue;
}

.add button {
width: 300px;
height: 40px;
background-color: skyblue;
border: 1px solid skyblue;
cursor: pointer;
}

</style>
<script>
import axios from 'axios'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
export default({
       name:'AddVue',

       setup() {
         createToast('Welcome',{
autoClose:1000
         }
             
         );     
       },

       data() {
        return {
              name:'',
              contact:'',
              address:'',
                   
        }
       },
       methods: {
       async addRestuarant(){
              let result=await axios.post("http://localhost:3000/rest",{
                     name:this.name,
                     contact:this.contact,
                     address:this.address
              });

               if(result.status===201){
                
                
               location.reload();
            }
            else{
                alert(result.error);
            }

       },
       sweetAlert(){
          this.$swal.fire('Toast Title', 'Toast Message', 'success');
       }

       
       },
       mounted() {
    
       },
})
</script>
