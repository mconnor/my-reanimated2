// @generated: @expo/next-adapter@2.1.71
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter')

const withTM = require('next-transpile-modules')([
    'react-native-reanimated',
    'react-native',
    'react-native-web',
])
module.exports = withExpo(
    withTM({
        future: {
            webpack5: false,
        },
        projectRoot: __dirname,
    })
)
