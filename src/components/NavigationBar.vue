<template>
  <div class="container" id="navigation">
    <header id="title-navigation">
      <h1>
        <router-link to="/">
          <img
            :src="logo"
            id="logo"
            alt="Logo da Bella Vue - Ícone vermelho com amarelo com o desenho de um macarrão e o texto 'Massas Artesanais'"
          />
        </router-link>
      </h1>
    </header>

    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div
          class="
            nav
            col-12 col-lg-auto
            my-2
            justify-content-end
            my-md-0
            text-small
          "
        >
          <router-link to="/" class="nav-link text-white">Home </router-link>
          <router-link to="/carrinho" class="nav-link text-white"
            >Carrinho</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: ["logo", "cart"],
};
</script>

<style scoped >
#title-navigation {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: black;
}

h1 {
  font-size: 20px;
}

#login-ico {
  width: 40px;
  height: 40px;
  margin-right: 30px;
}

#cart-ico {
  width: 40px;
  height: 40px;
}
</style>
