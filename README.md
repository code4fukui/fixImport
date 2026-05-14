# fixImport

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Deno utility to automatically correct relative import paths in JavaScript and TypeScript files. It ensures that local module imports include the appropriate `.js` extension, which is often required in browser environments or for ES Modules in Node.js.

## Features

- **Adds `.js` Extension:** Automatically appends `.js` to relative import paths that lack an extension (e.g., `from "./utils"` becomes `from "./utils.js"`).
- **Replaces `.ts` Extension:** Converts `.ts` extensions in import paths to `.js` (e.g., `from "./types.ts"` becomes `from "./types.js"`).
- **Handles Complex Imports:** Correctly parses and fixes both single-line and multi-line import statements.
- **CLI for Bulk Operations:** Provides a command-line tool to fix a single file or recursively fix all `.js`, `.ts`, and `.mjs` files in a directory.
- **Preserves Quote Style:** Maintains the original quote style (single or double) of the import statement.

## Installation (Command-Line Tool)

You can install the CLI globally using Deno:

```sh
deno install -n fiximport --allow-read --allow-write https://code4fukui.github.io/fixImport/cli.js
```

## Command-Line Usage

After installation, you can use the `fiximport` command.

### Fix all files in the current directory

Run the command without arguments to scan the current directory and all subdirectories. It will prompt for confirmation before modifying any `.js`, `.ts`, and `.mjs` files.

```sh
fiximport
```

### Fix a specific file

Provide a file path as an argument to fix a single file.

```sh
fiximport path/to/your/file.js
```

## Programmatic Usage

You can also use `fixImport` as a function within your Deno projects.

```javascript
import { fixImport } from "https://code4fukui.github.io/fixImport/fixImport.js";

const brokenCode = 'import { some } from "./some";\nimport { other } from "./other.ts";';
const fixedCode = fixImport(brokenCode);

console.log(fixedCode);
// Output:
// import { some } from "./some.js";
// import { other } from "./other.js";
```

## Dependencies

- [esprima](https://github.com/code4fukui/esprima/)
- [escodegen](https://github.com/code4fukui/escodegen/)

## License

MIT License — see [LICENSE](LICENSE).