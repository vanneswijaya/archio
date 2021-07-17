<template>
  <Loading v-if="!loaded"></Loading>
  <div v-else class="flex flex-col">
    <section class="flex flex-col h-full w-screen bg-merah">
      <div class="flex flex-row">
        <div class="h-full w-1/3 ml-36 mt-20">
          <FromLeft delay="1" duration="2">
            <div class="text-7xl text-white font-medium leading-tight">
              <p>Creating spatial experience,</p>
              <p class="text-hijaumuda">for your space</p>
            </div>
          </FromLeft>
        </div>
        <FromRight delay="1" duration="2">
          <div class="h-full w-full mr-36 ml-24">
            <img
              src="https://images.adsttc.com/media/images/5e5c/e5e5/6ee6/7e0f/0100/0923/original/DT2100.gif?1583146459"
              alt=""
            />
          </div>
        </FromRight>
      </div>
      <div class="h-8"></div>
      <Fade delay="1" duration="2">
        <div class="flex flex-row ml-36 gap-10">
          <router-link to="/about">
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
                w-48
                text-center
              "
            >
              <button>About Us</button>
            </div>
          </router-link>
          <router-link to="/services">
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
                w-48
                text-center
              "
            >
              <button>Services</button>
            </div>
          </router-link>
          <router-link to="works">
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
                w-48
                text-center
              "
            >
              <button>Our Works</button>
            </div>
          </router-link>
        </div>
      </Fade>
      <div class="h-36"></div>
    </section>
    <section
      class="w-full h-screen flex flex-col z-0 bg-cover"
      style="
        background-image: url('https://lumo-visual.com/wp-content/uploads/2013/10/1.jpg');
      "
    >
      <div class="bg-black bg-opacity-50 absolute w-full h-full"></div>
      <div class="flex flex-col w-1/2 text-white ml-36 mt-36 gap-10 z-50">
        <FromLeft delay="1" duration="2">
          <div class="text-7xl font-bold">
            We are your best choice for achitecture design
          </div>
        </FromLeft>
        <FromRight delay="1" duration="2">
          <div class="text-2xl">
            One-stop design solution for your residential or commercial design
            needs.
          </div>
        </FromRight>
        <Fade delay="1" duration="2">
          <div class="flex flex-row gap-10">
            <router-link to="/services">
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
                  w-48
                  text-center
                "
              >
                <button>Interior Design</button>
              </div>
            </router-link>
            <router-link to="/services">
              <div
                class="
                  p-4
                  px-8
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
                  w-48
                  text-center
                "
              >
                <button>Exterior Design</button>
              </div>
            </router-link>
            <router-link to="/services">
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
                  w-48
                  text-center
                "
              >
                <button>3D Animation</button>
              </div>
            </router-link>
          </div>
        </Fade>
      </div>
    </section>
    <section class="flex flex-row w-screen h-full bg-merah items-center">
      <img
        src="https://static.wixstatic.com/media/145750_e3b8cd35231048289171105496f0de33~mv2.jpg/v1/fill/w_580,h_861,al_c,q_85,usm_0.66_1.00_0.01/145750_e3b8cd35231048289171105496f0de33~mv2.jpg"
        alt=""
      />
      <div class="w-1/2 h-full ml-20 mt-20 flex flex-col gap-10">
        <FromRight delay="1" duration="2">
          <div class="text-7xl text-white font-thin leading-tight">
            We fulfill your need of a worth-living space
          </div>
        </FromRight>
        <Fade delay="1" duration="2">
          <div class="text-2xl text-white font-thin leading-tight">
            Discover our latest projects
          </div>
        </Fade>
        <router-link to="/works">
          <Fade delay="1" duration="2">
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
                w-48
                text-center
              "
            >
              <button>Explore</button>
            </div>
          </Fade>
        </router-link>
      </div>
    </section>
    <section
      class="flex flex-row-reverse w-screen h-full bg-merah items-center"
    >
      <div class="w-1/2">
        <img
          src="https://i.pinimg.com/originals/5a/e3/eb/5ae3eb73f733be342867f7f1b5fd98fd.jpg"
          alt=""
        />
      </div>
      <div class="w-1/2 h-full ml-20 mt-20 flex flex-col gap-10">
        <div class="text-7xl text-white font-medium leading-tight">
          <FromTop delay="1" duration="2">
            <p>Make your ideal project happen now.</p>
          </FromTop>
          <FromBottom delay="1" duration="2">
            <p class="text-hijaumuda">Are you ready?</p>
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
        </Fade>
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
      "https://images.adsttc.com/media/images/5e5c/e5e5/6ee6/7e0f/0100/0923/original/DT2100.gif?1583146459",
      "https://lumo-visual.com/wp-content/uploads/2013/10/1.jpg",
      "https://static.wixstatic.com/media/145750_e3b8cd35231048289171105496f0de33~mv2.jpg/v1/fill/w_580,h_861,al_c,q_85,usm_0.66_1.00_0.01/145750_e3b8cd35231048289171105496f0de33~mv2.jpg",
      "https://i.pinimg.com/originals/5a/e3/eb/5ae3eb73f733be342867f7f1b5fd98fd.jpg",
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
