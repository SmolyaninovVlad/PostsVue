<template>
  <div class="list">
     <div class="list__header">
      <span class="list__header-title"> <h2>Favorite posts</h2> </span>
    </div>
    <ul v-if="favorites.length > 0">
      <li v-for="(item, index) of favorites" :key="item.id || index" class="list__item">
        <div class="list__left-side">
          <span class="list__item list__item-id">{{item.id}}</span>
        </div>
        <div class="list__right-side">
          <div class="list__item list__item-title">
            <span class="list__item-text">{{item.title}}</span>
            <div class="list__item-action" @click="favotiteRemoveHandler(item)">
              <span class="btn">-</span>
            </div>
          </div>
          <div class="list__item list__item-body">
            <span>{{item.body}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="no-data">
      <span class="no-data__text"> List is empty </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FavoritesPosts',
  computed: {
    ...mapGetters(['favorites']),
  },
  methods: {
    ...mapActions(['favotiteRemoveHandler']),
  },

};
</script>

<style scoped lang="scss">
</style>
