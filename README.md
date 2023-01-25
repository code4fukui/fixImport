# fixImport

fix import statements in JavaScript

- "./some" → "./some.js"
- "./some.ts" → "./some.ts"

## usage

```JavaScript
import { fixImport } from "https://code4fukui.github.io/fixImport/fixImport.js";

console.log(fixImport(`import { some } from "./some";`));
```

## install

```sh
deno install -n fiximport --allow-read --allow-write https://code4fukui.github.io/fixImport/cli.js
```

```sh
fiximport
```

```sh
fixport some.js
```

## dependencies

- [esprima](https://github.com/code4fukui/esprima/)
- [escodegen](https://github.com/code4fukui/escodegen/)
