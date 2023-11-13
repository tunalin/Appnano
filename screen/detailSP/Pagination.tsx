import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')

const Pagination = ({ imgUrls, scrollX }: any) => {
    return (
        <View style={styles.container}>
            {imgUrls.map((item: any, index: any) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View style={[styles.dot, { width: dotWidth }]}
                        key={index} />
                );
            })}
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#ccc',
        margin: 5
    }
})