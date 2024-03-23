<template>
    <v-footer padless class="mt-5">
        <v-row justify="center" no-gutters>
      
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Facultada de Arquitectura y Urbanismo</strong>
      </v-col>
    </v-row>
    </v-footer>
</template>
<script>
export default {
  name: "FooterNav",
};
</script>