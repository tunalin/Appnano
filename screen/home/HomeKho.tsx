import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, PanResponder, FlatList, TextInput } from "react-native";






const img = [
  {
    id: '1',
    hinh: require('../../img/Rectangle-324.png')
  },
  {
    id: '2',
    hinh: require('../../img/Rectangle-324.png')
  },
  {
    id: '3',
    hinh: require('../../img/Rectangle-324.png')
  },
  {
    id: '4',
    hinh: require('../../img/Rectangle-324.png')
  }
]

const data = [
  {
    id: '1',
    img: require('../../img/Rectangle-377.png'),
    ten: 'TPCN'
  },
  {
    id: '2',
    img: require('../../img/Rectangle-378.png'),
    ten: 'Sữa'
  },
  {
    id: '3',
    img: require('../../img/Rectangle-379.png'),
    ten: 'Dưỡng da'
  },
  {
    id: '4',
    img: require('../../img/Rectangle-380.png'),
    ten: 'Chống nắng'
  },
]

const hinh = [
  {
    id: '1',
    hinh: require('../../img/brand-tender.png')
  },
  {
    id: '2',
    hinh: require('../../img/brand-pink.png')
  },
  {
    id: '3',
    hinh: require('../../img/night-cosmetic.png')
  },
  {
    id: '4',
    hinh: require('../../img/brand-name.png')
  },
]

const dataSP = [
  {
    id: '1',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },
  {
    id: '2',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },
  {
    id: '3',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },
  {
    id: '4',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },
  {
    id: '5',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },
  {
    id: '6',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },
  {
    id: '7',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },
  {
    id: '8',
    hinh: require('../../img/Rectangle-293.png'),
    ten: 'Auslac Lactoferrin (Giá Ưu Đãi)',
    ma: 'AUS01',
    gia: 'Giá bán: ',
    sogia: '1,080,000đ',
    hoa: 'Hoa hồng: ',
    sohoa: '380,000đ'
  },






]

