<template>
  <div class="w-screen h-screen flex justify-center items-center bg-merah">
    <div class="loading-bars">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.loading-bars {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loading-bars div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #d36135;
  animation: loading-bars 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loading-bars div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.loading-bars div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.loading-bars div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes loading-bars {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
