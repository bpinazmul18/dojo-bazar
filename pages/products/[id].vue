<template>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

definePageMeta({
  layout: "products"
});

const { id } = useRoute().params;


const { data: product} = await useFetch(`${runtimeConfig.public.apiBase}/products/${id}`)
</script>
