<template>
  <Loading v-if="loaded"></Loading>
  <div v-else class="flex flex-col bg-merah">
    <section
      class="w-screen h-screen bg-cover bg-center flex flex-col z-0"
      style="
        background-image: url('https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_17-2396x1600.jpg');
      "
    >
      <div class="h-full w-full ml-16 mt-12">
        <div class="text-7xl text-white font-medium leading-tight">
          <p>Our recent works</p>
          <p class="text-jingga">for better living.</p>
        </div>
      </div>
    </section>
    <section class="h-full w-screen bg-merah">
      <div class="flex flex-wrap mx-20 my-28 gap-x-10 gap-y-20">
        <div
          class="relative w-96 h-96 shadow-lg bg-cover bg-center cursor-pointer"
          style="
            background-image: url('https://drowart.com/wp-content/uploads/2021/05/WANICKI_salon_2-1386x1600.jpg');
          "
        >
          <div
            class="
              absolute
              p-5
              2xl:text-5xl
              text-3xl text-white
              font-semibold
              z-20
            "
          >
            Modern Interior
          </div>
          <div
            class="
              bg-gradient-to-b
              from-black
              via-transparent
              to-transparent
              absolute
              opacity-70
              w-full
              h-full
              inset-0
            "
          ></div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-row-reverse w-screen h-full bg-merah items-center mb-20"
    >
      <div class="w-1/2">
        <img
          src="https://parametric-architecture.com/wp-content/uploads/2019/09/veronang_PA_03.jpg"
          alt=""
        />
      </div>
      <div class="w-1/2 h-full mx-20 mt-20 flex flex-col gap-10">
        <div class="text-7xl text-white font-medium leading-tight">
          Take action and enjoy the benefits.<br />
          <p class="text-hijaumuda">Ready to work with us?</p>
        </div>
        <div class="flex flex-row gap-10">
          <a href="">
            <div
              class="
                p-4
                px-10
                rounded-xl
                bg-transparent
                border-2
                hover:border-transparent
                border-white
                hover:bg-jingga
                transform
                text-white
                font-semibold
                text-xl
                w-full
                text-center
              "
            >
              <button>Book Appointment</button>
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
                hover:border-transparent
                border-white
                hover:bg-jingga
                transform
                text-white
                font-semibold
                text-xl
                w-full
                text-center
              "
            >
              <button>Contact Us</button>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Loading from "./Loading.vue";

export default {
  components: {
    Loading,
  },
  setup() {
    return {};
  },
  data() {
    return {
      loaded: true,
    };
  },
  async created() {
    console.log(this.loaded);
    setTimeout(() => {
      this.loaded = false;
    }, 3000);
    console.log(this.loaded);
  },
};
</script>
