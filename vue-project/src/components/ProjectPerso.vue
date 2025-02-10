<script setup>
import ModalCV from "./ModalCV.vue";
import ModalCDG from "./ModalCDG.vue";
import ModalComm from "./ModalComm.vue";

</script>

<template>
  <div class="IntProjet">
    <h2>Mes Projects</h2>
    <ul>
      <li>
        <h3>Curriculum Vitae </h3>
        <div>
          <ModalCV />
        </div>
        <p>Date :</p>
      </li>
      <li>
        <h3>Cahier des charges</h3>
        <div>
          <ModalCDG />
        </div>
        <p>Date :</p>
      </li>
      <li>
        <h3>Espace commentaire</h3>
        <div>
          <ModalComm />
        </div>

        <p>Date :</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.IntProjet {
  margin-top: 50px;
}

.Contact {
  margin-top: 50px;
  margin-bottom: 50px;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

h3 {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

div {
  margin: 15px;
}
</style>
