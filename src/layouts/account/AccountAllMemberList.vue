<template>
  <div id="list-all-account" class="data-list-container">
    <vs-prompt
      title="Export To Excel"
      class="export-options"
      @cancle="clearFields"
      @accept="exportToExcel"
      accept-text="Export"
      @close="clearFields"
      :active.sync="activePrompt"
    >
      <vs-input
        v-model="fileName"
        placeholder="Enter File Name.."
        class="w-full"
      />
      <v-select v-model="selectedFormat" :options="formats" class="my-4" />
      <div class="flex">
        <span class="mr-4">Cell Auto Width:</span>
        <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
      </div>
    </vs-prompt>

    <data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <div id="loading-corners" class="vs-con-loading__container">
      <vs-table
        ref="table"
        multiple
        v-model="selectedUser"
        pagination
        :max-items="itemsPerPage"
        search
        :data="products"
      >
        <div
          slot="header"
          class="flex flex-wrap-reverse items-center flex-grow justify-between"
        >
          <div
            class="flex flex-wrap-reverse items-center data-list-btn-container"
          >
            <vs-dropdown
              vs-trigger-click
              class="dd-actions cursor-pointer mr-4 mb-4"
            >
              <div
                class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full"
              >
                <span class="mr-2">{{ $t("Action") }}</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
              </div>

              <vs-dropdown-menu>
                <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon
                      icon="TrashIcon"
                      svgClasses="h-4 w-4"
                      class="mr-2"
                    />
                    <span @click="deleteMultiple">{{ $t("del") }}</span>
                  </span>
                </vs-dropdown-item>
                <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon
                      icon="FileIcon"
                      svgClasses="h-4 w-4"
                      class="mr-2"
                    />
                    <span @click="activePrompt = true">
                      {{ $t("export") }}
                    </span>
                  </span>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
            <div
              class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"
              @click="addNewAccount"
            >
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">
                {{ $t("CreateAccount") }}
              </span>
            </div>
          </div>

          <!-- ITEMS PER PAGE -->
          <vs-dropdown
            vs-trigger-click
            class="cursor-pointer mb-4 mr-4 items-per-page-handler"
          >
            <div
              class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
            >
              <span class="mr-2 text-black">
                {{ currentPage * itemsPerPage - (itemsPerPage - 1) }} -
                {{
                  products.length - currentPage * itemsPerPage > 0
                    ? currentPage * itemsPerPage
                    : products.length
                }}
                trong {{ queriedItems }}
              </span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <vs-dropdown-menu>
              <vs-dropdown-item @click="itemsPerPage = 4">
                <span>4</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 10">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 15">
                <span>15</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 20">
                <span>20</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <template slot="thead">
          <vs-th sort-key="email">Email</vs-th>
          <vs-th sort-key="nickname">Tên</vs-th>
          <vs-th sort-key="wallet">Ví</vs-th>
          <vs-th sort-key="pending_commission">Hoa Hồng</vs-th>
          <vs-th sort-key="secury2fa">Bảo mật 2FA</vs-th>
          <vs-th sort-key="datecreate">Ngày tạo</vs-th>
          <vs-th>thông tin cá nhân</vs-th>
          <vs-th>Tác vụ</vs-th>
        </template>

        <template slot-scope="{ data }">
          <tbody>
            <vs-tr :data="tr" :key="tr.id" v-for="(tr, indextr) in data">
              <vs-td>
                <p class="user-name font-medium truncate">{{ tr.email }}</p>
                <p>
                  -- Địa chỉ USDT:
                  <span
                    style="color: #26a17b"
                    @click="
                      clickGetAddress(tr.address_USDT, tr.privateKey_USDT, '')
                    "
                    >{{ tr.address_USDT }}</span
                  >
                  <br />
                  *** Tổng CHƠI:
                  <span class="italic" style="color: #ff9900"
                    >${{ formatPrice(tr.pricePlay, 2) }}</span
                  ><br />
                  *** Tổng THẮNG:
                  <span class="italic" style="color: #10ff00"
                    >${{ formatPrice(tr.priceWin, 2) }}</span
                  ><br />
                  *** Tổng THUA:
                  <span class="italic" style="color: #ff5c5c"
                    >${{ formatPrice(tr.priceLose, 2) }}</span
                  ><br />
                  *** Lời:
                  <span class="italic font-bold" style="color: #00ff89">
                    ${{ formatPrice(tr.priceWin - tr.priceLose, 2) }}
                  </span>
                  <br />
                  <vx-tooltip
                    v-if="!tr.active"
                    style="float: left"
                    text="Kích hoạt tài khoản"
                  >
                    <vs-button
                      color="warning"
                      class="px-3 py-2 text-sm"
                      style="border-radius: 20px"
                      @click.stop.prevent="activeAccount(tr)"
                    >
                      Kích hoạt tài khoản
                    </vs-button>
                  </vx-tooltip>
                  <vs-chip v-else color="success" class="cursor-default">
                    Đã kích hoạt
                  </vs-chip>
                </p>
              </vs-td>

              <vs-td>
                <p class="user-name font-medium truncate">
                  {{ tr.first_name + " " + tr.last_name }}<br />
                  Biệt danh: {{ tr.nick_name }}<br />
                  <vs-checkbox
                    v-model="tr.marketing"
                    @click="changeAccType(tr)"
                  >
                    Marketing
                  </vs-checkbox>
                </p>
                <p>
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-eye"
                    @click="showF1F7(tr.nick_name, tr.ref_code, tr.email)"
                  >
                    F1-F7</vs-button
                  >
                  <br />
                  <vs-button
                    color="success"
                    icon-pack="feather"
                    icon="icon-zap"
                    @click="showCapTren(tr.id)"
                  >
                    Xem cấp trên
                  </vs-button>
                  <br />
                  <vs-button @click="showTKLive(tr.ref_code)">
                    Số dư tài khoản
                  </vs-button>
                </p>
              </vs-td>

              <vs-td>
                <p class="user-price">
                  <img
                    width="20"
                    :src="require('@/assets/images/sky/ic_vnd.png')"
                  />
                  {{ formatPrice(tr.money_vn, 0) }} đ<br />
                  <IconCrypto
                    style="width: 20px"
                    coinname="BTC"
                    color="color"
                    format="svg"
                  />
                  ${{ formatPrice(tr.money_btc, 6) }}<br />
                  <IconCrypto
                    style="width: 20px"
                    coinname="ETH"
                    color="color"
                    format="svg"
                  />
                  ${{ formatPrice(tr.money_eth, 4) }}<br />
                  <IconCrypto
                    style="width: 20px"
                    coinname="USDT"
                    color="color"
                    format="svg"
                  />
                  ${{ formatPrice(tr.money_usdt, 2) }}<br />
                  <img
                    width="20"
                    :src="
                      require('@/assets/images/sky/icon_bank/paypal-mini.png')
                    "
                  />${{ formatPrice(tr.money_paypal, 2) }}
                </p>
              </vs-td>

              <vs-td>
                <p class="user-commission">
                  {{ formatPrice(tr.pending_commission, 2) }}
                </p>
              </vs-td>

              <vs-td>
                <p>
                  Mã xác nhận 2FA:<br />{{
                    tr.code_secure != null ? tr.code_secure : "Chưa tạo"
                  }}
                </p>
                <vs-chip
                  :color="getOrderStatusColor(tr.active_2fa)"
                  class="user-order-status"
                  >{{ getOrderStatusColorText(tr.active_2fa) | title }}</vs-chip
                >
                <vs-button
                  size="small"
                  v-if="tr.active_2fa"
                  @click="turnOff2fa(tr)"
                >
                  Tắt
                </vs-button>
              </vs-td>

              <vs-td>
                <p class="user-create">
                  {{ formatDate(tr.created_at) }}
                </p>
              </vs-td>
              <vs-td>
                <p
                  class="verify-id_front"
                  @click="getPopupViewImg(tr.id_front)"
                  color="primary"
                  type="border"
                >
                  CMND mặt trước:
                  <img width="50" :src="`${mediaType(tr.id_front)}`" />
                </p>
                <p class="verify-id_back" @click="getPopupViewImg(tr.id_back)">
                  CMND mặt sau:
                  <img width="50" :src="`${mediaType(tr.id_back)}`" />
                </p>
                <p class="verify-email font-medium truncate">
                  Số căn cước (CMT):
                  {{ tr.so_cmnd ? tr.so_cmnd : "Không rõ" }}
                </p>
                <!-- <p>Xác minh:</p>
                <p>Tác vụ:</p> -->
              </vs-td>
              <vs-td class="whitespace-no-wrap text-center">
                <vx-tooltip
                  v-if="tr.marketing"
                  style="float: left"
                  :title="tr.nick_name"
                  color="success"
                  text="Cộng tiền vào tài khoản"
                >
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-dollar-sign"
                    @click.stop="addMoneyUser(tr)"
                  ></vs-button>
                </vx-tooltip>
                <vx-tooltip
                  style="float: left"
                  :title="tr.nick_name"
                  color="warning"
                  text="Chỉnh sửa tài khoản"
                >
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-edit"
                    @click.stop="editUser(tr)"
                  ></vs-button>
                </vx-tooltip>
                <vx-tooltip
                  style="float: left"
                  :title="tr.nick_name"
                  color="danger"
                  text="Xóa tài khoản"
                >
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-trash"
                    @click="
                      openPopDelete({
                        id: tr.id,
                        email: tr.email,
                        index: indextr,
                      })
                    "
                  ></vs-button>
                </vx-tooltip>
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
      </vs-table>
    </div>
    <vs-popup
      background-color="rgba(255,255,255,.6)"
      class=""
      title="Background"
      :active.sync="popupDeleteActive"
    >
      <p>Bạn đồng ý xóa tài khoản {{ UserInfo.email }} này.</p>
      <vs-button
        icon="icon-trash"
        icon-pack="feather"
        type="gradient"
        @click.stop="deleteUser(UserInfo.id, UserInfo.index)"
      >
        Đồng ý
      </vs-button>
    </vs-popup>
    <vs-popup title="Address Wallet" :active.sync="popupAdressWallet">
      <p>
        Address: {{ getAdress }}
        <feather-icon
          icon="CopyIcon"
          v-clipboard:copy="getAdress"
          v-clipboard:success="onCopy"
          class="cursor-pointer"
        ></feather-icon
        ><br />
        Private Key: {{ getPrivateKey }}
        <feather-icon
          icon="CopyIcon"
          v-clipboard:copy="getPrivateKey"
          v-clipboard:success="onCopy"
          class="cursor-pointer"
        ></feather-icon
        ><br />
        WFI BTC Address: {{ getWfiKey }}
        <feather-icon
          icon="CopyIcon"
          v-clipboard:copy="getWfiKey"
          v-clipboard:success="onCopy"
          class="cursor-pointer"
        ></feather-icon>
      </p>
    </vs-popup>
    <vs-popup title="Danh sách thành viên F1 - F7" :active.sync="popupF1F7">
      <div id="loading-corners2" class="vs-con-loading__container">
        <p>
          <span class="mr-2"
            >Khối lượng GH tháng này: ${{ formatPrice(tslgdCD1, 2) }}</span
          ><br />
          <span class="mr-2"
            >Khối lượng GH tháng trước: ${{ formatPrice(tslgdCD2, 2) }}</span
          ><br />
          <span class="mr-2"
            >Khối lượng GH 2 tháng trước: ${{ formatPrice(tslgdCD3, 2) }}</span
          ><br />
          <span class="mr-2"
            >Khối lượng GH 3 tháng trước: ${{ formatPrice(tslgdCD4, 2) }}</span
          ><br />
        </p>
        <v-tree ref="tree" :data="treeData" :draggable="true" />
      </div>
    </vs-popup>
    <vs-popup title="Xem cấp trên" :active.sync="popupCapTren">
      <div id="loading-corners3" class="vs-con-loading__container">
        <div v-if="!dataSuperior">Nick này không có cấp trên!</div>
        <div v-else>
          <div>Chi tiết cấp trên</div>
          <div>Email: {{ dataSuperior.email }}</div>
          <div>Nickname: {{ dataSuperior.nick_name }}</div>
          <div>
            Tên đầy đủ: {{ dataSuperior.first_name }}
            {{ dataSuperior.last_name }}
          </div>
          <div>Refcode: {{ dataSuperior.ref_code }}</div>
          <div>Upline ID: {{ dataSuperior.upline_id || "null" }}</div>
          <div>Xác minh: {{ dataSuperior.verified == 1 ? "Yes" : "No" }}</div>
          <div>Vip: {{ dataSuperior.vip_user }}</div>
        </div>
      </div>
    </vs-popup>
    <vs-popup title="Xem chi tiết tài khoản" :active.sync="popupTKLive">
      <div id="loading-corners3" class="vs-con-loading__container">
        <div v-if="!dataMoneyAccount">Đợi xíu nhé</div>
        <div v-else-if="dataMoneyAccount.demo || dataMoneyAccount.live">
          <div>Tài khoản LIVE</div>
          <div>Số tiền: {{ dataMoneyAccount.live.balance }}$</div>
          <div>Tổng thắng: {{ dataMoneyAccount.live.win }}$</div>
          <div>Tổng thua: {{ dataMoneyAccount.live.lose }}$</div>
          <br />
          <div>Tài khoản DEMO</div>
          <div>Số tiền: {{ dataMoneyAccount.demo.balance }}$</div>
          <div>Tổng thắng: {{ dataMoneyAccount.demo.win }}$</div>
          <div>Tổng thua: {{ dataMoneyAccount.demo.lose }}$</div>
        </div>
      </div>
    </vs-popup>
    <vs-popup
      class="holamundo"
      title="Hình ảnh chi tiết"
      :active.sync="popupViewImg"
    >
      <p class="text-center"><img class="responsive" :src="imgLink" /></p>
    </vs-popup>
  </div>
