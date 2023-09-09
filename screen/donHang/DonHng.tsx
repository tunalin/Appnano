import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DonHng = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={require('../../imgdonhang/Arrow.png')} style={{ marginLeft: 16, width: 20 }} />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.text}>Đơn hàng</Text>
                </View>
                <Image source={require('../../imgdonhang/timeset.png')} style={{ marginRight: 16, width: 20, height: 20 }} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.view}>
                    <View style={styles.view1}>
                        <Text style={styles.text1}>Chờ thanh toán</Text>
                        <View>
                            <Text style={styles.text2}>Hoàn thành</Text>
                            <View style={styles.view3} />
                        </View>
                        <Text style={styles.text1}>Đã hủy</Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text1}>Tất cả</Text>
                        <View style={styles.view4}>
                            <Text style={styles.text3}>Ví VNĐ</Text>
                        </View>
                        <Text style={styles.text1}>Ví tích điểm</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%' }}>
                <View style={styles.view5}>
                    <Text style={styles.text4}>Đơn đã đặt</Text>
                </View>
            </View>
            <View style={styles.view6}>
                <View style={styles.view7}>
                    <View style={styles.view8}>
                        <View style={styles.view9}>
                            <Image source={require('../../imgdonhang/giaohang.png')} style={{ width: 29, height: 28 }} />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.text5}>Mã đơn hàng: 002220321D9M</Text>
                            <Text style={styles.text6}>25/03/2022 - 17:40</Text>
                        </View>
                    </View>
                    <View style={styles.view10} />
                    <View style={{ padding: 10, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.view11}>
                                <Image source={require('../../imgdonhang/suaaulac.png')} style={styles.img} />
                            </View>
                            <View style={styles.view12}>
                                <Image source={require('../../imgdonhang/dlcnau.png')} style={styles.img} />
                            </View>
                            <View style={styles.view12}>
                                <Image source={require('../../imgdonhang/dlcxanhla.png')} style={styles.img} />
                            </View>
                            <View style={styles.view12}>
                                <Image source={require('../../imgdonhang/kem.png')} style={styles.img} />
                            </View>
                            <View style={styles.view12}>
                                <Text style={styles.text8}>+1</Text>
                            </View>

                        </View>
                        <View style={styles.view13}>
                            <Text style={styles.text7}>Auslac Lactoferrin (Giá Ưu Đãi)</Text>
                            <View style={styles.view14}>
                                <Text style={styles.text9}>{'Giá Bán: '}</Text>
                                <Text style={styles.text10}>1,100,000đ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view15} />
                    <View style={styles.view16}>
                        <Text style={styles.text11}>5 sản phẩm</Text>
                        <Text style={styles.text12}>5,200,000đ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.view17}>
                <View style={styles.view18}>
                    <View style={styles.view8}>
                        <View style={styles.view9}>
                            <Image source={require('../../imgdonhang/giaohang.png')} style={{ width: 29, height: 28 }} />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.text5}>Mã đơn hàng: 002220321D10V</Text>
                            <Text style={styles.text6}>25/03/2022 - 17:40</Text>
                        </View>
                    </View>
                    <View style={styles.view10} />
                    <View style={{ padding: 10, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.view11}>
                                <Image source={require('../../imgdonhang/suaaulac.png')} style={styles.img} />
                            </View>
                            <View style={{ marginLeft: 10, flexDirection: 'column', padding: 5 }}>
                                <Text style={styles.text7}>Auslac Lactoferrin (Giá Ưu Đãi)</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={styles.text9}>{'Giá Bán: '}</Text>
                                    <Text style={styles.text10}>1,100,000đ</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view15} />
                    <View style={styles.view16}>
                        <Text style={styles.text11}>2 sản phẩm</Text>
                        <Text style={styles.text12}>2,200,000đ</Text>
                    </View>
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: { width: '100%', height: 896, backgroundColor: '#fff' },
    top: { height: '10%', flexDirection: 'row', alignItems: 'center' },
    text: { fontSize: 20, fontFamily: 'montserrat', fontWeight: '500', color: '#005aa9' },
    view: { backgroundColor: '#fff', width: '93%', borderRadius: 10, borderColor: '#005aa9', borderWidth: 0.8, height: 94 },
    view1: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, alignItems: 'center', padding: 8 },
    text1: { fontSize: 15, fontWeight: '400', fontFamily: 'Montserrat', color: '#000' },
    text2: { fontSize: 15, fontWeight: '500', fontFamily: 'Montserrat', color: '#005aa9' },
    view2: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 12, alignItems: 'center', padding: 5 },
    view3: { borderBottomWidth: 2, borderColor: '#005aa9', marginTop: 2, width: 80 },
    view4: { width: 81, height: 31, backgroundColor: '#005aa9', borderRadius: 25, justifyContent: 'center' },
    view5: { flexDirection: 'row', justifyContent: 'flex-start', margin: 15 },
    text3: { fontSize: 15, fontWeight: '400', fontFamily: 'Montserrat', color: '#fff', textAlign: 'center', padding: 4 },
    text4: { fontSize: 16, fontWeight: "500", color: '#000' },
    view6: { alignItems: 'center', justifyContent: 'center' },
    view7: { backgroundColor: '#fff', width: '93%', borderRadius: 10, height: 242, elevation: 4 },
    view8: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 15, marginLeft: -70 },
    view9: { backgroundColor: '#DFE5F6', width: 42, height: 42, justifyContent: 'center', alignItems: 'center', borderRadius: 100 },
    text5: { fontSize: 16, fontWeight: '500', color: '#000', marginBottom: 6 },
    text6: { fontSize: 12, fontWeight: '400', color: '#00000080' },
    view10: { borderBottomColor: '#c4c4c4', borderBottomWidth: 2, width: '90%', alignSelf: 'center', marginTop: 12 },
    view11: { backgroundColor: '#c2c2c2', borderRadius: 100, padding: 5 },
    view12:{ backgroundColor: '#c2c2c2', borderRadius: 100, padding: 5, marginLeft: 5 },
    view13:{ width: '70%', marginTop: 10, marginLeft: 5, flexDirection: 'column' },
    text7:{ fontSize: 16, fontWeight: "500", fontFamily: 'montserrat', color: '#005aa9' },
    img:{ width: 30, height: 30 },
    text8:{ width: 30, height: 30, textAlign: 'center', padding: 5 },
    view14:{ flexDirection: 'row', marginTop: 15, },
    text9:{ fontSize: 12, fontWeight: "500", fontFamily: 'montserrat', color: '#000' },
    text10:{ fontSize: 12, fontWeight: "500", fontFamily: 'montserrat', color: '#005aa9' },
    view15:{ borderBottomColor: '#c4c4c4', borderBottomWidth: 2, width: '90%', alignSelf: 'center', marginTop: 5 },
    view16:{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 20 },
    text11:{ fontSize: 12, fontWeight: "400", fontFamily: 'montserrat', color: '#000' },
    text12:{ fontSize: 15, fontWeight: "600", fontFamily: 'montserrat', color: '#19a538' },
    view17:{ alignItems: 'center', justifyContent: 'center', marginTop: 20 },
    view18:{ backgroundColor: '#fff', width: '93%', borderRadius: 10, height: 212, elevation: 6 },

})

export default DonHng