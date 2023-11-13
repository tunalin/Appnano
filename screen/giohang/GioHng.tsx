import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import realmData from "../../Realm/dataRealm";
import { deleteSp, updateSp } from "../../Realm/realm";
import ListItem from './ListItem';

const cartItems1: any = realmData.objects('CartItem');

const GioHng = ({ navigation }: any) => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState<any>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const handleDataUpdate = () => {
            const dataFromRealm: any = realmData.objects('CartItem');
            setCartItems(dataFromRealm);
        };
        realmData.addListener('change', handleDataUpdate);
        console.log(cartItems1)
        handleDataUpdate();

        const initialTotalPrice: any = calculateTotalPrice();
        setTotalPrice(initialTotalPrice);
        return () => {
            realmData.removeAllListeners();
        };
    }, []);

    const calculateTotalPrice = () => {
        let total = 0;
        for (const item of cartItems1) {
            if (selectedItems.includes(item.product_id)) {
                const itemPrice = item.price || 0;
                const itemQuantity = item.soluong || 0; // Replace 'item.soluong' with the actual quantity field
                total += itemPrice * itemQuantity;
            }
        }
        return total;
    };

    const handleClearCart = (product_id: string) => {
        deleteSp(product_id)
            .then(() => {
                console.log('success', product_id)
            })
            .catch((error: any) => {
                console.error('Error clearing cart:', error);
            });
    };


    const handleCheckBoxPress = (product_id: string) => {
        if (selectedItems.includes(product_id)) {
            setSelectedItems(selectedItems.filter((id: string) => id !== product_id));
        } else {
            setSelectedItems([...selectedItems, product_id]);
        }
    };
    useEffect(() => {
        const newTotalPrice = calculateTotalPrice();
        setTotalPrice(newTotalPrice);
    }, [selectedItems]);


    const handleSelectAllPress = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            const allItemKeys: any = cartItems1.map((item: any) => item.product_id);
            setSelectedItems(allItemKeys);
        }
        setSelectAll(!selectAll);

    };



    const handleIncrement = (id: string) => {
        const updatedCartItem = cartItems1.find((sp: any) => sp.product_id === id);
        if (updatedCartItem) {
            updateSp(id, updatedCartItem.soluong + 1);
            const updatedCartItems: any = cartItems.map((item: any) =>
                item.product_id === id ? { ...item, soluong: updatedCartItem.soluong + 1 } : item
            );
            setCartItems(updatedCartItems);
        }
    };
    const handleDecrement = (id: string) => {
        const updatedCartItem = cartItems1.find((sp: any) => sp.product_id === id);
        if (updatedCartItem && updatedCartItem.soluong > 1) {
            updateSp(id, updatedCartItem.soluong - 1);
            const updatedCartItems: any = cartItems.map((item: any) =>
                item.product_id === id ? { ...item, soluong: updatedCartItem.soluong - 1 } : item
            );
            setCartItems(updatedCartItems);
        }
    };

    const scrolllRef = useRef(null)



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


                <ScrollView ref={scrolllRef} style={{ padding: 10, flex: 1 }} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={cartItems1}
                        keyExtractor={(item) => item.product_id}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <ListItem
                                simultaneousHandlers={scrolllRef}
                                item={item}
                                onIncrement={handleIncrement}
                                onDecrement={handleDecrement}
                                onSelect={(product_id) => handleCheckBoxPress(product_id)}
                                isSelected={selectedItems.includes(item.product_id)}
                                onDelete={handleClearCart}
                                onNavigate={() => navigation.navigate('Detail', { item })}

                            />
                        )}
                    />
                </ScrollView>

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
                            <Text style={styles.text6}>{totalPrice}đ</Text>
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