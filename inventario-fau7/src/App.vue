<template>
  <v-app>
    <login @logeado="onLog" v-if="!logeado" />
    <cambiar-password v-if="debeCambiarPassword"/>
    <div v-if="logeado && !debeCambiarPassword">
    <default />
    <v-main>
      <v-container fluid>
        <router-view/>
        <footer-nav />
      </v-container>      
    </v-main>
  </div>
  
  <v-snackbar
        v-model="mostrarMensaje"
        :timeout="3000"
        :color="mensaje.color"
        top
        >
            {{ mensaje.texto }}
        </v-snackbar>
  </v-app>
</template>

<script>
import CambiarPassword from './components/Usuarios/CambiarPassword.vue'
import Login from './components/Usuarios/Login.vue'
import FooterNav from './layouts/Contenido/FooterNav.vue'
import Default from './layouts/Default.vue'
import HttpService from './Servicios/HttpService'

export default {
  components: { Default, FooterNav, Login, CambiarPassword },
  name: 'App',

  data:()=>({
    logeado: false,
    debeCambiarPassword: false,
    mostrarMensaje: false,
    mensaje: {
      texto: "",
      color:""
    }
  }),

  mounted(){
    
    let logeado = this.verificarSesion()
    if(logeado) {
      this.logeado = true
    }
  },
  methods: {
    onLog(respuesta){
      console.log(respuesta)
      if(!respuesta.resultado) {
        this.mostrarMensaje = true
        this.mensaje = {
          texto: "Datos incorrectos, verifica la información",
          color: "error"
        }
        return
      }
      if(respuesta.resultado === "cambia") {
        this.mostrarMensaje = true
        this.mensaje = {
          texto: "Datos correctos. Por favor cambia tu contraseña",
          color: "indigo"
        }
        this.debeCambiarPassword = true
        this.logeado = true
        this.establecerUsuario(respuesta.datos.nombreUsuario, respuesta.datos.idUsuario)
        return
      }
      if(respuesta.resultado){
        this.logeado = true
        localStorage.setItem('logeado', true)
        this.establecerUsuario(respuesta.datos.nombreUsuario, respuesta.datos.idUsuario)
        this.mostrarMensaje = true
        this.mensaje = {
          texto: "Datos correctos. Bienvenido",
          color: "success"
        }
        this.$router.push( { name: "home"} )
      }


    },

    verificarSesion(){
      let logeado = localStorage.getItem('logeado')
          if(logeado) {
            return logeado
          }
          return false
    },

    establecerUsuario(usuario, id){
      localStorage.setItem('nombreUsuario', usuario)
      localStorage.setItem('idUsuario', id)
    },
  }

}
</script>
