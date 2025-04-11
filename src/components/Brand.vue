<template>
  <section>
    <h2>{{ brandName }}</h2>
    <p>Welcome to the {{ brandName }} page! Here’s what you need to know about us.</p>
  </section>
</template>

<script>
export default {
  props: ["brandName"],
};
</script>

<style scoped>
section {
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
}
</style>
