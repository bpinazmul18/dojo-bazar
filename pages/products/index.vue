<template>
  <div class="py-10">
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

definePageMeta({
  layout: "products"
});

const { data: products} = await useFetch(`${runtimeConfig.public.apiBase}/products`)

useHead({
  title: 'Dojo Bazar | Products'
})

</script>
