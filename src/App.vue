<template>
    <q-layout view="hHh LpR lFr">

        <q-header bordered class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container class="container">
            <router-view/>
        </q-page-container>

    </q-layout>
</template>


<script>
    export default {
        name: 'LayoutDefault',
        data() {
            return {
                leftDrawerOpen: false
            }
        }
    }
</script>

<style lang="scss">
    body {
        background-color: #f5f5f5;
    }

    .container {
        min-height: 100vh;
    }
</style>
