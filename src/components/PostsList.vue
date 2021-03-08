<template>
  <div class="list">
    <div class="list__header">
      <span class="list__header-title"> <h2>Posts</h2> </span>
      <div class="list__header-filter">
        <input type="text" v-model="titleFilter" placeholder="Enter title"/>
      </div>
    </div>
    <ul v-if="posts.length > 0 && filteredPosts.length > 0">
      <li v-for="(item, index) of titleFilter ? filteredPosts : posts"
          :key="item.id || index"
          class="list__item">
        <div class="list__left-side">
          <span class="list__item list__item-id">{{item.id}}</span>
        </div>
        <div class="list__right-side">
          <div class="list__item list__item-title">
            <span class="list__item-text">{{item.title}}</span>
            <div class="list__item-action" @click="favotiteAddHandler(item)">
              <span class="btn">+</span>
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PostsList',
  computed: {
    ...mapGetters(['posts']),
    filteredPosts() {
      const result = this.posts.filter((element) => element.title.indexOf(this.titleFilter) >= 0);
      const sortedResult = result.sort(this.sortPosts);
      return sortedResult;
    },
  },
  methods: {
    ...mapActions(['favotiteAddHandler']),
    sortPosts(element1, element2) {
      return (element1.title.match(new RegExp(this.titleFilter, 'g')) || []).length
             - (element2.title.match(new RegExp(this.titleFilter, 'g')) || []).length;
    },
  },
  data() {
    return {
      titleFilter: '',
    };
  },
};
</script>

<style scoped lang="scss">

</style>
