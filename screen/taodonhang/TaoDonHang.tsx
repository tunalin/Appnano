import React from 'react'
import { Image, Text, TouchableOpacity, View, ScrollView ,StyleSheet} from 'react-native'

const TaoDonHang = ({ navigation }: any) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Image source={require('../../imgcart/back.png')}
                            style={styles.img} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Tạo đơn hàng</Text>
                </View>
                <Image source={require('../../imgdonhang/kexanhngang.png')}
                    style={styles.view11} />
                <View style={styles.view18}>
                    <View style={styles.view}>
                        <Image source={require('../../imgdonhang/diachi.png')}
                            style={styles.img1} />
                        <Text style={styles.text1}>Địa chỉ giao hàng</Text>
                        <Text style={styles.text3}>Thay đổi</Text>
                    </View>
                    <View style={styles.view19}>
                        <View style={styles.view17}>
                            <Text style={styles.text4}>Chị Huyền</Text>
                            <Text style={styles.text5}>+ 84864456545</Text>
                            <Text style={styles.text5}>28E Tăng Bạt Hổ, Phường 11, Quận Bình Thạnh, TP.Hồ Chí Minh</Text>
                        </View>
                    </View>
                </View>
                <Image source={require('../../imgdonhang/kexanhngang.png')}
                    style={styles.view11} />
                <View style={styles.view20}>
                    <View style={styles.view}>
                        <Image source={require('../../imgdetail/tayhop.png')}
                            style={styles.img1} />
                        <Text style={styles.text6}>Sản phẩm đặt mua</Text>
                        <Text style={styles.text7}>#3434654</Text>
                    </View>
                    <View style={styles.view1}>
                        <Image source={require('../../imgdetail/spnau.png')}
                            style={styles.img2} />
                        <View style={styles.view2}>
                            <Text style={styles.text8}>Nước rửa chén sinh học True - Bio Na...</Text>
                            <Text style={styles.text9}>Giá nhà cung cấp: 600,000đ</Text>
                            <Text style={styles.text10}>Giá bán: 700,000đ</Text>
                            <Text style={styles.text9}>Số lượng: 1</Text>
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <Image source={require('../../imgdetail/dlcxanh.png')}
                            style={styles.img2} />
                        <View style={styles.view2}>
                            <Text style={styles.text20}>DLC Brazil Green Propolis</Text>
                            <Text style={styles.text9}>Giá nhà cung cấp: 700,000đ</Text>
                            <Text style={styles.text10}>Giá bán: 800,000đ</Text>
                            <Text style={styles.text9}>Số lượng: 1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view3} />
                <View style={styles.view12}>
                    <View style={styles.view4}>
                        <Image source={require('../../imgdetail/but.png')}
                            style={{ width: 23, height: 20 }} />
                        <Text style={styles.text11}>Ghi chú</Text>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.text12}>Chưa có ghi chú cho đơn hàng này!</Text>
                    </View>
                    <View style={styles.view6} />
                    <View style={styles.view7}>
                        <Image source={require('../../imgdetail/hinhxe.png')}
                            style={styles.img1} />
                        <Text style={styles.text13}>Thông tin cho khách</Text>
                    </View>
                    <View style={styles.view13}>
                        <View style={styles.view16}>
                            <View style={styles.view15}>
                                <Text style={styles.text14}>Tổng tiền hàng:</Text>
                                <Text style={styles.text15}>1,500,000đ</Text>
                            </View>

                            <View style={styles.view8}>
                                <Text style={styles.text14}>Phí vận chuyển:</Text>
                                <Text style={styles.text16}>Freeship</Text>
                            </View>
                            <View style={styles.view8}>
                                <Text style={styles.text14}>Tổng số tiền cần thanh toán:</Text>
                                <Text style={styles.text17}>1,500,000đ</Text>
                            </View>

                        </View>
                        <View style={styles.view9} />
                    </View>
                    <View style={styles.view7}>
                        <Image source={require('../../imgdetail/hinhxe.png')}
                            style={styles.img1} />
                        <Text style={styles.text13}>Thông tin cho bạn</Text>
                    </View>
                    <View style={styles.view13}>
                        <View style={styles.view16}>
                            <View style={styles.view15}>
                                <Text style={styles.text14}>Tổng giá nhà cung cấp:</Text>
                                <Text style={styles.text15}>800,000đ</Text>
                            </View>

                            <View style={styles.view8}>
                                <Text style={styles.text14}>Tổng giá bán của bạn:</Text>
                                <Text style={styles.text15}>1,500,000đ</Text>
                            </View>

                            <View style={styles.view8}>
                                <Text style={styles.text14}>Tổng hoa hồng của bạn:</Text>
                                <Text style={styles.text18}>700,000đ</Text>
                            </View>

                        </View>
                       
                    </View>
                    <View style={styles.view14}>
                        <TouchableOpacity onPress={() => navigation.navigate('XacNhanThanhToan')}>
                            <View style={styles.view10}>
                                <Text style={styles.text19}>Tiến hành thanh toán</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>


    )
}

