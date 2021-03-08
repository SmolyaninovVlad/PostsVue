<template>
  <div>
    <h1>History</h1>
    <HistoryList :type="$route.query.actions"/>
  </div>
</template>

<script>
import HistoryList from '@/components/HistoryList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'History',
  components: {
    HistoryList,
  },
  computed: {
    ...mapGetters[''],
  },
};
</script>
