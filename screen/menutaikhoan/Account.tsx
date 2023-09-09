import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, TouchableOpacity, FlatList,StyleSheet } from 'react-native'

const Account = ({ navigation }: any) => {
    const data = [
        {
            id: '1',
            hinh: require('../../imgtaikhoan/chiase.png'),
            ten: 'Chia sẻ app'
        },
        {
            id: '2',
            hinh: require('../../imgtaikhoan/caidat.png'),
            ten: 'Thiết lập bảo mật'
        },
        {
            id: '3',
            hinh: require('../../imgtaikhoan/nganhang.png'),
            ten: 'Tài khoản ngân hàng'
        },
        {
            id: '4',
            hinh: require('../../imgtaikhoan/location.png'),
            ten: 'Quản lý địa chỉ'
        },
        {
            id: '5',
            hinh: require('../../imgtaikhoan/nhom.png'),
            ten: 'Danh sách đội nhóm'
        },
        {
            id: '6',
            hinh: require('../../imgtaikhoan/baocao.png'),
            ten: 'Báo cáo doanh số'
        },
        {
            id: '7',
            hinh: require('../../imgtaikhoan/baocao.png'),
            ten: 'Báo cáo hoa hồng'
        },
    ]

    const data2 = [
        {
            id: '1',
            hinh: require('../../imgtaikhoan/quetma.png'),
            noidung: 'Quét mã'
        },
        {
            id: '2',
            screenName: 'naptien',
            hinh: require('../../imgtaikhoan/vitien.png'),
            noidung: 'Nạp tiền'
        },
        {
            id: '3',
            screenName: 'chuyentien',
            hinh: require('../../imgtaikhoan/chuyentien.png'),
            noidung: 'Chuyển tiền'
        },
        {
            id: '4',
            screenName: 'ruttien',
            hinh: require('../../imgtaikhoan/ruttien.png'),
            noidung: 'Rút tiền'
        },
    ]

    const renderData = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('danhsachnhom1')}>
                <View style={styles.view}>
                    <View style={styles.view1}>
                        <Image source={item.hinh}
                            style={styles.img} />
                        <Text style={styles.text}>{item.ten}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderData2 = ({ item, index }: any) => {
        return (
            <TouchableOpacity  onPress={() => navigation.navigate(item.screenName)}>
                <View style={{marginHorizontal:18}}>
                    <View style={styles.view2}>
                        <Image source={item.hinh}
                            style={styles.img1}
                        />
                        <Text style={styles.text1}>{item.noidung}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.view3}>
                    <View style={styles.view4}>
                        <Image source={require('../../imgtaikhoan/hinhaccount.png')} />
                        <TouchableOpacity onPress={() => navigation.navigate('chitiettaikhoan')}>
                            <View style={styles.view5}>
                                <Text style={styles.text2}>Nguyễn Thái Năng</Text>
                                <Text style={styles.text3}>331550479</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('thongtinkhachhang')}>
                            <Text style={styles.text4}>Xem hồ sơ</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View style={styles.view6}>
                <Text style={styles.text5}>Quản lí ví</Text>
            </View>
            <View style={styles.view7}>
                <View style={styles.view8}>
                    <View style={styles.view9}>
                        <Image source={require('../../imgtaikhoan/vimoney.png')}
                            style={styles.img} />
                        <Text style={styles.text6}>Ví tiền</Text>
                        <Text style={styles.text7}>15,000,000đ</Text>
                    </View>
                </View>
                <View style={styles.view10}>
                    <View style={styles.view9}>
                        <Image source={require('../../imgtaikhoan/vimoney.png')}
                            style={styles.img} />
                        <Text style={styles.text8}>Ví điểm</Text>
                        <Text style={styles.text7}>5,000,000 Ponit</Text>
                    </View>
                </View>
                <View style={styles.view11}>
                    <View style={{bottom:15}}>

                        <FlatList
                            data={data2}
                            keyExtractor={(item) => item.id}
                            renderItem={renderData2}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled={false}
                        />
                    </View>
                </View>
            </View>
            <View style={{ marginLeft: 15, }}>
                <Text style={styles.text5}>Bảng điều khiển</Text>
            </View>
            <View style={styles.view12}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderData}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    view:{ width: 381, borderRadius: 7, borderColor: '#fff', borderWidth: 1, backgroundColor: '#fff', elevation: 2, marginHorizontal: 15, marginVertical: 5 },
    view1:{ flexDirection: 'row', alignItems: 'center', height: 46, marginLeft: 15 },
    text:{ fontSize: 13, fontWeight: '400', fontFamily: 'montserrat', color: '#000', padding: 10 },
    img:{ width: 20, height: 20 },
    view2:{ alignItems: 'center', marginTop: 15 },
    img1:{ width: 35, height: 35, margin: 10 },
    text1:{ fontSize: 13, fontWeight: '400', fontFamily: 'montserrat', color: '#000' },
    container:{ width: '100%', backgroundColor: '#fff', flex: 1 },
    top:{ alignItems: 'center', justifyContent: 'center', marginTop: 50 },
    view3:{ backgroundColor: '#fff', width: '93%', borderRadius: 10, borderColor: '#c2c2c2', borderWidth: 0.8, height: 71 },
    view4:{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10 },
    view5:{ flexDirection: 'column', alignItems: 'flex-start', marginRight: 50 },
    text2:{ fontSize: 20, fontWeight: '500', fontFamily: 'Montserrat', color: '#005aa9', marginBottom: 2 },
    text3:{ fontSize: 16, fontWeight: '400', fontFamily: 'Montserrat', color: '#c2c2c2' },
    text4:{ fontSize: 13, fontWeight: '400', fontFamily: 'Montserrat', color: '#005aa9' },
    view6:{ width: '40%', marginTop: 15, marginLeft: 15 },
    text5:{ fontSize: 17, fontWeight: '500', fontFamily: 'Montserrat', color: '#000' },
    view7:{ alignItems: 'center', justifyContent: 'center', marginTop: 10 },
    view8:{ width: '93%', height: 72, backgroundColor: '#005aa9', borderRadius: 10, borderColor: '#fff', borderWidth: 3 },
    view9:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, height: '100%' },
    text6:{ fontSize: 13, fontWeight: '500', fontFamily: 'montserrat', color: '#fff', paddingRight: 200 },
    text7:{ fontSize: 13, fontWeight: '500', fontFamily: 'montserrat', color: '#fff' },
    view10:{ width: '93%', height: 72, backgroundColor: '#FCB813', borderRadius: 10, borderColor: '#fff', borderWidth: 3, marginVertical: -15 },
    text8:{ fontSize: 13, fontWeight: '500', fontFamily: 'montserrat', color: '#fff', paddingRight: 170 },
    view11:{ width: '93%', height: 100, backgroundColor: '#fff', borderRadius: 10, borderColor: '#fff', borderWidth: 3 },
    view12:{ justifyContent: 'center', alignItems: 'center', marginTop: 15, height: 939, flex: 1 }
})

export default Account