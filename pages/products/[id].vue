<template>
  <div>
    <h2>{{  product.title }}</h2>
    <p>
      {{  product.description }}
    </p>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

definePageMeta({
  layout: "products"
});

const { id } = useRoute().params;


const { data: product} = await useFetch(`${runtimeConfig.public.apiBase}/products/${id}`)
console.log({ product })
</script>
