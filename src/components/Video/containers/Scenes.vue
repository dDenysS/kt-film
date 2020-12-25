<template>
    <VueSlickCarousel v-bind="slideSettings">
        <div>
            <div class="slide-wrapper">
                <canvas class="canvas" width="400" height="600" ref="canvasVideo"/>
            </div>
        </div>
        <div>
            <div class="slide-wrapper">
                <canvas class="canvas" width="400" height="600"/>
            </div>
        </div>
        <div>
            <div class="slide-wrapper">
                <canvas class="canvas" width="400" height="600"/>
            </div>
        </div>
        <div>
            <div class="slide-wrapper">
                <canvas class="canvas" width="400" height="600"/>
            </div>
        </div>
    </VueSlickCarousel>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import { fabric } from 'fabric'

    export default {
        name: 'Scenes',
        components: {
            VueSlickCarousel
        },
        data: () => ({
            slideSettings: {
                dots: true,
                arrows: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false
            }
        }),
        mounted() {
            const canvas = new fabric.Canvas(this.$refs.canvasVideo,{
                backgroundColor: '#fff'
            })

            const rect = new fabric.Rect({
                top: 100,
                left: 100,
                width: 60,
                height: 70,
                fill: 'red'
            })

            canvas.add(rect)

            canvas.setZoom(1)
        }
    }
</script>

<style scoped lang="scss">
    .canvas {
        margin-left: auto;
        margin-right: auto;
    }
</style>
