<script setup>
import { ref } from 'vue';



const open = ref(false);
</script>

<template>
  <img src="/src/assets/Faviconne/Photo CV.png" alt="Photo Cv" @click="open = true">

  <Teleport to="body">
    <div v-if="open" class="modal-overlay" @click.self="open = false">
      <!-- Utilisation de la directive v-if pour afficher le modal uniquement lorsque open est vrai -->
      <div class="modal">
        <button @click="open = false">X</button>
        <h3>CV</h3>
        <h4>Initiation au HTML et CSS</h4>
        <p>Le but de ce projet était de créer un CV via les langages de programmation HTML et CSS.</p>
        <a href="/MonCV/index.html" target="_blank">Mon Curriculum Vitae</a>
        <br>
        <a href="https://github.com/Damso974/CV-Cef-formation" target="_blank">Lien GitHub</a>
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
