<template>
  <div class="container">
    <Banner :hours="hours" />

    <div v-if="hours >= 9 && hours < 22">
      <span class="selection">
        <h2>Escolha a sua massa:</h2>
      </span>
      <div class="row row-cols-3">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card group mb-4">
            <div class="card">
              <img
                class="bd-placeholder-img card-img-top"
                width="80%"
                height="225"
                :src="product.img"
              />

              <div class="card-body">
                <p class="card-text">{{ product.title }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      @click="addToCart(product)"
                    >
                      Adicionar no carrinho
                    </button>
                  </div>
                  <small class="text-muted">${{ product.price }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },

  data() {
    return {
      products: [],
      hours: new Date().getHours(),
    };
  },

  methods: {
    addToCart(products) {
      //add products in cart - Mutation
      this.$store.commit("addProduct", products);
    },

    async getProducts() {
      // get Products in Axios
      this.$axios
        .get("https://my-json-server.typicode.com/cahcastroc/json-at/db")
        .then((resp) => {
          const data = resp.data.products;
          this.products = data;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style>
h2 {
  text-align: start;
  border-bottom: 5px solid #000;
  line-height: 0.1em;
  margin: 10px;
  margin-top: 50px;
  font-family: "Poppins", sans-serif;
}

.selection {
  margin: 10px;
}
</style>