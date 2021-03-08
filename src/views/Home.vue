<template>
  <div>
    <h1>Home</h1>
    <div class="inline-container">
      <div class="inline-container__left-side">
        <PostsList/>
      </div>
      <div class="inline-container__right-side">
        <FavoritesPosts/>
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue';
import FavoritesPosts from '@/components/FavoritesPosts.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    PostsList,
    FavoritesPosts,
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
  async mounted() {
    await this.fetchPosts();
  },

};
</script>
