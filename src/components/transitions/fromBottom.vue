<template>
    <transition appear @after-enter="fromBottom">
        <slot></slot>
    </transition>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    props: {
        delay : {
            type: Number,
            default: 0
        },
        duration : {
            type: Number,
            default: 1
        }
    },
    setup(props) {
      const fromBottom = (el) => {
        gsap.from(el, {
          yPercent: 30,
          autoAlpha: 0,
          delay: props.delay,
          duration: props.duration,
          scrollTrigger: {
            trigger: el,
          },
        })
      };
      return { fromBottom };
    },
}
</script>

<style scoped>

</style>