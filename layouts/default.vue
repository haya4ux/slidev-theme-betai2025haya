<template>
  <BaseLayout>
    <!-- ヘッダー -->
    <template #header>
      <div class="p-4">
        <Header :title="$frontmatter.title || 'スライド'" :logo="$frontmatter.logo" />
      </div>
    </template>
    
    <!-- メインコンテンツ -->
    <div class="h-full w-full flex flex-col pt-8 pb-16">
      <div class="flex-1 overflow-y-auto px-10 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded">
        <slot />
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '../components/layout/BaseLayout.vue'
import Header from '../components/layout/Header.vue'
</script>