import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {
        id: '1',
        hinh: require('../../imgtien/user3.png'),
        ten: 'Lê Thành Tín',


    },
    {
        id: '2',
        hinh: require('../../imgtien/user2.png'),
        ten: 'Lê Như Ngọc Mai',


    },
    {
        id: '3',
        hinh: require('../../imgtien/user2.png'),
        ten: 'Lê Như Ngọc Mai',


    },
    {
        id: '4',
        hinh: require('../../imgtien/user2.png'),
        ten: 'Lê Như Ngọc Mai',


    },
    {
        id: '5',
        hinh: require('../../imgtien/user2.png'),
        ten: 'Lê Như Ngọc Mai',


    },
    {
        id: '6',
        hinh: require('../../imgtien/user2.png'),
        ten: 'Lê Như Ngọc Mai',


    },
];

const ThongTinChuyenTien = ({ navigation }: any) => {
    const renderItem = ({ item }: any) => (
        <View style={{ alignItems: 'center' }}>
            <Image source={item.hinh} style={styles.hinh} />
            <View style={{ marginLeft: 15 }}>
                <Text style={styles.textten}>{item.ten}</Text>
            </View>
        </View>

    );
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('chuyentien')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.textct}>Chuyển tiền</Text>
            </View>
            <View style={styles.huong}>
                <Text style={styles.text}>Người nhận</Text>
            </View>
            <View style={{ marginTop: 15 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    horizontal={true}
                />
            </View>
            <View style={styles.huong2}>
                <Text style={styles.text}>Nguồn tiền</Text>
            </View>
            <View style={styles.huong3}>
                <View style={styles.huong4}>
                    <Image source={require('../../imgtien/vitienxanh.png')}
                        style={styles.hinhvi} />
                    <View style={{ marginRight: 160 }}>
                        <Text style={styles.text2}>Ví chính</Text>
                        <Text style={styles.tien}>15,000,000đ</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('vitien2')}>
                        <Text style={styles.texttd}>Thay đổi</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.huong2}>
                <Text style={styles.text}>Chi tiết giao dịch</Text>
            </View>
            <View style={styles.hop}>
                <View style={styles.huong5}>
                    <View style={styles.viewhuong}>
                        <Text style={styles.text3}>Người nhận</Text>
                        <Text style={styles.text2}>Lê Thành Tín</Text>
                    </View>
                    <View style={styles.viewhuong}>
                        <Text style={styles.text3}>Số điện thoại</Text>
                        <Text style={styles.text2}>0984903445</Text>
                    </View>
                    <View style={styles.viewhuong}>
                        <Text style={styles.text3}>Số tiền</Text>
                        <Text style={styles.text2}>2,000,000</Text>
                    </View>
                </View>

            </View>
            <View style={styles.huong6}>
                <Text style={styles.text}>Tổng tiền giao dịch</Text>
                <Text style={styles.text}>2,000,000</Text>
            </View>
            <TouchableOpacity >
                <View style={styles.boxxanh}>
                    <Text style={styles.textxnct}>Xác nhận chuyển tiền</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    hinh: { width: 42, height: 42, marginLeft: 15 },
    textten: { fontSize: 13, fontWeight: '500', color: '#000', width: 68, height: 32, textAlign: 'center' },
    container: { width: '100%', height: 896, },
    top: { flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    textct: { fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 120 },
    huong: { marginHorizontal: 20, marginTop: 20 },
    text: { fontSize: 16, fontWeight: '500', color: '#000' },
    huong2: { marginLeft: 10, marginTop: 15 },
    text2: { fontSize: 16, fontWeight: '400', color: '#000' },
    huong3: { borderRadius: 7, borderWidth: 1, borderColor: '#c2c2c2', width: 382, height: 59, alignItems: 'center', justifyContent: 'center', marginTop: 15, marginLeft: 5},
    huong4: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
    hinhvi: { width: 37, height: 37, marginRight: 20 },
    tien: { fontSize: 13, fontWeight: '400', color: '#000', paddingTop: 5 },
    texttd: { fontSize: 13, fontWeight: '500', color: '#005aa9', marginBottom: 20 },
    hop: { width: 382, height: 128, borderRadius: 7, borderWidth: 1, borderColor: '#c2c2c2', marginHorizontal: 5, marginTop: 15 },
    huong5: { justifyContent: 'space-between', marginHorizontal: 10, padding: 5, marginTop: 5 },
    viewhuong: { flexDirection: 'row', justifyContent: 'space-between', padding: 6 },
    text3: { fontSize: 16, fontWeight: '300', color: '#000' },
    huong6:{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 20 },
    boxxanh:{ backgroundColor: '#005aa9', marginHorizontal: 45, marginTop: 250, width: 326, height: 52, alignItems: 'center', justifyContent: 'center', borderRadius: 7 },
    textxnct:{ fontSize: 16, fontWeight: '500', color: '#fff' }
})

export default ThongTinChuyenTien