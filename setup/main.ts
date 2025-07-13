import { defineAppSetup } from '@slidev/types'

/**
 * フォント読み込み設定
 * 日本語特化とセリフ系フォントをサポート
 */
const FONT_URLS = [
  // 基本フォント
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap',
  
  // 日本語フォント
  'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;400;500;700&display=swap',
  'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap',
  'https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap',
  
  // セリフ系フォント（フッターブランド用）
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap'
] as const

/**
 * Google Fontsの動的読み込み
 */
function loadFonts(urls: readonly string[]): void {
  for (const url of urls) {
    const link = document.createElement('link')
    link.href = url
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }
}

export default defineAppSetup(({ app, router }) => {
  loadFonts(FONT_URLS)
}) 