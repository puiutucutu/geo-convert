import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const babelPlugin = [
  babel({
    exclude: "node_modules/**" // only transpile our source code
  })
];

module.exports = [
  {
    input: "src/index.js",
    output: {
      file: pkg.main,
      format: "umd",
      name: "geo-convert"
    },
    plugins: [resolve(), json(), ...babelPlugin, commonjs(), terser()]
  }
];
