import VuexPersistance from 'vuex-persist'
import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    sessionId: null,
    sessionRemember: false,
    sessionData: {
      name: 'Nombre visible',
      details: 'Información extra',
      mail: 'Correo electrónico',
      user: 'Nombre de Usuario',
      money: {},
      bills: {},
      investments: {},
      img: 'assets/accountImg.png',
    },
    dashboardInfo: {
      sidebarObjects: {},
      modal: {
        active: false,
        template: '',
        data: {}
      },
      data: {}
    },
  },
  getters: {
    money(state) {
      return state.sessionData.state;
    },
    bills(state) {
      return state.sessionData.bills;
    },
    investments(state) {
      return state.sessionData.investments;
    },
    dashboardInfo(state) {
      return state.sessionData.dashboardInfo;
    },
    name(state) {
      return state.sessionData.name;
    },
    details(state) {
      return state.sessionData.details;
    },
    mail(state) {
      return state.sessionData.mail;
    },
    img(state) {
      return state.sessionData.img;
    },
    user(state) {
      return state.sessionData.user;
    },
  },
  mutations: {
    setAuthentication(state, authenticated) {
      state.isAuthenticated = authenticated;
    },
    setUserData(state, data) {
      state.sessionData.name = data.name;
      state.sessionData.details = data.details;
      state.sessionData.mail = data.mail;
      state.sessionData.user = data.user;
      state.sessionData.bills = data.bills;
      state.sessionData.investments = data.investments;
      state.sessionData.money = data.money;
      state.sessionData.img = data.img;
      state.sessionId = data.id;
    },
    setRemember(state, value){
      state.sessionRemember = value;
      localStorage.sessionRemember = value;
    },
    setModal() {}
  },
  actions: {
    performAuthentication(context, value) {
      console.log('---- [LOG STORE] The authentication state is modified. [LOG STORE] ----');
      context.commit('setAuthentication', value);
    },
    performRemember(context, value){
      console.log('---- [LOG STORE] The Remember state is modified. [LOG STORE] ----');
      context.commit('setRemember', value);
    },
    changeUserData(context, data) {
      let defaultData = {
        name: 'Nombre visible',
        details: 'Información extra',
        mail: 'Correo electrónico',
        user: 'Nombre de Usuario',
        money: {},
        bills: {},
        investments: {},
        img: 'assets/accountImg.png',
        id: null,
      }
      data = (data == "default") ? defaultData : data;
      context.commit('setUserData', data);
      console.log('---- [INFO STORE] The User Data has been changed. [INFO STORE] ----');
    },
    changeModal(context, data) {
      console.log('---- [INFO STORE] The Modal Data  has been changed. [INFO STORE] ----');
      context.commit('setModal', data);
    }
  },
  modules: {
  },
  plugins: [new VuexPersistance({storage: localStorage}).plugin]
})
