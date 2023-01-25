import * as t from "https://deno.land/std/testing/asserts.ts";
import { fixImport } from "./fixImport.js";

Deno.test("simple", () => {
  t.assertEquals(fixImport(`import some from "./some";`), `import some from "./some.js";`);
});
