import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const ThanhToanThanhCong = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Thanh toán thành công</Text>
            <Image source={require('../../imgdonhang/xexanh.png')}
                style={styles.img} />
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <View style={styles.view}>
                    <Text style={styles.text1}>Đến trang chủ</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{ width: 414, height: 896, justifyContent: 'center', alignItems: 'center', flex: 1 },
    text:{ fontSize: 20, fontWeight: '500', color: '#000', padding: 30 },
    img:{ width: 95, height: 95 },
    view:{ width: 326, height: 52, borderRadius: 7, backgroundColor: '#005aa9', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    text1:{ fontSize: 16, fontWeight: '500', color: '#fff' }
})

export default ThanhToanThanhCong