import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTask, deletetask, addToCart } from '../../Realm/realm';
import realmData from '../../Realm/dataRealm';
import { DataTong } from '../DATASanPham/DataTong';


const addSP = realmData.objects('CartItem')

const Timkiem = ({ navigation }: any) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchHistory, setSearchHistory] = useState<Realm.Results<Realm.Object & { id: number; name: string }>>();
    const [searchResults, setSearchResults] = useState<any[]>([]);


    useEffect(() => {
        // Define your event handler function
        const handleDataUpdate = () => {
            const dataFromRealm: any = realmData.objects('historySearch');
            setSearchHistory(dataFromRealm);
        };

        // Add the event listener to your emitter
        realmData.addListener('change', handleDataUpdate);

        // Call your initial data update
        handleDataUpdate();

        // Clean up the listener when the component unmounts
        return () => {
            // Remove the event listener
            realmData.removeListener('change', handleDataUpdate);
        };
    }, []);

    const handleSearch = () => {
        // Thêm từ khóa tìm kiếm vào Realm
        addTask(searchKeyword)
            .then(() => {
                // Sau khi thêm dữ liệu vào Realm, lấy lại dữ liệu từ Realm để hiển thị lịch sử tìm kiếm
                const dataFromRealm: any = realmData.objects('historySearch');

                // Đảo ngược mảng để đảm bảo mục mới nhất sẽ hiển thị ở đầu
                setSearchHistory(dataFromRealm.slice().reverse());

                const results = DataTong.filter(item => item.ten.toLowerCase().includes(searchKeyword.toLowerCase()));
                setSearchResults(results);
            })
            .catch(error => {
                console.error("Lỗi khi thêm dữ liệu vào Realm:", error);
            });
    }

    const handleDelete = (idToDelete: number) => {
        // Xóa mục khỏi Realm khi người dùng nhấn vào hình dauX.png
        deletetask(idToDelete)
            .then(() => {
                // Sau khi xóa dữ liệu từ Realm, cập nhật lại danh sách lịch sử tìm kiếm
                const dataFromRealm: any = realmData.objects('historySearch');
                setSearchHistory(dataFromRealm);
            })
            .catch(error => {
                console.error("Lỗi khi xóa dữ liệu từ Realm:", error);
            });
    }

    const [isProductAdded, setIsProductAdded] = useState(false);
    
    const renderSP = ({ item }: any) => {


        const handleAddToCart = () => {
            const existingCartItem: any = addSP.filtered(`id == '${item.id}'`)[0]
            if (existingCartItem) {
                realmData.write(() => {
                    existingCartItem.soluong += 1
                    console.log("kiem tra", addSP)
                })
            } else {
                addToCart(item.id, 1, item.ten, item.gia)
                console.log('ok', item)
            }
            setIsProductAdded(true);
            setTimeout(() => {
                setIsProductAdded(false);
            }, 2000);

        };
        return (

            <View style={{ width: 183, height: 260, borderRadius: 7, elevation: 6, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginHorizontal: 7, borderWidth: 0.3, marginTop: 15 }}>
                <Image source={item.hinh}
                    style={{ width: 131, height: 112, marginTop: 20 }} />
                <View style={{}}>
                    <View style={{ height: 70 }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", color: '#005aa9' }}>{item.ten}</Text>
                    </View>

                    <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.ma}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.gia}</Text>
                        <Text style={{ fontSize: 13, fontWeight: "500", color: '#005aa9' }}>{item.sogia}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.hoa}</Text>
                        <Text style={{ fontSize: 13, fontWeight: "500", color: '#19a538' }}>{item.sohoa}</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={handleAddToCart}>
                    <View style={{ borderWidth: 1, borderRadius: 100, height: 25, width: 25, alignItems: 'center', backgroundColor: '#000', marginLeft: 150, bottom: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>


        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Image source={require('../../imgcart/back.png')} style={{ width: 20 }} />
                </TouchableOpacity>

                <Text style={styles.text}>Tìm kiếm</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../../img/Vector_cart.png')} />
                </TouchableOpacity>

            </View>

            <View style={styles.boxsearch}>
                <View style={styles.flexboxsearch}>
                    <TextInput
                        onChangeText={(text) => setSearchKeyword(text)}
                        placeholder="Bạn cần tìm gì?"
                        style={{ fontSize: 16, fontWeight: "400", color: '#000' }}
                    />
                    <TouchableOpacity onPress={handleSearch}>
                        <Image
                            source={require("../../img/ei_search.png")}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>

                </View>



            </View>
            
            <ScrollView>
                <Text style={styles.text1}>Đã tìm gần đây</Text>

                <View style={{ width: '100%' }}>

                    <FlatList
                        data={searchHistory?.slice(0, 3)}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.boxSanpham}>
                                <Text style={styles.textSp}>{item.name}</Text>
                                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                                    <Image source={require('../../imgcart/dauX.png')} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                            </View>
                        )}
                        scrollEnabled={false}
                    />


                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    
                    <Text style={styles.text1}>Các kết quả tương ứng</Text>
                    <FlatList
                        data={searchResults}
                        keyExtractor={(item) => item.id}
                        renderItem={renderSP}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        scrollEnabled={false}
                    />
                </View>

            </ScrollView>

            <View style={isProductAdded ? styles.successMessage : { display: 'none' }}>
                {isProductAdded && (
                    <Text style={styles.successMessageText}>Sản phẩm đã được thêm vào giỏ hàng</Text>
                )}
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
        width: 360,
        borderColor: '#c2c2c2',
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
        marginTop: 20,
        marginLeft: 15
    },
    boxSanpham: {
        width: 360,
        height: 46,
        backgroundColor: '#f6f6f6',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 7,
        marginTop: 15,
        flexDirection: 'row',
        marginLeft: 20
    },import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTask, deletetask, addToCart } from '../../Realm/realm';
