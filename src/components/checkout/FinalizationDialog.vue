<template>
  <q-dialog :value="isOpen" persistent>
    <q-card class="dialog-card" style="width: 400px">
      <q-card-section align="center" class="dialog-card--content">
        <div class="dialog-card--title">Obrigado {{ userName }}!</div>
      </q-card-section>

      <q-card-section align="center" class="dialog-card--content">
        <div class="dialog-card--subtitle">Sua compra foi finalizada com sucesso!</div>
      </q-card-section>

      <q-card-actions align="center" class="dialog-card--content">
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
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      userName: null
    }
  },

  created() {
    const nomeCompleto = localStorage.getItem('userName')
    if (nomeCompleto) {
      const nomesSeparados = nomeCompleto.split(' ')
      this.userName = nomesSeparados.slice(0, 2).join(' ')
    }
  },

  methods: {
    closeDialog() {
      this.$router.push('/')
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
