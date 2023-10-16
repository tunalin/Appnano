import React, { useRef } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ViewToken } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import ListItem from './ListItem';


const NhaCungCap = () => {

    const data = [
        {
            id: '1',
            hinh: require('../../nhccimg/iconvcam.png'),
            ten: 'AUSLAC',
            noidung: 'Là nhà tài trợ Kim Cương cho các sản phẩm của DLCVN',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '2',
            hinh: require('../../nhccimg/freshmilk.png'),
            ten: 'FRESH MILK',
            noidung: 'Sữa tốt trong tầm tay của bạn',
            soluong: '25 sản phẩm',
            tp: 'Hà Nội'
        },
        {
            id: '3',
            hinh: require('../../nhccimg/water.png'),
            ten: 'WATER +',
            noidung: 'Nước khoáng và nước tinh khiết đóng chai',
            soluong: '19 sản phẩm',
            tp: 'Đà Nẵng'
        },
        {
            id: '4',
            hinh: require('../../nhccimg/cacao.png'),
            ten: 'CACAO MEKONG',
            noidung: 'Cacao tự nhiên được trồng ghép từ Đắk Lắk',
            soluong: '10 sản phẩm',
            tp: 'Hải Phòng'
        },
        {
            id: '5',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '6',
            hinh: require('../../nhccimg/iconvcam.png'),
            ten: 'AUSLAC',
            noidung: 'Là nhà tài trợ Kim Cương cho các sản phẩm của DLCVN',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '7',
            hinh: require('../../nhccimg/freshmilk.png'),
            ten: 'FRESH MILK',
            noidung: 'Sữa tốt trong tầm tay của bạn',
            soluong: '25 sản phẩm',
            tp: 'Hà Nội'
        },
        {
            id: '8',
            hinh: require('../../nhccimg/water.png'),
            ten: 'WATER +',
            noidung: 'Nước khoáng và nước tinh khiết đóng chai',
            soluong: '19 sản phẩm',
            tp: 'Đà Nẵng'
        },
        {
            id: '9',
            hinh: require('../../nhccimg/cacao.png'),
            ten: 'CACAO MEKONG',
            noidung: 'Cacao tự nhiên được trồng ghép từ Đắk Lắk',
            soluong: '10 sản phẩm',
            tp: 'Hải Phòng'
        },
        {
            id: '10',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '11',
            hinh: require('../../nhccimg/iconvcam.png'),
            ten: 'AUSLAC',
            noidung: 'Là nhà tài trợ Kim Cương cho các sản phẩm của DLCVN',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '12',
            hinh: require('../../nhccimg/freshmilk.png'),
            ten: 'FRESH MILK',
            noidung: 'Sữa tốt trong tầm tay của bạn',
            soluong: '25 sản phẩm',
            tp: 'Hà Nội'
        },
        {
            id: '13',
            hinh: require('../../nhccimg/water.png'),
            ten: 'WATER +',
            noidung: 'Nước khoáng và nước tinh khiết đóng chai',
            soluong: '19 sản phẩm',
            tp: 'Đà Nẵng'
        },
        {
            id: '14',
            hinh: require('../../nhccimg/cacao.png'),
            ten: 'CACAO MEKONG',
            noidung: 'Cacao tự nhiên được trồng ghép từ Đắk Lắk',
            soluong: '10 sản phẩm',
            tp: 'Hải Phòng'
        },
        {
            id: '15',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '16',
            hinh: require('../../nhccimg/iconvcam.png'),
            ten: 'AUSLAC',
            noidung: 'Là nhà tài trợ Kim Cương cho các sản phẩm của DLCVN',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '17',
            hinh: require('../../nhccimg/freshmilk.png'),
            ten: 'FRESH MILK',
            noidung: 'Sữa tốt trong tầm tay của bạn',
            soluong: '25 sản phẩm',
            tp: 'Hà Nội'
        },
        {
            id: '18',
            hinh: require('../../nhccimg/water.png'),
            ten: 'WATER +',
            noidung: 'Nước khoáng và nước tinh khiết đóng chai',
            soluong: '19 sản phẩm',
            tp: 'Đà Nẵng'
        },
        {
            id: '19',
            hinh: require('../../nhccimg/cacao.png'),
            ten: 'CACAO MEKONG',
            noidung: 'Cacao tự nhiên được trồng ghép từ Đắk Lắk',
            soluong: '10 sản phẩm',
            tp: 'Hải Phòng'
        },
        {
            id: '20',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '21',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '22',
            hinh: require('../../nhccimg/iconvcam.png'),
            ten: 'AUSLAC',
            noidung: 'Là nhà tài trợ Kim Cương cho các sản phẩm của DLCVN',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '23',
            hinh: require('../../nhccimg/freshmilk.png'),
            ten: 'FRESH MILK',
            noidung: 'Sữa tốt trong tầm tay của bạn',
            soluong: '25 sản phẩm',
            tp: 'Hà Nội'
        },
        {
            id: '24',
            hinh: require('../../nhccimg/water.png'),
            ten: 'WATER +',
            noidung: 'Nước khoáng và nước tinh khiết đóng chai',
            soluong: '19 sản phẩm',
            tp: 'Đà Nẵng'
        },
        {
            id: '25',
            hinh: require('../../nhccimg/cacao.png'),
            ten: 'CACAO MEKONG',
            noidung: 'Cacao tự nhiên được trồng ghép từ Đắk Lắk',
            soluong: '10 sản phẩm',
            tp: 'Hải Phòng'
        },
        {
            id: '26',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '27',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '28',
            hinh: require('../../nhccimg/iconvcam.png'),
            ten: 'AUSLAC',
            noidung: 'Là nhà tài trợ Kim Cương cho các sản phẩm của DLCVN',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
        {
            id: '29',
            hinh: require('../../nhccimg/freshmilk.png'),
            ten: 'FRESH MILK',
            noidung: 'Sữa tốt trong tầm tay của bạn',
            soluong: '25 sản phẩm',
            tp: 'Hà Nội'
        },
        {
            id: '30',
            hinh: require('../../nhccimg/water.png'),
            ten: 'WATER +',
            noidung: 'Nước khoáng và nước tinh khiết đóng chai',
            soluong: '19 sản phẩm',
            tp: 'Đà Nẵng'
        },
        {
            id: '31',
            hinh: require('../../nhccimg/cacao.png'),
            ten: 'CACAO MEKONG',
            noidung: 'Cacao tự nhiên được trồng ghép từ Đắk Lắk',
            soluong: '10 sản phẩm',
            tp: 'Hải Phòng'
        },
        {
            id: '32',
            hinh: require('../../nhccimg/dlc.png'),
            ten: 'DLCVN',
            noidung: 'Thực phẩm, mỹ phẩm xanh cho gia đình bạn',
            soluong: '99+ sản phẩm',
            tp: 'TP. Hồ Chí Minh'
        },
    ]
    const viewableItems = useSharedValue<ViewToken[]>([]);

    
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
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <ListItem item={item} viewableItems={viewableItems} />;
                    }}
                    showsVerticalScrollIndicator={false}
                    onViewableItemsChanged={({ viewableItems: vItems }) => {
                        viewableItems.value = vItems;
                    }}
                />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: { borderRadius: 7, borderColor: '#c2c2c2', borderWidth: 1, height: 106, width: 365, paddingVertical: 5, margin: 11, backgroundColor: 'pink' },
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
    view6: { flex: 1, marginHorizontal: 10 }
})
export default NhaCungCap;