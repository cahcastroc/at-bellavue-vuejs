<template>
  <div class="container">
    <h2>Dados do Cliente</h2>
    <div class="form">
      <form @submit.prevent="checkForm" action="" method="post" id="formOrder">
        <span v-if="errors.length" class="form">
          <p><strong>Favor corrigir os erros:</strong></p>
          <ul>
            <li v-for="error in errors" :key="error.index">{{ error }}</li>
          </ul>
        </span>

        <div class="form-group mt-3">
          <label for="user.name">Nome:</label>
          <input
            type="text"
            placeholder="Digite o seu  nome"
            class="form-control"
            v-model.trim.lazy="myUserName"
          />
        </div>

        <div class="form-group mt-3">
          <label for="user.address">Endereço:</label>
          <input
            type="text"
            placeholder="Digite o seu endereço"
            class="form-control"
            v-model.trim.lazy="myUserAddress"
          />
        </div>

        <div class="form-group mt-3">
          <label for="user.city">Cidade:</label>
          <input
            type="text"
            placeholder="Digite a sua cidade"
            class="form-control"
            v-model.trim.lazy="myUserCity"
          />
        </div>
        <div class="form-group mt-3">
          <label for="user.cep">CEP:</label>
          <input
            type="number"
            placeholder="Digite o seu Cep"
            v-model.number="myUserCep"
            class="form-control"
          />
        </div>
        <div class="form-group mt-3">
          <label for="user.email">E-mail:</label>
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            class="form-control"
            v-model.trim.lazy="myUserEmail"
          />
        </div>
        <div class="form-group mt-3">
          <label for="user.phone">Celular:</label>
          <input
            type="tel"
            placeholder="Digite o seu celular"
            class="form-control"
            v-model.trim.lazy="myUserPhone"
          />
        </div>
        <div class="form-group form-check-inline mt-4">
          <p>Forma de Pagamento:</p>
          <input
            type="radio"
            class="form-check-input"
            value="Cartão Débito/Crédito"
            v-model="myUserPayment"
          />
          <label class="form-check-label" for="cartão"
            >Cartão Crédito/Débito</label
          >
        </div>
        <div class="form-group form-check-inline">
          <input
            type="radio"
            class="form-check-input"
            value="Dinheiro"
            v-model="myUserPayment"
          />
          <label class="form-check-label" for="dinheiro">Dinheiro</label>
        </div>
        <div class="form-group form-check-inline">
          <input
            type="radio"
            value="Pix"
            class="form-check-input"
            v-model="myUserPayment"
          />
          <label class="form-check-label" for="pix">PIX</label>
        </div>

        <div class="form-group mt-4">
          <label>Embalagem:</label>
          <select
            id="pack"
            class="form-select form-select-sm"
            aria-label=".form-select example"
            name="pack"
            v-model="myUserPack"
          >
            <option disabled value>Escolha um tipo de embalagem</option>
            <option value="Isopor">Isopor</option>
            <option value="Alumínio">Alumínio</option>
            <option value="Plástico">Isopor</option>
          </select>
        </div>
        <div class="form-check mt-3">
          <input
            id="check"
            class="form-check-input"
            type="checkbox"
            :true-value="yes"
            :false-value="no"
            v-model="myUserTopping"
          />
          <label class="form-check-label" for="bacon"
            >Enviar descartáveis</label
          >
        </div>

        <div class="mt-4">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Observações:</label
          >
          <textarea
            class="form-control"
            rows="3"
            v-model="myUserObs"
          ></textarea>
          <button class="btn btn-success mt-3" type="submit">Continuar</button>
        </div>
      </form>
    </div>
    <span v-if="showOrder">
      <resumo-pedidos></resumo-pedidos>
    </span>
  </div>
</template>

<script>
import ResumoPedidos from "../components/ResumoPedidos.vue";
export default {
  name: "Pedidos",
  components: {
    ResumoPedidos,
  },
  directives: {
    focus: {
      mounted: (el) => {
        el.focus();
      },
    },
  },
  data() {
    return {
      errors: [],
      showForm: true,
      showOrder: false,
      yes: "Sim",
      no: "Não",
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.myUserName) this.errors.push("O nome é obrigatório");
      if (!this.myUserAddress) this.errors.push("O endereço é obrigatório");
      if (!this.myUserCity) this.errors.push("A cidade é obrigatória");

      if (!this.myUserEmail) {
        this.errors.push("O e-mail obrigatório");
      } else if (!this.validEmail(this.myUserEmail)) {
        this.errors.push("Digite um e-mail válido");
      }

      if (!this.errors.length) {
        const inputs = document.querySelectorAll(".form-control"); //Desabilitar o Form
        inputs.forEach((input) => {
          input.disabled = true;
        });
        const pays = document.querySelectorAll(".form-check-input"); //Desabilitar o Form
        pays.forEach((pay) => {
          pay.disabled = true;
        });
        document.getElementById("pack").disabled = true;
        document.getElementById("check").disabled = true;

        this.showOrder = true;
        return true;
      }
    },
    validEmail: function (myUserEmail) {
      const re =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return re.test(myUserEmail);
    },
  },
  computed: {
    myUserName: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("saveUserName", value);
      },
    },
    myUserAddress: {
      get() {
        return this.$store.state.user.address;
      },
      set(value) {
        this.$store.commit("saveUserAddress", value);
      },
    },
    myUserCity: {
      get() {
        return this.$store.state.user.city;
      },
      set(value) {
        this.$store.commit("saveUserCity", value);
      },
    },
    myUserEmail: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("saveUserEmail", value);
      },
    },
    myUserCep: {
      get() {
        return this.$store.state.user.cep;
      },
      set(value) {
        this.$store.commit("saveUserCep", value);
      },
    },
    myUserPhone: {
      get() {
        return this.$store.state.user.phone;
      },
      set(value) {
        this.$store.commit("saveUserPhone", value);
      },
    },
    myUserPayment: {
      get() {
        return this.$store.state.user.payment;
      },
      set(value) {
        this.$store.commit("saveUserPayment", value);
      },
    },
    myUserPack: {
      get() {
        return this.$store.state.user.pack;
      },
      set(value) {
        this.$store.commit("saveUserPack", value);
      },
    },
    myUserObs: {
      get() {
        return this.$store.state.user.obs;
      },
      set(value) {
        this.$store.commit("saveUserObs", value);
      },
    },
    myUserTopping: {
      get() {
        return this.$store.state.user.topping;
      },
      set(value) {
        this.$store.commit("saveUserTop", value);
      },
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 50px;
}

select {
  border-radius: 10px;
}
textarea {
  border-radius: 10px;
}

form {
  padding: 30px;
  width: 500px;
}

.form {
  display: flex;
  justify-content: center;
}

h2{
margin-top: 20px;
}
</style>