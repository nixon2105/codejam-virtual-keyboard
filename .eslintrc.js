module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
        "extends": [
            "airbnb-base",
            "prettier"
        ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq": 0,
        "no-useless-concat" : 0,
        "no-param-reassign" : 0,
        "prefer-destructuring" : 0,
        "no-const-assign": 0,
        "no-unused-expressions": 0,
    }
};
