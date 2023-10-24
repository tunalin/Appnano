import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, FlatList, StyleSheet, TextInput, Alert } from "react-native";


const DangKy = ({ navigation }: any) => {
    const [hoten, sethoten] = useState('')
    const [email, setemail] = useState('')
    const [sodt, setsodt] = useState('')
    const [matkhau, setmatkhau] = useState('')
    const [nhaplaimk, setnhaplaimk] = useState('')
    const [magioithieu, setmagioithieu] = useState('')
    const [apiK, setApiK] = useState('');
    const [mainDomain, setMainDomain] = useState('');
    const [errors, setErrors] = useState({
        hoten: '',
        email: '',
        sodt: '',
        matkhau: '',
        nhaplaimk: '',
    });
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

    const isFormValid = () => {
        const newErrors = {
            hoten: '',
            email: '',
            sodt: '',
            matkhau: '',
            nhaplaimk: '',
        };

        let isValid = true;

        if (!hoten) {
            newErrors.hoten = 'Vui lòng nhập họ và tên';
            isValid = false;
        }
        if (!email) {
            newErrors.email = 'Vui lòng nhập Email';
            isValid = false;
        } else if (!/^\w+([\.-]?\w+)*@gmail\.com$/.test(email)) {
            newErrors.email = 'Địa chỉ Email không hợp lệ';
            isValid = false;
        }
        if (!sodt) {
            newErrors.sodt = 'Vui lòng nhập số điện thoại';
            isValid = false;
        } else if (!/^\d{10}$/.test(sodt)) {
            newErrors.sodt = 'Số điện thoại không hợp lệ';
            isValid = false;
        }
        if (!matkhau) {
            newErrors.matkhau = 'Vui lòng nhập mật khẩu';
            isValid = false;
        }
        if (!nhaplaimk) {
            newErrors.nhaplaimk = 'Vui lòng nhập lại mật khẩu';
            isValid = false;
        } else if (matkhau !== nhaplaimk) {
            newErrors.nhaplaimk = 'Mật khẩu nhập lại không khớp';
            isValid = false;
        }

        // Thêm các kiểm tra tương tự cho các trường còn lại.

        setErrors(newErrors);

        return isValid;
    };

    const handleRegister = async () => {
        if (isFormValid()) {
            const formData = new FormData();
            formData.append('fullname', hoten);
            formData.append('email', email);
            formData.append('mobile', sodt);
            formData.append('password', matkhau);
            formData.append('referral_by', magioithieu ? magioithieu : ' ');
            try {
                const savedDomain = await AsyncStorage.getItem('mainDomain');
                const savedApiKeyClient = await AsyncStorage.getItem('apiK');
                if (savedDomain && savedApiKeyClient) {
                    const response = await axios.post(`${savedDomain}/client_init/register?apikey=${savedApiKeyClient}`, formData, {
                        headers: {
                            "Content-Type": 'multipart/form-data',
                        },
                        timeout: 20000
                    });
                    const responseData = response.data;
                    if (responseData.message === "success") {
                        navigation.navigate('User');
                    } else {
                        setErrorMessage(responseData.message);
                    }
                }
            } catch (error) {
                console.error('Lỗi khi thực hiện đăng nhập:', error);
            }
        };
    };
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
            <Text style={{ color: 'red', marginLeft: 47 }}>{errorMessage}</Text>
            <View style={{ marginTop: 20, marginLeft: 44 }}>
                <Text style={styles.textttkm}>Tạo tài khoản mới</Text>
            </View>

            <View style={styles.huong4}>
                <TextInput
                    style={styles.huong}
                    placeholder="Họ và tên"
                    value={hoten}
                    onChangeText={(text) => sethoten(text)}
                />
                <Text style={{ color: 'red' }}>{errors.hoten}</Text>
                <TextInput
                    style={styles.huong}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setemail(text)}
                />
                <Text style={{ color: 'red' }}>{errors.email}</Text>
                <TextInput
                    style={styles.huong}
                    placeholder="Số điện thoại"
                    value={sodt}
                    onChangeText={(text) => setsodt(text)}
                    keyboardType="numeric"
                />
                <Text style={{ color: 'red' }}>{errors.sodt}</Text>
                <TextInput
                    style={styles.huong}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    value={matkhau}
                    onChangeText={(text) => setmatkhau(text)}
                />
                <Text style={{ color: 'red' }}>{errors.matkhau}</Text>
                <TextInput
                    style={styles.huong}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={true}
                    value={nhaplaimk}
                    onChangeText={(text) => setnhaplaimk(text)}
                />
                <Text style={{ color: 'red' }}>{errors.nhaplaimk}</Text>
                <TextInput
                    style={styles.huong}
                    placeholder="Mã giới thiệu"
                    value={magioithieu}
                    onChangeText={(text) => setmagioithieu(text)}
                />

            </View>

            <View style={styles.huong5}>
                <TouchableOpacity onPress={handleRegister}>
                    <View style={styles.boxxanh}>
                        <Text style={styles.textdk}>Đăng ký</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.huong6}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity >
                        <Text style={styles.textDn}>Đăng nhập</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    huong: { borderRadius: 7, elevation: 3, width: 320, height: 55, marginHorizontal: 15, marginVertical: 5, backgroundColor: '#fff', paddingLeft: 20 },
    huong2: { marginTop: 17, marginLeft: 15 },
    container: { width: '100%', height: 896, backgroundColor: '#fff' },
    huong3: { justifyContent: 'center', alignItems: 'center' },
    textttkm: { fontSize: 20, fontWeight: "500", color: '#005aa9' },
    huong4: { justifyContent: 'center', alignItems: 'center', },
    huong5: { justifyContent: 'center', alignItems: 'center', marginTop: 40 },
    boxxanh: { backgroundColor: '#005aa9', width: 326, height: 52, borderRadius: 7, alignItems: 'center', justifyContent: 'center' },
    textdk: { fontSize: 16, fontWeight: '500', color: '#fff' },
    huong6: { justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    text: { fontSize: 16, fontWeight: '400', color: '#8b8787' },
    textDn: { fontSize: 16, fontWeight: '400', color: '#005aa9', marginLeft: 5 },
    placeholderText: {
        marginRight: 10,
        color: "gray",
    },
})

export default DangKy