const styles=StyleSheet.create({
    container:{ flex:1, height: 1064, backgroundColor:'#fff',right:10},
    top:{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 30 },
    img:{ width: 20, right: 50 },
    text:{ fontSize: 20, fontWeight: '500', color: '#005aa9', right: 70 },
    view:{ flexDirection: 'row', marginTop: 15, marginLeft: 15, justifyContent: 'space-between' },
    img1:{ width: 31, height: 26 },
    text1:{ fontSize: 16, fontWeight: '500', color: '#000', right: 80 },
    text3:{ fontSize: 13, fontWeight: '500', color: '#005aa9', right: 10 },
    text4:{ fontSize: 13, fontWeight: '500', color: '#005aa9', padding: 5 },
    text5:{ fontSize: 13, fontWeight: '400', color: '#000', padding: 5 },
    text6:{ fontSize: 16, fontWeight: '500', color: '#000', right: 70 },
    text7:{ fontSize: 13, fontWeight: '500', color: '#000', right: 10 },
    text8:{ fontSize: 15, fontWeight: '500', color: '#000', padding: 3 },
    text9:{ fontSize: 12, fontWeight: '400', color: '#000', padding: 3 },
    text10:{ fontSize: 12, fontWeight: '400', color: '#005aa9', padding: 3 },
    text11:{ fontSize: 16, fontWeight: '500', color: '#000', left: 20 },
    text12:{ fontSize: 13, fontWeight: '400', color: '#c2c2c2', fontStyle: 'italic', right: 50 },
    text13:{ fontSize: 16, fontWeight: "500", color: '#000', marginLeft: 15 },
    text14:{ fontSize: 13, fontWeight: "400", color: '#000' },
    text15:{ fontSize: 13, fontWeight: "500", color: '#000' },
    text16:{ fontSize: 13, fontWeight: "500", color: '#000', fontStyle: 'italic' },
    text17:{ fontSize: 13, fontWeight: "500", color: '#005aa9' },
    text18:{ fontSize: 13, fontWeight: "500", color: '#0fa027' },
    text19:{ fontSize: 16, fontWeight: '500', color: '#fff' },
    text20:{ fontSize: 13, fontWeight: '500', color: '#000', padding: 3 },
    view1:{ flexDirection: 'row', marginLeft: 15, marginTop: 15 },
    img2:{ borderRadius: 7, borderColor: '#c4c4c4', borderWidth: 0.5 },
    view2:{ flexDirection: 'column', left: 20 },
    view3:{ borderWidth: 0.3, borderRadius: 7, width: 382, height: 0.3, borderColor: '#c2c2c2', marginLeft: 15, marginTop: 10 },
    view4:{ flexDirection: 'row', marginTop: 15, marginLeft: 20 },
    view5:{ backgroundColor: '#fff', width: 337, height: 34, borderRadius: 5, borderColor: '#c2c2c2', alignItems: 'center', justifyContent: 'center', left: 62, marginTop: 15, borderWidth: 1 },
    view6:{ borderWidth: 0.3, borderRadius: 7, width: 382, height: 0.3, borderColor: '#c2c2c2', marginLeft: 15, marginTop: 15 },
    view7:{ flexDirection: 'row', marginTop: 10, marginLeft: 15, width: 412, height: 42 },
    view8:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
    view9:{ width: 382, height: 0.3, borderWidth: 0.5, marginTop: 15, marginLeft: 15, borderColor: '#c2c2c2' },
    view10:{ backgroundColor: '#005aa9', width: 326, height: 52, borderRadius: 7, alignItems: 'center', justifyContent: 'center', },
    view11:{ marginTop: 20 },
    view12:{ width: 380, height: 69 },
    view13:{ alignItems: 'flex-start', marginTop: -5 },
    view14:{ marginTop:70, marginLeft:45},
    view15:{ flexDirection: 'row', justifyContent: 'space-between' },
    view16:{ marginLeft: 60, width: 333 },
    view17:{ width: 320, height: 78 },
    view18:{ width: 412, height: 146 },
    view19:{ marginTop: 15, marginLeft: 60 },
    view20:{ width: 412, height: 263 }
})      

export default TaoDonHang