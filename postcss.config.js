const sortMediaQueries = require('postcss-sort-media-queries');

module.exports = {
    plugins: [
        "postcss-preset-env",
        require('postcss-combine-media-query'),
        sortMediaQueries({
            sort: 'desktop-first'
        }),
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }),
    ],
};