import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import NhaCungCap from "../screen/nhaCungCap/NhaCungCap";
import Khodiem from "../screen/khoDoiDiem/Khodiem";
import Account from "../screen/menutaikhoan/Account";
import { Animated, Image, StyleSheet, View } from "react-native";
import DonHng from "../screen/donHang/DonHng";
import ChuaDangNhap from "../screen/chuadangnhap/ChuaDangNhap";
import HomeKho from "../screen/home/HomeKho";
import SplashScreen from "react-native-splash-screen";

const Tab = createBottomTabNavigator();



const TabNavigator = () => {

    useEffect(()=>{
        SplashScreen.hide();
    },[])

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle:{ backgroundColor: '#005AA9', height:60}, tabBarLabelStyle: { color: '#fff' } }}>
            <Tab.Screen name="Home" component={HomeKho} options={{
                tabBarLabelStyle:{display:'none'},
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.bacGHome}>
                            <Image source={require('../imgvector/homexanh.png')}
                                style={[styles.iconHome]}
                            />
                        </View>
                        : <Image source={require('../imgvector/home.png')}
                            style={{ width: 24, height: 24 }}
                        />
                ),
            }}
            />
            <Tab.Screen name="Khodiem" component={Khodiem} options={{
                tabBarLabelStyle:{display:'none'},
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.bacGHome}>
                            <Image source={require('../imgvector/dolaxanh.png')}
                                style={[styles.iconHome]}
                            />
                        </View>
                        : <Image source={require('../imgvector/xoaydola.png')}
                            style={{ width: 24, height: 24 }}
                        />
                ),
            }}
            />
            <Tab.Screen name="Nhacungcap" component={NhaCungCap} options={{
                tabBarLabelStyle:{display:'none'},
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.bacGHome}>
                            <Image source={require('../imgvector/thexanh.png')}
                                style={[styles.iconHome]}
                            />
                        </View>
                        : <Image source={require('../imgvector/the.png')}
                            style={{ width: 24, height: 24 }}
                        />
                ),
            }}
            />
            <Tab.Screen name="Donhang" component={DonHng} options={{
                 tabBarLabelStyle:{display:'none'},
                 tabBarIcon: ({ focused }) => (
                     focused ?
                         <View style={styles.bacGHome}>
                             <Image source={require('../imgvector/danhsachxanh.png')}
                                 style={[styles.iconHome]}
                             />
                         </View>
                         : <Image source={require('../imgvector/danhsach.png')}
                             style={{ width: 24, height: 24 }}
                         />
                 ),
             }}
             />
              <Tab.Screen name="taikhoan" component={Account} options={{
                tabBarLabelStyle:{display:'none'},
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.bacGHome}>
                            <Image source={require('../imgvector/accountxanh.png')}
                                style={[styles.iconHome]}
                            />
                        </View>
                        : <Image source={require('../imgvector/account.png')}
                            style={{ width: 24, height: 24 }}
                        />
                ),
            }}
            />

            {/* <Tab.Screen name="chuadangnhap" component={ChuaDangNhap} options={{
                tabBarLabelStyle:{display:'none'},
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.bacGHome}>
                            <Image source={require('../imgvector/accountxanh.png')}
                                style={[styles.iconHome]}
                            />
                        </View>
                        : <Image source={require('../imgvector/account.png')}
                            style={{ width: 24, height: 24 }}
                        />
                ),
            }}
            /> */}
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    iconHome: {
        width: 24,
        height: 24,
        transform: [{
            rotate: '-45deg'
        }],

    },
    bacGHome: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        transform: [{
            rotate: '45deg'
        }],
        borderRadius: 10, // Làm tròn nút bấm
        justifyContent: 'center',
        alignItems: 'center',
        padding:16
    }
})


export default TabNavigator