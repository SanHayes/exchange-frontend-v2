<template>
  <div id="tool-add-money" class="data-list-container">
    <template>
      <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
          <div class="centerx labelx mb-4">
            <vs-input
              style="width: 100%"
              :label="$t('Nickname')"
              v-model="nickName"
            />
          </div>
          <p></p>
          <div class="centerx labelx mb-4">
            <vs-input
              type="number"
              style="width: 100%"
              :label="`${$t('AmountMoney')} USDT`"
              v-model="amountUSDT"
            />
          </div>
          <div class="centerx labelx mb-4">
            <vs-input
              type="number"
              style="width: 100%"
              :label="`${$t('AmountMoney')} BTC`"
              v-model="amountBTC"
            />
          </div>
          <div class="centerx labelx mb-4">
            <vs-input
              type="number"
              style="width: 100%"
              :label="`${$t('AmountMoney')} ETH`"
              v-model="amountETH"
            />
          </div>
          <div class="centerx labelx mb-4">
            <vs-input
              type="number"
              style="width: 100%"
              :label="`${$t('AmountMoney')} PAYPAL`"
              v-model="amountPAYPAL"
            />
          </div>
          <div class="centerx labelx mb-4">
            <vs-input
              type="number"
              style="width: 100%"
              :label="`${$t('AmountMoney')} VNĐ`"
              v-model="amountVND"
            />
          </div>
        </div>
      </div>

      <vs-button type="filled" @click.prevent="addMoney" class="mt-5 block">
        {{ $t("Deduction") }}
      </vs-button>
    </template>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      nickName: "",
      amountUSDT: 0,
      amountBTC: 0,
      amountETH: 0,
      amountPAYPAL: 0,
      amountVND: 0,
    };
  },
  methods: {
    async addMoney() {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      }
      if (this.nickName == "") {
        return this.$vs.notify({
          text: "Biệt danh không được rỗng!",
          color: "warning",
          iconPack: "feather",
          icon: "icon-check",
        });
      }
      let obj = {
        nick: this.nickName,
        aUSDT: this.amountUSDT,
        aBTC: this.amountBTC,
        aETH: this.amountETH,
        aPAYPAL: this.amountPAYPAL,
        aVND: this.amountVND,
      };

      AuthenticationService.addMoneyMember(obj).then((res) => {
        let d = res.data;
        if (!d.success) {
          localStorage.removeItem("token");
          this.$router.push("/pages/login").catch(() => {});
        } else {
          this.amountUSDT = 0;
          this.amountBTC = 0;
          this.amountETH = 0;
          this.amountPAYPAL = 0;
          this.amountVND = 0;

          return this.$vs.notify({
            text: `Trừ tiền cho tài khoản ${this.nickName} thành công.`,
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        }
      });
    },
  },
};
</script>