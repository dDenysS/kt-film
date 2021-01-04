<template>
    <div class="scenes">
        <div class="wrapper">
            <q-card v-for="(preview, index) in previewScenes" :key="index">
                <q-card-section horizontal>
                    <q-img
                            class="col preview"
                            :src="preview"
                    />

                    <q-card-actions vertical class="justify-around">
                        <q-btn @click="handleSwapScene(index, index - 1)" v-if="index" round color="primary"
                               icon="expand_less"/>
                        <q-btn @click="handleRemoveScene(index)" round color="red" icon="delete_forever"/>
                        <q-btn round color="secondary" icon="arrow_right_alt"/>
                        <q-btn @click="handleSwapScene(index,index + 1)"
                               v-if="previewScenes.length && index !== previewScenes.length - 1" round color="primary"
                               icon="expand_more"/>
                    </q-card-actions>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScenesNav',
    data: () => ({
        previewScenes: []
    }),
    mounted() {
        this.setPreviewScenes()
        this.$vCanvasController.ee.$on(this.$vCanvasController.eeTypes.rerender, this.setPreviewScenes)
    },
    beforeDestroy() {
        this.$vCanvasController.ee.$on(this.$vCanvasController.eeTypes.rerender, this.setPreviewScenes)
    },
    methods: {
        setPreviewScenes() {
            this.previewScenes = []
            this.$vCanvasController.fabrics.forEach(fabric => this.previewScenes.push(fabric.toDataURL({
                width: fabric.width,
                height: fabric.height,
                left: 0,
                top: 0,
                format: 'jpeg'
            })))
        },
        handleRemoveScene(index) {
            this.$vCanvasController.removeScene(index)
        },
        handleSwapScene(from, to) {
            this.$vCanvasController.swapScene(from, to)
        }
    }
}
</script>

<style scoped lang="scss">
    .scenes {
        padding: 20px 5px;
        overflow-y: auto;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .preview {
        height: 300px;
    }
</style>
