import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "bundle.js",
    format: "iife",
  },
  plugins: [nodeResolve(), commonjs()],
};
