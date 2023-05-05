<template>
    <div id="tool-main-container">
        <h1>{{ currentShrub }}</h1>
    </div>
</template>
    
<script setup lang='ts'>
const currentShrub = useCurrentShrub();
</script>
    
<style scoped>
#tool-main-container {
    padding-left: 2em;
    
} 

</style>