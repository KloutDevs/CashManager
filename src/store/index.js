import VuexPersistance from 'vuex-persist'
import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    sessionId: null,
    sessionData: {
      name: 'Nombre visible',
      details: 'Información extra',
      mail: 'Correo electrónico',
      user: 'Nombre de Usuario',
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
    bills(state){
      return state.sessionData.bills;
    },
    investments(state){
      return state.sessionData.investments;
    },
    dashboardInfo(state){
      return state.sessionData.dashboardInfo;
    },
    name(state){
      return state.sessionData.name;
    },
    details(state){
      return state.sessionData.details;
    },
    mail(state){
      return state.sessionData.mail;
    },
    img(state){
      return state.sessionData.img;
    },
    user(state){
      return state.sessionData.user;
    },
  },
  mutations: {
    setAuthentication(state, authenticated){
      state.isAuthenticated = authenticated;
    },
    setUserData(state, data){
      console.log('SETUD')
      state.sessionData.name = data.name;
      state.sessionData.details = data.details;
      state.sessionData.mail = data.mail;
      state.sessionData.user = data.user;
      state.sessionData.bills = data.bills;
      state.sessionData.investments = data.investments;
      state.sessionData.img = data.img;
      state.sessionId = data.id;
      console.log(state.sessionData);
    },
    setModal(){}
  },
  actions: {
    performAuthentication(context, value){
      context.commit('setAuthentication', value);
    },
    changeUserData(context, data){
      console.log('Context UD');
      context.commit('setUserData', data);
    },
    changeModal(context, data){
      context.commit('setModal', data);
    }
  },
  modules: {
  },
  plugins: [
    new VuexPersistance({
      storage: localStorage
    }).plugin
  ]
})
