import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const distributorData = [
    {
        id: '1',
        ten: 'Mai Công Bằng'
    },
    {
        id: '2',
        ten: 'Nguyễn Văn Nhi'
    },
    {
        id: '3',
        ten: 'Huỳnh Điền Huy'
    },
    {
        id: '4',
        ten: 'Lê Tự Hủy'
    },
    {
        id: '5',
        ten: 'Lê Thị Rắm'
    },
    {
        id: '6',
        ten: 'Triệu Gia Bảo'
    },
]

const salesData1 = [
    {
        id: '1',
        hinh: require('../../imgsale/nguoixanh.png'),
        goi: 'Doanh số cá nhân',
        diem: '366 PV'
    },
    {
        id: '2',
        hinh: require('../../imgsale/doinhomcam.png'),
        goi: 'Doanh số nhóm',
        diem: '139.31 PV'
    },
    {
        id: '3',
        hinh: require('../../imgsale/evang.png'),
        goi: 'Doanh số Tổng',
        diem: '505.31 PV'
    },
    {
        id: '4',
        hinh: require('../../imgsale/timdo.png'),
        goi: 'Doanh số tuyển dụng',
        diem: '100 PV'
    },
];

const saledata2 = [
    {
        id: '1',
        hinhuser: require('../../imgsale/sale1.png'),
        name: 'Nguyễn Thị Nguyệt',
        soid: '086184000239',
        point: '101.20 PV'
    },
    {
        id: '2',
        hinhuser: require('../../imgsale/sale2.png'),
        name: 'Lê Thị Bé Hai',
        soid: '341654149',
        point: '38.11 PV'
    },
    {
        id: '3',
        hinhuser: require('../../imgsale/sale3.png'),
        name: 'Nguyễn Văn Long',
        soid: '086184000239',
        point: '50.5 PV'
    },
    {
        id: '4',
        hinhuser: require('../../imgsale/sale4.png'),
        name: 'Lê Thị Na',
        soid: '086184000239',
        point: '33.3 PV'
    },
]


