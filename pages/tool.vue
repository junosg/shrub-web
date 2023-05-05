<template>
    <div id="tool-container">
        <div id="tool-left">
            <ToolLeftBar></ToolLeftBar>
        </div>
        <div id="tool-main">
            <div v-if="shrubs.length == 0"><h3>Add a Shrub to begin!</h3></div>
            <ToolMainBar v-else></ToolMainBar>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
definePageMeta({
    layout: "home"
})

const shrubs: Array<string> = ['Math Grades'];
</script>
    
<style scoped> 
#tool-left {
    padding: 1em;
}

#tool-main {
    padding: 1em;
    background-color: rgb(221, 221, 221);
    height: max-content;
}

#tool-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100vh;
}
</style>