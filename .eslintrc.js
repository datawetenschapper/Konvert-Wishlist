module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],
    // add your custom rules here
    rules: {

        "vue/no-reserved-component-names": ["error", {
            "disallowVueBuiltInComponents": false,
            "disallowVue3BuiltInComponents": false
        }]
    }
}