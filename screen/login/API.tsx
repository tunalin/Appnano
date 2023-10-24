import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = () => {
  const [apiK, setApiK] = useState('');
  const [apid1, setapid1] = useState([])
  const [mainDomain, setMainDomain] = useState('');
  

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append('app_name', 'khttest');

      const response = await axios.post('https://init.sees.vn/appconfig_v2/api/init?apikey=l0913lkjlkLKDKSAPPlCONFIGS', formData);

      const apiData = response.data;
 
      if (apiData) {
        await AsyncStorage.setItem('apiK', apiData.data.apikey);
        await AsyncStorage.setItem('mainDomain', apiData.data.main_domain);

        // const apiString = JSON.stringify(apiData)
        setApiK(apiData.data.apikey);
        // setapid1(apiData)
        setMainDomain(apiData.data.main_domain)
        // console.log(apiK)
        console.log(JSON.stringify(apid1))
      } else {
        console.log('false');
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
    }
  };

  useEffect(() => {
    const loadDataFromStorage = async () => {
      try {
        // Lấy dữ liệu từ AsyncStorage
        const savedApiK = await AsyncStorage.getItem('apiK');
        const savedMainDomain = await AsyncStorage.getItem('mainDomain');
        

        if (savedApiK && savedMainDomain) {
          setApiK(savedApiK);
          setMainDomain(savedMainDomain);
          console.log('dữ liệu đã tạo')
        } else {
          // Nếu không có dữ liệu trong AsyncStorage, thì fetch từ API
          fetchData();
          console.log('tạo dữ liệu mới')
        }
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu từ AsyncStorage:', error);
      }
    };

    loadDataFromStorage();
  }, []);

 
}



export default API;
