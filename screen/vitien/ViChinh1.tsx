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

        <View style={{ flex: 1, marginBottom: 15, }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.view}>
                    <Image source={item.hinh}
                        style={{ width: 40, height: 32 }} />
                </View>
                <Text style={styles.text}>{item.ten}</Text>
            </View>

        </View>
    )
}

const ViChinh1 = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('thongtinchuyentien')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.text1}>Ví chính</Text>
            </View>
            <View style={styles.view1}>
                <View style={{ marginLeft: 50, marginBottom: 150 }}>
                    <Text style={styles.text2}>Số dư khả dụng</Text>
                    <Text style={styles.text3}>1,770,000 VNĐ</Text>
                </View>
                <Image source={require('../../imgtaikhoan/vongtron.png')} />
            </View>
            <View style={styles.view2}>
                <View style={{ marginHorizontal: 20, marginTop: 40 }}>
                    <Text style={styles.text4}>Chức năng ví</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:40}}> 
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    view:{ width: 117, height: 87, borderRadius: 15, backgroundColor: '#f3faff', justifyContent: 'center', alignItems: 'center' },
    text:{ fontSize: 15, fontWeight: '400', color: '#101014', padding: 10 },
    container:{ width: 414, height: 896, backgroundColor: '#fff' },
    top:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    view1:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
    view2:{ width: 414, height: 642, backgroundColor: '#fff', position: 'absolute', top: 200, borderWidth: 0.5, borderColor: '#c2c2c2' },
    text1:{ fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 140 },
    text2:{ fontSize: 16, fontWeight: '400', color: '#8b8787' },
    text3:{ fontSize: 24, fontWeight: '500', color: '#005aa9' },
    text4:{ fontSize: 17, fontWeight: '500', color: '#000' },
    
})

export default ViChinh1