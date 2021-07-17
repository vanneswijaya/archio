<template>
  <Loading v-if="!loaded"></Loading>
  <div v-else class="flex flex-col bg-merah overflow-hidden">
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
          class="
            relative
            w-96
            h-96
            shadow-lg
            bg-cover bg-center
            cursor-pointer
            group
          "
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
              font-thin
              z-20
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              ease-in-out
            "
          >
            Modern Living Room
          </div>
          <div
            class="
              bg-gradient-to-b
              from-black
              via-transparent
              to-transparent
              absolute
              opacity-0
              w-full
              h-full
              inset-0
              group-hover:opacity-95
              transition
              duration-500
              ease-in-out
            "
          ></div>
        </div>
        <div
          class="
            relative
            w-96
            h-96
            shadow-lg
            bg-cover bg-center
            cursor-pointer
            group
          "
          style="
            background-image: url('https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_01_15-2346x1600.jpg');
          "
        >
          <div
            class="
              absolute
              p-5
              2xl:text-5xl
              text-3xl text-white
              font-thin
              z-20
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              ease-in-out
            "
          >
            Outdoor Bathroom
          </div>
          <div
            class="
              bg-gradient-to-b
              from-black
              via-transparent
              to-transparent
              absolute
              opacity-0
              w-full
              h-full
              inset-0
              group-hover:opacity-95
              transition
              duration-500
              ease-in-out
            "
          ></div>
        </div>
        <div
          class="
            relative
            w-96
            h-96
            shadow-lg
            bg-cover bg-center
            cursor-pointer
            group
          "
          style="
            background-image: url('https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_01_1-2402x1600.jpg');
          "
        >
          <div
            class="
              absolute
              p-5
              2xl:text-5xl
              text-3xl text-white
              font-thin
              z-20
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              ease-in-out
            "
          >
            Cozy Exterior
          </div>
          <div
            class="
              bg-gradient-to-b
              from-black
              via-transparent
              to-transparent
              absolute
              opacity-0
              w-full
              h-full
              inset-0
              group-hover:opacity-95
              transition
              duration-500
              ease-in-out
            "
          ></div>
        </div>
        <div
          class="
            relative
            w-96
            h-96
            shadow-lg
            bg-cover bg-center
            cursor-pointer
            group
          "
          style="
            background-image: url('https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_03_2-1120x1600.jpg');
          "
        >
          <div
            class="
              absolute
              p-5
              2xl:text-5xl
              text-3xl text-white
              font-thin
              z-20
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              ease-in-out
            "
          >
            Elegant Closet
          </div>
          <div
            class="
              bg-gradient-to-b
              from-black
              via-transparent
              to-transparent
              absolute
              opacity-0
              w-full
              h-full
              inset-0
              group-hover:opacity-95
              transition
              duration-500
              ease-in-out
            "
          ></div>
        </div>
        <div
          class="
            relative
            w-96
            h-96
            shadow-lg
            bg-cover bg-center
            cursor-pointer
            group
          "
          style="
            background-image: url('https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_28-scaled.jpg');
          "
        >
          <div
            class="
              absolute
              p-5
              2xl:text-5xl
              text-3xl text-white
              font-thin
              z-20
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              ease-in-out
            "
          >
            Modern Meeting Room
          </div>
          <div
            class="
              bg-gradient-to-b
              from-black
              via-transparent
              to-transparent
              absolute
              opacity-0
              w-full
              h-full
              inset-0
              group-hover:opacity-95
              transition
              duration-500
              ease-in-out
            "
          ></div>
        </div>
        <div
          class="
            relative
            w-96
            h-96
            shadow-lg
            bg-cover bg-center
            cursor-pointer
            group
          "
          style="
            background-image: url('https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_02_3-scaled.jpg');
          "
        >
          <div
            class="
              absolute
              p-5
              2xl:text-5xl
              text-3xl text-white
              font-thin
              z-20
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              ease-in-out
            "
          >
            Relaxing Interior
          </div>
          <div
            class="
              bg-gradient-to-b
              from-black
              via-transparent
              to-transparent
              absolute
              opacity-0
              w-full
              h-full
              inset-0
              group-hover:opacity-95
              transition
              duration-500
              ease-in-out
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
          <a href="https://wa.me/6285711111111">
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
          <router-link to="/contact">
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
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import FromLeft from "./transitions/fromLeft.vue";
import FromRight from "./transitions/fromRight.vue";
import FromBottom from "./transitions/fromBottom.vue";
import FromTop from "./transitions/fromTop.vue";
import Fade from "./transitions/Fade.vue";

export default {
  components: {
    Loading,
    FromLeft,
    FromRight,
    FromBottom,
    FromTop,
    Fade,
  },
  setup() {
    return {};
  },
  data() {
    return {
      loaded: false,
    };
  },
  async mounted() {
    var imagesToPreload = [
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_17-2396x1600.jpg",
      "https://drowart.com/wp-content/uploads/2021/05/WANICKI_salon_2-1386x1600.jpg",
      "https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_01_15-2346x1600.jpg",
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_01_1-2402x1600.jpg",
      "https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_03_2-1120x1600.jpg",
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_28-scaled.jpg",
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_02_3-scaled.jpg",
      "https://parametric-architecture.com/wp-content/uploads/2019/09/veronang_PA_03.jpg",
    ];
    // console.log(imagesToPreload);
    const images = imagesToPreload.map((imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(images)
      .then(() => {
        // console.log("Images loaded!");
        this.loaded = true;
      })
      .catch((error) => {
        console.error("Some image(s) failed loading!");
        console.error(error.message);
      });
  },
};
</script>
