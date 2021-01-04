<template>
    <div class="root">
        <button class="item" v-for="image in images" :key="image" @click="handleClickImage(image)">
            <q-img class="image" :src="image" alt=""/>
        </button>
    </div>
</template>

<script>
import Img1 from '../../../assets/icons/cleaner.svg'
import Img2 from '../../../assets/icons/floor.svg'
import Img3 from '../../../assets/icons/letter-a.svg'
import Img4 from '../../../assets/icons/rangoli.svg'
import Img5 from '../../../assets/icons/smartphone.svg'

export default {
    name: 'Icons',
    data: () => ({
        images: [Img1, Img2, Img3, Img4, Img5]
    }),
    methods: {
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
