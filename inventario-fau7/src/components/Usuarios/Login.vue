<template>
    <div class="container">
        <div class="screen">
            <div class="screen__content">
                <v-form class="login" >
                    <div class="login__field">
                        <i class="login__icon fas mdi-fa-user"></i>
                        <v-text-field
                            type="text"
                            name="login"
                            label="Usuario"
                            placeholder="Usuario"
                            v-model="usuario"
                            />
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas mdi-fa-lock"></i>
                        <v-text-field
                            id="password"
                            type="password"
                            name="password"
                            label="Contraseña"
                            v-model="password"
                            ></v-text-field>
                    </div>
                    <button class="button login__submit" @click.prevent="iniciarSesion">
                        <span class="button__text">Iniciar Session</span>
                        <i class="button__icon fas fa-chevron-right" ></i>
                    </button>
                </v-form>
            </div>
            <div class="screen__background">
                <span
                class="screen__background__shape screen__background__shape4"
                ></span>
                <span
                class="screen__background__shape screen__background__shape3"
                ></span>
                <span
                class="screen__background__shape screen__background__shape2"
                ></span>
                <span
                class="screen__background__shape screen__background__shape1"
                ></span>
            </div>
        </div>
  </div>
</template>
<script>
import HttpService from '../../Servicios/HttpService'

export default {
    name: "Login",
    
    data: () => ({
    usuario: "",
    password: "",
    mensaje: {
      texto: "",
      color: "",
    },
    mostrarMensaje: false
  }),
  methods: {
    iniciarSesion(){
      
      if (!this.usuario) {
          this.mostrarMensaje = true
          this.mensaje.texto = "Debes colocar el usuario"
          this.mensaje.color = "warning"
          alert("Debes colocar el usuario");
          return
      }
      if (!this.password) {
          this.mostrarMensaje = true
          this.mensaje.texto = "Debes colocar la contraseña"
          this.mensaje.color = "warning"
          alert("Debes colocar la contraseña")
          return
      }
      let payload = {
          metodo: "login",
          usuario: {
              usuario:this.usuario,
              password: this.password
          }
      }
      HttpService.obtenerConDatos(payload, "usuarios.php")
      .then(resultado => {
          if(resultado) {
              this.$emit("logeado", resultado)
          }
      })
    },
  }

}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background: linear-gradient(90deg, #202936, #202936);
}

.screen {
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #5c5696;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 100px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #7875b5;
}


.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #6a679e;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #6a679e;
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #7875b5;
}

.social-login {
  position: absolute;
  height: 120px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 20px 10px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #7875b5;
}

.social-login__icon:hover {
  transform: scale(1.5);
}
</style>