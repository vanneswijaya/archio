<template>
    <transition appear @after-enter="fromRight">
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
      const fromRight = (el) => {
        gsap.from(el, {
          xPercent: 30,
          autoAlpha: 0,
          delay: props.delay,
          duration: props.duration,
          scrollTrigger: {
            trigger: el,
          },
        })
      };
      return { fromRight };
    },
}
</script>

<style scoped>

</style>