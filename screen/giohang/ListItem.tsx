import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { PanGestureHandler, PanGestureHandlerProps,PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { deleteSp } from "../../Realm/realm";
import { DetailSp } from "../FetchApi/StoreData";


interface ListItemProps
    extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
    item: any;
    onIncrement: (product_id: string) => void;
    onDecrement: (product_id: string) => void;
    onSelect: (product_id: string) => void;
    isSelected: boolean;
    onDelete: (product_id: string) => void;
    onNavigate: () => void;
    
}

const ListItem: React.FC<ListItemProps> = ({
    item,
    onIncrement,
    onDecrement,
    onSelect,
    isSelected,
    onDelete,
    onNavigate,
    simultaneousHandlers
}) => {
    const [productData, setProductData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const result = await DetailSp(item.product_id);
            if (result) {
                const products = result.data;
                setProductData(products);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {

            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const productID = item.product_id;
    const translateX = useSharedValue(0);
    const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
     
        onActive: (event, ) => {
            translateX.value = event.translationX;
        },
        onEnd: (event,) => {
            if (translateX.value <= -320) {
                runOnJS(onDelete)(productID);
            } else {
                translateX.value = withSpring(0);
            }
        },
    });
    const animatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateX.value,
            [0, -320],
            [1, 0],
            Extrapolate.CLAMP
        )
        return {
            transform: [{ translateX: translateX.value }],
            opacity: opacity

        };
    });


    
    const price = parseFloat(productData.price);
    const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    return (
        <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={gestureHandler}>
            <Animated.View >
                <Animated.View style={styles.deleteButtonContainer}>
                    <TouchableOpacity onPress={() => onDelete(item.product_id)}>
                        <Animated.View style={styles.deleteButton}>
                            <Image source={require("../../imgcart/thungrac.png")} />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.container, animatedStyle]}>
                    <TouchableOpacity onPress={onNavigate}>
                        <Animated.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Animated.View style={styles.checkboxContainer} >
                                <TouchableOpacity onPress={() => onSelect(item.product_id)}>
                                    <Animated.View
                                        style={[
                                            styles.checkbox,
                                            {
                                                backgroundColor: isSelected ? "#005aa9" : "transparent",
                                            },
                                        ]}
                                    >
                                        {isSelected && (
                                            <Image
                                                source={require("../../imgcart/chon.png")}
                                                style={styles.checkboxIcon} />
                                        )}
                                    </Animated.View>
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={styles.itemContainer}>
                                <Animated.View style={styles.imageContainer}>
                                    {isLoading ? (
                                        <ActivityIndicator size="large" color="#005aa9" />
                                    ) : (
                                        <Image source={{ uri: productData?.img_1 }} style={styles.itemImage} />
                                    )}
                                </Animated.View>
                                <Animated.View style={styles.itemInfoContainer}>
                                    <Text style={styles.itemName}>
                                        {isLoading ? 'Loading...' : productData ? productData.product_name : ''}
                                    </Text>
                                    <Text style={styles.itemPrice}>
                                        {isLoading ? '' : productData ? formattedPrice : ''}
                                    </Text>
                                </Animated.View>
                                <Animated.View style={styles.quantityContainer}>
                                    <TouchableOpacity onPress={() => onDecrement(item.product_id)}>
                                        <Animated.View style={styles.quantityButton}>
                                            <Text style={styles.quantityText}>-</Text>
                                        </Animated.View>
                                    </TouchableOpacity>
                                    <Animated.View style={styles.quantityDisplay}>
                                        <Text style={styles.quantityText}>{item.soluong}</Text>
                                    </Animated.View>
                                    <TouchableOpacity onPress={() => onIncrement(item.product_id)}>
                                        <View style={styles.quantityButton}>
                                            <Text style={styles.quantityText}>+</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>
                            </Animated.View>
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 15,


    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
        borderWidth: 0.5,
        height: 90,
        width: '100%',
        backgroundColor: '#fff',
        marginLeft: 5,

    },
    checkboxContainer: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderColor: "#c2c2c2",
        borderWidth: 1,

    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: "center"
    },
    checkboxIcon: {
        width: 16,
        height: 16,

    },
    imageContainer: {
        marginLeft: 15,
        
    },
    itemImage: {
        width: 64,
        height: 64,
    },
    itemInfoContainer: {
        marginLeft: 10,
        flex: 1,
    },
    itemName: {
        fontSize: 13,
        fontWeight: "500",
        color: "#000",
       
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "500",
        color: "#005aa9",
        marginTop: 10,
    },
    quantityContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#005aa9",
        width: 60,
        height: 22,
        position: "absolute",
        right: 20,
        bottom: 10,
        borderRadius: 25,
    },
    quantityButton: {
        marginHorizontal: 5,
    },
    quantityDisplay: {
        marginHorizontal: 5,
    },
    quantityText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#fff",
    },
    deleteButtonContainer: {
        position: "absolute",
        right: 30,
        bottom: 45,
    },
    deleteButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        // Set a background color for the delete button
    },

});

export default ListItem;