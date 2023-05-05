<template>
    <div>
        <button id="add-shrub-button" @click="openShrubModal()">Add</button>
        <div id="add-shrub-modal" v-if="addShrubIsOpen" @focusout="closeShrubModal($event)">
            <div>Shrub Name</div>
            <div></div>
            <input v-model="shrubName" ref="shrubNameInput" maxlength="20"/>
            <button id="done-shrub-button" @click="doneAdding()">Done</button>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
//States
const addShrubIsOpen = useState('addShrubIsOpen', () => false);
const shrubName = useState('shrubName', () => '');
const shrubs = useShrubs();

//Elements References
const shrubNameInput = ref();

//Functions
const openShrubModal = () => {
    addShrubIsOpen.value = true;

    setTimeout(() => {
        shrubNameInput.value.focus();
    }, 100);
}

const closeShrubModal = (event: FocusEvent) => {
    if (event.relatedTarget == document.getElementById("done-shrub-button")) return;

    addShrubIsOpen.value = false;
}

const doneAdding = () => {
    if (shrubName.value.length == 0) return;
    if (shrubs.value.map((value)=>value.toLowerCase()).includes(shrubName.value.toLowerCase())) return;

    shrubs.value.push(shrubName.value);
    addShrubIsOpen.value = false;
    shrubName.value = '';
}

</script>
    
<style>
#add-shrub-modal {
    position: absolute;
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: .5em;
    z-index: 10;
    height: 5em;
    width: 20em;
    background-color: white;
    border: .1px solid black;
    border-radius: .5em;
    font-size: small;
    padding: 1em;
    margin: .05em;
}

#add-shrub-button {
    font-size: small;
    font-weight: normal;
    text-align: center;
}
</style>