import realmData from '../../Realm/dataRealm';
import { DataTong } from '../DATASanPham/DataTong';


const addSP = realmData.objects('CartItem')

const Timkiem = ({ navigation }: any) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchHistory, setSearchHistory] = useState<Realm.Results<Realm.Object & { id: number; name: string }>>();
    const [searchResults, setSearchResults] = useState<any[]>([]);


    useEffect(() => {
        // Define your event handler function
        const handleDataUpdate = () => {
            const dataFromRealm: any = realmData.objects('historySearch');
            setSearchHistory(dataFromRealm);
        };

        // Add the event listener to your emitter
        realmData.addListener('change', handleDataUpdate);

        // Call your initial data update
        handleDataUpdate();

        // Clean up the listener when the component unmounts
        return () => {
            // Remove the event listener
            realmData.removeListener('change', handleDataUpdate);
        };
    }, []);

    const handleSearch = () => {
        // Thêm từ khóa tìm kiếm vào Realm
        addTask(searchKeyword)
            .then(() => {
                // Sau khi thêm dữ liệu vào Realm, lấy lại dữ liệu từ Realm để hiển thị lịch sử tìm kiếm
                const dataFromRealm: any = realmData.objects('historySearch');

                // Đảo ngược mảng để đảm bảo mục mới nhất sẽ hiển thị ở đầu
                setSearchHistory(dataFromRealm.slice().reverse());

                const results = DataTong.filter(item => item.ten.toLowerCase().includes(searchKeyword.toLowerCase()));
                setSearchResults(results);
            })
            .catch(error => {
                console.error("Lỗi khi thêm dữ liệu vào Realm:", error);
            });
    }

    const handleDelete = (idToDelete: number) => {
        // Xóa mục khỏi Realm khi người dùng nhấn vào hình dauX.png
        deletetask(idToDelete)
            .then(() => {
                // Sau khi xóa dữ liệu từ Realm, cập nhật lại danh sách lịch sử tìm kiếm
                const dataFromRealm: any = realmData.objects('historySearch');
                setSearchHistory(dataFromRealm);
            })
            .catch(error => {
                console.error("Lỗi khi xóa dữ liệu từ Realm:", error);
            });
    }

    const [isProductAdded, setIsProductAdded] = useState(false);
    
    const renderSP = ({ item }: any) => {


        const handleAddToCart = () => {
            const existingCartItem: any = addSP.filtered(`id == '${item.id}'`)[0]
            if (existingCartItem) {
                realmData.write(() => {
                    existingCartItem.soluong += 1
                    console.log("kiem tra", addSP)
                })
            } else {
                addToCart(item.id, 1, item.ten, item.gia)
                console.log('ok', item)
            }
            setIsProductAdded(true);
            setTimeout(() => {
                setIsProductAdded(false);
            }, 2000);

        };
        return (

            <View style={{ width: 183, height: 260, borderRadius: 7, elevation: 6, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginHorizontal: 7, borderWidth: 0.3, marginTop: 15 }}>
                <Image source={item.hinh}
                    style={{ width: 131, height: 112, marginTop: 20 }} />
                <View style={{}}>
                    <View style={{ height: 70 }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", color: '#005aa9' }}>{item.ten}</Text>
                    </View>

                    <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.ma}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.gia}</Text>
                        <Text style={{ fontSize: 13, fontWeight: "500", color: '#005aa9' }}>{item.sogia}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.hoa}</Text>
                        <Text style={{ fontSize: 13, fontWeight: "500", color: '#19a538' }}>{item.sohoa}</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={handleAddToCart}>
                    <View style={{ borderWidth: 1, borderRadius: 100, height: 25, width: 25, alignItems: 'center', backgroundColor: '#000', marginLeft: 150, bottom: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>


        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Image source={require('../../imgcart/back.png')} style={{ width: 20 }} />
                </TouchableOpacity>

                <Text style={styles.text}>Tìm kiếm</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../../img/Vector_cart.png')} />
                </TouchableOpacity>

            </View>

            <View style={styles.boxsearch}>
                <View style={styles.flexboxsearch}>
                    <TextInput
                        onChangeText={(text) => setSearchKeyword(text)}
                        placeholder="Bạn cần tìm gì?"
                        style={{ fontSize: 16, fontWeight: "400", color: '#000' }}
                    />
                    <TouchableOpacity onPress={handleSearch}>
                        <Image
                            source={require("../../img/ei_search.png")}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>

                </View>



            </View>
            
            <ScrollView>
                <Text style={styles.text1}>Đã tìm gần đây</Text>

                <View style={{ width: '100%' }}>

                    <FlatList
                        data={searchHistory?.slice(0, 3)}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.boxSanpham}>
                                <Text style={styles.textSp}>{item.name}</Text>
                                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                                    <Image source={require('../../imgcart/dauX.png')} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                            </View>
                        )}
                        scrollEnabled={false}
                    />


                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    
                    <Text style={styles.text1}>Các kết quả tương ứng</Text>
                    <FlatList
                        data={searchResults}
                        keyExtractor={(item) => item.id}
                        renderItem={renderSP}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        scrollEnabled={false}
                    />
                </View>

            </ScrollView>

            <View style={isProductAdded ? styles.successMessage : { display: 'none' }}>
                {isProductAdded && (
                    <Text style={styles.successMessageText}>Sản phẩm đã được thêm vào giỏ hàng</Text>
                )}
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
        width: 360,
        borderColor: '#c2c2c2',
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
        marginTop: 20,
        marginLeft: 15
    },
    boxSanpham: {
        width: 360,
        height: 46,
        backgroundColor: '#f6f6f6',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 7,
        marginTop: 15,
        flexDirection: 'row',
        marginLeft: 20
    },
    textSp: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000'
    },
    successMessage: {
        backgroundColor: '#4CAF50',
        padding: 10,
        alignItems: 'center',
        width: 300,
        height: 100,
        justifyContent:'center',
        
        borderRadius: 15,
        position: 'absolute',
        left: 55,
        top: 300
    },
    successMessageText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default Timkiem
    textSp: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000'
    },
    successMessage: {
        backgroundColor: '#4CAF50',
        padding: 10,
        alignItems: 'center',
        width: 300,
        height: 100,
        justifyContent:'center',
        
        borderRadius: 15,
        position: 'absolute',
        left: 55,
        top: 300
    },
    successMessageText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default Timkiem