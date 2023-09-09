import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image ,StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper';

const DetailKH = ({ navigation }: any) => {
  const [checked, setChecked] = useState(false);

  const handleRadioButtonPress = () => {
    setChecked(!checked)
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('taikhoan')}>
          <Image source={require('../../imgtien/back.png')} style={{ width: 20 }} />
        </TouchableOpacity>
        <Text style={styles.text}>Thông tin khách hàng</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.text1}>Chị Mai</Text>
        <Text style={styles.text2}>Sửa</Text>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text3}>Số điện thoại</Text>
        <Text style={styles.text4}>+84839020007</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text5}>Địa chỉ giao hàng</Text>
      </View>

      <View style={styles.view3}>
        <RadioButton
          value="first"
          status={checked === true ? 'checked' : 'unchecked'}
          onPress={handleRadioButtonPress}
          color="#005aa9"
        />

      </View>

      <View style={styles.view4}>
        <View style={styles.view5}>
          <Text style={styles.text6}>120 Lê Văn Qưới</Text>
          <Text style={styles.text7}>Phường Bình Hưng Hòa A, Quận Bình Tân, Thành phố Hồ Chí Minh</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('thongtinlienhe')}>
          <Text style={styles.text8}>Sửa</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.view6} />
      <View >
        <View style={styles.view7}>
          <TouchableOpacity onPress={()=>navigation.navigate('themdiachi')}>
            <Image source={require('../../imgtaikhoan/them.png')}
              style={{ width: 20, height: 20 }} />
          </TouchableOpacity>

          <Text style={styles.text9}>Thêm địa chỉ khác</Text>
        </View>
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 },
  view:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, paddingHorizontal: 25 },
  view1:{ marginTop: 15, marginLeft: 15 },
  view2:{ marginTop: 15, marginLeft: 20 },
  view3:{ marginTop: 10, marginLeft: 12 },
  view4:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 30, bottom: 30 },
  view5:{ flexDirection: 'column', marginHorizontal: 20 },
  view6:{ width: 362, justifyContent: 'center', alignItems: 'center', borderColor: '#c4c4c4', borderWidth: 0.3, marginLeft: 20 },
  view7:{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginHorizontal: 15 },
  text:{ fontSize: 20, fontWeight: '500', color: '#005aa9', marginLeft: 70 },
  text1:{ fontSize: 20, fontWeight: '500', color: '#000' },
  text2:{ fontSize: 13, fontWeight: '500', color: '#005aa9' },
  text3:{ fontSize: 13, fontWeight: '400', color: '#000', padding: 5 },
  text4:{ fontSize: 16, fontWeight: '500', color: '#000', padding: 5 },
  text5:{ fontSize: 13, fontWeight: '400', color: '#000' },
  text6:{ fontSize: 16, fontWeight: '500', color: '#000' },
  text7:{ fontSize: 13, fontWeight: '400', color: '#000', marginTop: 10 },
  text8:{ fontSize: 13, fontWeight: '500', color: '#005aa9', marginBottom: 40 },
  text9:{ fontSize: 13, fontWeight: '500', color: '#005aa9', marginLeft: 15 }
})

export default DetailKH;
