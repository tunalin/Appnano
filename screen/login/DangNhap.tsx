import React from "react";
import { Image, Text, TouchableOpacity, View, FlatList,StyleSheet } from "react-native";

const data = [
    {
        id: '1',
        ten: 'Số điện thoại'
    },
    {
        id: '2',
        ten: 'Mật khẩu'
    },
]

const renderItem = ({ item, index }: any) => {
    return (
        <View>

            <View style={styles.view}>
                <View style={styles.view1}>
                    <Text style={styles.text}>{item.ten}</Text>
                </View>

            </View>


        </View>
    )
}

const DangNhap = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('chuadangnhap')}>
                <Image source={require('../../imgcart/back.png')}
                    style={styles.view1} />
            </TouchableOpacity>

            <View style={styles.view2}>
                <Image source={require('../../imgdangnhap/icon.png')}
                    style={styles.img} />
            </View>
            <View style={styles.view3}>
                <Text style={styles.text1}>Đăng nhập tài khoản</Text>
            </View>

            <View style={styles.huong}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}

                />
            </View>
            <View style={styles.huong1}>
                <TouchableOpacity onPress={()=>navigation.navigate('taikhoan')}>
                    <View style={styles.view4}>
                        <Text style={styles.text2}>Đăng nhập</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.view5}>
                <Text style={styles.text3}>Quên mật khẩu?</Text>
            </View>
            <View style={styles.view6}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text4}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DangKy')}>
                        <Text style={styles.text5}>Đăng ký</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    view:{ borderRadius: 7, elevation: 4, width: 320, height: 52, marginHorizontal:15,marginVertical:10,backgroundColor:'#fff'},
    view1:{ marginTop: 15, marginLeft: 15 },
    text:{ fontSize: 14, fontWeight: "400", color: '#8b8787' },
    container:{ width: '100%', height: 896, backgroundColor: '#fff' },
    view2:{ justifyContent: 'center', alignItems: 'center', marginTop: 130 },
    img:{ width: 146, height: 81 },
    view3:{ marginLeft: 50, marginTop: 20 },
    text1:{ fontSize: 20, fontWeight: "500", color: '#005aa9' },
    huong:{ justifyContent: 'center', alignItems: 'center', padding:2},
    huong1:{ justifyContent: 'center', alignItems: 'center', marginTop: 40 },
    view4:{ backgroundColor: '#005aa9', width: 326, height: 52, borderRadius: 7, alignItems: 'center', justifyContent: 'center' },
    text2:{ fontSize: 16, fontWeight: '500', color: '#fff' },
    view5:{ alignItems: 'flex-end', marginRight: 40, marginTop: 10 },
    text3:{ fontSize: 14, fontWeight: '400', color: '#8b8787' },
    view6:{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    text4:{ fontSize: 16, fontWeight: '400', color: '#8b8787' },
    text5:{ fontSize: 16, fontWeight: '400', color: '#005aa9', marginLeft: 5 }
})

export default DangNhap