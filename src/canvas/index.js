import Vue from 'vue'
import { fabric } from 'fabric'

const eventTypes = {
    rerender: 'rerender'
}

class CanvasController {
    constructor() {
        this.ee = new Vue()
        this.eeTypes = eventTypes

        this.canvases = []
        this.fabrics = []

        this.activeIndexCanvas = null
    }

    get activeFabric() {
        return this.fabrics[this.activeIndexCanvas]
    }

    injectCanvases(elements) {
        elements.forEach((el, index) => el.appendChild(this.canvases[index]))
    }

    removeScene(index) {
        this.canvases.splice(index, 1)
        this.fabrics.splice(index, 1)

        if (this.activeIndexCanvas > this.canvases.length - 1) {
            this.activeIndexCanvas = this.canvases.length - 1
        }

        this.ee.$emit(eventTypes.rerender)
    }

    addScene() {
        if (!this.canvases.length) this.activeIndexCanvas = 0

        const div = document.createElement('div')
        const canvas = document.createElement('canvas')
        canvas.width = 400
        canvas.height = 600
        canvas.classList.add('canvas')

        div.appendChild(canvas)

        this.canvases.push(div)

        const fabricInstance = new fabric.Canvas(canvas, {
            backgroundColor: '#fff'
        })
        fabricInstance.on('mouse:wheel', opt => {
            const delta = opt.e.deltaY
            let zoom = fabricInstance.getZoom()
            zoom *= 0.999 ** delta
            if (zoom > 20) zoom = 20
            if (zoom < 0.01) zoom = 0.01
            fabricInstance.setZoom(zoom)
            opt.e.preventDefault()
            opt.e.stopPropagation()
        })
        this.fabrics.push(fabricInstance)

        this.ee.$emit(eventTypes.rerender)
    }

    swapScene(from, to) {
        [this.canvases[from], this.canvases[to]] = [this.canvases[to], this.canvases[from]]
        ;[this.fabrics[from], this.fabrics[to]] = [this.fabrics[to], this.fabrics[from]]
        this.ee.$emit(eventTypes.rerender)
    }

    addImage(path) {
        if (this.activeIndexCanvas === null) return

        const self = this
        fabric.Image.fromURL(path, img => {
            img.scale(1).set({
                left: 100,
                top: 100
            })

            self.activeFabric.add(img).setActiveObject(img)
        })
    }

    generateFrame(_canvas) {
        return new Promise(resolve => {
            const canvas = _canvas.querySelector('.lower-canvas.canvas')

            const stream = canvas.captureStream(25)

            const options = { mimeType: 'video/webm; codecs=vp9' }
            const mediaRecorder = new MediaRecorder(stream, options)

            function handleDataAvailable(event) {
                console.log('data-available',event.data.size)
                if (event.data.size > 0) {
                    console.log(event)
                    resolve(event.data)
                } else {
                    resolve(null)
                }
            }

            mediaRecorder.ondataavailable = handleDataAvailable
            mediaRecorder.start()

            setTimeout(() => {
                mediaRecorder.stop()
            }, 5000)
        })
    }

    async generateVideo() {
        const recordedChunks = []

        for (let i = 0; i < this.canvases.length; i++) {
            const data = await this.generateFrame(this.canvases[i])
            if (data) recordedChunks.push(data)
        }

        const blob = new Blob(recordedChunks, {
            type: 'video/webm'
        })

        var url = URL.createObjectURL(blob)
        var a = document.createElement('a')
        document.body.appendChild(a)
        a.style = 'display: none'
        a.href = url
        a.download = 'test.webm'
        a.click()
        window.URL.revokeObjectURL(url)
        //await axios({
        //    method: 'post',
        //    url: 'http://localhost:5555',
        //    data: form,
        //    headers: { 'Content-Type': 'multipart/form-data' }
        //})
    }

    addAnimation() {
        const canvas = this.activeFabric
        const Cross = fabric.util.createClass(fabric.Object, {
            objectCaching: false,
            initialize: function (options) {
                this.callSuper('initialize', options)
                this.animDirection = 'up'

                this.width = 100
                this.height = 100

                this.w1 = this.h2 = 100
                this.h1 = this.w2 = 30
            },

            animateWidthHeight: function () {
                const interval = 2

                if (this.h2 >= 30 && this.h2 <= 100) {
                    const actualInterval = (this.animDirection === 'up' ? interval : -interval)
                    this.h2 += actualInterval
                    this.w1 += actualInterval
                }

                if (this.h2 >= 100) {
                    this.animDirection = 'down'
                    this.h2 -= interval
                    this.w1 -= interval
                }
                if (this.h2 <= 30) {
                    this.animDirection = 'up'
                    this.h2 += interval
                    this.w1 += interval
                }
            },

            _render: function (ctx) {
                ctx.fillRect(-this.w1 / 2, -this.h1 / 2, this.w1, this.h1)
                ctx.fillRect(-this.w2 / 2, -this.h2 / 2, this.w2, this.h2)
            }
        })

        canvas.add(
            new Cross({ top: 100, left: 100 })
        )

        setTimeout(function animate() {
            canvas.forEachObject(function (obj) {
                if (!obj.animateWidthHeight) return null
                obj.animateWidthHeight()
                obj.dirty = true
            })
            canvas.renderAll()
            setTimeout(animate, 10)
        }, 10)
    }
}


export const VCanvasController = new CanvasController()
