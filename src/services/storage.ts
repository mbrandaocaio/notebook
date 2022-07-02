import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IReturn {
  id: string;
  title: string;
  note: string;
  date: string;
}

export const getItemStorage = async (): Promise<IReturn[] | []> => {
  try {
    const savedNotes = await AsyncStorage.getItem('notes');
    if (savedNotes) {
      const currentNotes = JSON.parse(savedNotes) as IReturn[];
      return currentNotes;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export const resetItemsStorage = async () => {
  await AsyncStorage.removeItem('notes');
};

export const setStorageItem = async (notesToSave: string) => {
  await AsyncStorage.setItem('notes', notesToSave);
};

export const deleteStorageItem = async (id: string) => {
  const response = await getItemStorage();
  const filter = response.filter(res => res.id !== id);
  await setStorageItem(JSON.stringify(filter));
};
