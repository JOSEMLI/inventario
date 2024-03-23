<template>
    <v-form>
        <v-row>
            <v-col>
                <v-card class="mb-12 pa-3">
                    <v-text-field
                    label="Nombre"
                    />
                    <v-text-field
                    label="Teléfono"
                    />
                </v-card>
                <v-card-actions class="justify-center">
                    <v-btn elevation="14" color="primary"  x-large :disabled="!formDatos" @click="registrar"> Registrar </v-btn>
                </v-card-actions>
            </v-col>
            <v-col>
                <v-file-input 
                label="Selecciona una imagen"
                show-size
                accept="image/png, image/jpeg, image/bmp"
                type="file"
                />
                <div class="d-flex flex-column justify-space-between align-center">
                    <img :src="imagenUrl" alt="" aspect-ratio="16/9" width="300" />
                </div>
                    
                               
            </v-col>
        </v-row>     
    </v-form>
</template>
<script>
export default {
    name: "FormConfiguracion",

    data: () => ({
    formDatos: false,
    imagenUrl: null,
    imagen: null,
    datos: {
      nombre: "",
      telefono: "",
      direccion: "",
    },
    reglasForm: [(value) => !!value || "Debes colocar este campo."],
    reglaImagen: [
      (value) =>
        !value || value.size < 5000000 || "La foto debe pesar menos de 5 MB!",
    ],
  }),
}
</script>