<script>

export default {
  data: () => {
    return {
      isAuthenticated: false,
      sessionId: null,
      sessionData: {
        name: 'Nombre visible',
        details: 'Información extra',
        mail: 'Correo electrónico',
        user: 'Nombre de Usuario',
        bills: {},
        investments: {},
        img: 'assets/accountImg.png'
      }
    }
  },
  computed: {
    totalMoney() {
      let salary = this.salary('remaining');
      let investmentsEarnings = this.investmentsEarnings('remaining');
      let rents = this.rents('remaining');
      let passiveIncome = this.passiveIncome('remaining');
      let sideJobs = this.sideJobs('remaining');
      let governmentGrants = this.governmentGrants('remaining');
      let pension = this.pension('remaining');
      let propertys = this.s_props('remaining');
      let inheritance_gifts = this.inheritance_gifts('remaining');
      let total = salary + investmentsEarnings + rents + passiveIncome + sideJobs + governmentGrants + pension + propertys + inheritance_gifts;
      console.log(total);
      return total;
    },
    totalMoneyInvested() {
      return false;
    },
    totalMoneyObtained() {
      let salary = this.salary('total');
      let investmentsEarnings = this.investmentsEarnings('total');
      let rents = this.rents('total');
      let passiveIncome = this.passiveIncome('total');
      let sideJobs = this.sideJobs('total');
      let governmentGrants = this.governmentGrants('total');
      let pension = this.pension('total');
      let propertys = this.s_props('total');
      let inheritance_gifts = this.inheritance_gifts('total');
      let total = salary + investmentsEarnings + rents + passiveIncome + sideJobs + governmentGrants + pension + propertys + inheritance_gifts;
      return total;
    },
    totalClients() {
      return false;
    },
    totalSales() {
      return false;
    },
    billing() {
      return false;
    }
  },
  methods: {
    log_out(){
      this.sessionId = null;
      this.sessionData = {
        name: 'Nombre visible',
        details: 'Información extra',
        mail: 'Correo electrónico',
        user: 'Nombre de Usuario',
        bills: {},
        investments: {},
        img: 'assets/accountImg.png'
      };
      this.isAuthenticated = false;
      this.$store.dispatch('changeUserData', 'default');
      this.$store.dispatch('performAuthentication', false);
      this.$router.push('/login')
    },
  },
  mounted() {
    let isAuthenticated = this.$store.state.isAuthenticated;
    let sessionId = this.$store.state.sessionId;
    let sessionData = this.$store.state.sessionData;
    this.isAuthenticated = isAuthenticated;
    this.sessionId = sessionId;
    this.sessionData = sessionData;
  }
};
</script>


<template>
  <span @click.prevent="log_out">Log Out</span>
</template>
