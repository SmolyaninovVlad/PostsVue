<template>
  <div id="app">
    <div class="menu">
      <div class="menu__content">
        <router-link to="/" class="menu__content-item">Главная</router-link>
        <div class="submenu">
          <router-link to="/history" class="menu__content-item">История</router-link>
          <ul class="submenu__list">
            <li>
              <router-link :to="{ name: 'History', query: { actions: 'added' }}"
                class="menu__content-item"> История добавлений </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'History', query: { actions: 'removed' }}"
                class="menu__content-item"> История удалений </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

.menu {
    width: 100%;
    height: 60px;
    background: #eeeeee;
    display: flex;
    position: sticky;
    top: 0;
    box-shadow: 1px 1px 2px #00000029;
    z-index: 11;
    &__content {
      margin: auto;
      display: flex;
      gap: 1rem;
      &-item {
        font-size: 26px;
      }
    }
}
.submenu {
  &:hover {
    .submenu__list {
      max-height: 200px;
    }
  }
  &__list {
    position: absolute;
    max-height: 0;
    overflow: hidden;
    transition: .3s;
    background: #eeeeeef0;
    box-shadow: 1px 1px 1px #00000047;
    .menu__content-item {
      font-size: 16px;
      padding: 1rem;
    }
  }
}

</style>
