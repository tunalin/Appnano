import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

const data = [
    {
        id: '1',
        hinh: require('../../imgtien/user3.png'),
        ten: 'Lê Thành Tín',
        soid: '0839020007',
    },
    {
        id: '2',
        hinh: require('../../imgtien/user2.png'),
        ten: 'Trần Thiện Lâm',
        soid: '1500015000'
    },
    {
        id: '3',
        hinh: require('../../imgtien/user1.png'),
        ten: 'Lê Văn Long',
        soid: '190070030'

    },
    {
        id: '4',
        hinh: require('../../imgtien/user3.png'),
        ten: 'Lê Thu Mai',
        soid: '0839020007'

    },

    {
        id: '5',
        hinh: require('../../imgtien/user1.png'),
        ten: 'Nguyễn Văn A',
        soid: '190070030'

    },

    {
        id: '6',
        hinh: require('../../imgtien/user2.png'),
        ten: 'Lê Như Ngọc Mai',
        soid: '0839020007'

    },

];

const ChuyenTien = ({ navigation }: any) => {
    const [selectedItemId, setSelectedItemId] = useState(false);

    const [isModal, setisModal] = useState(false)

    const renderItem = ({ item }: any) => (
        <View style={styles.view4}>
            <View
                style={styles.view}>
                <Image source={item.hinh} style={{ width: 42, height: 42, marginLeft: 15 }} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.textten}>{item.ten}</Text>
                    <Text style={styles.textid}>{item.soid}</Text>
                </View>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <CheckBox
                            disabled={false}
                            value={selectedItemId === item.id}
                            onValueChange={() => setSelectedItemId(item.id)}
                            tintColors={{ true: 'white', false: '#005aa9' }}

                        />

                    </View>


                </View>
            </View>
        </View>
    );
    return (
        <View >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.textct}>Chuyển tiền</Text>
            </View>
            <View style={styles.boxsearch}>
                <View style={styles.boxb}>
                    <Text style={styles.textsearch}>Tìm kiếm thành viên</Text>
                    <Image source={require('../../imgtien/ei_search.png')}
                        style={{ width: 23, height: 23 }} />
                </View>
            </View>
            <Text style={styles.text1}>Danh sách thành viên</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <TouchableOpacity onPress={() => setisModal(true)} style={styles.touch}>
                <Text style={styles.text2}>Tiếp tục</Text>
            </TouchableOpacity>
            {isModal ?
                <View style={styles.box1}>
                    <View style={styles.huong}>
                        <Text style={styles.textct}>Chuyển tiền</Text>
                        <TouchableOpacity onPress={() => setisModal(false)}>
                            <Image source={require('../../imgtien/daux.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.huong1}>
                            <Image source={require('../../imgtien/vitienxanh.png')}
                                style={styles.imgvitien} />
                            <View style={{ marginRight: 180 }}>
                                <Text style={styles.text3}>Số dư Ví chính</Text>
                                <Text style={styles.text4}>15,000,000đ</Text>
                            </View>
                            <Image source={require('../../imgtien/vectordown.png')} />
                        </View>
                    </View>
                    <View style={styles.huong2}>
                        <Text style={styles.text3}>Bạn muốn chuyển bao nhiêu?</Text>
                        <Text style={styles.text5}>0đ</Text>
                        <View style={styles.gach} />
                    </View>
                    <View>
                        <View style={styles.hop}>
                            <Text style={styles.text6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </View>
                        <View style={styles.huong3}>
                            <Text style={styles.text3}>Lời nhắn</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('thongtinchuyentien')}>
                        <View style={styles.hopxanh}>
                            <Text style={styles.text7}>Tiếp tục</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                : ''}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    textct: {
        fontSize: 20,
        fontWeight: '500',
        color: '#005aa9',
        marginLeft: 120
    },
    boxsearch: {
        borderRadius: 7,
        borderColor: '#c2c2c2',
        borderWidth: 0.5,
        width: 382,
        height: 46,
        marginLeft: 15,
        marginTop: 25
    },
    boxb: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10
    },
    textsearch: { fontSize: 16, fontWeight: '400', color: '#c2c2c2' },
    text1: { fontSize: 16, fontWeight: '500', color: '#000', marginTop: 20, marginLeft: 15 },
    touch: { backgroundColor: '#005aa9', marginHorizontal: 35, marginTop: 20, width: 326, height: 52, alignItems: 'center', justifyContent: 'center', borderRadius: 7 },
    text2: { fontSize: 16, fontWeight: '500', color: '#fff' },
    box1: { width: '100%', height: 554, backgroundColor: '#fff', position: 'absolute', top: 270, borderRadius: 20, borderWidth: 0.5 },
    huong: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 },
    box2: { borderRadius: 7, borderWidth: 1, borderColor: '#c2c2c2', width: 382, height: 59, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginLeft: 5 },
    huong1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
    imgvitien: { width: 37, height: 37, marginRight: 20 },
    text3: { fontSize: 16, fontWeight: '400', color: '#000' },
    text4: { fontSize: 13, fontWeight: '400', color: '#000', paddingTop: 5 },
    huong2: { alignItems: 'center', justifyContent: 'center', paddingTop: 20 },
    text5: { fontSize: 24, fontWeight: '500', color: '#c2c2c2', paddingTop: 15 },
    gach: { width: 38, borderRadius: 1, borderColor: '#c2c2c2', borderWidth: 1 },
    hop: { width: 382, height: 104, borderRadius: 7, borderWidth: 1, borderColor: '#c2c2c2', marginHorizontal: 20, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10,marginLeft:5,marginTop:18 },
    text6: { fontSize: 13, fontWeight: '400', color: '#000' },
    huong3: { position: 'absolute', backgroundColor: '#fff', marginLeft: 40, padding: 5 },
    hopxanh: { backgroundColor: '#005aa9', marginHorizontal: 45, marginTop: 20, width: 326, height: 52, alignItems: 'center', justifyContent: 'center', borderRadius: 7 },
    text7: { fontSize: 16, fontWeight: '500', color: '#fff' },
    view:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 382,
        height: 59,
        borderWidth: 0.3,
        borderRadius: 7,
        borderColor: '#c2c2c2',
    },
    textten:{ fontSize: 16, fontWeight: '500', color: '#000' },
    textid:{ fontSize: 13, fontWeight: '400', color: 'gray' },
    view2:{ flex: 1, alignItems: 'flex-end', marginRight: 15 },
    view4:{ width: 414, height: 80, padding: 15 },
    view3:{ backgroundColor: '#005aa9', borderRadius: 5, marginRight: 10, width: 17, height: 17, alignItems: 'center', justifyContent: 'center' },
})

export default ChuyenTien;
