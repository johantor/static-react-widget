module.exports = {
    extends: [
        "typescript",
        "typescript/react",
        "plugin:jest/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: [
        "@typescript-eslint",
        "react",
        "jest",
        "react-hooks",
        "jsx-a11y",
        "unused-imports",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "no-console": ["error", { allow: ["warn", "error"] }],
        "import/no-cycle": "warn",
        "import/order": [
            "warn",
            {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                groups: ["builtin", "external", "internal", "sibling", "index"],
                pathGroups: [
                    {
                        pattern:
                            "{pages,blocks,components,modals,store,style,types,icons,hooks,utils,mirage}/**",
                        group: "internal",
                    },
                ],
                "newlines-between": "always",
            },
        ],
        "import/no-unresolved": [
            "error",
            { ignore: ["miragejs/-types", "miragejs/orm/schema"] },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: {
                "react/prop-types": "off", // we use typescript
            },
        },
    ],
    env: {
        "jest/globals": true,
        browser: true,
        node: true,
        es6: true,
    },
};
