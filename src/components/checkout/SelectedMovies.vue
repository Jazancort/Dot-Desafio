<template>
  <div class="selected-movies">
    <!-- TITULOS DOS ITENS -->
    <MovieInfoTitles :gap="!$q.platform.is.mobile ? 'big' : 'medium'" />

    <div v-for="item in cart" :key="item.id">
      <!-- INFORMAÇÕES DOS FILMES NO CARRINHO -->
      <MovieInfo
        :poster="item.poster"
        :title="item.title"
        :date="item.release_date"
        :votes="item.vote_average"
        :id="item.id"
        :quantity="item.quantity"
        :hasCart="false"
        :gap="!$q.platform.is.mobile ? 'big' : 'small'"
        :nameSize="!$q.platform.is.mobile ? 'big' : 'small'"
      />
      <!-- LINHA DE SEPARAÇÃO -->
      <hr class="content--line" />
    </div>

    <!-- TOTAL DE ITENS NO CARRINHO -->
    <div class="row total">
      <div class="col-8 total--text">Total:</div>

      <div class="col total--price">R$ {{ totalValue }}</div>
    </div>

    <!-- BOTÃO DE FINALIZAR COMPRA -->
    <q-btn
      :disable="!isValidated || cart.length === 0"
      class="full-width button"
      label="Finalizar"
      no-caps
      @click="submit"
    />

    <!-- DIALOG DE AGRADECIMENTO PELA COMPRA -->
    <FinalizationDialog :isOpen="dialog" />
  </div>
</template>

<script>
import MovieInfo from '../drawer/MovieInfo.vue'
import MovieInfoTitles from '../drawer/MovieInfoTitles.vue'
import FinalizationDialog from './FinalizationDialog.vue'
import { watchCartCount } from '../../utils/localStorage'

export default {
  name: 'SelectedMovies',

  components: {
    MovieInfo,
    MovieInfoTitles,
    FinalizationDialog
  },

  props: {
    /* Indica se o formulário foi validado com sucesso */
    isValidated: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      /* Array contendo os itens do carrinho */
      cart: [],

      /* Valor total do carrinho */
      totalValue: null,

      /* Flag para controlar a exibição do diálogo */
      dialog: false
    }
  },

  created() {
    /* Carrega os dados do carrinho ao iniciar o componente */
    this.loadCart()

    /* Observa alterações na contagem do carrinho e carrega os dados novamente */
    watchCartCount(this.loadCart)
  },

  watch: {
    /* Observa as alterações no valor total do carrinho */
    totalValue() {
      /* Carrega os dados do carrinho */
      this.loadCart
    }
  },

  methods: {
    /* Função para enviar o formulário */
    submit() {
      this.dialog = true
    },

    /* Função para carregar os dados do carrinho */
    loadCart() {
      /* Obtém os dados do carrinho do localStorage */
      const cartData = localStorage.getItem('cart')
      if (cartData) {
        /* Converte os dados do carrinho de volta para um objeto */
        this.cart = JSON.parse(cartData)
      } else {
        /* Define o carrinho como vazio caso não haja dados no localStorage */
        this.cart = []
      }

      /* Calcula o preço total do carrinho */
      this.getTotalPrice()
    },

    /* Função para calcular o preço total do carrinho */
    getTotalPrice() {
      /* Obtém os dados do carrinho do localStorage */
      const cart = JSON.parse(localStorage.getItem('cart')) || []

      /* Calcula o preço total somando o preço de cada item no carrinho */
      const totalPrice = cart.reduce((total, item) => total + item.quantity * 9.99, 0)

      /* Arredonda o preço total para duas casas decimais e atualiza a propriedade totalValue */
      this.totalValue = totalPrice.toFixed(2)
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
      text-align: end;
    }
  }

  .button {
    margin-top: 20px;
    height: 46px;
    color: white;
    background-color: #6558f5;
    max-width: 100%;
    font-size: 18px;
  }

  .content {
    margin-top: 5px;

    &--line {
      border: none;
      height: 2px;
      color: #9eadba;
      background-color: #9eadba;
    }

    &--itens {
      margin-top: 5%;

      &-icon {
        height: 10px;
        color: #000;
      }
    }
  }
}
</style>
