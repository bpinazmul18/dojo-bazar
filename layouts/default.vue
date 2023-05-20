<template>
  <Header />
  <main class="container mx-auto px-4 py-10">
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
