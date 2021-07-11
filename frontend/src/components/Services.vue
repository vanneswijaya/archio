<template>
  <Loading v-if="loaded"></Loading>
  <div v-else class="flex flex-col bg-merah">
    <section
      class="w-screen h-screen bg-cover bg-center flex flex-row relative z-0"
      style="
        background-image: url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104938059/original/cecf195734c5b725db32a9baca77786a6379adbb/model-and-render-high-end-architectural-projects.jpg');
      "
    >
      <div class="h-full w-1/3 ml-48 mt-20 absolute z-50">
        <div class="text-white text-9xl font-semibold leading-tight">
          Our quality services.
        </div>
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
          z-20
        "
      ></div>
    </section>
    <section class="w-screen h-24 grid grid-cols-3 cursor-pointer">
      <div
        :class="{ isClicked: exterior }"
        class="
          col-span-1
          w-full
          h-full
          bg-merah
          hover:bg-jingga
          text-white
          hover:text-black
          cursor-pointer
          grid
          justify-items-center
          items-center
        "
        @click="clickChange('exterior')"
      >
        <p class="text-3xl font-medium">Exterior</p>
      </div>
      <div
        :class="{ isClicked: interior }"
        class="
          col-span-1
          w-full
          h-full
          bg-merah
          hover:bg-jingga
          text-white
          hover:text-black
          cursor-pointer
          grid
          justify-items-center
          items-center
        "
        @click="clickChange('interior')"
      >
        <p class="text-3xl font-medium">Interior</p>
      </div>
      <div
        :class="{ isClicked: animation }"
        class="
          col-span-1
          w-full
          h-full
          bg-merah
          hover:bg-jingga
          text-white
          hover:text-black
          cursor-pointer
          grid
          justify-items-center
          items-center
        "
        @click="clickChange('animation')"
      >
        <p class="text-3xl font-medium">Animation</p>
      </div>
    </section>
    <section class="w-screen h-screen flex flex-col bg-jingga">
      <div v-show="exterior"></div>
      <div v-show="interior"></div>
      <div v-show="animation"></div>
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
      exterior: true,
      interior: false,
      animation: false,
    };
  },
  methods: {
    async refreshPage() {
      this.works = await api.getAllWorks().then((result) => {
        return result.data;
      });
      console.log(this.works);
    },
    clickChange(clicked) {
      this.exterior = false;
      this.interior = false;
      this.animation = false;
      if (clicked == "exterior") {
        this.exterior = true;
      }
      if (clicked == "interior") {
        this.interior = true;
      }
      if (clicked == "animation") {
        this.animation = true;
      }
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

<style scoped>
.isClicked {
  background-color: #d36135;
  color: black;
}
</style>
