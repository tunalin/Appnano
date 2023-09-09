import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {
        id: '1',
        ten: 'Mã NPP',
        thongtin: '331550479'
    },
    {
        id: '2',
        ten: 'Điện thoại',
        thongtin: '0348340989'
    },
    {
        id: '3',
        ten: 'Tên đăng nhập',
        thongtin: '331550479'
    },
    {
        id: '4',
        ten: 'Ngày sinh',
        thongtin: '13/03/2000'
    },
    {
        id: '5',
        ten: 'Họ và tên',
        thongtin: 'Nguyễn Thái Năng'
    },
    {
        id: '6',
        ten: 'Email',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '7',
        ten: 'CMND/CCCD/Hộ chiếu(Người nước ngoài)',
        thongtin: '4354645233'
    },
    {
        id: '8',
        ten: 'Tỉnh/ Thành',
        thongtin: 'Thành phố Hồ Chí Minh'
    },
    {
        id: '9',
        ten: 'GPLĐ',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '10',
        ten: 'Ngày cấp',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '11',
        ten: 'Ngày hiệu lực',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '12',
        ten: 'Nơi cấp',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '13',
        ten: 'Số hợp đồng',
        thongtin: '0'
    },
    {
        id: '14',
        ten: 'Giới tính',
        thongtin: 'Nam'
    },
    {
        id: '15',
        ten: 'Ngày sinh',
        thongtin: '331550479'
    },
    {
        id: '16',
        ten: 'Vị trí',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '17',
        ten: 'Số tài khoản',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '18',
        ten: 'Cấp bậc',
        thongtin: 'Emerald Manager'
    },
    {
        id: '19',
        ten: 'Ngân hàng',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '20',
        ten: 'Danh hiệu',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '21',
        ten: 'Chi nhánh',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '22',
        ten: 'Địa chỉ thuờng trú(hoặc đăng ký lưu trú đối với người nước ngoài)',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '23',
        ten: 'Mã số người bảo trợ',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '24',
        ten: 'Họ tên người bảo trợ',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '25',
        ten: 'Địa chỉ tạm trú(thuờng trú hoặc tạm trú trong trường hợp không cư trú tại nơi thường trú):',
        thongtin: 'Chưa có thông tin'
    },
    {
        id: '26',
        ten: 'Số hợp đồng người bảo trợ',
        thongtin: 'Chưa có thông tin'
    },
]

const renderData = ({ item, index }: any) => {
    return (
        <View style={{ padding: 8 }}>
            <View style={styles.viewrender}>
                <Text style={{ fontSize: 13, fontWeight: '500', color: '#000' }}>{item.ten}</Text>
                <View style={{ borderRadius: 7, borderWidth: 0.5, width: 350, height: 40, borderColor: '#C2C2C2', justifyContent: 'center', paddingLeft: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: '400', color: item.thongtin === 'Chưa có thông tin' ? '#C4C4C4' : '#000' }}>{item.thongtin}</Text>
                </View>
            </View>
        </View>
    );
};


const ChiTietTaiKhoan = ({ navigation }: any) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.viewback}>
                    <TouchableOpacity onPress={() => navigation.navigate('taikhoan')}>
                        <Image source={require('../../imgtaikhoan/back.png')}
                            style={styles.imgback} />
                    </TouchableOpacity>

                    <Text style={styles.textcttk}>Chi tiết tài khoản</Text>
                </View>
                <View style={styles.viewhinh}>

                    <ImageBackground
                        source={require('../../imgtaikhoan/hinhaccount.png')}
                        style={styles.hinh}>
                        <Image
                            source={require('../../imgtaikhoan/nenxam.png')}
                            style={styles.hinh2}
                        />
                        <Image
                            source={require('../../imgtaikhoan/mayanh.png')}
                            style={styles.hinh3}
                        />
                    </ImageBackground>

                    <Text style={styles.textten}>Nguyễn Thái Năng</Text>

                </View>
                <View style={{ height: 2230 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderData}

                        scrollEnabled={false}
                    />
                </View>
                <View style={styles.viewcapnhat}>
                    <Text style={styles.textcn}>Cập nhật</Text>
                </View>
            </View>
        </ScrollView >

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff'
    },
    viewback: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    textcttk: {
        fontSize: 20,
        fontWeight: '500',
        color: '#005aa9',
        marginLeft: 100
    },
    imgback: {
        width: 20,
        marginLeft: 15
    },
    viewhinh: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center'
    },
    hinh: {
        width: 78,
        height: 78,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hinh2: {
        width: 78,
        height: 78
    },
    hinh3: {
        width: 27,
        height: 27,
        position: 'absolute',
        top: 25.5,
        left: 25.5
    },
    textten: {
        fontSize: 20,
        fontWeight: '500',
        color: '#005aa9',
        paddingVertical: 10
    },
    viewcapnhat: {
        backgroundColor: '#005aa9',
        width: 326,
        height: 52,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 45,
        bottom: 7
    },
    textcn: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    },
    viewrender: {
        flexDirection: 'column',
        marginHorizontal: 30
    },
    
})

export default ChiTietTaiKhoan