<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex items-center justify-between">
      <NuxtLink to="/"> DOJO Bazar </NuxtLink>

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
    </nav>
  </header>
</template>
