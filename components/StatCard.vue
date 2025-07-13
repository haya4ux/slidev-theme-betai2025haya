<template>
  <div :class="cardClasses">
    <div :class="valueClasses">{{ value }}</div>
    <div class="text-gray-600">{{ label }}</div>
    <div v-if="note" class="text-xs text-gray-500 mt-1">{{ note }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  value: String,          // 表示する数値
  label: String,          // ラベル
  note : String,          // 任意の補足
  color: { type: String, default: 'blue' } // blue / green / purple …
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
  
  return `p-3 rounded-lg text-center ${colorClasses}`
})

const valueClasses = computed(() => {
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
  
  return `text-2xl font-bold ${colorClasses}`
})
</script>


<!-- 
Markdown での使い方サンプル
---
title: "3年間サマリー"
---

<CardGrid :cols="3">
  <StatCard color="blue" value="¥250万" label="1期目売上" note="コンサル100%" />
  <StatCard color="green" value="¥2,520万" label="2期目売上" note="コンサル48% + SaaS52%" />
  <StatCard color="purple" value="¥7,440万" label="3期目売上" note="コンサル16% + SaaS84%" />
</CardGrid> 
-->
