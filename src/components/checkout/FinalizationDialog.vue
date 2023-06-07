<template>
  <!-- DIALOG DE AGRADECIMENTO -->
  <q-dialog :value="isOpen" persistent>
    <q-card class="dialog-card" style="width: 400px">
      <q-card-section align="center" class="dialog-card--content">
        <!-- AGRADECIMENTO COM O NOME DO USUÁRIO -->
        <div class="dialog-card--title">Obrigado {{ userName }}!</div>
      </q-card-section>

      <q-card-section align="center" class="dialog-card--content">
        <!-- TEXTO DE AGRADECIMENTO -->
        <div class="dialog-card--subtitle">Sua compra foi finalizada com sucesso!</div>
      </q-card-section>

      <q-card-actions align="center" class="dialog-card--content">
        <!-- BOTÃO DE IR PARA PÁGINA PRINCIPAL -->
        <q-btn class="dialog-card--button full-width" no-caps flat @click="closeDialog">
          Ir para loja
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'FinalizationDialog',

  props: {
    /* Propriedade que indica se o componente está aberto ou fechado */
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      /* Nome do usuário */
      userName: null
    }
  },

  created() {
    /* Verifica se há um nome completo armazenado no localStorage */
    const nomeCompleto = localStorage.getItem('userName')
    if (nomeCompleto) {
      /* Divide o nome completo em uma lista de nomes separados */
      const nomesSeparados = nomeCompleto.split(' ')
      /* Pega os dois primeiros nomes e junta novamente com um espaço entre eles */
      this.userName = nomesSeparados.slice(0, 2).join(' ')
    }
  },

  methods: {
    /* Função para fechar o diálogo */
    closeDialog() {
      /* Redireciona para a rota inicial */
      this.$router.push('/')

      /* Remove o carrinho do localStorage */
      localStorage.removeItem('cart')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-card {
  width: 450px;

  &--content {
    margin: 0 15px 0 15px;
    padding: 20px 0 12px 0;
  }

  &--title {
    font-size: 24px;
    font-weight: 500;
  }

  &--subtitle {
    font-size: 18px;
    font-weight: 400;
  }

  &--button {
    height: 46px;
    color: white;
    background-color: #6558f5;
    max-width: 100%;
    font-size: 16px;
  }
}

.dialog-card--content:nth-child(1) {
  margin-top: 10px;
}
</style>
