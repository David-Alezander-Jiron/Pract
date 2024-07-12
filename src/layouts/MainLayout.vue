<template>
    <div>
      <NavbarComponent />
      <SidebarComponent />
      <router-view />
    </div>
  </template>
  
  <script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import SidebarComponent from '@/components/SidebarComponent.vue';
  
  export default {
    components: {
      NavbarComponent,
      SidebarComponent,
    },
  };
  </script>
  
  <style scoped>
  /* Puedes añadir estilos específicos para el layout aquí */
  </style>
  