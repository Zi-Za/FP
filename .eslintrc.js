module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-var-requires": 0,
        '@typescript-eslint/no-non-null-assertion': 'off'
    }
}
