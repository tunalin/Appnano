import React from "react";
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const DATA = [
    {
        id: '1',
        hinh: require('../../khodiemimg/suaaulac.png'),
        tensp: 'Auslac Lactoferrin (Giá Ưu Đãi)',
        sosp: 'AUS01',
        gia: '1,089,000 Point'

    },
    {
        id: '2',
        hinh: require('../../khodiemimg/thcogai.png'),
        tensp: 'DLC Soybean Germ Formula',
        sosp: 'AUS01',
        gia: '1,361,000 Point'

    },
    {
        id: '3',
        hinh: require('../../khodiemimg/dlcrice.png'),
        tensp: 'DLC Red Yeast Rice Formula',
        sosp: 'AUS01',
        gia: '1,089,000 Point'

    },
    {
        id: '4',
        hinh: require('../../khodiemimg/dlcgreen.png'),
        tensp: 'DLC Brazil Green Propolis',
        sosp: 'AUS01',
        gia: '1,089,000 Point'

    },
]



const Khodiem = ({ navigation }: any) => {
    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <View style={styles.view}>
                    <View style={styles.view1}>
                        <Image source={item.hinh} style={styles.img} />
                        <Text style={styles.text}>{item.tensp}</Text>
                        <Text style={styles.text1}>{item.sosp}</Text>
                        <Text style={styles.text2}>{item.gia}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <View style={styles.container}>
            <View style={{ height: '35%' }}>
                <Text style={styles.text3}>Kho Đổi Điểm</Text>
                <Image source={require('../../khodiemimg/ghxanh.png')} style={styles.img1} />
                <Text style={styles.text4}>Chào Thái Năng!</Text>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Image source={require('../../khodiemimg/hinhnguoideocavat.png')} style={styles.img2} />
                        <Text style={styles.text5}>5,000,000</Text>
                    </View>
                </View>

                <View style={styles.view4}>
                    <Text style={styles.text6}>Bạn cần tìm gì?</Text>
                    <Image source={require('../../khodiemimg/icontimkiem.png')}
                        style={styles.img3} />
                </View>

            </View>
            <View style={{marginHorizontal:15,marginTop:15}}>
                <Text style={styles.text7}>25 sản phầm phù hợp</Text>
            </View>

            <View style={{ flex: 1, margin: 5 ,marginTop:15}}>

                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                />


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: { height: '52%', marginTop: -10 },
    view1: { flex: 1, shadowOpacity: 1, elevation: 4, shadowRadius: 4, shadowOffset: { width: 0, height: 4 }, shadowColor: '#000', borderRadius: 7, backgroundColor: '#fff', margin: 10, padding: 10 },
    img: { width: 131, height: 112, margin: 6 },
    text: { width: 150, fontSize: 16, color: '#005aa9', fontWeight: '500', fontFamily: 'Montserrat' },
    text1: { height: 16, width: 91, fontWeight: '400', fontSize: 13, fontFamily: 'Montserrat', marginTop: 8 },
    text2: { color: '#09355C', fontSize: 16, fontWeight: '500', fontFamily: 'Montserrat', marginTop: 8 },
    container: { flex: 1, width: '100%', backgroundColor: '#fff', height: 896 },
    text3: { top: 74, left: 139, fontSize: 20, fontWeight: '500', fontFamily: 'Montserrat', color: '#005aa9' },
    img1: { top: 74, left: 355, position: 'absolute' },
    text4: { top: 128, left: 16, fontFamily: 'Montserrat', fontSize: 16, fontWeight: '400', position: 'absolute', color: '#000' },
    view2: {
        width: 133, height: 28, top: 128, left: 266, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 4,
        position: 'absolute'
    },
    view3: { width: 132, backgroundColor: '#09355c', height: 28, position: 'absolute', borderRadius: 20, right: 20 },
    img2: { left: 105, borderRadius: 20, width: 28, position: "absolute" },
    text5: { top: 4, left: 12, fontSize: 16, fontWeight: '500', fontFamily: 'Montserrat', color: '#fff' },
    view4: { top: 181, borderWidth: 1, borderColor: '#c2c2c2', borderRadius: 7, width: 360, height: 45, marginLeft: 15, position: 'absolute' },
    text6: { top: 11, left: 18, position: 'absolute' },
    img3: { top: 11, left: 338, position: 'absolute' },
    text7: { fontSize: 16, fontWeight: '500', color: '#000', fontFamily: 'Montserrat' }
})

export default Khodiem;