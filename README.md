# slidev-theme-betai2025haya

LayerX Bet AI day 2025用のSlidevテーマとプレゼンテーションスライドです。

## 概要

このリポジトリは、[LayerX Bet AI day](https://layerx.co.jp/events/2025/bet-ai-day/) のライトニングトーク「AIによるスライド作成」のために作成されました。

- 🎨 **カスタムSlidevテーマ**: 日本語に最適化されたクリーンなデザイン
- 📝 **実演用スライド**: AI（Claude Code）との協働でスライド作成を実現する方法を紹介
- 🚀 **実例**: このスライド自体もClaude Codeで作成

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# スライドのビルド
pnpm build

# PDF出力
pnpm export

# PowerPoint形式で出力
pnpm export --format pptx
```

## 内容

- `docs/slide.md` - LayerX Bet AI dayで発表するスライド
- `docs/plan.md` - LTの計画書
- `example.md` - テーマのデモスライド
- `layouts/` - カスタムレイアウト（cover, default, section-intro, two-pane, ending）
- `components/` - 再利用可能なVueコンポーネント
- `styles/` - テーマのスタイル定義

## スライドの内容

「AIによるスライド作成」では以下を紹介：
- 開発者だけが享受していたAI革命の恩恵
- PowerPoint（バイナリ）からMarkdown（テキスト）への変換戦略
- Claude Code + Slidevによる実践的なスライド作成方法

## ライセンス

MIT
