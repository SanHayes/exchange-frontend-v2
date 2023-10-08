<template>
  <div class="boxFix">
    <!-- 登录 -->
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
            <div class="loginForm login_acc white mt-0">
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
                  <vs-button
                    style="
                      margin-top: 20px;
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
          </div>
          <div slot="footer">
            <p class="colorWhite bottomText mb-2">
              {{ $t("login.9") }} {{ domain }}?
              <router-link to="/register" class="cursor-pointer">
                {{ $t("Index.register") }}
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 注册 -->
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
    },
  },
  methods: {
    replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, "g"), replace);
    },

    slepShowSlide() {
      setTimeout(() => {
        this.activeSlide = true;
      }, 100);
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

    /** 注册 */
    submitFormReg() {
      if (this.emailReg === "") {
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
          upline_id: this.codeRef,
        };
        AuthenticationService.registerUser(obj).then(async (res) => {
          this.ldFrom = false;
          if (res.data.code == 10000) {
            const {
              data,
            } = await AuthenticationService.loginUser({
              email: this.emailReg,
              password: this.passwordReg,
            });
            localStorage.setItem("tokenUser", data.data.token);
            this.activeLogin = false;
            setTimeout(() => {
              this.getInfoLogin();
            }, 100);
            return;
          } else {
            this.$vs.notify({
              text: res.data.message,
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger",
            });
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
    // 登录
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
