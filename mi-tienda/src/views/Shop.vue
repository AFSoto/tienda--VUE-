<template>
    <div>
        <h1>{{titulo}}</h1>
        <p>Esta es mi Pagina Shop</p>
        <img src="" alt="banner" class="banner">
    </div>
</template>

<script setup>
    const titulo="Bienvenido a Shop";
</script>

<style scoped>
    p{
        color: rgb(6, 54, 13);
        font-size: 30px;
    }

    .banner{
        width: 300px;
        border-radius: 10px;
    }
</style>
