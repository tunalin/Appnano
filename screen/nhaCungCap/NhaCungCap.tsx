import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


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
    ]

    const renderIcon = ({ item, index }: any) => {
        return (
            <TouchableOpacity>
                
                <View style={styles.view}>
                    <View style={styles.top}>
                        <Image source={item.hinh} style={styles.img} />
                        <View style={styles.view1}>
                            <View style={styles.view2}>
                                <Text style={styles.text}>{item.ten}</Text>
                                <Text style={styles.text1}>{item.noidung}</Text>
                            </View>
                            <View style={styles.view3}>
                                <Text style={styles.text2}>{item.soluong}</Text>
                                <Text style={styles.text3}>{item.tp}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>
            <Text style={styles.text4}>Nhà cung cấp</Text>
            <View style={styles.view4}>
                <View style={styles.view5}>
                    <Text style={styles.text5}>Tìm nhà cung cấp:</Text>
                    <Image source={require('../../img/ei_search.png')}
                        style={styles.img1} />
                </View>
                <Image
                    source={require('../../nhccimg/Rectangle313.png')}
                    style={styles.img1}
                />
            </View>

            <View style={styles.view6}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderIcon} 
                    showsVerticalScrollIndicator={false}/>
            </View>



        </View>

    )
}
const styles = StyleSheet.create({
    view:{ borderRadius: 7, borderColor: '#c2c2c2', borderWidth: 1, height: 106, width: 365, paddingVertical: 5,margin:5,},
    top:{ flexDirection: 'row', paddingHorizontal:5,paddingVertical:5 },
    view1:{ flexDirection: 'column', paddingVertical: 15,paddingHorizontal:15},
    img:{ width: 64, height: 60 },
    view2:{ width: 240, height: 32 },
    text:{ color: '#000', fontSize: 16, fontWeight: '500', bottom: 15 },
    text1:{ fontWeight: '300', color: '#000', fontSize: 13, bottom: 10 },
    view3:{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: 273, height: 32 },
    text2:{ color: '#005aa9', fontSize: 13, fontWeight: '300' },
    text3:{ color: '#000', fontSize: 13, fontWeight: '300' },
    container:{ flex: 1, width: '100%', height: 896, backgroundColor: '#fff' },
    text4:{ fontSize: 20, fontWeight: '500', color: '#005aa9', textAlign: 'center' },
    view4:{ marginHorizontal: 10, marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    view5:{ borderWidth: 1, borderColor: "#c2c2c2", borderStyle: "solid", borderRadius: 7, backgroundColor: '#fff', width: 345, height: 46, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 },
    text5:{ color: "#c2c2c2", fontSize: 16, fontWeight: '500', textAlign: 'left' },
    img1:{ height: 23, width: 23 },
    view6:{ flex:1,marginHorizontal:10}
})  
export default NhaCungCap;