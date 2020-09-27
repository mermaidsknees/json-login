<template>
    <div class="observer"></div>
</template>

<script>
export default {
    name:'Observer',
    data(){
        return{
            observer:null
        }
    },
    mounted(){
        this.observer = new IntersectionObserver(([entry])=>{
            if (entry && entry.isIntersecting){
                this.$emit('fetch');
            }
        });

     this.observer.observe(this.$el)   
    }    
}
</script>

<style scoped>

</style>