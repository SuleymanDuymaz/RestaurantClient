<template>
<h1>Update Restuarant</h1>
<div class="update">
       <input type="text" v-model="restaurant.name" placeholder="Enter Name" />
       <input type="text"   v-model="restaurant.contact" placeholder="Enter Contact" />
       <input type="text"   v-model="restaurant.address" placeholder="Enter Address" />     
       <button @click="update">Toast it!</button>
       
 </div>
</template>
<style>
.update input {
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-right: auto;
margin-left: auto;
border: 1px solid skyblue;
}

.update button {
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
       
       name:'UpdateVue',

       data() {
        return {
              restaurant:{
                     name:'',
                     contact:'',
                     address:''

              },
             
                   
        }
       },
       methods: {
       async get(){
              const result=await axios.get('http://localhost:3000/rest/'+this.$route.params.id);
              this.restaurant=result.data;
             // console.warn(this.restaurant);



       },
       async update(){
              
               const result=await axios.put('http://localhost:3000/rest/'+this.$route.params.id,{
                     name:this.name,
                     address:this.address,
                     contact:this.contact,
               });
              if(result.status==200){
                       this.$swal.fire('Toast Title', 'Toast Message', 'success');
                
               }

       },
       
       },
       mounted() {
              this.get();
    
       },
})
</script>
