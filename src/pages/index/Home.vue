<template>
  <div class="home">
    <section class="sec--01">
      <header class="h-header-custom">
        <img
          width="200"
          :src="require('@/assets/images/logo/logo.png')"
          alt="BO"
        />
        <div class="header--btn">
          <div class="header--btn_login" @click="RegisterUrl">
            {{ $t("Index.register") }}
          </div>
          <div
            style="margin-right: 10px"
            class="header--btn_register"
            @click="LoginUrl"
          >
            {{ $t("Index.login") }}
          </div>
          <I18n />
        </div>
      </header>

      <div class="content">
        <div class="title mx-auto">{{ $t("Index.i1") }}</div>
        <div class="des mx-auto">{{ domain }} {{ $t("Index.i2") }}</div>
        <div class="btn my-10" @click="LoginUrl">
          {{ $t("Index.i3") }}
        </div>
        <div class="main-banner-image"></div>
      </div>

      <footer>
        <div class="flex flex-col sm:flex-row wraper mx-auto">
          <div class="item space-y-2">
            <img :src="require('@/assets/images/landing/tick.png')" />
            <div class="title">{{ $t("Index.i4") }} $1.000</div>
            <div class="desctiption">
              {{ $t("Index.i5") }}
            </div>
          </div>

          <div class="item space-y-2 mt-4 sm:mt-0">
            <img :src="require('@/assets/images/landing/tick.png')" />
            <div class="title">{{ $t("Index.i6") }} $5</div>
            <div class="desctiption">
              {{ $t("Index.i7") }}
            </div>
          </div>

          <div class="item space-y-2 mt-4 sm:mt-0">
            <img :src="require('@/assets/images/landing/tick.png')" />
            <div class="title">{{ $t("Index.i8") }} $1</div>
            <div class="desctiption">
              {{ $t("Index.i9") }}
            </div>
          </div>
        </div>
      </footer>
    </section>

    <section class="sec--02">
      <div class="sec--02__container">
        <h3 class="title text-center md:text-left">{{ $t("Index.i10") }}.</h3>
        <p class="description mt-10 w-full md:w-2/3 text-center md:text-left">
          {{ domain }} {{ $t("Index.i11") }}
        </p>

        <div class="wrapper flex flex-col md:flex-row space-x-3">
          <div class="item text-center md:text-left">
            <img
              :src="require('@/assets/images/landing/currency-exchange.png')"
              width="120"
              height="120"
              alt=""
            />
            <h5 class="title">{{ $t("Index.i12") }}</h5>
            <p class="description">{{ $t("Index.i13") }}.</p>
          </div>

          <div class="item text-center md:text-left">
            <img
              :src="require('@/assets/images/landing/lightning-fill.png')"
              width="120"
              height="120"
              alt=""
            />
            <h5 class="title">{{ $t("Index.i12") }}</h5>
            <p class="description">{{ $t("Index.i13") }}.</p>
          </div>

          <div class="item text-center md:text-left">
            <img
              :src="require('@/assets/images/landing/shield.png')"
              width="120"
              height="120"
              alt=""
            />
            <h5 class="title">{{ $t("Index.i12") }}</h5>
            <p class="description">{{ $t("Index.i13") }}.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec--04">
      <div class="title">
        {{ $t("Index.i14") }}
      </div>
      <div class="description">
        {{ $t("Index.i15") }}
        {{ domain }}.
      </div>
      <div class="wrapper flex flex-col md:flex-row justify-center">
        <div class="item">
          <div class="contentBox">
            <img
              :src="require('@/assets/images/landing_v2/Group1.png')"
              alt=""
            />
            <div class="box">
              <h3>{{ $t("Index.register") }}</h3>
              <p>{{ $t("Index.i16") }}.</p>
            </div>
          </div>
        </div>

        <div class="item mt-10 md:mt-0">
          <div class="contentBox">
            <img
              :src="require('@/assets/images/landing_v2/Group2.png')"
              alt=""
            />
            <div class="box">
              <h3>{{ $t("Index.i17") }}</h3>
              <p>{{ $t("Index.i18") }}.</p>
            </div>
          </div>
        </div>

        <div class="item mt-10 md:mt-0">
          <div class="contentBox">
            <img
              :src="require('@/assets/images/landing_v2/Group3.png')"
              alt=""
            />
            <div class="box">
              <h3>{{ $t("Index.i19") }}</h3>
              <p>{{ $t("Index.i20") }}.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="btn mt-20" @click="LoginUrl">{{ $t("Index.i3") }}</div>
    </section>

    <section class="sec--05">
      <div
        class="section-wrapper flex flex-col lg:flex-row items-center ml-10 pt-20 lg:pt-10"
      >
        <div class="flex-grow">
          <div class="max-w-md mx-auto">
            <div class="title">
              {{ $t("Index.i21") }}
            </div>

            <div class="des">
              {{ $t("Index.i22") }}
            </div>

            <div class="btn">
              {{ $t("Index.i23") }}
            </div>
          </div>
        </div>

        <img
          class="img text-right ml-auto"
          :src="require('@/assets/images/landing_v2/Mockup-3.png')"
        />
      </div>
    </section>

    <section class="sec--07">
      <h2>{{ $t("Index.i24") }}</h2>
      <p>{{ $t("Index.i25") }}.</p>
      <div>
        <img
          class="mr-5"
          :src="require('@/assets/images/landing_v2/bitcoin.2b7d6815.svg')"
          alt=""
        />
        <img
          class="mr-5"
          :src="require('@/assets/images/landing_v2/tether.6d1c997e.svg')"
          alt=""
        />
        <img
          :src="require('@/assets/images/landing_v2/binance.cf56a2f9.svg')"
          alt=""
        />
      </div>
    </section>

    <section class="sec--08">
      <div class="footerFAQs">
        <div class="container position-relative">
          <div
            class="py-3 py-sm-5 blockRow border-bottom pb-0 flex flex-col md:flex-row"
          >
            <div class="block logo">
              <p class="mb-lg-2 mb-1">
                <img
                  width="236"
                  height="73"
                  :src="require('@/assets/images/logo/logo.png')"
                  alt=""
                />
              </p>
              <div class="font-12 txtContent">
                © 2021
                <div class="text-domain d-inline-block">{{ domain }}</div>
                All rights reserved.
              </div>
              <p>
                Email:
                <a :href="`mailto:${mail}`" class="emailLink">{{ mail }}</a>
              </p>
            </div>
            <div class="block md:pl-6">
              <h4>{{ $t("Index.i26") }}</h4>
              <ul>
                <li><p></p></li>
              </ul>
            </div>
            <div class="block md:pl-6 support" style="flex: 0.5 1 0%">
              <h4>{{ $t("Index.i27") }}</h4>
              <ul>
                <li>
                  <p>
                    <a
                      href="/KingBoEx_Agency Obligations_vi.pdf"
                      target="_blank"
                    >
                      {{ $t("Index.i28") }}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="py-3 py-sm-5 blockRow mb-0">
            <div class="block">
              <p class="txtContent fullText">
                {{ $t("Index.i30") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <log-reg-for-get />
  </div>
</template>


<style scoped lang="scss">
@use "./styles/home.scss";
</style>

<style lang="scss">
.swiper-pagination-bullet {
  background: unset !important;
  width: unset !important;
  height: unset !important;

  .clients-say-name {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
    margin: 48px 0;
    transform: translate(50%, -50%);
    white-space: nowrap;
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -67px;
  }

  .blockRow {
    display: flex;
  }
}

.swiper-pagination-bullet-active .clients-say-name {
  display: block;
  margin: auto;
}

.c-active {
  background-color: #02102c !important;
  border-bottom: none !important;
  padding: 7px 90px !important;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import config from "@/config";
import LogRegForGet from "@/pages/user/LogRegForGet";
import I18n from "../trade/navbar/components/i18n.vue";
export default {
  data() {
console.log(config)
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            if (index === 0) {
              return `<div class="wrapper ${className}" >
                                    <div  class="clients-say-name text-center">
                                    —Robert Carter—
                                    </div>
                                    <img src="/landing/img/client-1.png" alt="">
                                </div>`;
            }
            if (index === 1) {
              return `<div class="wrapper ${className}" >
                                    <div  class="clients-say-name text-center">
                                        —Britney Bradley—
                                    </div>
                                    <img src="/landing/img/client-2.png" alt="">
                                </div>`;
            }
            if (index === 2) {
              return `<div class="wrapper ${className}" >
                                    <div  class="clients-say-name text-center">
                                        —Clifford Mccarthy—
                                    </div>
                                    <img src="/landing/img/client-3.png" alt="">
                                </div>`;
            }
          },
        },
      },
      domain: config.domainRealName,
      mail: config.support.mail,
    };
  },
  methods: {
    LoginUrl() {
      this.$router.push({ path: "/login" });
    },
    RegisterUrl() {
      this.$router.push({ path: "/register" });
    },
    onWindowLoad() {
      let path = this.$router.currentRoute.path;
      let checkTK = localStorage.hasOwnProperty("tokenUser");
      this.$vs.loading.close();
      if (path == "/" && checkTK) {
        this.$router.push({ path: "/trading" });
      }
    },
  },
  components: {
    swiper,
    swiperSlide,
    LogRegForGet,
    I18n,
  },
  mounted() {
    this.$vs.loading({
      type: "radius",
      background: "#111",
      color: "#ffffff",
    });
  },
  created() {
    window.addEventListener("load", this.onWindowLoad);
    window.addEventListener("scroll", function () {
      if ($(this).scrollTop() !== 0) {
        $(".h-header-custom").addClass("c-active");
      } else {
        $(".h-header-custom").removeClass("c-active");
      }
    });
  },
};
</script>
