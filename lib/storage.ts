import AsyncStorage from '@react-native-async-storage/async-storage';

interface Store {
  key: string;
  value: string;
}

const storeData = async ({key, value}: Store) => {
    try {
      const newKey =key.toString()
      await AsyncStorage.setItem(newKey, value);
    } catch (e) {
      throw e
    }
}

const storeObjectData = async ({key, value}: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      throw e
    }
  };

const getData = async (key: any): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error(`Could not get data with key ${key}`);
    }
};

const getObjectData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
      throw new Error(`Could not get data with key ${key}`);
    }
  };

export { storeData, storeObjectData, getData, getObjectData };