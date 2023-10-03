import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const RutTien = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('taikhoan')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.text}>Rút tiền</Text>
            </View>
            <View style={styles.view}>
                <Image source={require('../../imgtien/vitienxanh.png')}
                    style={styles.img} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.text1}>Số dư Ví chính</Text>
                    <Text style={styles.text2}>15,000,000đ</Text>
                </View>
            </View>
            <View style={styles.view1}>

                <Text style={styles.text3}>Nhập số tiền cần rút</Text>
                <Text style={styles.text4}>0đ</Text>
                <View style={styles.view2} />
            </View>

            <View style={styles.view3}>
                <View style={styles.view4}>
                    <Text style={styles.text5}>50 000</Text>
                </View>
                <View style={styles.view5}>
                    <Text style={styles.text5}>500 000</Text>
                </View>
                <View style={styles.view6}>
                    <Text style={styles.text5}>5 000 000</Text>
                </View>
            </View>

            <View style={{right:10}}>
                <View style={styles.view7}>
                    <View style={styles.view8}>
                        <Text style={styles.text3}>Hướng dẫn rút tiền</Text>
                        <Image source={require('../../imgtien/Vector.png')}
                            style={styles.img2} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('lichsuruttien')}>
                    <View style={styles.view9}>
                        <View style={styles.view8}>
                            <Image source={require('../../imgtien/dongho.png')}
                                style={{ width: 24, height: 24 }} />
                            <Text style={styles.text6}>Lịch sử rút tiền</Text>
                            <Image source={require('../../imgtien/Vector.png')}
                                style={styles.img2} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.view10}>
                <Text style={styles.text7}>Tiếp tục</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { width: 414, height: 896, backgroundColor: '#fff' },
    top: { flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    text: { fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 120 },
    view: { flexDirection: 'row', borderRadius: 7, width: 360, height: 59, borderWidth: 0.5, alignItems: 'center', marginTop: 30, marginLeft: 15, borderColor: '#c2c2c2' },
    img: { width: 38, height: 38, marginLeft: 15 },
    text1: { fontSize: 16, fontWeight: '300', color: '#000' },
    text2: { fontSize: 13, fontWeight: '500', color: '#000', marginTop: 6 },
    view1: { alignItems: 'center', justifyContent: 'center', paddingTop: 15 },
    text3: { fontSize: 16, fontWeight: '400', color: '#000' },
    text4: { fontSize: 24, fontWeight: '500', color: '#c2c2c2', paddingTop: 15 },
    view2: { width: 38, borderRadius: 1, borderColor: '#c2c2c2', borderWidth: 1 },
    view3: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 40, marginTop: 20 },
    view4: { width: 80, height: 29, backgroundColor: '#E5EFF6', justifyContent: 'center', alignItems: 'center', borderRadius: 3 },
    text5: { fontSize: 15, fontWeight: '500', color: '#005aa9' },
    view5: { width: 86, height: 28, backgroundColor: '#E5EFF6', justifyContent: 'center', alignItems: 'center', borderRadius: 3 },
    view6: { width: 107, height: 28, backgroundColor: '#E5EFF6', justifyContent: 'center', alignItems: 'center', borderRadius: 3 },
    view7: { width: 366, height: 49, borderRadius: 7, borderWidth: 1, borderColor: '#c2c2c2', paddingTop: 10, marginLeft: 25, marginTop: 40 },
    view8: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 },
    img2: { width: 9, height: 16 },
    view9: { width: 366, height: 49, borderRadius: 7, borderWidth: 1, borderColor: '#c2c2c2', paddingTop: 10, marginLeft: 25, marginTop: 10 },
    text6: { fontSize: 16, fontWeight: '400', color: '#000', marginRight: 180 },
    view10: { backgroundColor: '#005aa9', marginHorizontal: 45, marginTop: 120, width: 326, height: 52, alignItems: 'center', justifyContent: 'center', borderRadius: 7,right:7 },
    text7: { fontSize: 16, fontWeight: '500', color: '#fff' }
})

export default RutTien