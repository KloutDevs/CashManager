<template>
      <router-view/>
</template>

<script>
export default {
  data: () => {
    return {
      isAuthenticated: false
    }
  },
  methods: {
    goToDashboard() {
      console.log('------------------------- APP.JS GO TO DASHBOARD CONSOLELOG')
      console.log('ESTÁ AUTENTICADO: '.concat((this.$store.state.isAuthenticated) ? "Sí" : "No"));
      if (this.$store.state.isAuthenticated) {
        this.$router.push('/');
      } else {
        this.$router.push('/login');
      }
    }
  },
  mounted(){
    this.goToDashboard();
  
  }
}
</script>
