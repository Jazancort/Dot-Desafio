<template>
  <div class="selected-movies">
    <MovieInfoTitles :gap="!$q.platform.is.mobile ? 'big' : 'medium'" />

    <div v-for="item in cart" :key="item.id">
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
      <hr class="content--line" />
    </div>

    <div class="row total">
      <div class="col-8 total--text">Total:</div>

      <div class="col total--price">R$ {{ totalValue }}</div>
    </div>

    <q-btn class="full-width button" no-caps label="Finalizar" />
  </div>
</template>

<script>
import MovieInfo from '../drawer/MovieInfo.vue'
import MovieInfoTitles from '../drawer/MovieInfoTitles.vue'
import { watchCartCount } from '../../utils/localStorage'

export default {
  name: 'SelectedMovies',

  components: {
    MovieInfo,
    MovieInfoTitles
  },

  data() {
    return {
      itemCount: 2,
      cart: [],
      totalValue: null
    }
  },

  computed: {
    isLastItem() {
      return (index) => index === this.cart.length - 1
    }
  },

  created() {
    this.loadCart()
    watchCartCount(this.loadCart)
  },

  watch: {
    totalValue() {
      this.loadCart
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
