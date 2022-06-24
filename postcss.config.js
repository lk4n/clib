module.exports = (cfg) => {
  const prod = cfg.env === 'production';

  return {
    syntax: 'postcss-scss',
    map: prod ? false : { inline: true },
    plugins: [
      //   require('precss')({
      //     lookup: { disable: true },
      //     properties: {
      //       // Чтобы работали CSS custom properties, а не заменялись на статическое значение.
      //       disable: true,
      //       preserve: true,
      //     },
      //   }),
      require('postcss-advanced-variables'),
      require('postcss-at-rules-variables'),
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-sort-media-queries'),
      require('postcss-strip-inline-comments'),
      require('autoprefixer'),
      prod ? require('cssnano') : null,
    ],
  };
};
