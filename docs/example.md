---
theme: ../
title: "Haya テーマ完全ガイド"
subtitle: "開発者向けプレゼンテーションテーマ"
author: "Yusuke Hayashi"
date: "2024年12月11日"
---

# Haya テーマ完全ガイド

**開発者のための洗練されたSlidevテーマ**

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    レイアウトガイドを見る <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---
layout: cover
title: "Cover レイアウト"
subtitle: "プレゼンテーションの表紙ページ"
author: "山田太郎"
date: "2024年12月"
---

## Cover レイアウトの特徴

- **大きなタイトル**: 6xlサイズで印象的な表示
- **点線装飾**: タイトル下に自動調整される点線
- **作者情報**: author と date を下部に表示

---
title: "Cover レイアウト使用方法"
---

# Cover レイアウト使用方法

```yaml
---
layout: cover
title: "あなたのタイトル"
subtitle: "サブタイトル"
author: "作者名"
date: "2024年12月"
---

# メインコンテンツ

ここにMarkdownコンテンツを記述できます。
```

### ポイント
- **layout: cover** を指定することで表紙レイアウトが適用されます
- タイトルは自動的に大きく表示されます

---
layout: section-intro
title: "Section Intro レイアウト"
section: "01"
subtitle: "各章の導入ページで使用"
topics: 
  - "章番号表示"
  - "中央寄せデザイン"
  - "トピックタグ"
  - "装飾ライン"
---

## Section Intro レイアウトの特徴

**大きな章番号**、**中央寄せタイトル**、**章の概要**、**トピックタグ**を美しく表示

---
title: "Section Intro レイアウト使用方法"
---

# Section Intro レイアウト使用方法

```yaml
---
layout: section-intro
title: "章タイトル"
section: "01"
subtitle: "章の説明"
topics: 
  - "トピック1"
  - "トピック2"
---
```

### 対応フロントマター
- `title`: 章タイトル（必須）
- `section`: 章番号（オプション）
- `subtitle` または `description`: 章の説明（オプション）

---
title: "Default レイアウト"
---

# Default レイアウト

**通常のコンテンツページ**に使用する基本レイアウトです

## 特徴

- **ヘッダー付き**: ページタイトルとロゴを表示
- **点線装飾**: ヘッダータイトル下に点線
- **シンプル**: コンテンツに集中できる構成

### 対応フロントマター
- `title`: ページタイトル（必須）
- `logo`: ロゴ画像のパス（オプション）

---
title: "Default レイアウト使用方法"
---

# Default レイアウト使用方法

```yaml
---
title: "ページタイトル"
logo: "/path/to/logo.png"  # オプション
---

# 見出し

通常のMarkdownコンテンツをここに記述します。
```

### ポイント
- **title** は必須項目です
- **logo** でヘッダーにロゴを表示できます

---
layout: two-pane
title: "Two Pane レイアウト"
---

# Before/After 比較

## 旧システムの課題

### 技術スタック
- **Frontend**: jQuery + Bootstrap
- **Backend**: PHP 7.4
- **Database**: MySQL 5.7

### パフォーマンス
- 初回読み込み: **3.8秒**
- ページ遷移: **1.2秒**

### 開発・運用の問題
- コードの可読性が低い
- テストカバレッジ不足

::right::

# 新システムの改善

## モダンな技術スタック

### 技術構成
- **Frontend**: Vue.js + TypeScript
- **Backend**: Node.js + Fastify
- **Database**: PostgreSQL + Redis

### パフォーマンス向上
- 初回読み込み: **0.9秒** ⚡
- ページ遷移: **0.3秒** ⚡

### 開発・運用の改善
- 型安全性による品質向上
- 90%以上のテストカバレッジ

---
title: "Two Pane レイアウトの特徴"
---

# Two Pane レイアウトの特徴

## 💡 効果的な使用場面

<div class="grid grid-cols-2 gap-6">

<div>

### 比較・対照
- Before/After
- 新旧システム比較
- 競合製品との差別化

</div>

<div>

### 詳細説明
- 概要と詳細
- 理論と実践
- 問題と解決策

</div>

</div>

## レイアウト特徴
- **2分割**: 左右50%ずつの均等分割
- **区切り線**: 中央に縦の区切り線
- **独立スクロール**: 左右それぞれ独立してスクロール可能

---
title: "Two Pane レイアウト使用方法"
---

# Two Pane レイアウト使用方法

```yaml
---
layout: two-pane
title: "比較タイトル"
---

# 左側のコンテンツ
::right::
# 右側のコンテンツ
```

**`::right::`** で右ペインに切り替えます

---
layout: section-intro
title: "実践的な活用例"
section: "02"
subtitle: "各レイアウトを組み合わせた効果的なプレゼンテーション"
topics:
  - "プロジェクト企画"
  - "技術選定"
  - "実装戦略"
  - "成果報告"
