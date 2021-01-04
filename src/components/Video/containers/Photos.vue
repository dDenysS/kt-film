<template>
    <div class="root">
        <button class="item" v-for="image in images" :key="image" @click="handleClickImage(image)">
            <q-img class="image" :src="image" alt=""/>
        </button>
    </div>
</template>

<script>
import Img1 from '../../../assets/forest-1.jpg'
import Img2 from '../../../assets/forest-2.jpg'
import Img3 from '../../../assets/forest-3.jpg'
import Img4 from '../../../assets/forest-4.jpg'

export default {
    name: 'Photos',
    data: () => ({
        images: [Img1, Img2, Img3, Img4]
    }),
    methods:{
        handleClickImage(image) {
            this.$vCanvasController.addImage(image)
        }
    }
}
</script>

<style lang="scss" scoped>
    .root {
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
    }

    .item {
        background-color: transparent;
        padding: 0;
        border: none;
    }
</style>
