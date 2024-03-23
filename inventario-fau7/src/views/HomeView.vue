<template>
  <cartas-personalizadas :cartas="datosNivel"/>

  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HttpService from "../Servicios/HttpService";
import Utiles from "../Servicios/Utiles";
import CartasPersonalizadas from '../components/Dialogos/CartasPersonalizadas.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    CartasPersonalizadas,
  },

  data: () => ({
    cargando: false,
    datosNivel: []
  }),
  mounted() {
    this.obtenerDatos();
  },
  methods: {
    obtenerDatos() {
      this.cargando = true;
      HttpService.obtenerConDatos(
        {
          metodo: "obtener",
        },
        "inicio.php"
      ).then((resultado) => {
        this.crearCartas(resultado.datosNivel);
        this.cargando = false;
      });
    },

    crearCartas(nivel) {
      this.datosNivel = [
        {
          color: "purple darken-1",
          icono: "mdi-calendar-star",
          nombre: "Total nivel",
          total: nivel.totalNivel,
        },
        {
          color: "pink darken-1",
          icono: "mdi-calendar",
          nombre: "Visitas hoy",
          total: nivel.totalNivel,
        },
        {
          color: "red darken-1",
          icono: "mdi-calendar-range",
          nombre: "Visitas semana",
          total: nivel.totalNivel,
        },
        {
          color: "indigo darken-1",
          icono: "mdi-calendar-month",
          nombre: "Visitas mes",
          total: nivel.totalNivel,
        },
      ];
      
    },
  },


});
</script>

