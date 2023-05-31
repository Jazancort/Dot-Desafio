<template>
  <div class="checkout">
    <div class="checkout--title">Finalizar Compra</div>

    <div class="row center">
      <div class="col">
        <UserForm />
      </div>
      <div class="col">
        <SelectedMovies />
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from '../../components/checkout/UserForm.vue'
import SelectedMovies from '../../components/checkout/SelectedMovies.vue'

export default {
  name: 'Checkout',
  components: {
    UserForm,
    SelectedMovies
  },
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.checkout {
  margin: 30px 150px 0px 350px;

  &--title {
    font-size: 28px;
    color: #4b5c6b;
    margin: 0 0 20px 0;
  }
}
</style>
