<template>
  <div :class="[gridClasses, $attrs.class]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  cols: { type: [Number, String], default: 3 },   // 2,3,4…
  gap : { type: [Number, String], default: 4 },   // Tailwind gap-x
  mt  : { type: [Number, String], default: 0 },   // Tailwind mt-x
})

const gridClasses = computed(() => {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2', 
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  }[props.cols] || 'grid-cols-3'
  
  const gapClass = {
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3', 
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8'
  }[props.gap] || 'gap-4'
  
  const mtClass = {
    0: 'mt-0',
    1: 'mt-1',
    2: 'mt-2',
    3: 'mt-3', 
    4: 'mt-4',
    5: 'mt-5',
    6: 'mt-6',
    8: 'mt-8',
    10: 'mt-10',
    12: 'mt-12',
    16: 'mt-16',
    20: 'mt-20'
  }[props.mt] || 'mt-0'
  
  return `grid ${colsClass} ${gapClass} ${mtClass}`
})
</script>


<!-- 
Markdown での使い方サンプル
---
title: "強みと3年ビジョン"
---

<CardGrid :cols="2" :mt="8">
  <InfoCard color="blue" title="🚀 強み" :items="[
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
<!-- 
Markdown での使い方サンプル
---
title: "3年間サマリー"
---

<CardGrid :cols="3" :mt="6">
  <StatCard color="blue" value="¥250万" label="1期目売上" note="コンサル100%" />
  <StatCard color="green" value="¥2,520万" label="2期目売上" note="コンサル48% + SaaS52%" />
  <StatCard color="purple" value="¥7,440万" label="3期目売上" note="コンサル16% + SaaS84%" />
</CardGrid> 
-->
