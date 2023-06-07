<template>
  <!-- DRAWER DOS CARRINHOS -->
  <q-drawer
    v-model="drawerRight"
    :width="365"
    :min-width="500"
    :breakpoint="500"
    :no-swipe-backdrop="$q.platform.is.mobile ? false : true"
    side="right"
    behavior="mobile"
    content-class="white"
    bordered
    elevated
    no-swipe-open
    overlay
    @hide="closeCart"
  >
    <q-scroll-area class="fit">
      <div class="drawer">
        <div class="drawer-header">
          <!-- TITULO DO DRAWER -->
          <span class="drawer-header--title">Meu Carrinho</span>

          <!-- LIMPA OS ITENS DO CARRINHO -->
          <span v-if="cart.length > 0" class="drawer-header--clear" @click="clearCart"
            >Esvaziar</span
          >
        </div>
      </div>

      <div class="drawer-content">
        <div v-for="item in cart" :key="item.id">
          <!-- CARDS DOS FILMES -->
          <MovieInfo
            :poster="item.poster"
            :title="item.title"
            :date="item.release_date"
            :votes="item.vote_average"
            :id="item.id"
            :quantity="item.quantity"
            :hasCart="false"
            gap="medium"
          />
        </div>
      </div>

      <div class="drawer-footer">
        <!-- TOTAL DOS ITENS NO CARRINHO -->
        <div class="row drawer-footer-total">
          <div class="col-2 drawer-footer-total--text">Total:</div>

          <div class="col-9 drawer-footer-total--price">R$ {{ totalValue }}</div>
        </div>

        <!-- BOTÃO DE IR PARA CHECKOUT -->
        <q-btn
          :disable="cart.length <= 0"
          class="full-width drawer-footer-button"
          label="Finalizar"
          no-caps
          @click="$router.push('/checkout')"
        />
      </div>
    </q-scroll-area>

    <!-- BOTÃO DE FECHAR O DRAWER -->
    <div class="drawer-close" style="top: 5px; right: 10px">
      <q-btn dense flat round icon="close" @click="closeCart" />
    </div>
  </q-drawer>
</template>

<script>
import MovieInfo from './MovieInfo'
import { watchCartCount } from '../../utils/localStorage'

export default {
  name: 'Cart',

  components: {
    MovieInfo
  },

  props: {
    /* Indica se o drawer do carrinho está aberto */
    openCartDrawer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      /* Controla o estado de exibição do drawer */
      drawerRight: false,

      /* Itens do carrinho */
      cart: [],

      /* Valor total dos itens do carrinho */
      totalValue: null
    }
  },

  created() {
    /* Observa a contagem do carrinho e chama a função loadCart */
    watchCartCount(this.loadCart)
  },

  watch: {
    /* Observa a propriedade openCartDrawer e executa ações quando o valor mudar */
    openCartDrawer(newVal) {
      this.drawerRight = newVal

      /* Chama a função loadCart */
      this.loadCart()
    }
  },

  methods: {
    /* Fecha o drawer do carrinho */
    closeCart() {
      this.drawerRight = false
      this.$emit('closeCart')
    },

    /* Carrega os dados do carrinho do armazenamento local */
    loadCart() {
      /* Obtém os dados do carrinho do armazenamento local */
      const cartData = localStorage.getItem('cart')
      if (cartData) {
        /* Converte os dados do carrinho para o formato adequado */
        this.cart = JSON.parse(cartData)
      } else {
        /* Caso não haja dados do carrinho, define como uma lista vazia */
        this.cart = []
      }

      /* Chama a função para obter o preço total do carrinho */
      this.getTotalPrice()
    },

    /* Calcula o preço total do carrinho */
    getTotalPrice() {
      /* Obtém os dados do carrinho do armazenamento local */
      const cart = JSON.parse(localStorage.getItem('cart')) || []

      /* Calcula o preço total somando o preço de cada item */
      const totalPrice = cart.reduce((total, item) => total + item.quantity * 9.99, 0)

      /* Arredonda o preço total para duas casas decimais */
      this.totalValue = totalPrice.toFixed(2)
    },

    /* Limpa o carrinho */
    clearCart() {
      /* Remove os dados do carrinho do armazenamento local */
      localStorage.removeItem('cart')

      /* Limpa a lista de itens do carrinho */
      this.cart = []

      /* Chama a função para obter o preço total do carrinho */
      this.getTotalPrice()
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  margin: 14px 12px 20px 8px;

  &-close {
    position: absolute;
    height: 10px;
  }

  &-content {
    margin: 0 8px 0 8px;
  }

  &-footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin-top: 20px;
    padding: 8px;

    &-total {
      margin: 30px 0 0 5px;
      font-weight: 500;
      color: #4b5c6b;

      &--text {
        padding-top: 4px;
        font-size: 22px;
      }

      &--price {
        font-size: 26px;
        text-align: end;
        margin-left: 10px;
        text-wrap: nowrap;
      }
    }

    &-button {
      margin-top: 20px;
      height: 46px;
      color: white;
      background-color: #6558f5;
      max-width: 100%;
      font-size: 18px;
    }
  }

  &-header {
    display: flex;
    margin-top: 40px;
    margin-right: 8px;

    &--title {
      font-weight: 500;
      color: #4b5c6b;
      font-size: 20px;
    }

    &--clear {
      cursor: pointer;
      text-decoration: underline;
      color: #710fbf;
      display: flex;
      font-size: 18px;
      align-items: flex-end;
      margin-left: auto;
    }
  }
}

.drawer-header--clear:visited {
  color: purple;
}
</style>
