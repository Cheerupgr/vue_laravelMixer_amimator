<template>
    <div class="win-height" @mousemove="handleMouseMove($event)">
        <div class="inner-content">
            <div class="text-wrap">
                <strong class="text">The teams we help</strong>
            </div>
            <div class="img img-xl">
                <img ref="image" src="/resources/assets/images/illustration01.svg">
            </div>	
        </div>
    </div>
</template>
<script>
import anime from 'animejs'

export default {
    data () {
        return {
            width: null,
            hieght: null,
            mouseState: {
                top: null,
                left: null
            },
            move: {
                x: 0,
                y: 0
            }
        }
    },
    mounted () {
        this.width = window.innerWidth
        this.height = window.innerHeight
        const update = () => {
            this.animate(this.move.x, this.move.y)
            setTimeout(() => {
                update()
            }, 500)
        }
        update()
    },
    methods: {
        handleMouseMove(e) {
           let moveX = 2 * e.screenX / this.width - 1
           let moveY = 2 * e.screenY / this.height - 1
           this.move.x = moveX
           this.move.y = moveY
        },
        animate(moveX, moveY) {
            anime({
                targets: this.$refs.image,
                scale: 1.2,
                easing: 'easeInOutQuad',
                translateX: this.width * 0.05 * moveX * -1,
                translateY: this.height * 0.05 * moveY * -1,
                duration: 500
            })
        }
    }
}
</script>


