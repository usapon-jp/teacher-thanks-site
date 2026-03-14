# 先生寄せ書きサイト

静的な GitHub Pages 向けサイトです。`index.html` `messages.html` `cards.html` `album.html` をそのまま公開できます。

## 公開手順

1. GitHub で新しい空リポジトリを作る
2. この `teacher-thanks-site` フォルダの中身を、そのリポジトリのルートへ入れる
3. GitHub に push する
4. GitHub の `Settings > Pages` で `Deploy from a branch` を選ぶ
5. `main` ブランチの `/(root)` を選んで保存する
6. 数分後に `https://<GitHubユーザー名>.github.io/<repo名>/` で開く
7. その URL を QR コード化して配る

## 画像追加

- 寄せ書き: `images/messages/` に画像を置き、`scripts/data.js` の `messages` 配列へ1行追加
- カード: `images/cards/full/` と `images/cards/thumbs/` に同名ファイルを置き、`scripts/data.js` の `cards` 配列へ1行追加
- 写真: `images/photos/full/` と `images/photos/thumbs/` に同名ファイルを置き、`scripts/data.js` の `photos` 配列へ1行追加

## データ形式

```js
{ thumb: 'images/photos/thumbs/photo85.jpg', src: 'images/photos/full/photo85.jpg', width: 1200, height: 900, alt: '思い出写真85' }
```
