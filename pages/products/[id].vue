<template>
  <div>
    <Head>
      <Title>Dojo Bazar | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
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
if (!product.value) throw createError({ statusCode: 404, message: 'Product not found!'})

</script>
