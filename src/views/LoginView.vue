<script>
import axios from 'axios';
export default {
  data: () => {
    return {
      isAuthenticated: false,
      account: {
        user: "",
        password: "",
      },
      remember: false,
      sessionData: {},
      error: {
        active: false,
        text: ""
      }
    }
  },
  methods: {
    submitLogin(){
      console.log('------------------------- SUBMIT LOGIN CONSOLELOG')
      axios.request(process.env.API_URL+'/login', {params: {app_: "klout.apps.cashmanager",user: this.account.user, password: this.account.password}}).then((r) => {
        if(!r.data.isAuthenticated){
          console.log('No lograste iniciar sesión')
          this.error.text = 'Nombre de usuario o contraseña incorrecta.';
        }else{
          console.log('Lograste iniciar sesión')
          this.sessionData = r.data;
          this.isAuthenticated = r.data.isAuthenticated;
          this.account.user = "";
          this.account.password = "";
          this.$store.dispatch('performAuthentication', this.isAuthenticated);
          this.$store.dispatch('performRemember', this.remember);
          this.$store.dispatch('changeUserData', this.sessionData);
          this.goToDashboard();
        }
      }).catch((e) => {
        console.log(e);
        if(e.code == "ERR_NETWORK"){
          this.errorText = "Hubo un error de conexión a internet.";
        }else if(e.code == "ERR_CONNECTION_REFUSED"){
          this.errorText = "La base de datos rechaza tu conexión."
        }
      });
    },
    goToDashboard() {
      console.log('------------------------- LOGINVIEW GO TO DASHBOARD CONSOLELOG')
      console.log('ESTÁ AUTENTICADO: '.concat((this.$store.state.isAuthenticated) ? "Sí" : "No"));
      if (this.$store.state.isAuthenticated) {
        this.$router.go('/');
      } else {
        this.$router.go('/login');
      }
    }
  },
  mounted() {
  }
}
</script>

<template>
  <div class="page">
    <div class="container">
      <div class="card">
        <div class="card-container">
          <div class="card-header">
            <span class="title">Inicia sesión</span>
            <span class="phrase">Usa tu nombre de usuario y tu contraseña para comenzar</span>
          </div>
          <div class="card-body">
            <input v-model="account.user" class="unameInput" id="unameInput" type="text" placeholder="Nombre de usuario" name="username"
              required>
            <input v-model="account.password" class="passwdInput" id="passwdInput" type="password" placeholder="Tu contraseña" name="passwd"
              required>
            <div class="card-switch">
              <label class="rememberLabel">
                <input class="rememberInput" type="checkbox" name="remember" id="rememberMe" v-model="remember" />
                No cerrar sesión
              </label>
            </div>
            <div @click.prevent="submitLogin" class="card-button" id="loginButton">
              <span>Iniciar sesión</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="phrase2">No tienes una cuenta? <a class="phrase_link" target="_blank" href="#">Crea una
                aquí</a></span>
          </div>
          <div v-if="error.active == true" class="card-error">
            <span><strong>Error:</strong> {{ error.text }}</span>
          </div>
        </div>
      </div>
      <div class="slider">
        <span class="title">Cuida tu dinero</span>
        <span class="phrase">El manejo de tu dinero es una de tus mayores prioridades</span>
      </div>
    </div>
  </div>
</template>

<style>
.page {
  background-image: url('../assets/img/bg1.png');
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.container {
  width: 95vw;
  height: 95vh;
  margin: 1rem;
  padding: 0 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.container .card {
  background-color: beige;
  height: 90vh;
  width: calc((95vw / 2) - 2rem);
  margin: 1rem;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 1rem;
  box-shadow: -3px 10px 37px 8px rgba(0, 0, 0, 0.37);
}

.card .card-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card .card-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 90%;
  margin-left: 2rem;
}

.card-header .title {
  font-weight: bold;
  font-size: 40px;
  color: rgb(35, 54, 82);
}

.card-header .phrase {
  color: slategray;
  font-size: 14px;
}

.card .card-body {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 95%;
}

.card .card-body input[type="text"] {
  padding: 0.75rem;
  width: 80%;
  align-self: center;
  margin-bottom: 0.5rem;
  border: 0.7px solid #0000003d;
  border-radius: 0.5rem;
  color: slategrey
}

.card .card-body input[type="password"] {
  padding: 0.75rem;
  width: 80%;
  align-self: center;
  margin-bottom: 1rem;
  border: 0.7px solid #0000003d;
  border-radius: 0.5rem;
  color: slategray;
  ;
}

.card .card-switch {
  margin-left: 2rem;
  color: slategray;
  margin-bottom: 1rem;
}

.card-switch .rememberInput {
  border: 0.7px solid #7080903d;
  cursor: pointer;
}

.card-switch .rememberLabel {
  font-family: system-ui, sans-serif;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

.card-switch input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.05em solid currentColor;
  border-radius: 0.15em;
  display: grid;
  place-content: center;
}


.card-switch input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #f7971e;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.card-switch input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.card-switch .rememberLabel {
  cursor: pointer;
  margin-left: .5rem;
}

.card .card-button {
  background: linear-gradient(to right, #f7971e, #ffd200);
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 1rem;
  align-self: center;
  border: none;
  border-radius: 0.7rem;
  width: 70%;
  cursor: pointer;
}

.card .card-footer {
  color: slategrey;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1rem;
}

.card-footer span {
  align-items: center;
}

.card-footer a {
  text-decoration: none;
  background-image: linear-gradient(to right, #f7971e, #ffd200);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card .card-error {
  background-color: rgb(214, 161, 161);
  padding: 0.5rem;
  border-left: 4px solid red;
  border-radius: 0.3rem;
}

.card-error span{
  color: rgb(57, 66, 75);
}

.card-error strong{
  color: rgb(29, 34, 38);
}

.container .slider {
  background-image: linear-gradient(to right, #f7971e38, #ffd00038), url('../assets/img/slider/img1.jpg');
  filter: grayscale(0);
  background-size: cover;
  width: calc((95vw / 2) - 2rem);
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  border-radius: 1.5%;
  margin: 1rem;
  padding: 1rem;
  box-shadow: -3px 10px 37px 8px rgba(0, 0, 0, 0.37);
}

.slider .title {
  font-weight: bold;
  color: white;
  font-size: 50px;
}

.slider .phrase {
  color: white;
  font-size: 18px;
}
</style>
