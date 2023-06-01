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
          <span class="drawer-header--title">Meus Favoritos</span>
          <span class="drawer-header--clear">Esvaziar</span>
        </div>
      </div>

      <div class="drawer-content">
        <SelectedMovies
          imgHeight="50px"
          :hasLine="false"
          :hasButton="false"
          :hasTitle="false"
          :hasTotal="false"
        />
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import SelectedMovies from '../checkout/SelectedMovies.vue'
export default {
  components: {
    SelectedMovies
  },

  props: {
    openDrawer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      drawerRight: true
    }
  },

  watch: {
    openDrawer() {
      console.log('hello')
      this.drawerRight = !this.drawerRight
      console.log(this.drawerRight)
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

  &-header {
    display: flex;

    &--title {
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
