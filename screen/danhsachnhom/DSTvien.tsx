import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {
        id: '1',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Khưu Thành Phúc',
        dt: '+84 839 020 007'
    },
    {
        id: '2',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Lê Thành Tín',
        dt: '+84 839 020 007'
    },
    {
        id: '3',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Lê Minh Quân',
        dt: '+84 839 020 007'
    },
    {
        id: '4',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Trần Thiện Lâm',
        dt: '+84 839 020 007'
    },
    {
        id: '5',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Mạc Kim Long',
        dt: '+84 839 020 007'
    },
    {
        id: '6',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Đặng Minh Triết',
        dt: '+84 839 020 007'
    },
    {
        id: '7',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Nguyễn Thị Thùy Linh',
        dt: '+84 839 020 007'
    },
    {
        id: '8',
        hinh: require('../../imgtaikhoan/thanhvien.png'),
        ten: 'Nguyễn Thị Hết',
        dt: '+84 839 020 007'
    },
];


const DSTvien = ({ navigation }: any) => {
    const render = ({ item }: any) => {
        return (
            <View style={styles.render}>
                <Image source={item.hinh} style={styles.hinh} />
                <View style={{ flex: 1, marginHorizontal: 15 }}>
                    <Text style={styles.rendertt}>{item.ten}</Text>
                    <Text style={styles.rendertdt}>{item.dt}</Text>
                </View>
                <Image source={require('../../imgtien/Vector.png')} style={{ marginRight: 15 }} />
            </View>
        )

    }
    return (
        <View style={styles.container}>
            <View style={styles.huong}>
                <TouchableOpacity onPress={() => navigation.navigate('taikhoan')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.textdn}>Đội nhóm</Text>
            </View>

            <View style={styles.boxsr}>
                <Text style={styles.timkiem}>Tìm kiếm thành viên</Text>
                <Image source={require('../../imgtien/ei_search.png')} />
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={render}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    render: { borderRadius: 10, width: 382, height: 75, borderWidth: 0.5, marginTop: 12, marginLeft: 15, flexDirection: 'row', alignItems: 'center', borderColor: '#c2c2c2' },
    hinh: { width: 20, height: 20, marginLeft: 15, marginBottom: 30 },
    rendertt: { fontSize: 16, fontWeight: '500', color: '#000', marginBottom: 10 },
    rendertdt: { fontSize: 16, fontWeight: '500', color: '#c3c3c3' },
    container: { width: 414, height: 896, backgroundColor: '#fff' },
    huong: { flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    textdn: { fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 110 },
    boxsr: { flexDirection: 'row', borderRadius: 7, width: 382, height: 46, borderWidth: 0.5, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginLeft: 15, marginTop: 25 },
    timkiem: { fontSize: 16, fontWeight: '400', color: '#c2c2c2' }
})

export default DSTvien