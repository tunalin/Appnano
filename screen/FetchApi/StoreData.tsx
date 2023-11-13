import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export async function fetchApiData() {
    try {
        const formData = new FormData();
        formData.append('app_name', 'khttest');
        const response = await axios.post('https://init.sees.vn/appconfig_v2/api/init?apikey=l0913lkjlkLKDKSAPPlCONFIGS', formData);
        const apiData = response.data;
        if (apiData) {
            return apiData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return null;
    }
}

export const loginUser = async (username: any, password: any, navigation: { navigate: (arg0: string) => void; }, setErrorMessage: (arg0: any) => void) => {
    try {
        const savedDomain = await AsyncStorage.getItem('mainDomain');
        const savedApiKeyClient = await AsyncStorage.getItem('apiK');

        if (savedDomain && savedApiKeyClient) {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            const response = await axios.post(`${savedDomain}/client_init/login?apikey=${savedApiKeyClient}`, formData);
            const responseData = response.data;

            if (responseData.message === "success") {
                await AsyncStorage.setItem('data', JSON.stringify(responseData));
                navigation.navigate('User');
            } else {
                console.log(responseData.message);
                setErrorMessage(responseData.message);
            }
        }
    } catch (error) {
        console.error('Lỗi khi thực hiện đăng nhập:', error);
    }
};

export async function ProductList(page: number) {
    const formData = new FormData();
    formData.append('page', page);
    formData.append('for_point', 0);

    try {
        const savedDomain = await AsyncStorage.getItem('mainDomain');
        const savedApiKeyClient = await AsyncStorage.getItem('apiK');
        if (savedDomain && savedApiKeyClient) {
            const response = await axios.post(`${savedDomain}/client_product/list_all?apikey=${savedApiKeyClient}`, formData);
            return response.data;
        } else {
            console.log('Không tìm thấy domain hoặc apiKeyClient trong AsyncStorage.');
            return null;
        }
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        return null;
    }
}

export async function DetailSp(id: any) {
    const formData = new FormData();
    formData.append('id', id)

    try {
        const savedDomain = await AsyncStorage.getItem('mainDomain');
        const savedApiKeyClient = await AsyncStorage.getItem('apiK');
        if (savedDomain && savedApiKeyClient) {
            const response = await axios.post(`${savedDomain}/client_product/detail?apikey=${savedApiKeyClient}`, formData);
            return response.data;
        } else {
            console.log('Không tìm thấy domain hoặc apiKeyClient trong AsyncStorage.');
            return null;
        }
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        return null;
    }
}

export default async function Provider() {
 
    try {
        const savedDomain = await AsyncStorage.getItem('mainDomain');
        const savedApiKeyClient = await AsyncStorage.getItem('apiK');
        if (savedDomain && savedApiKeyClient) {
            const response = await axios.post(`${savedDomain}/supplier_tab/list_all?apikey=${savedApiKeyClient}`);
            return response.data;
        } else {
            console.log('Không tìm thấy domain hoặc apiKeyClient trong AsyncStorage.');
            return null;
        }
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        return null;
    }
}
