import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, ScrollView } from "react-native";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Easing, Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductList, fetchApiData } from "../FetchApi/StoreData";



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



const PlaceholderText = "Bạn cần tìm gì ?";
const PlaceholderDelay = 10;

const HomeKho = ({ navigation }: any) => {
  const [apiK, setApiK] = useState('');
  const [apid1, setapid1] = useState([])
  const [mainDomain, setMainDomain] = useState('');
  const [category, setcategory] = useState<any>([])
  const [sanpham, setsanpham] = useState<any>(1)
  const [spmoi, setspmoi] = useState([])
  const [bannerData, setbannerData] = useState([])

  

  const fetchProductList = async () => {
    const product = await ProductList(1);
    const respon = product.data.l
    setsanpham(respon)

  }

  const fetchBanner = async () => {

    const banner = await ProductList(2);
    const responData = banner.data.theme

    const sanPhamMoiData = responData.filter((item: any) => item.id === "52");
    setcategory(responData)
    setspmoi(sanPhamMoiData)


    const bannerItem = responData.find((item: any) => item.id === "253");

    if (bannerItem) {
      const slideList = bannerItem.slide_list;
      // console.log(JSON.stringify(slideList));
      setbannerData(slideList)
    } else {
      console.log("Không tìm thấy dữ liệu cho id 253");
    }
  };


  const fetchData = async () => {
    try {
      const apiData = await fetchApiData();
      if (apiData && apiData.data) {
        await AsyncStorage.setItem('apiK', apiData.data.apikey);
        await AsyncStorage.setItem('mainDomain', apiData.data.main_domain);
        setApiK(apiData.data.apikey);
        setMainDomain(apiData.data.main_domain);
        console.log(JSON.stringify(apid1));
      } else {
        console.log('API data not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadDataFromStorage = async () => {
    try {

      const savedApiK = await AsyncStorage.getItem('apiK');
      const savedMainDomain = await AsyncStorage.getItem('mainDomain');
      if (savedApiK && savedMainDomain) {
        setApiK(savedApiK);
        setMainDomain(savedMainDomain);
        console.log('dữ liệu đã tạo')
        fetchBanner();
        fetchProductList();
      } else {

        await fetchData();
        console.log('tạo dữ liệu mới')
        fetchBanner();
        fetchProductList();
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ AsyncStorage:', error);
    }
  };
  useEffect(() => {
    loadDataFromStorage();

  }, []);
  const flatListRef1: any = useRef(null);
  const flatListRef2: any = useRef(null)
  const [imagePosition1, setImagePosition1] = useState(0);
  const [imagePosition2, setImagePosition2] = useState(0);
  const [activeDotIndex1, setactiveDotIndex1] = useState(0);
  const [activeDotIndex2, setactiveDotIndex2] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const scrollY = useSharedValue(0);
  const SEARCH_BAR_WIDTH = 320;
  const translateX = useSharedValue(0);
  const [searchBarVisible, setSearchBarVisible] = useState(true);
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 160;
    if (offsetY > threshold && searchBarVisible) {
      setSearchBarVisible(false);
    } else if (offsetY <= threshold && !searchBarVisible) {
      setSearchBarVisible(true);
    }
    scrollY.value = offsetY;
  };
  const gestureHandler = useAnimatedScrollHandler({
    onScroll: (event: any) => {
      translateX.value = event.translationX;

    }
  });
  const searchBarStyle = useAnimatedStyle(() => {
    const translatex = withTiming(searchBarVisible ? 0 : -SEARCH_BAR_WIDTH);
    const opacity = withTiming(searchBarVisible ? 1 : 0);
    return {
      transform: [{ translateX: translatex }],
      opacity: opacity
    };
  });
  const iconStyle = useAnimatedStyle(() => {
    const threshold = 160; // Ngưỡng để kiểm tra khi nên di chuyển biểu tượng

    // Nếu người dùng vuốt lên, chỉ thay đổi giá trị translateX
    const translateX = scrollY.value >= threshold ? -SEARCH_BAR_WIDTH : 0;

    return {
      transform: [{ translateY: 0 }, { translateX }],
    };
  });

  const styleCart = useAnimatedStyle(() => {
    const cartX = scrollY.value <= 160 ? 0 : -280; // Di chuyển ngay khi người dùng cuộn
    const cartY = interpolate(
      scrollY.value,
      [0, SEARCH_BAR_WIDTH],
      [0, 80],
      Extrapolate.CLAMP
    );

    return {
      transform: [withTiming({ translateX: cartX }), withTiming({ translateY: cartY })],
    };
  });



  useEffect(() => {
    if (bannerData.length > 0) {
      const time = setInterval(() => {
        const nextPosition1 = (imagePosition1 + 1) % bannerData.length;
        setImagePosition1(nextPosition1);
        setactiveDotIndex1(nextPosition1);
          flatListRef1.current.scrollToIndex({ index: nextPosition1 });
      }, 3000);
  
      return () => clearInterval(time);
    }
  }, [imagePosition1, bannerData]);



  const renderDot1 = () => {
    return bannerData.map((dot, index) => {
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

  // const renderDot2 = () => {
  //   return spmoi.map((dot, index) => {
  //     const isActive = index === activeDotIndex2;
  //     return (
  //       <View
  //         key={index}
  //         style={{
  //           backgroundColor: isActive ? '#005aa9' : '#D9D9D9',
  //           width: isActive ? 10 : 7,
  //           height: isActive ? 10 : 7,
  //           borderRadius: 5, marginHorizontal: 3,
  //           marginTop: 10,
  //         }}
  //       >
  //       </View>
  //     )
  //   })
  // }
  const renderImg = ({ item, index }: any) => {

    return (
      <View >
        <Image
          style={{
            height: 164,
            marginRight: 15,
            borderRadius: 7,
            width: 382,
            marginLeft: 15,
          }}
          source={{ uri: item.banner }}
        />
      </View>
    )
  }

  const renderHinh = ({ item, index }: any) => {
    return (
      <View style={{ marginHorizontal: 11, paddingVertical: 10 }}>
        <Image source={item.hinh}
          style={{ width: 183, height: 153 }} />
      </View>
    )
  }
  const renderSP = ({ item, index }: any) => {
    const price = parseFloat(item.price);
    const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    return (
      <View style={{ width: 183, height: 240, borderRadius: 7, elevation: 4, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginHorizontal: 12, borderWidth: 0.3, paddingVertical: 20, marginTop: 20 }}>
        <Image source={{ uri: item.img_1 }} style={{ width: 131, height: 112 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: '#005aa9' }}>
            <Text>
              {item.product_name.length > 20
                ? item.product_name.slice(0, 20) + '...'
                : item.product_name}
            </Text>
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.ma}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>Giá bán: </Text>
            <Text style={{ fontSize: 13, fontWeight: "500", color: '#005aa9' }}>{formattedPrice}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>Hoa hồng: </Text>
            <Text style={{ fontSize: 13, fontWeight: "500", color: '#19a538' }}>{item.unit_import}</Text>
          </View>
        </View>
      </View>
    );
  }

  const renderSpMF = ({ item, index }: any) => {
    const price = parseFloat(item.price);
    const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    return (
      <View style={{ width: 183, height: 240, borderRadius: 7, elevation: 4, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginHorizontal: 12, borderWidth: 0.3, paddingVertical: 20, marginTop: 20 }}>
        <Image source={{ uri: item.img_1 }} style={{ width: 131, height: 112 }} />
        <Text style={{ fontSize: 16, fontWeight: "500", color: '#005aa9' }}>
          <Text>
            {item.product_name.length > 20
              ? item.product_name.slice(0, 20) + '...'
              : item.product_name}
          </Text>
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>{item.code}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>Giá bán: </Text>
          <Text style={{ fontSize: 13, fontWeight: "500", color: '#005aa9' }}>{formattedPrice}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 13, fontWeight: "400", color: '#8b8787' }}>Hoa hồng: </Text>
          <Text style={{ fontSize: 13, fontWeight: "500", color: '#19a538' }}>{item.point}</Text>
        </View>
      </View>
    )

  }

  const renderSpMoi = ({ item, index }: any) => {
    return (
      <View>
        <FlatList
          ref={flatListRef2}
          data={item.product_1_list}
          keyExtractor={(item) => item.product_id}
          renderItem={renderSpMF}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  const renderCateGory1 = ({ item, index }: any) => {

    return (
      <View style={{ height: 90, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
        <Image source={{ uri: item.icon }} style={{ width: 50, height: 50 }} />
        <Text style={{ color: 'black' }}>{item.name}</Text>
      </View>
    )
  }

  const renderIndex = ({ item, index }: any) => {
    return (
      <View style={{ width: '90%', backgroundColor: '#d8d1d1', marginLeft: 20, borderRadius: 7 }}>
        <FlatList
          data={item.category_1_list}
          keyExtractor={(item, index) => item.id}
          renderItem={renderCateGory1}
          style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 15, }}
        />
      </View>
    )
  }

  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");
  const animatePlaceholder = (index: any) => {
    if (index <= PlaceholderText.length) {
      setDisplayedPlaceholder(PlaceholderText.substring(0, index));
      setTimeout(() => {
        animatePlaceholder(index + 1);
      }, PlaceholderDelay);
    } else {
      // Khi chữ xuất hiện hết, đợi một khoảng thời gian và sau đó ẩn nó đi
      setTimeout(() => {
        hidePlaceholder(PlaceholderText.length);
      }, 1000); // Đợi 1 giây trước khi ẩn
    }
  };

  const hidePlaceholder = (index: any) => {
    if (index >= 0) {
      setDisplayedPlaceholder(PlaceholderText.substring(0, index));
      setTimeout(() => {
        hidePlaceholder(index - 1);
      }, PlaceholderDelay);
    } else {
      // Khi chữ đã được ẩn hết, bắt đầu lại vòng lặp
      animatePlaceholder(0);
    }
  };

  useEffect(() => {
    animatePlaceholder(0);
  }, []);



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.View style={[styles.header]}>
          <Image source={require('../../img/Rectangle-2.png')} style={styles.logo} />
          <Animated.View style={[
            styles.searchContainer1,
            searchBarStyle,
          ]}>
            <Animated.ScrollView onScroll={gestureHandler}>
              <Animated.View style={styles.viewthanhtimkiem}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                  <TextInput
                    onChangeText={(text) => setSearchKeyword(text)}
                    placeholder={displayedPlaceholder}
                    style={[{ fontSize: 16, fontWeight: "400", color: '#c2c2c2' }]}
                  />
                </View>
              </Animated.View>
            </Animated.ScrollView>
          </Animated.View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Animated.Image source={require('../../img/cart20regular.png')}
              style={[styles.cartIcon, styleCart]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('timkiem')}>
            <View>
              <Animated.Image
                source={require("../../img/ei_search.png")}
                style={[styles.searchIcon, iconStyle]}
              />
            </View>
          </TouchableOpacity>
          <Animated.Image source={require('../../img/Rectangle-313.png')}
            style={[styles.img1, iconStyle]} />
        </Animated.View>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.hinhnenxanh}>
            <FlatList
              ref={flatListRef1}
              data={bannerData}
              keyExtractor={(item: any, index: any) => index}
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
          <View>
            <FlatList
              data={category}
              keyExtractor={(item, index) => item.id}
              renderItem={renderIndex}
              scrollEnabled={false}
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
          <Image source={require('../../img/Rectangle-369.png')} style={styles.banner10} blurRadius={60} />
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
              data={spmoi}
              keyExtractor={(item: any, index) => item.id}
              renderItem={renderSpMoi}
              scrollEnabled={false}
            />
            {/* <View style={styles.hopdot2}>
              {renderDot2()}
            </View> */}
          </View>
          <View style={styles.viewgycb}>
            <Text style={styles.text4}>GỢI Ý CHO BẠN</Text>
            <Text style={styles.textxtc}>Xem tất cả</Text>
          </View>
          <View >
            <FlatList
              data={sanpham}
              keyExtractor={(item, index) => item.product_id}
              renderItem={renderSP}
              scrollEnabled={false}
              numColumns={2}

            />
          </View>
        </Animated.ScrollView>
      </View>
    </GestureHandlerRootView>
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
  img1: {
    width: 23,
    height: 23,
    position: 'absolute',
    right: 35,
    top: 125,
    padding: 10
  },
  logo: {
    width: 138,
    height: 51,
    top: 40,
  },
  cartIcon: {
    zIndex: 2,
    bottom: 103,
    left: 140,
    position: 'absolute',


  },

  searchContainer1: {
    width: 320,
    height: 46,
    borderWidth: 0.5,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginVertical: 40,
    flexDirection: 'row',
    right: 20,
    top: 20
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
    backgroundColor: '#FFF',
    borderRadius: 7,
    position: 'absolute',
    bottom: 30,
    left: 110

  },
  viewthanhtimkiem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,

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
    marginLeft: 15
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
  },
  expandedSearch: {

  },
  collapsedSearch: {

  }
});

export default HomeKho