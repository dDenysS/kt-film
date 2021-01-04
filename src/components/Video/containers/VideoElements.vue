<template>
    <q-splitter
            elevated
            :class="['root', { 'hidden-tab': !tab }]">
        <template v-slot:before>
            <q-tabs
                    v-model="tab"
                    vertical
                    class="text-teal"
            >
                <q-tab name="templates" icon="texture" label="Templates"/>
                <q-tab name="text" icon="text_fields" label="Text"/>
                <q-tab name="photos" icon="insert_photo" label="Photos"/>
                <q-tab name="icons" icon="mood" label="Icons"/>
                <q-tab name="scenes" icon="slideshow" label="Scenes"/>
            </q-tabs>
        </template>

        <template v-slot:after>
            <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-up"
            >
                <q-tab-panel name="templates">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Templates</h4>
                        <q-btn @click="tab = ''" round color="primary" icon="close"/>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="text">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Animation</h4>
                        <q-btn @click="tab = ''" round color="primary" icon="close"/>
                    </div>
                    <p>   <q-btn @click="handleAnimation" round color="primary">Animation</q-btn></p>
                    <p>   <q-btn @click="handleGenerateVideo" round color="primary">Generate video</q-btn></p>
                </q-tab-panel>

                <q-tab-panel name="photos">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Photos</h4>
                        <q-btn @click="tab = ''" round color="primary" icon="close"/>
                    </div>
                    <photos/>
                </q-tab-panel>

                <q-tab-panel name="icons">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Icons</h4>
                        <q-btn @click="tab = ''" round color="primary" icon="close"/>
                    </div>
                    <div>
                        <q-form сlass="q-mb-md" action="https://some-url.com" method="post">
                            <q-input  сlass="q-mb-md" name="firstname" style="margin-bottom:10px;" placeholder="Input you svg" />
                            <q-btn label="Submit" type="submit" color="primary"/>
                                <!-- ... -->
                        </q-form>
                        <q-file class="q-mb-md" color="grey-3" outlined label-color="orange" label="Load own svg">
                            <template v-slot:append>
                                <q-icon name="attachment" color="orange" />
                            </template>
                        </q-file>
                    </div>
                    <icons/>
                </q-tab-panel>
                <q-tab-panel name="scenes">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Scenes</h4>
                        <q-btn @click="tab = ''" round color="primary" icon="close"/>
                    </div>
                    <q-btn @click="addNewScene" align="between" class="btn-fixed-width" color="accent"
                           label="Add new scene" icon="add"/>
                    <scenes-nav/>
                </q-tab-panel>
            </q-tab-panels>
        </template>
    </q-splitter>
</template>

<script>
import ScenesNav from './ScenesNav'
import Photos from './Photos'
import Icons from './Icons'

export default {
    name: 'VideoElements',
    components: {
        ScenesNav,
        Photos,
        Icons
    },
    data: () => ({
        tab: ''
    }),
    methods: {
        addNewScene() {
            this.$vCanvasController.addScene()
        },
        handleAnimation() {
            this.$vCanvasController.addAnimation()
        },
        handleGenerateVideo() {
            this.$vCanvasController.generateVideo()
        }
    }
}
</script>

<style scoped>
    .root {
        height: calc(100vh - 51px);
        background-color: #fff;
    }

    .root >>> .q-panel > div {
        height: calc(100vh - 51px);
        display: flex;
        flex-direction: column;
    }


    .root >>> .q-splitter__after {
        z-index: 2;
        background-color: #fff;
        position: absolute;
        width: 400px;
        left: 95px;
        height: calc(100vh - 51px);
    }

    .hidden-tab >>> .q-splitter__after {
        display: none;
    }

    .root >>> .q-splitter__separator {
        z-index: 3;
    }
</style>
