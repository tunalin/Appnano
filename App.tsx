import React, { useEffect, useState } from "react";

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NhaCungCap from "./screen/nhaCungCap/NhaCungCap";
import Khodiem from "./screen/khoDoiDiem/Khodiem";
import BottomTab from "./navigation/TabNavigator";
import GioHng from "./screen/giohang/GioHng";
import ChiTietSp from "./screen/detailSP/ChiTietSP";
import DangNhap from "./screen/login/DangNhap";
import DangKy from "./screen/dangky/DangKy";
import ThongBao from "./screen/thongbao/ThongBao";
import DetailDonHang from "./screen/chitietdonhang/DetailDonHang";
import TaoDonHang from "./screen/taodonhang/TaoDonHang";
import XacNhanTT from "./screen/xacnhanthanhtoan/XacNhanTT";
import ThanhToanThanhCong from "./screen/donhangthanhcong/ThanhToanThanhCong";
import ChiTietTaiKhoan from "./screen/chitiettaikhoan/ChiTietTaiKhoan";
import RutTien from "./screen/ruttien/RutTien";
import NapTien from "./screen/naptien/NapTien";
import ChuyenTien from "./screen/chuyentien/ChuyenTien";
import LsRutT from "./screen/lichsuruttien/LsRutT";
import LsNTien from "./screen/lichsunaptien/LsNTien";
import DSTvien from "./screen/danhsachnhom/DSTvien";
import DetailKH from "./screen/thongtinkhachhang/DetailKH";
import ThongTinLienHe from "./screen/suadiachi/ThongTinLienHe";
import DiaChiPX from "./screen/suadiachi/DiaChiPX";
import ThemDiaChi from "./screen/themdiachi/ThemDiaChi";
import ThongTinChuyenTien from "./screen/chuyentien/ThongTinChuyenTien";
import ViChinh1 from "./screen/vitien/ViChinh1";
import ViChinh2 from "./screen/vitien/ViChinh2";
import SplashScreen from "react-native-splash-screen";
import NPPhoi from "./screen/danhsachnhom/DSNhom";
import HomeKho from "./screen/home/HomeKho";
import ChuaDangNhap from "./screen/chuadangnhap/ChuaDangNhap";
import Timkiem from "./screen/Timkiem/Timkiem";

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();
const App = () => {


    
    return (
   
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={BottomTab} options={{ headerShown: false }} />
                    <Stack.Screen name="Cart" component={GioHng} options={{ headerShown: false }} />
                    <Stack.Screen name="Detail" component={ChiTietSp} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={DangNhap} options={{ headerShown: false }} />
                    <Stack.Screen name="DangKy" component={DangKy} options={{ headerShown: false }} />
                    <Stack.Screen name="ThongBao" component={ThongBao} options={{ headerShown: false }} />
                    <Stack.Screen name="DetailSP" component={DetailDonHang} options={{ headerShown: false }} />
                    <Stack.Screen name="TaoDonHang" component={TaoDonHang} options={{ headerShown: false }} />
                    <Stack.Screen name="XacNhanThanhToan" component={XacNhanTT} options={{ headerShown: false }} />
                    <Stack.Screen name="thanhtoanthanhcong" component={ThanhToanThanhCong} options={{ headerShown: false }} />
                    <Stack.Screen name="chitiettaikhoan" component={ChiTietTaiKhoan} options={{ headerShown: false }} />
                    <Stack.Screen name="ruttien" component={RutTien} options={{ headerShown: false }} />
                    <Stack.Screen name="naptien" component={NapTien} options={{ headerShown: false }} />
                    <Stack.Screen name="chuyentien" component={ChuyenTien} options={{ headerShown: false }} />
                    <Stack.Screen name="lichsuruttien" component={LsRutT} options={{ headerShown: false }} />
                    <Stack.Screen name="lichsunaptien" component={LsNTien} options={{ headerShown: false }} />
                    <Stack.Screen name="danhsachnhom" component={DSTvien} options={{ headerShown: false }} />
                    <Stack.Screen name="thongtinkhachhang" component={DetailKH} options={{ headerShown: false }} />
                    <Stack.Screen name="thongtinlienhe" component={ThongTinLienHe} options={{ headerShown: false }} />
                    <Stack.Screen name="diachiphuongxa" component={DiaChiPX} options={{ headerShown: false }} />
                    <Stack.Screen name="themdiachi" component={ThemDiaChi} options={{ headerShown: false }} />
                    <Stack.Screen name="thongtinchuyentien" component={ThongTinChuyenTien} options={{ headerShown: false }} />
                    <Stack.Screen name="vitien1" component={ViChinh1} options={{ headerShown: false }} />
                    <Stack.Screen name="vitien2" component={ViChinh2} options={{ headerShown: false }} />
                    <Stack.Screen name="danhsachnhom1" component={NPPhoi} options={{ headerShown: false }} />
                    <Stack.Screen name="home1" component={HomeKho} options={{ headerShown: false }} />
                    <Stack.Screen name="timkiem" component={Timkiem} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
  
    );
};
export default App;