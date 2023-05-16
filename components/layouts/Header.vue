<template>
  <header class="shadow-sm bg-white border-b border-emerald-500">
    <nav class="container mx-auto p-4 flex items-center justify-between">
      <BrandLogo />
      <ul class="flex items-center justify-between gap-6">
        <li>
          <NuxtLink
            to="/"
            class="font-normal text-base text-slate-500 leading-4 hover:border-b border-emerald-500 py-2 px-1 transition"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/products"
            class="font-normal text-base text-slate-500 leading-4 hover:border-b border-emerald-500 py-2 px-1 transition"
            >Products</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="font-normal text-base text-slate-500 leading-4 hover:border-b border-emerald-500 py-2 px-1 transition"
            >About</NuxtLink
          >
        </li>
      </ul>

      <ul class="flex items-center gap-2">
        <li>
          <NuxtLink
            to="/login"
            class="font-normal text-base text-white leading-4 transition bg-emerald-500 border border-emerald-500 hover:bg-white hover:text-emerald-500 py-2 px-4 rounded"
            >Login</NuxtLink
          >
        </li>
        /
        <li>
          <NuxtLink
            to="/register"
            class="font-normal text-base text-emerald-500 leading-4 transition bg-white border border-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-4 rounded"
            >Register</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BrandLogo from "~/components/BrandLogo.vue";

export default {
  components: {
    BrandLogo
  }
};
</script>
