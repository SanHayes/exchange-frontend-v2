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
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-3">
                Đăng nhập vào Tài khoản của bạn111
              </h2>
              <div class="centerx labelx">
                <div class="mb-3">
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Số điện thoại *</label
                  >
                  <input
                    type="text"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền số điện thoại"
                    v-model="email"
                  />
                </div>
                <div class="mb-3 relative">
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Mật khẩu *</label
                  >
                  <input
                    :type="passTypeLog"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền mật khẩu"
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
                    >Quên mật khẩu?</router-link
                  >
                  <vs-button
                    style="
                      background: #f1dd48 !important;
                      color: #fff !important;
                    "
                    class="w-full"
                    type="filled"
                    :disabled="!disabledLogin"
                    @click="loginForm"
                    >Đăng nhập</vs-button
                  >
                </div>
              </div>
            </div>
            <div class="loginForm login_acc white mt-0" v-else>
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-3">
                Xác minh bảo mật
              </h2>
              <div class="centerx labelx">
                <div class="mb-3">
                  <vs-input
                    class="w-full"
                    label="Mã Google Authentication"
                    v-model="G2FACodeEnter"
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
                    :disabled="!disabledLogin"
                    @click="loginFormAuthG2FA"
                    >Gửi</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div slot="footer">
            <p class="colorGray bottomText mb-2">
              Cần có tài khoản {{ domain }}?
              <router-link to="/register" class="cursor-pointer"
                >Đăng ký</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
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
            <div class="regFrom white mt-0" v-if="!isSubmitReg">
              <h2 class="mt5m font-24 white font-bold lg:mb-5 mb-3">
                Đăng ký Tạo tài khoản của bạn với chúng tôi
              </h2>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmReg != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Số điện thoại *</label
                  >
                  <input
                    type="text"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền số điện thoại"
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
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Mật khẩu *</label
                  >
                  <input
                    v-validate="'required|min:6|max:20'"
                    maxlength="20"
                    :type="passTypeReg"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền mật khẩu"
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
                  <span class="md-count float-right text-xs italic"
                    >{{ countPassReg }} / 20</span
                  >
                </div>

                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgNickName != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Biệt danh *</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền Nickname"
                    v-model="nickName"
                    v-validate="'required|min:3|max:20|alpha_dash'"
                    maxlength="20"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgNickName }}
                  </small>
                  <span class="md-count float-right text-xs italic"
                    >{{ countNickNameReg }} / 20</span
                  >
                </div>

                <div
                  class="mb-5 relative"
                  :class="{ 'mt-10': msgNickName != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Mã giới thiệu / Mã khuyến mãi</label
                  >
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
                    @click="submitFormReg"
                    >Tiếp theo</vs-button
                  >
                </div>
              </div>
            </div>
            <div v-if="isSubmitReg">
              <div class="mb-5 relative wrapper-phone-code">
                <div>
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Mã xác thực OTP *</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền Mã xác thực OTP"
                    v-model="optCode"
                  />
                </div>
                <vs-button
                  style="
                    background: #f1dd48 !important;
                    color: #fff !important;
                    white-space: nowrap;
                    height: 45px;
                  "
                  v-if="!disSendMail"
                  @click="sendOtp"
                  >Lấy mã OTP</vs-button
                >
                <vs-button
                  v-else
                  :disabled="ssDownSend.includes('s')"
                  @click="sendOtp"
                  style="height: 45px"
                  >{{ ssDownSend }}</vs-button
                >
              </div>

              <vs-alert v-if="msgOptReg" color="warning" class="mb-5">
                {{ msgOptReg }}
              </vs-alert>
              <div>
                <vs-button
                  style="background: #f1dd48 !important; color: #fff !important"
                  :disabled="optCode.length === 0"
                  class="w-full"
                  type="filled"
                  @click="verifyOtp"
                  >Đăng ký</vs-button
                >
              </div>

              <p class="colorSecondary"></p>
            </div>
            <div id="recaptcha-container"></div>
          </div>
          <div slot="footer">
            <p class="colorGray bottomText mb-2">
              Có tài khoản {{ domain }}?
              <router-link to="/login" class="cursor-pointer">
                Đăng nhập vào Tài khoản của bạn.</router-link
              >
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
                Gửi lại email xác nhận
              </h2>
              <p class="color-white-50 mb-3">
                Vui lòng nhập địa chỉ email của bạn để gửi lại email xác nhận.
              </p>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmailResend != '' }"
                >
                  <vs-input
                    type="email"
                    class="w-full"
                    label="Địa chỉ Email"
                    placeholder="Điền Email"
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
                    >Gửi lại</vs-button
                  >
                </div>
              </div>
            </div>
            <div :class="{ hidden: hideTbResend, block: !hideTbResend }">
              <h2 class="font-bold mb-5 white titleHeader">
                Đã gửi email xác nhận!
              </h2>
              <p class="white">
                Một liên kết xác nhận đã được gửi tới email đăng ký của bạn.
              </p>
            </div>
          </div>
          <div slot="footer">
            <p class="color-white-50">
              Đã có tài khoản?
              <router-link to="/login" class="cursor-pointer">
                Đăng nhập vào Tài khoản của bạn.</router-link
              >
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
                Quên mật khẩu
              </h2>
              <p class="color-white-50 mb-3"></p>
              <div class="centerx labelx">
                <div
                  class="mb-5 relative"
                  :class="{ 'md-invalid': msgEmailForgot != '' }"
                >
                  <label class="label_custom" for="input-bvxi30l9g"
                    >Địa chỉ Email *</label
                  >
                  <input
                    type="email"
                    class="w-full input-bvxi30l9g"
                    placeholder="Điền Email"
                    v-model="emailForgot"
                  />
                  <small class="md-error text-danger text-sm">
                    {{ msgEmailForgot }}
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
              Đã có tài khoản?
              <router-link to="/login" class="cursor-pointer">
                Đăng nhập vào Tài khoản của bạn.</router-link
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
                    label="Địa chỉ Email *"
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
                    style="
                      background: #f1dd48 !important;
                      color: #fff !important;
                    "
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
              Đã có tài khoản?
              <router-link to="/login" class="cursor-pointer">
                Đăng nhập vào Tài khoản của bạn.</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";

