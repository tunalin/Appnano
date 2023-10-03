import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ThemDiaChi = ({ navigation }: any) => {
    const [selectedType, setSelectedType] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('thongtinkhachhang')}>
                    <Image source={require('../../imgtien/back.png')} style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.text}>Thêm địa chỉ</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text1}>Thông tin liên hệ</Text>
            </View>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Text style={styles.text2}>Họ và tên</Text>

                    </View>
                </View>
            </View>
            <View style={styles.view4}>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Text style={styles.text1}>Số điện thoại</Text>

                    </View>
                </View>
            </View>
            <View style={styles.view}>
                <Text style={styles.text1}>Địa chỉ giao hàng</Text>
            </View>

            <View style={styles.view5}>
                <Text style={styles.text3}>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</Text>
                <Image source={require('../../imgtien/Vector.png')}
                    style={{}} />
            </View>

            <View style={styles.view6} />
            <View style={styles.view7}>
                <Text style={styles.text3}>Số nhà, tên đường</Text>
            </View>


            <View style={styles.view8}>
                <Text style={styles.text1}>Loại địa chỉ</Text>
            </View>
            <View style={styles.view9}>
                <TouchableOpacity
                    onPress={() => setSelectedType('congty')}
                    style={styles.touch}
                >
                    <Text style={{ fontSize: 13, fontWeight: '400', color: selectedType === 'congty' ? '#005aa9' : '#000' }}>Công ty</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedType('nha')}
                    style={styles.touch1}
                >
                    <Text style={{ fontSize: 13, fontWeight: '400', color: selectedType === 'nha' ? '#005aa9' : '#000' }}>Nhà</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedType('khac')}
                    style={styles.touch1}
                >
                    <Text style={{ fontSize: 13, fontWeight: '400', color: selectedType === 'khac' ? '#005aa9' : '#000' }}>Khác</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view10}>
                <Text style={styles.text4}>Cập nhật</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', height: 869, backgroundColor: '#fff' ,marginRight:20},
    top: { flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    text: { fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 110 },
    text1: { fontSize: 16, fontWeight: '500', color: '#000' },
    text2: { fontSize: 13, fontWeight: '500', color: '#000' },
    text3: { fontSize: 13, fontWeight: '400', color: '#c4c4c4' },
    view: { marginTop: 30, marginLeft: 20 },
    view1: { marginTop: 15, marginLeft: 10 },
    view2: { width: 370, height: 78, borderRadius: 7, borderColor: '#c2c2c2', borderWidth: 1 },
    view3: { paddingVertical: 15, marginLeft: 15 },
    view4: { marginTop: 10, marginLeft: 10},
    view5: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, marginTop: 15 },
    view6: { width: 342, justifyContent: 'center', alignItems: 'center', borderColor: '#c4c4c2', borderWidth: 0.3, marginLeft: 40, marginTop: 15 },
    view7: { marginTop: 15, marginLeft: 40 },
    view8: { marginTop: 20, marginLeft: 20 },
    view9: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15 },
    touch: {
        width: 109,
        height: 33,
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#005aa9',
        justifyContent: 'center',
        alignItems: 'center',

    },
    touch1: {
        width: 109,
        height: 33,
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',

    },
    view10: { width: 326, height: 52, borderRadius: 7, backgroundColor: '#005aa9', justifyContent: 'center', alignItems: 'center', marginHorizontal: 35 ,marginTop:35},
    text4: { fontSize: 16, fontWeight: '500', color: '#fff' }
})

export default ThemDiaChi