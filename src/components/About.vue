<template>
  <Loading v-if="!loaded"></Loading>
  <div v-else class="flex flex-col overflow-x-hidden">
    <section class="relative flex flex-col w-full">
      <div class="absolute left-96 top-72">
        <div class="flex flex-nowrap gap-10">
          <Fade delay="1" duration="2">
            <div
              class="h-90 w-160 bg-center bg-cover"
              style="
                background-image: url('https://newschoolarch.edu/wp-content/uploads/2019/01/What-Do-Interior-Architects-Do_.jpeg');
              "
            ></div>
          </Fade>
          <Fade delay="1" duration="2">
            <div
              class="h-90 w-160 bg-center bg-cover"
              style="
                background-image: url('https://drowart.com/wp-content/uploads/2021/05/STEVEN_NOA_03_3_PP-2488x1600.jpg');
              "
            ></div>
          </Fade>
        </div>
      </div>
      <div class="h-96 bg-merah w-screen">
        <div class="flex flex-row">
          <div class="w-96 h-full">
            <FromLeft delay="1" duration="2">
              <div class="text-6xl ml-20 mt-20 font-thin text-white">
                Let's get to know each other!
              </div>
            </FromLeft>
          </div>
          <div>
            <FromRight delay="1" duration="2">
              <div
                class="
                  flex
                  absolute
                  right-0
                  text-8xl
                  mr-20
                  mt-32
                  font-extrabold
                  text-white
                "
              >
                ABOUT
                <p class="text-hijaumuda ml-5">US</p>
              </div>
            </FromRight>
          </div>
        </div>
      </div>
      <div class="h-screen bg-jingga w-screen flex items-end">
        <div class="grid grid-cols-2 items-center mb-36">
          <Fade delay="1" duration="2">
            <div class="text-5xl ml-20 text-white font-semibold leading-snug">
              <p class="text-9xl text-hijaumuda">ARCHIO</p>
              your living space's best friend
            </div>
          </Fade>
          <Fade delay="2" duration="2">
            <div class="text-2xl text-white font-light text-justify mr-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              exercitationem assumenda quia? Saepe earum reiciendis iste
              consectetur eaque quis assumenda perferendis in commodi. Commodi
              modi sequi officia doloribus optio id?
            </div>
          </Fade>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen">
      <div
        class="w-full h-full bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + bgimage + ')' }"
      >
        <div class="parent grid grid-cols-3 w-full h-full">
          <FromBottom delay="1" duration="2">
            <div
              class="text-8xl text-white font-semibold ml-10 mt-20"
              @mouseover="
                bgimage =
                  'https://images.adsttc.com/media/images/5e6f/6c5d/b357/653d/d300/02f8/large_jpg/TARA_HI-RES-107_Master.jpg?1584360500'
              "
            >
              WHY CHOOSE US
            </div>
          </FromBottom>
          <Fade delay="1" duration="2">
            <div class="child grid grid-rows-2 w-full h-full">
              <div
                class="
                  border border-t-0 border-gray-300 border-opacity-50
                  flex flex-col
                  cursor-pointer
                  hover:bg-merah
                  transition
                  duration-500
                  ease-in-out
                "
                @mouseover="
                  bgimage =
                    'https://www.ariostea-high-tech.com/img/collezioni/cm2-teknostone/+Floors-desktop.jpg'
                "
              >
                <div
                  class="
                    text-4xl
                    font-semibold
                    text-white
                    px-10
                    py-20
                    flex flex-col
                    justify-center
                  "
                >
                  <p class="">Quality Assurance</p>
                  <p class="text-2xl font-extralight pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam autem inventore laborum nesciunt.
                  </p>
                </div>
              </div>
              <div
                class="
                  border border-t-0 border-b-0 border-gray-300 border-opacity-50
                  flex flex-col
                  cursor-pointer
                  hover:bg-merah
                  transition
                  duration-500
                  ease-in-out
                "
                @mouseover="
                  bgimage =
                    'http://cdn.home-designing.com/wp-content/uploads/2014/06/sloping-landscape-design.jpg'
                "
              >
                <div
                  class="
                    text-4xl
                    font-semibold
                    text-white
                    px-10
                    py-20
                    flex flex-col
                    justify-center
                  "
                >
                  <p class="">Customer Service</p>
                  <p class="text-2xl font-extralight pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam autem inventore laborum nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade delay="1" duration="2">
            <div class="child grid grid-rows-2 w-full h-full">
              <div
                class="
                  border-b border-gray-300 border-opacity-50
                  flex flex-col
                  cursor-pointer
                  hover:bg-merah
                  transition
                  duration-500
                  ease-in-out
                "
                @mouseover="
                  bgimage =
                    'http://cdn.home-designing.com/wp-content/uploads/2014/06/modern-villa-landscape.jpg'
                "
              >
                <div
                  class="
                    text-4xl
                    font-semibold
                    text-white
                    px-10
                    py-20
                    flex flex-col
                    justify-center
                  "
                >
                  <p class="">Experience</p>
                  <p class="text-2xl font-extralight pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam autem inventore laborum nesciunt.
                  </p>
                </div>
              </div>
              <div
                class="
                  border-b border-gray-300 border-opacity-50
                  flex flex-col
                  cursor-pointer
                  hover:bg-merah
                  transition
                  duration-500
                  ease-in-out
                "
                @mouseover="
                  bgimage =
                    'https://tero.design/multimedia/forest_villa/cam02-min.jpg'
                "
              >
                <div
                  class="
                    text-4xl
                    font-semibold
                    text-white
                    px-10
                    py-20
                    flex flex-col
                    justify-center
                  "
                >
                  <p class="">Passion in Communication</p>
                  <p class="text-2xl font-extralight pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
    <section class="w-screen h-full flex flex-col bg-merah">
      <FromTop delay="1" duration="2">
        <div
          class="text-8xl font-semibold flex justify-center text-white pt-20"
        >
          OUR
          <p class="text-hijaumuda pl-5">FOUNDER</p>
        </div>
      </FromTop>
      <div class="flex flex-row justify-center w-full h-full pt-20">
        <div class="w-full h-full flex justify-end pr-10 pt-10">
          <Fade delay="1" duration="2">
            <div
              class="w-128 h-128 rounded-full bg-cover bg-center"
              style="
                background-image: url('https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=');
              "
            ></div>
          </Fade>
        </div>
        <div
          class="flex flex-col gap-y-8 items-center w-full h-full pt-36 pr-36"
        >
          <div
            class="
              text-5xl text-white
              font-semibold
              cursor-pointer
              hover:text-hijaumuda
              transition
              duration-500
              ease-in-out
            "
          >
            John Almeida
          </div>

          <FromLeft delay="1" duration="2">
            <div class="text-2xl text-white font-light px-20 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              omnis tempora eaque dolores fugiat reprehenderit debitis corrupti
              assumenda optio voluptas, quis ipsa explicabo perspiciatis, ab
              libero, nam accusantium fugit impedit!
            </div>
          </FromLeft>
        </div>
      </div>
    </section>
    <section
      class="flex flex-row-reverse w-screen h-full bg-merah items-center"
    >
      <div
        class="w-1/2 h-screen rounded-tl-3xl"
        style="
          background-image: url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80');
        "
      ></div>
      <div class="w-1/2 h-full mx-20 mt-10 flex flex-col gap-10">
        <Fade delay="1" duration="2">
          <div class="text-5xl text-white font-medium leading-tight">
            Ready to change your living space?<br />
            <p class="text-hijaumuda">Connect with us now.</p>
          </div>
        </Fade>
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
      bgimage:
        "https://images.adsttc.com/media/images/5e6f/6c5d/b357/653d/d300/02f8/large_jpg/TARA_HI-RES-107_Master.jpg?1584360500",
    };
  },
  async mounted() {
    var imagesToPreload = [
      "https://images.adsttc.com/media/images/5e6f/6c5d/b357/653d/d300/02f8/large_jpg/TARA_HI-RES-107_Master.jpg?1584360500",
      "https://drowart.com/wp-content/uploads/2021/05/STEVEN_NOA_03_3_PP-2488x1600.jpg",
      "https://images.adsttc.com/media/images/5e6f/6c5d/b357/653d/d300/02f8/large_jpg/TARA_HI-RES-107_Master.jpg?1584360500",
      "https://www.ariostea-high-tech.com/img/collezioni/cm2-teknostone/+Floors-desktop.jpg",
      "http://cdn.home-designing.com/wp-content/uploads/2014/06/sloping-landscape-design.jpg",
      "http://cdn.home-designing.com/wp-content/uploads/2014/06/modern-villa-landscape.jpg",
      "https://tero.design/multimedia/forest_villa/cam02-min.jpg",
      "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80",
      "https://newschoolarch.edu/wp-content/uploads/2019/01/What-Do-Interior-Architects-Do_.jpeg",
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
