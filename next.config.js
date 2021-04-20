const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
});

module.exports = withNextra({
    webpack(config) {
        config.plugins.pop();
        return config;
    }
});