import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import realmData from "../../Realm/dataRealm";
import { DataTong } from "../DATASanPham/DataTong";
import { deleteSp, updateSp } from "../../Realm/realm";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedGestureHandler,
} from 'react-native-reanimated';

const update: any = realmData.objects('CartItem')

const GioHng = ({ navigation }: any) => {

    const translateX = useSharedValue(0);

    const swipeableItemStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });




    useEffect(() => {
        const handleDataUpdate = () => {
            const dataFromRealm: any = realmData.objects('CartItem');
            setCartUpdated(dataFromRealm);
        };

        // Add the event listener to your emitter
        realmData.addListener('change', handleDataUpdate);
        console.log(update)
        // Call your initial data update
        handleDataUpdate();

        // Clean up the listener when the component unmounts
        return () => {
            // Remove the event listener
            realmData.removeAllListeners();
        };
    }, []);




    const rightSwipe = (id: string) => {
        return (
            <TouchableOpacity onPress={() => handleClearCart(id)}>
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 45 }}>
                    <Image source={require("../../imgcart/thungrac.png")} style={{ marginRight: 35 }} />
                </View>
            </TouchableOpacity>
        );
    };
    const handleClearCart = (id: string) => {
        deleteSp(id)
            .then(() => {

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
            // Bỏ chọn mục nếu đã được chọn
            setSelectedItems([]);
        } else {
            // Chọn mục và bỏ chọn tất cả các mục khác
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
                // Nếu tìm thấy mục phù hợp, trả về một đối tượng mới với thông tin từ cả hai mảng
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
            // Check if the current quantity is greater than 0 before incrementing
            updateSp(id, updatedCartItem.soluong + 1);
            const updatedCartItems: any = cartItems.map((item: any) =>
                item.id === id ? { ...item, soluong: updatedCartItem.soluong + 1 } : item
            );
            setCartItems(updatedCartItems);
            // You may want to update the state with the updated Realm data here
        }
    };
    const handleDecrement = (id: string) => {
        // Giảm số lượng của mục đi 1 và cập nhật lại giỏ hàng
        const updatedCartItem = update.find((sp: any) => sp.id === id);
        if (updatedCartItem && updatedCartItem.soluong > 1) {
            // Check if the current quantity is greater than 1 before decrementing
            updateSp(id, updatedCartItem.soluong - 1);
            const updatedCartItems: any = cartItems.map((item: any) =>
                item.id === id ? { ...item, soluong: updatedCartItem.soluong - 1 } : item
            );
            setCartItems(updatedCartItems);

            // You may want to update the state with the updated Realm data here
        }
    };

    const leftSwipe = (id: string) => {
        return (
            <TouchableOpacity onPress={() => handleClearCart(id)}>
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 45, backgroundColor: "red" }}>
                    <Image source={require("../../imgcart/thungrac.png")} style={{ marginRight: 35 }} />
                </View>
            </TouchableOpacity>
        );
    };

    const renderCartItem = ({ item }: { item: any }) => {
        if (!item || !item.id) {
            return null;
        }
        const handleSwipeRight = () => {
            // Handle item deletion when swiped right
            handleClearCart(item.id);
        };
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
                <Swipeable
                    renderRightActions={() => rightSwipe(item.id)}
                    onSwipeableRightOpen={handleSwipeRight} // Add this line to handle swipe right action
                >

                    <Animated.View style={[styles.view]}>
                        <View style={{ padding: 15 }}>
                            <TouchableOpacity onPress={() => handleCheckBoxPress(item.id)}>
                                <View style={{
                                    width: 22,
                                    height: 22,
                                    borderRadius: 11,
                                    borderColor: '#c2c2c2',
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: selectedItems.includes(item.id) ? '#005aa9' : 'transparent',
                                }}>
                                    {selectedItems.includes(item.id) && (
                                        <Image source={require('../../imgcart/chon.png')} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view1}>
                            <View style={{ marginLeft: 10 }}>

                                <Image source={item.hinh} style={{ width: 64, height: 64 }} />

                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>{item.ten}</Text>
                                <Text style={styles.text2}>{item.gia}</Text>
                            </View>
                            <View style={styles.view2}>
                                <TouchableOpacity onPress={() => handleDecrement(item.id)}>
                                    <View style={styles.view4}>
                                        <Text style={styles.text3}>-</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.view4}>
                                    <Text style={styles.text3}>{item.soluong}</Text>
                                </View>
                                <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                                    <View style={styles.view4}>
                                        <Text style={styles.text3}>+</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Animated.View>
                </Swipeable>
            </TouchableOpacity>

        )
    }

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
                    renderItem={renderCartItem}
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
    view: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
    view1: { borderRadius: 7, borderBlockColor: '#fff', backgroundColor: '#fff', elevation: 6, flexDirection: 'row', alignItems: 'center', width: 345, height: 84, padding: 10 },
    text: { fontSize: 13, fontWeight: "500", color: '#000', marginRight: 120 },
    text2: { fontSize: 16, fontWeight: "500", color: '#005aa9', marginTop: 10 },
    view2: { justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#005aa9', width: 60, height: 22, position: 'absolute', right: 20, bottom: 10, borderRadius: 25 },
    text3: { fontSize: 13, fontWeight: "600", color: '#fff' },
    view4: { marginHorizontal: 5 },
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