import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import realmData from "../../Realm/dataRealm";
import { DataTong } from "../DATASanPham/DataTong";
import { deleteSp, updateSp } from "../../Realm/realm";

import ListItem from './ListItem';

const update: any = realmData.objects('CartItem')

const GioHng = ({ navigation }: any) => {


    useEffect(() => {

        const handleDataUpdate = () => {
            const dataFromRealm: any = realmData.objects('CartItem');
            setCartUpdated(dataFromRealm);
        };


        realmData.addListener('change', handleDataUpdate);
        console.log(update)

        handleDataUpdate();


        return () => {

            realmData.removeAllListeners();
        };
    }, []);

    const handleClearCart = (id: string) => {
        deleteSp(id)
            .then(() => {
                console.log('success',id)
            })
            .catch((error: any) => {
                console.error('Error clearing cart:', error);
            });
    };

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [cartItems, setCartItems] = useState<[]>([]);
    const handleCheckBoxPress = (item: any) => {
        if (selectedItems.includes(item)) {

            setSelectedItems([]);
        } else {

            setSelectedItems([]);
        }
    };
    const handleSelectAllPress = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            const allItemKeys: any = cartItems1.map((item) => item.id);
            setSelectedItems(allItemKeys);
        }
        setSelectAll(!selectAll);
    };

    const cartItems1 = realmData.objects('CartItem');

    const mapCartItems = (cartItems1: any, Datagiohang: any) => {
        return Datagiohang.map((item2: any) => {
            const matchedItem = cartItems1.find((item1: any) => item1.id === item2.id);
            if (matchedItem) {

                return {
                    id: matchedItem.id,
                    hinh: item2.hinh,
                    ten: item2.ten,
                    gia: item2.gia,
                    soluong: matchedItem.soluong,
                };
            }
        });
    };

    const [cartUpdated, setCartUpdated] = useState(false);
    const cartItemsMapped = mapCartItems(cartItems1, DataTong);
    const filteredCartItems = cartItemsMapped.filter((item: any) => item && item.id);

    const handleIncrement = (id: string) => {
        const updatedCartItem = update.find((sp: any) => sp.id === id);
        if (updatedCartItem) {

            updateSp(id, updatedCartItem.soluong + 1);
            const updatedCartItems: any = cartItems.map((item: any) =>
                item.id === id ? { ...item, soluong: updatedCartItem.soluong + 1 } : item
            );
            setCartItems(updatedCartItems);

        }
    };
    const handleDecrement = (id: string) => {

        const updatedCartItem = update.find((sp: any) => sp.id === id);
        if (updatedCartItem && updatedCartItem.soluong > 1) {

            updateSp(id, updatedCartItem.soluong - 1);
            const updatedCartItems: any = cartItems.map((item: any) =>
                item.id === id ? { ...item, soluong: updatedCartItem.soluong - 1 } : item
            );
            setCartItems(updatedCartItems);


        }
    };




    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('timkiem')}>
                        <View style={{ right: 140 }}>
                            <Image source={require('../../imgcart/back.png')} style={{ width: 20 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text4}>Giỏ hàng</Text>
                </View>

                <FlatList
                    data={filteredCartItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }: { item: any }) => (
                        <ListItem
                            item={item}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                            onSelect={handleCheckBoxPress}
                            isSelected={selectedItems.includes(item.id)}
                            onDelete={handleClearCart}
                            onNavigate={() => navigation.navigate('Detail', { item })}

                        />
                    )}
                />


                <View style={styles.view5}>
                    <View style={styles.view6}>
                        <TouchableOpacity onPress={handleSelectAllPress}>
                            <View style={{
                                width: 22,
                                height: 22,
                                borderRadius: 11,
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: selectAll ? '#005aa9' : 'transparent',
                                marginTop: 18,
                                marginLeft: 5
                            }}>
                                {selectAll && (
                                    <Image
                                        source={require('../../imgcart/chon.png')}
                                        style={{ width: 16, height: 16 }}
                                    />
                                )}
                            </View>
                        </TouchableOpacity>

                        <View style={styles.view7}>
                            <Text style={styles.text5}>Chọn tất cả</Text>
                        </View>
                        <View style={styles.view8}>
                            <Text style={styles.text5}>Tổng giá bán</Text>
                        </View>
                        <View style={styles.view9}>
                            <Text style={styles.text6}>2,500,000đ</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={(item) => navigation.navigate('TaoDonHang', { item })}>
                        <View style={styles.view10}>
                            <View style={styles.view11}>
                                <Text style={styles.text3}>Tạo đơn</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    text3: { fontSize: 13, fontWeight: "600", color: '#fff' },
    container: { flex: 1, width: '100%', backgroundColor: '#fff' },
    top: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    text4: { fontSize: 20, fontWeight: "500", color: '#005aa9' },
    view5: { width: 414, height: 120, borderWidth: 0.5, borderColor: '#c2c2c2' },
    view6: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
    view7: { marginTop: 20, marginLeft: 16 },
    view8: { marginLeft: 110, marginTop: 20 },
    view9: { marginLeft: 25, marginTop: 18, right: 25 },
    text5: { fontSize: 13, fontWeight: "400", color: '#000' },
    text6: { fontSize: 16, fontWeight: "500", color: '#000' },
    view10: { justifyContent: 'center', alignItems: 'center', width: 370, height: 52, borderRadius: 7, backgroundColor: '#005aa9', left: 15, marginBottom: 10 },
    view11: { flexDirection: 'row', alignItems: 'center', justifyContent: "center" }
})

export default GioHng;