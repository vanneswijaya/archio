<template>
    <transition appear @after-enter="fromLeft">
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
      const fromLeft = (el) => {
        gsap.from(el, {
          xPercent: -30,
          delay: props.delay,
          autoAlpha: 0,
          duration: props.duration,
          scrollTrigger: {
            trigger: el,
          },
        })
      };
      return { fromLeft };
    }
}
</script>

<style scoped>
</style>