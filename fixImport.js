import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

export const fixImport = (src) => {
  const ast = esprima.parseModule(src);
  console.log(JSON.stringify(ast, null, 2));
  for (const st of ast.body) {
    if (st.type == "ImportDeclaration") {
      const name = st.source.value;
      if (!name.endsWith(".js")) {
        st.source.value += ".js";
        st.source.raw = `"${st.source.value}"`;
      } else if (!name.endsWith(".ts")) {
        st.source.value.replace(".ts", ".js");
        st.source.raw = `"${st.source.value}"`;
      }
    }
  }
  const res = escodegen.generate(ast);
  return res;
};