const HomeKho = ({ navigation }: any) => {
  const flatListRef1: any = useRef(null);
  const flatListRef2: any = useRef(null)
  const [imagePosition1, setImagePosition1] = useState(0);
  const [imagePosition2, setImagePosition2] = useState(0);
  const [activeDotIndex1, setactiveDotIndex1] = useState(0);
  const [activeDotIndex2, setactiveDotIndex2] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");


  useEffect(() => {
    const time = setInterval(() => {
      const nextPosition1 = (imagePosition1 + 1) % img.length;
      const nextPosition2 = (imagePosition1 + 2) % img.length;
      setImagePosition2(nextPosition2)
      setactiveDotIndex2(nextPosition2)
      setImagePosition1(nextPosition1)
      setactiveDotIndex1(nextPosition1)
      flatListRef1.current.scrollToIndex({ index: nextPosition1 });
      flatListRef2.current.scrollToIndex({ index: nextPosition2 });
    }, 3000);
    return () => clearInterval(time);
  }, [imagePosition1, imagePosition2]);

 

  const renderDot1 = () => {
    return img.map((dot, index) => {
      const isActive = index === activeDotIndex1;
      return (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            width: isActive ? 10 : 7,
            height: isActive ? 10 : 7,
            borderRadius: 5, marginHorizontal: 5
          }}
        >

        </View>
      )
    })
  }
  const renderDot2 = () => {
    return dataSP.map((dot, index) => {
      const isActive = index === activeDotIndex2;
      return (
        <View
          key={index}
          style={{
            backgroundColor: isActive ? '#005aa9' : '#D9D9D9',
            width: isActive ? 10 : 7,
            height: isActive ? 10 : 7,
            borderRadius: 5, marginHorizontal: 3,
            marginTop: 10,

          }}
        >

        </View>
      )
    })
  }

  const renderImg = ({ item, index }: any) => {
    return (

      <View key={item.id}>
        <Image
          style={{
            height: 164,
            marginRight: 15,
            borderRadius: 7,
            width: 382,
            marginLeft: 7,

          }}
          source={item.hinh}
        />
      </View>
    )

  }

  const renderItem = ({ item, index }: any) => {
    return (

      <View style={{ width: 90, height: 90, borderRadius: 3, backgroundColor: '#f6f6f6',  justifyContent: 'space-around',marginHorizontal:4 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Image source={item.img}
            style={{ width: 41, height: 41 }} />
          <Text style={{ fontSize: 13, fontWeight: "400", color: '#000' }}>{item.ten}</Text>
        </View>
      </View>
    )
  }

  const renderHinh = ({ item, index }: any) => {
    return (
      <View style={{ marginHorizontal: 7, paddingVertical: 10 }}>
        <Image source={item.hinh}
          style={{ width: 183, height: 153 }} />
      </View>
    )
  }

  const renderSP = ({ item, index }: any) => {
    return (
      <View style={{ width: 183, height: 240, borderRadius: 7, elevation: 6, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginHorizontal: 7, borderWidth: 0.3 }}>
        <Image source={item.hinh}
          style={{ width: 131, height: 112 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: '#005aa9' }}>{item.ten}</Text>
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
      </View>
    )
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../img/Rectangle-2.png')}
          style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={require('../../img/cart20regular.png')}
            style={styles.cartIcon} />
        </TouchableOpacity>
       
          <View style={{ width: 320, height: 46, borderWidth: 0.5, borderRadius: 7, backgroundColor: '#fff', marginRight: 40, marginVertical: 20,flexDirection:'row' }}>
            <View style={styles.viewthanhtimkiem}>
            <View style={{flexDirection:"row",alignItems:'center'}}>
              <TextInput
                onChangeText={(text) => setSearchKeyword(text)}
                placeholder="Bạn cần tìm gì?"
                style={{fontSize:16,fontWeight:"400",color:'#c2c2c2'}}
              />
              <TouchableOpacity onPress={() =>navigation.navigate('timkiem')}>
                <Image
                  source={require("../../img/ei_search.png")}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
              
            </View>
            <Image source={require('../../img/Rectangle-313.png')} style={{ width: 23, height: 23 ,marginLeft:25}} />
          </View>
          </View>


      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hinhnenxanh}>
          <FlatList
            ref={flatListRef1}
            data={img}
            keyExtractor={(item) => item.id}
            renderItem={renderImg}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          />
          <View style={styles.hopdot}>
            {renderDot1()}
          </View>
        </View>
        <View style={styles.viewdanhmuc}>
          <Text style={styles.danhmuc}>DANH MỤC</Text>
          <Text style={styles.xemtatca}>Xem tất cả</Text>
        </View>
        <View >
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}

          />
        </View>
        <Text style={styles.texttopsanpham}>TOP SẢN PHẨM</Text>
        <View style={styles.dieuhuong3hop}>
          <View style={styles.hopdo}>
            <Image source={require('../../img/Rectangle-402.png')} style={styles.cup} />
            <Text style={styles.textTop1}>TOP</Text>
            <Text style={styles.text2}>BÁN CHẠY NHẤT</Text>
          </View>
          <View style={styles.hopxanh}>
            <Image source={require('../../img/Rectangle-402.png')} style={styles.cup} />
            <Text style={styles.text2}>TOP</Text>
            <Text style={styles.text3}>CHIẾT KHẤU CAO</Text>
          </View>
          <View style={{ width: 121, height: 96, borderRadius: 5, backgroundColor: '#F56318', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 }}>
            <Image source={require('../../img/Rectangle-402.png')} style={styles.cup} />
            <Text style={styles.textTop1}>TOP</Text>
            <Text style={styles.text2}>ĐƯỢC ĐỀ XUẤT</Text>
          </View>
        </View>
        <Text style={styles.textUdai}>ƯU ĐÃI ĐẶC BIỆT THÁNG NÀY</Text>
        <Image source={require('../../img/Rectangle-369.png')} style={styles.banner10} />
        <View>
          <FlatList
            data={hinh}
            keyExtractor={(item) => item.id}
            renderItem={renderHinh}
            numColumns={2}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.viewUdai}>
          <Text style={styles.textspudai}>SẢN PHẨM ƯU ĐÃI</Text>
          <Text style={styles.textxtc}>Xem tất cả</Text>
        </View>
        <View >
          <FlatList
            ref={flatListRef2}
            data={dataSP}
            keyExtractor={(item) => item.id}
            renderItem={renderSP}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}

          />
          <View style={styles.hopdot2}>
            {renderDot2()}
          </View>
        </View>
        <View style={styles.viewgycb}>
          <Text style={styles.text4}>GỢI Ý CHO BẠN</Text>
          <Text style={styles.textxtc}>Xem tất cả</Text>
        </View>
        <View >
          <FlatList
            data={dataSP}
            keyExtractor={(item) => item.id}
            renderItem={renderSP}
            scrollEnabled={false}
            horizontal
          />
        </View>
      </ScrollView>
    </View>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    backgroundColor: '#005aa9',
    alignItems: 'center',
  },
  logo: {
    width: 138,
    height: 51,
    top: 40,
  },
  cartIcon: {
    marginLeft: 330,
    bottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginBottom: 15,
  },
  searchInput: {
    width: 339,
    height: 46,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginRight: 15,
  },
  searchIcon: {
    width: 23,
    height: 23,
    marginLeft:160
  },
  viewthanhtimkiem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  text1: {
    fontSize: 16,
    fontWeight: "400",
    color: '#c2c2c2'
  },
  hinhnenxanh: {
    backgroundColor: '#005aa9'
  },
  hopdot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400
  },
  viewdanhmuc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  danhmuc: {
    fontSize: 16,
    fontWeight: "500",
    color: '#000'
  },
  xemtatca: {
    fontSize: 13,
    fontWeight: "500",
    color: '#005aa9'
  },
  texttopsanpham: {
    fontSize: 16,
    fontWeight: "500",
    color: '#000',
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  dieuhuong3hop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10
  },
  hopdo: {
    width: 121,
    height: 96,
    borderRadius: 5,
    backgroundColor: '#a81811',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15
  },
  cup: {
    width: 38,
    height: 33,
    marginVertical: 5
  },
  hopxanh: {
    width: 130,
    height: 104,
    borderRadius: 5,
    backgroundColor: '#09355C',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15
  },
  textTop1: {
    fontSize: 10,
    fontWeight: "500",
    color: '#fff'
  },
  text2: {
    fontSize: 11,
    fontWeight: "500",
    color: '#fff'
  },
  text3: {
    fontSize: 12,
    fontWeight: "600",
    color: '#fff'
  },
  textUdai: {
    fontSize: 16,
    fontWeight: "500",
    color: '#000',
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  banner10: {
    width: 382,
    height: 159,
    borderRadius: 5,
    marginLeft: 7
  },
  viewUdai: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  textspudai: {
    fontSize: 16,
    fontWeight: "500",
    color: '#000'
  },
  textxtc: {
    fontSize: 13,
    fontWeight: "500",
    color: '#005aa9'
  },
  hopdot2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400
  },
  viewgycb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  text4: {
    fontSize: 16,
    fontWeight: "500",
    color: '#000'
  }
});

export default HomeKho