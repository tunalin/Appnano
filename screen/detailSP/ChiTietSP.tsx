import React, { useEffect, useRef, useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList, Animated } from "react-native";
import realmData from "../../Realm/dataRealm";
import { addToCart } from "../../Realm/realm";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DetailSp } from "../FetchApi/StoreData";
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel'

const addSP = realmData.objects('CartItem')

const ChiTietSp = () => {
    const viewCount = 5;
    const [isLoading, setIsLoading] = useState(true);
    const [snapDirection, setSnapDirection] = React.useState<"left" | "right">("left",);
    const [mode, setMode] = React.useState<any>("horizontal-stack");
    const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
    const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
    const [loop, setLoop] = React.useState<boolean>(true);
    const [autoPlay, setAutoPlay] = React.useState<boolean>(false);
    const [autoPlayReverse, setAutoPlayReverse] = React.useState<boolean>(false);

    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const [productDetails, setProductDetails] = useState<any>([]);
    const [imgUrls, setImgUrls] = useState<string[]>([]);

    const route = useRoute();
    const { item }: any = route.params;
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const [activeDotIndex1, setactiveDotIndex1] = useState(0);

    const handleAddToCart = () => {
        const existingCartItem: any = addSP.filtered(`product_id == '${item.product_id}'`)[0]
        if (existingCartItem) {
            realmData.write(() => {
                existingCartItem.soluong += quantity
            })
        } else {
            addToCart(item.product_id, item.product_name, item.price ,quantity)
            
        }
    };

    // console.log(productDetails)
    const fetchProductDetails = async () => {

        try {
            const productDetail = await DetailSp(item.product_id);
            // console.log(item.product_id)
            const productRespon = productDetail.data
            if (productRespon) {
                // console.log(productRespon)
                setProductDetails(productRespon)
                setImgUrls([productRespon.img_1, productRespon.img_2, productRespon.img_3, productRespon.img_4]);
            } else {
                console.log('No product details were retrieved.');
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    useEffect(() => {
        fetchProductDetails().then(() => {
            setIsLoading(false);
        });
    }, [item]);

    const carouselRef: any = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            const onScroll = (event: any) => {
                const slideSize = 200;
                const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
                setactiveDotIndex1(index);
            };

            carouselRef.current.onScroll = onScroll;
        }
    }, []);



    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.huong}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../imgdonhang/Arrow.png')} style={{ marginLeft: 16, width: 20 }} />
                    </TouchableOpacity>


                    <View style={styles.huong1}>
                        <Text style={styles.text}>Chi tiết sản phẩm</Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    {isLoading ? (
                        <View style={{ width: 200, height: 200, backgroundColor: 'gray', borderRadius: 7 }} />
                    ) : (

                        <Carousel
                            width={200}
                            pagingEnabled={pagingEnabled}
                            snapEnabled={snapEnabled}
                            mode={mode}
                            loop={loop}
                            autoPlay={autoPlay}
                            autoPlayReverse={autoPlayReverse}
                            modeConfig={{
                                snapDirection,
                                stackInterval: mode === "vertical-stack" ? 8 : 18,
                            }}
                            customConfig={() => ({ type: "positive", viewCount })}
                            data={imgUrls}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item }}
                                    style={styles.galleryImage}
                                />
                            )}

                        />


                    )}
                </View>

                <View style={styles.huong3}>
                    <View style={styles.huong4}>
                        <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
                            <View style={styles.dau}>
                                <Text style={styles.text1}>-</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.dau}>
                            <Text style={styles.text1}>{quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                            <View style={styles.dau}>
                                <Text style={styles.text1}>+</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{ width: 384, height: 45 }}>
                        <Text style={styles.text2}>{productDetails.product_name}</Text>
                    </View>
                    <View style={{ width: 99, height: 30 }}>
                        <Text style={styles.text3}>{productDetails.price}</Text>
                    </View>
                    <View style={{ width: 114, height: 30 }}>
                        <Text style={{ fontSize: 13, fontWeight: "300", color: '#000' }}>Giá nhà cung cấp</Text>
                    </View>
                    <View style={styles.view1} />
                    <View style={{ width: 175, height: 20, marginTop: 15 }}>
                        <Text style={styles.text2}>Thông tin sản phẩm</Text>
                    </View>
                    <View style={styles.huong5}>
                        <View style={styles.boxtext1}>
                            <Text style={styles.text4}>Giá nhà cung cấp:</Text>
                            <Text style={styles.text5}>800,000đ</Text>
                        </View>
                        <View style={styles.view4}>
                            <Text style={styles.text4}>Giá bán lẻ:</Text>
                            <Text style={styles.text6}>1,763,000đ</Text>
                        </View>
                        <View style={styles.view4}>
                            <Text style={styles.text4}>Hoa hồng:</Text>
                            <Text style={styles.text7}>500,000đ</Text>
                        </View>
                    </View>
                    <View style={styles.view3}>
                        <Text style={styles.text2}>Giới thiệu sản phẩm</Text>
                    </View>
                    <View style={styles.view2}>
                        {productDetails.description ? (
                            <RenderHtml source={{ html: productDetails.description }}
                                contentWidth={width}
                                ignoredDomTags={['iframe']}
                            />
                        ) : (
                            <Text>Loading description...</Text>
                        )}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Image source={require('../../imgdetail/cart.png')}
                            style={{ width: 55, height: 51 }} />
                        <TouchableOpacity onPress={handleAddToCart}>
                        <View style={styles.hopxanh}>
                            <View style={styles.huong6}>
                                <Text style={styles.text9}>Chọn mua</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: { width: '100%', backgroundColor: '#fff' },
    huong: { flexDirection: 'row', alignItems: 'center' },
    huong1: { flex: 1, alignItems: 'center', marginRight: 30, marginTop: 10 },
    text: { fontSize: 20, fontWeight: '500', color: '#005aa9' },
    huong2: { justifyContent: 'center', alignItems: 'center', marginTop: 15 },
    huong3: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    huong4: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#005aa9', width: 87, height: 38, flexDirection: 'row', borderRadius: 25 },
    dau: { justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 },
    text1: { fontSize: 17, fontWeight: "600", color: '#fff' },
    view: { flexDirection: 'column', padding: 20 },
    text2: { fontSize: 16, fontWeight: "500", color: '#000' },
    text3: { fontSize: 20, fontWeight: "500", color: '#005aa9' },
    view1: { borderBottomColor: '#c4c4c4', borderBottomWidth: 1, width: '95%', alignSelf: 'center' },
    huong5: { flexDirection: 'column', marginTop: 10 },
    boxtext1: { flexDirection: 'row', justifyContent: 'space-between' },
    text4: { fontSize: 13, fontWeight: "400", color: '#000' },
    text5: { fontSize: 13, fontWeight: "500", color: '#000' },
    text6: { fontSize: 13, fontWeight: "500", color: '#005aa9' },
    text7: { fontSize: 13, fontWeight: "500", color: '#0fa027' },
    view2: { width: 370, marginTop: 10 },
    view3: { width: 175, marginTop: 20 },
    view4: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    text8: { fontSize: 14, fontWeight: "400", color: '#000' },
    hopxanh: { backgroundColor: '#005aa9', width: 315, height: 52, borderRadius: 8, marginLeft: 10 },
    huong6: { justifyContent: 'center', alignItems: 'center', marginTop: 15 },
    text9: { fontSize: 16, fontWeight: "500", color: '#fff' },
    imageContainer: {
        flexDirection: 'row',
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    galleryImage: {
        width: 200,
        height: 200,
        alignItems: "center",
        borderRadius: 12,
        marginTop: 30
    },
    dotNavigation: {
        flexDirection: 'row',
        justifyContent: 'center',
    },


})

export default ChiTietSp