<template>
  <Loading v-if="!loaded"></Loading>
  <div v-else class="flex flex-col">
    <div
      class="top-0 w-screen h-full px-20 py-36 justify-items-center bg-merah"
    >
      <div
        v-if="success"
        class="
          h-96
          text-6xl
          col-span-6
          font-thin
          text-white
          m-20
          flex
          justify-items-center
          text-center
          flex-col
        "
      >
        <p>Your inquiry has been sent</p>

        <p class="text-2xl font-thin pt-10">
          We will get back to you as soon as possible
        </p>
      </div>
      <div v-else class="flex flex-col w-full h-full">
        <div class="text-7xl font-thin text-white pl-20">
          FIND OUT HOW WE CAN HELP YOU
        </div>
        <div class="text-white font-thin text-xl flex justify-center pt-16">
          <form class="form flex flex-col gap-y-5">
            <div class="input-container">
              <input type="text" class="input" placeholder="Full name" />
            </div>
            <div class="input-container">
              <input type="text" class="input" placeholder="E-mail" />
            </div>
            <div class="lastinput-container">
              <textarea type="text" class="lastinput" placeholder="Message" />
            </div>
            <div>
              <button @click="success = !success" class="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
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
      loaded: false,
      success: false,
    };
  },
  async mounted() {
    var imagesToPreload = [];
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
.form {
  height: 500px;
  width: 500px;
}

.input-container {
  height: 70px;
  position: relative;
  width: 100%;
}

.lastinput-container {
  height: 300px;
  position: relative;
  width: 100%;
}

.input {
  background-color: #a24936;
  border-style: solid;
  border-width: thin;
  border-color: white;
  box-sizing: border-box;
  color: white;
  font-size: 20px;
  font-weight: lighter;
  height: 100%;
  outline: 0;
  padding-left: 20px;
  padding-top: 0px;
  width: 100%;
}

.lastinput {
  background-color: #a24936;
  border-style: solid;
  border-width: thin;
  border-color: white;
  box-sizing: border-box;
  color: white;
  font-size: 20px;
  font-weight: lighter;
  height: 100%;
  outline: 0;
  padding-left: 20px;
  padding-top: 13px;
  width: 100%;
}

::placeholder {
  color: white;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder {
  opacity: 0;
}

.submit {
  background-color: #a24936;
  border-style: solid;
  border-width: thin;
  border-color: white;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  font-weight: lighter;
  height: 50px;
  margin-top: 38px;
  outline: 0;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: rgb(220, 203, 203);
  color: black;
}
</style>
