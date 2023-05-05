<template>
    <div id="app-container">
        <div id="app-body">
            <slot/>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style>
:root {
    --main-bg-color: white;
    --secondary-bg-color: rgb(221, 221, 221);
    --tertiary-bg-color: rgb(48, 71, 94);
    --main-font-color: rgb(48, 71, 94);
    --main-font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    --button-font-color: rgb(240, 84, 84);
    --button-border-color: rgb(34, 40, 49);
}

body {
    color: var(--main-font-color);
    margin: 0px;
    padding: 0px;
    border: 0px;
    border: none;
    font-family: var(--main-font-family);
}

#app-header  {
    display: grid;
    top: 0;
    left: 0;
    width: 100%;
}

#app-header div {
    padding: 1em;
}

button {
    all: unset;
    border: 1px solid var(--button-border-color);
    padding: .5em;
    border-radius: .5em;
}

button:hover {
    cursor: pointer;
    background-color: var(--button-border-color);
    color: white;
}

button:active {
    transform: scale(1.1);
}

input {
    all: unset;
    border: 1px solid var(--button-border-color);
    color: var(--main-font-color);
    font-size: small;
    font-weight: normal;
    padding: .5em;
    border-radius: .5em; 
}

select {
    all: unset;
    border: 1px solid var(--button-border-color);
    color: var(--main-font-color);
    font-size: small;
    font-weight: normal;
    width: 10em;
    padding: .5em;
    border-radius: .5em;
}

select:hover {
    cursor: pointer;
}
</style>