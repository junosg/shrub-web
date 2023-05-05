<template>
<div id="tool-left-container">
    <div class="title">Shrubs <AddShrubModal></AddShrubModal></div>
    <div class="shrubs-list">
        <div v-for="shrub in shrubs">
            <button @click="setCurrentShrub(shrub)">{{shrub}}</button>
        </div>
    </div>
</div>
</template>
    
<script setup lang='ts'>
const shrubs = useShrubs();
const currentShrub = useCurrentShrub();

const setCurrentShrub = (shrub: string) => {
    currentShrub.value = shrub;
}
</script>

<style scoped>
.title {
    font-size: larger;
    font-weight: bold;
    display: grid;
    grid-template-columns: 7fr 1fr;
    align-items: center;
}

.shrubs-list {
    display: grid;
    padding-top: 1em;
}

.shrubs-list div{
    display: grid;
    grid-template-columns: 1fr;
}

.shrubs-list button {
    border: none;
    border-radius: 0px;
}

.title button {
    font-size: small;
    font-weight: normal;
    text-align: center;
}
</style>