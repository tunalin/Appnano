import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View,StyleSheet } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

const GioHng = ({ navigation }: any) => {

    const rightSwipe = () => {
        return (
            <View style={{justifyContent:'center',alignItems:'center',paddingLeft:5}}>
                <Image source={require('../../imgcart/thungrac.png')}
                style={{marginRight:35}}/>
            </View>
        )
    }

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckBoxPress = (itemKey: string) => {
        if (selectedItems.includes(itemKey)) {
            setSelectedItems(selectedItems.filter((key) => key !== itemKey));
        } else {
            setSelectedItems([...selectedItems, itemKey]);
        }
    };

    const handleSelectAllPress = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            const allItemKeys = cartItems.map((item) => item.key);
            setSelectedItems(allItemKeys);
        }
        setSelectAll(!selectAll);
    };

    const cartItems = [
        {
            key: '1',
            img: require('../../imgcart/ncruachen.png'),
            name: 'Nước rửa chén sinh học True - Bio Natural Dishwashing Liquid',
            price: '206,000đ',
        },
        {
            key: '2',
            img: require('../../imgcart/dlcpro.png'),
            name: 'DL12 Probiotic',
            price: '610,000đ',
        },
        {
            key: '3',
            img: require('../../imgcart/dlcc.png'),
            name: 'DLC Antrodia Cinnamomea',
            price: '763,000đ',
        },
        {
            key: '4',
            img: require('../../imgcart/dlcxanh.png'),
            name: 'DLC Brazil Green Propolis',
            price: '206,000đ',
        },
    ];

    const renderLocation = ({item,index}:any) => {
        return (
            <Swipeable renderRightActions={rightSwipe}>
                <View style={styles.view}>
                    <View style={{ padding: 15 }}>
                        <TouchableOpacity onPress={() => handleCheckBoxPress(item.key)}>
                            <View style={{
                                width: 22,
                                height: 22,
                                borderRadius: 11,
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: selectedItems.includes(item.key) ? '#005aa9' : 'transparent',
                            }}>
                                {selectedItems.includes(item.key) && (
                                    <Image source={require('../../imgcart/chon.png')} />
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view1}>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={item.img} style={{ width: 64, height: 64 }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text2}>{item.price}</Text>
                        </View>
                        <View style={styles.view2}>
                            <View style={styles.view4}>
                                <Text style={styles.text3}>-</Text>
                            </View>
                            <View style={styles.view4}>
                                <Text style={styles.text3}>1</Text>
                            </View>
                            <View style={styles.view4}>
                                <Text style={styles.text3}>+</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Swipeable>
        )
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <View style={{ right: 140 }}>
                            <Image source={require('../../imgcart/back.png')} style={{ width: 20 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text4}>Giỏ hàng</Text>
                </View>
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.key}
                    renderItem={renderLocation}
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
                    <TouchableOpacity onPress={() => navigation.navigate('TaoDonHang')}>
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

const styles=StyleSheet.create({
    view: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
    view1:{ borderRadius: 7, borderBlockColor: '#fff', backgroundColor: '#fff', elevation: 6, flexDirection: 'row', alignItems: 'center', width: 345, height: 84, padding: 10 },
    text:{ fontSize: 13, fontWeight: "500", color: '#000', marginRight: 120 },
    text2:{ fontSize: 16, fontWeight: "500", color: '#005aa9', marginTop: 10 },
    view2:{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#005aa9', width: 60, height: 22, position: 'absolute', right: 20, bottom: 10, borderRadius: 25 },
    text3:{ fontSize: 13, fontWeight: "600", color: '#fff' },
    view4:{ marginHorizontal: 5 },
    container:{ flex: 1, width: '100%', backgroundColor: '#fff' },
    top:{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    text4:{ fontSize: 20, fontWeight: "500", color: '#005aa9' },
    view5:{ width: 414, height: 120, borderWidth: 0.5, borderColor: '#c2c2c2' },
    view6:{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
    view7:{ marginTop: 20, marginLeft: 16 },
    view8:{ marginLeft: 110, marginTop: 20 },
    view9:{ marginLeft: 25, marginTop: 18,right:25 },
    text5:{ fontSize: 13, fontWeight: "400", color: '#000' },
    text6:{ fontSize: 16, fontWeight: "500", color: '#000' },
    view10:{ justifyContent: 'center', alignItems: 'center', width: 370, height: 52, borderRadius: 7, backgroundColor: '#005aa9', left: 15, marginBottom: 10 },
    view11:{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }
})

export default GioHng;
