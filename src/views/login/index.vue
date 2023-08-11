<template>
  <div class="login">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h2 class="title" style="text-align: center">
          <!-- <img src="../../assets/logo.png" /> -->
          CMS BO
        </h2>
      </div>
      <el-form-item prop="email">
        <span class="svg-container" style="font-size: 16px"> 账 号 </span>
        <el-input
          ref="email"
          v-model="loginForm.email"
          prefix-icon="el-icon-user"
          placeholder="请输入账号"
          size="large"
          name="email"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container" style="font-size: 16px"> 密 码 </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            show-password
            size="large"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        size="large"
        @click.native.prevent="handleLogin"
      >
        登 录
      </el-button>
    </el-form>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "arres@gmail.com",
        password: "catchadmin",
      },
      loginRules: {
        email: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.email === "") {
      this.$refs.email.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
};
</script>

<style lang="scss">
.login {
  background: url(../../assets/login/bg.jpg) no-repeat;
  background-size: cover;
  height: 100%;
  .login-form {
    width: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: url(../../assets/login/bg2.png) no-repeat;
    background-size: cover;
    color: #fff;
    padding: 30px 60px 50px;
    .el-button {
      width: 100%;
      margin-top: 10px;
    }
    .el-input__inner {
      background: transparent;
      color: #fff;
    }
  }
  h2 {
    // display: flex;
    // justify-items: center;
    // align-items: center;
    img {
      margin-left: 30px;
      width: 50px;
      margin-right: 10px;
    }
  }
}
</style>