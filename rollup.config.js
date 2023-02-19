// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import run from "@rollup/plugin-run";
import { uglify } from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

const isDev = process.env.NODE_ENV !== "production";

export default {
  input: "src/server.ts",
  output: {
    file: "dist/app.js",
    format: "cjs",
    sourcemap: false,
  },
  plugins: [
    json(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    uglify(),
    terser(),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    isDev && run(),
  ],
};
