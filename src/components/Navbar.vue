<template>
  <div
    class="
      lg:w-full
      w-screen
      lg:h-24
      h-24
      flex
      items-center
      justify-between
      xl:pl-20
      lg:pl-5
      fixed
      -top-0
      -left-0
      z-50
      header
      bg-merah
    "
    :class="{
      'navbar--hidden': !showNavbar && !openMenu,
    }"
  >
    <div
      class="lg:hidden w-12 h-full bg-merah flex items-center justify-center"
      v-on:click="openMenu = !openMenu"
    >
      <div id="nav-icon3" :class="{ open: openMenu }">
        <span class="bg-white"></span>
        <span class="bg-white"></span>
        <span class="bg-white"></span>
        <span class="bg-white"></span>
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
          text-white
        "
      >
        <span class="font-thin -mt-2">ARCHIO</span>
      </div>
    </a>
    <div class="lg:hidden w-12 h-full bg-merah"></div>

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
        text-white
        font-normal
      "
    >
      <a
        href="/"
        class="
          mr-3
          default
          lg:text-md
          text-lg
          cursor-pointer
          rounded-xl
          hover:bg-jingga
          text-white
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
        href="/about"
        class="
          mr-3
          default
          lg:text-md
          text-lg
          cursor-pointer
          rounded-xl
          hover:bg-jingga 
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'about',
        }"
        >About Us</a
      >
      <a
        href="/works"
        class="
          mr-3
          default
          lg:text-md
          text-lg
          cursor-pointer
          rounded-xl
          hover:bg-jingga 
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'works',
        }"
        >Our Works</a
      >
      <a
        href="/services"
        class="
          mr-3
          default
          lg:text-md
          text-lg
          cursor-pointer
          rounded-xl
          hover:bg-jingga 
          transition
          duration-500
          ease-in-out
          whitespace-nowrap
          tracking-normal
        "
        :class="{
          onPage: $route.meta.onPage === 'services',
        }"
        >Services</a
      >
      <a
        href="/contact"
        class="
          mr-3
          default
          lg:text-md
          text-lg
          cursor-pointer
          rounded-xl
          hover:bg-jingga 
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
    </div>

    <div
      class="lg:hidden fixed w-screen h-screen top-24 -left-0 z-20 duration-500"
      :class="{ 'opacity-0': !openMenu, 'pointer-events-none': !openMenu }"
    >
      <div
        class="
          bg-merah
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
            text-center text-white
            flex flex-col
            items-center
            pb-64
            text-xl
            font-thin
          "
        >
          <a
            href="/"
            class="cursor-pointer mb-3 hover:font-medium"
            :class="{
              onPage: $route.meta.onPage === 'home',
              canHover: $route.meta.onPage !== 'home',
            }"
            >Home</a
          >
          <a
            href="/about"
            v-on:click="toOtherPage('about')"
            class="cursor-pointer mb-3 hover:font-medium"
            :class="{
              onPage: $route.meta.onPage === 'about',
              canHover: $route.meta.onPage !== 'about',
            }"
            >About</a
          >
          <a
            href="/works"
            class="cursor-pointer mb-3 hover:font-medium"
            :class="{
              onPage: $route.meta.onPage === 'works',
              canHover: $route.meta.onPage !== 'works',
            }"
            >Our Works</a
          >
          <a
            href="/services"
            class="cursor-pointer mb-3 hover:font-medium"
            :class="{
              onPage: $route.meta.onPage === 'services',
              canHover: $route.meta.onPage !== 'services',
            }"
            >Services</a
          >
          <a
            href="/contact"
            v-on:click="toOtherPage('contact')"
            class="cursor-pointer mb-3 hover:font-medium"
            :class="{
              onPage: $route.meta.onPage === 'contact',
              canHover: $route.meta.onPage !== 'contact',
            }"
            >Contact Us</a
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');* {
  font-family: "Poppins", sans-serif;
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

/* @font-face {
  font-family: "Futura";
  src: local("Futura"),   url("./fonts/futuraa.ttf") format("truetype");} */
</style>
