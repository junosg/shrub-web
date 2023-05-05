<template>
    <div id="leaf-item-container">
        <section id="leaf-item-header">
            <div>
                <label><b>Name: </b></label>
                <input v-model="props.leaf.name" maxlength="20"/>
            </div>
            <div>
                <label><b>Sample Size: </b></label>
                <span>{{ sampleSize }}</span>
            </div>
            <div>
                <label><b>Measure: </b></label>
                <select v-model="props.leaf.measure">
                    <option v-for="measure in measures" :key="measure.key" :value="measure.key"> {{ measure.value }} </option>
                </select>
            </div>
            <div class="leaf-show-button">
                <button @click="displayData = !displayData"><b>{{displayData ? "Hide Data": "Show Data"}}</b></button>
            </div>
        </section>
        <section id="leaf-item-body">
            <textarea v-model="props.leaf.data" @focusout="removeExtraComma()" v-if="displayData"></textarea>
        </section>
    </div>
</template>
    
<script setup lang='ts'>
import { Leaf } from '~/models/leaf.model';
import { measures } from '~/models/measure.model';

const props = defineProps<{
    leaf: Leaf
}>();

const sampleSize = computed(() => {
    if (props.leaf.data.length == 0) return 0;

    return props.leaf.data.split(",").length
});

const removeExtraComma = () => {
    if (props.leaf.data.endsWith(",")) {
        props.leaf.data = props.leaf.data.slice(0, -1);
    }
}

const displayData = ref(false)
</script>
    
<style scoped>
#leaf-item-container {
    display: grid;
    gap: .2em;
}

#leaf-item-header {
    display: grid;
    grid-template-columns: 3fr auto auto 7fr;
    align-items: start;
    justify-content: start;
    gap: 1em;
}

#leaf-item-header input {
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left: 1em;
    padding-right: 1em;
    border: none;
    font-size: normal;
    background-color: whitesmoke;
    width: auto;
    font-weight: bold;
    text-align: center;   
}

#leaf-item-header select {
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left: 1em;
    padding-right: 1em;
    border: none;
    font-size: normal;
    background-color: whitesmoke;
    width: auto;
    font-weight: bold;
    text-align: center;
}

option:checked {
    background-color: var(--tertiary-bg-color);
    color: white;
}

#leaf-item-body {
    display: grid;
    gap: 0.1em
}

#leaf-item-body textarea {
    height: 8em;
    max-height: 8em;
    resize: none;
    padding: 1em;
    overflow-y: auto;
    border: .5px solid black;
}

.leaf-show-button {
    justify-self: end;
}   

.leaf-show-button button {
    margin-left: .1em;
    text-align: center;
    font-size: small;
}
</style>