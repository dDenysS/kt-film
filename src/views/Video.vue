<template>
    <div class="row">
        <div class="col-shrink">
            <video-elements/>
        </div>
        <div class="col">
            <scenes/>
        </div>
        <div class="col-3"></div>
    </div>
</template>

<script>
    import VideoElements from '../components/Video/containers/VideoElements'
    import Scenes from '../components/Video/containers/Scenes'

    export default {
        name: 'Video',
        components: {
            VideoElements,
            Scenes
        }
    }
</script>
