module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
                alias: {
                    '@utils': './src/utils',
                    '@views': './src/views',
                    '@assets': './src/assets',
                    '@routes': './src/routes',
                    '@services': './src/services',
                    '@interfaces': './src/interfaces',
                    '@components': './src/components'
                }
            }
        ]
    ]
};
