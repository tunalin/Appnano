import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { deleteSp } from "../../Realm/realm";

interface ListItemProps {
    item: any; // Replace with the actual type of your cart item
    onIncrement: (id: string) => void;
    onDecrement: (id: string) => void;
    onSelect: (id: string) => void;
    isSelected: boolean;
    onDelete: (id: string) => void;
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
}) => {
    const translateX = useSharedValue(0);


    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = translateX.value;
        },
        onActive: (event, ctx) => {
            translateX.value = ctx.startX + event.translationX;
            // Set delete button visibility based on swipe direction

        },
        onEnd: (event,) => {
            if ( translateX.value <= -320) {
                runOnJS(onDelete)(item.id);
            }
            else {      // Not swiped far enough, animate back to the initial position
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
            opacity:opacity

        };
    });


    return (
        <View style={{}}>
            <View style={styles.deleteButtonContainer}>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Animated.View style={styles.deleteButton}>
                        <Image source={require("../../imgcart/thungrac.png")} />
                    </Animated.View>
                </TouchableOpacity>
            </View>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.container, animatedStyle]}>

                    <TouchableOpacity onPress={onNavigate}>
                        <View style={styles.itemContainer}>
                            <View style={styles.checkboxContainer}>
                                <TouchableOpacity onPress={() => onSelect(item.id)}>
                                    <View
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
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.imageContainer}>
                                <Image source={item.hinh} style={styles.itemImage} />
                            </View>
                            <View style={styles.itemInfoContainer}>
                                <Text style={styles.itemName}>{item.ten}</Text>
                                <Text style={styles.itemPrice}>{item.gia}</Text>
                            </View>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={() => onDecrement(item.id)}>
                                    <View style={styles.quantityButton}>
                                        <Text style={styles.quantityText}>-</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.quantityDisplay}>
                                    <Text style={styles.quantityText}>{item.soluong}</Text>
                                </View>
                                <TouchableOpacity onPress={() => onIncrement(item.id)}>
                                    <View style={styles.quantityButton}>
                                        <Text style={styles.quantityText}>+</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingVertical: 25,
        marginLeft: 15,
        
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
        borderWidth: 0.5,
        height:90,
        backgroundColor: '#fff'

    },
    checkboxContainer: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderColor: "#c2c2c2",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 11,
    },
    checkboxIcon: {
        width: 16,
        height: 16,
    },
    imageContainer: {
        marginLeft: 10,

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
        marginRight: 120,
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