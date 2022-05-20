<template>
        <base-layout ProbeApp="Universität Mannheim - Ilias" footer= "Universität Mannheim" page-default-back-link="/produkte">
        <h1 v-if="loadedProduct">Product description</h1>
        <h1 v-else>couldnt load</h1>
        
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        </base-layout>
</template>


<script>


export default {
    data(){
        return{
            productId: this.$route.params.id
        }
    },
    computed:{
        loadedProduct(){
            return this.$store.getters.product(this.productId);
        }
    },
    watch: {
        "$route"(currentRoute){
           this.productId = currentRoute.params.id
        }
    }
}
</script>