<template>
  <BaseLayout>
    <!-- メインコンテンツ（章導入スタイル） -->
    <div class="h-full w-full flex flex-col pb-8 relative">
      
      <!-- スクロール可能なコンテンツエリア -->
      <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded relative z-10">
        <!-- 中央コンテンツ -->
        <div class="min-h-full flex flex-col justify-center text-center max-w-4xl mx-auto px-8 py-6">
          
          <!-- 章番号 -->
          <div v-if="$frontmatter.section" class="mb-6">
            <span class="text-6xl font-bold text-slate-700">
              {{ $frontmatter.section }}
            </span>
          </div>

          <!-- 章タイトル -->
          <div class="flex justify-center">
            <h1 class="text-4xl font-bold mb-6 leading-tight text-slate-800 relative title-dotted-line-center inline-block">
              {{ $frontmatter.title || '新しい章' }}
            </h1>
          </div>
          
          <!-- 章の概要/サブタイトル -->
          <p v-if="$frontmatter.subtitle || $frontmatter.description" 
             class="text-xl mb-8 font-light leading-relaxed text-slate-600 max-w-3xl mx-auto">
            {{ $frontmatter.subtitle || $frontmatter.description }}
          </p>

          <!-- スライドコンテンツ（概要など） -->
          <div class="text-base text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
            <slot />
          </div>

          <!-- 装飾的なライン -->
          <div class="mb-6 flex justify-center">
            <div class="w-24 h-0.5 bg-slate-400 rounded-full"></div>
          </div>
          
          <!-- 進行状況ヒント -->
          <div v-if="$frontmatter.topics && getTopicsList.length > 0" class="mb-4">
            <p class="text-sm text-slate-500 mb-3">この章で扱う内容:</p>
            <div class="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              <span v-for="topic in getTopicsList" :key="topic"
                    class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                {{ topic }}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseLayout from '../components/layout/BaseLayout.vue'

// トピックリストを配列として取得
const getTopicsList = computed(() => {
  const topics = $frontmatter?.topics
  if (!topics) return []
  if (Array.isArray(topics)) return topics
  if (typeof topics === 'string') return topics.split(',').map(t => t.trim())
  return []
})
</script> 