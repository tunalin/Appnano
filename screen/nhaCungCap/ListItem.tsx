import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewToken } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type ListItemProps = {
  item: {
    id: string;
    hinh: any;
    ten: string;
    noidung: string;
    soluong: string;
    tp: string;
  };
  viewableItems: Animated.SharedValue<ViewToken[]>;
};

const ListItem: React.FC<ListItemProps> = ({ item, viewableItems }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value.find(
        (viewableItem) => viewableItem.item.id === item.id
      )
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, [viewableItems, item]);

  return (
    <Animated.View style={[styles.view, rStyle]}>
      <TouchableOpacity>
        <View style={styles.top}>
          <Image source={item.hinh} style={styles.img} />
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Text style={styles.text}>{item.ten}</Text>
              <Text style={styles.text1}>{item.noidung}</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text2}>{item.soluong}</Text>
              <Text style={styles.text3}>{item.tp}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderRadius: 7,
    borderColor: '#c2c2c2',
    borderWidth: 1,
    height: 106,
    width: 365,
    paddingVertical: 5,
    margin: 11,
    backgroundColor: 'pink',
  },
  top: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  view1: {
    flexDirection: 'column',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  img: { width: 64, height: 60, borderRadius: 100 },
  view2: { width: 240, height: 32 },
  text: { color: '#000', fontSize: 16, fontWeight: '500', bottom: 15 },
  text1: { fontWeight: '300', color: '#000', fontSize: 13, bottom: 10 },
  view3: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: 273, height: 32 },
  text2: { color: '#005aa9', fontSize: 13, fontWeight: '300' },
  text3: { color: '#000', fontSize: 13, fontWeight: '300' },
});

export default ListItem;
