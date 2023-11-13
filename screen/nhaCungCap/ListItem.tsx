import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewToken } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { index } from 'realm';

type ListItemProps = {
  supplierData:{
    id:any,
    logo:any,
    name:any,
    short_description:any,
    total_product:any,
    city:any,
  } 
  index: any
  viewableItems: Animated.SharedValue<ViewToken[]>;

};


const ListItem: React.FC<ListItemProps> = ({ index, supplierData, viewableItems }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
      .filter((supplierData) => supplierData.isViewable)
      .find((viewableItem) => viewableItem.item.id === supplierData.id)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 :0.6),
        },
      ],
    };
  }, [viewableItems, supplierData]);


  return (
    <Animated.View style={[styles.view, rStyle]}>
      <TouchableOpacity>
        <Animated.View style={[styles.top]}>
          {supplierData.logo ? (
            <Image source={{ uri: supplierData.logo }} style={styles.img} />
          ) : <Image source={require('../../img/hinhmauxam.png')} style={styles.img} />}
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Text style={styles.text}>{supplierData.name}</Text>
              <Text style={styles.text1}>{supplierData.short_description}</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text2}>{supplierData.total_product} Sản phẩm</Text>
              <Text style={styles.text3}>{supplierData.city}</Text>
            </View>
          </View>
        </Animated.View>
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