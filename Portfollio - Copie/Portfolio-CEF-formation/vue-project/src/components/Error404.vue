<template>
  <div class="error-404">
    <h1>Erreur 404</h1>
    <p>La page que vous recherchez n'existe pas.</p>
    <router-link to="/">Retour à l'accueil</router-link>
    <!-- Utilisation du composant RouterLink pour la redirection -->
  </div>
</template>

<script>
export default {
  name: 'MyError404',
};
</script>

<style scoped>
.error-404 {
  text-align: center;
  margin-top: 50px;
}
</style>
