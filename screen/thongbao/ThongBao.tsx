import React from "react";
import { Image, Text, TouchableOpacity, View,StyleSheet } from "react-native";

const ThongBao = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('taikhoan')}>
                    <Image source={require('../../imgcart/back.png')}
                        style={styles.img} />
                </TouchableOpacity>
                <Text style={styles.text}>Thông Báo</Text>
                <Text style={styles.text1}>Đọc tất cả</Text>
            </View>
            <View style={styles.view}>
                <View style={{ marginLeft: 20 }}>
                    <View style={styles.view1}>
                        <Text style={styles.text2}>Thông báo của tôi</Text>
                    </View>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text3}>Cập nhật đơn hàng</Text>
                </View>
            </View>
            <View style={styles.view3}>
                <View style={styles.view4}>
                    <Image source={require('../../imgthongbao/thongbaoxanh.png')}
                        style={styles.img1} />
                    <View style={styles.view5}>
                        <Text style={styles.text4}>Cập nhật tài khoảng thành công</Text>
                        <Text style={styles.text5}>17:07 19/06/2022</Text>
                    </View>
                    <Image source={require('../../imgthongbao/daulon.png')}
                        style={styles.img2} />
                </View>
                <View style={styles.view6}>
                    <Image source={require('../../imgthongbao/thongbaoxanh.png')}
                        style={styles.img1} />
                    <View style={styles.view12}>
                        <Text style={styles.text3}>Đổi mật khẩu thành công</Text>
                        <Text style={styles.text5}>17:07 19/06/2022</Text>
                    </View>
                    <View style={styles.view13}>
                        <Image source={require('../../imgthongbao/chamxanh.png')}
                            style={styles.img3} />
                    </View>
                    <Image source={require('../../imgthongbao/daulon.png')}
                        style={styles.img2} />
                </View>
                <View style={styles.view6}>
                    <Image source={require('../../imgthongbao/thongbaoxanh.png')}
                        style={styles.img1} />
                    <View style={styles.view14}>
                        <Text style={styles.text4}>Bạn vừa có thêm 1 cấp dưới</Text>
                        <Text style={styles.text5}>17:07 19/06/2022</Text>
                    </View>
                    <Image source={require('../../imgthongbao/daulon.png')}
                        style={styles.img2} />
                </View>
                <View style={styles.view7}>
                    <Image source={require('../../imgthongbao/thongbaoxanh.png')}
                        style={styles.img1} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.text3}>Đổi mật khẩu thành công</Text>
                        <Text style={styles.text5}>17:07 19/06/2022</Text>
                    </View>
                    <View style={styles.view8}>
                        <View style={styles.view9}>
                            <Image source={require('../../imgthongbao/chamxanh.png')}
                                style={styles.img3} />
                            <Text style={styles.text6}>+50,000đ</Text>
                        </View>
                        <Image source={require('../../imgthongbao/daulon.png')} style={styles.img4} />
                    </View>
                </View>
                <View style={styles.view10}>
                    <Image source={require('../../imgthongbao/thongbaoxanh.png')}
                        style={styles.img1} />
                    <View style={styles.view15}>
                        <Text style={styles.text4}>Đổi mật khẩu thành công</Text>
                        <Text style={styles.text5}>17:07 19/06/2022</Text>
                    </View>
                    <Image source={require('../../imgthongbao/daulon.png')}
                        style={styles.img5} />
                </View>
                <View style={styles.view10}>
                    <Image source={require('../../imgthongbao/thongbaoxanh.png')}
                        style={styles.img1} />
                    <View style={styles.view14}>
                        <Text style={styles.text4}>Bạn vừa có thêm 1 cấp dưới</Text>
                        <Text style={styles.text5}>17:07 19/06/2022</Text>
                    </View>
                    <Image source={require('../../imgthongbao/daulon.png')}
                        style={styles.img5} />
                </View>
                <View style={styles.view7}>
                    <Image source={require('../../imgthongbao/thongbaoxanh.png')}
                        style={styles.img1} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.text3}>Nhận hoa hồng giới thiệu</Text>
                        <Text style={styles.text5}>17:07 19/06/2022</Text>
                    </View>
                    <View style={styles.view8}>
                        <View style={styles.view9}>
                            <Image source={require('../../imgthongbao/chamxanh.png')}
                                style={styles.img3} />
                            <Text style={styles.text6}>+50,000đ</Text>
                        </View>
                        <Image source={require('../../imgthongbao/daulon.png')} style={styles.img4} />
                    </View>
                </View>
                <View style={styles.view11} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{ width: '100%', height: 896, backgroundColor: '#fff' },
    top:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 },
    text:{ fontSize: 20, fontWeight: "500", color: '#005aa9', marginLeft: 15 },
    text1:{ fontSize: 13, fontWeight: "400", color: '#005aa9', marginRight: 15 },
    text2:{ fontSize: 16, fontWeight: "500", color: '#fff' },
    text3:{ fontSize: 16, fontWeight: "500", color: '#000' },
    text4:{ fontSize: 16, fontWeight: "400", color: '#000' },
    text5:{ fontSize: 13, fontWeight: "400", color: '#c2c2c2', marginTop: 5 },
    text6:{ fontSize: 14, fontWeight: "400", color: '#03a900', marginTop: 10 },
    view:{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 },
    view1:{ backgroundColor: '#005aa9', width: 183, height: 36, borderRadius: 25, justifyContent: "center", alignItems: 'center' },
    view2:{ marginRight: 20, marginTop: 5 },
    view3:{ flexDirection: 'column', marginTop: 15, marginLeft: 15 },
    view4:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    view5:{ marginRight: 70, marginTop: 10 },
    view6:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 },
    view7:{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 15 },
    view8:{ flexDirection: 'row', marginLeft: 'auto', marginRight: 30 },
    view9:{ flexDirection: 'column', alignItems: 'flex-end', marginRight: 20 },
    view10:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
    view11:{ borderBottomColor: '#c4c4c4', borderBottomWidth: 1, width: '95%', alignSelf: 'center', marginTop:15, marginRight:15 },
    img:{ width: 20, marginLeft: 15 },
    img1:{ width: 32, height: 32 },
    img2:{ width: 15, height: 15, marginRight: 30 },
    view12:{ marginRight: 85, marginTop: 10 },
    view13:{ marginBottom: 20, marginRight: 5 },
    img3:{ width: 10, height: 10 },
    view14:{ marginRight: 90, marginTop: 10 },
    img4:{ width: 15, height: 15, marginTop: 15 },
    img5:{ width: 15, height: 15, marginRight: 30, marginTop: 10 },
    view15:{ marginRight: 110, marginTop: 10 },
    
})  

export default ThongBao