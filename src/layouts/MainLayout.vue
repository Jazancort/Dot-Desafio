<template>
  <q-layout class="shadow-2" view="lHh Lpr lFf">
    <!-- Header da aplicação -->
    <q-header class="header">
      <q-toolbar class="header--content">
        <!-- IMAGEM DA LOGO -->
        <div class="header--logo">
          <img style="height: 50px" src="dot+.png" />
        </div>

        <div class="header--input">
          <q-input
            v-model="text"
            label="Pesquisar"
            placeholder="Pesquisar"
            bg-color="white"
            class="header--input__big"
            outlined
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="header--buttons">
          <q-btn icon="favorite" size="16px" dense flat>
            <q-badge class="header--buttons-badge" rounded floating>4</q-badge>
          </q-btn>

          <q-btn icon="shopping_cart" size="16px" class="q-ml-lg" dense flat>
            <q-badge class="header--buttons-badge" rounded floating>4</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      text: null
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .q-badge--floating {
    right: -6px;
  }
}

.header {
  background-color: #d1efec;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &--logo {
    margin-left: 40px;
    margin-right: -20px;
  }

  &--input {
    background-color: #d1efec;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &__big {
      width: 500px;
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
</style>
