<template>
  <div class="relative">
    <div class="vx-navbar-wrapper" :class="classObj">
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton"
        :color="navbarColorLocal"
        :class="textColor"
      >
        <svg
          @click.stop="showSidebar"
          class="xl:hidden ml-5 cursor-pointer"
          data-v-b495ff56=""
          xmlns="http://www.w3.org/2000/svg"
          width="23.944"
          height="19.953"
          viewBox="0 0 23.944 19.953"
        >
          <g data-v-b495ff56="" id="menu-4" transform="translate(0 -1)">
            <path
              data-v-b495ff56=""
              id="Path_29261"
              data-name="Path 29261"
              d="M21.949,5H2A2,2,0,0,0,2,8.991H21.949a2,2,0,1,0,0-3.991Z"
              transform="translate(0 3.981)"
              fill="#fff"
            ></path>
            <path
              data-v-b495ff56=""
              id="Path_29262"
              data-name="Path 29262"
              d="M21.949,1H2A2,2,0,0,0,2,4.991H21.949a2,2,0,1,0,0-3.991Z"
              fill="#fff"
            ></path>
            <path
              data-v-b495ff56=""
              id="Path_29263"
              data-name="Path 29263"
              d="M9.977,9H2a2,2,0,0,0,0,3.991H9.977A2,2,0,1,0,9.977,9Z"
              transform="translate(0 7.963)"
              fill="#fff"
            ></path>
          </g>
        </svg>

        <router-link
          tag="div"
          class="vx-logo cursor-pointer"
          :to="{ name: 'client-index' }"
        >
          <logo class="w-full fill-current text-primary" />
        </router-link>
        <vs-spacer />
        <profile />
      </vs-navbar>
    </div>
  </div>
</template>


<script>
import Profile from "./components/Profile";
import Logo from "./Logo.vue";
import AuthenticationService from "@/services/AuthenticationService";
import config from "@/config";

export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    Profile,
    Logo,
  },
  computed: {
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff"
        ? "#02142b"
        : this.navbarColor;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    textColor() {
      return {
        "text-white":
          (this.navbarColor != "#02142b" &&
            this.$store.state.theme === "dark") ||
          (this.navbarColor != "#fff" && this.$store.state.theme !== "dark"),
      };
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default") return "navbar-default";
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced";
      else if (this.verticalNavMenuWidth) return "navbar-full";
    },
  },

  created() {
    AuthenticationService.getSupport().then((res) => {
      config.support = res.data.data;
    });
  },
  methods: {
    showSidebar() {
      this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
    },
  },
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>

<style>
@media screen and (max-width: 968px) {
  .vx-logo {
    display: none;
  }
}
</style>
