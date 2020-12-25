<template>
    <div class="root2">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
    </div>
</template>

<script>
    export default {
        name: 'ScenesNav',
        data: () => ({
        })
    }
</script>

<style scoped lang="scss">
    .root2 {
        height: 500px;
        display: flex;
        flex-direction:column;
        overflow-y: auto;
    }
    .slide {
        width: 200px;
        height: 200px;
        background: url(https://via.placeholder.com/450) center no-repeat;
        background-size: contain;
    }
</style>
