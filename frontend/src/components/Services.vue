<template>
  <Loading v-if="loaded"></Loading>
  <div v-else class="flex flex-col bg-merah overflow-hidden">
    <section
      class="w-screen h-screen bg-cover bg-center flex flex-row relative z-0"
      style="
        background-image: url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104938059/original/cecf195734c5b725db32a9baca77786a6379adbb/model-and-render-high-end-architectural-projects.jpg');
      "
    >
      <div class="h-full w-1/3 ml-48 mt-20 absolute z-50">
        <div class="text-white text-9xl font-semibold leading-tight">
          Our
          <p class="text-jingga">quality</p>
          services.
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
          transition
          duration-500
          ease-in-out
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
          transition
          duration-500
          ease-in-out
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
          transition
          duration-500
          ease-in-out
        "
        @click="clickChange('animation')"
      >
        <p class="text-3xl font-medium">Animation</p>
      </div>
    </section>
    <section class="w-screen h-full flex flex-col bg-jingga">
      <div v-show="exterior" class="w-full h-full flex flex-col py-28">
        <div class="grid grid-cols-2 h-64 mx-36">
          <div class="flex flex-col">
            <div class="text-6xl font-semibold text-white inset-y-0 left-0">
              Exterior<br />Design
            </div>
            <div class="w-24 h-1 bg-white mt-5"></div>
          </div>
          <div
            class="text-xl font-light text-white inset-y-0 right-0 text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
            iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
            doloribus doloremque, similique minima aut eveniet magnam
            exercitationem ut. Iusto!
          </div>
        </div>
        <div class="px-36 w-screen h-screen">
          <div
            class="w-full h-full bg-cover bg-center"
            style="
              background-image: url('https://cdn.wallpaper.com/main/g_ad-gin-studio-gb-space-20-facade-1.gif');
            "
          ></div>
        </div>
        <div class="w-screen h-full px-36 pt-20">
          <div
            class="
              py-20
              bg-merah
              h-96
              w-full
              flex flex-row
              items-center
              relative
            "
          >
            <div class="pl-20 pr-28 text-xl text-white font-extralight w-2/3">
              <p class="font-semibold pb-5 text-2xl text-left">
                Why do I need exterior visualization?
              </p>
              <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
                iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
                doloribus doloremque, similique minima aut eveniet magnam
                exercitationem ut. Iusto!
              </p>
            </div>
            <div
              class="w-full h-full flex pr-28 items-center justify-end absolute"
            >
              <img
                class="max-h-72"
                src="https://thumbs.gfycat.com/ConcernedTotalDobermanpinscher-size_restricted.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div v-show="interior" class="w-full h-full flex flex-col py-28">
        <div class="grid grid-cols-2 h-64 mx-36">
          <div class="flex flex-col">
            <div class="text-6xl font-semibold text-white inset-y-0 left-0">
              Interior<br />Design
            </div>
            <div class="w-24 h-1 bg-white mt-5"></div>
          </div>
          <div
            class="text-xl font-light text-white inset-y-0 right-0 text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
            iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
            doloribus doloremque, similique minima aut eveniet magnam
            exercitationem ut. Iusto!
          </div>
        </div>
        <div class="px-36 w-screen h-screen">
          <div
            class="w-full h-full bg-cover bg-center"
            style="
              background-image: url('https://cdn.wallpaper.com/main/g_ad-gin-studio-gb-space-20-facade-1.gif');
            "
          ></div>
        </div>
        <div class="w-screen h-full px-36 pt-20">
          <div
            class="
              py-20
              bg-merah
              h-96
              w-full
              flex flex-row
              items-center
              relative
            "
          >
            <div class="pl-20 pr-28 text-xl text-white font-extralight w-2/3">
              <p class="font-semibold pb-5 text-2xl text-left">
                Why do I need interior visualization?
              </p>
              <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
                iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
                doloribus doloremque, similique minima aut eveniet magnam
                exercitationem ut. Iusto!
              </p>
            </div>
            <div
              class="w-full h-full flex pr-28 items-center justify-end absolute"
            >
              <img
                class="max-h-72"
                src="https://enkimagazine.com/wp-content/uploads/2019/09/Sara-Klomps-colour-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div v-show="animation" class="w-full h-full flex flex-col py-28">
        <div class="grid grid-cols-2 h-64 mx-36">
          <div class="flex flex-col">
            <div class="text-6xl font-semibold text-white inset-y-0 left-0">
              3D<br />Animation
            </div>
            <div class="w-24 h-1 bg-white mt-5"></div>
          </div>
          <div
            class="text-xl font-light text-white inset-y-0 right-0 text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
            iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
            doloribus doloremque, similique minima aut eveniet magnam
            exercitationem ut. Iusto!
          </div>
        </div>
        <div class="px-36 w-screen h-screen">
          <div
            class="w-full h-full bg-cover bg-center"
            style="
              background-image: url('https://cdn.wallpaper.com/main/g_ad-gin-studio-gb-space-20-facade-1.gif');
            "
          ></div>
        </div>
        <div class="w-screen h-full px-36 pt-20">
          <div
            class="
              py-20
              bg-merah
              h-96
              w-full
              flex flex-row
              items-center
              relative
            "
          >
            <div class="pl-20 pr-28 text-xl text-white font-extralight w-2/3">
              <p class="font-semibold pb-5 text-2xl text-left">
                Why do I need exterior visualization?
              </p>
              <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
                iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
                doloribus doloremque, similique minima aut eveniet magnam
                exercitationem ut. Iusto!
              </p>
            </div>
            <div
              class="w-full h-full flex pr-28 items-center justify-end absolute"
            >
              <img
                class="max-h-72"
                src="https://thumbs.gfycat.com/ConcernedTotalDobermanpinscher-size_restricted.gif"
                alt=""
              />
            </div>
          </div>
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
      url: "http://localhost:1337",
      loaded: true,
      exterior: true,
      interior: false,
      animation: false,
    };
  },
  methods: {
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
