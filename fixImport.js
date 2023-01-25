import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

export const fixImport = (src) => {
  const ast = esprima.parseModule(src);
  let flg = false;
  //console.log(JSON.stringify(ast, null, 2));
  for (const st of ast.body) {
    if (st.type == "ImportDeclaration") {
      const name = st.source.value;
      if (!name.endsWith(".js")) {
        if (name.endsWith(".ts")) {
          st.source.value.replace(".ts", ".js");
        } else {
          st.source.value += ".js";
        }
        st.source.raw = `"${st.source.value}"`;
        flg = true;
      }
    }
  }
  if (!flg) { // no changes
    return src;
  }
  // https://github.com/code4fukui/escodegen/blob/es/escodegen.js
  const options = { format: { quotes: "double" } };
  const res = escodegen.generate(ast, options);
  return res;
};
