<template>
    <div ref="cover" class="win-height">
        <div class="inner-content">
            <div class="text-wrap" ref="title">
                <strong class="text">So We Work to Understand Your Users</strong>
            </div>
            <div class="img">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="310px" height="310px" viewBox="0 0 310 310" version="1.1">
                    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                    <title>Illustration</title>
                    <desc>Created with Sketch.</desc>
                    <defs/>
                    <g id="Mayven-2.0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="The-Teams-We-Help" transform="translate(-565.000000, -6422.000000)">
                            <g id="9" transform="translate(0.000000, 6112.000000)">
                                <g id="Content" transform="translate(180.000000, 200.000000)">
                                    <g id="Illustration" transform="translate(387.000000, 112.000000)">
                                        <circle ref="circle1" id="Light" stroke="#FFFFFF" stroke-width="2" opacity="0.100000001" cx="153" cy="153" r="154"/>
                                        <circle ref="circle2" id="Light" stroke="#FFFFFF" stroke-width="2" opacity="0.200000003" cx="153" cy="153" r="110"/>
                                        <g id="Bulb" transform="translate(102.000000, 83.000000)">
                                            <path ref="lamp" d="M82.7822266,91.063341 C93.7699483,83.3308433 102,66.8226046 102,51 C102,22.8334778 79.1665222,0 51,0 C22.8334778,0 0,22.8334778 0,51 C0,67.2494734 7.68599757,81.5403073 19.4382422,91.063341 C27.2050781,97.3569336 31.2146168,97.3472953 31.8693265,101.934158 C31.9910659,102.787058 32.1202302,109.079354 32.1202302,109.079354 C32.1202302,109.079354 71.8556132,109.079354 71.8556132,109.020766 C71.8556132,108.962178 71.8556132,103.783302 71.8556132,102.521973 C71.8556132,98.3744361 77.8827219,94.5113177 82.7822266,91.063341 Z" id="Oval-12" fill="#FFFFFF"/>
                                            <path ref="lamp_outline2" d="M82.7822266,91.063341 C93.7699483,83.3308433 102,66.8226046 102,51 C102,22.8334778 79.1665222,0 51,0 C22.8334778,0 0,22.8334778 0,51 C0,67.2494734 7.68599757,81.5403073 19.4382422,91.063341 C27.2050781,97.3569336 31.2146168,97.3472953 31.8693265,101.934158 C32.2122396,104.336589 32.2122396,122.445778 32.2122396,126.038009 C32.2122396,131.30013 31.8693265,132.897392 37.866761,132.897392 C42.584947,132.897392 51.3384187,132.893717 52.0136623,132.897392 C52.8942387,132.902185 61.4116819,132.897392 66.3471425,132.897392 C71.8556132,132.897392 71.8556132,130.828451 71.8556132,126.038009 C71.8556132,122.250808 71.8556132,106.546824 71.8556132,102.521973 C71.8556132,98.3744361 77.8827219,94.5113177 82.7822266,91.063341 Z" id="Oval-12" stroke="#FFFFFF" stroke-width="2"/>
                                            <path ref="lamp_outline3" d="M42.902697,132.796771 C42.902697,133.486646 42.902697,134.754561 42.902697,136.600518 C42.902697,139.369453 44.244685,139.087584 45.992184,139.087584 C47.739683,139.087584 56.5120659,139.087584 58.1042317,139.087584 C59.6963975,139.087584 60.9654369,139.20927 60.9654369,136.600518 C60.9654369,134.86135 60.9654369,133.593434 60.9654369,132.796771" id="Path-28" stroke="#FFFFFF" stroke-width="2"/>
                                            <path ref="lamp_outline4" d="M32.5906459,108.979649 L71.3562509,108.979649" id="Path-29" stroke="#FFFFFF" stroke-width="2"/>
                                            <path ref="lamp_outline5" d="M32.5906459,116.979649 L71.3562509,116.979649" id="Path-29" stroke="#FFFFFF" stroke-width="2"/>
                                            <path ref="lamp_outline6" d="M32.5906459,124.979649 L71.3562509,124.979649" id="Path-29" stroke="#FFFFFF" stroke-width="2"/>
                                            <path ref="lamp_shadow" d="M88.0414018,14.1811299 C65.4562288,16.4551791 53.5497645,28.9943182 52.322009,51.798547" id="Path-30" stroke="#1F3947" stroke-width="2" transform="translate(70.181705, 32.989838) scale(-1, 1) translate(-70.181705, -32.989838) "/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>	
        </div>
    </div>
</template>
<script>
import anime from 'animejs'

export default {
    data () {
        return {
            backgroundEl: null,
            titleEl: null,
            lampEl: null,
            lampOutlineEls: [],
            lampShadowEl: null,
            circleEls: []
        }
    },
    mounted () {
        this.backgroundEl = this.$refs.cover
        this.titleEl = this.$refs.title
        this.lampEl = this.$refs.lamp
        this.lampOutlineEls = [
            this.$refs.lamp_outline2,
            this.$refs.lamp_outline3,
            this.$refs.lamp_outline4,
            this.$refs.lamp_outline5,
            this.$refs.lamp_outline6
        ]
        this.circleEls = [
            this.$refs.circle1,
            this.$refs.circle2
        ]
        this.lampShadowEl = this.$refs.lamp_shadow

        const update = () => {
            this.highLight()
            setTimeout(() => {
                update()
            }, 2000)
        }

        update()
    },
    methods: {
        highLight () {
            console.log('>> highlight')
            anime.timeline()
            .add({
                targets: this.backgroundEl,
                background: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                targets: this.backgroundEl,
                background: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                offset: 0,
                targets: this.titleEl,
                color: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                offset: 1000,
                targets: this.titleEl,
                color: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                offset: 0,
                targets: this.lampEl,
                fill: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                offset: 1000,
                targets: this.lampEl,
                fill: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                offset: 0,
                targets: this.circleEls,
                stroke: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                offset: 1000,
                targets: this.circleEls,
                stroke: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            })
            .add({
                offset: 0,
                targets: this.lampOutlineEls,
                stroke: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 1000,
                targets: this.lampOutlineEls,
                stroke: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: '-=2000',
                targets: this.lampShadowEl,
                stroke: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: '-=2000',
                targets: this.lampShadowEl,
                stroke: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            })
        }
    }
}
</script>

