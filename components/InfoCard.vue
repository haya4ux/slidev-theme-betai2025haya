<template>
  <div :class="cardClasses">
    <h3 :class="titleClasses">
      <slot name="title">{{ title }}</slot>
    </h3>
    <ul :class="listClasses">
      <slot>
        <li v-for="item in items" :key="item" v-html="item" />
      </slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title : { type: String, default: '' },
  items : { type: Array as () => string[], default: () => [] },
  color : { type: String, default: 'blue' },
  listStyle : { type: String, default: 'none' },
})

const cardClasses = computed(() => {
  const colorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    red: 'bg-red-50',
    indigo: 'bg-indigo-50',
    emerald: 'bg-emerald-50',
    orange: 'bg-orange-50',
    rose: 'bg-rose-50',
    cyan: 'bg-cyan-50',
    amber: 'bg-amber-50',
    teal: 'bg-teal-50',
    pink: 'bg-pink-50',
    lime: 'bg-lime-50',
    yellow: 'bg-yellow-50'
  }[props.color] || 'bg-blue-50'
  
  return `p-4 pt-2 rounded-lg ${colorClasses}`
})

const titleClasses = computed(() => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
    indigo: 'text-indigo-600',
    emerald: 'text-emerald-600',
    orange: 'text-orange-600',
    rose: 'text-rose-600',
    cyan: 'text-cyan-600',
    amber: 'text-amber-600',
    teal: 'text-teal-600',
    pink: 'text-pink-600',
    lime: 'text-lime-600',
    yellow: 'text-yellow-600'
  }[props.color] || 'text-blue-600'
  
  return `font-bold mb-2 ${colorClasses}`
})

const listClasses = computed(() => {
  const styleClasses = {
    none: 'list-none',
    dot: 'list-disc list-inside',
  }[props.listStyle] || 'list-none'
  
  return `space-y-1 ${styleClasses}`
})
</script>

<!-- 
Markdown での使い方サンプル
---
title: "強みと3年ビジョン"
---

<CardGrid :cols="2">
  <InfoCard color="blue" title="🚀 強み" listStyle="dot" :items="[
      '10年以上の開発・マネジメント経験',
      '国立天文台やSIEなど多様な実績',
      'フルスタック個人開発による高速対応',
      '要件定義〜運用をワンストップ'
  ]"/>
  <InfoCard color="green" title="🎯 3年ビジョン" :items="[
      'コンサル年商1,200万円で安定基盤',
      'SaaS年商6,240万円で成長エンジン',
      'SME向けAIパートナーとして国内トップへ'
  ]"/>
</CardGrid>
-->