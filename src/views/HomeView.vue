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
        money: {},
        bills: {},
        investments: {},
        billing: [],
        img: 'assets/accountImg.png'
      },
      data: {
        gStatsBoxes: {
          totalMoney: 'No additional info.',
          totalMoneyObtained: 'No additional info.',
          totalMoneyInvested: 'No additional info.',
          totalSales: 'No additional info.',
          totalClients: 'No additional info.',
        }
      }
    }
  },
  computed: {
    totalMoney() {
      if (this.sessionData.user == 'Nombre de Usuario') return false;
      let salary = parseFloat(this.sessionData.money.salary.remaining.$numberDecimal),
        pension = parseFloat(this.sessionData.money.pension.remaining.$numberDecimal),
        investmentsEarnings = 0,
        rents = 0,
        passiveIncome = 0,
        sideJobs = 0,
        governmentGrants = 0,
        propertys = 0,
        inheritance_gifts = 0;
      for (let i = 0; i < this.sessionData.money.investments.earnings.length; i++) {
        investmentsEarnings += parseFloat(this.sessionData.money.investments.earnings[i].remaining.$numberDecimal)
      }
      for (let i = 0; i < this.sessionData.money.rents.length; i++) {
        rents += parseFloat(this.sessionData.money.rents[i].rent.remaining.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.money.passiveIncome.length; i++) {
        passiveIncome += parseFloat(this.sessionData.money.passiveIncome[i].remaining.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.money.sideJobs.length; i++) {
        sideJobs += parseFloat(this.sessionData.money.sideJobs[i].salary.remaining.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.money.governmentGrants.length; i++) {
        governmentGrants += parseFloat(this.sessionData.money.governmentGrants[i].remaining.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.money.saleOfProperty.length; i++) {
        propertys += parseFloat(this.sessionData.money.saleOfProperty[i].property.remaining.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.money.inheritance_gifts.length; i++) {
        inheritance_gifts += parseFloat(this.sessionData.money.inheritance_gifts[i].remaining.$numberDecimal);
      }
      let total = salary + pension + investmentsEarnings + rents + passiveIncome + sideJobs + governmentGrants + propertys + inheritance_gifts;
      return total;
    },
    totalMoneyInvested() {
      if (this.sessionData.user == 'Nombre de Usuario') return false;

      let stockMarket = 0,
        realEstate = 0,
        financialSector = 0,
        startups = 0,
        metals = 0,
        cryptocurrencies = 0,
        others = 0;
        console.log(this.sessionData.investments.stockMarket);
      for (let i = 0; i < this.sessionData.investments.stockMarket.length; i++) {
        stockMarket += parseFloat(this.sessionData.investments.stockMarket[i].invested.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.investments.realEstate.length; i++) {
        realEstate += parseFloat(this.sessionData.investments.realEstate[i].value.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.investments.financialSector.length; i++) {
        financialSector += parseFloat(this.sessionData.investments.financialSector[i].invested.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.investments.startups.length; i++) {
        startups += parseFloat(this.sessionData.investments.startups[i].invested.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.investments.metals.length; i++) {
        metals += parseFloat(this.sessionData.investments.metals[i].value.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.investments.cryptocurrencies.length; i++) {
        cryptocurrencies += parseFloat(this.sessionData.investments.cryptocurrencies[i].obtained.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.investments.others.length; i++) {
        others += parseFloat(this.sessionData.investments.others[i].invested.$numberDecimal);
      }
      let total = stockMarket + realEstate + financialSector + startups + metals + cryptocurrencies + others;
      return total;
    },
    totalMoneyObtained() {
      if (this.sessionData.user == 'Nombre de Usuario') return false;
      let salary = parseInt(this.sessionData.money.salary.current),
        pension = parseInt(this.sessionData.money.pension.current),
        investmentsEarnings = 0,
        rents = 0,
        passiveIncome = 0,
        sideJobs = 0,
        governmentGrants = 0,
        propertys = 0,
        inheritance_gifts = 0;
      for (let i = 0; i < this.sessionData.money.investments.earnings.length; i++) {
        investmentsEarnings += parseFloat(this.sessionData.money.investments.earnings[i].liquidation.$numberDecimal)
      }
      for (let i = 0; i < this.sessionData.money.rents.length; i++) {
        rents += parseFloat(this.sessionData.money.rents[i].rent.value.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.money.passiveIncome.length; i++) {
        passiveIncome += parseInt(this.sessionData.money.passiveIncome[i].mount);
      }
      for (let i = 0; i < this.sessionData.money.sideJobs.length; i++) {
        sideJobs += parseInt(this.sessionData.money.sideJobs[i].salary.mount);
      }
      for (let i = 0; i < this.sessionData.money.governmentGrants.length; i++) {
        governmentGrants += parseInt(this.sessionData.money.governmentGrants[i].mount);
      }
      for (let i = 0; i < this.sessionData.money.saleOfProperty.length; i++) {
        propertys += parseFloat(this.sessionData.money.saleOfProperty[i].property.value.$numberDecimal);
      }
      for (let i = 0; i < this.sessionData.money.inheritance_gifts.length; i++) {
        inheritance_gifts += parseInt(this.sessionData.money.inheritance_gifts[i].mount);
      }
      let total = salary + pension + investmentsEarnings + rents + passiveIncome + sideJobs + governmentGrants + propertys + inheritance_gifts;
      return total;
    },
    totalClients() {
      if (this.sessionData.user == 'Nombre de Usuario') return false;
      let soldRents = 0;
      for (let i = 0; i < this.sessionData.money.rents.length; i++) {
        if (this.sessionData.money.rents[i].rent.state == true) {
          soldRents++ // Si la propiedad está rentada se agrega como cliente
        }
      }
      console.log('rentas: ' + soldRents);
      return soldRents;
    },
    totalSales() {
      if (this.sessionData.user == 'Nombre de Usuario') return false;
      let soldPropertys = 0;
      for (let i = 0; i < this.sessionData.money.saleOfProperty.length; i++) {
        if (this.sessionData.money.saleOfProperty[i].property.state == true) {
          soldPropertys++
        }
      }
      console.log('ventas: ' + soldPropertys);
      return soldPropertys;
    }
  },
  methods: {
    log_out() {
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
  <div class="app-body">
    <div class="bgDecoration">

    </div>
    <div class="app-view">
      <div class="_appRute">
        <span class="_appRute">Pages / {{ $route.name }}</span>
        <span class="_appRuteTitle">{{ $route.name }}</span>
      </div>
      <div class="_appDashboardButtons">
        <i class="filterBtn"></i>
        <i class="addTransactionBtn"></i>
        <i class="addBillBtn"></i>
        <i class="notificationsBtn"></i>
      </div>
      <div class="_appGeneralStats">
        <div class="_gStatsBox">
          <div class="box-general">
            <span class="box-title">Dinero obtenido</span>
            <span class="box-data">{{ totalMoneyObtained }}</span>
          </div>
          <div class="box-vector">
            <div class="vector-body">
              <i class="bx bx-money-withdraw"></i>
            </div>
          </div>
          <div class="box-additionalInfo">
            <span class="box-info">{{ data.gStatsBoxes.totalMoneyObtained }}</span>
          </div>
        </div>
        <div class="_gStatsBox">
          <div class="box-general">
            <span class="box-title">Dinero restante</span>
            <span class="box-data">{{ totalMoney }}</span>
          </div>
          <div class="box-vector">
            <div class="vector-body">
              <i class="bx bx-dollar-circle"></i>
            </div>
          </div>
          <div class="box-additionalInfo">
            <span class="box-info">{{ data.gStatsBoxes.totalMoney }}</span>
          </div>
        </div>
        <div class="_gStatsBox">
          <div class="box-general">
            <span class="box-title">Dinero invertido</span>
            <span class="box-data">{{ totalMoneyInvested }}</span>
          </div>
          <div class="box-vector">
            <div class="vector-body">
              <i class="bx bx-coin-track"></i>
            </div>
          </div>
          <div class="box-additionalInfo">
            <span class="box-info">{{ data.gStatsBoxes.totalMoneyInvested }}</span>
          </div>
        </div>
        <div class="_gStatsBox">
          <div class="box-general">
            <span class="box-title">Ventas totales</span>
            <span class="box-data">{{ totalSales }}</span>
          </div>
          <div class="box-vector">
            <div class="vector-body">
              <i class="bx bx-buildings"></i>
            </div>
          </div>
          <div class="box-additionalInfo">
            <span class="box-info">{{ data.gStatsBoxes.totalSales }}</span>
          </div>
        </div>
        <div class="_gStatsBox">
          <div class="box-general">
            <span class="box-title">Clientes totales</span>
            <span class="box-data">{{ totalClients }}</span>
          </div>
          <div class="box-vector">
            <div class="vector-body">
              <i class="bx bx-cart"></i>
            </div>
          </div>
          <div class="box-additionalInfo">
            <span class="box-info">{{ data.gStatsBoxes.totalClients }}</span>
          </div>
        </div>
      </div>
      <div class="_appBillsHistory"></div>
      <div class="_appSlider"></div>
      <div class="_appRecentTransactions"></div>

    </div>
  </div>
  <span @click.prevent="log_out">Log Out</span>
</template>
