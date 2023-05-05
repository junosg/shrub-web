<template>
    <div id="tool-main-container">
        <section id="tool-header"><h1>{{ currentShrub||"Test" }} Data Shrub</h1></section>
        <section id="tool-body">
            <section>
                <h3>Data Leaves</h3>
                <div class="leaf-interactors">
                    <button>Add Leaf</button>
                    <button>Import Source</button>
                    <button>Export Data Shrub</button>
                </div>
            </section>
            <section class="leaf-list">
                <LeafItem v-for="(leaf, index) in leaves" :key="index" :leaf="leaf" class="with-divider"></LeafItem>
            </section>
            <h3>Test Results</h3>
        </section>
    </div>
</template>
    
<script setup lang='ts'>
import { Leaf } from '@/models/leaf.model'

const currentShrub = useCurrentShrub();
const leaves: Ref<Array<Leaf>> = useState('leaves', () => [] as Array<Leaf>);

leaves.value = [
    {name: "Sex", measure: "nominal", data: "test, asd, fasda, gasda"}, 
    {name: "English Grades", measure: "nominal", data: "test, asd, fasda, gasda"},
    {name: "Sit Number", measure: "nominal", data: "test, asd, fasda, gasda"},
    {name: "Age", measure: "nominal", data: "test, asd, fasda, gasda"},
    {name: "Allowance", measure: "nominal", data: "test, asd, fasda, gasda"},
]

</script>
    
<style scoped>
#tool-main-container {
    padding-left: 2em;
}

#tool-body {
    padding-left: 4em;
    padding-right: 4em;
    padding-top: 2em;
    padding-bottom: 2em;
    background-color: white;
    min-height: 100vh;
}

.leaf-source {
    padding-left: 1em;
}
.leaf-list {
    display: grid;
    padding-left: 2em;
    padding-right: 2em;
    gap: 1em;
    background-color: var(--secondary-bg-color);
    padding: 1em;
    align-content: start;
    min-height: 30em;
    overflow-y: auto;
    max-height: 30em;
}

.leaf-item {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: start;
    gap: .1em;
}

.leaf-list label {
    font-weight: bold;
    font-size: small;
}

.with-divider {
    border-bottom: 1px solid var(--tertiary-bg-color);
}

.leaf-interactors {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: start;
    gap: .5em;
    padding-bottom: .2em;
}
</style>