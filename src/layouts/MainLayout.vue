<template>
  <q-layout class="shadow-2" view="lHh Lpr lFf">
    <!-- Header da aplicação -->
    <q-header class="header">
      <q-toolbar class="header--content">
        <!-- IMAGEM DA LOGO -->
        <div class="header--logo">
          <img src="dot+.png" class="header--logo-img" />
        </div>

        <div class="header--input">
          <q-input
            v-model="text"
            label="Pesquisar"
            bg-color="white"
            color="blue-grey-6"
            class="header--input__big"
            outlined
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="header--buttons">
          <q-btn icon="favorite" size="16px" dense flat @click="openDrawer = !openDrawer">
            <q-badge class="header--buttons-badge" rounded floating>4</q-badge>
          </q-btn>

          <q-btn icon="shopping_cart" size="16px" class="q-ml-lg" dense flat>
            <q-badge class="header--buttons-badge" rounded floating>4</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <Favorites :openDrawer="openDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Favorites from '../components/drawer/Favorites.vue'
export default {
  name: 'MainLayout',
  components: {
    Favorites
  },

  data() {
    return {
      text: null,
      openDrawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #d1efec;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &--logo {
    margin-left: 40px;
    margin-right: -20px;

    &-img {
      height: 50px;
    }
  }

  &--input {
    background-color: #d1efec;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &__big {
      width: 100%;
      max-width: 500px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Adicionando sombra */
    }
  }

  &--buttons {
    margin-right: 40px;

    &-badge {
      padding: 5px 5px 3px 5px;
      color: black;
      background-color: #fdf3d3;
    }
  }
}

@media (max-width: 600px) {
  .header {
    &--logo {
      margin-left: 20px;
      margin-right: -10px;
    }

    &--input {
      display: none;
    }

    &--buttons {
      margin-right: 20px;
    }
  }
}
</style>
