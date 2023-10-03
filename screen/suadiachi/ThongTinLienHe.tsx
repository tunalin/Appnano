import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ThongTinLienHe = ({ navigation }: any) => {
    const [selectedType, setSelectedType] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('thongtinkhachhang')}>
                    <Image source={require('../../imgtien/back.png')} style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.text}>Sửa địa chỉ</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.text1}>Thông tin liên hệ</Text>
            </View>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Text style={styles.text2}>Họ và tên</Text>
                        <Text style={styles.text3}>Huyền Lê</Text>
                    </View>
                </View>
            </View>
            <View style={styles.view1}>
                <View style={styles.view4}>
                    <View style={styles.view3}>
                        <Text style={styles.text2}>Số điện thoại</Text>
                        <Text style={styles.text3}>+8483902</Text>
                    </View>
                </View>
            </View>
            <View style={styles.view}>
                <Text style={styles.text1}>Địa chỉ giao hàng</Text>
            </View>
            <View style={styles.view5}>
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.text4}>Thành phố Hồ Chí Minh</Text>
                    <Text style={styles.text5}>Quận Bình Thạnh</Text>
                    <Text style={styles.text5}>Phường 11</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('diachiphuongxa')}>
                    <Text style={styles.text6}>Sửa</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.view6} />
            <Text style={styles.text7}>28E Tăng Bạt Hổ</Text>
            <View style={styles.view7}>
                <Text style={styles.text1}>Loại địa chỉ</Text>
            </View>
            <View style={styles.view8}>
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
            <View style={styles.view9}>
                <Text style={styles.text8}>Cập nhật</Text>
            </View>
            <View style={styles.view10}>
                <Text style={styles.text9}>Xóa khách hàng</Text>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{ flex: 1, width: 414, height: 869, backgroundColor: '#fff',right:7 },
    top:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    text:{ fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 120 },
    view:{ marginTop: 30, marginLeft: 20 },
    text1:{ fontSize: 16, fontWeight: '500', color: '#000' },
    view1:{ marginTop: 15, marginLeft: 20 },
    view2:{ width: 370, height: 78, borderRadius: 7, borderColor: '#c2c2c2', borderWidth: 1 },
    view3:{ paddingVertical: 15, marginLeft: 15 },
    text2:{ fontSize: 13, fontWeight: '500', color: '#000' },
    text3:{ fontSize: 16, fontWeight: '400', color: '#000', paddingTop: 8 },
    view4:{ width: 370, height: 78, borderRadius: 7, borderColor: '#4598D9', borderWidth: 1 },
    view5:{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginVertical: 15 },
    text4:{ fontSize: 13, fontWeight: '400', color: '#000' },
    text5:{ fontSize: 13, fontWeight: '400', color: '#000', paddingTop: 10 },
    text6:{ fontSize: 13, fontWeight: '500', color: '#005aa9' },
    view6:{ width: 362, justifyContent: 'center', alignItems: 'center', borderColor: '#c4c4c2', borderWidth: 0.3, marginLeft: 20 },
    text7:{ fontSize: 13, fontWeight: '400', color: '#000', paddingTop: 10, marginLeft: 45 },
    view7:{ marginTop: 20, marginLeft: 20 },
    view8:{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15 },
    touch:{
        width: 109,
        height: 33,
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#005aa9',
        justifyContent: 'center',
        alignItems: 'center',

    },
    touch1:{
        width: 109,
        height: 33,
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',

    },
    view9:{ width: 326, height: 52, borderRadius: 7, backgroundColor: '#005aa9', justifyContent: 'center', alignItems: 'center', marginHorizontal: 43, marginTop: 25 },
    text8:{ fontSize: 16, fontWeight: '500', color: '#fff' },
    view10:{ width: 326, height: 52, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginHorizontal: 43, marginTop: 10, borderColor: 'red', borderWidth: 0.5 },
    text9:{ fontSize: 16, fontWeight: '500', color: 'red' }
})  

export default ThongTinLienHe