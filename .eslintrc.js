module.exports = {
    "env": {
        "node": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error", 4],
        "camelcase": ["error"],
        'no-console': 'off',
    }
};
