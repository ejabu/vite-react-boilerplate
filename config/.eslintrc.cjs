module.exports ={
    "env": {
        "browser": true,
        "es2022": true,
        // "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        // {
        //     "files": ['**/*.cjs'],
        //     "env": {
        //         "node": true,
        //     },
        // },
    ],
    "ignorePatterns": [
        "dist",
        // ".eslintrc.cjs",
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
        'react/react-in-jsx-scope': 0,
        'react/no-deprecated': 0,
    }
};
