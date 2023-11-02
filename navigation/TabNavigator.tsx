import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import NhaCungCap from "../screen/nhaCungCap/NhaCungCap";
import Khodiem from "../screen/khoDoiDiem/Khodiem";
import Account from "../screen/menutaikhoan/Account";
import { Image, StyleSheet, View } from "react-native";
import DonHng from "../screen/donHang/DonHng";
import ChuaDangNhap from "../screen/chuadangnhap/ChuaDangNhap";
import HomeKho from "../screen/home/HomeKho";
import SplashScreen from "react-native-splash-screen";
import CustomBottomTab from "./components/BottomTabs/CustomBottomTab";


const Tab = createBottomTabNavigator();



const TabNavigator = () => {

    useEffect(() => {
        SplashScreen.hide(); 
    }, [])


    return (
        <Tab.Navigator screenOptions={{headerShown: false}}
            tabBar={(props) => <CustomBottomTab{...props}  />}>
            <Tab.Screen name="Home" component={HomeKho} options={{
                tabBarLabelStyle: { display: 'none' },
              
            }}
            />
            <Tab.Screen name="Point" component={Khodiem} options={{
                tabBarLabelStyle: { display: 'none' },
               
            }}
            />
            <Tab.Screen name="Provider" component={NhaCungCap} options={{
                tabBarLabelStyle: { display: 'none' },
                
            }}
            />
            <Tab.Screen name="Order" component={DonHng} options={{
                tabBarLabelStyle: { display: 'none' },
                
            }}
            />
            {/* <Tab.Screen name="Account" component={Account} options={{
                tabBarLabelStyle:{display:'none'},
                
            /> */}

            <Tab.Screen name="User" component={ChuaDangNhap} options={{
                tabBarLabelStyle: { display: 'none' },
                
            }}
            />
        </Tab.Navigator>
    )
}


export default TabNavigator