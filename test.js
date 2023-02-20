import * as t from "https://deno.land/std/testing/asserts.ts";
import { fixImport } from "./fixImport.js";

Deno.test("simple", () => {
  t.assertEquals(fixImport(`import some from "./some";`), `import some from "./some.js";`);
});

Deno.test("multi line", () => {
  t.assertEquals(fixImport(`import {\n  some,\n  some2\n} from "./some";`), `import {\n  some,\n  some2\n} from "./some.js";`);
});

Deno.test("no changes", () => {
  t.assertEquals(fixImport(`export {\n  some,\n  some2\n} from "./some";`), `export {\n  some,\n  some2\n} from "./some";`);
});
