<template>
  <div class="selected-movies">
    <div class="row title">
      <div class="col-3">Imagem</div>
      <div class="col-3">Nome</div>
      <div class="col-2">Qtd</div>
      <div class="col-2">Preço</div>
      <div class="col-2"></div>
    </div>

    <div v-for="index in itemCount" :key="index">
      <div class="row content">
        <div class="col-3"><img src="exemplo.png" class="header--logo-img" /></div>
        <div class="col-3 content--itens">Nome do filme</div>
        <div class="col-2 content--itens">1</div>
        <div class="col-2 content--itens">R$ 9,99</div>
        <div class="col-2 content--itens"><q-icon name="delete" size="sm" /></div>
      </div>
      <hr v-if="isLastItem(index)" class="content--line" />
    </div>

    <div class="row total">
      <div class="col-8 total--text">Total:</div>

      <div class="col total--price">R$ 19,98</div>
    </div>

    <q-btn class="full-width button" no-caps label="Finalizar" />
  </div>
</template>

<script>
export default {
  name: 'SelectedMovies',
  data() {
    return {
      itemCount: 2 // Defina o número de vezes que o v-for deve ocorrer dinamicamente
    }
  },

  computed: {
    isLastItem() {
      return (index) => index === this.itemCount - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.selected-movies {
  max-width: 500px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5c6b;

  .title {
    font-size: 16px;
  }

  .total {
    margin: 30px 0 0 5px;
    &--text {
      font-size: 20px;
    }

    &--price {
      font-size: 26px;
    }
  }

  .button {
    margin-top: 20px;
    height: 46px;
    color: white;
    background-color: #6558f5;
    max-width: 90%;
    font-size: 18px;
  }

  .content {
    margin-top: 5px;

    &--line {
      border: none;
      height: 2px;
      color: #9eadba;
      background-color: #9eadba;
      margin-right: 12%;
    }

    &--itens {
      margin-top: 6%;

      &-icon {
        height: 10px;
        color: #000;
      }
    }
  }
}
</style>
