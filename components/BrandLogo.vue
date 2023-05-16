<template>
  <NuxtLink
    to="/"
    :class="`font-semibold text-lg ${color} leading-6 tracking-wider`"
  >
    DOJO Bazar
  </NuxtLink>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "text-emerald-500"
    }
  }
};
</script>
