module.exports = cfg => {
    const dev = cfg.env === 'development';

    return {
        parser: 'postcss-scss',
        map: dev ? { inline: true } : false,
        plugins: [
            require('precss')({
                lookup: { disable: true },
                properties: {
                    // Чтобы работали CSS custom properties, а не заменялись на статическое значение.
                    disable: true,
                    preserve: true,
                },
            }),
            require('postcss-import'),
            require('postcss-nested'),
            require('autoprefixer'),
            dev ? null : require('cssnano')
        ],
    }
}