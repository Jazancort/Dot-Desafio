<template>
  <q-drawer
    side="right"
    v-model="drawerRight"
    bordered
    elevated
    overlay
    :width="350"
    :min-width="500"
    :breakpoint="500"
    content-class="white"
  >
    <q-scroll-area class="fit">
      <div class="drawer">
        <div class="drawer-header">
          <span class="drawer-header--title">Meus Carrinho</span>
          <span class="drawer-header--clear">Esvaziar</span>
        </div>
      </div>

      <div class="drawer-content">
        <div v-for="index in 5" :key="index">
          <MovieInfo gap="medium" :hasCart="false" />
        </div>
      </div>

      <div class="drawer-footer">
        <div class="row drawer-footer-total">
          <div class="col-8 drawer-footer-total--text">Total:</div>

          <div class="col drawer-footer-total--price">R$ 19,98</div>
        </div>

        <q-btn
          class="full-width drawer-footer-button"
          label="Finalizar"
          no-caps
          @click="$router.push('/checkout')"
        />
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import MovieInfo from './MovieInfo'

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
      drawerRight: false
    }
  },

  watch: {
    openCartDrawer() {
      this.drawerRight = !this.drawerRight
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  margin: 14px 12px 20px 8px;

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
        padding-right: 6px;
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
