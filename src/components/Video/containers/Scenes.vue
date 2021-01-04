<template>
    <VueSlickCarousel
            v-if="countCanvas"
            :key="updateKey"
            class="slider"
            v-bind="slideSettings"
            @afterChange="handleChangeSlide">
        <div v-for="(_, index) in countCanvas" :key="index">
            <div class="slide-wrapper" :ref="`canvasVideo${index}`">
            </div>
        </div>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
    name: 'Scenes',
    components: {
        VueSlickCarousel
    },
    data: () => ({
        countCanvas: 0,
        updateKey: 0,
        slideSettings: {
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
            swipe: false
        }
    }),
    mounted() {
        const canvases = new Array(this.countCanvas).fill('').map((_, i) => this.$refs[`canvasVideo${i}`].$el)
        this.$vCanvasController.injectCanvases(canvases)

        this.$vCanvasController.ee.$on(this.$vCanvasController.eeTypes.rerender, this.handleNewSlide)
    },
    beforeDestroy() {
        this.$vCanvasController.ee.$off(this.$vCanvasController.eeTypes.rerender, this.handleNewSlide)
    },
    methods: {
        injectScenes() {
            this.$nextTick(() => {
                const canvases = new Array(this.countCanvas).fill('').map((_, i) => this.$refs[`canvasVideo${i}`])
                this.$vCanvasController.injectCanvases(canvases)
            })
        },
        handleChangeSlide(activeIndex) {
            this.$vCanvasController.activeIndexCanvas = activeIndex
        },
        handleNewSlide() {
            this.countCanvas = this.$vCanvasController.canvases.length
            this.updateKey++

            this.injectScenes()
        }
    }
}
</script>

<style scoped lang="scss">
    .slider {
        ::v-deep {
            .slick-dots button:before {
                font-size: 10px;
            }
        }
    }

    .slide-wrapper {
        height: calc(100vh - 100px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slide-wrapper {
        ::v-deep {
            .canvas {
                box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
            }
        }
    }
</style>
