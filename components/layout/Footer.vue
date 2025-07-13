<template>
  <footer class="absolute inset-x-0 bottom-0 flex justify-between px-4 pb-2 text-sm opacity-70 pointer-events-none">
    <span class="footer-brand">Bet AI Day</span>
    <span class="footer-brand">{{ page }} / {{ total }}</span>
  </footer>
</template>

<script setup lang="ts">
interface FooterProps {
  page: number
  total: number
}

defineProps<FooterProps>()
</script>

<style scoped>
.footer-brand {
  /* ブランド名専用フォント設定 - CSS変数を使用 */
  font-family: var(--slidev-theme-footer-brand-font);
  font-weight: 500;
  letter-spacing: 0.05em;
}
</style>