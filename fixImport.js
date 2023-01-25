import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

export const fixImportLine = (src) => {
  const ast = esprima.parseModule(src);
  let flg = false;
  let doublequote = true;
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
        doublequote = st.source.raw[0] == '"';
        st.source.raw = `"${st.source.value}$"`;
        flg = true;
      }
    }
  }
  if (!flg) { // no changes
    return src;
  }
  // https://github.com/code4fukui/escodegen/blob/es/escodegen.js
  const options = { format: { quotes: doublequote ? "double" : "single" } };
  const res = escodegen.generate(ast, options);
  return res;
};

export const fixImport = (src) => {
  const ss = src.split("\n");
  let flg = false;
  for (let i = 0; i < ss.length; i++) {
    const s = ss[i];
    if (s.startsWith("import ")) {
      const s2 = fixImportLine(s);
      if (s != s2) {
        flg = true;
        ss[i] = s2;
      }
    }
  }
  return ss.join("\n");
};
