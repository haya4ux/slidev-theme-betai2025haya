# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

LayerX Bet AI day 2025用のカスタムSlidevテーマとプレゼンテーションスライドです。日本語に最適化されたクリーンなデザインで、AI（Claude Code）との協働でスライド作成を実現する方法を紹介するプロジェクトです。

## 開発コマンド

```bash
# 依存関係のインストール（pnpmを使用）
pnpm install

# 開発サーバーの起動（ホットリロード対応）
pnpm dev

# スライドのビルド
pnpm build

# PDF出力
pnpm export

# PowerPoint形式で出力
pnpm export --format pptx

# PNG形式でスクリーンショット出力
pnpm screenshot
```

## アーキテクチャ

### ファイル構成
- **`docs/slide.md`** - メインプレゼンテーションファイル。LayerX Bet AI dayで発表するスライド
- **`docs/plan.md`** - LTの計画書。構成や時間配分が記載
- **`example.md`** - テーマのデモスライド
- **`layouts/`** - カスタムレイアウトコンポーネント（cover, default, section-intro, two-pane, ending）
- **`components/`** - 再利用可能なVueコンポーネント（CardGrid, InfoCard, StatCard等）
- **`styles/`** - テーマのスタイル定義（index.ts, warter.css, layout.css）

### テーマ設定
- package.jsonの`slidev`セクションでデフォルト設定を定義
- フォント: Nunito Sans（sans）、Fira Code（mono）
- アスペクト比: 16:9
- トランジション: slide

### スライド作成時の注意
- スライドのフロントマターで`theme: ../`を指定してローカルテーマを使用
- 各スライドには`---`で区切りを入れる
- スピーカーノートは`<!-- -->`内に記載