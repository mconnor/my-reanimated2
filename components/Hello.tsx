/* eslint-disable react/require-default-props */
import React from 'react'
import { View, Text, StyleProp, TextStyle } from 'react-native'

type HelloProp = {
    copyStyle: StyleProp<TextStyle>
    copy?: string
}

export default function Hello({
    copyStyle,
    copy = 'Wzzzzelcome to Expo + Next.js 👋',
}: HelloProp): JSX.Element {
    return (
        <View>
            <Text style={copyStyle}>{copy}</Text>
        </View>
    )
}
