<template>
    <div>
      
      <SidebarComponent />
      <router-view />
    </div>
  </template>
  
  <script>
  
  import SidebarComponent from '@/components/SidebarComponent.vue';
  
  export default {
    components: {
      
      SidebarComponent,
    },
  };
  </script>
  
  <style scoped>
  /* Puedes añadir estilos específicos para el layout aquí */
  </style>
  