<template>
  <div
    class="
      lg:w-full
      w-screen
      lg:h-14
      h-12
      flex
      items-center
      lg:justify-between
      justify-between
      xl:pl-20
      lg:pl-5
      fixed
      -top-0
      -left-0
      z-50
      header
      bg-white
      border-b-2 border-gray-300
    "
    :class="{
      'navbar--hidden': !showNavbar && !openMenu,
      'border-white': !openMenu,
      'border-b': !openMenu,
    }"
  >
    <div
      class="lg:hidden w-12 h-full bg-white flex items-center justify-center"
      v-on:click="openMenu = !openMenu"
    >
      <div id="nav-icon3" :class="{ open: openMenu }">
        <span class="bg-black"></span>
        <span class="bg-black"></span>
        <span class="bg-black"></span>
        <span class="bg-black"></span>
      </div>
    </div>
    <a
      href="/"
      v-on:click="toOtherPage('')"
      class="
        flex
        lg:text-2xl
        text-xl
        lg:w-auto lg:text-left
        text-center
        cursor-pointer
      "
    >
      <img src="../assets/logo.png" class="h-12 w-auto" />
      <div
        class="
          xl:flex
          lg:hidden
          md:hidden
          hidden
          pl-1
          justify-center
          flex-nowrap flex-col
          text-black
        "
      >
        <span class="text-sm text-merah font-medium">Yayasan</span>
        <span class="font-medium -mt-2">Santa Adeline Kasih</span>
      </div>
    </a>
    <div class="lg:hidden w-12 h-full bg-white"></div>

    <div
      class="
        ml-0
        justify-end
        items-center
        lg:flex lg:w-5/12
        w-3/4
        capitalize
        lg:px-0
        px-6
        hidden
        text-black
        font-medium
      "
    >
      <a
        href="/"
        v-on:click="toOtherPage('')"
        class="
          mr-3
          default
          lg:text-md
          text-sm
          cursor-pointer
          rounded-xl
          hover:bg-merah hover:text-white
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'home',
        }"
        >Home</a
      >
      <a
        href="/projects"
        v-on:click="toOtherPage('projects')"
        class="
          mr-3
          default
          lg:text-md
          text-sm
          cursor-pointer
          rounded-xl
          hover:bg-merah hover:text-white
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'projects',
        }"
        >Projects</a
      >
      <a
        href="/news"
        v-on:click="toOtherPage('news')"
        class="
          mr-3
          default
          lg:text-md
          text-sm
          cursor-pointer
          rounded-xl
          hover:bg-merah hover:text-white
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'news',
        }"
        >News</a
      >
      <a
        href="/join"
        class="
          mr-3
          default
          lg:text-md
          text-sm
          cursor-pointer
          rounded-xl
          hover:bg-merah hover:text-white
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'joinus',
        }"
        >Join Us</a
      >
      <a
        href="/about"
        class="
          mr-3
          default
          lg:text-md
          text-sm
          cursor-pointer
          rounded-xl
          hover:bg-merah hover:text-white
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'aboutus',
        }"
        >About</a
      >
      <a
        href="/contact"
        class="
          mr-3
          default
          lg:text-md
          text-sm
          cursor-pointer
          rounded-xl
          hover:bg-merah hover:text-white
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'contact',
        }"
        >Contact</a
      >
      <a
        href="/donate"
        class="
          mr-3
          default
          bg-merah
          text-white
          rounded-xl
          lg:text-md
          text-sm
          cursor-pointer
          shadow-xl
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
          transform
          hover:scale-110
        "
        :class="{
          onPage: $route.meta.onPage === 'donate',
        }"
        >Donate Now</a
      >
    </div>

    <div
      class="lg:hidden fixed w-screen h-screen top-12 -left-0 z-20 duration-500"
      :class="{ 'opacity-0': !openMenu, 'pointer-events-none': !openMenu }"
    >
      <div
        class="
          bg-white
          w-full
          h-full
          flex
          items-center
          justify-center
          bg-opacity-100
        "
      >
        <div
          class="
            text-center text-black
            flex flex-col
            items-center
            pb-64
            text-xl
          "
        >
          <a
            href="/"
            class="cursor-pointer mb-3 hover:text-merah"
            :class="{
              onPage: $route.meta.onPage === 'home',
              canHover: $route.meta.onPage !== 'home',
            }"
            >Home</a
          >
          <a
            href="/projects"
            class="cursor-pointer mb-3 hover:text-merah"
            :class="{
              onPage: $route.meta.onPage === 'projects',
              canHover: $route.meta.onPage !== 'projects',
            }"
            >Projects</a
          >
          <a
            href="/news"
            class="cursor-pointer mb-3 hover:text-merah"
            :class="{
              onPage: $route.meta.onPage === 'news',
              canHover: $route.meta.onPage !== 'news',
            }"
            >News</a
          >
          <a
            href="/join"
            class="cursor-pointer mb-3 hover:text-merah"
            :class="{
              onPage: $route.meta.onPage === 'join',
              canHover: $route.meta.onPage !== 'join',
            }"
            >Join</a
          >
          <a
            href="/about"
            v-on:click="toOtherPage('about')"
            class="cursor-pointer mb-3 hover:text-merah"
            :class="{
              onPage: $route.meta.onPage === 'about',
              canHover: $route.meta.onPage !== 'about',
            }"
            >About</a
          >
          <a
            href="/donate"
            v-on:click="toOtherPage('donate')"
            class="cursor-pointer mb-3 hover:text-merah"
            :class="{
              onPage: $route.meta.onPage === 'donate',
              canHover: $route.meta.onPage !== 'donate',
            }"
            >Donate Now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      headerAuth: "",
      url: "https://merello.my.id",
      showNavbar: true,
      lastScrollPosition: 0,
      view: {
        topOfPage: true,
      },
      openMenu: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("scroll", this.updateScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat&family=Rubik+Mono+One&display=swap%27");

* {
  /* font-family: 'Cinzel', serif; */
  font-family: "Montserrat", sans-serif;
}
.header {
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease;
}
.beforeScroll {
  background-color: rgba(255, 255, 255, 0);
  color: white;
}
.onScroll {
  /* background-color: #f3ecda; */
  background-color: white;
  color: black;
}
.navbar--hidden {
  transform: translate3d(0, -100%, 0);
}
.disableoverflow {
  overflow: hidden;
}
#nav-icon3 {
  width: 30px;
  height: 23px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
#nav-icon3 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 9px;
}

#nav-icon3 span:nth-child(4) {
  top: 18px;
}

#nav-icon3.open span:nth-child(1) {
  top: 9px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 9px;
  width: 0%;
  left: 50%;
}

.default {
  text-decoration: none;
  padding: 10px 20px;
  position: relative;
}

.canHover:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  left: 50%;
  position: absolute;
  background: #ec1d27;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.canHover:hover:after {
  width: 100%;
  left: 0;
}

.onPage:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  background: #ec1d27;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 100%;
}

.onPage {
  color: #ec1d27;
}

/* @font-face {
  font-family: "Futura";
  src: local("Futura"),   url("./fonts/futuraa.ttf") format("truetype");} */
</style>
