<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add Restaurant</a>
        <a href="#">Update Restaurant</a>
        <a v-on:click="logOut" href="#">Logout</a>
    </div>
</template>
<style>
.nav{
    background-color: bisque;
    overflow: hidden;
}
.nav a{
    float: left;
    color: red;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
    margin-top: 0%;
}

</style>
<script>
export default {
    name:'HeaderVue',
    methods:{
        logOut(){
          localStorage.clear();
          this.$router.push({name:'Login'})
        }

    },

}
</script>