import { useState } from 'react';

export function useLocalStorage(key, defaultValue) {
    // on first use of useLocalStorage this func will evaluate default value
    const [value, setValue] = useState(() => {
        const localStorageData = localStorage.getItem(key);

        return localStorageData ? JSON.parse(localStorageData) : defaultValue;
    });

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));

        setValue(newValue);
    };

    return [
        value,
        setLocalStorageValue,
    ];
};