const NPPhoi = ({ navigation }: any) => {

    const [selectedText, setSelectedText] = useState('');
    const [numColumns, setNumColumns] = useState(3);
    const [flatListKey, setFlatListKey] = useState('');

    const changeNumColumns = (newNumColumns: number) => {
        setNumColumns(newNumColumns);
        // Change the key to force a re-render of the FlatList
        setFlatListKey(selectedText + newNumColumns);
    };


    const renderDistributorItem = ({ item }: any) => {
        return (
            <View style={styles.renderview}>
                <View style={styles.renderhuong}>
                    <Image source={require('../../imgtaikhoan/doinhomxanh.png')}
                        style={{ marginTop: 10, marginLeft: 15 }} />
                    <View style={styles.renderview2}>
                        <View style={{ flexDirection: 'column', marginRight: 170 }}>
                            <Text style={styles.rendertextten}>{item.ten}</Text>
                            <Text style={styles.rendertextsdt}>+84 123 123 123</Text>
                        </View>
                        <Image source={require('../../imgtaikhoan/vectorxanh.png')} />
                    </View>
                </View>
            </View>

        )
    }

    const renderSale1 = ({ item, index }: any) => {
        
        const textColors = ['#09355C', '#F56318', '#9FA811', '#A81811'];

        
        const textColor = textColors[index % textColors.length];
        return (
            <View style={{ padding: 8, }}>
                <View style={styles.rendersaleview}>
                    <View style={styles.rendersale1v}>
                        <Image source={item.hinh} />
                        <Text style={[styles.rendersaletextgoi, { color: textColor }]}>{item.goi}</Text>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: textColor }}>{item.diem}</Text>
                    </View>
                </View>
            </View>

        )
    }

    const renderSale2 = ({ item, index }: any) => {
        return (
            <View style={{ padding: 5 }}>
                <View style={styles.rendersale2v}>
                    <View style={styles.rendersale2v1}>
                        <Image source={item.hinhuser} />
                        <View style={styles.rendersalev3}>
                            <Text style={styles.rendersale2t}>{item.name}</Text>
                            <Text style={styles.rendersale2t1}>{item.soid}</Text>
                        </View>
                        <Text style={styles.point}>{item.point}</Text>
                    </View>
                </View>
            </View>


        )
    }

    const renderSelectedTab = () => {
        switch (selectedText) {
            case 'Nhà phân phối':
                return (
                    <FlatList
                        data={distributorData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderDistributorItem}
                        scrollEnabled={false}
                    />
                );
            case 'Doanh số':
                return (
                    <View>
                        <FlatList
                            data={salesData1}
                            keyExtractor={(item) => item.id}
                            renderItem={renderSale1}
                            //    numColumns={3}
                            //    scrollEnabled={false}
                            numColumns={numColumns}
                            key={flatListKey}
                        />
                        <View style={styles.view}>
                            <Text style={styles.view2}>CHI TIẾT DOANH SỐ</Text>
                            <View style={styles.huong}>
                                <Text style={styles.textt1}>Tầng 1</Text>
                                <Image source={require('../../imgsale/down.png')} />
                            </View>

                        </View>
                        <FlatList
                            data={saledata2}
                            keyExtractor={(item) => item.id}
                            renderItem={renderSale2}
                        />
                    </View>

                );
            case 'Lịch sử mua hàng':
                return (
                    <View >
                        <View style={styles.vls}>
                            <View style={styles.huong2}>
                                <Text style={styles.text1}>Nguyễn Thị Nguyệt</Text>
                            </View>

                            <View style={{ marginHorizontal:15 }}>
                                <View style={styles.huong3}>
                                    <Text style={styles.text}>086184000239</Text>
                                    <Text style={styles.point}>101.20 PV</Text>
                                </View>
                                <View style={styles.huong4}>
                                    <Text style={styles.text}>Mã đơn: 13u2498</Text>
                                    <Text style={styles.text2}>1.500.000đ</Text>
                                </View>
                                <Text style={styles.text}>01/11/2022 12:34</Text>
                            </View>
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('taikhoan')}>
                    <Image source={require('../../imgtien/back.png')}
                        style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.textdn}>Đội nhóm</Text>
            </View>
            <View style={styles.view3}>
                <View style={styles.huong5}>
                    <TouchableOpacity onPress={() => setSelectedText('Nhà phân phối')}>
                        <View style={{
                            width: 129,
                            height: 42,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: selectedText === 'Nhà phân phối' ? '#005aa9' : 'transparent',
                            borderRadius: selectedText === 'Nhà phân phối' ? 35 : 0
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500',
                                color: selectedText === 'Nhà phân phối' ? '#fff' : '#005aa9',
                            }}>Nhà phân phối</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedText('Doanh số')}>
                        <View style={{
                            width: 129,
                            height: 42,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: selectedText === 'Doanh số' ? '#005aa9' : 'transparent',
                            borderRadius: selectedText === 'Doanh số' ? 35 : 0
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500',
                                color: selectedText === 'Doanh số' ? '#fff' : '#005aa9',
                            }}>Doanh số</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedText('Lịch sử mua hàng')}>
                        <View style={{
                            width: 129,
                            height: 42,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: selectedText === 'Lịch sử mua hàng' ? '#005aa9' : 'transparent',
                            borderRadius: selectedText === 'Lịch sử mua hàng' ? 35 : 0
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500',
                                color: selectedText === 'Lịch sử mua hàng' ? '#fff' : '#005aa9',
                            }}>Lịch sử mua hàng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ width: 414, height: 800, marginTop: 20 }}>

                {renderSelectedTab()}

            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    renderview:{ width: 370, height: 75, borderRadius: 10, borderWidth: 0.3, borderColor: '#c2c2c2', marginHorizontal: 10, margin: 5 },
    renderhuong:{ flexDirection: 'row', justifyContent: 'space-around' },
    rendersale1v:{ flexDirection: 'column', alignItems: 'center', marginHorizontal: 20, marginTop: 20 },
    renderview2:{ alignItems: 'center', flexDirection: 'row', marginVertical: 5 },
    rendertextten:{ fontSize: 16, fontWeight: '500', color: '#000', padding: 5 },
    rendertextsdt:{ fontSize: 13, fontWeight: '500', color: '#BFBFBF', padding: 5 },
    rendersaleview:{ width: 116, height: 135, borderRadius: 15, elevation: 4, backgroundColor: '#fff' },
    rendersaletextgoi:{fontSize:12,fontWeight:'500',textAlign:'center',padding:5 },
    rendersale2v:{ width: 366, height: 64, borderRadius: 5, backgroundColor: '#fff', elevation: 3, padding: 5, marginHorizontal: 8, borderWidth: 0.3 },
    rendersale2v1:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20 },
    rendersalev3:{ alignItems: 'flex-start', justifyContent: 'flex-start', marginRight: 70 },
    rendersale2t:{ fontSize: 14, fontWeight: '500', color: '#000', padding: 5 },
    rendersale2t1:{ fontSize: 10, fontWeight: '400', color: '#8B8787', padding: 5 },
    point:{ fontSize: 14, fontWeight: '500', color: '#09355C' },
    view:{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginVertical: 15 },
    view2:{ fontSize: 15, fontWeight: '500', color: '#000' },
    huong:{ flexDirection: 'row', alignItems: 'center' },
    textt1:{ fontSize: 13, fontWeight: '400', color: '#005aa9' ,},
    vls:{ width: 382, height: 92, borderRadius: 5, backgroundColor: '#fff', elevation: 4, borderWidth: 0.3, marginHorizontal: 7, marginVertical: 7 },
    huong2:{marginHorizontal:15,marginVertical:5},
    text1:{ fontSize: 14, fontWeight: '500', color: '#000' },
    huong3:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    text:{ fontSize: 10, fontWeight: '400', color: '#8B8787', padding: 2 },
    huong4:{ flexDirection: 'row', justifyContent: 'space-between' },
    text2:{ fontSize: 10, fontWeight: '400', color: '#19A538', padding: 2 },
    container:{ width: 414, height: 896, backgroundColor: '#fff' },
    top:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    textdn:{ fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 130 },
    view3:{ width: 389, height: 42, backgroundColor: '#f1f1f1', marginHorizontal: 3, marginTop: 15, borderRadius: 35 },
    huong5:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    
})  

export default NPPhoi