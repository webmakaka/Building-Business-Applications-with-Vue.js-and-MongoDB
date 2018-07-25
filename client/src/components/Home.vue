<template>
  <div>
      <h2>Home</h2>
      <transactions></transactions>
      <edit-transactions></edit-transactions>
    </div>
</template>

<script>
import Transactions from './Transactions.vue';
import EditTransactions from './EditTransactions.vue';

export default {
  components: {
    Transactions,
    EditTransactions
  }
};
</script>

<style>
</style>
