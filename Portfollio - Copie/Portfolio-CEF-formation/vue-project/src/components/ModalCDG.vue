<script setup>
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <img src="/src/assets/Faviconne/photo CDG.png" alt="Photo CDG" @click="open = true">

  <Teleport to="body">
    <div v-if="open" class="modal-overlay" @click.self="open = false">
      <!-- Utilisation de la directive v-if pour afficher le modal uniquement lorsque open est vrai -->
      <div class="modal">
        <button @click="open = false">X</button>
        <h3>Cahier des charges</h3>
        <h4>Estimation de la charge de travail et des coût</h4>
        <p>
          Le but de ce projet était de créer un cahier des charges
          professionnel pour une entreprise fictive
        </p>
        <a href="/Test CDG/Cahier des Charges Final.pdf" target="_blank">Mon Cahier des charges</a>
      </div>
    </div>
  </Teleport> <!-- Utilisation de Teleport pour afficher le modal partout dans l'application -->
</template>

<style scoped>
/* Overlay qui couvre tout l'écran */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
}

/* Style du modal */
.modal {
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  color: black;
  width: 300px;
}

/* Bouton de fermeture bien positionné */
button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* Style de l'image */
img {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
}

img:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

}
</style>
