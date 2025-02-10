<script setup>
import FooterPart from "./components/FooterPart.vue";
import HeaderPart from "./components/HeaderPart.vue";
</script>

<template>
  <div class="Header">
    <HeaderPart />
  </div>

  <div class="main">
    <router-view></router-view> <!-- Ajout du routeur ici -->
  </div>

  <div class="Footer">
    <FooterPart />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
}

.Header {
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  background-color: blanchedalmond;
  color: black;

}

.Footer {
  position: sticky;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  background-color: aliceblue;
  color: black;
}
</style>
