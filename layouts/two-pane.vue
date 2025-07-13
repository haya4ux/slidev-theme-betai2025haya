<template>
  <BaseLayout>
    <!-- ヘッダー -->
    <template #header>
      <div class="p-4">
        <Header :title="$frontmatter.title || 'スライド'" :logo="$frontmatter.logo" />
      </div>
    </template>
    
    <!-- 2ペインメインコンテンツ -->
    <div class="h-full w-full flex pt-8 pb-16">
      
      <!-- 左ペイン -->
      <div class="w-1/2 px-6 pr-8">
        <div class="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded">
          <slot />
        </div>
      </div>
      
      <!-- 中央の区切り線 -->
      <div class="w-px bg-slate-300 my-4"></div>
      
      <!-- 右ペイン -->
      <div class="w-1/2 px-6 pl-8">
        <div class="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded">
          <slot name="right" />
        </div>
      </div>
      
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '../components/layout/BaseLayout.vue'
import Header from '../components/layout/Header.vue'
</script> 