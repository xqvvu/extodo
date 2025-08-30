import antfu from "@antfu/eslint-config";

export const base = antfu({
  stylistic: {
    jsx: false,
    semi: true,
    quotes: "double",
  },
  ignores: [
    "**/jsconfig.*",
    "**/tsconfig.*",
  ],
  rules: {
    "antfu/curly": "off",
    "antfu/if-newline": "off",
  },
});
