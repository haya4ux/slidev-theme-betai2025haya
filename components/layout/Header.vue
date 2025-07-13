<template>
    <header class="absolute inset-x-0 top-0 flex justify-between p-4 pointer-events-none">
      <div class="inline-block">
        <h2 class="font-semibold text-xl m-0 relative title-dotted-line-small">
          {{ title }}
        </h2>
      </div>
      <img v-if="logo" :src="logo" alt="logo" class="h-10 w-auto object-contain">
    </header>
  </template>
  <script setup lang="ts">
  interface HeaderProps {
    title?: string
    logo?: string
  }

  defineProps<HeaderProps>()
  </script>