<template>
  <div class="contact-form">
    <h2>Formulaire de Contact</h2>
    <form @submit.prevent="envoyerEmail">
      <label for="nom">Nom:</label>
      <input type="text" id="nom" v-model="nom" required>

      <label for="prenom">Prénom:</label>
      <input type="text" id="prenom" v-model="prenom" required>

      <label for="objet">Objet:</label>
      <input type="text" id="objet" v-model="objet" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="message" rows="5" required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const nom = ref("");
const prenom = ref("");
const objet = ref("");
const message = ref("");

const envoyerEmail = () => {
  const emailDestinataire = "tdamiencharles@gmail.com";

  const mailtoLink = `mailto:${emailDestinataire}?subject=${encodeURIComponent(objet.value)}&body=${encodeURIComponent(
    `Nom: ${nom.value}\nPrénom: ${prenom.value}\n\nMessage:\n${message.value}`
  )}`;

  window.location.href = mailtoLink;
};
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
