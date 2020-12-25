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
                        <q-btn round color="primary" icon="close"/>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="text">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Text</h4>
                        <q-btn round color="primary" icon="close"/>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="photos">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Photos</h4>
                        <q-btn round color="primary" icon="close"/>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="icons">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Icons</h4>
                        <q-btn round color="primary" icon="close"/>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                </q-tab-panel>
                <q-tab-panel name="scenes">
                    <div class="q-mb-md row no-wrap justify-between items-center">
                        <h4 class="text-h4 q-ma-none">Scenes</h4>
                        <q-btn round color="primary" icon="close"/>
                    </div>
                    <scenes-nav/>
                </q-tab-panel>
            </q-tab-panels>
        </template>
    </q-splitter>
</template>

<script>
    import ScenesNav from './ScenesNav'

    export default {
        name: 'VideoElements',
        components: {
            ScenesNav
        },
        data: () => ({
            tab: ''
        })
    }
</script>

<style scoped>
    .root {
        height: calc(100vh - 51px);
        background-color: #fff;
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
