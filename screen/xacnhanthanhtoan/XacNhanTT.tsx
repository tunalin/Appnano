import React from 'react'
import { Image, Text, TouchableOpacity, View ,StyleSheet} from 'react-native'


const XacNhanTT = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('TaoDonHang')}>
                    <Image source={require('../../imgcart/back.png')}
                        style={{ width: 20, right: 90 }} />
                </TouchableOpacity>
                <Text style={styles.text}>Xác nhận thanh toán</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <View style={styles.view}>
                    <Text style={styles.text1}>Đơn hàng: #3434654</Text>
                </View>
            </View>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.text2}>Tổng thanh toán</Text>
                    <Text style={styles.text3}>1,500,000đ</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text4}>Tổng tiến hàng</Text>
                    <Text style={styles.text4}>1,500,000đ</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text4}>Phí vận chuyển</Text>
                    <Text style={styles.text4}>Freeship</Text>
                </View>
            </View>
            <Text style={styles.text5}>Chọn phương thức thanh toán</Text>

            <View style={styles.view3}>
                <Image source={require('../../imgdonhang/vidientu.png')}
                    style={{ width: 31, height: 26 }} />
                <Text style={styles.text6}>Thanh toán bằng ví điện tử</Text>
            </View>
            <View style={styles.view4}>
                <View style={styles.view6}>
                    <Text style={styles.text7}>VNĐ</Text>
                </View>
                <Text style={styles.text8}>Thanh toán bằng Ví VNĐ</Text>
                <Image source={require('../../imgcart/chon.png')}
                    style={{ width: 15, height: 15 }} />
            </View>
            <View style={styles.view4}>
                <View style={styles.view6}>
                    <Text style={styles.text7}>Point</Text>
                </View>
                <Text style={styles.text9}>Thanh toán bằng Ví điểm</Text>
                <Image source={require('../../imgcart/chuachon.png')}
                    style={{ width: 15, height: 15 }} />
            </View>
            <View style={styles.view4}>

                <Image source={require('../../imgdonhang/momo.png')}
                    style={{ width: 28, height: 16, left: 50 }} />
                <Text style={styles.text10}>Thanh toán bằng Ví Momo</Text>
                <Image source={require('../../imgcart/chuachon.png')}
                    style={{ width: 15, height: 15 }} />

            </View>

            <View style={styles.view3}>
                <Image source={require('../../imgdonhang/thanhtoankhinhanhang.png')}
                    style={{ width: 31, height: 26 }} />
                <Text style={styles.text6}>Thanh toán bằng ví điện tử</Text>
            </View>
            <View style={{ marginLeft: 45, marginVertical:20 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('thanhtoanthanhcong')}>
                    <View style={styles.view5}>
                        <Text style={styles.text11}>Xác nhận thanh toán</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>


    )
}

const styles=StyleSheet.create({
    container:{ width: '100%', height: 896, backgroundColor: '#fff' },
    top:{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 33 },
    view:{ width: 412, height: 41, alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#005aa9' },
    view1:{ flexDirection: 'column', marginTop: 10, paddingHorizontal: 20 },
    view2:{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
    view3:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    view4:{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15 },
    view5:{ backgroundColor: '#005aa9', width: 326, height: 50, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    text:{ fontSize: 20, fontWeight: '500', color: '#005aa9' },
    text1:{ fontSize: 16, fontWeight: "500", color: '#fff', marginLeft: 20 },
    text2:{ fontSize: 16, fontWeight: '500', color: '#005aa9' },
    text3:{ fontSize: 16, fontWeight: '500', color: '#000' },
    text4:{ fontSize: 13, fontWeight: '400', color: '#000' },
    text5:{ fontSize: 16, fontWeight: '500', color: '#005aa9', marginTop: 15, marginLeft: 20 },
    text6:{ fontSize: 13, fontWeight: '500', color: '#000', marginLeft: 15 },
    view6:{ width: 28, height: 16, borderRadius: 3, borderWidth: 1, borderColor: '#005aa9', alignItems: 'center', justifyContent: 'center', left: 50 },
    text7:{ width: 19, height: 10, fontSize: 8, fontWeight: '500', color: '#005aa9' },
    text8:{ fontSize: 13, fontWeight: '400', color: '#000', right: 30 },
    text9:{ fontSize: 13, fontWeight: '400', color: '#000', right: 26 },
    text10:{ fontSize: 13, fontWeight: '400', color: '#000', right: 21 },
    text11:{ fontSize: 16, fontWeight: '500', color: '#fff' }
})

export default XacNhanTT