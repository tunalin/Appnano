import { View, Text, Image, TouchableOpacity, FlatList,StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {
        id: '1',
        date: '23/09/2021 21:03',
        sotien: '5,000,000',
        rutve: 'Techcombank',
        trangthai: 'Hoàn thành'
    },
    {
        id: '2',
        date: '23/09/2021 21:03',
        sotien: '5,000,000',
        rutve: 'Techcombank',
        trangthai: 'Hoàn thành'
    },
    {
        id: '3',
        date: '23/09/2021 21:03',
        sotien: '5,000,000',
        rutve: 'Techcombank',
        trangthai: 'Hoàn thành'
    },
    {
        id: '4',
        date: '23/09/2021 21:03',
        sotien: '5,000,000',
        rutve: 'Techcombank',
        trangthai: 'Hoàn thành'
    }
];

const LsNTien = ({ navigation }: any) => {
    const render = ({ item }: any) => {
        return (
            <View style={styles.view1}>
                <View style={styles.top}>
                    <Image source={require('../../imgtaikhoan/naptien.png')} style={{ width: 29, height: 29 }} />
                    <View style={styles.view}>
                        <View style={styles.view2}>
                            <Text style={styles.text}>Ngày thực hiện:</Text>
                            <Text style={styles.text1}>{item.date}</Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={styles.text}>Số tiền:</Text>
                            <Text style={styles.text2}>{item.sotien}</Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={styles.text}>Rút về:</Text>
                            <Text style={styles.text1}>{item.rutve}</Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={styles.text}>Trạng thái:</Text>
                            <Text style={styles.text3}>{item.trangthai}</Text>
                        </View>
                    </View>
                </View>


            </View>


        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.top1}>
                <TouchableOpacity onPress={() => navigation.navigate('naptien')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.text4}>Lịch sử nạp tiền</Text>



            </View>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={render}
                />
            </View>

        </View>


    )
}

const styles=StyleSheet.create({
    view1:{ width: 382, height: 106, borderRadius: 7, borderWidth: 1, borderColor: '#c2c2c2', marginTop: 25, marginLeft: 15 },
    top:{ flexDirection: 'row', marginTop: 10, marginLeft: 15 },
    view:{ width: 350, height: 106, paddingHorizontal: 25, right: 5 },
    view2:{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 },
    text:{ fontSize: 13, fontWeight: '300', color: '#000' },
    text1:{ fontSize: 13, fontWeight: '400', color: '#000' },
    text2:{ fontSize: 13, fontWeight: '400', color: '#005aa9' },
    text3:{ fontSize: 13, fontWeight: '400', color: '#19A538' },
    container:{ width: 414, height: 896, backgroundColor: '#fff' },
    top1:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    text4:{ fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 110 }
})

export default LsNTien