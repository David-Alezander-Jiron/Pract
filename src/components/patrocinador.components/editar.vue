<template>
  <div class="container">
    <h4>Editar Patrocinador</h4>
    <form @submit.prevent="updateSponsor">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input id="nombre" v-model="sponsor.nombre" type="text" required>
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" v-model="sponsor.descripcion" required></textarea>
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <input id="correo" v-model="sponsor.correo" type="email" required>
      </div>
      <div class="btn-group-custom">
        <button type="submit" class="btn btn-crear">Actualizar</button>
        <button type="button" class="btn btn-cancelar" @click="cancelEdit">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditarPatrocinador',
  data() {
    return {
      sponsor: {
        nombre: '',
        descripcion: '',
        correo: ''
      }
    };
  },
  created() {
    const sponsorId = this.$route.params.id;
    // Aquí deberías cargar los datos del patrocinador usando el sponsorId
    this.loadSponsor(sponsorId);
  },
  methods: {
    loadSponsor(sponsorId) {
      // Simulación de carga de datos, reemplaza esto con la lógica real
      const sponsors = [
        { id: 1, nombre: 'Kevin', descripcion: 'Patrocinador principal', correo: 'kevinmar@gmail.com' },
        { id: 2, nombre: 'Angel', descripcion: 'Patrocinador secundario', correo: 'angelher@gmail.com' },
        { id: 3, nombre: 'Alejandro', descripcion: 'Patrocinador terciario', correo: 'alejandro@gmail.com' }
      ];
      const sponsor = sponsors.find(s => s.id === parseInt(sponsorId));
      if (sponsor) {
        this.sponsor = sponsor;
      }
    },
    updateSponsor() {
      // Lógica para actualizar un patrocinador
      console.log('Patrocinador actualizado:', this.sponsor);
      // Aquí podrías redirigir a la lista de patrocinadores
      this.$router.push('/patrocinadores');
    },
    cancelEdit() {
      // Lógica para cancelar la edición y volver a la lista de patrocinadores
      this.$router.push('/patrocinadores');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  margin-top: 30px;
}

h4 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
}

textarea {
  resize: vertical; /* Permite redimensionar verticalmente */
}

.btn-group-custom {
  display: flex;
  gap: 10px;
  margin-top: 40px;
  margin-left: 250px;
}

.btn-crear,
.btn-cancelar {
  background-color: #17A1FA;
  border-color: #17A1FA;
  color: white;
  border-radius: 15px; /* Esquinas redondeadas */
  padding: 10px 20px; /* Espaciado interno */
  border: 1px solid transparent; /* Asegura que el borde sea visible */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Sombra en los botones */
}

.btn-cancelar {
  background-color: #f44336;
  border-color: #f44336;
}

.btn-crear:hover {
  background-color: #0f8de3;
  border-color: #0f8de3;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
  border-color: #d32f2f;
}

.btn:hover {
  opacity: 0.8;
}
h4{
  text-align: center;
}
</style>
