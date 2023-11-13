import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTask, deletetask, addToCart, deleteAllHistory } from '../../Realm/realm';
import realmData from '../../Realm/dataRealm';
import LottieView from "lottie-react-native";
import Animated, {
    Easing,
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { ProductList } from '../FetchApi/StoreData';
import unorm from 'unorm';
import Notification from './Notification';
// const addSP = realmData.objects('CartItem')

const Timkiem = ({ navigation }: any) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchHistory, setSearchHistory] = useState<Realm.Results<Realm.Object & { id: number; name: string }>>();
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [allSearchResults, setAllSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const fetchData = async () => {
        if (loadingMore) {
            return;
        }
        setLoadingMore(true);
        try {
            const result = await ProductList(page);
            if (result) {
                const products = result.data.l;
                if (products.length > 0) {
                    setAllSearchResults((prevData) => [...prevData, ...products]);
                    setPage(page + 1);
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEndReached = () => {
        fetchData();
    };
    useEffect(() => {
        const handleDataUpdate = () => {
            const dataFromRealm: any = realmData.objects('historySearch');
            setSearchHistory(dataFromRealm);
        };
        realmData.addListener('change', handleDataUpdate);
        handleDataUpdate();
        return () => {
            realmData.removeListener('change', handleDataUpdate);
        };
    }, []);



    const handleSearch = () => {
        if (searchKeyword.trim() !== "") {
            addTask(searchKeyword)
            searchProduct(searchKeyword)
            setIsSearching(true);
        }
    }

    const searchProduct = (keyword: string) => {
        const normalizedKeyword = unorm.nfkd(keyword).replace(/[\u0300-\u036f]/g, '');
        const results = [];
        for (const dataItem of allSearchResults) {
            if (dataItem.product_name) {
                const normalizedProductName = unorm.nfkd(dataItem.product_name).replace(/[\u0300-\u036f]/g, '');
                if (normalizedProductName.toLowerCase().includes(normalizedKeyword.toLowerCase())) {
                    results.push(dataItem);
                }
            }
        }
        setSearchResults(results);
    };

    const handleDelete = (idToDelete: number) => {
        deletetask(idToDelete)
    }
    const handleDeleteAllHistory = () => {
        deleteAllHistory();
    }
    const showConfirmation = useSharedValue(0);
    const rStyle = useAnimatedStyle(() => {
        const hideNofi = interpolate(
            showConfirmation.value,
            [0, 1],
            [0, 1],
            Extrapolate.CLAMP
        )
        return {
            opacity: hideNofi,
        };
    });

    const renderSP = ({ item }: any) => {
        const handleAddToCart = () => {
            addToCart(item.product_id, item.product_name, price, 1).then(() => {
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 1000);
            });
        };
        const price = parseFloat(item.price);
        const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return (
            <TouchableOpacity
                style={{ width: 183, height: 260, borderRadius: 7, elevation: 6, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginHorizontal: 7, borderWidth: 0.3, marginTop: 15 }}
                onPress={() => {
                    navigation.navigate('Detail', { item });
                }}
            >
                <Image source={{ uri: item.img_1 }}
                    style={{ width: 131, height: 112, marginTop: 20 }} />
                <View style={{ height: 70 }}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: '#005aa9' }}>
                        <Text >
                            {item.product_name.length > 20
                                ? item.product_name.slice(0, 20) + '...'
                                : item.product_name}
                        </Text>
                    </Text>
                    <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.unique_id}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>Giá bán: </Text>
                        <Text style={{ fontSize: 13, fontWeight: "500", color: '#005aa9' }}>{formattedPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>Hoa hồng:</Text>
                        <Text style={{ fontSize: 13, fontWeight: "500", color: '#19a538' }}>{item.for_point}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleAddToCart}>
                    <View style={{ borderWidth: 1, borderRadius: 100, height: 25, width: 25, alignItems: 'center', backgroundColor: '#000', marginLeft: 150, marginTop: 25 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>+</Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>

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
                        value={searchKeyword}
                        onChangeText={(text) => setSearchKeyword(text)}
                        placeholder="Bạn cần tìm gì?"
                        style={{ fontSize: 16, fontWeight: "400", color: '#000' }}
                    />
                    <TouchableOpacity onPress={() => {
                        handleSearch();

                    }}>
                        <Image
                            source={require("../../img/ei_search.png")}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {searchKeyword ? (
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 10 }}>
                            <Text style={styles.text1}>Đã tìm gần đây</Text>
                            <TouchableOpacity onPress={handleDeleteAllHistory}>
                                <Text style={{ fontSize: 15, fontWeight: '400', color: 'red' }}>Clear History</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%' }}>
                            <FlatList
                                data={searchHistory?.slice(0, 3)}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.boxSanpham}>
                                        <Text style={styles.textSp}>{item.name}</Text>
                                        <TouchableOpacity onPress={() => {
                                            handleDelete(item.id);
                                            setSearchResults([]);
                                        }}>
                                            <Image source={require('../../imgcart/dauX.png')} style={{ width: 20, height: 20 }} />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                scrollEnabled={false}
                            />
                        </View>
                    </View>
                ) : null}
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.text1}>Các kết quả tương ứng</Text>
                    {isSearching ? (
                        <FlatList
                            data={searchResults}
                            keyExtractor={(item) => item.product_id}
                            renderItem={renderSP}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            scrollEnabled={false}
                            onEndReached={handleEndReached}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={() => {
                                return loadingMore ? <ActivityIndicator size="large" color="#005aa9" /> : null;
                            }}
                        />
                    ) : (
                        <FlatList
                            data={allSearchResults}
                            keyExtractor={(item) => item.product_id}
                            renderItem={renderSP}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            scrollEnabled={false}
                            onEndReached={handleEndReached}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={() => {
                                return loadingMore ? <ActivityIndicator size="large" color="#005aa9" /> : null;
                            }}
                        />)}
                </View>
            </ScrollView>
            <Notification
                isVisible={showNotification}
                animationSource={require('../../asset/checkload.json')}
                onClose={() => setShowNotification(false)}
            />
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
        justifyContent: 'center',

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