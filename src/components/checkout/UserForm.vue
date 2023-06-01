<template>
  <div class="checkout--form">
    <!-- NOME COMPLETO -->
    <div class="checkout--form-title">Finalizar Compra</div>

    <div class="default-spacing">
      <q-input v-model="name" color="blue-grey-6" label="Nome Completo" outlined />
    </div>

    <!-- CPF E CELULAR -->
    <div class="row default-spacing">
      <div class="col">
        <q-input
          v-model="name"
          color="blue-grey-6"
          label="CPF"
          class="checkout--form-space"
          outlined
        />
      </div>

      <div class="col">
        <q-input v-model="name" color="blue-grey-6" label="Celular" outlined />
      </div>
    </div>

    <!-- EMAIL -->
    <div class="default-spacing">
      <q-input v-model="name" color="blue-grey-6" label="E-mail" outlined />
    </div>

    <!-- CEP/ENDEREÇO -->
    <div class="row default-spacing">
      <div class="col-4">
        <q-input
          v-model="name"
          color="blue-grey-6"
          label="CEP"
          class="checkout--form-space"
          outlined
        />
      </div>

      <div class="col">
        <q-input v-model="name" color="blue-grey-6" label="Endereço" outlined />
      </div>
    </div>

    <!-- CIDADE/ESTADO -->
    <div class="row default-spacing">
      <div class="col-7">
        <q-input
          v-model="name"
          color="blue-grey-6"
          label="Cidade"
          class="checkout--form-space"
          outlined
        />
      </div>

      <div class="col">
        <q-input v-model="name" color="blue-grey-6" label="Estado" outlined />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      nome: null,
      cpf: null,
      celular: null,
      email: null,
      cep: null,
      endereco: null,
      cidade: null,
      estado: null
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .q-field--outlined .q-field__control:before {
    border: 2px solid #c5ced6;
  }
}

.checkout--form {
  max-width: 600px;

  &-title {
    font-size: 28px;
    color: #4b5c6b;
    margin: 0 0 20px 0;
  }

  &-space {
    margin-right: 20px;
  }

  .default-spacing {
    margin-bottom: 10px;
  }
}
</style>
