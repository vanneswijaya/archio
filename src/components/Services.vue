<template>
  <Loading v-if="!loaded"></Loading>
  <div v-else class="flex flex-col bg-merah overflow-hidden">
    <section
      class="w-screen h-screen bg-cover bg-center flex flex-row relative z-0"
      style="
        background-image: url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104938059/original/cecf195734c5b725db32a9baca77786a6379adbb/model-and-render-high-end-architectural-projects.jpg');
      "
    >
      <div class="h-full w-1/3 ml-48 mt-20 absolute z-50">
        <div class="text-white text-9xl font-semibold leading-tight">
          <FromLeft delay="1" duration="2">
            <p>Our</p>
          </FromLeft>
          <FromLeft delay="2" duration="2">
            <p class="text-jingga">quality</p>
          </FromLeft>
          <FromLeft delay="3" duration="2"><p>services.</p></FromLeft>
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
      <div v-if="interior" class="w-full h-full flex flex-col py-28">
        <div class="grid grid-cols-2 h-64 mx-36">
          <div class="flex flex-col">
            <FromLeft delay="1" duration="2">
              <div class="text-6xl font-semibold text-white inset-y-0 left-0">
                Interior<br />Design
              </div>
            </FromLeft>
            <FromLeft delay="1" duration="2">
              <div class="w-24 h-1 bg-white mt-5"></div>
            </FromLeft>
          </div>
          <FromRight delay="1" duration="2">
            <div
              class="
                text-xl
                font-light
                text-white
                inset-y-0
                right-0
                text-justify
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
              iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
              doloribus doloremque, similique minima aut eveniet magnam
              exercitationem ut. Iusto!
            </div>
          </FromRight>
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
            <Fade delay="1" duration="2">
              <div class="pl-20 pr-28 text-xl text-white font-extralight w-2/3">
                <p class="font-semibold pb-5 text-2xl text-left">
                  Your best option for an elegant and beautiful interior.
                </p>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  id iusto quasi excepturi fugiat, eius quia qui, natus incidunt
                  sint doloribus doloremque, similique minima aut eveniet magnam
                  exercitationem ut. Iusto!
                </p>
              </div>
            </Fade>
            <Fade delay="1" duration="2">
              <div
                class="
                  w-full
                  h-full
                  flex
                  pr-28
                  items-center
                  justify-end
                  absolute
                "
              >
                <img
                  class="max-h-72"
                  src="https://enkimagazine.com/wp-content/uploads/2019/09/Sara-Klomps-colour-1.jpg"
                  alt=""
                />
              </div>
            </Fade>
          </div>
        </div>
        <div
          class="
            grid grid-cols-2
            w-screen
            h-full
            bg-jingga
            items-center
            pb-20
            pt-20
            px-36
          "
        >
          <div class="h-full mx-20 mt-20 flex flex-col gap-10">
            <div class="text-6xl text-white font-medium leading-tight">
              <FromTop delay="1" duration="2">
                <p>We provide the best quality works.</p>
              </FromTop>
              <FromBottom delay="1" duration="2">
                <p class="text-merah">Interested in our services?</p>
              </FromBottom>
            </div>
            <Fade delay="1" duration="2">
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
                      hover:bg-merah
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
                      hover:bg-merah
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
            </Fade>
          </div>
          <img
            src="https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_27-scaled.jpg"
            alt=""
          />
        </div>
      </div>
      <div v-if="exterior" class="w-full h-full flex flex-col py-28">
        <div class="grid grid-cols-3 w-screen h-96 px-36">
          <FromTop delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://p4.wallpaperbetter.com/wallpaper/726/924/893/house-modern-architecture-lights-hd-wallpaper-preview.jpg');
              "
            ></div>
          </FromTop>
          <FromBottom delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://c4.wallpaperflare.com/wallpaper/79/352/53/modern-architecture-nature-landscape-wallpaper-preview.jpg');
              "
            ></div>
          </FromBottom>
          <FromTop delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://i.pinimg.com/originals/61/52/9c/61529cdb0a6378f43e3b9e342f3c6eed.jpg');
              "
            ></div>
          </FromTop>
        </div>
        <div class="h-28"></div>
        <div class="grid grid-cols-2 h-64 mx-36">
          <FromLeft delay="1" duration="2">
            <div class="flex flex-col">
              <div class="text-6xl font-semibold text-white inset-y-0 left-0">
                Exterior<br />Design
              </div>
              <div class="w-24 h-1 bg-white mt-5"></div>
            </div>
          </FromLeft>
          <FromRight delay="1" duration="2">
            <div
              class="
                text-xl
                font-light
                text-white
                inset-y-0
                right-0
                text-justify
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
              iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
              doloribus doloremque, similique minima aut eveniet magnam
              exercitationem ut. Iusto!
            </div>
          </FromRight>
        </div>
        <div class="px-36 w-screen h-screen">
          <div
            class="w-full h-full bg-cover bg-center"
            style="
              background-image: url('https://seasunproperty.es/wp-content/uploads/2020/03/191217_21J_night_HQ_00_01-SN.jpg');
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
            <Fade delay="1" duration="2">
              <div class="pl-20 pr-28 text-xl text-white font-extralight w-2/3">
                <p class="font-semibold pb-5 text-2xl text-left">
                  We will give an extraordinary face to your living space
                </p>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  id iusto quasi excepturi fugiat, eius quia qui, natus incidunt
                  sint doloribus doloremque, similique minima aut eveniet magnam
                  exercitationem ut. Iusto!
                </p>
              </div>
            </Fade>
            <Fade delay="1" duration="2">
              <div
                class="
                  w-full
                  h-full
                  flex
                  pr-28
                  items-center
                  justify-end
                  absolute
                "
              >
                <img
                  class="max-h-72"
                  src="https://thumbs.gfycat.com/ConcernedTotalDobermanpinscher-size_restricted.gif"
                  alt=""
                />
              </div>
            </Fade>
          </div>
        </div>
        <div
          class="
            grid grid-cols-2
            w-screen
            h-full
            bg-jingga
            items-center
            pb-20
            pt-20
            px-36
          "
        >
          <div class="h-full mx-20 mt-20 flex flex-col gap-10">
            <div class="text-6xl text-white font-medium leading-tight">
              <FromTop delay="1" duration="2">
                <p>We provide the best quality works.</p>
              </FromTop>
              <FromBottom delay="1" duration="2">
                <p class="text-merah">Interested in our services?</p>
              </FromBottom>
            </div>
            <Fade delay="1" duration="2">
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
                      hover:bg-merah
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
                      hover:bg-merah
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
            </Fade>
          </div>
          <img
            src="https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_27-scaled.jpg"
            alt=""
          />
        </div>
      </div>
      <div v-if="animation" class="w-full h-full flex flex-col py-28">
        <div class="grid grid-cols-2 h-64 mx-36">
          <FromLeft delay="1" duration="2">
            <div class="flex flex-col">
              <div class="text-6xl font-semibold text-white inset-y-0 left-0">
                3D<br />Animation
              </div>
              <div class="w-24 h-1 bg-white mt-5"></div>
            </div>
          </FromLeft>
          <FromRight delay="1" duration="2">
            <div
              class="
                text-xl
                font-light
                text-white
                inset-y-0
                right-0
                text-justify
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
              iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
              doloribus doloremque, similique minima aut eveniet magnam
              exercitationem ut. Iusto!
            </div>
          </FromRight>
        </div>
        <div class="grid grid-cols-3 w-screen h-96 px-36">
          <FromLeft delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_02_13-scaled.jpg');
              "
            ></div>
          </FromLeft>
          <FromTop delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://drowart.com/wp-content/uploads/2021/04/STEVEN_NOA_03_2_PP-2560x1646.jpg');
              "
            ></div>
          </FromTop>
          <FromRight delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_02_12-scaled.jpg');
              "
            ></div>
          </FromRight>
        </div>
        <div class="grid grid-cols-3 w-screen h-96 px-36">
          <FromLeft delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_04_10-2396x1600.jpg');
              "
            ></div>
          </FromLeft>
          <FromBottom delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_04_15-scaled.jpg');
              "
            ></div>
          </FromBottom>
          <FromRight delay="1" duration="2">
            <div
              class="w-full h-full bg-cover bg-center"
              style="
                background-image: url('https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_19-2560x1709.jpg');
              "
            ></div>
          </FromRight>
        </div>
        <div class="h-20"></div>
        <div class="grid grid-cols-2 w-screen h-full items-center px-36">
          <img
            src="https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_04_22-1200x1600.jpg"
            alt=""
          />
          <div class="h-full ml-20 mt-20 flex flex-col gap-10">
            <FromTop delay="1" duration="2">
              <div class="text-7xl text-white font-thin leading-tight">
                We visualize your imagination
              </div>
            </FromTop>
            <FromBottom delay="1" duration="2">
              <div
                class="
                  text-xl
                  font-thin
                  text-white
                  inset-y-0
                  right-0
                  text-justify
                "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
                iusto quasi excepturi fugiat, eius quia qui, natus incidunt sint
                doloribus doloremque, similique minima aut eveniet magnam
                exercitationem ut. Iusto! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iste modi ipsum eligendi. Deserunt ipsum culpa
                alias consequatur soluta voluptates qui, nisi, nemo, iusto
                distinctio dolorum doloribus inventore vel dignissimos totam.
              </div>
            </FromBottom>
          </div>
        </div>
        <div
          class="
            grid grid-cols-2
            w-screen
            h-full
            bg-jingga
            items-center
            pb-20
            pt-20
            px-36
          "
        >
          <div class="h-full mx-20 mt-20 flex flex-col gap-10">
            <div class="text-6xl text-white font-medium leading-tight">
              <FromTop delay="1" duration="2">
                <p>We provide the best quality works.</p>
              </FromTop>
              <FromBottom delay="1" duration="2">
                <p class="text-merah">Interested in our services?</p>
              </FromBottom>
            </div>
            <Fade delay="1" duration="2">
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
                      hover:bg-merah
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
                      hover:bg-merah
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
            </Fade>
          </div>
          <img
            src="https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_27-scaled.jpg"
            alt=""
          />
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
      interior: true,
      exterior: false,
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
  async mounted() {
    var imagesToPreload = [
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104938059/original/cecf195734c5b725db32a9baca77786a6379adbb/model-and-render-high-end-architectural-projects.jpg",
      "https://cdn.wallpaper.com/main/g_ad-gin-studio-gb-space-20-facade-1.gif",
      "https://enkimagazine.com/wp-content/uploads/2019/09/Sara-Klomps-colour-1.jpg",
      "https://p4.wallpaperbetter.com/wallpaper/726/924/893/house-modern-architecture-lights-hd-wallpaper-preview.jpg",
      "https://c4.wallpaperflare.com/wallpaper/79/352/53/modern-architecture-nature-landscape-wallpaper-preview.jpg",
      "https://i.pinimg.com/originals/61/52/9c/61529cdb0a6378f43e3b9e342f3c6eed.jpg",
      "https://seasunproperty.es/wp-content/uploads/2020/03/191217_21J_night_HQ_00_01-SN.jpg",
      "https://thumbs.gfycat.com/ConcernedTotalDobermanpinscher-size_restricted.gif",
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_02_13-scaled.jpg",
      "https://drowart.com/wp-content/uploads/2021/04/STEVEN_NOA_03_2_PP-2560x1646.jpg",
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_02_12-scaled.jpg",
      "https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_04_10-2396x1600.jpg",
      "https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_04_15-scaled.jpg",
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_19-2560x1709.jpg",
      "https://drowart.com/wp-content/uploads/2021/05/PORTFOLIO_04_22-1200x1600.jpg",
      "https://drowart.com/wp-content/uploads/2021/04/PORTFOLIO_04_27-scaled.jpg",
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

<style scoped>
.isClicked {
  background-color: #d36135;
  color: black;
}
</style>
