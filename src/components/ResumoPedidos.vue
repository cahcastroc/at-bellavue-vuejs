<template>
  <div class="container">
    <h2>Resumo do Pedido</h2>
    <div>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Qtd</th>
            <th scope="col">Item</th>
          </tr>
        </thead>
        <tbody v-for="order in orders" :key="order.id">
          <tr>
            <th scope="row">{{ order.qtd }}</th>
            <td>{{ order.title }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Valor Total do Pedido</th>
            <td>R$ {{ finalPrice }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <pre>
            Nome: {{ $store.state.user.name }}
            Endereço: {{ $store.state.user.address }}
            Cidade: {{ $store.state.user.city }}
            CEP: {{ $store.state.user.cep }}
            E-mail: {{ $store.state.user.email }}
            Celular: {{ $store.state.user.phone }}
            Forma de Pagamento: {{ $store.state.user.payment }}
            Tipo de embalagem: {{ $store.state.user.pack }}
            Enviar Descartáveis: {{ $store.state.user.topping }}
            Obs:  {{ $store.state.user.obs }}
            
        </pre
    >
    <div class="col d-flex justify-content-center">
      <button @click="$router.push('/carrinho')" class="btn btn-primary me-3">
        Editar Pedido
      </button>
      <button @click="$router.push('/concluido')" class="btn btn-success">
        Concluir Pedido
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumoPedido",

  data() {
    return {
      orders: this.$store.state.cart,
    };
  },
  computed: {
    finalPrice() {
      return this.orders.reduce((sum, order) => {
        return sum + order.price * order.qtd; //.toFixed(2).replace('.',',')
      }, 0);
    },
  }
  
};
</script>