# fixImport

JavaScriptおよびTypeScriptファイル内の相対インポートパスを自動的に修正するDenoユーティリティです。ブラウザ環境やNode.jsのES Modulesでしばしば必要となる、ローカルモジュールのインポートに対する適切な `.js` 拡張子の付与を確実に行います。

## 機能

- **`.js` 拡張子の追加:** 拡張子のない相対インポートパスに `.js` を自動的に追加します（例: `from "./utils"` が `from "./utils.js"` になります）。
- **`.ts` 拡張子の置換:** インポートパス内の `.ts` 拡張子を `.js` に変換します（例: `from "./types.ts"` が `from "./types.js"` になります）。
- **複雑なインポートの処理:** 単一行および複数行のインポート文を正しく解析して修正します。
- **一括操作用CLI:** 単一のファイルを修正したり、ディレクトリ内のすべての `.js`、`.ts`、`.mjs` ファイルを再帰的に修正したりするためのコマンドラインツールを提供します。
- **引用符スタイルの保持:** インポート文の元の引用符スタイル（シングルクォートまたはダブルクォート）を維持します。

## インストール（コマンドラインツール）

Denoを使用してCLIをグローバルにインストールできます。

```sh
deno install -n fiximport --allow-read --allow-write https://code4fukui.github.io/fixImport/cli.js
```

## コマンドラインでの使用方法

インストール後、`fiximport` コマンドを使用できるようになります。

### カレントディレクトリ内のすべてのファイルを修正

引数なしでコマンドを実行すると、カレントディレクトリとすべてのサブディレクトリをスキャンします。`.js`、`.ts`、`.mjs` ファイルを変更する前に確認プロンプトが表示されます。

```sh
fiximport
```

### 特定のファイルを修正

単一のファイルを修正するには、ファイルパスを引数として指定します。

```sh
fiximport path/to/your/file.js
```

## プログラムからの使用方法

Denoプロジェクト内で `fixImport` を関数として使用することもできます。

```javascript
import { fixImport } from "https://code4fukui.github.io/fixImport/fixImport.js";

const brokenCode = 'import { some } from "./some";\nimport { other } from "./other.ts";';
const fixedCode = fixImport(brokenCode);

console.log(fixedCode);
// Output:
// import { some } from "./some.js";
// import { other } from "./other.js";
```

## 依存関係

- [esprima](https://github.com/code4fukui/esprima/)
- [escodegen](https://github.com/code4fukui/escodegen/)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
