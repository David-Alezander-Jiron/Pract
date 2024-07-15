<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white vh-100" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">EventTix</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-white" active-class="active">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/evento" class="nav-link text-white" active-class="active">Evento</router-link>
      </li>
      <li>
        <router-link to="/new-ticket" class="nav-link text-white" active-class="active">Nuevo Ticket</router-link>
      </li>
      <li>
        <router-link to="/projects" class="nav-link text-white" active-class="active">Projects</router-link>
      </li>
      <li>
        <router-link to="/personal" class="nav-link text-white" active-class="active">Users</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu'
};
</script>

<style scoped>
.nav-link {
  color: #ffffff;
}

.nav-link.active {
  background-color: #007bff;
}

.bg-dark {
  background-color: #343a40 !important;
}

.vh-100 {
  height: 100vh;
}
</style>
