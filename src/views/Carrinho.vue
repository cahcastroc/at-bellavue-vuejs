<template>
  <div class="container">
    <h2>Seu carrinho:</h2>
    <div v-if="this.$store.state.cart.length > 0">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor(unidade)</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody v-for="cart in this.$store.state.cart" :key="cart.id">
          <tr>
            <td>{{ cart.title }}</td>
            <td>{{ cart.qtd }}</td>
            <td>R${{ cart.price }}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary btn-sm me-1"
                @click="cart.qtd += 1"
                :disabled="cart.qtd >= cart.limit"
              >
                +
              </button>

              <button
                type="button"
                class="btn btn-secondary btn-sm me-1"
                :disabled="cart.qtd <= 0"
                @click="cart.qtd -= 1"
              >
                -
              </button>

              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="deleteItem(cart.id)"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Valor Total do Pedido</th>
            <td>R$ {{ totalPrice }}</td>
          </tr>
        </tfoot>
      </table>

      <div class="col d-flex justify-content-center">
        <button @click="$router.push('/')" class="btn btn-primary me-5">
          Voltar para o cardápio
        </button>
        <button
          type="submit"
          class="btn btn-success"
          @click="$router.push('/pedidos')"
        >
          Continuar
        </button>
      </div>
    </div>
    <div v-else>
      <h5 class="text-center">Seu Carrinho está vazio</h5>
      <button @click="$router.push('/')" class="btn btn-primary">
        Voltar para o cardápio
      </button>
    </div>
    <div></div>
  </div>
</template>


<script>
export default {
  name: "Carrinho",

  computed: {
    totalPrice() {
      return this.$store.state.cart.reduce((sum, carts) => {
        return sum + carts.price * carts.qtd; 
      }, 0);
    },
  },
  methods: {
    deleteItem(id) {
      this.$store.state.cart = this.$store.state.cart.filter(function (el) {
        return el.id !== id;
      });
    },
  },
};
</script>

<style scoped>
</style>