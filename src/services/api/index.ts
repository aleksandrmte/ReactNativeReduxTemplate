import AsyncStorage from "@react-native-community/async-storage";

class ApiService {
    getProfile = async () => {
        let profile = await AsyncStorage.getItem("");
        return profile;
    }
    
    login = async (userName: string, password: string) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        return res.json();
    }
}

export const apiService = new ApiService();

