<template>
  <Loading v-if="loaded"></Loading>
  <div v-else class="flex flex-col bg-merah">
    <section
      class="w-screen h-screen bg-cover flex flex-col z-0"
      style="
        background-image: url('https://www.huntingforgeorge.com/wp-content/uploads/Courtyard-house-auhaus-architecture-lifespaces-group-hunting-for-george-feature.jpg');
      "
    >
      <div class="h-full w-full ml-36 mt-20">
        <div class="text-7xl text-white font-medium leading-tight">
          <p>Our latest projects</p>
          <p class="text-jingga">for better living.</p>
        </div>
      </div>
    </section>
    <section class="h-full w-screen bg-merah">
      <div class="flex flex-wrap mx-20 my-28 gap-x-10 gap-y-20">
        <div
          v-for="work in works"
          :key="work"
          class="relative w-96 h-96 shadow-lg bg-cover bg-center cursor-pointer"
          :style="imagesToUrlStyle(work.mainImage.url)"
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
            {{ work.title }}
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
          src="https://i.pinimg.com/originals/5a/e3/eb/5ae3eb73f733be342867f7f1b5fd98fd.jpg"
          alt=""
        />
      </div>
      <div class="w-1/2 h-full ml-20 mt-20 flex flex-col gap-10">
        <div class="text-7xl text-white font-medium leading-tight">
          Make your ideal project happen now.<br />
          <p class="text-hijaumuda">Are you ready?</p>
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
import api from "../api/api.js";
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
      url: "http://localhost:1337",
      loaded: true,
    };
  },
  methods: {
    async refreshPage() {
      this.works = await api.getAllWorks().then((result) => {
        return result.data;
      });
      console.log(this.works);
    },
    imagesToUrl(image) {
      return this.url + image;
    },
    imagesToUrlStyle(image) {
      return "background-image: url('" + this.url + image + "')";
    },
  },
  async created() {
    await this.refreshPage();
    console.log(this.loaded);
    setTimeout(() => {
      this.loaded = false;
    }, 3000);
    console.log(this.loaded);
  },
};
</script>
