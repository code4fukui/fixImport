import { fixImport } from "./fixImport.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";

const fix = async (fn) => {
  const src = await Deno.readTextFile(fn);
  const dst = fixImport(src);
  await Deno.writeTextFile(fn, dst);  
};

if (Deno.args.length == 0) {
  if (!confirm("fix all js files?")) {
    Deno.exit(1);
  }
  const fns = await dir2array("./");
  for (const fn of fns) {
    if (!fn.endsWith(".js") && !fn.endsWith(".ts") && !fn.endsWith(".mjs")) {
      continue;
    }
    try {
      await fix(fn);
    } catch (e) {
      console.log(e);
      console.log("skip ", fn);
    }
  }
} else {
  await fix(Deno.args[0]);
}
