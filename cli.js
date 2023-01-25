import { fixImport } from "./fixImport.js";

const src = await Deno.readTextFile(Deno.args[0]);
const dst = fixImport(src);
console.log(dst);
