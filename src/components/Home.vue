<template>
  <div class="flex flex-col">
    <section class="flex flex-col h-full w-screen bg-merah">
      <div class="flex flex-row">
        <div class="h-full w-1/3 ml-36 mt-20">
        <div class="text-7xl text-white font-medium leading-tight">
          <p>Designing spatial experience,</p>
          <p class="text-hijaumuda">for better living</p>
        </div>
        </div>
        <div class="h-full w-full mr-36 ml-24">
          <img src="https://images.adsttc.com/media/images/5e5c/e5e5/6ee6/7e0f/0100/0923/original/DT2100.gif?1583146459" alt="">
        </div>
      </div>
      <div class="h-16"></div>
      <div class="flex flex-row ml-36 gap-10">
        <a href="">
        <div
        class="
          p-4
          px-10
          rounded-xl
          bg-transparent
          border-2
          hover:border-0
          border-white
          hover:bg-jingga
          transform
          text-white
          font-semibold
          text-xl
          w-48
          text-center
        "
        >
          <button>About Us</button>
        </div>
        </a>
        <a href="">
        <div
        class="
          p-4
          px-10
          rounded-xl
          bg-transparent
          border-2
          hover:border-0
          border-white
          hover:bg-jingga
          transform
          text-white
          font-semibold
          text-xl
          w-48
          text-center
        "
        >
          <button>Our Works</button>
        </div>
        </a>
        <a href="">
        <div
        class="
          p-4
          px-10
          rounded-xl
          bg-transparent
          border-2
          hover:border-0
          border-white
          hover:bg-jingga
          transform
          text-white
          font-semibold
          text-xl
          w-48
          text-center
        "
        >
          <button>Services</button>
        </div>
        </a>
      </div>
      <div class="h-36"></div>
    </section>
    <section
        class="
          top-0
          w-full
          h-screen
          flex flex-col
          z-0
          bg-cover
        "
        style="background-image: url('https://lumo-visual.com/wp-content/uploads/2013/10/1.jpg')"
    >
      <div class="bg-black bg-opacity-50 absolute w-full h-full"></div>
      <div class="flex flex-col w-1/2 text-white ml-36 mt-36 gap-10 z-50">
        <div class="text-7xl font-bold">
          Aims to Provide Better Living Area
        </div>  
        <div class="text-2xl">
          Architecture Design <br>
          Interior Design <br>
          Structure Planning
        </div>
        <div class="text-l">
          Aims to provide your best living experience through architecture and interior design service.<br>One-stop design solution for your residential or commercial design needs.
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  setup() {
    
  },
  methods: {
    imagesToUrl(image) {
      return this.url + image;
    },
    imagesToUrlStyle(image) {
      return "background-image: url('" + this.url + image + "')";
    },
  },
}
</script>

