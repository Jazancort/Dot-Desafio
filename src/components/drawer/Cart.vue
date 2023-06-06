<template>
  <q-drawer
    v-model="drawerRight"
    :width="350"
    :min-width="500"
    :breakpoint="500"
    side="right"
    behavior="mobile"
    content-class="white"
    bordered
    elevated
    overlay
  >
    <q-scroll-area class="fit">
      <div class="drawer">
        <div class="drawer-header">
          <span class="drawer-header--title">Meu Carrinho</span>
          <span class="drawer-header--clear" @click="clearCart">Esvaziar</span>
        </div>
      </div>

      <div class="drawer-content">
        <div v-for="item in cart" :key="item.id">
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
        <div class="row drawer-footer-total">
          <div class="col-2 drawer-footer-total--text">Total:</div>

          <div class="col-9 drawer-footer-total--price">R$ {{ totalValue }}</div>
        </div>

        <q-btn
          class="full-width drawer-footer-button"
          label="Finalizar"
          no-caps
          @click="$router.push('/checkout')"
        />
      </div>
    </q-scroll-area>

    <div class="drawer-close" style="top: 5px; right: 10px">
      <q-btn dense flat round icon="close" @click="drawerRight = !drawerRight" />
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
    openCartDrawer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      drawerRight: false,
      cart: [],
      totalValue: null
    }
  },

  created() {
    watchCartCount(this.loadCart())
  },

  watch: {
    openCartDrawer() {
      this.drawerRight = !this.drawerRight
      this.loadCart()
    }
  },

  methods: {
    loadCart() {
      const cartData = localStorage.getItem('cart')
      if (cartData) {
        this.cart = JSON.parse(cartData)
      } else {
        this.cart = []
      }

      this.getTotalPrice()
    },

    getTotalPrice() {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      const totalPrice = cart.reduce((total, item) => total + item.quantity * 9.99, 0)
      this.totalValue = totalPrice.toFixed(2)
    },

    clearCart() {
      localStorage.removeItem('cart')
      this.cart = []
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
