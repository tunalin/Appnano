import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const DonHangTrong = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../imgdonhang/sad.png')}
                style={styles.img} />
            <Text style={styles.text}>Bạn chưa có đơn hàng</Text>

            <TouchableOpacity >
                <View style={styles.view}>
                    <Text style={styles.text1}>Tạo đơn ngay</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{ width: 414, height: 896, justifyContent: 'center', alignItems: 'center', flex: 1 },
    img:{ width: 95, height: 95 },
    text:{ fontSize: 20, fontWeight: '500', color: '#000', padding: 30 },
    view:{ width: 326, height: 52, borderRadius: 7, backgroundColor: '#005aa9', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    text1:{ fontSize: 16, fontWeight: '500', color: '#fff' }
})

export default DonHangTrong