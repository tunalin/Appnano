import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet, FlatList, ScrollView } from "react-native";



const ChuaDangNhap = ({ navigation }: any) => {
    const data = [
        {
            id: '1',
            hinh: require('../../imgtaikhoan/chiase.png'),
            ten: 'Chia sẻ app'
        },
        {
            id: '2',
            hinh: require('../../imgtaikhoan/caidat.png'),
            ten: 'Thiết lập bảo mật'
        },
        {
            id: '3',
            hinh: require('../../imgtaikhoan/nganhang.png'),
            ten: 'Tài khoản ngân hàng'
        },
        {
            id: '4',
            hinh: require('../../imgtaikhoan/location.png'),
            ten: 'Quản lý địa chỉ'
        },
        {
            id: '5',
            hinh: require('../../imgtaikhoan/nhom.png'),
            ten: 'Danh sách đội nhóm'
        },
        {
            id: '6',
            hinh: require('../../imgtaikhoan/baocao.png'),
            ten: 'Báo cáo doanh số'
        },
        {
            id: '7',
            hinh: require('../../imgtaikhoan/baocao.png'),
            ten: 'Báo cáo hoa hồng'
        },
    ]

    const data2 = [
        {
            id: '1',
            hinh: require('../../imgtaikhoan/quetma.png'),
            noidung: 'Quét mã'
        },
        {
            id: '2',
            screenName: 'naptien',
            hinh: require('../../imgtaikhoan/vitien.png'),
            noidung: 'Nạp tiền'
        },
        {
            id: '3',
            screenName: 'chuyentien',
            hinh: require('../../imgtaikhoan/chuyentien.png'),
            noidung: 'Chuyển tiền'
        },
        {
            id: '4',
            screenName: 'ruttien',
            hinh: require('../../imgtaikhoan/ruttien.png'),
            noidung: 'Rút tiền'
        },
    ]


    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const fetchUserData = async () => {
        try {
            const data = await AsyncStorage.getItem('data');
            if (data) {
                const userData = JSON.parse(data);
                setFullname(userData.data.fullname)
                setEmail(userData.data.email)
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Lỗi khi đọc dữ liệu từ AsyncStorage:', error);
        }
    };
    useFocusEffect(
        React.useCallback(() => {
            fetchUserData();
        }, [])
    );
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('data');
            setFullname('');
            setEmail('');
            setIsLoggedIn(false);
            console.log('đã thoát')
        } catch (error) {
            console.error('Lỗi khi đăng xuất:', error);
        }
    };

    const renderData = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('danhsachnhom1')}>
                <View style={styles.box1}>
                    <View style={styles.view}>
                        <Image source={item.hinh}
                            style={styles.img} />
                        <Text style={styles.text}>{item.ten}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderData2 = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.screenName)}>
                <View style={{ marginHorizontal: 18 }}>
                    <View style={styles.view2}>
                        <Image source={item.hinh}
                            style={styles.img1}
                        />
                        <Text style={styles.text1}>{item.noidung}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <View style={styles.view1}>
                        <View style={styles.huong}>
                            <Image source={require('../../imgtaikhoan/hinhaccount.png')}
                                style={styles.imgnguoi} />
                            <TouchableOpacity onPress={() => navigation.navigate('chitiettaikhoan')}>
                                <View style={styles.viewhuong2}>
                                    {isLoggedIn ? (
                                        <>
                                            <Text style={styles.textU}>{fullname}</Text>
                                            <Text>{email}</Text>
                                        </>
                                    ) : (
                                        <Text style={styles.textU}>User</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('thongtinkhachhang')}>
                                <Text style={styles.text4}>Xem hồ sơ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.view6}>
                    <Text style={styles.textBdk}>Quản lí ví</Text>
                </View>
                <View style={styles.view7}>
                    <View style={styles.view8}>
                        <View style={styles.view9}>
                            <Image source={require('../../imgtaikhoan/vimoney.png')}
                                style={styles.img} />
                            <Text style={styles.text6}>Ví tiền</Text>
                            <Text style={styles.text7}>15,000,000đ</Text>
                        </View>
                    </View>
                    <View style={styles.view10}>
                        <View style={styles.view9}>
                            <Image source={require('../../imgtaikhoan/vimoney.png')}
                                style={styles.img} />
                            <Text style={styles.text8}>Ví điểm</Text>
                            <Text style={styles.text7}>5,000,000 Ponit</Text>
                        </View>
                    </View>
                    <View style={styles.view11}>
                        <FlatList
                            data={data2}
                            keyExtractor={(item) => item.id}
                            renderItem={renderData2}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled={false}
                        />
                    </View>
                </View>
                <View style={styles.view6}>
                    <Text style={styles.textBdk}>Bảng điều khiển</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderData}
                    scrollEnabled={false}
                />
                <View style={styles.view3}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View style={styles.view4}>
                            <Text style={styles.textdn}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.view5}>
                            <Text style={styles.textdn}>Log out!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1120,
        marginTop: 30,
        backgroundColor: '#fff'
    },
    view1: {
        flexDirection: 'row',
        width: 381,
        height: 72,
        borderRadius: 7,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: '#c2c2c2'
    },
    imgnguoi: {
        width: 49,
        height: 49,
        marginLeft: 15
    },
    viewhuong: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    viewhuong2: {
        marginLeft: 18,
        width: '80%',

    },
    view2: { alignItems: 'center', marginTop: 15 },
    textU: {
        fontSize: 20,
        fontWeight: "500",
        color: '#005aa9'
    },
    textBdk: {
        fontSize: 17,
        fontWeight: "500",
        color: '#000'
    },
    box: {
        width: 381,
        height: 46,
        borderRadius: 7,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        elevation: 3,
        marginTop: 10,
        marginLeft: 15
    },
    viewB: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    img: {
        width: 20,
        height: 20
    },
    text: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'montserrat',
        color: '#000',
        padding: 10
    },
    view3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200
    },
    view4: {
        backgroundColor: '#005aa9',
        width: 326,
        height: 52,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view5: {
        backgroundColor: 'red',
        width: 326,
        height: 52,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    textdn: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    },
    huong: { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', },
    view6: { width: '40%', marginTop: 15, marginLeft: 15 },
    text6: { fontSize: 13, fontWeight: '500', fontFamily: 'montserrat', color: '#fff', paddingRight: 200 },
    text7: { fontSize: 13, fontWeight: '500', fontFamily: 'montserrat', color: '#fff' },
    view10: { width: '93%', height: 72, backgroundColor: '#FCB813', borderRadius: 10, borderColor: '#fff', borderWidth: 3, marginVertical: -15 },
    text8: { fontSize: 13, fontWeight: '500', fontFamily: 'montserrat', color: '#fff', paddingRight: 170 },
    view11: { width: '93%', height: 100, backgroundColor: '#fff', borderRadius: 10, borderColor: '#fff', borderWidth: 3 },
    text4: { fontSize: 13, fontWeight: '400', fontFamily: 'Montserrat', color: '#005aa9' },
    view7: { alignItems: 'center', justifyContent: 'center', marginTop: 10 },
    view8: { width: '93%', height: 72, backgroundColor: '#005aa9', borderRadius: 10, borderColor: '#fff', borderWidth: 3 },
    view9: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, height: '100%' },
    box1: { width: 370, borderRadius: 7, borderColor: '#fff', borderWidth: 1, backgroundColor: '#fff', elevation: 2, marginHorizontal: 15, marginVertical: 5 },
    img1: { width: 35, height: 35, margin: 10 },
    view: { flexDirection: 'row', alignItems: 'center', height: 46, marginLeft: 15 },
    text1: { fontSize: 13, fontWeight: '400', fontFamily: 'montserrat', color: '#000' },
})
export default ChuaDangNhap;
