import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, FlatList, StyleSheet, TextInput } from "react-native";





const DangNhap = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [apiK, setApiK] = useState('');
    const [mainDomain, setMainDomain] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {

        const fetchDataFromStorage = async () => {
            const savedApiK = await AsyncStorage.getItem('apiK');
            const savedMainDomain = await AsyncStorage.getItem('mainDomain');

            if (savedApiK && savedMainDomain) {
                setApiK(savedApiK);
                setMainDomain(savedMainDomain);

            }
        };
        fetchDataFromStorage();
    }, []);



    const handleLogin = async () => {

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        try {
            const savedDomain = await AsyncStorage.getItem('mainDomain');
            const savedApiKeyClient = await AsyncStorage.getItem('apiK');
            if (savedDomain && savedApiKeyClient) {
                const response = await axios.post(`${savedDomain}/client_init/login?apikey=${savedApiKeyClient}`, formData);
                const responseData = response.data;
                if (responseData.message === "success") {
                    await AsyncStorage.setItem('data', JSON.stringify(responseData));
                    navigation.navigate('User');
                } else {
                    console.log(responseData.message);
                    setErrorMessage(responseData.message)
                }
            }
        } catch (error) {
            console.error('Lỗi khi thực hiện đăng nhập:', error);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('User')}>
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
                <TextInput
                    style={styles.view}
                    placeholder="Số điện thoại"
                    value={username}
                    onChangeText={(text) => {
                        setUsername(text);
                        setErrorMessage(''); 
                    }}
                />
                
                <TextInput
                    style={styles.view}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setErrorMessage(''); 
                    }}
                />
                <Text style={{ color: 'red' }}>{errorMessage}</Text>
            </View>
            <View style={styles.huong1}>
                {/* onPress={() => navigation.navigate('taikhoan')} */}
                <TouchableOpacity onPress={handleLogin}>
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

const styles = StyleSheet.create({
    view: { borderRadius: 7, elevation: 2, width: 320, height: 52, marginVertical: 10, backgroundColor: '#fff', paddingLeft: 20 },
    view1: { marginTop: 15, marginLeft: 15 },
    text: { fontSize: 14, fontWeight: "400", color: '#8b8787' },
    container: { width: '100%', height: 896, backgroundColor: '#fff' },
    view2: { justifyContent: 'center', alignItems: 'center', marginTop: 130 },
    img: { width: 146, height: 81 },
    view3: { marginLeft: 50, marginTop: 20 },
    text1: { fontSize: 20, fontWeight: "500", color: '#005aa9' },
    huong: { justifyContent: 'center', alignItems: 'center', padding: 2 },
    huong1: { justifyContent: 'center', alignItems: 'center', marginTop: 40 },
    view4: { backgroundColor: '#005aa9', width: 326, height: 52, borderRadius: 7, alignItems: 'center', justifyContent: 'center' },
    text2: { fontSize: 16, fontWeight: '500', color: '#fff' },
    view5: { alignItems: 'flex-end', marginRight: 40, marginTop: 10 },
    text3: { fontSize: 14, fontWeight: '400', color: '#8b8787' },
    view6: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    text4: { fontSize: 16, fontWeight: '400', color: '#8b8787' },
    text5: { fontSize: 16, fontWeight: '400', color: '#005aa9', marginLeft: 5 }
})

export default DangNhap