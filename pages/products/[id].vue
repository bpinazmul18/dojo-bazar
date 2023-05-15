<template>
  <div>
    <h2>Product details for {{ id }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eaque
      quod! Quibusdam quo veritatis vitae voluptas at? Nihil, natus aliquam.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products"
});

const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
