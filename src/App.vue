<template>
  <div id="app">
    <Navbar v-if="!isLoginPage" />
    <Sidebar v-if="!isLoginPage" />
    <div class="main-content" :class="{ 'full-page': isLoginPage }">
      <Header v-if="!isLoginPage" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';
import Sidebar from './components/SidebarComponent.vue';
import Header from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Header
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    }
  }
};
</script>

<style src="./App.css"></style>

<style scoped>

</style>
