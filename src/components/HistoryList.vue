<template>
  <div class="list">
     <div class="list__header">
      <span class="list__header-title"> <h2>History list</h2> </span>
    </div>
    <ul v-if="filteredActions.length > 0">
      <li v-for="(item, index) of filteredActions" :key="index" class="list__item">
        <div class="list__left-side">
          <span class="list__item list__item-id">{{++index}}</span>
        </div>
        <div class="list__right-side">
          <div class="list__item list__item-title">
            <span class="list__item-text">
              Action: <span :class="item.type">{{item.type}}</span>
            </span>
            <span class="list__item-text date">{{item.updated_at}}</span>
          </div>
          <div class="list__item list__item-body">
            <span>Post title: {{item.post_title}}</span>
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
import { mapGetters } from 'vuex';

export default {
  name: 'HistoryList',
  props: {
    type: String,
  },
  computed: {
    ...mapGetters({
      actions: 'actions/actions',
    }),
    filteredActions() {
      let actions = [...this.actions];

      if (this.type) {
        actions = actions.filter((element) => element.type === this.type);
      }

      return actions;
    },
  },

};
</script>

<style scoped lang="scss">
.list__item-text {
  text-transform: capitalize;
  .added {
    color: green;
  }
  .removed {
    color: red;
  }
}
.list__item-title {
  padding-right: 1rem;
}
.date {
  text-align: right;
}
</style>
