<template>
  <div class="bottom-0 flex flex-col items-center">
    <span
      class="
        relative
        z-10
        p-2
        text-xs
        leading-none
        text-white
        whitespace-no-wrap
        bg-dark
        shadow-lg
        rounded-lg
        text-center
        pointer-events-none
      "
      ><slot></slot
    ></span>
    <div class="w-2 h-2 -mt-1 transform rotate-45 bg-dark"></div>
  </div>
</template>

<script></script>
