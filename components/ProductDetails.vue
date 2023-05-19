<template>
    <div>
        <div class="rounded-md bg-white shadow-md p-4">
            <div class="grid grid-cols-2 gap-10">
                <div class="p-7">
                    <img :src="product.image" :alt="`${product.title} thumb`" loading="lazy"/>
                </div>
                <div>
                    <h2 class="font-bold text-4xl text-gray-500 truncate my-4">{{ product.title }}</h2>
                    <p class="font-normal text-gray-600 text-xl my-4">Price - ${{ product.price }}</p>

                    <h3 class="font-bold text-2xl text-black border-b-2 my-4 pb-2">Description: </h3>

                    <p class="font-normal text-gray-700 truncate my-4">{{product.description }}</p>

                    <button class="flex items-center font-normal text-base text-white leading-4 transition bg-emerald-500 border border-emerald-500 hover:bg-white hover:text-emerald-500 py-2 px-4 rounded">
                        <i class="material-icons mr-2">add_shopping_cart</i>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

</script>
