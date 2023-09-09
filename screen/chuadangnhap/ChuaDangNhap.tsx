import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const ChuaDangNhap = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.viewhuong}>
                    <Image source={require('../../imgtaikhoan/hinhaccount.png')}
                        style={styles.imgnguoi} />
                    <View style={styles.viewhuong2}>
                        <Text style={styles.textU}>User</Text>
                    </View>
                </View>
            </View>
            <View style={styles.view2}>
                <Text style={styles.textBdk}>Bảng điều khiển</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.viewB}>
                    <Image source={require('../../imgtaikhoan/chiase.png')}
                        style={styles.img} />
                    <Text style={styles.text}>Chia sẻ app</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.viewB}>
                    <Image source={require('../../imgtaikhoan/nganhang.png')}
                        style={styles.img} />
                    <Text style={styles.text}>Tài khoản ngân hàng</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.viewB}>
                    <Image source={require('../../imgtaikhoan/caidat.png')}
                        style={styles.img} />
                    <Text style={styles.text}>Thiết lập bảo mật</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ThongBao')}>
                <View style={styles.box}>
                    <View style={styles.viewB}>
                        <Image source={require('../../imgthongbao/thongbao.jpg')}
                            style={styles.img} />
                        <Text style={styles.text}>Thông báo</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DetailSP')}>
                <View style={styles.box}>
                    <View style={styles.viewB}>
                        <Image source={require('../../imgthongbao/thongbao.jpg')}
                            style={styles.img} />
                        <Text style={styles.text}>Chi tiết đơn hàng</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('chitiettaikhoan')}>
                <View style={styles.box}>
                    <View style={styles.viewB}>
                        <Image source={require('../../imgthongbao/thongbao.jpg')}
                            style={styles.img} />
                        <Text style={styles.text}>Chi tiết tài khoản</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.view3}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.view4}>
                        <Text style={styles.textdn}>Đăng nhập</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 896,
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
        width: 47,
        height: 24
    },
    view2: {
        width: 143,
        height: 25,
        marginLeft: 15,
        marginTop: 20
    },
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
    textdn:{ 
        fontSize: 16, 
        fontWeight: '500', 
        color: '#fff' 
    }
})

export default ChuaDangNhap;
