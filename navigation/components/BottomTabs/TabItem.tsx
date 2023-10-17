import Feather from 'react-native-vector-icons/Feather';
import { getPathXCenterByIndex } from '../../utils/Path';

import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { FC, useEffect } from 'react';
import { Image, Pressable, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../constants/Screen';
import usePath from '../../hooks/usePath';


export type TabProps = {
  label: string;
  icon: any;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};
const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;

const TabItem: FC<TabProps> = ({
  label,
  icon,
  index,
  activeIndex,
  onTabPress,
}) => {
  const { curvedPaths } = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);


  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -31 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: iconPositionX - ICON_SIZE / 2 },
      ],
    };
  });
  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 100;
    return {
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: labelPosition - LABEL_WIDTH / 2 },
      ],
    };
  });
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? 'white' : 'rgba(128,128,128,0.8)',
  );

  //Adjust Icon color for this first render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming('');
    } else {
      iconColor.value = withTiming('');
    }
  }, [activeIndex]);


  return (
    <>
      <Animated.View style={[tabStyle]}>
        <TouchableOpacity
          testID={`tab${label}`}
          onPress={onTabPress}
        >
          <Animated.Image
            source={icon}
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </>
  );
};


export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: LABEL_WIDTH,
  },
  label: {
    color: '#fff',
    fontSize: 14,
  },
});