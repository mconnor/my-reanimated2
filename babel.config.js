// @generated: @expo/next-adapter@2.1.71
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps


module.exports = {
    presets: [
        ['airbnb'], [ "next/babel"],
        [
            'babel-preset-expo',
            {
                lazyImports: true,
            },
        ],
    ],
    plugins: [
        [
            '@babel/plugin-proposal-class-properties',
            {
                looseClasses: true,
            },
        ],
        ['react-native-reanimated/plugin'],
    ],
}
