<template>
  <div class="container">
    <img
      class="img-fluid"
      id="img-banner"
      src="https://i.ibb.co/74Y0qxC/banner.jpg"
      alt="Imagem de uma panela de macarrão com tomate e alho frescos"
    />

    <span>
      <h4 v-if="hours >= 9 && hours < 22" id="aberta">
        Nossa loja está Aberta. Faça o seu pedido!
      </h4>
      <h4 v-else id="fechada">Nossa loja está Fechada. Volte em breve!</h4>
      <hr />
    </span>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["hours"],
};
</script>

<style scoped>
#img-banner {
  border-radius: 20px;
  margin: 20px 0 50px 0;
}
</style>