</template>

<script>
import DataViewSidebar from "@/layouts/account/slidebar/DataViewSidebar.vue";
import vSelect from "vue-select";
import AuthenticationService from "@/services/AuthenticationService";
import moment from "moment";
import Vue from "vue";
import { VTree } from "vue-tree-halower";

export default {
  components: {
    DataViewSidebar,
    vSelect,
    VTree,
  },
  data() {
    return {
      tslgdCD1: 0,
      tslgdCD2: 0,
      tslgdCD3: 0,
      tslgdCD4: 0,
      imgLinkDef: require("@/assets/images/profile/sfp.png"),
      imgLink: require("@/assets/images/profile/sfp.png"),
      popupViewImg: false,

      treeData: [],
      dataSuperior: null,
      dataMoneyAccount: null,
      popupF1F7: false,
      popupCapTren: false,
      popupTKLive: false,
      getAdress: "",
      getPrivateKey: "",
      getWfiKey: "",
      popupAdressWallet: false,

      UserInfo: {},
      popupDeleteActive: false,
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats: ["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: [
        "Id",
        "Email",
        "Nick",
        "Money",
        "Commission",
        "Date Create",
      ],
      headerVal: [
        "id",
        "email",
        "nickname",
        "wallet",
        "pending_commission",
        "created_at",
      ],
      productsFake: [],
      itemsPerPage: 10,
      isMounted: false,
      addNewDataSidebar: false,
      sidebarData: {},
    };
  },
  computed: {
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
      return 0;
    },
    products() {
      return this.productsFake;
    },
    queriedItems() {
      return this.$refs.table
        ? this.$refs.table.queriedResults.length
        : this.productsFake.length;
    },
  },
  methods: {
    activeAccount(tr) {
      let data = {
        // email: tr.email,
        active: 1,
        code_secure: 1,
      };

      AuthenticationService.activeUser(tr.id, data)
        .then((req) => {
          if (req.data.code === 10000) {
            let index = this.productsFake.findIndex((e) => e.id === tr.id);
            this.$set(this.productsFake[index], "active", 1);
            return this.$vs.notify({
              text: "Kích hoạt tài khoản thành công!",
              color: "success",
              iconPack: "feather",
              position: "top-right",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: req.data.message,
              color: "danger",
              iconPack: "feather",
              position: "top-right",
              icon: "icon-x",
            });
          }
        })
        .catch((error) => {});
    },

    turnOff2fa(tr) {
      AuthenticationService.activeUser(tr.id, {
        active_2fa: 0,
        secret_2fa: null,
        code_secure: null,
      }).then((resp) => {
        if (resp.data.success) {
          tr.active_2fa = false;
          return this.$vs.notify({
            text: "Xoá 2FA tài khoản thành công",
            color: "success",
            iconPack: "feather",
            icon: "icon-check",
          });
        }
      });
    },

    showCapTren(id) {
      this.popupCapTren = true;
      this.openLoadingInDiv3();

      AuthenticationService.getMemberInfo(id).then((resp) => {
        this.$vs.loading.close("#loading-corners3 > .con-vs-loading");
        if (resp.data.code === 10000) {
          this.dataSuperior = resp.data.data;
        }
      });
    },
    showTKLive(ref) {
      this.popupTKLive = true;
      this.openLoadingInDiv3();

      AuthenticationService.getLiveAccount(ref).then((resp) => {
        this.$vs.loading.close("#loading-corners3 > .con-vs-loading");
        if (resp.data.code === 10000) {
          this.dataMoneyAccount = {
            demo: resp.data.data.find((e) => e.type == 0),
            live: resp.data.data.find((e) => e.type == 1),
          };
        }
      });
    },
    showF1F7(nick, ref, email) {
      this.popupF1F7 = true;

      this.openLoadingInDiv2();

      this.treeData = [
        {
          title: nick,
          expanded: true,
          children: [],
        },
      ];

      let obj = {
        nick: nick,
        ref: ref,
        email: email,
      };

      //console.log(Object.keys(test).length);

      AuthenticationService.getListF1F7(obj).then((resp) => {
        this.$vs.loading.close("#loading-corners2 > .con-vs-loading");

        if (resp.data.success) {
          let data = resp.data.data;
          let obj = resp.data.obj;
          this.tslgdCD1 = obj.tslgdCD1;
          this.tslgdCD2 = obj.tslgdCD2;
          this.tslgdCD3 = obj.tslgdCD3;
          this.tslgdCD4 = obj.tslgdCD4;

          let c = 0;
          for (let obj in data) {
            c++;
            for (let i = 0; i < data[obj].length; i++) {
              this.treeData[0].children.push({
                title: `<span style='color: white'>Cấp ${c} - ${
                  data[obj][i].nick_name
                } - Khối lượng Giao Dịch: ${this.formatPrice(
                  data[obj][i].tklgd,
                  2
                )}</span> - Tổng tiền nạp: ${this.formatPrice(
                  data[obj][i].amt,
                  2
                )}`,
              });
            }
          }
        }
      });
    },

    openLoadingInDiv2() {
      this.$vs.loading({
        container: "#loading-corners2",
        type: "corners",
        scale: 0.6,
      });
    },

    openLoadingInDiv3() {
      this.$vs.loading({
        container: "#loading-corners3",
        type: "corners",
        scale: 0.6,
      });
    },

    openLoadingInDiv() {
      this.$vs.loading({
        container: "#loading-corners",
        type: "corners",
        scale: 0.6,
      });
    },

    async changeAccType(tr) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        tr.marketing = !tr.marketing;
        return;
      }

      AuthenticationService.activeUser(tr.id, {
        marketing: tr.marketing ? 0 : 1,
      }).then((resp) => {
        if (resp.data.success === -1) {
          tr.marketing = false;
          return this.$vs.notify({
            text: resp.data.message,
            color: "warning",
            iconPack: "feather",
            icon: "icon-check",
          });
        } else {
          if (resp.data.code === 10000) {
            return this.$vs.notify({
              text: "Đã thay đổi thành công tài khoản!",
              color: "success",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else if (resp.data.code === 40001) {
            localStorage.removeItem("token");
          }
        }
      });
    },

    clickGetAddress(a, p, w) {
      this.popupAdressWallet = true;
      if (w != "") {
        this.getWfiKey = w;
      } else {
        this.getWfiKey = "N/A";
      }
      this.getAdress = a;
      this.getPrivateKey = p;
    },

    onCopy() {
      this.$vs.notify({
        text: "Đã sao chép vào bộ nhớ",
        color: "success",
        iconPack: "feather",
        position: "top-center",
        icon: "icon-check-circle",
      });
    },
    async deleteMultiple() {
      const check = await this.$store.dispatch("set");
      if (!check) {
        return;
      }
      for (var i = this.selectedUser.length - 1; i >= 0; i--) {
        let id = this.selectedUser[i]["id"];
        AuthenticationService.deleteMember(id);
        Vue.delete(this.productsFake, i);
      }
      this.selectedUser = [];
      return this.$vs.notify({
        text: "Đã xóa thành công",
        color: "success",
        iconPack: "feather",
        icon: "icon-check",
      });
    },
    async openPopDelete(data) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      }
      this.UserInfo = data;
      this.popupDeleteActive = true;
    },

    deleteUser(id, index) {
      let token = localStorage.getItem("token");
      this.$store.dispatch("setToken", token);

      AuthenticationService.deleteMember(id).then((resp) => {
        if (resp.data.code === 10000) {
          Vue.delete(this.productsFake, index);
          this.popupDeleteActive = false;
          return this.$vs.notify({
            text: "Đã xóa thành công",
            color: "success",
            iconPack: "feather",
            icon: "icon-check",
          });
        }
      });
    },
    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm:ss");
      }
    },
    async addMoneyUser(data) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      }
      data["type"] = "addMoney";
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    addNewAccount() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    async editUser(data) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      }
      delete data["type"];
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    getOrderStatusColor(status) {
      if (status == 0) return "warning";
      if (status == 1) return "success";
      //if(status == 2) return "danger"
      return "warning";
    },
    getOrderStatusColorText(status) {
      if (status == 0) return "Chưa bật";
      if (status == 1) return "Đã bật";
      //if(status == 2) return "danger"
      return "Chưa bật";
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    // export ra file
    exportToExcel() {
      // kiểm tra nếu chưa chọn đối tượng thình sẽ không hiện bản xuất file
      if (this.selectedUser.length == 0) {
        return this.$vs.notify({
          title: "Xuất dữ liệu",
          text: "Vui lòng chọn nội dung để hoàn thành",
          color: "danger",
          iconPack: "feather",
          icon: "icon-heart",
        });
      }
      import("@/vendor/Export2Excel").then((excel) => {
        const list = this.selectedUser;
        const data = this.formatJson(this.headerVal, list);
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat,
        });
        this.clearFields();
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          return v[j];
        })
      );
    },
    clearFields() {
      this.fileName = "";
      this.cellAutoWidth = true;
      this.selectedFormat = "xlsx";
    },
    mediaType(img) {
      if (img != null) {
        return `${this.dm}/api/auth/me/photo/passport/${img}`;
      } else {
        return this.imgLinkDef;
      }
    },
    getPopupViewImg(link) {
      if (link != null) {
        this.imgLink = `${this.dm}/api/auth/me/photo/passport/${link}`;
      } else {
        this.imgLink = this.imgLinkDef;
      }
      this.popupViewImg = true;
    },
  },
  created() {
    let token = localStorage.getItem("token");
    this.$store.dispatch("setToken", token);

    AuthenticationService.getAllMember().then((resp) => {
      this.$vs.loading.close("#loading-corners > .con-vs-loading");
      if (resp.data.code === 10000) {
        this.productsFake = resp.data.data;
      } else if (resp.data.code == 40001) {
        localStorage.removeItem("token");
      } else {
        this.productsFake = [];
      }
    });
  },
  mounted() {
    this.isMounted = true;
    this.openLoadingInDiv();
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/tree.scss";

button.btn-async {
  background: rgba(var(--vs-warning), 0.15);
}

button.btn-delete {
  background: rgba(var(--vs-danger), 0.15);
}
</style>

<style lang="scss">
#list-all-account {
  .verify-id_back {
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .vs-con-table {
    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          & + i {
            left: 1rem;
          }

          &:focus + i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
        td {
          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }
          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
        }
        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check {
        padding: 0 15px !important;
      }
      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
