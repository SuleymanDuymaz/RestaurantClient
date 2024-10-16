<template>
    <h1>Selam Bu Sayfaya Hoş Geldin</h1>
<Header></Header>
<table class="">
    <tr>
        Name
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td>{{item.name}}</td>
        <router-link :to="'/update/'+item.id">update</router-link>
        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
       
    </tr>
</table>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'
export default{
    name:'HomeVue',
    components:{
        Header
    },
     data() {
        return {
          name:'',
          restaurant:[],
        }
       },
    methods:{
        checkUserInformation(){
             let user=localStorage.getItem('user-info');
             this.name=JSON.parse(user).name;

            if (!user) {
                    this.$router.push({name:'SignUp'});
            }
        },
        async getData(){
            let result=await axios.get("http://localhost:3000/rest");
            this.restaurant=result.data;
           
            
            console.warn(result);
        },
        async deleteRestaurant(id){
              //alert(id);  1
              /*
              let result=await axios.delete('http://localhost:3000/rest/'+id);
              if(result.status==200){
                alert("ok");
              }
*/

                    this.$swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                    if (result.isConfirmed) {
                        let result1= axios.delete('http://localhost:3000/rest/'+id);

                          if(result1.status==200){
                               this.$swal.fire({
                       title: "Deleted!",
                       text: "Restaurant has been deleted.",
                       icon: "success"
                     });
                 }

                        
                    
                }
});
              
            
            
            

        },

    },
       mounted() {
       //this.checkUserInformation();
           // this.hey();
       this.getData();
       }
}
</script>
