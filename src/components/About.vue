<template>
  <div class="flex flex-col overflow-x-hidden">
    <section class="relative flex flex-col w-full">
      <div class="absolute left-96 top-72">
        <div class="flex flex-nowrap gap-10">
          <div class="video-container relative w-160">
            <video autoplay muted loop class="absolute object-cover">
              <source
                src="https://drowart.com/wp-content/uploads/2021/03/anim_9_sek.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div
            class="h-90 w-160 bg-center bg-cover"
            style="
              background-image: url('https://drowart.com/wp-content/uploads/2021/05/STEVEN_NOA_03_3_PP-2488x1600.jpg');
            "
          ></div>
        </div>
      </div>
      <div class="h-96 bg-merah w-screen">
        <div class="flex flex-row">
          <div class="w-96 h-full">
            <div class="text-6xl ml-20 mt-20 font-thin text-white">
              Let's get to know each other!
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div class="h-screen bg-jingga w-screen flex items-end">
        <div class="grid grid-cols-2 items-center mb-36">
          <div class="text-5xl ml-20 text-white font-semibold leading-snug">
            <p class="text-9xl text-hijaumuda">ARCHIO</p>
            your living space's best friend
          </div>
          <div class="text-2xl text-white font-light text-justify mr-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            exercitationem assumenda quia? Saepe earum reiciendis iste
            consectetur eaque quis assumenda perferendis in commodi. Commodi
            modi sequi officia doloribus optio id?
          </div>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen">
      <div
        class="w-full h-full bg-cover bg-center"
        style="
          background-image: url('https://images.adsttc.com/media/images/5e6f/6c5d/b357/653d/d300/02f8/large_jpg/TARA_HI-RES-107_Master.jpg?1584360500');
        "
      >
        <div class="parent grid grid-cols-3 w-full h-full">
          <div class="text-8xl text-white font-semibold ml-10 mt-20">
            WHY CHOOSE US
          </div>
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
        </div>
      </div>
    </section>
    <section class="w-screen h-screen flex flex-col bg-merah">
      <div class="text-8xl font-semibold flex justify-center text-white pt-20">
        OUR FOUNDERS
      </div>
      <div class="grid grid-cols-2 w-full h-full">
        <div></div>
        <div class="grid-rows-2">
          <div></div>
        </div>
      </div>
    </section>
    <section></section>
  </div>
</template>

<style scoped>
div.parent {
  pointer-events: none;
}

div.child {
  pointer-events: auto;
}

div.parent:hover {
  background-image: url("https://www.ariostea-high-tech.com/img/collezioni/cm2-teknostone/+Floors-desktop.jpg");
}
</style>
