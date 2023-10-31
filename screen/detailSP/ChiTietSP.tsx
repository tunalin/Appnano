import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import realmData from "../../Realm/dataRealm";
import { addToCart } from "../../Realm/realm";

const addSP = realmData.objects('CartItem')

const ChiTietSp = ({ navigation, route }: any) => {
    const { item } = route.params;
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const handleAddToCart = () => {
        const existingCartItem: any = addSP.filtered(`id == '${item.id}'`)[0]
        if (existingCartItem) {
            realmData.write(() => {
                existingCartItem.soluong += quantity
                
            })
        } else {
            addToCart(item.id, quantity, item.ten, item.gia)
            
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.huong}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../../imgdonhang/Arrow.png')} style={{ marginLeft: 16, width: 20 }} />
                </TouchableOpacity>

                <View style={styles.huong1}>
                    <Text style={styles.text}>Chi tiết sản phẩm</Text>
                </View>
            </View>
            <View style={styles.huong2}>
                <Image source={item.hinh}
                    style={{ width: 120, height: 120 }} />
            </View>
            <View style={styles.huong3}>
                <View style={styles.huong4}>
                    <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
                        <View style={styles.dau}>
                            <Text style={styles.text1}>-</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={styles.dau}>
                        <Text style={styles.text1}>{quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                        <View style={styles.dau}>
                            <Text style={styles.text1}>+</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.view}>
                <View style={{ width: 384, height: 45 }}>
                    <Text style={styles.text2}>{item.ten}</Text>
                </View>
                <View style={{ width: 99, height: 30 }}>
                    <Text style={styles.text3}>{item.gia}</Text>
                </View>
                <View style={{ width: 114, height: 30 }}>
                    <Text style={{ fontSize: 13, fontWeight: "300", color: '#000' }}>Giá nhà cung cấp</Text>
                </View>
                <View style={styles.view1} />
                <View style={{ width: 175, height: 20, marginTop: 15 }}>
                    <Text style={styles.text2}>Thông tin sản phẩm</Text>
                </View>
                <View style={styles.huong5}>
                    <View style={styles.boxtext1}>
                        <Text style={styles.text4}>Giá nhà cung cấp:</Text>
                        <Text style={styles.text5}>800,000đ</Text>
                    </View>
                    <View style={styles.view4}>
                        <Text style={styles.text4}>Giá bán lẻ:</Text>
                        <Text style={styles.text6}>1,763,000đ</Text>
                    </View>
                    <View style={styles.view4}>
                        <Text style={styles.text4}>Hoa hồng:</Text>
                        <Text style={styles.text7}>500,000đ</Text>
                    </View>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>Giới thiệu sản phẩm</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text8}>Sản phẩm dựa trên công nghệ hiện đại, môi trường khép kín. Với tiêu chí “an toàn - sạch - đẹp”, được sản xuất hoàn toàn từ những nguyên liệu tự nhiên an toàn cho sức khỏe, quy trình làm việc sạch sẽ, đảm bảo an toàn vệ sinh thực phẩm, thiết kế bao bì mẫu mã đẹp mắt.</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image source={require('../../imgdetail/cart.png')}
                        style={{ width: 55, height: 51 }} />
                    <TouchableOpacity onPress={handleAddToCart}>
                        <View style={styles.hopxanh}>
                            <View style={styles.huong6}>
                                <Text style={styles.text9}>Chọn mua</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { width: '100%', height: 896, backgroundColor: '#fff' },
    huong: { height: '10%', flexDirection: 'row', alignItems: 'center' },
    huong1: { flex: 1, alignItems: 'center', marginRight: 30 },
    text: { fontSize: 20, fontWeight: '500', color: '#005aa9' },
    huong2: { justifyContent: 'center', alignItems: 'center' },
    huong3: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    huong4: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#005aa9', width: 87, height: 38, flexDirection: 'row', borderRadius: 25 },
    dau: { justifyContent: 'center', alignItems: 'center',marginHorizontal:10 },
    text1: { fontSize: 17, fontWeight: "600", color: '#fff' },
    view: { flexDirection: 'column', padding: 20, height: '45%' },
    text2: { fontSize: 16, fontWeight: "500", color: '#000' },
    text3: { fontSize: 20, fontWeight: "500", color: '#005aa9' },
    view1: { borderBottomColor: '#c4c4c4', borderBottomWidth: 1, width: '95%', alignSelf: 'center' },
    huong5: { flexDirection: 'column', marginTop: 10 },
    boxtext1: { flexDirection: 'row', justifyContent: 'space-between' },
    text4: { fontSize: 13, fontWeight: "400", color: '#000' },
    text5: { fontSize: 13, fontWeight: "500", color: '#000' },
    text6: { fontSize: 13, fontWeight: "500", color: '#005aa9' },
    text7: { fontSize: 13, fontWeight: "500", color: '#0fa027' },
    view2: { width: 370, height: 92, marginTop: 10 },
    view3: { width: 175, height: 20, marginTop: 20 },
    view4: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    text8: { fontSize: 14, fontWeight: "400", color: '#000' },
    hopxanh: { backgroundColor: '#005aa9', width: 315, height: 52, borderRadius: 8, marginLeft: 10 },
    huong6: { justifyContent: 'center', alignItems: 'center', marginTop: 15 },
    text9: { fontSize: 16, fontWeight: "500", color: '#fff' }
})

export default ChiTietSp