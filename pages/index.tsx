// @generated: @expo/next-adapter@2.1.71
import React from 'react'
import { StyleSheet, View } from 'react-native'
import dynamic from 'next/dynamic'
import Hello from 'components/Hello'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
})

const ImportedAnim = dynamic(
    () => import('components/AnimatedStyleUpdateExample'),
    {
        ssr: false,
    }
)

export default function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <Hello copyStyle={styles.text} copy="It's Thursday" />
            <ImportedAnim />
        </View>
    )
}
