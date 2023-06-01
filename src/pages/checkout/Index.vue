<template>
  <div class="checkout">
    <div class="checkout--content">
      <div class="checkout--item-form">
        <UserForm />
      </div>
      <div class="checkout--item-movies">
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
  &--content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  &--item {
    &-form {
      margin: 10px;
      margin-right: 50px;
      min-width: 600px;
    }

    &-movies {
      margin: 10px;
      margin-right: 50px;
      min-width: 350px;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 720px) {
  .checkout--item {
    &-form {
      margin: 10px;
      min-width: auto;
      flex-basis: 100%;
    }

    &-movies {
      margin: 10px;
      min-width: auto;
      flex-basis: 100%;
    }
  }
}
</style>
