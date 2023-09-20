<template>
  <div class="boxFix">
    <div
      class="boxAuthentication"
      :class="{ show: activeSlide }"
      v-if="activeLogin"
    >
      <div
        class="contentAuthentication bgPrimary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar p-10 fixed flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <a href="/" class="logoLogin mb-0 router-link-active">BoTrade</a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click.stop="(activeLogin = !activeLogin), redirectHome()"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div class="loginForm login_acc white mt-0" v-if="!isG2FA">
              <h2 class="lg:mb-5">{{ $t("login.1") }}</h2>
              <div class="centerx labelx">
                <div class="mb-3">
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.2") }} *
                  </label>
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="email"
                  />
                </div>
                <div class="mb-3 relative">
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.3") }} *
                  </label>
                  <input
                    :type="passTypeLog"
                    class="w-full input-bvxi30l9g"
                    v-model="password"
                  />
                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-5"
                    :class="{ hidden: !activeL1, 'inline-block': activeL1 }"
                    @click="
                      (activeL1 = false), (activeL2 = true), showPassLogin()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-5"
                    :class="{ 'inline-block': activeL2, hidden: !activeL2 }"
                    @click="
                      (activeL1 = true), (activeL2 = false), showPassLogin()
                    "
                    class="viewPass cursor-pointer"
                  />
                </div>

                <div>
                  <router-link
                    to="/forgot-password"
                    class="mb-5 inline-block float-right cursor-pointer"
                  >
                    {{ $t("login.4") }}?
                  </router-link>
                  <vs-button
                    style="
                      background: #f1dd48 !important;
                      color: #fff !important;
                    "
                    class="w-full"
                    type="filled"
                    :disabled="!disabledLogin"
                    @click="loginForm"
                  >
                    {{ $t("login.5") }}
                  </vs-button>
                </div>
              </div>
            </div>
            <div class="loginForm white mt-0" v-else>
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-3">
                {{ $t("login.6") }}
              </h2>
              <div class="centerx labelx">
                <div class="mb-3 custom-input-wrapper">
                  <vs-input
                    class="w-full fix--input"
                    label="Mã Google Authentication"
                    v-model="G2FACodeEnter"
                  />
                  <span class="icon" @click="pasteCode">
                    {{ $t("login.8") }}
                  </span>
                </div>
                <div>
                  <vs-button
                    color="success"
                    class="w-full"
                    type="filled"
                    :disabled="!disabledLogin"
                    @click="loginFormAuthG2FA"
                  >
                    {{ $t("login.7") }}
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer">
            <p class="colorWhite bottomText mb-2">
              {{ $t("login.9") }} {{ domain }}?
              <router-link to="/register" class="cursor-pointer">
                {{ $t("Index.register") }}
              </router-link>
            </p>
            <div class="colorWhite">
              <span class="colorWhite text-center">
                {{ $t("login.10") }}?
              </span>
              <router-link
                to="/register-resend-verify-email"
                class="cursor-pointer"
              >
                {{ $t("login.11") }}.
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- LOGIN 3rd -->
    <div
      class="boxAuthentication"
      :class="{ show: activeSlide }"
      v-if="activeLogin3rd"
    >
      <div
        class="contentAuthentication bgPrimary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar p-10 fixed flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <a href="/" class="logoLogin mb-0 router-link-active">BoTrade</a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="(activeLogin3rd = !activeLogin3rd), redirectHome()"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div class="regFrom login_acc white mt-0" v-if="!isSubmitReg">
              <h2
                style="font-weight: 500 !important"
                class="mt5m font-24 white lg:mb-5 mb-3 space-x-2"
              >
                <span>{{ $t("login.12") }}</span>
                <span class="login-social-icon facebook" v-if="type3rd == 'fb'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.339"
                    height="21.332"
                    viewBox="0 0 11.339 21.332"
                    class=""
                  >
                    <path
                      id="Path_71950"
                      data-name="Path 71950"
                      d="M25.162,21.893l.588-3.831H22.074V15.575a1.916,1.916,0,0,1,2.16-2.07h1.671V10.243a20.347,20.347,0,0,0-2.967-.259c-3.028,0-5.007,1.835-5.007,5.157v2.92H14.566v3.831h3.366v9.262a13.374,13.374,0,0,0,4.142,0V21.893Z"
                      transform="translate(-14.566 -9.984)"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
                <span v-if="type3rd == 'fb'">Facebook </span>

                <span class="" v-if="type3rd == 'google'">
                  <svg
                    id="Component_1_1"
                    data-name="Component 1 – 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    class=""
                  >
                    <rect
                      id="Rectangle_6721"
                      data-name="Rectangle 6721"
                      width="23"
                      height="23"
                      rx="11.5"
                      fill="#fff"
                    ></rect>
                    <g id="google" transform="translate(3.147 2.87)">
                      <g
                        id="Group_25522"
                        data-name="Group 25522"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_71963"
                          data-name="Path 71963"
                          d="M12.107,5.568a5.128,5.128,0,0,1,3.309,1.208L18.01,4.307A8.713,8.713,0,0,0,4.293,6.851L7.216,9.1a5.161,5.161,0,0,1,4.891-3.536Z"
                          transform="translate(-3.384 -2)"
                          fill="#d94f3d"
                        ></path>
                        <path
                          id="Path_71964"
                          data-name="Path 71964"
                          d="M5.569,18.108a5.132,5.132,0,0,1,.264-1.618L2.909,14.236a8.7,8.7,0,0,0,0,7.743l2.923-2.253a5.132,5.132,0,0,1-.264-1.618Z"
                          transform="translate(-2 -9.384)"
                          fill="#f2c042"
                        ></path>
                        <path
                          id="Path_71965"
                          data-name="Path 71965"
                          d="M32.427,20H24.1v3.569h4.718a4.253,4.253,0,0,1-1.806,2.443l2.9,2.236C31.767,26.584,32.856,23.879,32.427,20Z"
                          transform="translate(-15.337 -12.863)"
                          fill="#5085ed"
                        ></path>
                        <path
                          id="Path_71966"
                          data-name="Path 71966"
                          d="M15.058,30.889a5.543,5.543,0,0,1-2.951.729,5.161,5.161,0,0,1-4.891-3.536L4.293,30.334a8.732,8.732,0,0,0,7.814,4.852,8.67,8.67,0,0,0,5.852-2.062Z"
                          transform="translate(-3.384 -17.739)"
                          fill="#57a75c"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span v-if="type3rd == 'google'">Google</span>
              </h2>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEm3rd != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.2") }} *
                  </label>
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="email3rd"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEm3rd }}
                  </small>
                </div>
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPass3rd != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.3") }}*
                  </label>
                  <input
                    v-validate="'required|min:6|max:20'"
                    maxlength="20"
                    :type="passType3rd"
                    class="w-full input-bvxi30l9g"
                    :placeholder="$t('login.14')"
                    v-model="password3rd"
                  />

                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-5"
                    :class="{ hidden: !activeE1, 'inline-block': activeE1 }"
                    @click="
                      (activeE1 = false), (activeE2 = true), showPass3rd()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-5"
                    :class="{ 'inline-block': activeE2, hidden: !activeE2 }"
                    @click="
                      (activeE1 = true), (activeE2 = false), showPass3rd()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPass3rd }}
                  </small>
                  <span class="md-count float-right text-xs italic">
                    {{ password3rd.length }} / 20
                  </span>
                </div>
                <div class="flex">
                  <div
                    class="mb-5 relative mr-5"
                    :class="{ 'md-invalid': msgFirstName != '' }"
                  >
                    <label class="label_custom" for="input-bvxi30l9g">
                      {{ $t("login.15") }} *
                    </label>
                    <input
                      type="email"
                      class="w-full input-bvxi30l9g"
                      placeholder="Điền Tên"
                      v-model="firstName"
                      v-validate="'required|min:3|max:20|alpha_dash'"
                      maxlength="20"
                    />

                    <small class="md-error text-danger text-sm">
                      {{ msgFirstName }}
                    </small>
                    <span class="md-count float-right text-xs italic">
                      {{ firstName.length }} / 20
                    </span>
                  </div>
                  <div
                    class="mb-5 relative"
                    :class="{ 'md-invalid': msgLastName != '' }"
                  >
                    <label class="label_custom" for="input-bvxi30l9g"
                      >Họ *</label
                    >
                    <input
                      type="email"
                      class="w-full input-bvxi30l9g"
                      placeholder="Điền Họ"
                      v-model="lastName"
                      v-validate="'required|min:3|max:20|alpha_dash'"
                      maxlength="20"
                    />

                    <small class="md-error text-danger text-sm">
                      {{ msgLastName }}
                    </small>
                    <span class="md-count float-right text-xs italic"
                      >{{ lastName.length }} / 20</span
                    >
                  </div>
                </div>

                <div
                  class="mb-5 relative"
                  :class="{ 'mt-10': msgNickName != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    Mã giới thiệu / Mã khuyến mãi
                  </label>
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền Mã giới thiệu"
                    v-model="codeRef"
                  />
                </div>
                <div>
                  <vs-button
                    style="
                      background: #f1dd48 !important;
                      color: #fff !important;
                    "
                    class="w-full"
                    type="filled"
                    @click="submitForm3rd"
                  >
                    Xác nhận
                  </vs-button>
                </div>
              </div>
            </div>
            <div v-if="isSubmitReg">
              <h2 class="font-weight-bold mb-5 font-24 colorSecondary">
                KÍCH HOẠT TÀI KHOẢN
              </h2>
              <p class="colorSecondary">
                Một liên kết xác nhận đã được gửi tới
                <a :href="`mailto:${emailReg}`" class="colorBlue4">{{
                  emailReg
                }}</a>
                Vui lòng chờ ít phút để nhận liên kết xác nhận và kích hoạt tài
                khoản của bạn.<br />
              </p>

              <p>
                <button
                  id="button-with-loading"
                  class="btn btn-resendemail w-full mt-4 vs-con-loading__container"
                  :disabled="disSendMail"
                  @click="reSendMail"
                >
                  {{ ssDownSend }}
                </button>
              </p>
              <p class="colorSecondary"></p>
            </div>
          </div>
          <div slot="footer"></div>
        </div>
      </div>
    </div>
    <!--End Login3rd  -->
    <div
      class="boxAuthentication"
      :class="{ show: activeSlide }"
      v-if="activeRegister"
    >
      <div
        class="contentAuthentication bgPrimary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar p-10 fixed flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <a href="/" class="logoLogin mb-0 router-link-active">BoTrade</a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="(activeRegister = !activeRegister), redirectHome()"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div class="regFrom login_acc white mt-0" v-if="!isSubmitReg">
              <h2
                style="font-weight: 500 !important"
                class="mt5m font-24 white lg:mb-5 mb-3"
              >
                {{ $t("login.13") }} {{ config.domainRealName }}
              </h2>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmReg != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.2") }} *
                  </label>
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="emailReg"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEmReg }}
                  </small>
                </div>
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPassReg != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.3") }} *
                  </label>
                  <input
                    v-validate="'required|min:6|max:20'"
                    maxlength="20"
                    :type="passTypeReg"
                    class="w-full input-bvxi30l9g"
                    v-model="passwordReg"
                  />

                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-5"
                    :class="{ hidden: !activeE1, 'inline-block': activeE1 }"
                    @click="
                      (activeE1 = false), (activeE2 = true), showPassReg()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-5"
                    :class="{ 'inline-block': activeE2, hidden: !activeE2 }"
                    @click="
                      (activeE1 = true), (activeE2 = false), showPassReg()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPassReg }}
                  </small>
                  <span class="md-count float-right text-xs italic">
                    {{ countPassReg }} / 20
                  </span>
                </div>

                <div
                  class="mb-5 relative"
                  :class="{ 'mt-10': msgNickName != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.16") }} / {{ $t("login.17") }}
                  </label>
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="codeRef"
                  />
                </div>
                <div>
                  <vs-button
                    style="
                      background: #f1dd48 !important;
                      color: #fff !important;
                    "
                    class="w-full"
                    type="filled"
                    @click="submitFormReg"
                  >
                    {{ $t("Index.register") }}
                  </vs-button>
                </div>
              </div>
            </div>
            <div v-if="isSubmitReg">
              <h2 class="font-weight-bold mb-5 font-24 colorSecondary">
                KÍCH HOẠT TÀI KHOẢN
              </h2>
              <p class="colorSecondary">
                Một liên kết xác nhận đã được gửi tới
                <a :href="`mailto:${emailReg}`" class="colorBlue4">{{
                  emailReg
                }}</a>
                Vui lòng chờ ít phút để nhận liên kết xác nhận và kích hoạt tài
                khoản của bạn.<br />
              </p>

              <p>
                <button
                  id="button-with-loading"
                  class="btn btn-resendemail w-full mt-4 vs-con-loading__container"
                  :disabled="disSendMail"
                  @click="reSendMail"
                >
                  {{ ssDownSend }}
                </button>
              </p>
              <p class="colorSecondary"></p>
            </div>
          </div>
          <div slot="footer">
            <p class="colorWhite bottomText mb-2">
              {{ $t("login.18") }} {{ domain }}?
              <router-link to="/login" class="cursor-pointer">
                {{ $t("login.1") }}.
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="boxAuthentication"
      :class="{ show: activeSlide }"
      v-if="activeResendVerifyEmail"
    >
      <div
        class="contentAuthentication bgPrimary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar p-10 fixed flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <a href="/" class="logoLogin mb-0 router-link-active">BoTrade</a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="
                  (activeResendVerifyEmail = !activeResendVerifyEmail),
                    redirectHome()
                "
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div
              class="ResendForm white mt-0"
              :class="{ block: hideTbResend, hidden: !hideTbResend }"
            >
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-5">
                {{ $t("login.19") }}
              </h2>
              <p class="color-white-50 mb-8">{{ $t("login.20") }}.</p>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmailResend != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.2") }} *
                  </label>
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="emailResend"
                  />

                  <small class="md-error text-danger text-sm">
                    {{ msgEmailResend }}
                  </small>
                </div>

                <div>
                  <vs-button
                    style="
                      background: #f1dd48 !important;
                      color: #fff !important;
                    "
                    class="w-full"
                    type="filled"
                    @click="submitFormResendActive"
                  >
                    {{ $t("login.21") }}
                  </vs-button>
                </div>
              </div>
            </div>
            <div :class="{ hidden: hideTbResend, block: !hideTbResend }">
              <h2 class="font-bold mb-5 white titleHeader">
                {{ $t("login.22") }}!
              </h2>
              <p class="white">
                Một liên kết xác nhận đã được gửi tới email đăng ký của bạn.
              </p>
            </div>
          </div>
          <div slot="footer">
            <p class="color-white-50">
              {{ $t("login.18") }}?
              <router-link to="/login" class="cursor-pointer">
                {{ $t("login.1") }}.
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="boxAuthentication"
      :class="{ show: activeSlide }"
      v-if="activeFogotPass"
    >
      <div
        class="contentAuthentication bgPrimary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar p-10 fixed flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <a href="/" class="logoLogin mb-0 router-link-active">BoTrade</a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="(activeFogotPass = !activeFogotPass), redirectHome()"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div
              class="fotgotForm white mt-0"
              :class="{ block: hideTbForgot, hidden: !hideTbForgot }"
            >
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-5">
                {{ $t("login.4") }}
              </h2>
              <p class="color-white-50 mb-3"></p>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmailForgot != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g">
                    {{ $t("login.2") }} *
                  </label>
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    v-model="emailForgot"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEmailForgot }}
                  </small>
                </div>

                <div>
                  <vs-button
                    color="success"
                    class="w-full"
                    type="filled"
                    @click="submitFormForgot"
                    >Gửi</vs-button
                  >
                </div>
              </div>
            </div>
            <div :class="{ hidden: hideTbForgot, block: !hideTbForgot }">
              <h2 class="font-bold mb-5 white titleHeader">
                Yêu cầu mật khẩu mới thành công!
              </h2>
              <p class="white">
                Một liên kết xác nhận đã được gửi đến hòm thư điện tử của
                bạn.<br />
                Vui lòng chờ trong ít phút để nhận liên kết để đặt lại mật khẩu.
              </p>
            </div>
          </div>
          <div slot="footer">
            <p class="color-white-50">
              {{ $t("login.18") }}?
              <router-link to="/login" class="cursor-pointer">
                {{ $t("login.1") }}.</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="boxAuthentication"
      :class="{ show: activeSlide }"
      v-if="activeResetPass"
    >
      <div
        class="contentAuthentication bgPrimary flex flex-col items-center justify-between"
        :class="{ 'ld-loading': ldFrom }"
      >
        <div class="loading">
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
          <div class="loading__ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background: new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="header-sidebar p-10 fixed flex items-center justify-between flex-col w-full"
        >
          <div class="header w-full">
            <a href="/" class="logoLogin mb-0 router-link-active">BoTrade</a>
            <div class="close-page">
              <feather-icon
                icon="XIcon"
                @click="(activeResetPass = !activeResetPass), redirectHome()"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div class="formWapper w-full">
            <div
              class="fotgotForm white mt-0"
              :class="{ block: hideTbForgot, hidden: !hideTbForgot }"
            >
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-5">
                Đặt lại mật khẩu
              </h2>
              <p class="color-white-50 mb-3">
                Nhập mật khẩu mới và đừng quên nó
              </p>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmReset != '' }"
                >
                  <vs-input
                    type="email"
                    disabled="disabled"
                    class="w-full"
                    :label="$t('login.2') + '*'"
                    v-model="emailReset"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEmReset }}
                  </small>
                </div>
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPassReset != '' }"
                >
                  <vs-input
                    class="w-full"
                    maxlength="20"
                    :type="passTypeReset"
                    label="Mật khẩu mới *"
                    v-model="passwordReset"
                  />
                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-5"
                    :class="{ hidden: !activeRs1, 'inline-block': activeRs1 }"
                    @click="
                      (activeRs1 = false), (activeRs2 = true), showPassReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-5"
                    :class="{ 'inline-block': activeRs2, hidden: !activeRs2 }"
                    @click="
                      (activeRs1 = true), (activeRs2 = false), showPassReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPassReset }}
                  </small>
                  <span class="md-count float-right text-xs italic"
                    >{{ countPassReset }} / 20</span
                  >
                </div>
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgPassReReset != '' }"
                >
                  <vs-input
                    class="w-full"
                    maxlength="20"
                    :type="passTypeReReset"
                    label="Xác nhận mật khẩu *"
                    v-model="passwordReReset"
                  />
                  <feather-icon
                    icon="EyeOffIcon"
                    svgClasses="w-5"
                    :class="{ hidden: !activeRss1, 'inline-block': activeRss1 }"
                    @click="
                      (activeRss1 = false),
                        (activeRss2 = true),
                        showPassReReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <feather-icon
                    icon="EyeIcon"
                    svgClasses="w-5"
                    :class="{ 'inline-block': activeRss2, hidden: !activeRss2 }"
                    @click="
                      (activeRss1 = true),
                        (activeRss2 = false),
                        showPassReReset()
                    "
                    class="viewPass cursor-pointer"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgPassReReset }}
                  </small>
                  <span class="md-count float-right text-xs italic"
                    >{{ countPassReReset }} / 20</span
                  >
                </div>
                <div class="mt-2">
                  <vs-button
                    color="success"
                    class="w-full"
                    type="filled"
                    @click="submitFormResetPass"
                    >Đặt lại mật khẩu</vs-button
                  >
                </div>
              </div>
            </div>
            <div :class="{ hidden: hideTbForgot, block: !hideTbForgot }">
              <h2 class="font-bold mb-5 white titleHeader">
                Yêu cầu mật khẩu mới thành công!
              </h2>
              <p class="white">
                Một liên kết xác nhận đã được gửi đến hòm thư điện tử của
                bạn.<br />
                Vui lòng chờ trong ít phút để nhận liên kết để đặt lại mật khẩu.
              </p>
            </div>
          </div>
          <div slot="footer">
            <p class="color-white-50">
              {{ $t("login.18") }}?
              <router-link to="/login" class="cursor-pointer">
                {{ $t("login.1") }}.
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";
import config from "@/config";
import { parseJwt } from "@/helpers.js";
export default {
  data() {
    return {
      activeLoginFB: false,
      activeLogin3rd: false,
      activeSlide: false,
      logo3rd: "",
      ssDownSend: "30s",
      disSendMail: false,
      isSubmitReg: false,
      isG2FA: 0,
      hideTbResend: true,
      hideTbForgot: true,
      ldFrom: false,
      activeL1: true,
      activeL2: false,
      activeE1: true,
      activeE2: false,
      activeRs1: true,
      activeRs2: false,
      activeRss1: true,
      activeRss2: false,
      activeLogin: false,
      activeRegister: false,
      activeResendVerifyEmail: false,
      activeFogotPass: false,
      activeResetPass: false,
      passTypeReg: "password",
      passTypeLog: "password",
      passTypeReset: "password",
      passTypeReReset: "password",
      passType3rd: "password",
      emailResend: "",
      emailForgot: "",
      emailReg: "",
      emailReset: "",
      email: "",
      email3rd: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordReg: "",
      password3rd: "",
      passwordReset: "",
      passwordReReset: "",
      codeReset: "",
      codeRef: "",
      nickName: "",
      nickName3rd: "",
      error: null,
      domain: "",
      msgEmReg: "",
      msgPassReg: "",
      msgPass3rd: "",
      msgNickName: "",
      msgNickName3rd: "",
      msgEmailForgot: "",
      msgEmailResend: "",
      msgEmReset: "",
      msgPassReset: "",
      msgPassReReset: "",
      msgCoSeReset: "",
      msgFirstName: "",
      msgLastName: "",
      msgEm3rd: "",
      saveToken: "",
      G2FACodeEnter: "",
      colorLoading: "#fff",
      type3rd: "",
      config,
    };
  },
  computed: {
    disabledLogin() {
      if (this.email !== "" && this.password !== "") {
        return true;
      }
    },

    countPassReg() {
      return this.passwordReg.length;
    },

    countNickNameReg() {
      return this.nickName.length;
    },

    countPassReset() {
      return this.passwordReset.length;
    },
    countPassReReset() {
      return this.passwordReReset.length;
    },
  },
  watch: {
    $route() {
      let path = this.$router.currentRoute.path;
      this.activeSlide = false;
      if (path == "/login") {
        this.activeLogin = true;
        this.activeRegister = false;
        this.activeFogotPass = false;
        this.activeResendVerifyEmail = false;
        this.slepShowSlide();
      }

      if (path == "/register") {
        this.activeRegister = true;
        this.activeLogin = false;
        this.activeFogotPass = false;
        this.activeResendVerifyEmail = false;
        this.slepShowSlide();
      }

      if (path == "/forgot-password") {
        this.activeFogotPass = true;
        this.activeLogin = false;
        this.activeRegister = false;
        this.activeResendVerifyEmail = false;
        this.slepShowSlide();
      }

      if (path == "/register-resend-verify-email") {
        this.activeResendVerifyEmail = true;
        this.activeLogin = false;
        this.activeRegister = false;
        this.activeFogotPass = false;
        this.slepShowSlide();
      }
    },
  },
  methods: {
    async pasteCode() {
      this.G2FACodeEnter = await navigator.clipboard.readText();
    },
    loginFb() {
      location.href = config.domain + "login/facebook";
    },

    loginGoogle() {
      location.href = config.domain + "login/google";
    },

    replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, "g"), replace);
    },

    openSite() {
      let e = this.replaceAll(this.emailReg, "@", "ACONG");
      let a = this.replaceAll(e, /\./g, "DOT");
      window.open("https://t.me/ares_idefibo_bot?start=BOREG_" + a);
    },

    slepShowSlide() {
      setTimeout(() => {
        this.activeSlide = true;
      }, 100);
    },

    countDownResendMail() {
      this.$vs.loading({
        //background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-with-loading",
        scale: 0.45,
      });
      let giay = 30;
      let countD = setInterval(() => {
        this.ssDownSend = giay + "s";
        this.disSendMail = true;
        if (giay == 0) {
          this.disSendMail = false;
          this.$vs.loading.close("#button-with-loading > .con-vs-loading");
          this.ssDownSend = "Yêu cầu một email mới";
          clearInterval(countD);
        }
        giay--;
      }, 1000);
    },

    reSendMail() {
      this.emailResend = this.emailReg;
      this.submitFormResendActive();
      this.countDownResendMail();
    },

    checkReg(vl) {
      let reg = /\S+@\S+\.\S+/;
      return reg.test(vl);
    },
    showPassLogin() {
      this.passTypeLog = this.passTypeLog === "password" ? "text" : "password";
    },

    showPassReg() {
      this.passTypeReg = this.passTypeReg === "password" ? "text" : "password";
    },

    showPass3rd() {
      this.passType3rd = this.passTypeReg === "password" ? "text" : "password";
    },

    showPassReset() {
      this.passTypeReset =
        this.passTypeReset === "password" ? "text" : "password";
    },

    showPassReReset() {
      this.passTypeReReset =
        this.passTypeReReset === "password" ? "text" : "password";
    },

    submitFormResetPass() {
      let isActive = true;
      if (this.emailReset === "") {
        this.msgEmReset = this.$t("login.23");
        return;
      } else {
        isActive = true;
        this.msgEmReset = "";
      }

      if (this.passwordReset.length < 6 || this.passwordReset.length > 20) {
        this.msgPassReset = this.$t("login.24");
        return;
      } else {
        isActive = true;
        this.msgPassReset = "";
      }

      if (this.passwordReReset.length < 6 || this.passwordReReset.length > 20) {
        this.msgPassReReset = this.$t("login.24");
        return;
      } else {
        isActive = true;
        this.msgPassReReset = "";
      }

      if (this.passwordReset != this.passwordReReset) {
        this.msgPassReReset = "Mật khẩu của bạn không trùng khớp.";
        return;
      } else {
        isActive = true;
        this.msgPassReReset = "";
      }
      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailReset,
          password: this.passwordReset,
        };

        AuthenticationService.changePassword(obj).then((res) => {
          if (res.data.success == 1) {
            this.$vs.notify({
              text: "Mật khẩu đã được đổi thành công.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
            });
            this.$router.push("/login");
          } else if (res.data.success == 2) {
            this.$vs.notify({
              text: "Mã 2FA không đúng",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger",
            });
          }
        });
      }
    },

    submitFormReg() {
      if (this.emailReg === "" || !this.checkReg(this.emailReg)) {
        this.msgEmReg = this.$t("login.23");
        return;
      } else {
        this.msgEmReg = "";
      }

      if (
        this.passwordReg === "" ||
        this.passwordReg.length < 6 ||
        this.passwordReg.length > 20
      ) {
        this.msgPassReg = this.$t("login.24");
        return;
      } else {
        this.msgPassReg = "";
      }

      let isActive = true;

      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailReg,
          password: this.passwordReg,
          // nick_name: this.nickName,
          upline_id: this.codeRef,
        };

        //

        AuthenticationService.registerUser(obj).then(async (res) => {
          this.ldFrom = false;
          if (res.data.code == 10000) {
            // this.isSubmitReg = true;
            const {
              data: { code, g_2fa, token },
            } = await AuthenticationService.loginUser({
              email: this.emailReg,
              password: this.passwordReg,
            });
            if (code === 10000) {
              if (g_2fa) {
                this.isG2FA = g_2fa;
                this.saveToken = token;
                return;
              }
            }
            localStorage.setItem("tokenUser", token);

            this.activeLogin = false;

            await this.getInfoLogin();
            return;
          } else if (res.data.code == 1001) {
            this.$vs.notify({
              text: "Email này đã tồn tại",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "warning",
            });
          } else if (res.data.code == 1002) {
            this.$vs.notify({
              text: "Biệt danh này đã tồn tại",
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "warning",
            });
          }
        });
      }
    },

    async submitForm3rd() {
      let isActive = true;
      if (this.email3rd === "" || !this.checkReg(this.email3rd)) {
        this.msgEm3rd = this.$t("login.23");
        return;
      } else {
        this.msgEm3rd = "";
      }

      if (
        this.password3rd === "" ||
        this.password3rd.length < 6 ||
        this.password3rd.length > 20
      ) {
        this.msgPass3rd = this.$t("login.24");
        return;
      } else {
        this.msgPass3rd = "";
      }

      const regex = /^[a-zA-Z0-9-_]+$/;

      if (
        this.nickName3rd === "" ||
        this.nickName3rd.length < 6 ||
        this.nickName3rd.length > 20 ||
        !regex.test(this.nickName3rd)
      ) {
        this.msgNickName3rd =
          "Biệt danh phải từ 6 đến 20 ký tự, bắt đầu bằng chữ và không chứa ký tự đặc biệt.";
        return;
      } else {
        this.msgNickName3rd = "";
      }

      if (isActive) {
        this.ldFrom = true;
        let obj = {
          email: this.email3rd,
          password: this.password3rd,
          nick_name: this.nickName3rd,
          isOpt: true,
          upline_id: this.codeRef,
        };
        if (this.firstName && this.lastName) {
          obj = {
            ...obj,
            ...{
              first_name: this.firstName,
              last_name: this.lastName,
            },
          };
        }
        const res = await AuthenticationService.registerUser(obj);
        this.ldFrom = false;
        if (res.data.code == 10000) {
          setTimeout(() => {
            this.countDownResendMail();
          }, 500);
        }

        this.ldFrom = true;
        const loginRes = await AuthenticationService.loginUser({
          email: this.email3rd,
          password: this.password3rd,
        });

        this.ldFrom = false;
        let g = loginRes.data;
        if (g.code == 10000) {
          if (g.g_2fa) {
            this.isG2FA = g.g_2fa;
            this.saveToken = g.token;
            return;
          }
          localStorage.setItem("tokenUser", g.token);
          this.activeLogin = false;
          this.getInfoLogin();
        }
      }
    },
    submitFormForgot() {
      let isActive = true;

      if (this.emailForgot === "" || !this.checkReg(this.emailForgot)) {
        this.msgEmailForgot = this.$t("login.23");
        isActive = false;
      } else {
        isActive = true;
        this.msgEmailForgot = "";
      }

      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailForgot,
        };

        AuthenticationService.forgotPassUser(obj).then((res) => {
          this.ldFrom = false;
          if (res.data.code === 10000) {
            this.hideTbForgot = false;
          }
        });
      }
    },

    submitFormResendActive() {
      let isActive = true;

      if (this.emailResend === "" || !this.checkReg(this.emailResend)) {
        this.msgEmailResend = this.$t("login.23");
        isActive = false;
      } else {
        this.msgEmailResend = "";
        isActive = true;
      }

      if (isActive) {
        this.ldFrom = true;

        let obj = {
          email: this.emailResend,
        };
        AuthenticationService.resendConfirUser(obj).then((res) => {
          this.ldFrom = false;
          if (res.data.code === 10000) {
            this.hideTbResend = false;
          }
        });
      }
    },

    /**
     * 獲取用戶信息
     */
    async getInfoLogin() {
      const res = await AuthenticationService.getInfoUser();
      if (res.data.code === 10000) {
        let dt = res.data.data;
        getData.uid = dt.id;
        getData.email = dt.email;
        getData.profile_image = dt.profile_image;
        getData.displayName = dt.nick_name;
        if (dt.order && dt.order.length) {
          getData.uidLive = dt.order ? dt.order[1]?.u_id : "";
          getData.uidDemo = (dt.order[0] || {})?.u_id || 0;
        }
        getData.am_usdt = dt.b;
        getData.vip = dt.vip;
        getData.vip_lv = dt.level_vip;
        getData.pen_commiss = dt.pending_commission;
        getData.ref = dt.ref;
        getData.upid = dt.upid;
        getData.c2fa = dt.fa2;
        getData.id_front = dt.id_front;
        (getData.id_back = dt.id_back), (getData.first_name = dt.first_name);
        getData.last_name = dt.last_name;
        getData.verify = dt.verify;
        getData.num_secu = dt.num_secury;
        getData.country = dt.c;
        getData.so_cmnd = dt.so_cmnd;
        if (dt.order && dt.order.length) {
          getData.blLive = dt.order[1]?.balance;
          getData.blDemo = (dt.order[0] || {})?.balance || 0;
        }
        getData.balance = dt.balance;

        localStorage.setItem("INFO", JSON.stringify(dt));
        this.$router.push({ path: "/trading" });
      } else {
        localStorage.removeItem("tokenUser");
      }
    },

    loginForm() {
      this.ldFrom = true;
      AuthenticationService.loginUser({
        email: this.email,
        password: this.password,
      }).then((res) => {
        this.ldFrom = false;
        let g = res.data;
        if (g.code === 10000) {
          localStorage.setItem("tokenUser", g.data.token);
          this.activeLogin = false;
          setTimeout(() => {
            this.getInfoLogin();
          }, 100);
        } else {
          this.$vs.notify({
            text: g.message,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        }
      });
    },

    loginFormAuthG2FA() {
      let obj = {
        code: this.G2FACodeEnter,
        token: this.saveToken,
      };
      AuthenticationService.loginGG2FA(obj).then((res) => {
        if (res.data.code == 10000) {
          localStorage.setItem("tokenUser", this.saveToken);
          this.activeLogin = false;
          this.getInfoLogin();
        }
      });
    },

    redirectHome() {
      this.activeSlide = false;
      this.$router.push("/");
    },
  },
  created() {
    let path = this.$router.currentRoute.path;
    if (path == "/login") {
      this.activeLogin = true;
      this.slepShowSlide();
      let type = this.$route.query.type;
      let token3rd = this.$route.query.token;
      let token = null;
      if (type === "success") {
        let data = parseJwt(token3rd);
        let loginToken = data.result.tokenLogin;
        localStorage.setItem("tokenUser", loginToken);
        this.activeLogin = false;
        this.getInfoLogin();
      } else if (type) {
        try {
          token = parseJwt(token3rd);
          let data = token.result.data;
          this.email3rd = data.email;
          this.firstName = data.first_name || "";
          this.lastName = data.last_name || "";
          if (data.tokenLogin) {
          }
        } catch (err) {}
      }

      if (type === "fb" && token) {
        this.activeLogin = false;
        this.activeLogin3rd = true;
        this.type3rd = "fb";
        return;
      }

      if (type === "google" && token) {
        this.activeLogin = false;
        this.activeLogin3rd = true;
        this.type3rd = "google";
        return;
      }

      let at = this.$route.query.a;
      if (at != undefined) {
        let obj = {
          token: at,
        };
        AuthenticationService.getTokenActive(obj).then((res) => {
          if (res.data.success) {
            this.$vs.notify({
              text: "Tài khoản của bạn đã được kích hoạt.",
              iconPack: "feather",
              icon: "icon-check",
              color: "success",
            });
          }
        });
      }
    }
    if (path == "/register") {
      this.activeRegister = true;
      this.slepShowSlide();
      let gr = this.$route.query.r;
      if (gr != undefined) {
        this.codeRef = gr;
      }
    }

    if (path == "/reset-password") {
      this.activeResetPass = true;
      this.slepShowSlide();
      let gr = this.$route.query.e;
      if (gr != undefined) {
        this.emailReset = gr;
      }
    }
  },
};
</script>

