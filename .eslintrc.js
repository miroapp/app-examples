const sharedRules = {
  "no-inner-declarations": "off",
};

module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: { ...sharedRules },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
      ],
      rules: { ...sharedRules },
    },
  ],
};
