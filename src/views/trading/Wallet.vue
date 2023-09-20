<template>
  <div id="wallet">
    <div class="vx-row">
      <div class="w-full h-48 subBanner">
        <div class="container h-full flex custom-flex items-center info">
          <div class="flex flex-col justify-center relative">
            <!--总资产-->
            <p class="text-lg">Tổng tài sản (VND)</p>
            <p>
              <span class="price mr-2">{{ price }}</span>
              <span
                :class="`icon ${getSetSys.typeCurrUseSys} inline-block`"
              ></span>
            </p>
          </div>

          <div class="hide_money flex items-center" @click="toggleHideMoney">
            <feather-icon
              :icon="isHideMoney ? 'EyeOffIcon' : 'EyeIcon'"
              svgClasses="w-4 h-4 icon"
            />
            <span class="text">{{ !isHideMoney ? "Ẩn" : "Hiện" }} số dư</span>
          </div>
        </div>
      </div>
      <div class="w-full" style="padding: 0 4rem">
        <div class="container">
          <vs-tabs style="margin: 20px 0px">
            <!--主钱包-->
            <vs-tab
              label="Ví chính"
              @click="getListHisTrade(), (showVC = true), (showVGD = false)"
            ></vs-tab>
            <!--交易钱包-->
            <vs-tab
              label="Ví giao dịch"
              @click="getListHisTradeWGD(), (showVGD = true), (showVC = false)"
            ></vs-tab>
          </vs-tabs>
          <div class="showV" :class="{ block: showVC }">
            <div class="box-coin-wrapper">
              <div
                class="flex justify-between flex-col items-baseline lg:flex-row"
              >
                <h4 class="text-2xl color-white font-bold mb-3">
                  Tài khoản chính:
                </h4>
              </div>
              <div class="vx-row">
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletETH"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon ETH"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >ETH</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">ETH</span>
                          <span class="capitalize colorGray">Ethereum</span>
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            isHideMoney ? "******" : formatPrice(balanceETH, 4)
                          }}</span>
                          <span class="colorGray">{{
                            isHideMoney
                              ? "******"
                              : `~$${formatPrice(
                                  balanceETH * getSetSys.quotePriceETH,
                                  2
                                )}`
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien()"
                          >Nạp Tiền</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien()"
                          >Rút Tiền</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletBTC"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon BTC"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >BTC</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">BTC</span>
                          <span class="capitalize colorGray">Bitcoin</span>
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            isHideMoney ? "******" : formatPrice(balanceBTC, 6)
                          }}</span>
                          <span class="colorGray">{{
                            isHideMoney
                              ? "******"
                              : `~$${formatPrice(
                                  balanceBTC * getSetSys.quotePriceBTC,
                                  2
                                )}`
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien()"
                          >Nạp Tiền</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a href="javascript:;" @click.stop="showPopNapRutTien()"
                          >Rút Tiền</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletPaypal"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon PAYPAL"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >Paypal</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">Paypal</span>
                          <!--<span class="capitalize colorGray">Tether</span>-->
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            isHideMoney
                              ? "******"
                              : formatPrice(balancePaypal, 2)
                          }}</span>
                          <span class="colorGray">{{
                            isHideMoney
                              ? "******"
                              : `~$${formatPrice(
                                  balancePaypal * getSetSys.quotePricePAYPAL,
                                  2
                                )}`
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(),
                              (getSetSys.isDepositOpen = true),
                              (getSetSys.isWithdraOpen = false)
                          "
                          >Nạp Tiền</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(),
                              (getSetSys.isDepositOpen = false),
                              (getSetSys.isWithdraOpen = true)
                          "
                          >Rút Tiền</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="vx-col w-full lg:w-1/3 mb-3"
                  v-if="getSetSys.isActiveWalletVND"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="leftBox flex flex-col sm:flex-row">
                        <div class="flex items-center">
                          <span class="currency-icon VND"></span>
                          <span class="uppercase font-bold block sm:hidden"
                            >Ngân hàng VNĐ</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="uppercase font-bold">Ngân hàng VNĐ</span>
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            isHideMoney
                              ? "******"
                              : formatPrice(balancePaypal, 2)
                          }}</span>
                          <span class="colorGray">{{
                            isHideMoney
                              ? "******"
                              : `~$${formatPrice(
                                  balancePaypal * getSetSys.quotePricePAYPAL,
                                  2
                                )}`
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien('VND'),
                              (getSetSys.isDepositOpen = true),
                              (getSetSys.isWithdraOpen = false)
                          "
                          >Nạp Tiền</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien('VND'),
                              (getSetSys.isDepositOpen = false),
                              (getSetSys.isWithdraOpen = true)
                          "
                          >Rút Tiền</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="history lg:mb-4">
                <h4 class="mb-3 history-title">Lịch sử giao dịch</h4>
                <div
                  class="history-body relative"
                  :class="{ 'ld-loading': isLoading }"
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
                  <vs-tabs>
                    <vs-tab
                      label="VND"
                      @click="
                        getListHisTrade(),
                          (showHisUSD = true),
                          (showHisHH = false)
                      "
                    >
                    </vs-tab>
                    <vs-tab
                      label="Hoa Hồng"
                      @click="
                        getListHisTradeHH(),
                          (showHisHH = true),
                          (showHisUSD = false)
                      "
                    >
                    </vs-tab>
                  </vs-tabs>
                  <div class="showHisM" :class="{ block: showHisUSD }">
                    <div class="history-content">
                      <div class="box-result">
                        <ul class="nav nav-tabs">
                          <li class="box-result-header">
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>Thời gian</span>
                              </div>
                              <div class="block-col text-right amount">
                                <span>Giá trị</span>
                              </div>
                              <div class="block-col type">
                                <span>Loại</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <span>Txid/Mô tả</span>
                              </div>
                              <div class="block-col note">
                                <span>Ghi chú</span>
                              </div>
                              <div class="block-col status">
                                <span>Tình trạng</span>
                              </div>
                            </div>
                          </li>
                          <li class="item" v-if="dataHisWallet.length == 0">
                            <div class="w-full text-center">
                              <span>Không có dữ liệu</span>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-else
                            :key="indextr"
                            v-for="(tr, indextr) in dataHisWallet"
                          >
                            <div
                              class="flex"
                              style="padding: 0 1.5rem"
                              @click="popupBill(tr)"
                            >
                              <div class="block-col time">
                                <span>{{
                                  formatDateWallet(tr.created_at)
                                }}</span>
                              </div>
                              <div class="block-col text-right amount">
                                <div
                                  v-if="
                                    blObj.displayName.toUpperCase() ==
                                    tr.from_u?.toUpperCase()
                                  "
                                >
                                  <span
                                    class="red"
                                    v-if="
                                      tr.type_key == 'rt' ||
                                      tr.type_key == 'ct' ||
                                      tr.type_key == 'ctsa' ||
                                      tr.type_key == 'nn' ||
                                      tr.type_key == 'mv'
                                    "
                                    >-{{ formatPrice(tr.amount, 2) }}</span
                                  >
                                  <span class="green" v-else
                                    >+{{ formatPrice(tr.amount, 2) }}</span
                                  >
                                </div>
                                <div
                                  v-else-if="
                                    blObj.displayName.toUpperCase() ==
                                    tr.to_u?.toUpperCase()
                                  "
                                >
                                  <span class="green"
                                    >+{{ formatPrice(tr.amount, 2) }}</span
                                  >
                                </div>
                              </div>
                              <div class="block-col type">
                                <div
                                  v-if="
                                    blObj.displayName.toUpperCase() ==
                                    tr.from_u?.toUpperCase()
                                  "
                                >
                                  <span
                                    class="deitalType transfer_in"
                                    v-if="tr.type_key == 'rt'"
                                    >Rút tiền</span
                                  >
                                  <span
                                    class="deitalType transfer_in"
                                    v-if="tr.type_key == 'nt'"
                                  >
                                    Nạp tiền
                                  </span>
                                </div>
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'staking_rate'"
                                  >Staking Rate</span
                                >
                                <div v-else>
                                  <span
                                    class="deitalType transfer_in"
                                    v-if="tr.type_key == 'rt'"
                                    >Nạp tiền</span
                                  >
                                </div>

                                <span
                                  class="deitalType transfer_in"
                                  v-if="
                                    tr.type_key == 'ct' ||
                                    tr.type_key == 'ctsa' ||
                                    tr.type_key == 'ctas'
                                  "
                                >
                                  Chuyển tiền
                                </span>
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'nn'"
                                >
                                  Nạp nhanh
                                </span>
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'mv'"
                                >
                                  Mua VIP
                                </span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <p class="text-left">
                                  <span
                                    class="item-txid-desc"
                                    v-if="
                                      blObj.displayName.toUpperCase() ==
                                      tr.from_u?.toUpperCase()
                                    "
                                  >
                                    {{
                                      tr.type_key == "ctsa" ||
                                      tr.type_key == "ctas"
                                        ? ""
                                        : tr.from_u + ":"
                                    }}
                                    {{ tr.type }}</span
                                  >
                                  <span
                                    v-else-if="tr.type_key == 'rt'"
                                    class="item-txid-desc"
                                  >
                                    Nạp tiền (Nội bộ) từ: {{ tr.from_u }}
                                  </span>
                                  <span v-else>
                                    {{
                                      tr.type_key == "ctsa" ||
                                      tr.type_key == "ctas"
                                        ? ""
                                        : tr.from_u + ":"
                                    }}
                                    {{ tr.type }}
                                  </span>
                                </p>
                              </div>
                              <div class="block-col note">
                                <span>{{ tr.note ? tr.note : "-" }}</span>
                              </div>
                              <div class="block-col status text-center">
                                <span v-if="tr.status === 1">
                                  <span class="green">
                                    <feather-icon
                                      icon="CheckIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  Hoàn tất
                                </span>
                                <span v-if="tr.status === -1">
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  Hủy
                                </span>
                                <span v-if="tr.status === 0">
                                  <span>
                                    <feather-icon
                                      icon="ClockIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  Chờ admin duyệt
                                </span>
                              </div>
                            </div>
                          </li>
                          <vs-pagination
                            v-if="totalRUSDT > 0"
                            class="mt-4 mb-2"
                            :total="totalRUSDT"
                            v-model="currentxUSDT"
                            @input="clickPageUSDT"
                          ></vs-pagination>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="showHisM" :class="{ block: showHisHH }">
                    <div class="history-content">
                      <div class="box-result">
                        <ul class="nav nav-tabs">
                          <li class="box-result-header">
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>Thời gian</span>
                              </div>
                              <div class="block-col text-right amount">
                                <span>Giá trị</span>
                              </div>
                              <div class="block-col type">
                                <span>Loại</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <span>Txid/Mô tả</span>
                              </div>
                              <div class="block-col note">
                                <span>Ghi chú</span>
                              </div>
                              <div class="block-col status">
                                <span>Tình trạng</span>
                              </div>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-if="dataHisWalletHoaHong.length == 0"
                          >
                            <div class="w-full text-center">
                              <span>Không có dữ liệu</span>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-else
                            :key="indextr"
                            v-for="(tr, indextr) in dataHisWalletHoaHong"
                          >
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>{{
                                  formatDateWallet(tr.created_at)
                                }}</span>
                              </div>
                              <div class="block-col text-right amount">
                                <span class="red" v-if="tr.type_key == 'mv'"
                                  >-{{ formatPrice(tr.amount, 2) }}</span
                                >
                                <span class="green" v-else
                                  >+{{
                                    formatPrice(
                                      Number(tr.vip_commission) ||
                                        Number(tr.pending_commission),
                                      2
                                    )
                                  }}</span
                                >
                              </div>
                              <div class="block-col type">
                                <span class="deitalType trading_commission">{{
                                  tr.vip_commission > 0
                                    ? "Mua VIP"
                                    : "Giao dịch"
                                }}</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <p class="text-left">
                                  <span class="item-txid-desc">{{
                                    tr.vip_commission > 0
                                      ? "Hoa Hồng VIP"
                                      : "Hoa Hồng Giao dịch"
                                  }}</span>
                                </p>
                              </div>
                              <div class="block-col note">
                                <span>{{
                                  tr.vip_commission > 0
                                    ? tr.ref_id + " đã mua VIP"
                                    : "-"
                                }}</span>
                              </div>
                              <div class="block-col status text-center">
                                <span v-if="tr.status == 1">
                                  <span class="green">
                                    <feather-icon
                                      icon="CheckIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  Hoàn tất
                                </span>
                                <span v-else-if="tr.status == 0">
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  Đợi
                                </span>
                                <span v-else>
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  Hủy
                                </span>
                              </div>
                            </div>
                          </li>
                          <vs-pagination
                            v-if="totalRHH > 0"
                            class="mt-4 mb-2"
                            :total="totalRHH"
                            v-model="currentxHH"
                            @input="clickPageHH"
                          ></vs-pagination>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--交易钱包-->
          <div class="showV" :class="{ block: showVGD }">
            <div class="contentBox">
              <div class="vx-row">
                <div
                  class="vx-col w-full lg:w-2/2 mt-4"
                  style="max-width: 500px"
                >
                  <div class="background backgroundImg backgroundLive">
                    <div
                      class="content flex flex-col justify-center items-center"
                    >
                      <!--真实账户-->
                      <span class="text-lg color-gray sm:mb-3 font-bold"
                        >Tài khoản Thực</span
                      >
                      <span class="price flex items-center mb:sm-3 mb-2">
                        <span class="text-3xl font-bold">{{
                          isHideMoney
                            ? "******"
                            : `$${formatPrice(blObj.blLive, 2)}`
                        }}</span>
                      </span>
                      <button
                        @click="popupTransferActive = true"
                        type="button"
                        class="btn button wbtn btn-large btn-radius w-9/12 cursor-pointer"
                      >
                        <span class="iconSubmit iconSubmitLive"></span>
                        <!--划款-->
                        <span>Chuyển Tiền</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!--                <div class="vx-col w-full lg:w-1/2 mt-4">
                  <div class="background backgroundImg backgroundDemo">
                    <div
                      class="content flex flex-col justify-center items-center"
                    >
                      <span class="text-lg color-gray sm:mb-3 font-bold"
                        >Tài khoản Demo</span
                      >
                      <span class="price flex items-center mb:sm-3 mb-2">
                        <span class="text-3xl font-bold">{{
                          isHideMoney
                            ? "******"
                            : `$${formatPrice(blObj.blDemo, 2)}`
                        }}</span>
                      </span>
                      <button
                        @click="clickReloadMoneyDemo"
                        type="button"
                        class="
                          btn
                          button
                          wbtn
                          btn-large btn-radius
                          w-9/12
                          cursor-pointer
                        "
                      >
                        <span class="iconSubmit iconSubmitDemo"></span>
                        <span>Nạp lại</span>
                      </button>
                    </div>
                  </div>
                </div>-->
              </div>
              <div class="sectionTable lg:pb-4">
                <div class="balance">
                  <div class="wrapBalance">
                    <div class="boxBalance">
                      <div class="history">
                        <!--交易记录-->
                        <h4 class="history-title mb-3">Lịch sử giao dịch</h4>
                        <div class="history-body">
                          <div class="history-content">
                            <div class="box-result">
                              <ul class="nav nav-tabs">
                                <li class="box-result-header">
                                  <div class="flex" style="padding: 0 1.5rem">
                                    <div class="block-col time">
                                      <span>Thời gian</span>
                                    </div>
                                    <div class="block-col text-right amount">
                                      <span>Giá trị</span>
                                    </div>
                                    <div class="block-col type">
                                      <span>Loại</span>
                                    </div>
                                    <div class="block-col" style="flex: 2 1 0%">
                                      <span>Txid/Mô tả</span>
                                    </div>
                                    <!-- <div class="block-col note">
                                                                        <span>Ghi chú</span>
                                                                    </div> -->
                                    <div class="block-col status">
                                      <span>Tình trạng</span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  class="item"
                                  v-if="dataHisWalletWGD.length == 0"
                                >
                                  <div class="w-full text-center">
                                    <span>Không có dữ liệu</span>
                                  </div>
                                </li>
                                <li
                                  class="item"
                                  v-else
                                  :key="indextr"
                                  v-for="(tr, indextr) in dataHisWalletWGD"
                                >
                                  <div class="flex" style="padding: 0 1.5rem">
                                    <div class="block-col time">
                                      <span>{{
                                        formatDateWallet(tr.created_at)
                                      }}</span>
                                    </div>
                                    <div class="block-col text-right amount">
                                      <span
                                        class="red"
                                        v-if="tr.type_key == 'ctas'"
                                        >-{{ formatPrice(tr.amount, 2) }}</span
                                      >
                                      <span class="green" v-else
                                        >+{{ formatPrice(tr.amount, 2) }}</span
                                      >
                                    </div>
                                    <div class="block-col type">
                                      <span
                                        class="deitalType transfer_in"
                                        v-if="tr.type_key == 'ctas'"
                                        >Chuyển ra</span
                                      >
                                      <span
                                        class="deitalType transfer_in"
                                        v-else
                                        >Chuyển vào</span
                                      >
                                    </div>
                                    <div class="block-col" style="flex: 2 1 0%">
                                      <p class="text-left">
                                        <span
                                          class="item-txid-desc"
                                          v-if="tr.type_key == 'ctas'"
                                          >Ra: {{ tr.to_u }}</span
                                        >
                                        <span class="item-txid-desc" v-else
                                          >Vào: {{ tr.to_u }}</span
                                        >
                                      </p>
                                    </div>
                                    <div class="block-col status text-center">
                                      <span v-if="tr.status == 1">
                                        <span class="green">
                                          <feather-icon
                                            icon="CheckIcon"
                                            svgClasses="w-4 h-4"
                                          />
                                        </span>
                                        Hoàn tất
                                      </span>
                                      <span v-else-if="tr.status == 0">
                                        <span class="red">
                                          <feather-icon
                                            icon="AlertCircleIcon"
                                            svgClasses="w-4 h-4"
                                          />
                                        </span>
                                        Đợi
                                      </span>
                                      <span v-else>
                                        <span class="red">
                                          <feather-icon
                                            icon="AlertCircleIcon"
                                            svgClasses="w-4 h-4"
                                          />
                                        </span>
                                        Hủy
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <vs-pagination
                                  v-if="totalRWGD > 0"
                                  class="mt-4 mb-2"
                                  :total="totalRWGD"
                                  v-model="currentxWGD"
                                  @input="clickPageWGD"
                                ></vs-pagination>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-popup
      class="text-center"
      title="Chuyển tiền"
      :active.sync="popupTransferActive"
    >
      <div class="header flex">
        <div class="leftHeader flex flex-col items-center">
          <span
            class="text-sm mb-2 font-bold white"
            v-html="textWalletHtml"
          ></span>
          <span class="text-3xl font-bold">{{
            formatPrice(amountAcc, 2)
          }}</span>
        </div>
        <div class="rightHeader flex flex-col items-center">
          <span
            class="text-sm mb-2 font-bold white"
            v-html="textAccLive"
          ></span>
          <span class="text-3xl font-bold">{{
            formatPrice(amountAccLive, 2)
          }}</span>
        </div>
        <div @click="changeTransMoney" class="changeAmount cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            class="iconTransfer"
          >
            <g
              id="Group_10897"
              data-name="Group 10897"
              transform="translate(-559.431 -202.553)"
            >
              <g
                id="Group_4613"
                data-name="Group 4613"
                transform="translate(559.431 202.553)"
              >
                <g
                  id="Rectangle_2919"
                  data-name="Rectangle 2919"
                  transform="translate(0)"
                  fill="#e9f0fa"
                  stroke="#e5e5e5"
                  stroke-width="1"
                >
                  <rect width="30" height="30" rx="15" stroke="none"></rect>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="14.5"
                    fill="none"
                  ></rect>
                </g>
              </g>
              <g id="conversion" transform="translate(567.976 210.905)">
                <path
                  id="Path_13963"
                  data-name="Path 13963"
                  d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z"
                  transform="translate(-1 -1.172)"
                  fill="#031219"
                ></path>
                <path
                  id="Path_13964"
                  data-name="Path 13964"
                  d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z"
                  transform="translate(-1 -20.395)"
                  fill="#031219"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="content flex flex-col items-center">
        <div class="inputGroup mb-3 w-3/4 relative">
          <vs-input
            class="inputx text-left w-full"
            placeholder="Nhập số tiền"
            v-model="enterAmount"
          />
          <div class="input-append">
            <button
              type="button"
              class="btn cursor-pointer"
              @click="enterAllMoney"
            >
              Tất cả
            </button>
          </div>
        </div>
        <vs-button
          class="xl:w-3/4"
          @click="clickTransMoney"
          color="#E46D02"
          type="filled"
          >Chuyển Tiền</vs-button
        >
      </div>
    </vs-popup>

    <vs-popup
      class="text-center"
      title="Thông tin"
      :active.sync="popupBillActive"
    >
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>Thời gian:</span>
        <span>{{ timeShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>Giá trị:</span>
        <span>{{ valueShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>Loại:</span>
        <span>{{ typeShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>Mô tả:</span>
        <span>{{ descriptShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>Ghi chú:</span>
        <span>{{ noteShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>Trạng thái:</span>
        <span>{{ statusShow }}</span>
      </div>
    </vs-popup>

    <!--<nap-tien :isSidebarActive="addSidebarNapTien" @closeSidebar="toggleDataSidebarNapTien"/>
    <rut-tien :isSidebarActive="addSidebarRutTien" @closeSidebar="toggleDataSidebarRutTien"/> -->

    <vs-prompt title="" :active.sync="popupActiveNRTien" :buttons-hidden="true">
      <nap-rut-tien :active.sync="popupActiveNRTien" :money-type="moneyType" />
    </vs-prompt>
  </div>
</template>

<script>
var connectionNAP = false;
//import NapTien from '@/pages/trade/slidebar/NapTien.vue'
//import RutTien from '@/pages/trade/slidebar/RutTienS.vue'
import NapRutTien from "@/pages/trade/slidebar/NapRutTien.vue";
import getData from "@/pages/trade/navbar/components/data.json";
import AuthenticationService from "@/services/AuthenticationService";
import getSetSys from "@/services/settingSys.json";
import moment from "moment";
import config from "@/config";

export default {
  components: {
    //NapTien,
    //RutTien,
    NapRutTien,
  },
  data() {
    return {
      typeShow: "",
      timeShow: "",
      valueShow: "",
      descriptShow: "",
      noteShow: "",
      statusShow: "",
      moneyType: "USDT",
      isHideMoney: false,

      getSetSys: getSetSys,

      popupActiveNRTien: false,
      popupBillActive: false,

      showVC: true,
      showVGD: false,
      showHisUSD: true,
      showHisHH: false,

      blObj: getData,
      textWalletHtml:
        '<span class="mr-1 color-blue uppercase green"></span> <span>Ví điện tử</span>',
      textAccLive: "Tài khoản Thực",
      amountAcc: 0,
      amountAccLive: 0,
      typeChange: false, // false: Wall to Live, true: Live to Wallet
      enterAmount: "",
      popupTransferActive: false,
      currentxUSDT: 1,
      currentxHH: 1,
      currentxWGD: 1,
      email: "",
      password: "",
      error: null,
      addSidebarNapTien: false,
      addSidebarRutTien: false,
      balanceUser: 0,

      balanceUSDT: 0,
      balanceETH: 0,
      balanceBTC: 0,
      balancePaypal: 0,

      isLoading: false,
      dataHisWallet: [],
      totalRUSDT: 0,
      dataHisWalletHoaHong: [],
      totalRHH: 0,
      dataHisWalletWGD: [],
      totalRWGD: 0,
    };
  },
  computed: {
    //   giaTriUocTinh(){
    //       return this.formatPrice(getSetSys.quotePriceUSDT + getSetSys.quotePriceETH + getSetSys.quotePriceBTC + getSetSys.quotePricePAYPAL, 2)
    //   },
    balanceForUser() {
      return getData.balance || 0;
    },
    price() {
      if (this.isHideMoney) {
        return "******";
      }
      let num = this.getSetSys.quotePriceUSDT;
      switch (this.getSetSys.typeCurrUseSys) {
        case "btc":
          num = this.getSetSys.quotePriceBTC;
          break;
        case "eth":
          num = this.getSetSys.quotePriceETH;
          break;
      }
      return this.formatPrice(this.balanceForUser * num, 0);
    },
  },
  methods: {
    toggleHideMoney() {
      this.isHideMoney = !this.isHideMoney;
    },
    getBankContent(type, currency, bank) {
      if (currency === "vnd") {
        if (type === "nt") {
          // Nạp tiền
          return `Ref: ${bank}`;
        }

        if (type === "rt") {
          const bankArr = bank.split("|");
          const tenNganHang = bankArr[0];
          const chiNhanhNganHang = bankArr[1];
          const soTaiKhoan = bankArr[2];
          const chuTaiKhoan = bankArr[3];
          return `<div>Tên ngân hàng: ${tenNganHang}</div>
<div>Chi nhánh: ${chiNhanhNganHang}</div>
<div>Số tài khoản: ${soTaiKhoan}</div>
<div>Chủ tài khoản: ${chuTaiKhoan}</div>`;
        }
      }

      return "";
    },
    async getUserInfo() {
      const res = await AuthenticationService.getInfoUser();
      if (res.data.code == 10000) {
        let gData = res.data.data;
        (getData.uid = gData.id),
          (getData.email = gData.email),
          (getData.profile_image = gData.profile_image),
          (getData.displayName = gData.nick_name),
          (getData.vip = gData.vip),
          (getData.vip_lv = gData.level_vip),
          (getData.pen_commiss = gData.pending_commission),
          (getData.ref = gData.ref),
          (getData.c2fa = gData.fa2),
          (getData.id_front = gData.id_front),
          (getData.id_back = gData.id_back),
          (getData.first_name = gData.first_name),
          (getData.last_name = gData.last_name),
          (getData.verify = gData.verify),
          (getData.num_secu = gData.num_secury),
          (getData.country = gData.c),
          (getData.balance = gData.balance || 0),
          (getData.mkt = gData.mkt);
        if (gData.order && gData.order.length) {
          (getData.uidLive = gData.order[1]?.u_id)(
            (getData.uidDemo = gData.order[0]?.u_id)
          );
          getData.blLive = gData.order[1]?.balance || 0;
          getData.blDemo = gData.order[0]?.balance;
        }

        localStorage.setItem("INFO", JSON.stringify(gData));
      }
    },

    popupBill(tr) {
      this.popupBillActive = true;

      this.timeShow = this.formatDateWallet(tr.created_at);

      if (getData.displayName.toUpperCase() == tr.from_u?.toUpperCase()) {
        this.valueShow =
          tr.type_key == "rt" ||
          tr.type_key == "ct" ||
          tr.type_key == "ctsa" ||
          tr.type_key == "nn" ||
          tr.type_key == "mv"
            ? "-" + this.formatPrice(tr.amount, 2)
            : "+" + this.formatPrice(tr.amount, 2);
      } else if (getData.displayName.toUpperCase() == tr.to_u?.toUpperCase()) {
        this.valueShow = "+" + this.formatPrice(tr.amount, 2);
      }

      switch (tr.type_key) {
        case "rt":
          if (getData.displayName.toUpperCase() == tr.from_u?.toUpperCase()) {
            this.typeShow = "Rút tiền";
          } else {
            this.typeShow = "Nạp tiền";
          }
          break;
        case "nt":
          this.typeShow = `Nạp tiền ${
            tr.paypal_order_id ? "Paypal" : tr.currency?.toUpperCase()
          }`;
          break;
        case "nn":
          this.typeShow = "Nạp nhanh";
          break;
        case "mv":
          this.typeShow = "Mua VIP";
          break;
        default:
      }

      if (
        tr.type_key == "ct" ||
        tr.type_key == "ctsa" ||
        tr.type_key == "ctas"
      ) {
        this.typeShow = "Chuyển tiền";
      }

      this.descriptShow =
        tr.type_key == "ctsa" || tr.type_key == "ctas"
          ? ""
          : tr.from_u + ": " + tr.type;
      if (
        getData.displayName.toUpperCase() != tr.from_u?.toUpperCase() &&
        tr.type_key == "rt"
      ) {
        this.descriptShow = "Nạp tiền (Nội bộ) từ: " + tr.from_u;
      }
      this.noteShow = tr.note ? tr.note : "-";
      if (tr.status == 1) {
        this.statusShow = "Hoàn tất";
      } else if (tr.status == 0) {
        this.statusShow = "Đợi";
      } else if (tr.status == 0) {
        this.statusShow = "Hủy";
      }
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });
      return formatter.format(value);
    },

    showPopNapRutTien(currency) {
      this.moneyType = currency;
      this.popupActiveNRTien = true;
    },

    // viewNapTien(){
    //   this.toggleDataSidebarNapTien(true)
    // },

    // viewRutTien(){
    //   this.toggleDataSidebarRutTien(true)
    // },

    toggleDataSidebarNapTien(val = false) {
      this.addSidebarNapTien = val;
    },

    toggleDataSidebarRutTien(val = false) {
      this.addSidebarRutTien = val;
    },

    changeTransMoney() {
      if (this.typeChange) {
        // Live to Wallet
        this.typeChange = false;

        let b = this.textWalletHtml;
        let a = this.textAccLive;
        let d = getData.balance;
        let c = getData.blLive;

        this.textAccLive = b;
        this.textWalletHtml = a;
        this.amountAcc = d;
        this.amountAccLive = c;
      } else {
        // Live to Wallet
        this.typeChange = true;

        let a = this.textWalletHtml;
        let b = this.textAccLive;
        let c = getData.balance;
        let d = getData.blLive;

        this.textAccLive = a;
        this.textWalletHtml = b;
        this.amountAcc = d;
        this.amountAccLive = c;
      }
    },

    clickReloadMoneyDemo() {
      AuthenticationService.reloadMoneyDemo().then((res) => {
        if (res.data.code === 10000) {
          this.blObj.blDemo = 1000;

          return this.$vs.notify({
            text: "Tài khoản Demo đã nạp.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
            position: "top-right",
          });
        }
      });
    },

    enterAllMoney() {
      if (this.typeChange) {
        // nếu true thì live to wallet

        this.enterAmount = getData.blLive;
      } else {
        // wallet to live

        this.enterAmount = getData.balance;
      }
    },

    clickTransMoney() {
      let amount = this.enterAmount.toString();
      amount = this.replaceAll(amount, ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");
      console.log("before axion", JSON.parse(JSON.stringify(getData)));
      if (!this.isNumber(amount) || amount <= 0) {
        return this.$vs.notify({
          text: "Giá trị không hợp lệ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (this.typeChange) {
        // nếu true thì live to wallet

        // gửi tiền từ live tới tài khoản chính
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyLiveToUsdt(obj).then((res) => {
          if (res.data.code === 10000) {
            getData.blLive = Number(getData.blLive) - Number(amount);
            getData.balance = Number(getData.balance) + Number(amount);

            this.amountAcc = getData.blLive;
            this.amountAccLive = getData.balance;

            // reload lại lịch sử
            this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Chuyển tiền thành công",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Số dư của bạn không đủ",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      } else {
        // wallet to live

        // gửi tiền từ tài khoản chính tới live
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyUsdtToLive(obj).then((res) => {
          if (res.data.code === 10000) {
            getData.blLive = Number(getData.blLive) + Number(amount);
            getData.balance = Number(getData.balance) - Number(amount);
            console.log(getData);
            this.amountAcc = getData.balance;
            this.amountAccLive = getData.blLive;

            // reload lại lịch sử
            this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Chuyển tiền thành công",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Số dư của bạn không đủ",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      }
    },

    getListHisTrade() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWallet().then((res) => {
        if (res.data.code === 10000) {
          this.isLoading = false;
          this.dataHisWallet = res.data.data?.list || [];
          let c = (res.data.count / 10).toString();
          //this.totalRUSDT = Number(c.split(".")[0])
          this.totalRUSDT = Math.ceil(c);
        }
      });
    },

    clickPageUSDT(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletNumber(page).then((res) => {
        if (res.data.code === 10000) {
          this.isLoading = false;
          this.dataHisWallet = res.data.data;
        }
      });
    },

    getListHisTradeHH() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletHH().then((res) => {
        if (res.data.code === 10000) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data?.list || [];
          let c = (res.data.count / 10).toString();
          //this.totalRHH = Number(c.split(".")[0])
          this.totalRHH = Math.ceil(c);
        }
      });
    },

    clickPageHH(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletHHNumber(page).then((res) => {
        if (res.data.code === 10000) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data;
        }
      });
    },

    getListHisTradeWGD() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGD().then((res) => {
        if (res.data.code === 10000) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data?.list || [];
          let c = (res.data.count / 10).toString();
          this.totalRWGD = Number(c.split(".")[0]);
        }
      });
    },

    clickPageWGD(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGDNumber(page).then((res) => {
        if (res.data.code === 10000) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data;
        }
      });
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    formatDateWallet(value) {
      if (value) {
        return moment(value * 1000).format("MM/DD/YYYY HH:mm:ss");
      }
    },

    getBalanceWallet() {
      AuthenticationService.getBalanceWallet().then((res) => {
        let d = res.data;
        if (d.code === 10000) {
          let mU = d.data.usdt;
          let mE = d.data.eth;
          let mB = d.data.btc;
          let mP = d.data.paypal;

          this.balanceUSDT = mU;
          this.balanceETH = mE;
          this.balanceBTC = mB;
          this.balancePaypal = mP;

          // mặc định hiển thị tiền đầu vào
          this.getAmount = this.balancePaypal;
        }
      });
    },

    getSysWallet() {
      AuthenticationService.getSetupWallet().then((res) => {
        let g = res.data.data;
        getSetSys.quotePriceUSDT = this.replaceAll(
          this.formatPrice(g.qUSDT, 2),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceETH = this.replaceAll(
          this.formatPrice(g.qETH, 4),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceBTC = this.replaceAll(
          this.formatPrice(g.qBTC, 6),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePricePAYPAL = this.replaceAll(
          this.formatPrice(g.qPaypal, 2),
          ",",
          ""
        ); //  giá sấp sĩ USD
        getSetSys.quotePriceVND = this.replaceAll(
          this.formatPrice(g.qVND, 2),
          ",",
          ""
        ); //  giá sấp sĩ USD

        getSetSys.typeCurrUseSys = g.tCUseSys; // đồng tiền tệ sử dụng trong hệ thống

        getSetSys.minDepositBTC = g.mDBTC; // nạp tiền tối thiểu
        getSetSys.minDepositETH = g.mDETH; // nạp tiền tối thiểu
        // 写死
        // getSetSys.minDepositUSDT = g.mDUSDT; // nạp tiền tối thiểu
        getSetSys.minDepositPaypal = g.mDPaypal; // nạp tiền tối thiểu

        getSetSys.minWithdrawalBTC = g.mWBTC; // rút tiền tối thiểu
        getSetSys.minWithdrawalETH = g.mWETH; // rút tiền tối thiểu
        // getSetSys.minWithdrawalUSDT = g.mWUSDT; // rút tiền tối thiểu
        getSetSys.minWithdrawalPaypal = g.mWPaypal; // rút tiền tối thiểu
        // 去掉PAYPAL
        // getSetSys.isActiveWalletPaypal = g.iAWPaypal; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletETH = g.iAWETH; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletUSDT = g.iAWUSDT; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletBTC = g.iAWBTC; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletVND = g.iAWVND; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống

        getSetSys.feeRutPaypalNoiBo = g.fDPaypalNB;
        getSetSys.feeRutPaypalAcc = g.fDPaypalAcc;
        getSetSys.feeRutBTCNoiBo = g.fDBTCNB;
        getSetSys.feeRutBTCAcc = g.fDBTCAcc;
        getSetSys.feeRutETHNoiBo = g.fDETHNB;
        getSetSys.feeRutETHERC20 = g.fDETHERC20;
        getSetSys.feeRutUSDTNoiBo = g.fDUSDTNB;
        getSetSys.feeRutUSDTBEP20 = g.fDUSDTBEP20;
        getSetSys.feeRutUSDTERC20 = g.fDUSDTERC20;
      });
    },

    sendMessage(message) {
      this.connectionNAP.send(JSON.stringify(message));
    },

    getInfoUser() {
      this.sendMessage({
        type: "accountDetail",
        data: { email: getData.email },
      });
    },
    onWindowLoad() {
      this.getInfoUser();
    },
  },
  mounted() {
    this.getSysWallet();

    this.getListHisTrade();
    setTimeout(() => {
      this.getListHisTrade();
    }, 1000);
    this.getListHisTradeWGD();
    this.getBalanceWallet();
  },

  async created() {
    await this.getUserInfo();
    this.amountAcc = getData.balance;
    this.amountAccLive = getData.blLive;

    if (!connectionNAP) {
      connectionNAP = true;
      this.connectionNAP = new WebSocket(config.BASE_URL_SOCKET_NAP);

      this.connectionNAP.onopen = function () {
        this.onWindowLoad();
      }.bind(this);

      this.connectionNAP.onmessage = function (event) {
        let data = JSON.parse(event.data);

        if (data.type === "mess") {
          let dl = data.data;

          this.amountAcc += dl.usd * 1;
          getData.balance += dl.usd * 1;
          this.balanceUSDT += dl.usd * 1;

          return this.$vs.notify({
            text: dl.mess,
            color: dl.style,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      }.bind(this);
    }
  },
};
</script>

<style scoped lang="scss">
@use "./Wallet.scss";
</style>

<style>
.content .inputGroup input {
  background: #fff;
  color: #545454;
}
</style>
