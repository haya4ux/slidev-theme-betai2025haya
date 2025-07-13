<template>
  <BaseLayout>
    <div class="h-full w-full flex flex-col pb-8">
      <div class="flex-1 overflow-y-auto px-12 pt-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded">
        
        <div class="inline-block">
          <h1 class="text-6xl font-bold mb-8 leading-tight relative title-dotted-line">
            {{ $frontmatter.title || 'プレゼンテーション' }}
          </h1>
        </div>
        
        <p v-if="$frontmatter.subtitle" 
           class="text-2xl mb-8 font-light leading-relaxed text-slate-600">
          {{ $frontmatter.subtitle }}
        </p>

        <div class="text-lg mb-8 text-slate-600 leading-relaxed font-medium">
          <slot />
        </div>

        <div v-if="$frontmatter.author || $frontmatter.date" class="mt-12 pt-6 border-t-2 border-slate-200">
          <div class="flex justify-between items-center text-slate-500 font-medium">
            <div v-if="$frontmatter.author" class="text-base">
              {{ $frontmatter.author }}
            </div>
            <div v-if="$frontmatter.date" class="text-base">
              {{ $frontmatter.date }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '../components/layout/BaseLayout.vue'
</script>
