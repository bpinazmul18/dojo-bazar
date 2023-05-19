<template>
    <div class="flex flex-col justify-between rounded-md bg-white shadow-md h-full text-center p-4">
        <img :src="product.image" :alt="`${product.title} thumb`"/>
        <h4 class="font-bold text-gray-500 truncate my-4">{{ product.title }}</h4>

        <NuxtLink :to="`/products/${product.id}`" class="block bg-[#12b488] px-4 py-3 rounded-md text-sm text-white border border-[#12b488] hover:bg-white hover:text-[#12b488] my-3">
            View Details
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

console.log(product)

</script>
