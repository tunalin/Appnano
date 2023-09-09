import React from "react";
import { Image, Text, TouchableOpacity, View ,FlatList, StyleSheet} from "react-native";

const data =[
    {
        id:'1',
        ten:'Nguyễn Thái Năng'
    },
    {
        id:'2',
        ten:'Email'
    },
    {
        id:'3',
        ten:'Số điện thoại'
    },
    {
        id:'4',
        ten:'Mật khẩu'
    },
    {
        id:'5',
        ten:'Nhập lại mật khẩu'
    },
    {
        id:'6',
        ten:'Mã giới thiệu'
    },
]

const renderItem = ({item,index}:any) =>{
    return(
        <View>
             <View style={styles.huong}>
                    <View style={styles.huong2}>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: item.ten === 'Nguyễn Thái Năng' ? '#000' : '#8B8787' }}>{item.ten}</Text>
                    </View>
                </View>
        </View>
    )
}

const DangKy = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image source={require('../../imgcart/back.png')}
                    style={{ marginTop: 15, marginLeft: 15 }} />
            </TouchableOpacity>

            <View style={styles.huong3}>
                <Image source={require('../../imgdangky/icon.png')}
                    style={{ width: 146, height: 81 }} />
            </View>
            <View style={{ marginTop: 20, marginLeft: 44 }}>
                <Text style={styles.textttkm}>Tạo tài khoản mới</Text>
            </View>
            <View style={styles.huong4}>
               <FlatList 
               data={data}
               keyExtractor={(item)=>item.id}
               renderItem={renderItem}/>


            </View>
            
            <View style={styles.huong5}>
                <TouchableOpacity >
                    <View style={styles.boxxanh}>
                        <Text style={styles.textdk}>Đăng ký</Text>
                    </View>
                </TouchableOpacity>
            </View>
           
            <View style={styles.huong6}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textDn}>Đăng nhập</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    )
}

const styles=StyleSheet.create({
    huong:{ borderRadius: 7, elevation: 3, width: 320, height: 55, marginHorizontal:15,marginVertical:10,backgroundColor:'#fff'},
    huong2:{ marginTop: 17, marginLeft: 15 },
    container:{ width: '100%', height: 896, backgroundColor:'#fff' },
    huong3:{ justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    textttkm:{ fontSize: 20, fontWeight: "500", color: '#005aa9' },
    huong4:{ justifyContent: 'center', alignItems: 'center' },
    huong5:{ justifyContent: 'center', alignItems: 'center', marginTop: 40 },
    boxxanh:{ backgroundColor: '#005aa9', width: 326, height: 52, borderRadius: 7, alignItems: 'center', justifyContent: 'center' },
    textdk:{ fontSize: 16, fontWeight: '500', color: '#fff' },
    huong6:{  justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    text:{ fontSize: 16, fontWeight: '400', color: '#8b8787' },
    textDn:{ fontSize: 16, fontWeight: '400', color: '#005aa9', marginLeft: 5 }
})

export default DangKy