<script setup>


</script>

<template>
  <header>

  </header>

  <main>
    <div id="reseaux">
      <a href="https://github.com/" target="_blank">
        <div>
          <h2>GitHub</h2>
          <img src="/src/assets/Faviconne/github.png" alt="Faviconne GitHub">

        </div>
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <div>
          <h2>Facebook</h2>
          <img src="/src/assets/Faviconne/facebook.png" alt="Faviconne Facebook">

        </div>
      </a>
      <a href="https://x.com" target="_blank">
        <div>
          <h2>X</h2>
          <img src="/src/assets/Faviconne/twitter (1).png" alt="Faviconne X">

        </div>
      </a>
      <p> Dernière mise a jour le 7/02/2025</p>
    </div>
    <div>
    </div>
  </main>
</template>

<style scoped>
#reseaux {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  width: 40px;

}

a {
  width: 22%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  background-color: aliceblue;
}

p {
  color: brown;
}
</style>
