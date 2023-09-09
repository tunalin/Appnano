import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DetailDonHang = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewctdh}>
                <TouchableOpacity onPress={() => navigation.navigate('taikhoan')}>
                    <Image source={require('../../imgcart/back.png')}
                        style={styles.nutlui} />
                </TouchableOpacity>
                <Text style={styles.text1}>Chi tiết đơn hàng</Text>

            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.viewxanh}>
                    <Text style={styles.text2}>Đơn hàng: #3434654</Text>
                </View>
            </View>

            <View style={styles.view2}>
                <Image source={require('../../imgdetail/hinhnguoi.png')}
                    style={styles.img} />
                <Text style={styles.text3}>Người nhận hàng</Text>
            </View>
            <View style={styles.view3}>
                <View style={styles.view4}>
                    <Text style={styles.text4}>Chị Huyền</Text>
                    <Text style={styles.text5}>+ 84864456545</Text>
                    <Text style={styles.text5}>28E Tăng Bạch Hổ, Phường 11, Quận Bình Thạnh, TP.Hồ Chí Minh</Text>
                </View>
                <View style={styles.view5} />
            </View>
            <View style={styles.view6}>
                <Image source={require('../../imgdetail/hinhxe.png')}
                    style={styles.img2} />
                <Text style={styles.text6}>Thông tin cho khách</Text>
            </View>
            <View style={styles.view7}>
                <View style={styles.view8}>
                    <View style={styles.view9}>
                        <Text style={styles.text7}>Tổng tiền hàng:</Text>
                        <Text style={styles.text8}>1,500,000đ</Text>
                    </View>

                    <Text style={styles.text9}>Phí vận chuyển: </Text>
                    <View style={styles.view10}>
                        <Text style={styles.text7}>Tổng số tiền cần thanh toán:</Text>
                        <Text style={styles.text10}>1,500,000đ</Text>
                    </View>

                </View>
                <View style={styles.view11} />
            </View>
            <View style={styles.view12}>
                <Image source={require('../../imgdetail/hinhxe.png')}
                    style={styles.img2} />
                <Text style={styles.text6}>Thông tin cho bạn</Text>
            </View>
            <View style={{ alignItems: 'flex-start', marginTop: -5 }}>
                <View style={{ marginLeft: 60, width: 333 }}>
                    <View style={styles.view17}>
                        <Text style={styles.text7}>Tổng giá nhà cung cấp:</Text>
                        <Text style={styles.text8}>800,000đ</Text>
                    </View>

                    <View style={styles.view16}>
                        <Text style={styles.text7}>Tổng giá bán của bạn:</Text>
                        <Text style={styles.text8}>1,500,000đ</Text>
                    </View>

                    <View style={styles.view16}>
                        <Text style={styles.text7}>Tổng hoa hồng của bạn:</Text>
                        <Text style={styles.text12}>700,000đ</Text>
                    </View>

                </View>
                <View style={styles.view13} />
            </View>

            <View style={styles.view14}>
                <Image source={require('../../imgdetail/but.png')}
                    style={styles.img} />
                <Text style={styles.text6}>Ghi chú</Text>
            </View>
            <View style={styles.view15}>
                <Text style={styles.text13}>Không có ghi chú cho đơn hàng này!</Text>
            </View>
            <View style={styles.view13} />

            <View style={styles.view14}>
                <Image source={require('../../imgdetail/tayhop.png')}
                    style={styles.img} />
                <Text style={styles.text6}>Sản phẩm đã mua</Text>
            </View>
            <View style={styles.view19}>
                <View style={styles.view18}>
                    <Image source={require('../../imgdetail/spnau.png')}
                        style={styles.img3} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.text14}>Nước rửa chén sinh học True - Bio Na...</Text>
                        <Text style={styles.text11}>Giá nhà cung cấp: 600,000đ</Text>
                        <Text style={styles.text15}>Giá bán: 700,000đ</Text>
                        <Text style={styles.text11}>Số lượng: 1</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 896,
        backgroundColor: '#fff'
    },
    viewctdh: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    nutlui: {
        width: 20,
        right: 50
    },
    text1: {
        fontSize: 16,
        fontWeight: "500",
        color: '#005aa9',
        right: 70
    },
    viewxanh: {
        width: 412,
        height: 41,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#005aa9'
    },
    text2: {
        fontSize: 16,
        fontWeight: "500",
        color: '#fff',
        marginLeft: 20
    },
    view2: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15
    },
    img: {
        width: 23,
        height: 20
    },
    text3: {
        fontSize: 16,
        fontWeight: "500",
        color: '#000',
        marginLeft: 15
    },
    view3: {
        alignItems: 'flex-start',
        width: 346,
        height: 78
    },
    view4: {
        marginTop: 15,
        marginLeft: 55
    },
    text4: {
        fontSize: 13,
        fontWeight: "500",
        color: '#005aa9'
    },
    text5: {
        fontSize: 13,
        fontWeight: "400",
        color: '#000',
        marginTop: 10
    },
    view5: {
        width: 382,
        height: 0.3,
        borderWidth: 0.5,
        marginTop: 15,
        marginLeft: 15,
        borderColor: '#c2c2c2'
    },
    view6: {
        flexDirection: 'row',
        marginTop: 60,
        marginLeft: 15,
        width: 412,
        height: 42
    },
    img2: {
        width: 31,
        height: 26
    },
    view7: {
        alignItems: 'flex-start',
        marginTop: -5
    },
    view8: {
        marginLeft: 60,
        width: 333
    },
    view9: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text6: {
        fontSize: 16,
        fontWeight: "500",
        color: '#000',
        marginLeft: 15
    },
    text7: {
        fontSize: 13,
        fontWeight: "400",
        color: '#000'
    },
    text8: {
        fontSize: 13,
        fontWeight: "500",
        color: '#000'
    },
    text9: {
        fontSize: 13,
        fontWeight: "400",
        color: '#000',
        marginTop: 15
    },
    view10: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    text10: {
        fontSize: 13,
        fontWeight: "500",
        color: '#005aa9'
    },
    view11: {
        width: 382,
        height: 0.3,
        borderWidth: 0.5,
        marginTop: 15,
        marginLeft: 15,
        borderColor: '#c2c2c2'
    },
    view12: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 15,
        width: 412,
        height: 42
    },
    text11: {
        fontSize: 12,
        fontWeight: "400",
        color: '#000'
    },
    text12: {
        fontSize: 13,
        fontWeight: "500",
        color: '#0fa027'
    },
    view13: {
        width: 382,
        height: 0.3,
        borderWidth: 0.5,
        marginTop: 15,
        marginLeft: 15,
        borderColor: '#c2c2c2'
    },
    view14: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 20
    },
    view15: {
        marginTop: 15,
        marginLeft: 60,
        marginBottom: 5
    },
    text13: {
        fontSize: 13,
        fontWeight: "400",
        color: '#c2c2c2'
    },
    view16: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    view17: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view18: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 25
    },
    view19: {
        width: 382,
        height: 84
    },
    img3: {
        width: 65,
        height: 60,
        borderRadius: 7,
        borderColor: '#c4c4c4',
        borderWidth: 0.5
    },
    text14: {
        fontSize: 15,
        fontWeight: "500",
        color: '#000'
    },
    text15:{ 
        fontSize: 12, 
        fontWeight: "400", 
        color: '#005aa9' 
    },
})

export default DetailDonHang