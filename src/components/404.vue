<template>
  <div class="flex flex-col">
    <div
      class="top-0 w-screen h-full px-20 py-36 justify-items-center bg-merah"
    >
      <div
        class="
          h-96
          text-9xl
          col-span-6
          font-thin
          text-white
          m-20
          flex
          justify-items-center
          text-center
          flex-col
        "
      >
        <FromRight delay="1" duration="2">
          <p>404</p>
        </FromRight>
        <FromLeft delay="1" duration="2">
          <p class="text-4xl font-thin pt-10">
            The page you're looking for does not exist
          </p>
        </FromLeft>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import FromLeft from "./transitions/fromLeft.vue";
import FromRight from "./transitions/fromRight.vue";
import FromBottom from "./transitions/fromBottom.vue";
import FromTop from "./transitions/fromTop.vue";
import Fade from "./transitions/Fade.vue";

export default {
  components: {
    FromLeft,
    FromRight,
    FromBottom,
    FromTop,
    Fade,
  },
  setup() {
    return {};
  },
};
</script>
