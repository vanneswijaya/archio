<template>
    <transition appear @after-enter="fade">
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
      const fade = (el) => {
        gsap.from(el, {
          autoAlpha: 0,
          delay: props.delay,
          duration: props.duration,
          scrollTrigger: {
            trigger: el
          },
        })
      };
      return { fade };
    },
}
</script>

<style scoped>

</style>