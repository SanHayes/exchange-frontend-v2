import Api from '@/services/Api';
import ApiAdmin, { ApiAdminNew } from '@/services/ApiAdmin';
import ApiAgency from '@/services/ApiAgency';

export default {
  //2fa admin
  active2fa(obj) {
    return ApiAdmin().post('/users/active-2fa', obj);
  },

  disable2fa(obj) {
    return ApiAdmin().post('/users/disable-2fa', obj);
  },

  check2fa(obj) {
    return ApiAdmin().post('/users/check-2fa', obj);
  },

  checkOn2fa() {
    return ApiAdmin().get('/users/check-on-2fa');
  },

  //
  //=========== USER
  loginUser(obj) {
    return Api().post('api/login', obj);
  },

  getTokenActive(obj) {
    return Api().post('/users/activeUser', obj);
  },

  registerUser(obj) {
    return Api().post('api/createAccount', obj);
  },

  forgotPassUser(obj) {
    return Api().post('api/forgot_password', obj);
  },

  resendConfirUser(obj) {
    return Api().post('/api/resend_confirmation_email', obj);
  },

  changePassword(obj) {
    return Api().patch('/users/change-password', obj);
  },

  changePassword2(obj) {
    return Api().patch('/users/change-password-is', obj);
  },

  getInfoUser() {
    return Api().get('user/info');
  },

  updateXacMinhTK(obj) {
    return Api().post('/users/update-info', obj);
  },

  activeGG2FA(obj) {
    return Api().post('/users/update-gg2fa', obj);
  },

  unActiveGG2FA(obj) {
    return Api().post('/users/disable-gg2fa', obj);
  },

  sendGG2FA() {
    return Api().get('/users/code-2fa');
  },

  createGG2FA(role) {
    if (void 0 !== role) {
      return ApiAdmin().get('/users/create-gg2fa');
    }
    return Api().get('/users/create-gg2fa');
  },

  loginGG2FA(obj) {
    return Api().post('/users/login-2fa', obj);
  },

  reloadMoneyDemo() {
    return Api().put('/users/demo');
  },

  getListHitoryOrder() {
    return Api().get('/user/listbo');
  },

  sendMoneyLiveToUsdt(obj) {
    return Api().post('/user/live_to_usdt', obj);
  },

  sendMoneyUsdtToLive(obj) {
    return Api().post('/user/usdt_to_live', obj);
  },

  withdrawalUserNoiBo(obj) {
    return Api().post('/users/withdrawal', obj);
  },

  withdrawalUsdtERC(obj) {
    return Api().post('/users/withdrawal-erc', obj);
  },

  withdrawalUsdtBSC(obj) {
    return Api().post('/users/withdrawal-bsc', obj);
  },

  withdrawalUsdtVND(obj) {
    return Api().post('/user/withdrawal_vnd', obj);
  },

  withdrawalPaypalNoiBo(obj) {
    return Api().post('/users/paypal/withdrawal', obj);
  },

  withdrawalPaypalAccount(obj) {
    return Api().post('/users/paypal/withdrawal-acc', obj);
  },

  getBalanceWallet() {
    return Api().get('user/balance_wallet');
  },

  scanWallet(email) {
    return Api().get(`/users/scan-wallet?e=${email}`);
  },

  getBankInfo() {
    return Api().get('/user/bank_info');
  },

  depositWallet(obj) {
    return Api().post('/users/usdt-wallet', obj);
  },

  UserBuyVip() {
    return Api().post('/users/buy-vip');
  },

  getNguoiGioiThieu() {
    return Api().get('/users/presenter');
  },

  getThongTinLoiNhuan() {
    return Api().get('user/bo_statistics');
  },

  getListHisOrder() {
    return Api().get('user/history_order');
  },

  getSeachListOrder(obj) {
    return Api().get('/user/history_order_date', {params:obj});
  },

  getListHisTradeWallet() {
    return Api().get('user/history_wallet');
  },

  getListHisTradeWalletNumber(num) {
    return Api().get('/users/history-wallet/' + num);
  },

  getListHisTradeWalletHH() {
    return Api().get('/user/history_wallet_co');
  },

  getListHisTradeWalletHHNumber(num) {
    return Api().get('/user/history-wallet-co/' + num);
  },

  getListHisTradeWalletWGD() {
    return Api().get('user/history_wallet_trade');
  },

  getListHisTradeWalletWGDNumber(num) {
    return Api().get('/users/history-wallet-trade/' + num);
  },

  chiTietLoiNhuanHoaHong() {
    return Api().get('/users/commission-details');
  },

  chiTietLoiNhuanHoaHongPage(num) {
    return Api().get('/users/commission-details/' + num);
  },

  getSeachListChiTietHH(obj) {
    return Api().post('/users/commission-details-date', obj);
  },

  getSeachListLvAgency(obj) {
    return Api().post('/users/agency-search-lv', obj);
  },

  getSeachListNameAgency(obj) {
    return Api().post('/users/agency-search-name', obj);
  },

  depositPaypal(obj) {
    return Api().get('/paypal/pay?a=' + obj.a + '&n=' + obj.n);
  },

  depositVND(obj) {
    return Api().post('/user/pay_vnd',obj);
  },

  getAddressCoin(coin) {
    return Api().get('/wallet/' + coin + '/address');
  },

  transWallet(obj) {
    return Api().post('/exs/trans', obj);
  },

  getSetupWallet() {
    return Api().get('api/setup_wallet');
  },

  getSupport() {
    return Api().get('api/setup_supports');
  },

  getExChangeUser() {
    return Api().get('/exs/hisUser');
  },

  getStatusServer() {
    return Api().get('api/status');
  },

  checkGiaoDich(obj) {
    return Api().post('/user/balance/trans/check', obj);
  },

  getListNotifi(obj) {
    return Api().post('user/getListNotifi', obj);
  },

  updateListNotifi(obj) {
    return Api().post('/users/updateListNotifi', obj);
  },

  //=========== END USER

  //========== MEMBER

  activeUser(id, obj) {
    return ApiAdminNew().put(`users/${id}`, obj);
  },

  getRevenueNap() {
    return ApiAdminNew().get('history/trade_count?type=rn');
  },

  getRevenueRut() {
    return ApiAdminNew().get('history/trade_count?type=rt');
  },

  getRevenueTrans() {
    return ApiAdmin().get('/trades/getRevenueTrans');
  },

  getShowDT(obj) {
    return ApiAdminNew().get(`history/trade_showDT?from=${obj.from}&to=${obj.to}`);
  },

  changePassAdmin(obj) {
    return ApiAdmin().post('/users/changPassAd', obj);
  },

  createUser(obj) {
    return ApiAdminNew().post('users', obj);
  },

  register(obj) {
    return ApiAdmin().post('/users/register', obj);
  },

  loginAdmin(obj) {
    return ApiAdminNew().post('api/login', obj);
  },

  checkEmail(email) {
    return ApiAdminNew().get('users?email=' + email);
  },

  getAllMember() {
    return ApiAdminNew().get('users?limit=1000');
  },

  updateMember(obj) {
    return ApiAdminNew().put('users/' + obj.id, obj);
  },

  updatePriceMember(obj) {
    return ApiAdmin().post('/users/updateMoney', obj);
  },

  handleMoney(obj) {
    return ApiAdmin().post('/pay/approval', obj);
  },

  handleMoneyRut(obj) {
    return ApiAdmin().post('/pay/approval-rut', obj);
  },

  deleteMember(id) {
    return ApiAdminNew().delete('users/' + id);
  },

  verifiedUser(obj) {
    return ApiAdmin().post('/users/verifiedUser', obj);
  },

  getListAgency() {
    return ApiAdminNew().get('users?vip_user=1');
  },

  viewMemberAgency(id) {
    return ApiAdmin().get('/users/viewTotalMAgency/' + id);
  },

  addMoneyMember(obj) {
    return ApiAdmin().post('/users/addMoneyMember', obj);
  },

  getRateCommission() {
    return ApiAdmin().get('/setup/getRateCommission');
  },

  saveRateCommission(obj) {
    return ApiAdmin().post('/setup/saveRateCommission', obj);
  },

  getStakingRate() {
    return ApiAdmin().get('/staking/set-rate');
  },

  setStakingRate(data) {
    return ApiAdmin().post('/staking/set-rate', data);
  },

  //==========

  //================
  //================
  //================
  //========== TRADE
  //================
  //================
  //================

  getAddMoneyListHistory() {
    return ApiAdminNew().get('history/add_money');
  },

  getTotalAddMoney() {
    return ApiAdmin().get('/trades/totalAddMoney');
  },

  getTradeListHistory() {
    return ApiAdminNew().get('history/trade?type=Trade&limit=500');
  },

  gethistoryAllTrash() {
    return ApiAdmin().get('/trades/historyAllTrash');
  },

  deleteTrashByID(id) {
    return ApiAdminNew().delete(`history/trade/${id}`);
  },

  getDepositListHistory() {
    return ApiAdminNew().get('history/trade?type=Deposit&limit=10');
  },

  // Đại lý
  getDepositListHistoryAgency(email, f) {
    return Api().get(`/trades/hisDepositAll?email=${email}&${f}`);
  },
  //

  getDepositAllTrash() {
    return ApiAdmin().get('/trades/hisDepositAllTrash');
  },

  getWithdrawalListHistory() {
    return ApiAdminNew().get('history/trade?type=WithDrawal&limit=500');
  },

  // Dai ly
  getWithdrawalListHistoryAgency(email, f) {
    return Api().get(`/trades/hisWithDrawalAll?email=${email}${f}`);
  },
  //

  doneWithDrawalByID(obj) {
    return ApiAdmin().post('/trades/doneWithdrawal', obj);
  },

  doneRefuseWithDrawalByID(obj) {
    return ApiAdmin().post('/trades/doneRefuseWithdrawal', obj);
  },

  getListF1F7(obj) {
    return ApiAdmin().post('/users/getListF1F7', obj);
  },
  //Dai lý

  getStatisticsListF1F7(email, f) {
    return ApiAgency().get(`/users/thong-ke-getListF1F7?email=${email}${f}`);
  },
  //
  getMemberInfo(id) {
    return ApiAdminNew().get(`users/${id}`);
  },

  getLiveAccount(ref) {
    return ApiAdmin().get(`/users/get-live-account/${ref}`);
  },

  getLisCommissionSearch(obj) {
    return ApiAdmin().post('/users/getListCmsHis', obj);
  },

  //================
  //================
  //================
  //================
  //================

  //================
  //================
  //================
  //========== Analytics
  //================
  //================
  //================

  getAnalytics() {
    return ApiAdminNew().get('admin/users_analytics');
  },

  //================
  //================
  //================
  //========== Analytics
  //================
  //================
  //================

  //================
  //================
  //================
  //========== BET
  //================
  //================
  //================

  getBetsListHistory() {
    return ApiAdminNew().get('history/bet');
  },

  //Đại lý
  getBetsListHistoryAgency(email, f) {
    return Api().get(`/bets/historyBet?email=${email}&${f}`);
  },
  //

  getBetsListHisTrash() {
    return ApiAdmin().get('/bets/hisBetTrash');
  },

  deleteBetsTrash(obj) {
    console.log(obj);
    return ApiAdminNew().delete('history/bet/' + obj.id);
  },

  //================
  //================
  //================
  //================
  //================

  //================
  //================
  //================
  //========== EXCHANGE
  //================
  //================
  //================

  getExListHistory() {
    return ApiAdminNew().get('history/exchange');
  },

  getExListHisTrash() {
    return ApiAdminNew().get('/exs/historyExTrash');
  },

  deleteExTrash(obj) {
    return ApiAdmin().patch('/exs/deleteEx', obj);
  },

  //================
  //================
  //================
  //================
  //================

  uploadAvatar(obj) {
    return Api().post('/auth/avatar', obj);
  },

  uploadPassportFront(obj) {
    return Api().post('/auth/passport/front', obj);
  },

  uploadPassportBack(obj) {
    return Api().post('/auth/passport/back', obj);
  },

  //================
  //================
  //================
  //========== GAME
  //================
  //================
  //================
  // Giải đấu
  createChampion(obj) {
    return ApiAdmin().post('/game/champion', obj);
  },
  getChampions() {
    return ApiAdmin().get('/game/champions');
  },
  getChampionsClient() {
    return Api().get('/game/champions');
  },
  deleteChampion(id) {
    return ApiAdmin().delete(`/game/champion/${id}`);
  },
  updateChampion(id, obj) {
    return ApiAdmin().put(`/game/champion/${id}`, obj);
  },
  uploadBackgroundImage(obj) {
    return Api().post('/auth/champion', obj);
  },

  getActiveGames() {
    return Api().get('api/active_games');
  },

  // Rút thăm may mắn
  createLuckyDrawAdmin(obj, type) {
    return ApiAdmin().put(`/game1/lucky-draws/${type}`, obj);
  },
  getLuckyDrawAdmin() {
    return ApiAdmin().get('/game1/lucky-draws-admin');
  },
  getLuckyDraw() {
    return Api().get('/game1/lucky-draws');
  },
  getThongTinLoiNhuanHangNgay() {
    return Api().get('/users/bo-statistics-current-day');
  },

  createStreakChallenge(config) {
    return ApiAdmin().post('//game2/streak-challenge', config);
  },

  getStreakChallenge() {
    return ApiAdmin().get('//game2/streak-challenge');
  },

  getStreakClientChallenge() {
    return Api().get('//game2/streak-challenge');
  },

  getUserStreakChallenge() {
    return ApiAdmin().get('//game2/streak-challenge-user');
  },

  getUserClientStreakChallenge() {
    return Api().get('//game2/streak-challenge-user');
  },

  addUserStreakChallenge(dataAddUser) {
    return ApiAdmin().post('//game2/streak-challenge-user', dataAddUser);
  },

  getPrizeUser() {
    return Api().get('/api/game2_prize');
  },

  //Agency
  getInfoAgency() {
    return ApiAgency().get('/users/info');
  }
};
