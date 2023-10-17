import React, { FC, useEffect } from "react";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import usePath from "../../hooks/usePath";
import Svg, { Path } from "react-native-svg";
import { SCREEN_WIDTH } from "../../constants/Screen";
import Animated, { runOnJS, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import TabItem from "./TabItem";
import { interpolatePath } from "react-native-redash";
import { getPathXCenter } from "../../utils/Path";
import AnimatedStyle from "./AnimatedStyle";



const AnimatedPath = Animated.createAnimatedComponent(Path);
const CustomBottomTab: FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    const { containerPath, curvedPaths, tHeight } = usePath();
    const circleXCoordinate = useSharedValue(0);
    const progress = useSharedValue(1);

    const handleMoveCircle = (currentPath: string) => {
        circleXCoordinate.value = getPathXCenter(currentPath);
    };

    const selectIcon = (routeName: string) => {
        switch (routeName) {
            case 'Home':
                return require('../../../imgvector/home.png');
            case 'Point':
                return require('../../../imgvector/xoaydola.png');
            case 'Provider':
                return require('../../../imgvector/the.png');
            case 'Order':
                return require('../../../imgvector/danhsach.png');
            case 'User':
                return require('../../../imgvector/account.png');
            default:
                return null
        }
    };
    const animatedProps = useAnimatedProps(() => {
        const currentPath = interpolatePath(
            progress.value,
            Array.from({ length: curvedPaths.length }, (_, index) => index + 1),
            curvedPaths,
        );
        runOnJS(handleMoveCircle)(currentPath);
        return {
            d: `${containerPath} ${currentPath}`,
        };
    });

    const handleTabPress = (index: number, tab: string) => {
        navigation.navigate(tab);
        progress.value = withTiming(index);
    };

    return (
        <View style={styles.tabBarContainer}>
            <Svg width={SCREEN_WIDTH} height={tHeight} >
                <AnimatedPath fill={'#005aa9'} animatedProps={animatedProps} />
            </Svg>
            <AnimatedStyle circleX={circleXCoordinate}/>
            <View
                style={[
                    styles.tabItemsContainer,
                    {
                        height: tHeight,
                    },
                ]}>
                {state.routes.map((route: { key: string | number; name: string; }, index: number) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel ? options.tabBarLabel : route.name;
                    return (
                        <TabItem
                            key={index.toString()}
                            label={label as string}
                            icon={selectIcon(route.name)}
                            activeIndex={state.index + 1}
                            index={index}
                            onTabPress={() => handleTabPress(index + 1, route.name)}
                        />
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
    },
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
    },
    tabBarLabel: {
        color: '#000',
    },
    tabItemsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
      },
});

export default CustomBottomTab;