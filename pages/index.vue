<template>
    <div id="index-container">
        <div id="index-left"></div>
        <div id="index-main">
            <h1>Welcome Researcher!</h1>
            <div>
                <p>
                    <b>Shrub Analytics</b> is a free and accessible statistical tool offering data analysis methods commonly used by undergraduate students. 
                </p>
            </div>
            <div><button  @click="$router.push({path:'/tool'})">Get started</button></div>
        </div>
        <div id="index-right"></div>
    </div>
</template>
    
<script setup lang='ts'>
definePageMeta({
    layout: "home"
})
</script>
    
<style scoped>
#index-container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: center;
    place-items: center;
    height: 100vh;
    background-color: rgb(221, 221, 221); 
} 

#index-main {
    display: grid;
    place-content: center;
    background-color: rgb(221, 221, 221);
    padding-left: 8em;
    padding-right: 8em;
    height: 100vh;
    max-width: 100%;
    text-align: center;
}
</style>