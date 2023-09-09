import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native';

const data = [
    {
        id: '1',
        phuong: 'Phường 01'
    },
    {
        id: '2',
        phuong: 'Phường 02'
    },
    {
        id: '3',
        phuong: 'Phường 03'
    },
    {
        id: '4',
        phuong: 'Phường 04'
    },
    {
        id: '5',
        phuong: 'Phường 05'
    },
    {
        id: '6',
        phuong: 'Phường 06'
    },
    {
        id: '7',
        phuong: 'Phường 07'
    },
    {
        id: '8',
        phuong: 'Phường 08'
    },
    {
        id: '9',
        phuong: 'Phường 09'
    },
    {
        id: '10',
        phuong: 'Phường 10'
    },
    {
        id: '11',
        phuong: 'Phường 11'
    },
    {
        id: '12',
        phuong: 'Phường 12'
    },

]

const DiaChiPX = ({ navigation }: any) => {

    const [selectedItems, setSelectedItems] = useState<string[]>([]);


    const renderItem = ({ item }: any) => {
        const isSelected = selectedItems.includes(item.id);

        const handleItemPress = () => {
            // If the item is already selected, do nothing
            if (isSelected) {
                return;
            }
    
            // Deselect any previously selected item
            setSelectedItems([item.id]);
    
            // You can perform other actions here if needed
        };
        return (
            <TouchableOpacity onPress={handleItemPress}>
                <View style={styles.view}>
                    <View style={styles.view1}>
                        <Text style={styles.text}>{item.phuong}</Text>
                        {isSelected && (
                            <Image source={require('../../imgtaikhoan/check.png')}
                                style={styles.img}
                            />
                        )}

                    </View>

                    <View style={styles.view2} />
                </View>
            </TouchableOpacity>
        )
    }




    const [selectedValue, setSelectedValue] = useState('first');


    const renderCustomRadio = (value: string, label: string) => {
        const isSelected = selectedValue === value;
        const buttonStyle = {
            backgroundColor: isSelected ? '#fff' : 'transparent',
            borderColor: isSelected ? '#005aa9' : 'transparent',
        };

        const textStyle = {
            color: isSelected ? '#000' : '#000',
        };



        return (
            <TouchableOpacity
                onPress={() => setSelectedValue(value)}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 8,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 4,
                    borderWidth: 0.5,
                    ...buttonStyle,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            borderWidth: 0.3,
                            borderColor: '#005aa9',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 8,
                            backgroundColor: '#005aa9'
                        }}
                    >
                        {isSelected && (
                            <Image source={require('../../imgtaikhoan/tickchon.png')}
                                style={{ width: 20, height: 20 }} />
                        )}
                    </View>
                    <Text style={{ fontSize: 13, fontWeight: '400', ...textStyle }}>{label}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('thongtinlienhe')}>
                    <Image source={require('../../imgtien/back.png')} style={{ width: 20 }} />
                </TouchableOpacity>
                <Text style={styles.text1}>Sửa địa chỉ</Text>
            </View>
            <View style={styles.view3}>
                <Text style={styles.text3}>Chọn khu vực</Text>

                {renderCustomRadio('first', 'Thành phố Hồ Chí Minh')}
                {renderCustomRadio('second', 'Quận Bình Thạnh')}
                {renderCustomRadio('third', 'Phường 11')}
            </View>

            <View style={styles.view4}>
                <Text style={styles.text3}>Phường/Xã</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem} 
                
                />
                
        </View>


    );
};

const styles=StyleSheet.create({
    container:{ flex: 1, width: 414, height: 896, backgroundColor: '#fff' },
    view:{ marginTop: 15, marginLeft: 35 },
    view1:{ flexDirection: 'row', justifyContent: 'space-between' },
    text:{ fontSize: 13, fontWeight: '400', color: '#000' },
    img:{ width: 20, height: 20, marginRight: 20 },
    view2:{ width: 362, justifyContent: 'center', alignItems: 'center', borderColor: '#c4c4c4', borderWidth: 0.3, marginTop: 15 },
    top:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
    text1:{ fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 120 },
    view3:{ marginHorizontal: 20, marginTop: 30 },
    text3:{ fontSize: 16, fontWeight: '500', color: '#000' },
    view4:{ marginTop: 15, marginLeft: 20 }
})  

export default DiaChiPX