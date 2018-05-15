<template>
    <div class="why-section">
        <div :is="currentComponent"
            @mousewheel.native="handleScroll($event)"
            @click.native="handleScroll($event)"
            @mousedown="handleScroll($event)"
            @mouseup="handleScroll($event)"
            @mousemove="handleScroll($event)"></div>
        <a href="#" class="close"><i class="icon-cross"></i></a>
        <a href="#" class="link-down"><i class="icon-arrow-down"></i></a>
    </div>
</template>

<script>
import Comp1 from './Comp1.vue'
import Comp2 from './Comp2.vue'
import Comp3 from './Comp3.vue'
import Comp4 from './Comp4.vue'
import Comp5 from './Comp5.vue'
import Comp6 from './Comp6.vue'
import Comp7 from './Comp7.vue'
import Comp8 from './Comp8.vue'
import Comp9 from './Comp9.vue'
import Comp10 from './Comp10.vue'
import Comp11 from './Comp11.vue'
import Comp12 from './Comp12.vue'
import Comp13 from './Comp13.vue'
import Comp14 from './Comp14.vue'
import Comp15 from './Comp15.vue'
import Comp16 from './Comp16.vue'
import Comp17 from './Comp17.vue'

export default {
    data () {
        return {
            pages: [
                Comp1,
                Comp2,
                Comp3,
                Comp4,
                Comp5,
                Comp6,
                Comp7,
                Comp8,
                Comp9,
                Comp10,
                Comp11,
                Comp12,
                Comp13,
                Comp14,
                Comp15,
                Comp16,
                Comp17
            ],
            pageNum: 0,
            currentComponent: null
        }
    },
    mounted () {
        this.currentComponent = this.pages[this.pageNum]
    },
    methods: {
        handleScroll (e) {
            if (e.deltaY > 20) {
                this.showNextScreen()
            } else if (e.deltaY < -20) {
                this.showPrevScreen()
            }
        },
        showNextScreen () {
            if (this.pageNum < this.pages.length - 1) {
                this.pageNum = this.pageNum + 1
            } else {
                return
            }
            
            this.currentComponent = this.pages[this.pageNum]
        },
        showPrevScreen () {
            if (this.pageNum == 0) {
                return
            } else {
                this.pageNum = this.pageNum - 1
            }
            
            this.currentComponent = this.pages[this.pageNum]
        }
    },
    components: {
        Comp1
    }
}
</script>
<style>
.main-container {

}
</style>


