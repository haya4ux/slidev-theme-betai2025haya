<template>
  <div class="slide-frame relative w-full h-full border-14 border-slate-300" :class="frameClass">
    
    <!-- 背景スロット（coverのグラデーション用） -->
    <slot name="background" />
    
    <!-- メインコンテンツエリア -->
    <div class="relative h-full flex flex-col" :class="contentClass">
      
      <!-- ヘッダースロット -->
      <slot name="header" />
      
      <!-- メインコンテンツ -->
      <slot />
      
      <!-- フッター（共通） -->
      <Footer :page="$nav.currentPage" :total="$nav.total" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer.vue'

interface BaseLayoutProps {
  frameClass?: string
  contentClass?: string
}

defineProps<BaseLayoutProps>()
</script>

<style scoped>
.slide-frame { 
  /* decorative outer border handled here */ 
}
</style> 