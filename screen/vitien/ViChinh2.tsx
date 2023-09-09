import { View, Text, TouchableOpacity, Image, FlatList,StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {
        id: '1',
        hinh: require('../../imgtaikhoan/vitien.png'),
        ten: 'Nạp tiền'
    },
    {
        id: '2',
        hinh: require('../../imgtaikhoan/ruttien.png'),
        ten: 'Rút tiền'
    },
    {
        id: '3',
        hinh: require('../../imgtaikhoan/chuyentienngang.png'),
        ten: 'Chuyển tiền'
    },
    {
        id: '4',
        hinh: require('../../imgtaikhoan/dongho.png'),
        ten: 'Lịch sử'
    },
]

const renderItem = ({ item, index }: any) => {
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <Image source={item.hinh} style={{ width: 23, height: 23 }} />
            </View>
            <Text style={styles.text}>{item.ten}</Text>
            <Image source={require('../../imgtien/Vector.png')} />
        </View>
    )
}

const ViChinh2 = ({ navigation }: any) => {



    return (
        <View style={styles.container}>
            <View style={styles.view2}>
                <TouchableOpacity onPress={() => navigation.navigate('thongtinchuyentien')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.text1}>Ví chính</Text>
            </View>
            <View style={styles.view3}>
                <View style={{ marginLeft: 50, marginBottom: 50 }}>
                    <Text style={styles.text2}>Số dư khả dụng</Text>
                    <Text style={styles.text3}>1,770,000 VNĐ</Text>
                </View>
                <Image source={require('../../imgtaikhoan/bichtien.png')}
                    style={{ width: 210, height: 166 }} />
            </View>
            <View style={styles.view4}>
                <View style={styles.view5} />
                <View style={{ marginHorizontal: 30 }}>
                    <Text style={styles.text4}>Chức năng ví</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}

                    />
                </View>

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    view:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, padding: 10 },
    view1:{ width: 41, height: 41, borderRadius: 10, backgroundColor: '#f3faff', justifyContent: 'center', alignItems: 'center' },
    text:{ fontSize: 15, fontWeight: '500', color: '#101014', marginRight:170 },
    container:{ width: 414, height: 896, backgroundColor: '#fff' },
    view2:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    view3:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
    view4:{ width: 414, height: 580, borderRadius: 55, elevation: 6, position: 'absolute', top: 260, backgroundColor: '#fff' },
    view5:{ borderRadius: 3, backgroundColor: '#d9d9d9', width: 39, height: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, marginVertical: 30, marginLeft: 190 },
    text1:{ fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 140 },
    text2:{ fontSize: 16, fontWeight: '400', color: '#8b8787' },
    text3:{ fontSize: 24, fontWeight: '500', color: '#005aa9' },
    text4:{ fontSize: 17, fontWeight: '500', color: '#005aa9' }
})

export default ViChinh2