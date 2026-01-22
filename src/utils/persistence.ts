type Persistence = {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
};

// Use localStorage as fallback
const persistentStorage = (typeof window !== 'undefined' && (window as any).persistentStorage) || localStorage;

export const persistence: Persistence = {
  setItem(key, value) {
    return Promise.resolve(persistentStorage.setItem(key, value));
  },
  getItem(key) {
    return Promise.resolve(persistentStorage.getItem(key));
  },
  removeItem(key) {
    return Promise.resolve(persistentStorage.removeItem(key));
  },
  clear() {
    return Promise.resolve(persistentStorage.clear());
  },
};