---

## このセクションでは

実際のプロジェクトを例に、各レイアウトを効果的に組み合わせる方法を紹介します。

---
title: "プロジェクト概要"
---

# 🚀 新ECサイト開発プロジェクト

**2025年Q2までに次世代ECプラットフォームをローンチ**

### KPI設定
- 💰 売上目標: **月商5,000万円**
- 📈 コンバージョン率: **3.5%以上**
- ⚡ ページ読み込み速度: **1秒以内**

### 現在の進捗状況

| フェーズ | 進捗率 | 担当チーム |
|---------|-------|-----------|
| 要件定義 | ✅ **100%** | PdM, UX |
| 設計 | ✅ **100%** | アーキテクト |
| 開発 | 🟡 **60%** | エンジニア |

---
layout: section-intro
title: "コンポーネント活用例"
section: "03"
subtitle: "CardGrid、InfoCard、StatCardを使った実践的なサンプル"
topics:
  - "CardGrid レイアウト"
  - "InfoCard 情報表示"
  - "StatCard 数値表示"
  - "組み合わせ活用"
---

## このセクションでは

Hayaテーマに含まれる**3つのコンポーネント**を使った実践的なサンプルを紹介します。

---
title: "プロジェクト成果サマリー"
---

# 📊 3年間の成長実績

<CardGrid :cols="3">
  <StatCard color="blue" value="¥250万" label="1期目売上" note="コンサル100%" />
  <StatCard color="green" value="¥2,520万" label="2期目売上" note="コンサル48% + SaaS52%" />
  <StatCard color="purple" value="¥7,440万" label="3期目売上" note="コンサル16% + SaaS84%" />
</CardGrid>

<CardGrid :cols="4" :gap="3" class="mt-4">
  <StatCard color="indigo" value="120%" label="成長率" note="前年比" />
  <StatCard color="emerald" value="95%" label="顧客満足度" note="NPS調査" />
  <StatCard color="orange" value="15社" label="新規顧客" note="今期獲得" />
  <StatCard color="rose" value="3.2倍" label="チーム拡大" note="エンジニア数" />
</CardGrid>

### 成果のポイント
- **継続的な成長**: 3年間で売上30倍の急成長を実現
- **事業多角化**: コンサルティングからSaaS事業への転換成功

---
title: "技術スタック比較"
---

# 🔧 Before/After 技術選定

<CardGrid :cols="2">
  <InfoCard color="red" title="🚨 旧システムの課題" :items="[
      'レガシーPHP 5.6での開発',
      'jQuery中心のフロントエンド',
      'MySQL 5.7の性能限界',
      '手動デプロイによる運用負荷'
  ]"/>
  <InfoCard color="green" title="✨ 新システムの改善" :items="[
      'TypeScript + Node.js採用',
      'Vue.js 3 + Composition API',
      'PostgreSQL + Redis構成',
      'CI/CD自動化による効率化'
  ]"/>
</CardGrid>

## パフォーマンス改善結果

<CardGrid :cols="3">
  <StatCard color="blue" value="75%" label="読み込み速度向上" note="3.8秒 → 0.9秒" />
  <StatCard color="green" value="60%" label="メモリ使用量削減" note="512MB → 256MB" />
  <StatCard color="purple" value="80%" label="開発効率向上" note="型安全性による" />
</CardGrid>

---
title: "チーム体制と役割分担"
---

# 👥 開発チーム構成

<CardGrid :cols="2">
  <InfoCard color="blue" title="🎨 フロントエンドチーム" :items="[
      '<strong>リードエンジニア</strong>: 山田太郎',
      '<strong>UIデザイナー</strong>: 佐藤花子',
      '<strong>フロントエンド開発</strong>: 田中次郎',
      '<strong>モバイル担当</strong>: 鈴木三郎'
  ]"/>
  <InfoCard color="green" title="⚙️ バックエンドチーム" :items="[
      '<strong>アーキテクト</strong>: 伊藤五郎',
      '<strong>API開発</strong>: 渡辺六郎',
      '<strong>データベース</strong>: 中村七子',
      '<strong>インフラ</strong>: 小林八郎'
  ]"/>
</CardGrid>

## プロジェクト管理・品質保証

<CardGrid :cols="3">
  <InfoCard color="purple" title="📋 プロジェクト管理" :items="[
      'プロダクトマネージャー',
      'スクラムマスター'
  ]"/>
  <InfoCard color="orange" title="🔍 品質保証" :items="[
      'QAエンジニア',
      'テスト設計者'
  ]"/>
  <InfoCard color="teal" title="🎯 UX/UI" :items="[
      'UXデザイナー',
      'UIデザイナー'
  ]"/>
</CardGrid>

