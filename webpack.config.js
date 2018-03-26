const path = require('path');

module.exports = ({ file }) => {
    const publicPath = `dist/${file}/`;
    return {
        entry: `./${file}.js`,
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, publicPath),
            pathinfo: true,
            publicPath,
        }
    }
};
