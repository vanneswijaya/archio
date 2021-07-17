<template>
    <transition appear @after-enter="scaleLine">
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
      const scaleLine = (el) => {
        gsap.from(el, {
          scaleX: 0,
          delay: props.delay,
          transformOrigin: "left center",
          duration: props.duration,
          scrollTrigger: {
            trigger: el,
          },
        })
      };
      return { scaleLine };
    },
}
</script>

<style scoped>

</style>