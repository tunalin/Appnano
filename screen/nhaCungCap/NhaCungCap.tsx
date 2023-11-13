import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ViewToken } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, useAnimatedGestureHandler, interpolate, Extrapolate, useAnimatedScrollHandler } from 'react-native-reanimated';
import Provider from '../FetchApi/StoreData';
import ListItem from './ListItem';


const NhaCungCap = () => {
    const [supplierData, setSupplierData] = useState([]);

    const fetchData = async () => {
        const response: any = await Provider();
        const nccData = response.data.l
        // console.log(JSON.stringify(nccData))
        if (nccData) {
            setSupplierData(nccData);

        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const viewableItems = useSharedValue<ViewToken[]>([]);

    const onViewCallBack = React.useCallback(({ viewableItems: vItems }:any) => {
        viewableItems.value = vItems;
    }, []);

    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
    return (

        <View style={[styles.container]}>
            <Text style={styles.text4}>Nhà cung cấp</Text>
            <View style={styles.view4}>
                <View style={styles.view5}>
                    <Text style={styles.text5}>Tìm nhà cung cấp:</Text>
                    <Image source={require('../../img/ei_search.png')} style={styles.img1} />
                </View>
                <Image source={require('../../nhccimg/Rectangle313.png')} style={styles.img1} />
            </View>
                <Animated.View style={[styles.view6]}>
                    <FlatList
                        data={supplierData}
                        keyExtractor={(item, index) => index.toString()}
                        onViewableItemsChanged={onViewCallBack}
                        viewabilityConfig={viewConfigRef.current}
                        renderItem={({ item,index }: any) => {
                            return <ListItem  index={index} supplierData={item} viewableItems={viewableItems} />;
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: { borderRadius: 7, borderColor: '#c2c2c2', borderWidth: 1, height: 106, width: 365, paddingVertical: 5, margin: 11 },
    top: { flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 5 },
    view1: { flexDirection: 'column', paddingVertical: 15, paddingHorizontal: 15 },
    img: { width: 64, height: 60, borderRadius: 100 },
    view2: { width: 240, height: 32 },
    text: { color: '#000', fontSize: 16, fontWeight: '500', bottom: 15 },
    text1: { fontWeight: '300', color: '#000', fontSize: 13, bottom: 10 },
    view3: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: 273, height: 32 },
    text2: { color: '#005aa9', fontSize: 13, fontWeight: '300' },
    text3: { color: '#000', fontSize: 13, fontWeight: '300' },
    container: { flex: 1, width: '100%', height: 896, backgroundColor: '#fff' },
    text4: { fontSize: 20, fontWeight: '500', color: '#005aa9', textAlign: 'center' },
    view4: { marginHorizontal: 10, marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    view5: { borderWidth: 1, borderColor: "#c2c2c2", borderStyle: "solid", borderRadius: 7, backgroundColor: '#fff', width: 345, height: 46, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 },
    text5: { color: "#c2c2c2", fontSize: 16, fontWeight: '500', textAlign: 'left' },
    img1: { height: 23, width: 23 },
    view6: { flex: 1, marginHorizontal: 10 },
    placeholderImage: {
        width: 64,
        height: 60,
        backgroundColor: '#ccc', // or any other color you prefer for the placeholder
        borderRadius: 100,
    },
})
export default NhaCungCap;