import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    jsx: false,
    semi: true,
    quotes: "double",
  },
  vue: true,
  unocss: true,
  rules: {
    "vue/max-attributes-per-line": ["error", { singleline: 3, multiline: 1 }],
  },
});