export default {
  data() {
    return {
      activeSlide: false,
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
      emailResend: "",
      emailForgot: "",
      emailReg: "",
      emailReset: "",
      email: "",
      password: "",
      passwordReg: "",
      passwordReset: "",
      passwordReReset: "",
      codeReset: "",
      codeRef: "",
      optCode: "",
      appVerifier: "",
      nickName: "",
      error: null,
      domain: "",
      msgEmReg: "",
      msgOptReg: "",
      msgPassReg: "",
      msgNickName: "",
      msgEmailForgot: "",
      msgEmailResend: "",
      msgEmReset: "",
      msgPassReset: "",
      msgPassReReset: "",
      msgCoSeReset: "",

      saveToken: "",
      G2FACodeEnter: "",
      colorLoading: "#fff",
    };
  },
  computed: {
    disabledLogin() {
      if (
        this.email !== "" &&
        this.checkSdt(this.email) &&
        this.password !== ""
      ) {
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
      // console.log(path)
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
    sendOtp() {
      const self = this;
      let countryCode = "+84";
      let phoneNumber = countryCode + this.emailReg;
      self.msgOptReg = "";
      let appVerifier = this.appVerifier;
      this.countDownResendMail(true);
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          window.confirmationResult = confirmationResult;
        })
        .catch(function () {
          self.msgOptReg = "Đã vượt quá số lần gửi OTP. Thử lại sau!";
          self.optCode = "";
          setTimeout(() => {
            self.isSubmitReg = false;
          }, 1500);
        });
    },
    //
    verifyOtp() {
      const self = this;
      window.confirmationResult
        .confirm(this.optCode)
        .then(function (result) {
          // var user = result.user;
          self.ldFrom = true;
          let obj = {
            email: self.emailReg,
            password: self.passwordReg,
            nick_name: self.nickName,
            upline_id: self.codeRef,
            isOpt: true,
          };

          //
          AuthenticationService.registerUser(obj).then((res) => {
            self.ldFrom = false;
            if (res.data.code == 10000) {
              self.isSubmitReg = true;
              setTimeout(() => {
                self.countDownResendMail();
              }, 500);

              self.$vs.notify({
                title: "Đăng ký thành công",
                text: "Hãy đăng nhập để bắt đầu giao dịch!",
                iconPack: "feather",
                icon: "icon-check",
                color: "success",
              });
              self.$router.push("/login").catch(() => {});
            } else if (res.data.code == 1001) {
              self.$vs.notify({
                text: "SĐT này đã tồn tại",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "warning",
              });
            } else if (res.data.code == 1002) {
              self.$vs.notify({
                text: "Biệt danh này đã tồn tại",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "warning",
              });
            }
          });
        })
        .catch(function () {
          self.$vs.notify({
            text: "Sai mã xác thực OTP",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "warning",
          });
        });
    },
    initReCaptcha() {
      const self = this;
      const interval = setInterval(() => {
        if (self.appVerifier) {
          clearInterval(interval);
          return;
        }

        const idCapcha = document.querySelector("#recaptcha-container");
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: function () {},
            "expired-callback": function () {},
          }
        );
        //
        if (idCapcha && window.recaptchaVerifier) {
          self.appVerifier = window.recaptchaVerifier;
        }
      }, 1000);
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

    countDownResendMail(notHandleLoading = false) {
      if (!notHandleLoading) {
        this.$vs.loading({
          //background: this.backgroundLoading,
          color: this.colorLoading,
          container: "#button-with-loading",
          scale: 0.45,
        });
      }
      let giay = 30;
      let countD = setInterval(() => {
        this.ssDownSend = giay + "s";
        this.disSendMail = true;
        if (giay == 0) {
          this.disSendMail = false;
          if (!notHandleLoading) {
            this.$vs.loading.close("#button-with-loading > .con-vs-loading");
          }
          this.ssDownSend = "Yêu cầu một mã OTP mới";
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

    checkSdt(val) {
      let reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      return reg.test(val);
    },

    showPassLogin() {
      this.passTypeLog = this.passTypeLog === "password" ? "text" : "password";
    },

    showPassReg() {
      this.passTypeReg = this.passTypeReg === "password" ? "text" : "password";
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
        this.msgEmReset = "Địa chỉ email không hợp lệ. Vui lòng thử lại.";
        return;
      } else {
        isActive = true;
        this.msgEmReset = "";
      }

      if (this.passwordReset.length < 6 || this.passwordReset.length > 20) {
        this.msgPassReset = "Mật khẩu của bạn ít nhất phải 6 đến 20 ký tự.";
        return;
      } else {
        isActive = true;
        this.msgPassReset = "";
      }

      if (this.passwordReReset.length < 6 || this.passwordReReset.length > 20) {
        this.msgPassReReset = "Mật khẩu của bạn ít nhất phải 6 đến 20 ký tự.";
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
          //code_secure: this.codeReset
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
      if (this.emailReg === "" || !this.checkSdt(this.emailReg)) {
        this.msgEmReg = "Số điện thoại không hợp lệ. Vui lòng thử lại.";
        return;
      } else {
        this.msgEmReg = "";
      }

      if (
        this.passwordReg === "" ||
        this.passwordReg.length < 6 ||
        this.passwordReg.length > 20
      ) {
        this.msgPassReg = "Mật khẩu của bạn ít nhất phải 6 đến 20 ký tự.";
        return;
      } else {
        this.msgPassReg = "";
      }

      const regex = /^[a-zA-Z0-9-_]+$/;

      if (
        this.nickName === "" ||
        this.nickName.length < 6 ||
        this.nickName.length > 20 ||
        !regex.test(this.nickName)
      ) {
        this.msgNickName =
          "Biệt danh phải từ 6 đến 20 ký tự, bắt đầu bằng chữ và không chứa ký tự đặc biệt.";
        return;
      } else {
        this.msgNickName = "";
      }
      this.isSubmitReg = true;
    },

    submitFormForgot() {
      let isActive = true;

      if (this.emailForgot === "" || !this.checkReg(this.emailForgot)) {
        this.msgEmailForgot = "Địa chỉ email không hợp lệ. Vui lòng thử lại.";
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
      debugger;
      let isActive = true;

      if (this.emailResend === "" || !this.checkReg(this.emailResend)) {
        this.msgEmailResend = "Địa chỉ email không hợp lệ. Vui lòng thử lại.";
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
          console.log("res", res);
          this.ldFrom = false;
          if (res.data.code === 10000) {
            this.hideTbResend = false;
          }
        });
      }
    },

    getInfoLogin() {
      AuthenticationService.getInfoUser().then((res) => {
        if (res.data.code == 10000) {
          let dt = res.data.data;

          getData.uid = dt.id;
          getData.email = dt.email;
          getData.profile_image = dt.profile_image;
          getData.displayName = dt.nick_name;
          getData.uidLive = dt.order[1]?.u_id;
          getData.uidDemo = (dt.order[0] || {})?.u_id || 0;
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

          getData.blLive = dt.order[1]?.balance ?? 0;
          getData.blDemo = dt.order[0]?.balance ?? 0;
          getData.balance = dt.balance;

          localStorage.setItem("INFO", JSON.stringify(dt));
          this.$router.push("/trading").catch(() => {});
        }
      });
    },

    loginForm() {
      this.ldFrom = true;
      AuthenticationService.loginUser({
        email: this.email,
        password: this.password,
      }).then((res) => {
        this.ldFrom = false;
        let g = res.data;
        if (g.success == 1) {
          if (g.g_2fa) {
            this.isG2FA = g.g_2fa;
            this.saveToken = g.token;
            return;
          }
          localStorage.setItem("tokenUser", g.token);

          this.activeLogin = false;

          this.getInfoLogin();
        } else if (res.data.success == 0) {
          this.$vs.notify({
            text: "Email hoặc mật khẩu không đúng. Vui lòng nhập lại",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        } else if (res.data.success == 3) {
          this.$vs.notify({
            text: "Tài khoản chưa được kích hoạt!",
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
        if (res.data.success == 1) {
          localStorage.setItem("tokenUser", this.saveToken);

          this.activeLogin = false;

          this.getInfoLogin();
        } else if (res.data.success == 6) {
          return this.$vs.notify({
            text: "Mã đăng nhập không hợp lệ hoặc đã hết hạn.",
            iconPack: "feather",
            icon: "icon-check",
            color: "warning",
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
    this.initReCaptcha();
    let path = this.$router.currentRoute.path;

    if (path == "/login") {
      this.activeLogin = true;
      this.slepShowSlide();

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

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>

<style scoped lang="scss">
.wrapper-phone-code {
  display: flex;
  align-items: flex-end;

  button {
    margin-left: 10px;
  }

  .otp-code {
    flex: 1;
  }
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
  height: 40px;
  width: 170px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
}
.close-page {
  position: absolute;
  top: 0;
  right: 40px;
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  z-index: 999;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

a {
  color: #fc5f5f !important;
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
