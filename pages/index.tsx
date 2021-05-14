// @generated: @expo/next-adapter@2.1.71
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import dynamic from 'next/dynamic'

// import AnimatedStyleUpdateExample from '../components/AnimatedStyleUpdateExample'
import Test from '../components/Test'

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

const AnimatedStyleUpdateExample = dynamic(
    () => import('../components/AnimatedStyleUpdateExample'),
    {
        ssr: false,
    }
)

export default function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <Test />
            <AnimatedStyleUpdateExample />
            <Text style={styles.text}>Wzzzzelcome to Expo + Next.js 👋</Text>
        </View>
    )
}
