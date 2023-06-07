<template>
  <div class="checkout--form">
    <!-- NOME COMPLETO -->
    <div class="checkout--form-title">Finalizar Compra</div>

    <q-form ref="myForm" no-error-focus>
      <div class="default-spacing">
        <q-input
          v-model="nome"
          :rules="[(val) => (val && val.length > 3) || 'Digite um nome válido']"
          color="blue-grey-6"
          label="Nome Completo"
          outlined
          lazy-rules
          @blur="validateForm"
        />
      </div>

      <!-- CPF E CELULAR -->
      <div class="row default-spacing">
        <div :class="{ 'col-6': $q.platform.is.mobile, 'col-7': !$q.platform.is.mobile }">
          <q-input
            v-model="cpf"
            :rules="[(val) => (val.length > 0 && val.length > 10) || 'Digite um CPF válido']"
            color="blue-grey-6"
            label="CPF"
            class="checkout--form-space"
            mask="###.###.###-##"
            outlined
            unmasked-value
            @blur="validateForm"
          />
        </div>

        <div class="col">
          <q-input
            v-model="celular"
            :rules="[(val) => (val.length > 0 && val.length > 9) || 'Digite um número válido']"
            :mask="phoneMask"
            color="blue-grey-6"
            label="Celular"
            type="tel"
            unmasked-value
            outlined
            lazy-rules
            @blur="validateForm"
          />
        </div>
      </div>

      <!-- EMAIL -->
      <div class="default-spacing">
        <q-input
          v-model="email"
          :rules="[(val) => /.+@.+\..+/.test(val) || 'Digite um e-mail válido']"
          color="blue-grey-6"
          label="E-mail"
          type="email"
          outlined
          lazy-rules
          @blur="validateForm"
        />
      </div>

      <!-- CEP/ENDEREÇO -->
      <div class="row default-spacing">
        <div :class="{ 'col-6': $q.platform.is.mobile, 'col-5': !$q.platform.is.mobile }">
          <q-input
            v-model="cep"
            :rules="[(val) => /^\d{5}-\d{3}$/.test(val) || 'Digite um CEP válido']"
            color="blue-grey-6"
            label="CEP"
            class="checkout--form-space"
            mask="#####-###"
            outlined
            lazy-rules
            @blur="validateForm"
          />
        </div>

        <div class="col">
          <q-input
            v-model="endereco"
            :rules="[(val) => (val && val.length > 2) || 'Digite um endereço válido']"
            color="blue-grey-6"
            label="Endereço"
            outlined
            lazy-rules
            @blur="validateForm"
          />
        </div>
      </div>

      <!-- CIDADE/ESTADO -->
      <div class="row default-spacing">
        <div :class="{ 'col-6': $q.platform.is.mobile, 'col-7': !$q.platform.is.mobile }">
          <q-input
            v-model="cidade"
            :rules="[(val) => (val && val.length > 2) || 'Digite uma cidade válida']"
            color="blue-grey-6"
            label="Cidade"
            class="checkout--form-space"
            outlined
            lazy-rules
            @blur="validateForm"
          />
        </div>

        <div class="col">
          <q-input
            v-model="estado"
            :rules="[(val) => (val && val.length > 1) || 'Digite um estado válido']"
            color="blue-grey-6"
            label="Estado"
            outlined
            lazy-rules
            @blur="validateForm"
          />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      nome: null,
      cpf: '',
      celular: '',
      email: null,
      cep: null,
      endereco: null,
      cidade: null,
      estado: null
    }
  },

  computed: {
    phoneMask() {
      return this.celular.length > 10 ? '(##) #####-####' : '(##) ####-#####'
    }
  },

  methods: {
    validateForm() {
      this.$refs.myForm.validate().then((success) => {
        if (success) {
          this.$emit('formValidated', true)
          localStorage.setItem('userName', this.nome)
        } else {
          this.$emit('formValidated', false)
          localStorage.removeItem('userName')
        }
      })
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