<style lang="scss">
.fix--input {
  input {
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>

<style scoped lang="scss">
.custom-input-wrapper {
  position: relative;
  .icon {
    position: absolute;
    right: 5px;
    top: 20px;
    height: 38px;

    display: flex;
    align-items: center;

    color: #28c76f;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
      color: #2ada79;
    }
  }
}
.divider__with-text {
  position: relative;
  text-align: center;
  color: hsla(0, 0%, 100%, 0.4) !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.divider__with-text:before {
  content: "";
  border-top: 1px solid #42476b;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
}

.divider__with-text:after {
  background-color: #090f3e;
  content: attr(data-text);
  position: relative;
  padding: 0 1.5em;
  color: hsla(0, 0%, 100%, 0.4);
  font-size: 0.875rem;
  font-weight: 700;
}
.social-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-column-gap: 8px;
  -moz-column-gap: 8px;
  column-gap: 8px;
}

.social-group > a {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: inherit;
  text-decoration: none;
}

.social-group > a .btn {
  color: #fff !important;
  cursor: pointer;
  align-items: center !important;
  display: flex !important;
  width: 100%;
}
.social-group > a .btn.btn-primary {
  background-color: #007bff !important;
  border-color: #007bff !important;
}

.login-social-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  border-radius: 100%;
}
.facebook {
  background-color: #007bff;
  border-color: #007bff;
}
.google {
  background-color: #dc3545;
  border-color: #dc3545;
}
.social-group > a .btn.btn-danger {
  background-color: #dc3545 !important;
  border-color: #dc3545 !important;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.flex-fill {
  -webkit-box-flex: 1 !important;
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

.colorWhite {
  color: #fff !important;
  font-size: 14px;
}

.login_acc {
  h2 {
    color: #fff !important;
    font-size: 24px;
    font-weight: 700 !important;
    margin-bottom: 3rem !important;
    margin-top: 1rem !important;
  }
}

.label_custom {
  color: #6b6f8b !important;
  font-size: 14px;
  padding: 0 5px;
}

.input-bvxi30l9g {
  margin-top: 0.5rem;
  background-color: transparent !important;
  border: 1px solid #42476b !important;
  color: #fff !important;
  font-size: 0.875rem !important;
  height: 45px !important;
  line-height: 45px !important;
  border-radius: 8px !important;
  padding-left: 10px;
  &::placeholder {
    color: #6b6f8b !important;
  }
}

.boxFix .boxAuthentication .bgPrimary {
  background-color: #090f3e;
}

.boxFix .boxAuthentication .contentAuthentication {
  position: relative;
  margin-left: auto;
  max-width: 428px;
  height: 100%;
  padding: 2rem;
  -webkit-transform: translateX(428px);
  transform: translateX(428px);
  -webkit-transition: -webkit-transform 0.3s ease 0.3s;
  transition: -webkit-transform 0.3s ease 0.3s;
  transition: transform 0.3s ease 0.3s;
  transition: transform 0.3s ease 0.3s, -webkit-transform 0.3s ease 0.3s;
  overflow-y: auto;
}

.boxFix .boxAuthentication.show .contentAuthentication {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.boxFix .boxAuthentication {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  -webkit-transition: opacity 0.3s ease 0.3s, left 0s ease 0.7s;
  transition: opacity 0.3s ease 0.3s, left 0s ease 0.7s;
}

.boxFix .boxAuthentication.show {
  right: 0;
}

/*.boxFix {
    height: 100vh!important;
    overflow: hidden;
}*/

.btn-resendemail {
  padding: 18px 2.5rem;
  color: #fff;
  font-weight: 700;
  opacity: 1;
  background: #fc5f5f;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}

.formWapper .md-error {
  display: block !important;
  opacity: 0;
  transform: translate3d(0, -8px, 0);
  left: 7px;
  font-style: italic;
}

.formWapper .md-invalid .md-error {
  opacity: 1;
  transform: translateZ(0);
}

.md-error {
  top: 100%;
  max-width: 335px;
}

.viewPass {
  position: absolute !important;
  right: 15px;
  top: 40px;
  color: #c7c7c7;
  width: 18px;
}

.header-sidebar {
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100 - 10px - 10px - 10px);
}

.logoLogin {
  background-image: url("~@/assets/images/logo/logo.png");
  display: block;
  height: 170px;
  width: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
}
.close-page {
  position: absolute;
  top: 0;
  right: 40px;
  width: 44px;
  height: 44px;
  color: #fff;
  cursor: pointer;
  z-index: 999;
  background: #2b2f4f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

a {
  color: #f1dd48 !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
</style>

<style>
.contentAuthentication input {
  background: transparent;
}

.pagle .vs-sidebar {
  max-width: 428px !important;
}
</style>
