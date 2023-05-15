<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script>
import Header from "~/components/layouts/Header.vue";
import Footer from "~/components/layouts/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
