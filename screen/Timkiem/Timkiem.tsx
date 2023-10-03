import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'



const Timkiem = ({ navigation }: any) => {
    const [searchKeyword, setSearchKeyword] = useState("");

    
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Image source={require('../../imgcart/back.png')} style={{ width: 20 }} />
                </TouchableOpacity>

                <Text style={styles.text}>Tìm kiếm</Text>
                <Image source={require('../../img/Vector_cart.png')} />
            </View>

            <View style={styles.boxsearch}>
                <View style={styles.flexboxsearch}>
                    <TextInput
                        onChangeText={(text) => setSearchKeyword(text)}
                        placeholder="Bạn cần tìm gì?"
                        style={{ fontSize: 16, fontWeight: "400", color: '#000' }}
                    />
                    <TouchableOpacity>
                        <Image
                            source={require("../../img/ei_search.png")}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>

                </View>
                <Text style={styles.text1}>Đã tìm gần đây</Text>
                <View style={styles.boxSanpham}>
                    <View style={styles.flexboxsearch}>
                        <Text style={styles.textSp}>Auslac Lactoferrin (Giá Ưu Đãi)</Text>
                        <Image source={require('../../imgcart/dauX.png')} style={{ width: 20, height: 20 }} />
                    </View>
                </View>
                <View style={styles.boxSanpham}>
                    <View style={styles.flexboxsearch}>
                        <Text style={styles.textSp}>DLC Brazil Green Propolis</Text>
                        <Image source={require('../../imgcart/dauX.png')} style={{ width: 20, height: 20 }} />
                    </View>
                </View>
                <View style={styles.boxSanpham}>
                    <View style={styles.flexboxsearch}>
                        <Text style={styles.textSp}>DLC Diamond Lip Balm No.1</Text>
                        <Image source={require('../../imgcart/dauX.png')} style={{ width: 20, height: 20 }} />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#005aa9',

    },
    searchIcon: {
        width: 23,
        height: 23,

    },
    boxsearch: {
        marginTop: 25,
        marginLeft: 15,
        borderWidth: 0.5,
        borderRadius: 7,
        width: 360
        , height: 46,
        borderColor: '#c2c2c2'
    },
    flexboxsearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    text1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginTop: 20
    },
    boxSanpham: {
        width: 360,
        height: 46,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 15
    },
    textSp: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000'
    }
})

export default Timkiem