---
title: "マーケティング戦略と成果"
---

# 📈 マーケティング施策の効果

<CardGrid :cols="4">
  <StatCard color="blue" value="2,500" label="SEO流入" note="月間ユニーク" />
  <StatCard color="green" value="1,800" label="SNS経由" note="Twitter/LinkedIn" />
  <StatCard color="purple" value="950" label="広告経由" note="Google/Facebook" />
  <StatCard color="orange" value="650" label="直接流入" note="ブランド認知" />
</CardGrid>

<CardGrid :cols="3" class="mt-8">
  <StatCard color="rose" value="320%" label="マーケティングROI" note="投資対効果" />
  <StatCard color="cyan" value="4.2%" label="コンバージョン率" note="リード→商談" />
  <StatCard color="amber" value="¥180万" label="顧客獲得単価" note="LTV比25%" />
</CardGrid>

---
title: "コンテンツマーケティング戦略"
---

# 📝 コンテンツマーケティング戦略

<CardGrid :cols="2">
  <InfoCard color="indigo" title="📝 コンテンツ制作" :items="[
      '技術ブログ: 週2回更新',
      'ケーススタディ: 月4本公開',
      'ホワイトペーパー: 四半期1本',
      'ウェビナー: 月1回開催'
  ]"/>
  <InfoCard color="emerald" title="🎯 ターゲティング" :items="[
      'CTO・技術責任者層',
      'スタートアップ創業者',
      'DX推進担当者',
      'システム導入検討企業'
  ]"/>
</CardGrid>

### 成果指標
- **月間PV**: 25,000回（前年比180%）
- **リード獲得**: 月平均120件
- **エンゲージメント率**: 8.5%

---
title: "CardGrid コンポーネント"
---

# 🧩 CardGrid - レイアウトコンポーネント

**グリッドレイアウトで複数のカードを整列表示**

```vue
<CardGrid :cols="3" :gap="4">
  <!-- ここに子コンポーネントを配置 -->
</CardGrid>
```

### プロパティ
- `cols`: カラム数（2, 3, 4など）
- `gap`: 間隔（Tailwind CSS gap値）

---
title: "InfoCard コンポーネント"
---

# 📋 InfoCard - 情報表示カード

**タイトル付きのリスト表示に最適**

```vue
<InfoCard 
  color="blue" 
  title="🚀 強み" 
  :items="[
    '10年以上の開発経験',
    'フルスタック対応'
  ]"
/>
```

### プロパティ
- `title`: カードタイトル
- `items`: 表示項目の配列
- `color`: カラーテーマ

---
title: "StatCard コンポーネント"
---

# 📊 StatCard - 数値表示カード

**重要な数値・指標の強調表示**

```vue
<StatCard 
  color="green" 
  value="¥2,520万" 
  label="2期目売上" 
/>
```

### プロパティ
- `value`: メイン数値
- `label`: ラベル
- `note`: 補足説明（オプション）
- `color`: カラーテーマ

---
layout: ending
thankYouText: "完成！"
subtitle: "Hayaテーマガイドをご覧いただきありがとうございました"
qaText: "ご質問・ご意見をお聞かせください"
finalMessage: "Happy Presenting! 🚀"
contact:
  email: "haya-theme@example.com"
  github: "slidev-theme-haya"
  twitter: "@slidev_haya"
---

**感謝メッセージ**: thankYouText で大きなタイトル表示  
**Q&Aセクション**: qaText でカスタマイズ可能  
**連絡先情報**: contact オブジェクトで各種SNS・連絡先を表示

---
title: "Ending レイアウト使用方法"
---

# Ending レイアウト使用方法

## 基本的な記述方法

```yaml
---
layout: ending
thankYouText: "ありがとうございました"
subtitle: "プレゼンテーションタイトル"
qaText: "ご質問をお受けします"
finalMessage: "お疲れ様でした！"
contact:
  email: "your-email@example.com"
  github: "your-github"
  twitter: "@your-twitter"
---
```

### ポイント
- **thankYouText** で感謝メッセージをカスタマイズ
- **contact** で連絡先情報を表示
- **hideQA: true** でQ&Aセクションを非表示可能

---
title: "Ending レイアウト対応フロントマター"
---

# Ending レイアウト対応フロントマター

### 基本設定
- `thankYouText`: メインタイトル（デフォルト: "Thank You"）
- `subtitle`: サブタイトル（デフォルト: "ありがとうございました"）
- `qaText`: Q&Aセクションのテキスト
- `finalMessage`: 最終メッセージ（オプション）

### 連絡先情報（contact オブジェクト）
- `email`: メールアドレス
- `github`: GitHubユーザー名
- `twitter`: Twitterハンドル

### 完了！
これで全レイアウトの使い方をマスターできました 🎉

