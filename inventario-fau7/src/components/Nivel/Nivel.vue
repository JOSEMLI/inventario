<template>
    <div>
        <h1>Nivel</h1>
        <div class="d-flex align-end flex-column ">
        <v-btn 
        icon="mdi-plus"
        class="ma-2" 
        elevation="8"
        size="small" 
        color="primary" 
        fixed right bottom 
        to="/nuevo-nivel"/>
        </div>

        <v-data-table
        :headers="encabezadoTabla"
        class="elevation-1"
        >
        
        </v-data-table>

    </div>
</template>
<script>
import HttpService from '../../Servicios/HttpService'

export default {
    name:"Nivel",

    data: () => ({
        cargando: false,
        mostrarDialogo: false,
        mostrarDialogoEliminar: false,
        membresia: {
            nombre: "",
            duracion: "",
            precio: ""
        },
        membresias: [],
        mensaje: {
            texto: "",
            color: ""
        },
        mostrarMensaje: false,
        encabezadoTabla: [
            {text: "Membresía", sortable: true, value: "nombre"},
            {text: "Duración", value: "duracion"},
            {text: "Precio", value: "precio"},
            {text: 'Opciones', value: 'opciones', sortable: false },
            ],
        titulo: "Agregar",
        itemSeleccionado: ""
    }),
mounted(){
    
},


}


</script>