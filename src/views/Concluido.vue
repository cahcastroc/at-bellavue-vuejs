<template>
  <div class="container">
    <h2>Pedido concluído com Sucesso!</h2>

    <div class="col d-flex justify-content-center">
      <div class="card" style="width: 15rem">
        <img
          class="card-img-top"
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_960_720.png"
          alt="ícone Verde indicando sucesso"
        />
        <div class="card-body">
          <p class="card-text">
            {{ $store.state.user.name }}, a Massaria Bella Vue agradece a sua
            preferência.<br />
            O pedido será entregue em até 30 minutos no endereço <br />
            {{ $store.state.user.address }} - {{ $store.state.user.city }}.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Concluido",
};
</script>

<style  scoped>
h2 {
  margin-top: 20px;
  margin-bottom: 25px;
}

h5 {
  margin-top: 20px;
}

p {
  font-size: 15px;
  text-align: center;
}
</style>


