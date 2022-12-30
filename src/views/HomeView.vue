<script>

export default {
  data: () => {
    return {

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
      let total = salary+investmentsEarnings+rents+passiveIncome+sideJobs+governmentGrants+pension+propertys+inheritance_gifts;
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
      let total = salary+investmentsEarnings+rents+passiveIncome+sideJobs+governmentGrants+pension+propertys+inheritance_gifts;
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
    },
    salary(type) {
      if (type == "remaining") {
        return this.$store.state.sessionData.money.salary.remaining;
      } else {
        return this.$store.state.sessionData.money.salary.current;
      }
    },
    investmentsEarnings(type) {
      let total = 0;
      for (let z = 0; z < this.$store.state.sessionData.money.investments.earnings.length; z++) {
        if (type == "remaining") {
          total += this.$store.state.sessionData.money.investments.earnings[z].remaining
        } else {
          total += this.$store.state.sessionData.money.investments.earnings[z].liquidation
        }
      }
      return total;
    },
    rents(type) {
      let total = 0;
      let rents = this.$store.state.sessionData.money.rents
      for (let b = 0; b < rents.length; b++) {
        if (rents[b].rent.state == true) { // Si la renta está alquilada
          if (type == "remaining") {
            total += rents[b].rent.remaining
          } else {
            total += rents[b].rent.value
          }
        }
      }
      return total;
    },
    passiveIncome(type) {
      let total = 0;
      for (let z = 0; z < this.$store.state.sessionData.money.passiveIncome.length; z++) {
        if (type == "remaining") {
          total += this.$store.state.sessionData.money.passiveIncome[z].remaining
        } else {
          total += this.$store.state.sessionData.money.passiveIncome[z].mount
        }
      }
      return total;
    },
    sideJobs(type) {
      let total = 0;
      for (let z = 0; z < this.$store.state.sessionData.money.sideJobs.length; z++) {
        if (type == "remaining") {
          total += this.$store.state.sessionData.money.sideJobs[z].salary.remaining
        } else {
          total += this.$store.state.sessionData.money.sideJobs[z].salary.mount
        }
      }
      return total;
    },
    governmentGrants(type) {
      let total = 0;
      for (let z = 0; z < this.$store.state.sessionData.money.governmentGrants.length; z++) {
        if (type == "remaining") {
          total += this.$store.state.sessionData.money.governmentGrants[z].remaining
        } else {
          total += this.$store.state.sessionData.money.governmentGrants[z].mount
        }
      }
      return total;
    },
    pension(type){
      if(this.$store.state.sessionData.money.pension.have){
        if(type == 'remaining'){
          return this.$store.state.sessionData.money.pension.remaining;
        }else{
          return this.$store.state.sessionData.money.pension.current;
        }
      }else{
        return false;
      }
    },
    s_props(type) {
      let total = 0;
      let props = this.$store.state.sessionData.money.saleOfProperty;
      for (let b = 0; b < props.length; b++) {
        if (props[b].property.state) { // Si la propiedad está vendida
          if (type == "remaining") {
            total += props[b].property.remaining
          } else {
            total += props[b].property.value
          }
        }
      }
      return total;
    },
    inheritance_gifts(type) {
      let total = 0;
      for (let z = 0; z < this.$store.state.sessionData.money.inheritance_gifts.length; z++) {
        if (type == "remaining") {
          total += this.$store.state.sessionData.money.inheritance_gifts[z].remaining
        } else {
          total += this.$store.state.sessionData.money.inheritance_gifts[z].mount
        }
      }
      return total;
    }
  },
  methods: {

  },
  mounted: {

  }
};
</script>


<template>
  asd
</template>
